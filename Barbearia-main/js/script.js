<<<<<<< HEAD
function validar() {
<<<<<<< HEAD
=======
function validar()
{

  var nome = formulario.nome;

    if(nome.value == ""){
        alert("nome não informado");
        nome.focus();
      

    }

  var email = formulario.email;

    if(email.value == ""){
        alert("email não informado");
        email.focus();
       

    }

  var cel = formulario.cel;
  var regex = new RegExp(cel);

    if(cel.value == ""){
        alert("Número de celular não informado");
        cel.focus();

    }

    

  var senha = formulario.senha;

    if(senha.value == ""){
        alert("Senha não informada");
        senha.focus();
        
    }

>>>>>>> parent of 8c30d6e (quase p)
  var Csenha = formulario.Csenha;

  var senha = document.getElementById("senha")
    Csenha = document.getElementById("Csenha");

    function validar(){
      if(senha.value !== Csenha.value) {
        alert("Senhas incompatíveis");
      } else {
        Csenha.setCustomValidity('');
      }
    }

  senha.onchange = validar();
<<<<<<< HEAD
=======
  
>>>>>>> 5eff00650d82408f9a6ada35a11dc7ce900bda4b
    
=======
  Csenha.onkeyup = validar();

   
>>>>>>> parent of 8c30d6e (quase p)
}
 
function mascara_tel(obj){
      if(obj.value.length == 0){
          obj.value += "(";
      }
      if(obj.value.length == 3){
          obj.value += ")";
      }
      if(obj.value.length == 8){
          obj.value += "-";
      }
      
  
}


function somente_numero(e){
  tecla = (window.event)?event.keyCode:e.which;
  
  if((tecla>=48 && tecla<=57) || (tecla>=96 && tecla<=105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46) ){
     return true; 
  }
  else{
     return false; 
  }
}

<<<<<<< HEAD
=======
var email = formulario.email;
function validacaoEmail(field){
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
  document.getElementById("msgemail").innerHTML="E-mail válido";
  alert("email invalido");
  }

  else{
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }

  }
  
>>>>>>> parent of 8c30d6e (quase p)



