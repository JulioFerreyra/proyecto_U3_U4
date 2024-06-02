<?php
include "connection.php";

$consulta = "SELECT nombre AS Producto, categoria as Categoria, compra, venta FROM productos";

$result = $conn->query($consulta);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
            <td>" . $row["Producto"] . "</td>
            <td>" . $row["Categoria"] . "</td>
            <td>" . $row["compra"] . "</td>
            <td>" . $row["venta"] . "</td>
            </tr>";
    }
}
?>