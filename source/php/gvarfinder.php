<?php
$file= fopen('../project/Main.js','r');
while(! feof($file)){
	$row = explode (" ",fgets($file));	
	for($j=0;$j<count($row);$j++){
		 if($row[$j]=="var") echo "<h3 class='ui-widget-header ui-corner-all'><div class='gvar'>". $row[$j+1]. "</div></h3>";
		 //bug var a=7;
	}
}
fclose($file);
?>
