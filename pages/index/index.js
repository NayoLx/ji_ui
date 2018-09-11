// pages/repair/index.js
Page({
  swiperChange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },

  /**
  * 页面的初始数据
  */

  data: {
    imgUrls: [
      '/i/icon/banner@2x.png',
      '/i/icon/banner@2x.png',
      '/i/icon/banner@2x.png'
    ],
    swiperIndex: 0
  },

  Printer:function(e){
    wx.navigateTo({
      url: '../machine/Printer/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  
})