Page({
	data: {
		markers: [{
			iconPath: '/resources/others.png',
			id: 0,
			latitude: 36.7129170000,
			longitude: 115.4859310000,
			width: 50,
			height: 50,
		}]
	},
	regionchange(e) {
		console.log(e.type)
	},
	markertap(e) {
		console.log(e.markerId)
	},
	controltap(e) {
		console.log(e.controlId)
	}
})