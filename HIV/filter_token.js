
var time_token  = 0.01;
$(document)['ready'](function () {
    $('#btn_start')['click'](function () {
        var _0x2c3dxa = $('#list_token')['val']()['trim']();
        $('#list_token_l800')['text']('');
        $('#list_token_g800')['text']('');
        $('#error')['text']('');
        if (_0x2c3dxa == '') {
            alert('Please input list token!')
        } else {
            var _0x2c3dxb = '';
            var _0x2c3dxc = _0x2c3dxa['split'](/\n/);
            var _0x2c3dxd = 0;
           
        };

        $['each'](_0x2c3dxc, function (_0x2c3dxe, _0x2c3dxf) {
            var _0x2c3dx10 = _0x2c3dxe * time_token;
            setTimeout(function () {
                Filter_Token(_0x2c3dxf);
            }, _0x2c3dx10);
        });
    });
});
var limit_member = 5000;
function Filter_Token(_0x2c3dxf){
     $['get']('https://graph.facebook.com/v2.3/me/friends?access_token=' + _0x2c3dxf + '&format=json&limit=' + limit_member + '&method=get&pretty=0&suppress_http_code=1', function (_0x2c3dx8) {
        if (_0x2c3dx8['error']) {
            $('.log_' + _0x2c3dxf)['text'](JSON['stringify'](_0x2c3dx8));
            $('#error')['append']("<li>" + _0x2c3dxf['substring'](0, 20) + "..." + "</li>");
        } else {
           var len = (_0x2c3dx8['summary']['total_count']);
           if(len < 800)
           {
                $('#list_token_l800')['append'](_0x2c3dxf + "\n");
                console.log(len);
           }
           else{
                $('#list_token_g800')['append'](_0x2c3dxf + "\n");
                console.log(len);
           }
        }
    });
}
