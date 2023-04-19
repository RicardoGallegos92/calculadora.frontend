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
//Revisión por consola
function mostrarDatos(){
    console.log("numeroEnPantalla ["+numeroEnPantalla+"]");
    console.log("numero1 ["+numero1+"]");
    console.log("numero2 ["+numero2+"]");
    console.log("operacion ["+operacion+"]");
    console.log("\n");
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

        // console.log("btn-Numero ");
        // mostrarDatos();
    });

    $("button[type=buttonOperador]").click(function(){
        numero1 = parseFloat($("#pantalla").val());
        operacion = $(this).text();
        $("#pantalla").val(0);
        numeroEnPantalla = '';
        
        // console.log("btn-Operador ");
        // mostrarDatos();
    });

    $("#btn-igual").click(function(){
        numero2 = parseFloat(numeroEnPantalla);
        var resultado = operarNumeros();
        $("#pantalla").val(resultado);
        numero1 = resultado;
        numero2 = 0;
        operacion = '';
        numeroEnPantalla = '';

        // console.log("btn-igual ");
        // mostrarDatos();
    });

    $("#btn-borrar").click(function(){
        numero1 = numero2 = 0;
        operacion = numeroEnPantalla = '';
        $("#pantalla").val(0);

        // console.log("btn-borrar ");
        // mostrarDatos();
    });
});