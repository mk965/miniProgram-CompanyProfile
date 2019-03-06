Page({
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '汽车维修'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18888888888',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
})
