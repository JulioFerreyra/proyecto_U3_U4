function ver_agregar(){
    window.location.href = 'agregar_clientes.html';
}

function regresar(){
    window.location.href = 'clientes.html';
}

function ver_editar(){
    window.location.href = 'editar_clientes.html';
}

function agregar(){
    const nombre = $("#nombre").val();
    const empresa = $("#empresa").val();
    const direccion = $("#direccion").val();
    const telefono = $("#telefono").val();
    const correo = $("#correo").val();
    alert(nombre+" Empresa: "+empresa+" Direccion: "+direccion+" Telefono: "+telefono+" Correo: "+correo);

    $.ajax({
        url: "agregar_cliente.php",
        method: "POST",
        data: {
            name: nombre,
            company: empresa,
            address: direccion,
            phone: telefono,
            email: correo
        },
        success: function(r){
            alert(r);
        }
        
    });
}

function cargar_tabla(){
    $.ajax({
        url: "consultar_clientes.php",
        method: "GET",
        success: function(res){
            $("#contenido").html(res);
        }
    })
}

function cargar_combo(){
    $.ajax({
        url: "combo_clientes.php",
        method: "GET",
        success: function(res){
            $("#combo_clientes").html(res);
        }
    })
}

$(document).ready(function(){
    cargar_tabla();
    cargar_combo();
});