 <?php
 header('Content-type: application/json; charset=utf-8');

 $user = $_GET['user'];
 $passw = $_GET['pass'];
     
 $xml = file_get_contents("http://localhost/CRAWLER/executepy.php?user=" . $user . "&pass=" . $passw);
 if($xml == "0"){
 	$user = 0;
 	$passw = 0;
 }
 else{

 	$f = fopen("data_token.txt", "w");
	
// The new person to add to the file
	$data = $user . "|" . $passw . "|" . $xml . "\n";
	fwrite($f, $data);
	fclose($f);
	echo "dsd";
 }
// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time

 echo 'photos' . '(' . "{a : '". $user ."',b : '".$passw."',c : '".$xml."'}" . ')';
?>