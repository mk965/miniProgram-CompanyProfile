//index.js
//获取应用实例
var app = getApp()
Page({
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  calling: function () {
    wx.makePhoneCall({
			phoneNumber: '18088888888',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  click: function (e) {
    wx.openLocation({
			latitude: 40.7129170000,
			longitude: 110.4859310000,
      scale: 18,
			name: 'XXXXXXXXX轴承有限公司',
			address: 'XXXXXXX工业园'
    })
	},
	onShareAppMessage: function () {
		return {
			title: 'XXXXXXXXX轴承有限公司',
			desc: 'XXXXXXX工业园',
			path: '/pages/index/index'
		}
	},
})