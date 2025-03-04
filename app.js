//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let amigoNome = document.getElementById('amigo').value
    if(amigoNome.trim() === '') {
        alert('Por favor, insira um nome.')
    } else if (amigos.includes(amigoNome)) {
        alert('Este nome já está na lista!')
    } else {
        amigos.push(amigoNome)
    }

    document.getElementById("amigo").value = ''

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''

    for (let amigo of amigos) {
        let item = document.createElement('li')
        item.textContent = amigo
        lista.appendChild(item)
    }
}

function sortearAmigo() {
    if(amigos.length > 0) {
        let amigoEscolhido = parseInt(Math.random() * amigos.length)

        let resultado = document.getElementById('resultado')
        resultado.innerHTML = ''

        let nomeEscolhido = document.createElement('li')
        nomeEscolhido.textContent = `O amigo secreto sorteado é: ${amigos[amigoEscolhido]}`
        resultado.appendChild(nomeEscolhido)
    }
}