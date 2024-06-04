<?php

$servidor="localhost";
$usuario="newuser";
$pass ="";
$database="proyecto";

$conn = mysqli_connect($servidor, $usuario, $pass, $database);

if(!$conn){
    die("Error en la conexion");
}else{
   // echo "conexion exitosa";
}

?>