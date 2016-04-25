window.onload = function() {
		chrome.extension.sendMessage({
	        type: "get-token"
	    });
	
}