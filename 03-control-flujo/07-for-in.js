// FOR IN

let user = {

    id: 1,
    name:'Jarp',
    age: 42,
};

for (let prop in user){

    console.log(prop, user[prop]);
}

let animales =['pez','lobo','oveja'];

for (let indice in animales){

    console.log(indice, animales[indice]);
}