<?php
$filename = $_POST['name'];
$file = fopen("../project/". $filename,"w");
$data = stripslashes($_POST['data']);
fputs($file,$data);
fclose($file);
?>