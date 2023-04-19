let numeroEnPantalla = "";
let numero1 = 0;
let numero2 = 0;
let operacion = '';

function operarNumeros(){
    switch(operacion){
        case '*':
            return (numero1*numero2);
        case '/':
            return (numero1/numero2);
        case '-':
            return (numero1-numero2);
        case '+':
            return (numero1+numero2);
        default:
            return ("Syntax Error");
    }
}

function mostrarDatos(){
    console.log("numeroEnPantalla "+numeroEnPantalla);
    console.log("numero1 "+numero1);
    console.log("numero2 "+numero2);
    console.log("operacion "+operacion);
}

$(document).ready(function(){
    $("button[type=buttonNumber]").click(function(){
        if (numeroEnPantalla == ""){
            numeroEnPantalla = $(this).text();
        }
        else{
            numeroEnPantalla += $(this).text();
        }
        $("#pantalla").val(numeroEnPantalla);
        //console.log("BTNnumero numero en Pantalla "+numeroEnPantalla);
    });

    $("button[type=buttonOperador]").click(function(){
        numero1 = parseFloat($("#pantalla").val());
        console.log("numero1 "+numero1);
        operacion = $(this).text();
        $("#pantalla").val(0);
        numeroEnPantalla = '';
        //console.log("OPERADOR numero en Pantalla "+numeroEnPantalla);
    });

    $("#btn-igual").click(function(){
        numero2 = parseFloat(numeroEnPantalla);
        console.log("numero2 "+numero2);
        var resultado = operarNumeros();
        $("#pantalla").val(resultado);
        numero2 = 0;
        operacion = '';
        //console.log("IGUAL numero en Pantalla "+numeroEnPantalla);
    });

    $("#btn-borrar").click(function(){
        numero1 = numero2 = 0;
        numeroEnPantalla = '';
        $("#pantalla").val(0);
        mostrarDatos();
    });
});