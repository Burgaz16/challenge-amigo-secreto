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
    
    return;
    
}


