<?php
$filelist = glob("../project/*.js");
for($i=0;$i<10;$i++){
	$file = fopen($filelist[$i],"r");
	while(! feof($file)){
		$row = explode (" ",fgets($file));	
		for($j=0;$j<count($row);$j++){
			 if($row[$j]=="function") {
			 		$pos = stripos($row[$j+1],"()");
			 		if($pos!=0 && $pos !=false)
			 		//echo $filelist[$i]."<br>";
			 		echo "<h3 class='ui-widget-header ui-corner-all'><div class=fun>". $row[$j+1]. "</div></h3>";
			 }
		}
	}
	fclose($file);
	}	
?>
