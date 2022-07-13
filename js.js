/*  == "valor de un dato" != */

/* == / !=   / === / !== */

function a(x, y){
    if(x != y){
        return "No son iguales"
    }

    return "no son iguales , pero no eentre en el if"
}


console.log(a(12, "12"))


/* > "Mayo que"  < "Menor Que " >= "Mayor o igual que"  <= . AND y el OR*/

/* 
function operadores(x , y){
    if (x >= y){
        return "x es menor"

    }  if(x == y){
        return "x es igual a y"
    }

    return "Error"
}

console.log(operadores(15, 15)) */


/* Reemplaza las dos sentencias if por una sola, usando el operador &&, el cual devolverá la cadena Yes si val es menor o igual a 50 y mayor o igual a 25. De lo contrario, devolverá la cadena No. */ 


/* function testLogicalAnd(val) { */
    // Cambia solo el código debajo de esta línea
  
    /* if (val) {
      if (val) {
        return "Yes";
      }
    } */

    /* if(val <= 50 || val >= 25 ) return "Yes"
    
    
  
    // Cambia solo el código encima de esta línea
    return "No";
  }
  
  console.log(testLogicalAnd(10)); */



  /* function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
  }


  function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }


  console.log(foo(0))
  console.log(bar(0)) */



  /* Cambia el orden lógico en la función para que devuelva el resultado correcto en todos los casos.  */


function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val > 5 || val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(3);

  /* Escribe sentencias if / else if encadenadas para cumplir con las siguientes condiciones:

num < 5 - devuelve Tiny
num < 10 - devuelve Small
num < 15 - devuelve Medium
num < 20 - devuelve Large
num >= 20 - devuelve Huge */


/* function testSize(num) {
    // Cambia solo el código debajo de esta línea
  if(num < 20)return "Tiny";
    else if(num < 10) return "Small";
        else if(num < 15) return "Medium";
            else if(num < 5)return "Large";
                else if(num >= 20) return "Huge";

  
    return "Change Me";
    // Cambia solo el código encima de esta línea
  } */


    /* Código de golf
En el juego de Golf, cada agujero tiene un par, que significa, el número promedio de strokes que se espera que haga un golfista para hundir la pelota en el agujero para completar el juego. Dependiendo de qué tan por encima o por debajo del par estén tus strokes, hay un nombre diferente.

Tu función recibirá los argumentos par y strokes. Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior (más alto) a inferior (más bajo):

Strokes (golpes)	Devuelve
1	                "Hole-in-one!"
<= par - 2	        "Eagle"
par - 1	            "Birdie"
par	                "Par"
par + 1	                "Bogey"
par + 2	            "Double Bogey"
>= par + 3	            "Go Home!"


par y strokes siempre serán numéricos y positivos. Hemos añadido un arreglo de todos los nombres para tu conveniencia. */


/* const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) { */
  // Cambia solo el código debajo de esta línea

  /*    if(strokes == 1)return names[0];
        else if(strokes <= par - 2) return names[1];
            else if(strokes == par -1) return names[2];
                else if(strokes == par) return names[3];
                    else if(strokes == par + 1) return names[4];
                        else if(strokes == par +2) return names[5];
                            else if(strokes >= par + 3) return names[6];

                                else return "Change Me" */


  
  // Cambia solo el código encima de esta línea
/* }

console.log(golfScore(5, 15));
 */

/* DELCLARACION SWITCH! */

/* switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  } */
/* 
function abc(num){
    switch (num){
        case "4":
            console.log("es cuatro")
            break;
        case 10:
            console.log("es diez")
            break;

            default:
                console.log("Error")
    }


}

abc("4") */


/*Escribe una declaración switch que pruebe val y establezca answer con las siguientes condiciones:
1 - alpha
2 - beta
3 - gamma
4 - delta */


/* function caseInSwitch(val) {
    let answer = "asd";
    // Cambia solo el código debajo de esta línea

    switch(val){

        case 1:
            return answer = "alpha";
            break;
        case 2:
            return answer = "beta";
            break;
        case 3:
            return answer = "gamma";
            break;
        case 4:
            return answer = "delta";
            break;

            default:
                return answer = "caso default"
    }


  
  
    // Cambia solo el código encima de esta línea
    return answer = "return comun";
  }
  
  console.log(caseInSwitch(10)); */




 /*  Escribe una declaración switch para establecer answer con los siguientes rangos: */
/* 1-3 -    Low
4-6 -       Mid
7-9 -       High */

/* function sequentialSizes(val) {
    let answer = "no coincide";
    // Cambia solo el código debajo de esta línea

    switch (val){
        case 1:
            case 2:
                case 3:
                    answer = "Low";
                    break;

        case 4:
            case 5:
                case 6:
                    answer = "Mid";
                    break;

        case 7:
            case 8:
                case 9:
                    answer = "High";
                    break;
    }
  
  
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  console.log(sequentialSizes(19)); */

  

  /*Cambia la cadena de sentencias if/else if por una sentencia switch. */



/* function chainToSwitch(val) {
    let answer = ""; */
    // Cambia solo el código debajo de esta línea
  
    /*  if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }  */

/*     switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer"
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine"
            break
    }


    return answer;

}

console.log(chainToSwitch("bob"))
console.log(chainToSwitch(42))
console.log(chainToSwitch(1))
console.log(chainToSwitch(99))
console.log(chainToSwitch(7)) */


let myArray = [15,4848,54,5448, "benjamin", false , ]

let cat = {
    "name": "pepe",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"] 
}

/*key - value*/

/* let numero = myArray[2]

console.log(numero)

let nameCat = cat.name;

console.log(nameCat)

let enemigos = cat.enemies[1] */

let patas = cat["legs"]

console.log(patas)

/* console.log(enemigos) */


/* const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed); */

  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog.name = "Happy Camper"

  console.log(ourDog.name)

  delete ourDog.friends;

  console.log(ourDog.friends)


