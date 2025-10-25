const validarEnvio = () => {
    const cmpNome = document.querySelector("#nome")
    if (cmpNome.value != "") {
        console.log("Tem conteúdo!", cmpNome.value);
        return true;
    } else {
        console.log("Sem conteúdo.");
        return false;
    }
}

// Adicionando evento de submit ao formulário.
const form = document.querySelector("#form");
form.addEventListener("submit", function(e) {
    console.log("Evento form")
    e.preventDefault();
    return validarEnvio();
})