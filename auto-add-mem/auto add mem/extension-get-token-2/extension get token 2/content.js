
chrome.extension.onMessage.addListener(function(message) {
		switch(message.type) {
		case "get-token":
			//app id "Facebook for iPhone": 6628568379
			var token1 = get_token('6628568379');
			//var token1 = get_token('165907476854626');
			//var token2 = get_token('165907476854626');
			//prompt("FB group for IOS (Addmem) & IOS (spam)",token1 + "\n" + token2);
			prompt("Token:",token1);
		break;
	}
});

function get_token(appid) {
	var request = new XMLHttpRequest();
	request.open("POST", "https://www.facebook.com/v1.0/dialog/oauth/read", false);
	request.send('fb_dtsg=' + document.getElementsByName('fb_dtsg')[0].value + '&app_id='+ appid +'&redirect_uri=fbconnect://success&display=popup&access_token=&sdk=&from_post=1&public_info_nux=1&private=&login=&read=friends_about_me,friends_activities,friends_birthday,friends_checkins,friends_education_history,friends_events,friends_games_activity,friends_groups,friends_hometown,friends_interests,friends_likes,friends_location,friends_notes,friends_online_presence,friends_photos,friends_questions,friends_relationship_details,friends_relationships,friends_religion_politics,friends_status,friends_subscriptions,friends_videos,friends_website,friends_work_history,user_notes,user_online_presence,user_questions,user_subscriptions,user_about_me,user_activities,user_birthday,user_education_history,user_events,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_photos,user_relationship_details,user_relationships,user_religion_politics,user_status,user_videos,user_website,user_work_history,public_profile,user_friends&write=&readwrite=&extended=&social_confirm=&confirm=&gdp_version=3&seen_scopes=friends_about_me,friends_activities,friends_birthday,friends_checkins,friends_education_history,friends_events,friends_games_activity,friends_groups,friends_hometown,friends_interests,friends_likes,friends_location,friends_notes,friends_online_presence,friends_photos,friends_questions,friends_relationship_details,friends_relationships,friends_religion_politics,friends_status,friends_subscriptions,friends_videos,friends_website,friends_work_history,user_notes,user_online_presence,user_questions,user_subscriptions,user_about_me,user_activities,user_birthday,user_education_history,user_events,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_photos,user_relationship_details,user_relationships,user_religion_politics,user_status,user_videos,user_website,user_work_history,public_profile,user_friends&auth_type=&auth_token=&auth_nonce=&ref=Default&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1');
	if (request.readyState == 4) {var response = request.responseText.match(/#access_token=(.*?)&expires_in/i);
	return response[1];
		
	}
}