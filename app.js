// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'hora do desafio';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolher um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1', 'hora do desafio');
    exibirTextoNatela('p', 'Escolher um número entre 1 e 10');
}

exibirMensagemInicial();


exibirTextoNatela('h1', 'hora do desafio');
exibirTextoNatela('p', 'Escolher um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNatela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ` Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNatela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNatela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    console.log(chute == numeroSecreto);
   
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


// const cidade = prompt('Qual cidade vc mora?')
// paragrafo.innerHTML = `Estive em ${cidade} lembrei de vc`
