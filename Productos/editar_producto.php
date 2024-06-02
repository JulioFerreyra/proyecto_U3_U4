<?php

include "connection.php";

$_producto_id = $_POST["id"];
$_nombre = $_POST["nombre"];
$_categoria = $_POST["categoria"];
$_compra = $_POST["compra"];
$_venta = $_POST["venta"];

$sentence = "UPDATE productos SET nombre = '$_nombre', categoria = '$_categoria', compra = '$_compra', venta = '$_venta' WHERE id_producto = '$_producto_id'";
if ($conn->query($sentence)) {
    echo "Actualización exitosa";
}
?>