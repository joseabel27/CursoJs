/* Personaje de tv */

let nombre = "Goku";
let anime = "Dragon Ball Z";
let edad = 24;

/* Crear el Objeto */

let personaje = {
    nombre: "Goku",
    anime: "Dragon Ball Z",
    edad: 24, 
};

/* buscar una propiedad en especifico */

console.log(personaje);
console.log(personaje.edad);
console.log(personaje['anime']);

/* Cambiar el valor de una propiedad del objeto */

personaje.edad = 30;

/* 2 forma es = personaje['edad'] = 30; */

/* Eliminar la propiedad de un objeto */

delete personaje.anime;
console.log(personaje);