<?php
$filelist = glob("..\\project\\*.js");
$ifcomment= 3;
for($i=0;$i<count($filelist);$i++){
	$file = fopen($filelist[$i],"r");
	while(!feof($file)){
		$row = explode (" ",fgets($file));	
		for($j=0;$j<count($row);$j++){
			 if($row[$j]=="function") 
			 		echo "<div class='gvar'>". $row[$j+1]. "</div>";
			// if($row[$j])=="3") $ifcomment=1;
			 //if($row[$j])=="4") $ifcomment=0;
		}
	}
	fclose($file);
	}
?>
