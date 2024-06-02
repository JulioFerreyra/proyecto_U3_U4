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

function actualizar_producto() {
    let compra = Number($("#txtCompra").val());
    let venta = Number($("#txtVenta").val());

  if (venta <=  compra) {
    alert(
      "No es posible realizar el registro:\n'El precio de compra debe ser menor al precio de venta' "
    );
  } else {
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
      success: function (res) {
        alert(res);
      },
    });
  }
}

function eliminar_producto(){
    $.ajax({
      url: "eliminar_producto.php",
      method: "POST",
      data: {
        id: $("#selectProductos").val(),
  
      },
      success: function(res){
        alert(res);
      }
    });
  }

$(document).ready(function () {
  rellenar_productos();
});
