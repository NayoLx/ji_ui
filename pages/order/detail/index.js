// pages/order/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    processData: [{
        "id": 0,
        "name": '等待接单',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 1,
        "name": '等待上门',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 2,
        "name": '等待报价',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 3,
        "name": '确认报价',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 4,
        "name": '等待验收',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 5,
        "name": '等待支付',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 6,
        "name": '等待评价',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      },
      {
        "id": 7,
        "name": '订单已完成',
        "linecolor": '#dcdcdc',
        "icon": '../../../i/order/no_finish@2x.png'
      }
    ],
    orderDetail: []
  },
  

  // 获取订单的详情信息，并且根据订单状态更改step步骤属性
  getOrderDetail: function() {
    var data = [{
      "id": 0,
      "name": '惠普-喷墨打印机',
      "time": '2018-10-01 12.00',
      "images": '../../i/order/Order_pic@2x.png',
      "price": [],
      "state": {
        "waitReceipt": false,
        "waitEngineer": false,
        "bePrice": false,
        "truePrice":true,
        "waitReceive": false,
        "waitPay": false,
        "evaluate":false,
        "finish": false,
        "cancel": false
      }
    }]
    this.setData({
      orderDetail: data
    })
    // 更改对象属性
    if (this.data.orderDetail[0].state.waitReceipt == true) { 
      this.setData({
        ['processData[0].linecolor']: '#02A9F9',
        ['processData[0].icon']: '../../../i/order/finish@2x.png'
      })
     }  if (this.data.orderDetail[0].state.waitEngineer == true) {
      for (var i = 0; i <= 1; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
     }  if (this.data.orderDetail[0].state.bePrice == true) {
      for (let i = 0; i <= 2; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
      }  if (this.data.orderDetail[0].state.truePrice == true) {
      for (let i = 0; i <= 3; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
     } if (this.data.orderDetail[0].state.waitReceive == true) {
      for (let i = 0; i <= 4; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
     } if (this.data.orderDetail[0].state.waitPay == true) {
      for (let i = 0; i <= 5; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
     } if (this.data.orderDetail[0].state.evaluate == true) {
      for (let i = 0; i <= 6; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
     } if (this.data.orderDetail[0].state.finish == true) {
      for (let i = 0; i <= 7; i++) {
        this.data.processData[i].linecolor = '#02A9F9'
        this.data.processData[i].icon = '../../../i/order/finish@2x.png'
        this.setData({
          processData: this.data.processData
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOrderDetail()
  },
  
})