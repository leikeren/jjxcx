//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls:'',
    navData:'',
    noticelinks:'',
    borrowshow:'',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://m.jujinziben.com/api/home/facade',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'application/json' }, // 设置请求的 header
      success: function (res) {
        // success
        var dataEntity = res.data.entity;
        var imgUrls = dataEntity.banners;
        var navData = dataEntity.navigation;
        var noticelinks = dataEntity.noticelinks;
        var borrowshow = dataEntity.borrowshow[0];
        console.log(res);
        that.setData({
          imgUrls:imgUrls,
          navData: navData,
          noticelinks: noticelinks,
          borrowshow: borrowshow,
        });
        console.log(noticelinks)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
})