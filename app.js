// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Declaración de variables y listas

let amigos = [];



//Funciones

function agregarAmigo(){
    let capturaAmigos = document.getElementById('amigo').value;
    
    if (capturaAmigos === "") {
        alert('Por favor, inserte un nombre.');
    }else {
        amigos.push(capturaAmigos);
        //Limpiar input
        document.querySelector('#amigo').value = '';
    }
    actualizarListaAmigos();
    return;
    
}


function actualizarListaAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
       lista.innerHTML += `<li>${amigos[i]}</li>`;
        
    }
    return;
}


function sortearAmigo() {
    let validarListaAmigos = amigos.length;
    if (validarListaAmigos === 0) {
        alert('No agregaste ningún amigo a la lista, por favor agregue uno.')
    }else {
        let generarIndiceAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = amigos[generarIndiceAleatorio];
        document.getElementById("resultado").innerHTML = `El amigo secreto es ${resultado}`;

    }
    return;
}