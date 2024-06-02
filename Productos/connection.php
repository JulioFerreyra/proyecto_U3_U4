<?php

$server = "localhost";
$user = "root";
$password = "jafete210403";
$database = "proyecto";

$conn = mysqli_connect($server, $user, $password, $database);

if (!$conn) {
die("error");
}
else{
    echo "conexion XD";
}
?>