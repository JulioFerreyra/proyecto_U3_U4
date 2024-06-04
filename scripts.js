function iniciar_sesion(){
let usuario = $("#txtUsuario").val();
let pass = $("#txtPass").val();

$.ajax({
    url: "login.php",
    method: "POST",
    data: {
        usuario: usuario,
        password: pass,
    },
    success: function(res){
        alert(res);
    }

});

}