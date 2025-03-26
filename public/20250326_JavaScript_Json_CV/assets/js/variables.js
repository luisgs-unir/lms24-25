
/* Formas de declarar variables en JS */

// Variable modo antiguo - NO RECOMENDABLE, por que existe en toda la función en la que se crea
var variable_con_ambito_de_funcion = 5;

// Variable en modo moderno - RECOMENDABLE SIEMPRE, por que sólo exite en el bloque en el que lo creamos.
let variable_con_ambito_de_bloque = 7;


// Constantes. Cuando no queremos que se cambie el valor después de inicializarla.
const variable_que_no_podemos_cambiar_su_valor = 10;


function esto_es_una_funcion(){
    if(true){
        var variable_de_funcion = 57;
        let variable_de_bloque = 89;
    }

    console.log(variable_de_funcion);   // 57
    console.log(variable_de_bloque);    // Da error

}

// llamamos a la función
esto_es_una_funcion()