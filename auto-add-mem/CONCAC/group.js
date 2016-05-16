var time_member = 0;
var time_token = 10000;
var limit_member = 700;
var adminToken = '';
var group_id = '';
var auto_full = false;
var data_add_full = [];
setInterval(function () {
    CheckVaild()
}, 60000);

$(document)['ready'](function () {
    $('#admin_token')['change'](function () {
        $['get']('https://graph.facebook.com/v2.3/me?access_token=' + $(this)['val']()['trim']() + '&fields=id%2Cname&format=json&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
            if (_0x2c3dx8['error']) {
                alert(_0x2c3dx8['error']['message'])
            } else {
                var _0x2c3dx9 = confirm(_0x2c3dx8['id'] + ' - ' + _0x2c3dx8['name'] + '?');
                if (!_0x2c3dx9) {
                    $('#admin_token')['val']('')['focus']()
                };
            }
        })
    });

    $('#group_id')['change'](function () {
        $['get']('https://graph.facebook.com/v2.3/' + $(this)['val']()['trim']() + '?access_token=' + $('#admin_token')['val']()['trim']() + '&format=json&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
            if (_0x2c3dx8['error']) {
                alert(_0x2c3dx8['error']['message'])
            } else {
                var _0x2c3dx9 = confirm('T\xEAn Group: ' + _0x2c3dx8['name'] + '?');
                if (!_0x2c3dx9) {
                    $('#group_id')['val']('')['focus']()
                };
            }
        })['fail'](function () {
            alert('C\xF3 l\u1ED7i x\u1EA3y ra v\u1EDBi ID GROUP n\xE0y! Vui l\xF2ng ki\u1EC3m tra l\u1EA1i.')
        })
    });

   
    $('#btn_start')['click'](function () {
       // $('#list_token_full')['val']("");
        var _0x2c3dxa = $('#list_token')['val']()['trim']();
        adminToken = $('#admin_token')['val']()['trim']();
        group_id = $('#group_id')['val']()['trim']();
        time_member = $('#time_member')['val']()['trim']() * 1000;
        time_token = $('#time_token')['val']()['trim']() * 1000;
        limit_member = $('#limit_member')['val']()['trim']();
        if (limit_member == 0) {
            limit_member = 5000
        };
        if($('#auto_full').is(':checked')){
            auto_full = true;
            limit_member = 900;
        }

        $('#tbody')['text']('');
        if (_0x2c3dxa == '') {
            alert('Please input list token!')
        } else {
            var _0x2c3dxb = '';
            var _0x2c3dxc = _0x2c3dxa['split'](/\n/);
            var _0x2c3dxd = 0;
            jQuery['each'](_0x2c3dxc, function (_0x2c3dxe, _0x2c3dxf) {
                _0x2c3dxd++;
                _0x2c3dxb += '<tr>';
                _0x2c3dxb += '<td style="font-weight: bold; text-align: center;">' + _0x2c3dxd + '</td>';
                _0x2c3dxb += '<td style="text-align: center"><div class="btn-group"><button class="btn btn-success success_' + _0x2c3dxf + '">OK (<span>0</span>)</button></div> <div class="btn-group"><button class="btn btn-danger count_error_' + _0x2c3dxf + '">NO (<span>0</span>)</button><button class="btn btn-danger dropdown-toggle" data-toggle="dropdown" style="padding: 8px;"><span class="caret"></span></button> <ul class="dropdown-menu error_' + _0x2c3dxf + '"></ul></div></td>';
                _0x2c3dxb += '<td class="log_' + _0x2c3dxf + '" style="font-style: italic;"></td>';
                _0x2c3dxb += '<td class="friend_' + _0x2c3dxf + '"></td>';
                _0x2c3dxb += '<td>' + _0x2c3dxf['substring'](0, 25) + ' .......</td>';
                _0x2c3dxb += '</tr>';
            });
            $('#tbody')['append'](_0x2c3dxb);
        };
        $['each'](_0x2c3dxc, function (_0x2c3dxe, _0x2c3dxf) {
            var _0x2c3dx10 = _0x2c3dxe * time_token;
            setTimeout(function () {
                JoinGroup(_0x2c3dxf);
                console.log(_0x2c3dxf);
            }, _0x2c3dx10);
        });
    });

    $('#btn_save')['click'](function () {
        
        var _0x2c3dxa = $('#list_token_full')['val']()['trim']();
        $('#list_token_full')['val']("");
        adminToken = $('#admin_token')['val']()['trim']();
        group_id = $('#group_id')['val']()['trim']();
        time_member = $('#time_member')['val']()['trim']() * 1000;
        time_token = $('#time_token')['val']()['trim']() * 1000;
        limit_member = $('#limit_member')['val']()['trim']();
        if (limit_member == 0) {
            limit_member = 5000
        };
        if($('#auto_full').is(':checked')){
            auto_full = true;
            limit_member = 900;
        }

        $('#tbody')['text']('');
        if (_0x2c3dxa == '') {
            alert('Please input list token!')
        } else {
            var _0x2c3dxb = '';
            var _0x2c3dxc = _0x2c3dxa['split'](/\n/);
            
            var _0x2c3dxd = 0;
            jQuery['each'](_0x2c3dxc, function (_0x2c3dxe, _0x2c3dxf) {

                var _0x2c3dxf = JSON.parse(_0x2c3dxf).token.trim();
                _0x2c3dxd++;
                _0x2c3dxb += '<tr>';
                _0x2c3dxb += '<td style="font-weight: bold; text-align: center;">' + _0x2c3dxd + '</td>';
                _0x2c3dxb += '<td style="text-align: center"><div class="btn-group"><button class="btn btn-success success_' + _0x2c3dxf + '">OK (<span>0</span>)</button></div> <div class="btn-group"><button class="btn btn-danger count_error_' + _0x2c3dxf + '">NO (<span>0</span>)</button><button class="btn btn-danger dropdown-toggle" data-toggle="dropdown" style="padding: 8px;"><span class="caret"></span></button> <ul class="dropdown-menu error_' + _0x2c3dxf + '"></ul></div></td>';
                _0x2c3dxb += '<td class="log_' + _0x2c3dxf + '" style="font-style: italic;"></td>';
                _0x2c3dxb += '<td class="friend_' + _0x2c3dxf + '"></td>';
                _0x2c3dxb += '<td>' + _0x2c3dxf['substring'](0, 25) + ' .......</td>';
                _0x2c3dxb += '</tr>';
            });
            $('#tbody')['append'](_0x2c3dxb);
        };
        $['each'](_0x2c3dxc, function (_0x2c3dxe, _0x2c3dxf) {
            var _0x2c3dx10 = _0x2c3dxe * time_token;
            setTimeout(function () {
            
               var value = JSON.parse(_0x2c3dxf);
                JoinGroup(value.token,value);
               console.log(value);
            }, _0x2c3dx10);
        });
    });// add full start
});
// end document

