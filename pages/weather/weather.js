// pages/weather.js
import Toast from '../vant-weapp/dist/toast/toast';
//weather code-class
var weather_codecontainer=new Map();
weather_codecontainer.set('100','iconqt');
weather_codecontainer.set('101','icondyzq');
weather_codecontainer.set('103', 'iconqzdy');
weather_codecontainer.set('104', 'icoiconytndyzq');
weather_codecontainer.set('301', 'iconzheny');
weather_codecontainer.set('302', 'iconleizy');
weather_codecontainer.set('303', 'iconleizy');
weather_codecontainer.set('304', 'iconleizy');
weather_codecontainer.set('399', 'iconxy');
weather_codecontainer.set('316', 'iconby');
weather_codecontainer.set('317', 'iconby');
weather_codecontainer.set('318', 'iconby');
weather_codecontainer.set('314', 'iconzy');
weather_codecontainer.set('315', 'iconzy');
weather_codecontainer.set('309', 'iconxy');
weather_codecontainer.set('306', 'iconzy');
weather_codecontainer.set('307', 'icondy');
weather_codecontainer.set('308', 'iconby');
weather_codecontainer.set('310', 'iconby');
weather_codecontainer.set('311', 'iconby');
weather_codecontainer.set('312','iconby');
weather_codecontainer.set('499', 'iconxxue');
weather_codecontainer.set('400', 'iconxxue');
weather_codecontainer.set('401', 'iconzxue');
weather_codecontainer.set('402', 'icondxue');
weather_codecontainer.set('403', 'iconbxue');
weather_codecontainer.set('404', 'iconxxue');
weather_codecontainer.set('405', 'iconxxue');
weather_codecontainer.set('406', 'iconxxue');
weather_codecontainer.set('407', 'iconxxue');
weather_codecontainer.set('408', 'iconzxue');
weather_codecontainer.set('409', 'icondxue');
weather_codecontainer.set('410', 'iconbxue');
weather_codecontainer.set('404', 'iconxxue');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"杭州市",
    pcity:"杭州市",
    isshow: false,
    actions: [
      { name: "刷新天气", subname: "获取实时天气" }
    ],
    class:"iconqt",
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载数据...',
    });
    console.log(options.city)
    if(options.city!=null&&options.city!=''){
      this.setData({city:options.city,pcity:options.pcity});
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var city = { name:this.data.city};
    this.getWeatherInfo(city);
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideLoading();
    var data=wx.getStorageSync("weather");
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
    var city = { name: this.data.pcity };
    this.getWeatherInfo(city);
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
 
  setWeatherInfo: function (data) {
    this.setData({ class: weather_codecontainer.get(data.cond_code) });
    this.setData({ info: data });
  },
  /**
 * city={name:"北京市",lat:"39.90498734",lon:"116.4052887"}
 */
  getWeatherInfo: function (city) {
    var obj = this;
    var param = city.name;
    if (param == null || param == '') {
      param = city.lat + "," + city.lon;
    }

    var data = wx.getStorageSync("weather");
    if (data != null && data != '') {
      var wea = data[param];
      if (wea != null && wea != '') {
        this.setWeatherInfo(wea);
        return;
      }
    }

    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',
      data: {
        location: param,
        lang: "zh",
        key: "16729f33e7da471ea92a9392206b5d00"
      },
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.HeWeather6[0].status!='ok'){
          var city = { name: obj.data.pcity };
          obj.getWeatherInfo(city);         
          return;
        }

        var noww = res.data.HeWeather6[0].now;
        var wea = {};
        wea[param] = noww;
        console.log(res.data);
        obj.setWeatherInfo(noww);       
        wx.setStorageSync("weather", wea);
      }
    })
  },
  backToOld: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  showMenu: function () {
    this.setData({isshow:true});
  },
  onSelect(e) {
    var city = { name: this.data.city};
    var wea={};
    wx.setStorageSync("weather", wea);
    this.getWeatherInfo(city);
    this.onCancel();
  },
  onCancel() {
    this.setData({ isshow: false });
  }

  
  
})


