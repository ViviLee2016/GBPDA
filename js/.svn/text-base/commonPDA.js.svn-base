/**
 * H5本地储存、公共函数
 * @author Vivi
 * @version 1.0 
 * @date 2017-01-10
 */

var ws = null,
	as = 'pop-in';

function plusReady() {
	ws = plus.webview.currentWebview();
	// Android处理返回键
	plus.key.addEventListener('backbutton', function() {
		back();
	}, false);
	var uuid = plus.device.uuid; //返回安卓设备Id
	return uuid;
}
if(window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}

var storeId = "storeId";
var urlPDAId = "urlPDAId";
var userCodeId = "userCodeId";
var barCodeId = "barCodeId";
var userPowerId = "userPowerId";

var StoreInfo = {
	setStoreCode: function(value) {
		try {
			plus.storage.setItem(storeId, value.toString());
		} catch(e) {}
	},
	setUrlPDA: function(value) {
		try {
			plus.storage.setItem(urlPDAId, value.toString());
		} catch(e) {}
	},
	setUserCode: function(value) {
		try {
			plus.storage.setItem(userCodeId, value.toString());
		} catch(e) {}
	},
	setBarCode: function(value) {
		try {
			plus.storage.setItem(barCodeId, value.toString());
		} catch(e) {}
	},
	setUserPower: function(value) {
		try {
			plus.storage.setItem(userPowerId, value.toString());
		} catch(e) {}
	},
	getInfo: function(key) {
		var value = plus.storage.getItem(key);
		if(undefined == value || null == value || "" == value || NaN == value || value.length <= 0) {
			try {
				value = plus.storage.getItem(key);
			} catch(e) {}
		}
		return value;
	},
	removeInfo: function(key) {
		var value = plus.storage.removeItem(key);
		try {
			if(undefined == value || null == value || "" == value || NaN == value || value.length <= 0) {
				value = plus.storage.removeItem(key);
			}
		} catch(e) {}
		return value;
	}
};

