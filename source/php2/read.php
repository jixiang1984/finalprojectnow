<?php

   

	$name=$_POST["name"];
	$filename;
    $filename=$name."."."js";
   $file; 
   $i=0; 
   $filerealname=substr($filename,0,strlen($superclass)-3);
   $filePattern="prototype";
   $new="new";
   $classname=$name;
   $countclassitem=0;
   $str=array();
   $superclass=array();
   $subclass=array();
   $subclasses=array();
   $realsuperclass;
   $temp=array();
   $subclasscount=0;
 


//echo "<div class='realfile'>". $name."</div>";


	$filelist = glob("../project/*.js");
	for($i=0;$i<count($filelist);$i++){
		$file = fopen($filelist[$i],"r");
		$filename = basename($filelist[$i]);
  		$filename = preg_split("/\.js/", $filename);
  		$filename =$filename[0];
		$j=0;
		while(! feof($file)){
			$row = fgets($file);
			
			if (preg_match ("/$filePattern/i", $row)&&preg_match ("/$classname/i", $row))
			
			{
				
				$str[$countclassitem]=$row;	
	
				$countclassitem++;
				
			
						
			}
		
		}
		
		fclose($file);
	}
	
	$supperclass=$str;
	$subclass=$str;
	
	for($k=0;$k<=count($supperclass);$k++)
	
	{
		
		
		$domain = strstr($supperclass[$k], 'new ');
		
		$words = preg_split("[ ]", $domain);
		
		$superclass=$words[1];
		
		$newstr = substr($superclass,0,strlen($superclass)-1);
		
		if($newstr!=$name)
		{
		$realsuperclass=substr($newstr,0,strlen($superclass)-1);
		
		//echo $realsuperclass."</br>";
		
		}
		$k++;
		
	}
	
	
	for($k=0;$k<=count($subclass);$k++)
	
	{
		
	
		$newstring=$subclass[$k];
		
		$newstrin=substr($newstring,0,strrpos($newstring,'.'));
		
		if(($newstrin!=$name)&&($newstrin!=""))
		{
			$subclasses[$subclasscount]=$newstrin;
			
			$subclasscount++;		
		}	
		
	}
	
	$parentclass;
	$currentclass;
	
	$parentclass=$realsuperclass;
	$currentclass=$name;
	$subclasses=$subclasses;

		
	if($parentclass!="")
	
	echo "<div class='parentclass'><div class='ui-widget-header'><p>".$parentclass."</p></div></div></br>";
	
	echo "<div class='currentclass'><div class='ui-widget-header'><p>".$currentclass."</p></div></div></br>";
	
	for($i=0;$i<count($subclasses);$i++)
	
	{
	    
		echo "<div class='subclasses'><div class='ui-widget-header'><p>".$subclasses[$i]."</br>"."</p></div></div>";
	   
	}





	
	
?>