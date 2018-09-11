function showToast(title, duration){
    wx.showToast({
        title: (typeof(title) == "undefined") ? '温馨提示' : title,
        icon: 'success',
        duration: (typeof(duration) == "undefined") ? 2000 : duration,
    })
}
function showLoading(title, duration){
  if (wx.showLoading) {
    wx.showLoading({
      title: (typeof (title) == "undefined") ? '正在加载...' : title,
      mask: true
    })
  } else {
    wx.showToast({
      title: (typeof (title) == "undefined") ? '正在加载...' : title,
      icon: 'loading',
      duration: (typeof (duration) == "undefined") ? 2000 : duration,
    })
  }
}
function hide(){
    wx.hideToast()
}

// 隐藏 loading 提示框
function hideLoading() {
    if (wx.hideLoading) {
        wx.hideLoading() // 1.1新增接口
    }else {
        wx.hideToast()
    }
}

/**
 * Toast提示
 */
function show(text) {
  wx.showToast({
    title: text,
    icon: 'none',
    duration: 2000
  })
}

module.exports = {
    showToast: showToast,
    showLoading: showLoading,
    hide: hide,
    hideLoading: hideLoading,
    show:show
}