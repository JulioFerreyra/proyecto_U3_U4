<?php

include "connection.php";

$_id = $_POST["id"];

$sentence = "DELETE FROM productos WHERE id_producto = $_id";

if($conn -> query($sentence)) {
    echo "Producto eliminado correctamente";
}else{
    echo "error";
}
?>