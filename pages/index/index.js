//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content: '',
    id: '',
    type: '',
    from: '',
    creator: '',
    created_at: '',
    bgImg: ''
  },

  onLoad: function() {
    var that = this
    that.getContent();
    that.changeImg();
  },

  getContent: function() {
    var that = this;
    var url = "https://v1.hitokoto.cn/";
    wx.request({
      url: url,
      data: {

      },
      success: function(res) {
        var id = res.data.id;
        var content = res.data.hitokoto;
        var type = res.data.type
        var from = res.data.from
        var creator = res.data.creator
        var created_at = res.data.created_at

        console.log(res.data)
        that.setData({
          id: id,
          content: content,
          type: type,
          from: from,
          creator: creator,
          created_at: created_at,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  changeImg: function() {
    var that = this;
    var url = "https://24bp.cn/pe.php";
    wx.request({
      url: url,
      data: {
        return: "json"
      },
      success: function(res) {
        var bgImg = "https:" + res.data.imgurl;

        console.info(res.data)
        that.setData({
          pBackgroundImg: bgImg
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // var bgImg = 'https://24bp.cn/pe.php';
  },
  copyTBL: function() {
    var that = this;
    wx.setClipboardData({
      data: that.data.content+'',
      success: function() {
        wx.showModal({
          title: '提示',
          content: '复制成功',
        })
      }
    })
  },


  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
    this.getContent();
    this.changeImg();
  }
})