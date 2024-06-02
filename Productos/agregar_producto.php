<?php
    
    include "connection.php";

    $_producto = $_POST['producto'];
    $_categoria = $_POST['categoria'];
    $_compra = $_POST['compra'];
    $_venta = $_POST['venta'];

    $sentencia = "insert into productos(nombre, categoria, compra, venta) values('$_producto', '$_categoria', $_compra, $_venta);";

    $conn->query($sentencia);
    echo "Producto agregado";


?>
