function som(numero1 = 0, numero2 = 0) {
 let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);
 
 let resultado = nt1 + nt2;

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Soma: ${resultado}`;
}

function sub(numero1 = 0, numero2 = 0) {
 let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);

 let resultado = nt1 - nt2;

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Subtração: ${resultado}`;
}

function mul(numero1 = 0, numero2 = 0) {
 let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);

 let resultado = nt1 * nt2;

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Multiplicação: ${resultado}`;
}

function div(numero1 = 0, numero2 = 0) {
 let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);

 let resultado = nt1 / nt2;

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Divisão: ${resultado}`;
}

function resto(numero1 = 0, numero2 = 0) {
    let nt1 = Number(document.querySelector("#numero1").value);
    let nt2 = Number(document.querySelector("#numero2").value);

    let resultado = nt1 % nt2;

    let resultadoElement = document.querySelector('h3');
    resultadoElement.innerHTML = `Resto: ${resultado}`;
}

function potenciação(numero1 = 0, numero2 = 0) {
    let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);

 let resultado = Math.pow(nt1, nt2);

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Potenciação: ${resultado}`;
}

function raiz(numero1 = 0, numero2 = 2) {
    let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);

 let resultado = Math.sqrt(nt1);

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Raiz Quadrada: ${resultado}`;
}

function porcentagem(numero1 = 0, numero2 = 0) {
    let nt1 = Number(document.querySelector("#numero1").value);
    let nt2 = Number(document.querySelector("#numero2").value);

    let resultado = (nt1 * nt2) / 100;

    let resultadoElement = document.querySelector('h3');
    resultadoElement.innerHTML = `Porcentagem: ${resultado}`;
}

function fatorial(numero1 = 0, numero2 = 0) {
 let nt1 = Number(document.querySelector("#numero1").value);
 let nt2 = Number(document.querySelector("#numero2").value);

 let resultado = Math.sqrt(nt1);

 let resultadoElement = document.querySelector('h3');
 resultadoElement.innerHTML = `Raiz Quadrada: ${resultado}`;
}
/*
função de alterar a cor

function cor(valor) {
    let titulo = document.querySelector('h3');
    if (valor < 0) {
        titulo.style.color = "red";
        resultadoElement.innerHTML = string(`${titulo}`)

    } else {
        titulo.style.color = "black";
        resultadoElement.innerHTML = string(`${titulo}`)
    }
}
    */