<?php

include "conexion.php";

$_nombre = $_POST["nombre"];
$_apellido = $_POST["apellido"];
$_fec_nac = $_POST["fec_nac"];
$_telefono = $_POST["telefono"];
$_usuario = $_POST["usuario"];
$_pass = $_POST["pass"];

$query = "insert into usuarios (nombre, apellido, fec_nac, telefono, usuario, pass) values ('$_nombre', '$_apellido', '$_fec_nac', '$_telefono', '$_usuario', '$_pass');";

$conn -> query($query);

echo "Usuario $_nombre $_apellido agregado exitosamente.";

?>