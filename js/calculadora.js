var dato1=document.getElementById("dato1");
var dato2=document.getElementById("dato2");
const mostrar=document.getElementById("resultado");
var num1=0;
var num2=0;

function insertarResultado(resultadoOperacion)
{
    //alert(resultadoOperacion);
    const nodo = document.createElement("p");
    const res = document.createTextNode(resultadoOperacion);
    nodo.appendChild(res);
    mostrar.appendChild(nodo);
}

function asignar(){
    num1 = parseInt(dato1.value);
    num2 = parseInt(dato2.value);
}

function sumar()
{
    asignar();
    insertarResultado(num1+num2);
}

function restar()
{
    asignar();
    insertarResultado(num1-num2);
}

function multiplicar()
{
    asignar();
    insertarResultado(num1*num2);
}

function dividir()
{
    asignar();
    insertarResultado(num1/num2);
}