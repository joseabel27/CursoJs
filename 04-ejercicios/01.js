/* Construye una funcion que reciba 2 parametros e indique cual de los 2 numeros es mayor */

/* function numeroMayor(a , b ){

    if ( a > b){

        return a;
    } else {

        return b;
    }

     
}

let mayor = numeroMayor (10 , 5);
console.log(mayor);
 */


function cualEsMayor(a, b){
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10,23 );
console.log(mayor);
