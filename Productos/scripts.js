function probar_conexion() {
  $.ajax({
    url: "connection.php",
    success: function (res) {
      alert(res);
    },
  });
}

function obtener_productos() {
  $.ajax({
    url: "obtener_productos.php",
    method: "GET",
    success: function (res) {
      $("#tabla").html(res);
    },
  });
}

$(document).ready(function () {
   obtener_productos();
  });
  