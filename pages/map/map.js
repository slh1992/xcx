// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:"",
    longitude:"",
    scale:16,
    subkey:"PI3BZ-UBARX-2WP4Y-ZQK2H-V4YGJ-OVFW4",
    markers:[],
    polyline: [],
    polygons:[],
    controls:[
      {
        id:1,
        iconPath:'/pages/img/up.png',
        position: {
          left: 5,
          top: 10,
          width: 25,
          height: 25
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '/pages/img/down.png',
        position: {
          left: 35,
          top: 10,
          width: 25,
          height: 25
        },
        clickable: true
      }
    ]
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
    var obj = this;
    const mc = wx.createMapContext("mymap", this);
    mc.moveToLocation();    
    wx.getLocation({
      success: function (res) {
        obj.setData({ latitude: res.latitude, longitude:res.longitude});
      },
    })
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
    console.log("分享");
  },

  bindregionchange: function (event) {

  },
  bindtap: function (event) {

  },
  poisitionClick: function (event) {
      console.log(event);
  },
  toUpper:function(event) {
    var scale = this.data.scale;   
    scale--;  
    if(scale<5){return;}
    this.setData({scale:scale});
  },
  toDowner: function (event) {
    var scale = this.data.scale;
    scale++;
    if (scale > 18) { return; }
    this.setData({ scale: scale });
  }
})