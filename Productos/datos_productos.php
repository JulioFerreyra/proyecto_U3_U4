<?php
include "connection.php";


$_productoId = $_POST['productoId'];
$sentence = "SELECT id_producto, nombre, categoria, compra, venta FROM productos WHERE id_producto = $_productoId";

$result = $conn -> query($sentence);

while ($row = $result->fetch_assoc()) {

    $data["id_producto"] = $row["id_producto"];
    $data["nombre"] = $row["nombre"];
    $data["categoria"] = $row["categoria"];
    $data["compra"] = $row["compra"];
    $data["venta"] = $row["venta"];
}

echo json_encode($data);


?>