// short - circuit

// Falso
// False
// 0
// ''
// null
// undifined
// NaN

let nombre = 'jarp';
let userName = nombre || 'Anonimo';
console.log(userName); 

function fn1(){

    console.log('soy funcion 1');
    return true;
}

function fn2 (){

    console.log('Soy funcion 2'); 
    return true;
}

let x = fn1() && fn2();
