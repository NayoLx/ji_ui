// pages/my/address/index.js
var toast = require("../../lib/toast.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: {},
    winWidth: '',
    winHeight: '',
    aa:'',
    allAdd: {
      address: [{
        addid: 0,
        checked: true,
        name: '张女士',
        phone: '18700006363',
        door: '东塔楼1701号',
        province: '广东省',
        city: '深圳市',
        district: '南山区',
        title: '科技软件园',
        detail_address: '广东省深圳南山市区科技软件园东塔楼1701号',
        location: {}
      },
      {
        addid: 1,
        checked: false,
        name: '张女士',
        phone: '18700006363',
        door: '东塔楼1702',
        province: '广东省',
        city: '深圳市',
        district: '南山区',
        title: '科技软件园',
        detail_address: '广东省深圳市南山区科技软件园东塔楼1702',
        location: {}
        },
        {
          addid: 2,
          checked: false,
          name: '张女士',
          phone: '18700006363',
          door: '东塔楼1702',
          province: '广东省',
          city: '深圳市',
          district: '南山区',
          title: '科技软件园',
          detail_address: '广东省深圳市南山区科技软件园东塔楼1702',
          location: {}
        },
        {
          addid: 3,
          checked: false,
          name: '张女士',
          phone: '18700006363',
          door: '东塔楼1702',
          province: '广东省',
          city: '深圳市',
          district: '南山区',
          title: '科技软件园',
          detail_address: '广东省深圳市南山区科技软件园东塔楼1702',
          location: {}
        }]
    }
  },

  toNewadd: function(e) {
    wx.navigateTo({
      url: 'new/new',
    })
  },

  /**
   * 编辑
   */
  onEdit:function(options){
    let addid = options.currentTarget.dataset.id
    console.log(addid)
    for(var i=0; i < this.data.allAdd.address.length; i++){
      if (this.data.allAdd.address[i].addid == addid){
        console.log('Yes')
        wx.setStorage({
          key: 'editadd',
          data: {
            name: this.data.allAdd.address[i].name,
            phone: this.data.allAdd.address[i].phone,
            door: this.data.allAdd.address[i].door,
            province: this.data.allAdd.address[i].province,
            city: this.data.allAdd.address[i].city,
            district: this.data.allAdd.address[i].district,
            title: this.data.allAdd.address[i].title,
            detail_address: this.data.allAdd.address[i].detail_address,
            location: this.data.allAdd.address[i].location
          }
        })
        wx.navigateTo({
          url: 'edit/edit',
        })
      }
      else {
        console.log('No')
      }
    }
  },
  /**
   * 删除
   */
  onDelete: function (options){
    wx.showModal({
      title: "提示",
      content: "是否删除地址",
      success: function (res) {
        if (res.confirm) {
          let addid = options.currentTarget.dataset.id
          console.log(addid)
        } else {
          console.log('弹框后点取消')
        }
      }
    })
  },
  /**
   * radio控件
   */
  onRadiobtn: function (e) {
    var items = this.data.allAdd;
    for (var i = 0; i < items.address.length; i++) {
      if (items.address[i].addid == this.data.aa) {
        for (var j = 0; j < items.address.length; j++) {
          if (items.address[j].checked && j != i) {
            items.address[j].checked = false;
          }
        }
        items.address[i].checked = !(items.address[i].checked);
        console.log("-----:", items.address)
      }
    }
    this.setData({
      allAdd: items
    });
  },
  onRadiochange: function (e) {
    this.data.aa = e.detail.value;
    console.log(this.data.aa)
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
    })
  },

})