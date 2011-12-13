<?php
	$name=$_POST['name'];
	$file= fopen('../project/'. $name. '.js','r');
	while(! feof($file)){
	$row = explode(" ", fgets($file));
	for($j=0;$j<count($row);$j++){
		switch($row[$j]){
			case "var": $row[$j]="<p class='p_var'>var</p>";break;
			case "function" : $row[$j]="<p class='p_function'>function</p>";break;
			case "function()": $row[$j]="<p class='p_function'>function()</p>";break;
			default: $row[$j]="<p class ='p_code'>".$row[$j]. "</p>";break;
			
		}
	}
	for($i=0;$i<count($row);$i++)

	echo $row[$i]. "&nbsp;";
	echo "<br>";
	}
	fclose($file);
?>
