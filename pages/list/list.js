Page({
	//事件处理函数
	data: {
		imgalist:[
			'/image/1/1.jpg',
			'/image/1/2.jpg',
			'/image/1/3.jpg',
			'/image/1/4.jpg',
			'/image/1/5.jpg',
			'/image/1/6.jpg',
			'/image/1/7.jpg',
			'/image/1/8.jpg',
			'/image/1/9.jpg',
			'/image/1/10.jpg',
			'/image/2/1.jpg',
			'/image/2/2.jpg',
			'/image/2/3.jpg',
			'/image/2/4.jpg',
			'/image/2/5.jpg',
			'/image/2/6.jpg',
			'/image/2/7.jpg',
			'/image/2/8.jpg',
			'/image/2/9.jpg',
			'/image/3/1.jpg',
			'/image/3/2.jpg',
			'/image/3/3.jpg',
			'/image/3/4.jpg',
			'/image/4/1.jpg',
			'/image/5/1.jpg',
			'/image/5/2.jpg',
			'/image/5/3.jpg',
			'/image/5/4.jpg',
			'/image/5/5.jpg',
			'/image/5/6.jpg',
			'/image/6/1.jpg',
			'/image/6/2.jpg',
			'/image/6/3.jpg',
			'/image/6/4.jpg',
			'/image/7/1.jpg',
			'/image/7/2.jpg',
			'/image/7/3.jpg',
			'/image/7/4.jpg',
			'/image/7/5.jpg',
			'/image/8/1.jpg',
			'/image/8/2.jpg',
			'/image/9/1.jpg',
		],
		imgalist1: [
			'/image/1/1.jpg',
			'/image/1/2.jpg',
			'/image/1/3.jpg',
			'/image/1/4.jpg',
			'/image/1/5.jpg',
			'/image/1/6.jpg',
			'/image/1/7.jpg',
			'/image/1/8.jpg',
			'/image/1/9.jpg',
			'/image/1/10.jpg',
		],
		imgalist2: [
			'/image/2/1.jpg',
			'/image/2/2.jpg',
			'/image/2/3.jpg',
			'/image/2/4.jpg',
			'/image/2/5.jpg',
			'/image/2/6.jpg',
			'/image/2/7.jpg',
			'/image/2/8.jpg',
			'/image/2/9.jpg',
			'/image/8/1.jpg',
			'/image/8/2.jpg',
			'/image/9/1.jpg',
		],
		imgalist3: [
			'/image/3/1.jpg',
			'/image/3/2.jpg',
			'/image/3/3.jpg',
			'/image/3/4.jpg',
		],
		imgalist4: [
			'/image/4/1.jpg',
		],
		imgalist5: [
			'/image/5/1.jpg',
			'/image/5/2.jpg',
			'/image/5/3.jpg',
			'/image/5/4.jpg',
			'/image/5/5.jpg',
			'/image/5/6.jpg',
		],
		imgalist6: [
			'/image/6/1.jpg',
			'/image/6/2.jpg',
			'/image/6/3.jpg',
			'/image/6/4.jpg',
		],
		imgalist7: [
			'/image/7/1.jpg',
			'/image/7/2.jpg',
			'/image/7/3.jpg',
			'/image/7/4.jpg',
			'/image/7/5.jpg',
		],
		imgalist8: [
			'/image/8/1.jpg',
			'/image/8/2.jpg',
		],
		imgalist9: [
			'/image/9/1.jpg',
		]
	},
	onReady: function () {
		wx.setNavigationBarTitle({
			title: this.title
		})
	},
	onShareAppMessage: function () {
		return {
			title: '临清市捷驰轴承有限公司',
			desc: '生产及经营为一体的专业性轴承公司',
			path: '/pages/index/index'
		}
	},
	previewImage: function (e) {
		console.log("=======  "+e.currentTarget.dataset.src);
		var index = e.currentTarget.dataset.index;
		var imgArr = this.data.imgArr;
		wx.previewImage({
			current: e.currentTarget.dataset.src, // 当前显示图片的http链接
			urls: this.data.imgalist, // 需要预览的图片http链接列表
			success: function (res) { },
			fail: function (res) { },
			complete: function (res) { },
		})
	}

})
