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

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const id =
            document.getElementById("id").value.trim();

        const senha =
            document.getElementById("senha").value.trim();

        const error =
            document.getElementById("login-error");


        /*
         * Credenciais provisórias.
         *
         * Troque posteriormente pelas credenciais
         * definidas no projeto.
         */

        const validId = "admin";
        const validSenha = "1234";


        if (
            id === validId &&
            senha === validSenha
        ) {

            window.location.href =
                "pages/mia.html";

        } else {

            error.style.display = "block";

        }

    });

}