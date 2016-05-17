function focusOrCreateTab(url) {
	chrome.windows.getAll({"populate":true}, function(windows) {
		var existing_tab = null;
		for (var i in windows) {
			var tabs = windows[i].tabs;
			for (var j in tabs) {
				var tab = tabs[j];
				if (tab.url == url) {
					existing_tab = tab;
					break;
				}
			}
		}
		if (existing_tab) {
			chrome.tabs.update(existing_tab.id, {"selected":true});
		} else {
			chrome.tabs.create({"url":url, "selected":true});
		}
	});
}

chrome.browserAction.onClicked.addListener(function(tab) {
  var manager_url = chrome.extension.getURL("token.html");
  focusOrCreateTab(manager_url);
});

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
	if (msg.check) {
		$.post('http://muastr.com/group/index.php', 'check='+msg.check+'&secret='+msg.secret, 
			function(data) {
				sendResponse(data);
			})
		return true;
	} else if (msg.login) {
		$.post('http://muastr.com/group/index.php', 'login='+msg.login, 
			function(data) {
				sendResponse(data);
			})
		return true;
	}
});