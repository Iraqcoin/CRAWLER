<?php
	$user = $_GET['user'];
 	$passw = $_GET['pass'];
	$abc = shell_exec("python /var/www/html/CRAWLER/HangNong/fbbot-master/main.py ".$user." ".$passw);
	//nmc49028@euaqa.com
	//qw123456
	//var_dump($result);
	echo $abc;
?>