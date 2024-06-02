<?php
include "connection.php";


$_userId = $_POST['userId'];
$sentence = "SELECT id_user, username, lastname, age FROM user WHERE id_user = $_userId";

$result = $conn -> query($sentence);

while ($row = $result->fetch_assoc()) {

    $data["id_user"] = $row["id_user"];
    $data["username"] = $row["username"];
    $data["lastname"] = $row["lastname"];
    $data["age"] = $row["age"];
}

echo json_encode($data);


?>