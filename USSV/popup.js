$("#Main_Stop_VPN").click(function(){
    chrome.proxy.settings.clear({scope: 'regular'}, function() {
      localStorage.connected = "off";
    });  
})