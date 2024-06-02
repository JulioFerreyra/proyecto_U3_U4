
function navegar_productos(){
    window.location.href = "productos.html";
}


function rellenar_productos(){
    $.ajax({
      url: "combo_productos.php",
      method: 'GET',
      success: function (res) {
        $("#selectProductos").html(res);
      }
    });
  }
  
  $(document).ready(function () {
    rellenar_productos();
  });
  

  function loadUserData() {

    $.ajax({
      url: "updateUser.php",
      method: "POST",
      data: {
          userId: $("#selectUsers").val()
      },
      success: function(res){
          var data = JSON.parse(res);
  
  
          
          $("#txtName").val(data.username);
          $("#txtLastname").val(data.lastname);
          $("#txtAge").val(data.age);
          
      }
  
  
    });
  }
  