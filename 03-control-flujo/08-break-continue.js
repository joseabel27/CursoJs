//BREAK Y CONTINUE

let i=0;

while (i < 6){

    i++;
    if (i === 2){

        continue; // salta la comparacion de 2
    }

    if (i === 4){

        break; 
    }
    console.log(i);
}