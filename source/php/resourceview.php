<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><br/>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Resource View</title>
</head>

<body>
<?php

$dir = dir("../project");




while (($file = $dir->read()) !== false)
{
echo "files: ". $file . "<br/>";
echo "links: "."<a href=../project/".$file.">".$file."</a><br/>";
}

$dir->close();

?> 
</body>
</html>