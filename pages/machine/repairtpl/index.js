// pages/machine/repairtpl/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    program: [],
    winWidth: 0,
    winHeight: 0,
    items: []
  },

  toChooseAdd: function(e) {
    wx.navigateTo({
      url: '../../address/index',
    })
  },
  
  downMore: function() {

  },

  upLoadImg: function(e) {
    var that = this
    wx.chooseImage({
      count: 5, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          src: res.tempFilePaths
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      } 
    })   
  },

  getProgram: function(options) {
    var data = [{
      "id": 0,
      "value": '缺粉',

    },
      {
        "id": 1,
        "value": '颜色淡',

      },
      {
        "id": 2,
        "value": '不清晰',

      },
      {
        "id": 3,
        "value": '模糊',

      },
      {
        "id": 4,
        "value": '全白',

      },
      {
        "id": 5,
        "value": '全黑',

      },
      {
        "id": 6,
        "value": '无法开机',

      },
      {
        "id": 7,
        "value": '卡纸',

      }
      ]
      this.setData({
        items: data
      })
  },

  go: function () {
    this.setData({
      showModal: true
    })
  },
  close: function() {
    this.setData({
      showModal: false
    })
  },
  
  //多选
  userCheck: function(e) {
    let index = e.currentTarget.dataset.id; //获取用户当前选中的索引值
    let checkBox = this.data.items;
    if (checkBox[index].checked) {
      this.data.items[index].checked = false;
    } else {
      this.data.items[index].checked = true;
    }
    this.setData({
      items: this.data.items
    })

    //返回用户选中的值
    let value = checkBox.filter((item, index) => {
      return item.checked == true;
    })
    console.log(value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getProgram()
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },

  
})