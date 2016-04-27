<?php

require 'RestClient.php';

$api = new RestClient(array(
    'base_url' => "https://www.facecloaker.com/api/", 
    'headers' => array('Api-Key' => 'YOUR_API_KEY', 'app' => RestClient::app())
));
  
$result = $api->get("/")->decode_response();

if($result->error == false && $result->isFacebook == true){
    // If Facebook, do 301 redirection
    header("Status: 301 Moved Permanently", false, 301);
    header("Location:http://www.website-for-facebook.com");
    header("X-Robots-Tag: NOARCHIVE", true);
}else{
    // If not Facebook do something else
} 
//https://www.youtube.com/watch?v=36NKppfzJdI
?>