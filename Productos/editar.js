function navegar_productos() {
  window.location.href = "productos.html";
}

function rellenar_productos() {
  $.ajax({
    url: "combo_productos.php",
    method: "GET",
    success: function (res) {
      $("#selectProductos").html(res);
    },
  });
}

function cargar_datos() {
  $.ajax({
    url: "datos_productos.php",
    method: "POST",
    data: {
        productoId: $("#selectProductos").val(),
    },
    success: function (res) {
        var data = JSON.parse(res);
        
        $("#txtProducto").val(data.nombre);
        $("#selCategoria").val(data.categoria);
        $("#txtCompra").val(data.compra);
        $("#txtVenta").val(data.venta);
    },
  });
}

function actualizar_producto(){
    $.ajax({
        url: "editar_producto.php",
        method: "POST",
        data: {
          id: $("#selectProductos").val(),
          nombre: $("#txtProducto").val(),
          categoria: $("#selCategoria").val(),
          compra: $("#txtCompra").val(),
          venta: $("#txtVenta").val(),
          

        },
        success: function(res){
          alert(res);
        }
      });
}

$(document).ready(function () {
  rellenar_productos();
});
