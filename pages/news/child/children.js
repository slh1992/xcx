// pages/news/child/children.js
import Toast from '../../vant-weapp/dist/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    word:"",
    title:"新闻",
    reqKey:'17410d4d0769aa5f4a15781550e09677',
    newstype:'',
    data:[],
    pageindex:1,
    pagesize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ newstype: options.newstype,title:options.title});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var params={
      key: this.data.reqKey,
      num: this.data.pagesize,
      page: this.data.pageindex,
    }
    this.searchInfo(params);
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
  searchInfo:function(params){
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    var obj = this;
    wx.request({
      url: 'http://api.tianapi.com/' + obj.data.newstype + '/',
      data: params,
      success: res => {
        console.log(res)
        if (res.data.code != '200') {
          Toast.fail(res.data.msg);
          return;
        }
        obj.setData({ data: res.data.newslist });
        Toast.clear();
      }
    })
  }
})