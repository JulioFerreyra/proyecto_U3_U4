function cargar_datos(){
    $.ajax({
        url: "editar_clientes.php",
        method: "POST",
        data:{
            id_cliente: $("#combo_clientes").val()
        },
        success: function(res){
            var data = JSON.parse(res);

            $("#nombre").val(data.nombre);
            $("#empresa").val(data.empresa);
            $("#direccion").val(data.direccion);
            $("#telefono").val(data.telefono);
            $("#correo").val(data.correo);
        }
    });
}

function guardar_cambios(){
    $.ajax({
        url: "guardar_cambios.php",
        method: "POST",
        data:{
            id_cliente: $('#combo_clientes').val(),
            nombre: $('#nombre').val(),
            empresa: $('#empresa').val(),
            direccion: $('#direccion').val(),
            telefono: $('#telefono').val(),
            correo: $('#correo').val()
        },
        success: function(res){
            alert(res);
        }
    });
}

function eliminar(){
    $.ajax({
        url: "eliminar.php",
        method: "POST",
        data:{
            id_cliente: $('#combo_clientes').val(),
        },
        success: function(res){
            alert(res);
        }
    });
}