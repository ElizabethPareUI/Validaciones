



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

function validarApellido(){
   let validarVacio = document.getElementById('validationServer02').value;
   
   let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;     
   let miRegex = regex.test(validarVacio);

 if(!validarVacio){
     $('#validationServer02').removeClass("is-valid").addClass("is-invalid");  
     $('.mivalidador02').text('No puede queda vacio').removeClass("text-success").addClass("text-danger");    
  }else if(miRegex == false){
   $('#validationServer02').removeClass('is-valid').addClass('is-invalid');
   $('.mivalidador02').text('no puede contener ni numeros ni caracteres especiales').removeClass("text-success").addClass("text-danger");
  }else{
   $('#validationServer02').removeClass('is-invalid').addClass('is-valid');
   $('.mivalidador02').text('Apellido válido').removeClass("text-danger").addClass("text-success");
  }
}

function validarEmail(){
   let validarVacio = document.getElementById('validationServerUsername').value;

   
 if(!validarVacio){
     $('#validationServerUsername').removeClass("is-valid").addClass("is-invalid");  
     $('#validationServerUsernameFeedback').text('No puede queda vacio').removeClass("text-success").addClass("text-danger");    
  }else if(!validarVacio.includes("@")){
   $('#validationServerUsername').removeClass("is-valid").addClass("is-invalid");
   $('#validationServerUsernameFeedback').text('tiene que incluir el @').removeClass("text-success").addClass("text-danger");
  }else if(!validarVacio.includes(".")){
   $('#validationServerUsername').removeClass("is-valid").addClass("is-invalid");
   $('#validationServerUsernameFeedback').text('ingrese un dominio valido').removeClass("text-success").addClass("text-danger");
  }else{
   $('#validationServerUsername').removeClass("is-invalid").addClass("is-valid");
   $('#validationServerUsernameFeedback').text('Email válido').removeClass("invalid-feedback").addClass("valid-feedback");
  }

 }


document.addEventListener('DOMContentLoaded', function() {
   let nopegar = document.getElementById('validationServer03');    
   nopegar.addEventListener('paste', function(event) {
       event.preventDefault();
   });
});

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

function validarProvincia() {
   let provincia = document.getElementById("validationServer04").value.trim(); 

   if (provincia === 'Elegí una') {
     
       $('#validationServer04').removeClass("is-valid").addClass("is-invalid");
       $('#validationServer04Feedback').text('Debe ingresar una provincia').removeClass("valid-feedback").addClass("invalid-feedback");
   } else {
     
       $('#validationServer04').removeClass("is-invalid").addClass("is-valid");
       $('#validationServer04Feedback').text('Provincia válida').removeClass("invalid-feedback").addClass("valid-feedback");
   }
}


function validarCodigoPostal(){

   let codigoPostal = document.getElementById('validationServer05').value;
  
   let regex = /^[0-9]{4,8}$/;
  
   let mivalidacion = regex.test(codigoPostal);

   if(regex.test(codigoPostal)){
       $('#validationServer05').removeClass("is-invalid").addClass("is-valid");    
       $('#validationServer05Feedback').text('codigo valido').removeClass("invalid-feedback").addClass("valid-feedback");   
   }else if(codigoPostal.length > 8 ){
       $('#validationServer05').removeClass("is-valid").addClass("is-invalid");    
       $('#validationServer05Feedback').text('no pueden ser mas de ocho').removeClass("valid-feedback").addClass("invalid-feedback");   
       }else{
       $('#validationServer05').removeClass("is-valid").addClass("is-invalid");    
       $('#validationServer05Feedback').text('codigo invalido, ingrese otro').removeClass("valid-feedback").addClass("invalid-feedback");   
   }


 }


//VALIDACION DEL CHECK

function validarCheckbox(){
let checkbox = document.getElementById("invalidCheck3");
let checkboxFeedback = document.getElementById("invalidCheck3Feedback");


   if(checkbox.checked){    
       checkbox.classList.remove('is-invalid');
       checkbox.classList.add("is-valid");
       checkboxFeedback.textContent = "acepto";
   }else{
       checkbox.classList.remove('is-valid');
       checkbox.classList.add("is-invalid");
       checkboxFeedback.textContent = "tenes que aceptar los terminos";
   }

}
function validardni() {
   let dni = document.getElementById('validationServer06').value.trim(); 

   
   let regex = /^\d{6,11}$/;

   if (!regex.test(dni)) {
    
       $('#validationServer06').removeClass("is-valid").addClass("is-invalid");
       $('#validationServer06Feedback').text('Debe contener entre 6 y 11 dígitos, sin letras').removeClass("valid-feedback").addClass("invalid-feedback");
   } else {
       
       $('#validationServer06').removeClass("is-invalid").addClass("is-valid");
       $('#validationServer06Feedback').text('Válido').removeClass("invalid-feedback").addClass("valid-feedback");
   }
}

$(document).ready(function() {
  
   function validatePassword() {
       var password = $('#password').val();

       // Expresiones regulares para la validación
       var hasUpperCase = /[A-Z]/.test(password); // Al menos una letra mayúscula
       var hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password); // Al menos un símbolo
       var isLongEnough = password.length >= 8; // Al menos 8 caracteres

       
       if (hasUpperCase && hasSymbol && isLongEnough) {
           $('#validationServerPassFeedback').removeClass('text-danger').addClass('text-success');
           $('#validationServerPassFeedback').text('Contraseña válida').addClass('text-success');
       } else {
           $('#validationServerPassFeedback').text('La contraseña debe tener al menos 8 caracteres, un símbolo y una letra mayúscula.').addClass('text-danger').removeClass('valid-feedback');
           $('#password').removeClass('text-success').addClass('text-danger');
       }
   }

   
   $('#password').on('input', validatePassword);

   // VER LA CONTRASEÑA
   $('#togglePassword').click(function() {
       var type = $('#password').attr('type') === 'password' ? 'text' : 'password';
       $('#password').attr('type', type);
       $(this).find('i').toggleClass('fa-eye fa-eye-slash');
   });
});



function validahobby() {
     var checkboxes = document.getElementsByName('hobbies[]');
     var isChecked = false;

     for (var i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
         isChecked = true;
         break;
       }
     }

     if (!isChecked) {
       document.getElementById('validationMessage').style.display = 'block';
       return false;
     }

     return true;
   }































































document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('validationServer01').value;
        const apellido = document.getElementById('validationServer02').value;
        const dni = document.getElementById('validationServer06').value;
        const email = document.getElementById('validationServerUsername').value;
        const usuario = document.getElementById('validationServer09').value;
        const password = document.getElementById('password').value;
        const ciudad = document.getElementById('validationServer03').value;
        const provincia = document.getElementById('validationServer04').value;
        const codigoPostal = document.getElementById('validationServer05').value;
        const hobbies = getCheckedValues(document.getElementsByName('hobbies[]'));

        // Crear un objeto JSON con los datos
        const userData = {
            nombre,
            apellido,
            dni,
            email,
            usuario,
            password,
            ciudad,
            provincia,
            codigoPostal,
            hobbies
        };

        // Convertir el objeto a JSON
        const jsonData = JSON.stringify(userData);

        // Mostrar los datos en consola (puedes enviarlos a un servidor o donde necesites)
        console.log(jsonData);

    });

 
    function getCheckedValues(checkboxes) {
        const values = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                values.push(checkbox.value);
            }
        });
        return values;
    }
});
