<?php
    include "conexion.php";

    $consulta = "SELECT id_cliente, nombre, empresa, direccion, telefono, correo FROM clientes";

$resultado = $conn -> query($consulta);

echo '<option value="">--Selecciona</option>';

if($resultado -> num_rows > 0){

    while($row = $resultado -> fetch_assoc()){
        echo '<option value="'.$row["id_cliente"].'">'.$row["nombre"].' '.$row["empresa"].'</option>';
    }
}
?>