chrome.extension.onMessage.addListener(function() {
		chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "get-token"});
	});	
});