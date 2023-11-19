let listaDeNumerosSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTexto('h1','Jogo Do número secreto')
    exibirTexto('p', 'Escolha um numero de 1 a 10.')
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
         listaDeNumerosSorteados = [];
    }
    
    if(chute == numeroSecreto){
        exibirTexto('h1', 'Você acertou!' )
        let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = (`Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`)
        exibirTexto('p', mensagemTentativas)
        document.querySelector('#reiniciar').removeAttribute('disabled')
        
    }else{

        if(chute > numeroSecreto){
            exibirTexto('p', 'O numero secreto é menor')
        }else{
            exibirTexto('p', 'O numero secreto é maior')
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() *numeroMaximo +1);
    if(listaDeNumerosSorteados.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    }else{

        listaDeNumerosSorteados.push(numeroAleatorio);
        console.log(listaDeNumerosSorteados);
        return numeroAleatorio;
    }
    
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = ('');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}