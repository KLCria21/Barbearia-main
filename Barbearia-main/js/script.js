function validar() {
  var senha = formulario.senha;

    if(senha.value == ""){
        alert("Senha não informada");
        senha.focus();
        
    }

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
  Csenha.onkeyup = validar();   
}

function mascara_tel(obj){
  if(obj.value.length == 0){
      obj.value += "(";
  }
  if(obj.value.length == 3){
      obj.value += ")";
  }
  if(obj.value.length == 9){
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

  function ma(){
    var aba1 = document.getElementById("aba")
    
  }
  



