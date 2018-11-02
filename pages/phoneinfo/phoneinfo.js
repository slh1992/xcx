Page({
  data: {
    info: {}
  },
  onLoad: function () {
    this.getPhoneInfo();
  },
  getPhoneInfo:function(){
    const res = wx.getSystemInfoSync();
    console.log(res)
    this.setData({ info: res});
  }
})