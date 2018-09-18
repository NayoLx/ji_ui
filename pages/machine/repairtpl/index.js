// pages/machine/repairtpl/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    program: [],
    winWidth: 0,
    winHeight: 0,
    open:false,
    src: [],
    items: []
  },

  back: function() {
    wx:wx.navigateBack({
      delta: 1,
    })
  },

  toChooseAdd: function(e) {
    wx.navigateTo({
      url: '../../address/index',
    })
  },
  
  downMore: function() {
    this.setData({
      open: !this.data.open
    })
  },

  closeImg: function(e) {
    var that = this;
    var images = that.data.src;
    var index = e.currentTarget.id;//获取当前长按图片下标
    console.log(index)
    console.log(images)
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          images.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          src: images
        });
      }
    })
  },

  upLoadImg: function(e) {
    var that = this
    wx.chooseImage({
      count: 5, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
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

      },
      {
        "id": 8,
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
    wx.getStorage({
      key: 'repairDetail',
      success: function(res) {
        that.setData({
          repair: res.data
        })       
      },
    })
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