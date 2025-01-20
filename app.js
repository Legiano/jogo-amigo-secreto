let amigos = []; // Lista original de amigos
let amigosDisponiveis = []; // Lista para sorteios

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já está na lista!");
        return;
    }

    amigos.push(nome);
    amigosDisponiveis.push(nome); // Atualiza a lista de sorteios
    atualizarLista();
    document.getElementById("amigo").value = ""; // Limpa o campo
}

function removerAmigo(nome) {
    amigos = amigos.filter(item => item !== nome);
    amigosDisponiveis = amigosDisponiveis.filter(item => item !== nome); // Remove também da lista de sorteio
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = () => removerAmigo(nome);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigosDisponiveis.length === 0) {
        alert("Todos os nomes já foram sorteados! Reiniciando a lista...");
        amigosDisponiveis = [...amigos]; // Reabastece a lista de sorteios
    }

    const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    const amigoSorteado = amigosDisponiveis[indiceSorteado];

    // Remove o nome sorteado da lista de disponíveis
    amigosDisponiveis.splice(indiceSorteado, 1);

    // Atualiza o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O Amigo sorteado foi : ${amigoSorteado} 😄`;
}
