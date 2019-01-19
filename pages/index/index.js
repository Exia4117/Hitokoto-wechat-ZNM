//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:'',
    id:''
  },

  onLoad: function () {
    var that = this
    that.getContent();
  },
  
  getContent: function () {
    var that = this;
    var url = "https://v1.hitokoto.cn/";
    wx.request({
      url: url,
      data:{

      },
      success: function (res) {
        var id = res.data.id;
        var content = res.data.hitokoto;
        console.log(res.data)
        that.setData({
          id: id,
          content: content,
          // street: street,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh();
    this.getContent();
  }
})
