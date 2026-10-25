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

function onAcess(event) {
    // Evita o recarregamento automático da página ao enviar o formulário
    if (event) {
        event.preventDefault();
    }

    // Captura os valores digitados nos campos
    var idInput = document.getElementById('id').value;
    var passwdInput = document.getElementById('senha').value;

    // Elemento para exibir mensagem de erro
    var errorMsg = document.getElementById('login-error');

    // Verifica se o ID é "admin" e a senha é "1234"
    if (idInput === "admin" && passwdInput === "1234") {
        if (errorMsg) {
            errorMsg.style.display = 'none'; // Esconde a mensagem de erro se estiver visível
        }
        // Redireciona a aba atual para o Google
        window.location.href = 'https://google.com';
        
        // Caso prefira abrir em uma nova aba, use:
        // window.open('https://google.com', '_blank');
    } else {
        if (errorMsg) {
            errorMsg.style.display = 'block'; // Exibe a mensagem de erro da página
        } else {
            alert('ID ou senha incorretos.');
        }
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
