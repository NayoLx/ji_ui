// pages/address/edit/edit.js

var toast = require("../../../lib/toast.js");
var check = require("../../../lib/utils.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    door: '',
    phone: '',
    name: '',
    add: '',
    address: [],
    edit_address: []
  },

  toChoose: function(e) {
    wx.navigateTo({
      url: '../choose/choose',
    })
  },
  /**
   * 获取inputd的值
   */
  onDoorinput: function(e) {
    this.setData({
      door: e.detail.value
    })
  },
  onPhoneinput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  onNameinput: function(e) {
    this.setData({
      name: e.detail.value
    })
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
    var that = this;
    //获取存储信息
    if (wx.getStorageSync('editadd') != '') {
      wx.getStorage({
        key: 'editadd',
        success: function (res) {
          // success
          that.setData({
            edit_address: res.data
          })
          console.log(that.data.edit_address)
        }
      })
    }

    if (wx.getStorageSync('address') != '') {
      wx.getStorage({
        key: 'address',
        success: function(res) {
          // success
          that.setData({
            address: res.data
          })
          console.log(that.data.address.location)
        }
      })
    }   
  },

  editAdd: function(e) {
        wx.removeStorageSync('address')
        wx.removeStorageSync('editadd')
        wx.removeStorageSync('newadd')
      }

})