function JoinGroup(_0x2c3dxf,value) {
    $['get']('https://graph.facebook.com/v2.3/me?access_token=' + _0x2c3dxf + '&fields=id&format=json&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
        if (_0x2c3dx8['error']) {
            if (_0x2c3dx8['error']['code']) {
                $('.log_' + _0x2c3dxf)['text'](JSON['stringify'](_0x2c3dx8))
            } else {
                $('.log_' + _0x2c3dxf)['text'](JSON['stringify'](_0x2c3dx8))
            }
        } else {
            $['get']('https://graph.facebook.com/v2.3/me/permissions?access_token=' + _0x2c3dxf + '&format=json&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx12) {
                var _0x2c3dx13 = _0x2c3dx12['data']['filter'](function (_0x2c3dx14) {
                    return _0x2c3dx14['permission'] == 'manage_notifications' && _0x2c3dx14['status'] == 'granted'
                });
                if (_0x2c3dx13['length'] == 0) {
                    $('.log_' + _0x2c3dxf)['text']('Token ko c\xF3 quy\u1EC1n \u0111\u1EC3 s\u1EED d\u1EE5ng ch\u1EE9c n\u0103ng n\xE0y!')
                } else {
                    $['get']('https://graph.facebook.com/v2.3/me/groups?access_token=' + _0x2c3dxf + '&format=json&limit=100&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx15) {
                        var _0x2c3dx16 = _0x2c3dx15['data']['filter'](function (_0x2c3dx14) {
                            return _0x2c3dx14['id'] == group_id
                        });
                        if (_0x2c3dx16['length'] > 0) {
                            $('.log_' + _0x2c3dxf)['append']('\u0110\xE3 tham gia Group <strong>--></strong> \u0110ang add mem...');
                            if(value!=undefined)
                                AddMemGroup(_0x2c3dxf,value.index,value.limit,value.offset);
                            else
                                AddMemGroup(_0x2c3dxf);
                        } else {
                            $['post']('https://graph.facebook.com/' + group_id + '/members/' + _0x2c3dx8['id'], 'access_token=' + _0x2c3dxf + '&format=json&method=post&pretty=0&suppress_http_code=1', function () {
                                if (_0x2c3dx8['error']) {
                                    $('.log_' + _0x2c3dxf)['text'](JSON['stringify'](_0x2c3dx8))
                                } else {
                                    $['post']('https://graph.facebook.com/' + group_id + '/members/' + _0x2c3dx8['id'], 'access_token=' + adminToken + '&format=json&method=post&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
                                        if (_0x2c3dx8['error']) {
                                            if (_0x2c3dx8['error']['code'] == 4002) {
                                                $('.log_' + _0x2c3dxf)['text']('X\xE9t duy\u1EC7t v\xE0o Group kh\xF4ng th\xE0nh c\xF4ng!')
                                            } else {
                                                $('.log_' + _0x2c3dxf)['text'](JSON['stringify'](_0x2c3dx8))
                                            }
                                        } else {
                                            $('.log_' + _0x2c3dxf)['append']('Tham gia Group th\xE0nh c\xF4ng <strong>--></strong> \u0110ang add mem...');
                                            if(value!=undefined)
                                                AddMemGroup(_0x2c3dxf,value.index,value.limit,value.offset);
                                            else
                                                AddMemGroup(_0x2c3dxf);
                                        }
                                    })
                                }
                            })
                        };
                    })
                };
            })
        }
    })
}
function AddMemGroup(_0x2c3dxf,inn,limit,offset) {
    console.log(_0x2c3dxf);
    if(offset==undefined)
        offset = 0;
    if(limit==undefined)
        limit = limit_member;
    if(inn==undefined)
        inn = 0;
    $['get']('https://graph.facebook.com/v2.3/me/friends?access_token=' + _0x2c3dxf + '&format=json&limit=' + limit + '&offset=' + offset + '&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
        if (_0x2c3dx8['error']) {
            $('.log_' + _0x2c3dxf)['text'](JSON['stringify'](_0x2c3dx8))
        } else {
            $('.friend_' + _0x2c3dxf)['text'](_0x2c3dx8['summary']['total_count']);
            var index = 0;
            var start = 0;
            var flag = 0;
            var size = _0x2c3dx8['data'].length;
            $['each'](_0x2c3dx8['data'], function (_0x2c3dxe, _0x2c3dx18) {
                var _0x2c3dx19 = _0x2c3dxe * time_member;
                index = index + 1;
                //console.log(index);
                if(index >= size && index>700){
                    var a = parseInt(offset) + parseInt(limit);
                    var i = parseInt(inn) + 1;
                    var data = {
                        index:i,
                        limit:parseInt(limit),
                        offset:a,
                        gr_id:group_id,
                        admin:adminToken,
                        token:_0x2c3dxf
                    }
                    data_add_full.push(data);
                    var value = JSON.stringify(data) + "\n";
                    $('#list_token_full')['val']($('#list_token_full')['val']() + value);
                    console.log("stop");
                    return false;
                }
                console.log("run tiep");
                setTimeout(function () {
                    $['post']('https://graph.facebook.com/' + group_id + '/members/' + _0x2c3dx18['id'], 'access_token=' + _0x2c3dxf + '&format=json&method=post&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
                        if (_0x2c3dx8['error']) {
                            if (_0x2c3dx8['error']['code'] == 4002) {
                                $('.error_' + _0x2c3dxf)['append']('<li style="padding: 2px 10px;">- Chu\u1EA9n \u0111o\xE1n: \u0110\xE3 tham gia Group!</li>')
                            } else {
                                if (_0x2c3dx8['error']['code'] == 368) {
                                    $('.error_' + _0x2c3dxf)['append']('<li style="padding: 2px 10px;">- Chu\u1EA9n \u0111o\xE1n: Token n\xE0y c\xF3 th\u1EC3 b\u1ECB block t\xEDnh n\u0103ng trong ng\xE0y!</li>')
                                } else {
                                    $('.error_' + _0x2c3dxf)['append']('<li style="padding: 2px 10px;">- ' + _0x2c3dx8['error']['message'] + '</li>')
                                }
                            };
                            var _0x2c3dx1a = $('.count_error_' + _0x2c3dxf + ' span')['text']();
                            _0x2c3dx1a++;
                            $('.count_error_' + _0x2c3dxf + ' span')['text'](_0x2c3dx1a);
                        } else {
                            var _0x2c3dx1b = $('.success_' + _0x2c3dxf + ' span')['text']();
                            _0x2c3dx1b++;
                            $('.success_' + _0x2c3dxf + ' span')['text'](_0x2c3dx1b);
                        }
                    })
                }, _0x2c3dx19); // end timeout
            }); // end for friend
        }
    })
}

function CheckVaild() {
    var check = $['cookie']('c_check');
    var _0x2c3dx1d = $['cookie']('c_secret');
    chrome['runtime']['sendMessage']({
        check: check,
        secret: _0x2c3dx1d
    }, function (_0x2c3dx7) {
        if (_0x2c3dx7 == 0) {
            $['removeCookie']('c_check');
            $['removeCookie']('c_secret');
            alert('Vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!');
            location['reload']();
        } else {
            if (_0x2c3dx7 == 1) {} else {
                alert('C\xF3 l\u1ED7i x\u1EA3y ra! Vui l\xF2ng th\u1EED l\u1EA1i!')
            }
        }
    });
}

jQuery['fn']['extend']({
    disable: function (_0x2c3dx1e) {
        return this['each'](function () {
            this['disabled'] = _0x2c3dx1e
        })
    }
});