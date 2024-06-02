function agregar_producto() {
  let producto = $("#txtProducto").val();
  let categoria = $("#selCategoria").val();
  let compra = $("#txtCompra").val();
  let venta = $("#txtVenta").val();

  if (compra >= venta) {
    alert(
      "No es posible realizar el registro:\n'El precio de compra debe ser menor al precio de venta' "
    );
  } else {
    $.ajax({
      url: "agregar_producto.php",
      method: "POST",
      data: {
        producto: producto,
        categoria: categoria,
        compra: compra,
        venta: venta,
      },
      success: function (res) {
        alert(res);
      },
    });
  }
}
