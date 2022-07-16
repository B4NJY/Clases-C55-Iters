/* const ourArray = [];
let i = 0;

while (i <= 5) {
  ourArray.push(i);
  i++;
  console.log( ourArray)
} */




/* for = se declaran con tres expresiones opcionales separadas por ";" */

/* for (a ; b ; c)  donde "a" es la sentencia de inicializacion , "b" sentencia condicional , "c" expresion final*/

/* const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
} */


/* Usa un bucle for para empujar los valores desde el 1 al 5 en myArray. */

/* let myArray = [];

    for(let x = 0; x <= 100; x += 10){
        myArray.push(x);
    }

    console.log(myArray) */


   /*  const arr = [10, 9, 8, 7, 6]; */

    /* console.log(arr.length)

    console.log(arr[3]) */  /* ---- 7 */

 /* for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}  */


/* Declara e inicializa una variable total a 0. Usa un bucle for para sumar el valor de cada elemento del arreglo myArr al total. */

/* const myArr = [2, 3, 4, 5, 6];

let total = 0;

    for(let i = 0; i < myArr.length; i++){
        total = total + myArr[i]
 */
        /* total = 4 */
        /* total = 7 */
/*     }

    console.log(total)
 */


    /* const arr = [[1, 2], [3, 4], [5, 6]];
      
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log(arr[i][j]);
        }
      } */


     /*  const ourArray = [];
      let i = 0;
      
      do {
        ourArray.push(i);
        i++;
      } while (i < 5); */


 /*      const ourArray = []; 
    let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
} */


/* const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5); */


/* Cambia el bucle while en el código por un bucle do...while. El bucle solo enviará el número 10 a myArray, e i será igual a 11 cuando tu código haya terminado de ejecutarse. */

// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea

/* do{
    myArray.push(i);
    i++;
}
while (i <= 10) {
  
}

console.log(myArray)
console.log(i) */


/* RECURSION */

/* function multiply(arr, n) {
    let product = 1;

    for (let i = 0; i < n; i++) {
      product *= arr[i];
      
    }
    return product;
  }

  console.log(multiply([3,24,9], 3)) */

  /* function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  } */

  /* Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr. */

  /* function sum(arr, n){
    if(n <= 0 ){
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }   */         /*        3         2  */
  /* } */

  /* console.log(sum([3,5,2,1], 4 )) */


  /* OOP */


/*   let car = {
    marca: "Fiat",
    ruedas: 4,
    volate: 1
  }

  console.log(car.marca) */


/*   let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  console.log(duck.sayName()); */


  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  console.log(dog.sayLegs());


  

