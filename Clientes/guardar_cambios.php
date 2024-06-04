<?php
    include "conexion.php";

    $_id_cliente = $_POST['id_cliente'];
    $_nombre = $_POST['nombre'];
    $_empresa = $_POST['empresa'];
    $_direccion = $_POST['direccion'];
    $_telefono = $_POST['telefono'];
    $_correo = $_POST['correo'];

    $sentencia = "UPDATE `clientes` SET `nombre`='$_nombre',`empresa`='$_empresa',`direccion`='$_direccion',`telefono`='$_telefono', `correo`='$_correo' WHERE id_cliente = $_id_cliente";

    if($conn->query($sentencia)){
        echo "Registro Actualizado";
    }
    else{
        echo "Error al Actualizar";
    }

?>