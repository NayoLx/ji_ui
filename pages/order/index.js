// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    myOrder: [],
    voucher: []
  },
  /**
   * 显示按钮
   */
  showSwiper() {
    this.setData({
      swiper: true,
    })
  },
  hideSwiper() {
    this.setData({
      swiper: false,
    })
  },

  bindChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /**
   * 点击tab切换
   */
  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getOrder()
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    console.log(this.data.winHeight)
  },

  onQuality: function() {
    wx.navigateTo({
      url: 'quality/index',
    })
  },

  onEvaluate: function() {
    wx.navigateTo({
      url: 'evaluate/index',
    })
  },

  /**
   * 提交报价
   */
  go: function() {
    this.setData({
      showModal: true
    })
  },
  /**
   * 关闭报价弹窗
   */
  close: function() {
    this.setData({
      showModal: false,
      showModal2: false,
      showModal3: false,
    })
  },
  /**
   * 拒绝报价
   */
  refuse: function() {
    this.setData({
      showModal: false,
    })
    this.setData({
      showModal2: true
    })
  },
  /**
   * 取消订单
   */
  refuseOrder: function(e) {
    var i = e.currentTarget.id 
    this.setData({
      showModal3: true
    })
  },

  getOrder: function() {
    var data = [{
        "id": 0,
        "name": '惠普-喷墨打印机',
        "time": '2018-10-01 12.00',
        "images": '../../i/order/Order_pic@2x.png',
        "price": [],
        "state": {
          "waitReceipt": true,
          "waitEngineer": false,
          "bePrice": false,
          "truePrice": false,
          "waitReceive": false,
          "waitPay": false,
          "evaluate": false,
          "finish": false,
          "cancel": false
        }

      },
      {
        "id": 1,
        "name": '惠普-喷墨打印机',
        "time": '2018-10-01 12.00',
        "images": '../../i/order/Order_pic@2x.png',
        "price": [],
        "state": {
          "waitReceipt": false,
          "waitEngineer": true,
          "bePrice": false,
          "truePrice": false,
          "waitReceive": false,
          "waitPay": false,
          "evaluate": false,
          "finish": false,
          "cancel": false
        }
      },
      {
        "id": 2,
        "name": '惠普-喷墨打印机',
        "time": '2018-10-01 12.00',
        "images": '../../i/order/Order_pic@2x.png',
        "price": 20,
        "state": {
          "waitReceipt": false,
          "waitEngineer": false,
          "bePrice": true,
          "truePrice": false,
          "waitReceive": false,
          "waitPay": false,
          "evaluate": false,
          "finish": false,
          "cancel": false
        }
      },
      {
        "id": 3,
        "name": '惠普-喷墨打印机',
        "time": '2018-10-01 12.00',
        "images": '../../i/order/Order_pic@2x.png',
        "price": '',
        "state": {
          "waitReceipt": false,
          "waitEngineer": false,
          "bePrice": false,
          "truePrice":false,
          "waitReceive": false,
          "waitPay": false,
          "evaluate": false,
          "finish": false,
          "cancel": true
        }
      },
      {
        "id": 4,
        "name": '惠普-喷墨打印机',
        "time": '2018-10-01 12.00',
        "images": '../../i/order/Order_pic@2x.png',
        "price": 20,
        "state": {
          "waitReceipt": false,
          "waitEngineer": false,
          "bePrice": false,
          "truePrice": false,
          "waitReceive": false,
          "waitPay": false,
          "evaluate": false,
          "finish": true,
          "cancel": false
        }
      }
    ]

    this.setData({
      myOrder: data
    })
  }
})