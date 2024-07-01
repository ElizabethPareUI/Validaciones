$(document).ready(function () {
    $('#userForm').submit(function (event) {
        event.preventDefault(); // Evita el envío normal del formulario
        
        // Captura de datos del formulario
        var formData = {
            name: $('#validationServer01').val(),
            email: $('#validationServerUsername').val(),
            password: $('#password').val(),
            gender: $('input[name=flexRadioDefault]:checked').val(),
            dob: $('#dob').val(),
            postalCode: $('#validationServer05').val(),
            province: $('#validationServer04').val(),
            city: $('#validationServer03').val(),
            dni: $('#validationServer06').val(),
            hobbies: obtenerHobbiesSeleccionados()
        };

        // Convertir a JSON
        var jsonData = JSON.stringify(formData);

        // Mostrar en consola (para propósitos de demostración)
        console.log(jsonData);
    });

    // Función para obtener hobbies seleccionados
    function obtenerHobbiesSeleccionados() {
        var hobbiesSeleccionados = [];
        $('input[name="hobbies[]"]:checked').each(function () {
            hobbiesSeleccionados.push($(this).val());
        });
        return hobbiesSeleccionados;
    }
});

// --------------------------------------------VALIDACIONES---------------------------------------------------
//Validacion Nombre--------------------------------------------

function validarNombre(){

    let validarVacio = document.getElementById('validationServer01').value;
    
    let regex = /^[^0-9]+$/;      
    let miRegex = regex.test(validarVacio);

  if(!validarVacio){
      $('#validationServer01').removeClass("is-valid").addClass("is-invalid");  
      $('.mivalidador').text('No puede queda vacio').removeClass("text-success").addClass("text-danger");    
   }else if(miRegex == false){
    $('#validationServer01').removeClass('is-valid').addClass('is-invalid');
    $('.mivalidador').text('debe contener solo letras').removeClass("text-success").addClass("text-danger");
   }else{
    $('#validationServer01').removeClass('is-invalid').addClass('is-valid');
    $('.mivalidador').text('Nombre válido').removeClass("text-danger").addClass("text-success");
   }
}




//Validacion Email--------------------------------------------

function validarEmail(){
    let validarVacio = document.getElementById('validationServerUsername').value;

    
  if(!validarVacio){
      $('#validationServerUsername').removeClass("is-invalid").addClass("is-valid");  
      $('#validationServerUsernameFeedback').text('No puede queda vacio').removeClass("text-success").addClass("text-danger");    
   }else if(!validarVacio.includes(".")){
    $('#validationServerUsername').removeClass("is-valid").addClass("is-invalid");
    $('#validationServerUsernameFeedback').text('tiene que incluir .').removeClass("text-success").addClass("text-danger");
   }
}





//Validacion Pass---------------------------------------------













//Validacion genero-------------------------------------------













//Validacion Hobbie----------------------------------------------















//Validacion DNI--------------------------------------------











//Validacion Ciudad--------------------------------------------

function validarCiudad(){

    let validarvacio = document.getElementById("validationServer03").value.toLowerCase();
   
    let regex = /^[^0-9]+$/;      
    let miRegex = regex.test(validarvacio);  

    let ciudades = ["caba", "baradero", "campana", "san pedro", "rosario", "guernica", "san isidro", "glew", "san antonio de padua", "ingeniero maschwitz"];

    console.log(validarvacio);

    if(!validarvacio){      
        $('#validationServer03').removeClass("is-valid").addClass("is-invalid");    
          $('#validationServer03Feedback').text('No puede queda vacio').removeClass("text-success").addClass("text-danger");   
    }else if(miRegex == false){
        $('#validationServer03').removeClass("is-valid").addClass("is-invalid");    
          $('#validationServer03Feedback').text('no puede contener numeros').removeClass("text-success").addClass("text-danger");   
    }else if(!ciudades.includes(validarvacio)){
        $('#validationServer03').removeClass("is-valid").addClass("is-invalid");    
          $('#validationServer03Feedback').text('esa ciudad no existe en nuestra base').removeClass("text-success").addClass("text-danger");   
    }else{
     $('#validationServer03').removeClass("is-invalid").addClass("is-valid");
    $('#validationServer03Feedback').text('ciudad valida').removeClass("text-danger").addClass("text-success");
    }
}



//Validacion Provincia--------------------------------------------
function validarProvincia(){
    let validarvacio = document.getElementById("validationServer04").value;

    if(!validarVacio){
      $('#validationServer04').removeClass("is-valid").addClass("is-invalid");  
      $('#validationServer04Feedback').text('No puede queda vacio').removeClass("valid-feedback").addClass("invalid-feedback");    
     }else{
    $('#validationServer04').removeClass("is-invalid").addClass("is-valid");
    $('#validationServer04Feedback').text('provincia válida').removeClass("invalid-feedback").addClass("valid-feedback");
   }
}



//Validacion Ocupacion--------------------------------------------












//Validacion fecha Nac.--------------------------------------------














//Validacion Check terminos--------------------------------------------



