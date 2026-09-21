/* =========================================
   SILENTIUM
   JAVASCRIPT
   ========================================= */


/* =========================================
   ACESSO A FICHA
   ========================================= */

const agora = new Date()
const horas = String(agora.getHours()).padStart(2, '0');
const minutos = String(agora.getMinutes()).padStart(2, '0');
const segundos = String(agora.getSeconds()).padStart(2, '0');
const horarioAcesso = `${horas}:${minutos}:${segundos}`;
const paragrafo = document.getElementById('current-time');
paragrafo.textContent += "- ÚLTIMO ACESSO: [" + horarioAcesso + "]";
/* =========================================
   LOGIN
   ========================================= */

const loginForm = document.getElementById("loginForm");

function onAcess() {
  var passwd;
  passwd = document.getElementById('senha').value;
  if(passwd=="1234"){
  window.open ('https://google.com')
  }
  else{
  alert('Password wrong');
  }
}

/*
if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const id =
            document.getElementById("id").value.trim();

        const senha =
            document.getElementById("senha").value.trim();

        const error =
            document.getElementById("login-error");

        const validId = "admin";
        const validSenha = "1234";


        if (
            id === validId &&
            senha === validSenha
        ) {

            error.style.display = "none";
            window.location.href = "https://google.com";

        } else {

            error.style.display = "block";
            senhaInput.value = "";
            senhaInput.focus();

        }

    });

}
*/
