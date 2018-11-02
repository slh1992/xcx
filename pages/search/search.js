// pages/search.js
import Toast from '../vant-weapp/dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyWord:"",
    citys:[],
    citysempty:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({ keyWord: options.keyWord,});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.searchCity();
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
  searchCity: function(event) {
    var obj = this;
    var param = obj.data.keyWord;
    if (event!=null&&event.detail != null && event.detail!=''){
      param = event.detail;
    }
    wx.request({
      url: 'https://search.heweather.com/find',
      data: {
        lang: "zh",
        key: "16729f33e7da471ea92a9392206b5d00",
        group: "scenic",
        location: param
      },
      success: function (res) {
        console.log(res)
        var list = res.data.HeWeather6[0].basic;   
          
        if(list!=null&&list!=''){
          obj.setData({ citys: list });
          obj.setData({citysempty:false});
        }else{
          Toast.fail('未查询到相关信息');
        }
      }
    });
  }
})