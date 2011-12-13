<?php
	$name=$_POST["name"];
	$filelist = glob("../project/*.js");
	for($i=0;$i<count($filelist);$i++){
		$file = fopen($filelist[$i],"r");
		$filename = basename($filelist[$i]);
  		$filename = preg_split("/\.js/", $filename);
  		$filename =$filename[0];
		$j=0;
		while(! feof($file)){
			$row = fgets($file);
			if(strpos($row,$name)) echo "<div class='realfile'>". $filename."</div>". $j.$row."<br>";
			$j++;
		}
		fclose($file);
	}
?>