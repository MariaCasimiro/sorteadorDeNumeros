let btIniciar = document.getElementById("btn-sortear");
let botaoReiniciar = document.getElementById("btn-reiniciar");

function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;
    let resultado = document.getElementById("resultado");
    let numeroSorteado = quantidade > 1 ? "Números Sorteados:" : "Número Sorteado:";

        if(isNaN(quantidade)){
        console.log("aaaa");
        resultado.innerHTML = `<label class="texto__paragrafo">Porfavor, digite uma quantidade de números a serem sorteados.</label>`;
        } else if(isNaN(de)){
        resultado.innerHTML = `<label class="texto__paragrafo">Porfavor, digite um número mínimo.</label>`;
        } else if(isNaN(ate)){
        resultado.innerHTML = `<label class="texto__paragrafo">Porfavor, digite um número máximo.</label>`;
        } else if (ate - de == "0"){
        resultado.innerHTML = `<label class="texto__paragrafo">Porfavor, mude o número máximo/mínimo.</label>`;
        } else if (de > ate){
        resultado.innerHTML = `<label class="texto__paragrafo">Porfavor, mude o número máximo/mínimo.</label>`; 
        } else if (quantidade > ate - de){
            resultado.innerHTML = `<label class="texto__paragrafo">Porfavor, escolha uma quantidade menor de números.</label>`;
        } else{
        for (let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de, ate);
            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de, ate);
                }
    
            sorteados.push(numero);
        }
        
            
    console.log(`${sorteados}`);
    resultado.innerHTML = `<label class="texto__paragrafo">${numeroSorteado} ${sorteados}</label>`;
    btreiniciar(); 
    btIniciar.classList.remove("container__botao");
    btIniciar.classList.add("container__botao-desabilitado")
    }
}

function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random()* (max - min + 1)) + min ; 
}

function btreiniciar(){
    if (botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else{
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = ("");
    document.getElementById("de").value = ("");
    document.getElementById("ate").value = ("");
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: </label>`;;
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
    btIniciar.classList.remove("container__botao-desabilitado")
    btIniciar.classList.add("container__botao");
    }
