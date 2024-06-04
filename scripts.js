function regresar(){
    window.location.href = "index.html";
}

function iniciar_sesion() {
  let usuario = $("#txtUsuario").val();
  let pass = $("#txtPass").val();

  $.ajax({
    url: "login.php",
    method: "POST",
    data: {
      usuario: usuario,
      password: pass,
    },
    success: function (res) {
      if (res == 0) {
        alert("Usuario invalido.\nIntente de nuevo, por favor");
      } else {
        window.location.href = "inicio.html";
      }
    },
  });
}

function registar_usuario(){
let nombre = $("#nombre").val();
let apellido = $("#apellido").val();
let fec_nac = $("#fec_nac").val();
let telefono = $("#telefono").val();
let usuario =$("#usuario").val();
let pass = $("#pass").val();
let c_pass = $("#c_pass").val();

if(nombre === "" || apellido === "" || fec_nac === "" || telefono === "", usuario === "", pass === "" , c_pass === ""){
    alert("campos vacios");
}
else if(pass !== c_pass){
    alert("Contraseñas no coinciden");
}
else{
    $.ajax({
        url: "nuevo_usuario.php",
        method: "POST",
        data: {
            nombre: nombre,
            apellido: apellido,
            fec_nac: fec_nac,
            telefono: telefono,
            usuario: usuario,
            pass: pass,
        },
        success: function (res) {
            alert(res);
            window.location.href = "index.html";
        }
    
    });
}

}