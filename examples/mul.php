<?php

$x = $_GET["x"];
$y = $_GET["y"];

header('Content-Type: application/json');
echo json_encode(array('result' => $x * $y));
?>

