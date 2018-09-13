// pages/address/choose/choose.js
var util = require("../../../utils/util.js")
var QQMapWX = require('../../../lib/qqmap-wx-jssdk.js')
var demo = new QQMapWX({
  key: 'STRBZ-IEM6W-YAORO-RZPK3-J3ZNT-MGFVK' 
})
var formatLocation = util.formatLocation

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    currentCity: '',
    add: '',
    address: [],
    keyy: '',
    title: '',
    province: '',
    district: '',
    location: []
  },

  keywordInput:function(e){
    this.setData({
      keyword: e.detail.value
    })
    var that = this
    demo.getSuggestion({
      keyword: that.data.keyword,
      region: that.data.currentCity,
      success: function (res) {
        console.log(res)
        that.setData({
          address: res.data,
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {

      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
  },

  getLocation: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84',   
      success: function (res) {
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=AYNff63wk7QHgegapb4mfPc8sHGGZl5s&location=' + latitude + ',' + longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        console.log(res);
        var city = res.data.result.addressComponent.city;
        page.setData({ currentCity: city });
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      },

    })
  },

  setAddData:function(e){
    var id = e.currentTarget.id;
    this.setData({
      keyy: id
    })
    wx.setStorage({
      key: 'address',
      data: {
        add: this.data.address[this.data.keyy].address,
        title: this.data.address[this.data.keyy].title,
        location: this.data.address[this.data.keyy].location,
        province: this.data.address[this.data.keyy].province,
        city: this.data.address[this.data.keyy].city,
        district: this.data.address[this.data.keyy].district
      },
    }) 
      wx.navigateBack({
        url: '../index',
      }) 
  }
})