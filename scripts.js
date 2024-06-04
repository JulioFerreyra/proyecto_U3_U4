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
        if(res == 0){
            alert("Usuario invalido.\nIntente de nuevo, por favor");
        }else{
            window.location.href = "Main/inicio.html";
        }
    }
});

}