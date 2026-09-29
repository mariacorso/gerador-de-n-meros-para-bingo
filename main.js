// Lista dos números que já foram sorteados
let numerosSorteados = [];

// Pegando os elementos do HTML
const botao = document.getElementById("sortear");
const numero = document.getElementById("numero");
const lista = document.getElementById("lista");

// Função executada quando o botão é clicado
botao.addEventListener("click", function() {

    // Verifica se todos os 75 números já foram sorteados
    if (numerosSorteados.length === 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    let numeroSorteado;

    // Gera um número aleatório que ainda não foi sorteado
    do {
        numeroSorteado = Math.floor(Math.random() * 75) + 1;
    } while (numerosSorteados.includes(numeroSorteado));

    // Adiciona o número à lista
    numerosSorteados.push(numeroSorteado);

    // Mostra o número sorteado na tela
    numero.textContent = numeroSorteado;

    // Cria um elemento para mostrar o número no histórico
    const novoNumero = document.createElement("span");

    novoNumero.textContent = numeroSorteado;

    novoNumero.classList.add("numero-sorteado");

    // Adiciona o número à lista de sorteados
    lista.appendChild(novoNumero);
});