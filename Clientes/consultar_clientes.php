<?php
include "conexion.php";

$consulta = "SELECT * FROM clientes";

$resultado = $conn -> query($consulta);

if($resultado -> num_rows > 0){

    while($row = $resultado -> fetch_assoc()){
        echo "<tr>
        <td>".$row["id_cliente"]."</td>
        <td>".$row["nombre"]."</td>
        <td>".$row["empresa"]."</td>
        <td>".$row["direccion"]."</td>
        <td>".$row["telefono"]."</td>
        <td>".$row["correo"]."</td>
    </tr>";
    }
}
?>