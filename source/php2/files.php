<?php
foreach(glob("../project/*.*") as $filename){
  $name = preg_split("/\//",$filename);
  $name = preg_split("/\.js/", $name[2]);
  $name=$name[0];
  echo "<html>";
  echo "<body>";
  echo "<a href='https://www.google.com/'>";
  echo "a";
  echo "</a>";
  echo "<div class='file'>" .  $name . "</div>";
  echo "</body>";
  echo "</html>";
}
?>