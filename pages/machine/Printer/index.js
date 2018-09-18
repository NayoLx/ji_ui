// pages/machine/Printer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [],
    curNav: 1,
    curIndex: 0,
    winWidth: 0,
    winHeight: 0,
    detailTitle:'',
    detailName:'',
  },

  //事件处理函数  
  switchRightTab: function(e) {  
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id
    var index = parseInt(e.target.dataset.index)
    // 把点击到的某一项，设为当前index  
    if (id) {
      this.setData({
        curNav: id,
        curIndex: index
      })
    }
    this.setData({
      detailTitle: this.data.cateItems[this.data.curIndex].Printername
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     this.getEquipment(options)
  },

  /**
   * 获取设备数据
   */
  getEquipment: function(options) {
    var self = this
    var data = [
      {
        Printerid: 1,
        Printername: "彩色激光打印机",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 2,
        Printername: "黑白激光打印机",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '三星',
          image: "../../../i/printer/01@2x.png"
        },
        {
          child_id: 2,
          name: '富士施乐',
          image: "../../../i/printer/02@2x.png"
        },
        {
          child_id: 3,
          name: '京瓷',
          image: "../../../i/printer/03@2x.png"
        },
        {
          child_id: 4,
          name: '惠普',
          image: "../../../i/printer/04@2x.png"
        },
        {
          child_id: 5,
          name: '兄弟',
          image: "../../../i/printer/05@2x.png"
        },
        {
          child_id: 6,
          name: '柯尼卡',
          image: "../../../i/printer/06@2x.png"
        },
        {
          child_id: 7,
          name: '京瓷',
          image: "../../../i/printer/03@2x.png"
        },
        {
          child_id: 8,
          name: '惠普',
          image: "../../../i/printer/04@2x.png"
        },
        {
          child_id: 9,
          name: '兄弟',
          image: "../../../i/printer/05@2x.png"
        },
        {
          child_id: 10,
          name: '柯尼卡',
          image: "../../../i/printer/06@2x.png"
        },
        {
          child_id: 61,
          name: '柯尼卡',
          image: "../../../i/printer/06@2x.png"
        },
        {
          child_id: 71,
          name: '京瓷',
          image: "../../../i/printer/03@2x.png"
        },
        {
          child_id: 81,
          name: '惠普',
          image: "../../../i/printer/04@2x.png"
        },
        {
          child_id: 91,
          name: '兄弟',
          image: "../../../i/printer/05@2x.png"
        },
        {
          child_id: 101,
          name: '柯尼卡',
          image: "../../../i/printer/06@2x.png"
        }
        ]
      },
      {
        Printerid: 3,
        Printername: "喷墨打印机",
        ishaveChild: true,
        children: [{
          child_id: 1,
          name: '三星',
          image: "../../../i/printer/01@2x.png"
        },
        {
          child_id: 2,
          name: '富士施乐',
          image: "../../../i/printer/02@2x.png"
        },
        {
          child_id: 3,
          name: '京瓷',
          image: "../../../i/printer/03@2x.png"
        },
        {
          child_id: 4,
          name: '惠普',
          image: "../../../i/printer/04@2x.png"
        }
        ]
      },
      {
        Printerid: 4,
        Printername: "针式打印机",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 5,
        Printername: "一体打印机",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 6,
        Printername: "一体机喷墨",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 7,
        Printername: "针式打印机",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 8,
        Printername: "一体打印机",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 9,
        Printername: "一体机喷墨",
        ishaveChild: false,
        children: []
      },
      {
        Printerid: 10,
        Printername: "一体机喷墨",
        ishaveChild: false,
        children: []
      }
    ]
    self.setData({
      cateItems: data
    })
  },
   
  onJump: function(e) {
    this.getListId(e)
    wx:wx.setStorageSync('repairDetail', ([this.data.detailTitle, this.data.detailName]))
    wx.navigateTo({
      url: '../repairtpl/index',
    })
  },

  getListId: function (e) {
    var a = e.currentTarget.id
    this.setData({
      detailName: this.data.cateItems[this.data.curIndex].children[a].name
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
  },

  
})
