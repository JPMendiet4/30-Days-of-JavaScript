/* 
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null
*/

function findLargestPalindrome(words) {
    let largestPalindrome = null;
    for (let word of words) {
        if (isPalindrome(word)) {
            if (largestPalindrome === null || word.length > largestPalindrome.length) {
                largestPalindrome = word;
            }
        }
    }
    return largestPalindrome;
}

function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

findLargestPalindrome(["Platzi", "javascript", "html", "css"])