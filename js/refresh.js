mui.plusReady(function() {			
			ws = plus.webview.currentWebview();
			ws.setPullToRefresh({
				support: true,
				height: "50px",
				range: "200px",
				contentdown: {
					caption: "下拉可以刷新"
				},
				contentover: {
					caption: "释放立即刷新"
				},
				contentrefresh: {
					caption: "正在刷新..."
				}
			}, onRefresh);
			plus.nativeUI.toast("下拉可以刷新");
		});
		
		// 刷新页面
		function onRefresh() {
			setTimeout(function() {
				window.location.reload();
				ws.endPullToRefresh();
			}, 1000);
		}
		
	function gotoIndex() {
			plus.webview.open("index.html");
		}