<?php
include "connection.php";

$otro = "SELECT id_producto, nombre FROM productos";

$result = $conn -> query($otro);

echo '<option value="">--Productos disponibles--</option>';
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo '<option value="'.$row["id_producto"].'">'.$row["nombre"].'</option>';
    }
}
?>