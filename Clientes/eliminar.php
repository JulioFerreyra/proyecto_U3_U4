<?php
    include "conexion.php";

    $_id_cliente = $_POST['id_cliente'];

    $sentencia = "DELETE FROM `clientes` WHERE id_cliente = $_id_cliente";

    if($conn->query($sentencia)){
        echo "Registro Eliminado";
    }
    else{
        echo "Error al Eliminar";
    }

?>