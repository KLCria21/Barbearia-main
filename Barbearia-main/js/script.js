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

if(cel.value == ""){
    alert("Número de celular não informado");

    cel.focus();
}

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




