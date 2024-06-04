<?php

include "conexion.php";

$_usuario = $_POST["usuario"];
$_pass = $_POST["password"];

$consulta = "SELECT COUNT(*) AS total FROM usuarios where usuario = '$_usuario' AND pass = '$_pass';";

$result = $conn -> query($consulta);

$fila = $result -> fetch_assoc();
$total = $fila["total"];
echo $total;

?>