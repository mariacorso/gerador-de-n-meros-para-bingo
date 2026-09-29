// Lista para guardar os números sorteados
let numerosSorteados = [];


// Pegando os elementos do HTML
const botao = document.getElementById("sortear");
const numero = document.getElementById("numero");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");


// Função para sortear um número
function sortearNumero() {

    // Verifica se todos os números já foram sorteados
    if (numerosSorteados.length >= 75) {

        alert("Todos os números já foram sorteados!");

        return;
    }


    let novoNumero;


    // Gera números até encontrar um que ainda não saiu
    do {

        novoNumero =
            Math.floor(Math.random() * 75) + 1;

    } while (numerosSorteados.includes(novoNumero));


    // Guarda o número
    numerosSorteados.push(novoNumero);


    // Mostra o número na tela
    numero.textContent = novoNumero;


    // Reinicia a animação
    numero.classList.remove("animar");

    void numero.offsetWidth;

    numero.classList.add("animar");


    // Remove a mensagem inicial
    const mensagem = document.querySelector(".vazio");

    if (mensagem) {
        mensagem.remove();
    }


    // Cria o número no histórico
    const item = document.createElement("span");

    item.classList.add("numero-sorteado");

    item.textContent = novoNumero;


    // Adiciona no histórico
    lista.appendChild(item);


    // Atualiza o contador
    contador.textContent =
        numerosSorteados.length +
        " números sorteados";


    // Desativa o botão quando chegar em 75
    if (numerosSorteados.length === 75) {

        botao.disabled = true;

        botao.textContent =
            "🎉 Todos os números foram sorteados";
    }
}


// Quando clicar no botão
botao.addEventListener(
    "click",
    sortearNumero
);