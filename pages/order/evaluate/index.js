// pages/order/evaluate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    att:0,
    att_2:5,
    one_2: 0,
    two_2: 5,
    tech:0,
    tech_2:5,
    yins: []

  },
  /**
   * 速度
   */
  speed_xin: function (e) {
    var in_xin = e.currentTarget.dataset.in;
    var one_2;
    if (in_xin === 'use_sc2') {
      one_2 = Number(e.currentTarget.id);
    } else {
      one_2 = Number(e.currentTarget.id) + this.data.one_2;
    }
    this.setData({
      one_2: one_2,
      two_2: 5 - one_2
    })
  },
  /*
  *态度
  */
  att_xin: function (e) {
    var in_xin = e.currentTarget.dataset.in;
    var att_2;
    if (in_xin === 'att_sc2') {
      att_2 = Number(e.currentTarget.id);
    } else {
      att_2 = Number(e.currentTarget.id) + this.data.att;
    }
    this.setData({
      att: att_2,
      att_2: 5 - att_2
    })
  },
  /**
   * 技术
   */
  tech_xin: function (e) {
    var in_xin = e.currentTarget.dataset.in;
    var tech_2;
    if (in_xin === 'tech_sc2') {
      tech_2 = Number(e.currentTarget.id);
    } else {
      tech_2 = Number(e.currentTarget.id) + this.data.tech;
    }
    this.setData({
      tech: tech_2,
      tech_2: 5 - tech_2
    })
  },

  getYing: function() {
     var data = [
       {
         "id": 0,
         "value": '热情',

       },
       {
         "id": 1,
         "value": '开朗',

       },
       {
         "id": 2,
         "value": '安静',

       },
       {
         "id": 3,
         "value": '腼腆',

       },
       {
         "id": 4,
         "value": '技术好',

       },
       {
         "id": 5,
         "value": '帅',

       },
       {
         "id": 6,
         "value": '热情',

       },
       {
         "id": 7,
         "value": '开朗',

       }
     ]
     this.setData({
       yins: data
     })
  } ,
  //多选
  userYinCheck: function (e) {
    let index = e.currentTarget.dataset.id; //获取用户当前选中的索引值
    let checkBox = this.data.yins;
    if (checkBox[index].checked) {
      this.data.yins[index].checked = false;
    } else {
      this.data.yins[index].checked = true;
    }
    this.setData({
      yins: this.data.yins
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
   this.getYing()
  },

  
})