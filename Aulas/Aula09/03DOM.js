/**
 * Manipulando DOM com JS
 */

const incluir = () => {
    const line = document.createElement('li'); // Cria um elemento <li>
    const input = document.querySelector('#texto'); // Pega o elemento <input id="texto">

    if (input.value == "") {
        line.textContent = ""
        line.style.display = "none"
        alert("Você não pode colocar um elemento vazio.")
    } else {
        line.textContent = input.value // Coloca o conteúdo do input no <li>
    }

        
    const list = document.getElementById("lista");
    list.appendChild(line);
}

const remover = () => {
    const lines = document.querySelectorAll("#lista li")
    const input = document.querySelector("#texto")
    const list = document.querySelector("#lista")

    lines.forEach(it => {
        if (it.textContent == input.value);
            list.removeChild(it);
    })
}

// Adicionando com um evento de click no botão de adicionar

const add = document.querySelector("#add");
const remove = document.querySelector("#rem");

add.addEventListener("click", incluir); {

}

// Removendo com um evento de click no botão de remover

remove.addEventListener("click", remover); {
    
}