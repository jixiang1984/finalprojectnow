<?php
foreach(glob("../project/*.*") as $filename){
  $name = preg_split("/\//",$filename);
  $name = preg_split("/\.js/", $name[2]);
  $name=$name[0];
  
  echo "<h3 class='ui-widget-header ui-corner-all'><div class='classitem'>".  $name ."</div></h3>";
   
  

}
?>