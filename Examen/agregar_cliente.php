<?php
    include "conexion.php";

    $_nombre = $_POST['name'];
    $_empresa = $_POST['company'];
    $_direccion = $_POST['address'];
    $_telefono = $_POST['phone'];
    $_correo = $_POST['email'];

    $sentencia = "INSERT INTO `clientes`(`nombre`, `empresa`, `direccion`, `telefono`, `correo`) VALUES ('$_nombre','$_empresa','$_direccion','$_telefono',' $_correo')";

    $conn -> query($sentencia);
    echo "Registro Guardado!";
?>

