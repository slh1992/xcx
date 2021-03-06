//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    keyWord: "",
    motto: '欢迎进入我的世界',
    show:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../phoneinfo/phoneinfo'
    })
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    if(this.data.hasUserInfo){
      wx.showShareMenu({
        withShareTicket:true
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showMsg:function(e){
    this.setData({ show: true })
    console.log(e)
  },
  onClose(){
    this.setData({show:false})
  },
  toWeather:function(){
    wx.navigateTo({
      url: '/pages/weather/weather?local=true'
    })
  },
  toMap: function () {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },
  
  doSearch:function(event) {
    wx.navigateTo({
      url: '/pages/search/search?keyWord=' + this.data.keyWord,
    });
  },
  changKey:function(event){
    this.setData({ keyWord: event.detail});
  }
  
})
