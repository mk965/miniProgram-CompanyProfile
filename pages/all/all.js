Page({

  /**
   * 页面的初始数据
   */
	data: {
		lists: [
			"标题1", "标题二", "标题三", "标题四", "标题五", "标题六", "标题七", "标题八", "标题九", "标题十", "标题十一", "标题十二"
		],
		indexId: 0,
	},
	// 左侧点击事件
	jumpIndex(e) {
		let index = e.currentTarget.dataset.menuindex
		let that = this
		that.setData({
			indexId: index
		});
	},
  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		var that = this
		wx.getSystemInfo({
			success: function (res) {
				that.setData({
					winHeight: res.windowHeight
				});
			}
		});
	},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {

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
		return {
			title: '临清市捷驰轴承有限公司',
			desc: '生产及经营为一体的专业性轴承公司',
			path: '/index/index'
		}
	},
})