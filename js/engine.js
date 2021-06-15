var n1;
var n2;
var resultado;

function suma(){
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    resultado = n1 + n2;
    document.getElementById("total").textContent = "El resultado de sumar ambos números es igual a " + resultado + ".";
}

function resta(){
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    resultado = n1 - n2;
    document.getElementById("total").textContent = "El resultado de restar ambos números es igual a " + resultado + ".";
}

function multi(){
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    resultado = n1 * n2;
    document.getElementById("total").textContent = "El resultado de multiplicar ambos números es igual a " + resultado + ".";
}

function divi(){
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    resultado = n1 / n2;
    document.getElementById("total").textContent = "El resultado de dividir ambos números es igual a " + resultado + ".";
}

function cuad(){
    n1 = parseInt(document.getElementById("txtN1").value);
    n2 = parseInt(document.getElementById("txtN2").value);
    resultado = n1**2 + n2**2;
    document.getElementById("total").textContent = "La suma de los cuadrados de ambos números es igual a " + resultado + ".";
}