//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value
    if(amigo.trim() === '') {
        alert('Por favor, insira um nome.')
    } else {
        amigos.push(amigo)
    }

    amigo = ''
    console.log(amigos)

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''

    for (let amigo of amigos) {
        let item = document.createElement('li')
        item.textContent = amigo
        lista.appendChild(item)
    }
}