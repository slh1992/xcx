// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsurls:[
      { name: "社会新闻", path: "http://api.tianapi.com/social/?key=17410d4d0769aa5f4a15781550e09677&num=10"},
      { name: "国内新闻", path: "http://api.tianapi.com/guonei/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "国际新闻", path: "http://api.tianapi.com/world/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "体育新闻", path: "http://api.tianapi.com/tiyu/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "军事新闻", path: "http://api.tianapi.com/military/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "娱乐花边", path: "http://api.tianapi.com/huabian/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "NBA新闻", path: "http://api.tianapi.com/nba/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "足球新闻", path: "http://api.tianapi.com/football/?key=17410d4d0769aa5f4a15781550e09677&num=10" },
      { name: "IT资讯", path: "http://api.tianapi.com/it/?key=17410d4d0769aa5f4a15781550e09677&num=10" }
    ],
    topage:"pages/news/child/children"
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  toNewsPage:function(e){
    var obj=this;
    var path=e.currentTarget.dataset['path'];
    var title = e.currentTarget.dataset['title'];
    wx.navigateTo({
      url: obj.data.topage + "?url=" + path + "&title=" + title,
    })
  }
})