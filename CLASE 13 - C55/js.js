// METODO PUSH() Añade un dato al final de larray


let myArray = ['Roberto', 1954, 'Leonel'];

myArray.push("Benjamin");

/* console.log(myArray)
 */

let secondArray = [['John', 40, 'Bueno Aires'], ['Ezequiel', 28 , ' La Pampa']]


let newUser = ['Mario', 50, 'Jujuy'];

secondArray.push(newUser)

/* console.log(secondArray)
 */

//Metodo POP() Sirve para sacar datos del final del arreglo

let frutas = ['manzana', 'cereza', 'pera']

let newFruit = frutas.pop()

/* console.log(frutas)
console.log(newFruit) */

//Metodo Shift()Elimina el primer elemento

let abcArray = ['a','b','c']

let valueABC = abcArray.shift()

/* console.log(abcArray)
console.log(valueABC) */


// Metodo Unshift()

let numbers = [52,98,55,46,78]

numbers.unshift(true);

/* console.log(numbers);
 */
//FUNCIONES - nos permite dividir nuestro codigo para reutilizarlo



function functionName(){
    console.log("Hello Word!")
}


/* functionName();
 */
//Parametros con funciones 

function testFun(x, z){
    console.log(x, z)
}


/* testFun('Benjamin', 'Destefanis');
 */


function plusThree(num){
    return num + 80;
}

let answer = plusThree(5984)

/* console.log(answer) */


let sum = 0;

function addSum(num){
    return sum += num;  // sum = sum + num

}

let sinReturn = addSum(3)


/* console.log(sinReturn)
console.log(sum) */

/* Crea una función addFive sin ningún argumento. Esta función suma 5 a la variable total, pero su valor devuelto es undefined. */

let total = 0;

function addFive(){

    total += 5 // total = total + 5;
}

console.log(addFive())

console.log(total)



//PERMANECER EN LINEA 

/* En Informática una cola (queue) es una estructura de datos abstracta donde los elementos se mantienen en orden. Los nuevos elementos se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la parte delantera de la cola. */

/* EJERCICIO 2 */

/* Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función nextInLine debe entonces devolver el elemento que fue removido. */

function nextInline(arr, item){

    arr.push(item);
    let x = arr.shift();
    return x;
}

  // Configuración
  const testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
  /* console.log("Antes: " + "[" + testArr + "]");
  console.log(nextInline(testArr, 6));
  console.log("After: " + JSON.stringify(testArr)); */


  //Booleanos -> true (verdadero) false (falso)

  //Condicionales if

  /* Pseudocodigo
  
    if(10 < 15){
     return "si es menor!"}*/

     /* si(la condicion es verdadera){
        la sentencia se ejecuta
     } */


     /* Crea una sentencia if dentro de la función que devuelva "Yes, that was true" si el parámetro wasThatTrue es true y devuelva "No, that was false" en caso contrario. */


     let index = function(wasThatTrue){
        if(wasThatTrue == true){
            return "Yes, esto es true"
        }

        return "No, esto es false"
     }

/*      console.log(index("miArgumento"))
 */
     function comparacion(num1, num2){
        if(num1 == num2){

            console.log(num1)
            console.log(num2)
            return "Son Iguales"
        }

        return "No son iguales"
     }


/*      console.log(comparacion(15,20))
 */
     function comparo(numA, numB){
        if(numA === numB) return "Son iguales"

        return "No son iguales"
     }

     let result = comparo(80,"80")

     /* 1 == 1 // true */
     /* 1 == 2 // false */
     /* 1 == '1' // true*/
     /* "3" == 3 // true*/

     console.log(result)


     /* Agrega el operador de igualdad a la línea indicada para que la función devuelva la cadena Equal cuando val sea equivalente a 12. */


     function testEqual(val){
        if(val == 12){
            return "Equal"
        }
        return "Not Equal"
     }

     testEqual("12")