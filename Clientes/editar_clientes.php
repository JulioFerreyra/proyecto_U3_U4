<?php
    include "conexion.php";

    $_id_cliente = $_POST['id_cliente'];
    $consulta = "SELECT id_cliente, nombre, empresa, direccion, telefono, correo FROM clientes WHERE id_cliente = $_id_cliente";

    $resultado = $conn -> query($consulta);
    while($row = $resultado -> fetch_assoc()){
        $datos['id_cliente'] = $row['id_cliente'];
        $datos['nombre'] = $row['nombre'];
        $datos['empresa'] = $row['empresa'];
        $datos['direccion'] = $row['direccion'];
        $datos['telefono'] = $row['telefono'];
        $datos['correo'] = $row['correo'];
    }

    echo json_encode($datos);

?>