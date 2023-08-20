/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave : valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let arrObj = [];

   for (let clave in objeto) {
      let array = [clave, objeto[clave]];
      arrObj.push(array);
   }
   return arrObj;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var cantLetra = {};
   for (var i = 0; i < string.length; i++) {
      var letra = string[i];
      if (cantLetra[letra]) {
         cantLetra[letra]++;
      } else {
         cantLetra[letra] = 1;
      }
   }
   // Ordenar el objeto alfabéticamente
   var sortedKeys = Object.keys(cantLetra).sort();
   // Crear un nuevo objeto ordenado alfabéticamente
   var sortedCantLetra = {};
   for (var j = 0; j < sortedKeys.length; j++) {
      var key = sortedKeys[j];
      sortedCantLetra[key] = cantLetra[key];
   }
   return sortedCantLetra;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var mayus = '';
   var minus = '';
   for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === string.charAt(i).toUpperCase()) {
         mayus += string.charAt(i);
      } else {
         minus += string.charAt(i);
      }
   }
   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");

   for (var i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].split("").reverse().join("");
   }
   return palabras.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroLetras = numero.toString();
   var numInvertido = numeroLetras.split("").reverse().join("");

   if (numeroLetras === numInvertido) {
      return "Es capicua";
   }
   else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var palabra = string.split("");
   var nuevo = [];
   for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] !== "a") {
         if (palabra[i] !== "b") {
            if (palabra[i] !== "c") {
               nuevo.push(palabra[i]);
            }
         }
      }
   }
   nuevo = nuevo.join("");
   return nuevo;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (let i = 0; i < arrayOfStrings.length - 1; i++) {
      for (let j = i + 1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[j].length < arrayOfStrings[i].length) {
            let stringcorto = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[i];
            arrayOfStrings[i] = stringcorto;
         }
      }
   } return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter((num) => array2.includes(num));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
