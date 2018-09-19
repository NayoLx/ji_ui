// pages/my/Voucher/index.js
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
    this.getVoucher()
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

  /**
   * 券的数据
   */
  getVoucher: function() {
    var data = [{
      "id": 0,
      "value": 50,
      "title": "满100减50优惠券",
      "timeTitle": "2018.10.01-2018.10.31 有效",
      "HowUse": "单笔维修费满100元可用",
      "using": false,
      "timeOut": false
    }, {
        "id": 1,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": false,
        "timeOut": false
      }, {
        "id": 2,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": false,
        "timeOut": false
      }, {
        "id": 3,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": false,
        "timeOut": false
      }, {
        "id": 4,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": false,
        "timeOut": true
      }, {
        "id": 5,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": false,
        "timeOut": true
      },
      {
        "id": 6,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": true,
        "timeOut": true
      },
      {
        "id": 7,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": false,
        "timeOut": false
      },
      {
        "id": 8,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": true,
        "timeOut": false
      },
      {
        "id": 9,
        "value": 50,
        "title": "满100减50优惠券",
        "timeTitle": "2018.10.01-2018.10.31 有效",
        "HowUse": "单笔维修费满100元可用",
        "using": true,
        "timeOut": false
      },]

    this.setData({
      voucher: data
    })
  },
  /**
   * 获取点击到券的数据
   */
  getVoucherId: function(e) {
    var a = e.currentTarget.id
    console.log(a)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },


})