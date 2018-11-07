// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsurls:[
      { name: "社会新闻", newstype: "social"},
      { name: "国内新闻", newstype: "guonei" },
      { name: "国际新闻", newstype: "world" },
      { name: "体育新闻", newstype: "tiyu" },
      { name: "军事新闻", newstype: "military" },
      { name: "娱乐花边", newstype: "huabian" },
      { name: "NBA新闻", newstype: "nba" },
      { name: "足球新闻", newstype: "football" },
      { name: "IT资讯", newstype: "it" }
    ],
    topage:"/pages/news/child/children"
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
    var newstype = e.currentTarget.dataset['newstype'];
    var title = e.currentTarget.dataset['title'];
    wx.navigateTo({
      url: obj.data.topage + "?newstype=" + newstype + "&title=" + title,
    })
  }
})