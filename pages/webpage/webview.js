// pages/webpage/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'',
      url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({title:options.title,url:options.url});
  },
  backToOld: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})