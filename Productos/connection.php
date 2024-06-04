<?php

$server = "localhost";
$user = "newuser";
$password = "";
$database = "proyecto";

$conn = mysqli_connect($server, $user, $password, $database);

if (!$conn) {
die("error");
}

?>