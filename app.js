// Feria de Frutas Jimenez Market!!!

// Creamos la variable que va a contener el array donde se va a almacenar las frutas que quiera el usuario

const frutas = [];

// hacemos la pregunta al usuario y la agregamos al array de frutas

const fruta = prompt("Feria Jimenez Market. Que frutas deseas comprar?");
frutas.push(fruta);

// hacemos una confirmacion para saber si el usuario desea llevar mas frutas

while (confirm("Desea agregar alguna otra fruta?")) {
  const fruta = prompt("Feria Jimenez Market. Que frutas deseas agregar?");
  frutas.push(fruta);
}

// mostramos en consola la frutas que quiere el usuario recorriendo el array con un for of

console.log("Muchas gracias por su compra. Usted Compro:");

for (const fruta of frutas) {
  console.log(fruta);
}

console.log("Que tenga buen dia. Vuelva pronto");
