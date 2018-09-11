// pages/order/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: '',
    winWidth: '',
    winHeight: '',
    longitude: '',
    latitude: '',
    markers: [{
        iconPath: "../../../i/icon/icon@2x.png",
        id: 0,
        latitude: 22.5408,
        longitude: 113.92841,
        width: 18,
        height: 30
      },
      {
        iconPath: "../../../i/icon/icon@2x.png",
        id: 1,
        latitude: 22.5309,
        longitude: 113.92940,
        width: 18,
        height: 30
      },
      {
        iconPath: "../../../i/icon/icon@2x.png",
        id: 2,
        latitude: 22.5405026,
        longitude: 113.934528362,
        width: 18,
        height: 30
      },
      {
        iconPath: "../../../i/icon/icon@2x.png",
        id: 3,
        latitude: 22.532323,
        longitude: 113.93664,
        width: 18,
        height: 30
      },
      {
        iconPath: "../../../i/icon/icon@2x.png",
        id: 4,
        latitude: 22.5250032,
        longitude: 113.930604215,
        width: 18,
        height: 30
      },
      {
        iconPath: "../../../i/icon/icon@2x.png",
        id: 5,
        latitude: 22.5350032,
        longitude: 113.920604215,
        width: 18,
        height: 30
      }
    ],
  },
  markertap(e) {
    console.log(e.markerId)
  },
  regionchange(e) {
    console.log(e.type)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

    var that = this
    console.log(that.data.location)
    wx.getSystemInfo({
        success: function(res) {
          that.setData({
            systemInfo: res,
            winWidth: res.windowWidth,
            winHeight: res.windowHeight
          })
          if (res.platform == "devtools") {
            console.log('PC')
          } else if (res.platform == "ios") {
            console.log('IOS')
          } else if (res.platform == "android") {
            console.log('android')
          }
          console.log(that.data.systemInfo)
        }
      }),
      wx.getLocation({
        success: function(res) {
          console.log(res)
          that.setData({
            hasLocation: true,
            longitude: res.longitude,
            latitude: res.latitude
          })
          console.log(that.data.longitude)
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  
})