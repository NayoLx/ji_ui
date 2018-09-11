// pages/address/new/new.js

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
    address: []
  },

  locat: function (e) {
    wx.navigateTo({
      url: '../choose/choose',
    })
  },
  /**
   * 获取inputd的值
   */
  onDoorinput: function (e) {
    this.setData({
      door: e.detail.value
    })
  },
  onPhoneinput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  onNameinput: function (e) {
    this.setData({
      name: e.detail.value
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
    var that = this;
    //获取存储信息
    wx.getStorage({
      key: 'address',
      success: function (res) {
        // success
        that.setData({
          address: res.data
        })
        console.log(that.data.address.location)
      }
    })

    if (wx.getStorageSync('editadd') != ''){
      var editadd = wx.getStorageSync('editadd')

    }
  },

  saveadd: function (e) {
    var a = wx.getStorageSync("address")
    if (a == '') {
      toast.show('地址未选择，我们找不到你的噢')
    }
    else if (this.data.door == '') {
      toast.show('门牌号为空，我们会迷路的噢')
    }
    else if (this.data.phone == '') {
      toast.show('联系号码为空，我们无法联系你噢')
    }
    else {
      if (check.isMobile(this.data.phone) == false) {
        toast.show('号码输入有误，请重新输入')
      }
      else if (this.data.name == '') {
        toast.show('姓名为空')
      }
      else {
        wx.setStorage({
          key: 'newadd',
          data: {
            name: this.data.name,
            phone: this.data.phone,
            door: this.data.door,
            province: this.data.address.province,
            city: this.data.address.city,
            district: this.data.address.district,
            title: this.data.address.title,
            detail_address: this.data.address.province + this.data.address.city + this.data.address.district + this.data.address.title + this.data.door,
            location: this.data.address.location,
          },
        })
        wx.removeStorageSync('address')
        wx.navigateBack({
          url:'../index/index'
        })
      }
    }
  }
})
