function reverseString(str) {
    
    
return str.split('').reverse().join(''); // Divise la chaîne, inverse-la et rejoignez-la
}

console.log(reverseString("hello")); 


function countCharacters(str) {
    return str.length; // Retourne la longueur de la chaîne
}

console.log(countCharacters("hello")); 

function capitalizeWords(sentence) {
    return sentence.split(' ') // Divise la phrase en mots
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //en majuscule la première lettre de chaque mot
        .join(' '); // Rejoindre les mots en une seule chaîne
}

console.log(capitalizeWords("Bonjour gomycode")); 

function findMax(arr) {
    return Math.max(...arr); // Utilise Math.max pour trouver le maximum
}


console.log(findMax([1, 2, 3, 4, 5])); 

function findMin(arr) {
    return Math.min(...arr); // Math.min c'est pour trouver le minimum
}

console.log(findMin([1, 2, 3, 4, 5])); // 1

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0); // reduce pour calculer la somme
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

function filterArray(arr, condition) {
    return arr.filter(condition); // Filtre les éléments selon la condition donnée
}

// Exemple de condition : garder les nombres supérieurs à 2
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); //

function factorial(a) {
    if (a < 0) return undefined; // Gérer les cas négatifs
    if (a === 0) return 1; // La factorielle de 0 est 1
    return a * factorial(a - 1); // Récursivement calculer la factorielle
}

console.log(factorial(5)); // 120




function isPrime(num) {
    if (num <= 1) return false; // 0 et 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si divisible par i, ce n'est pas premier
    }
    return true; // Sinon, c'est premier
}


console.log(isPrime(5)); // vrai
console.log(isPrime(4)); // faux





function fibonacci(n) {
    const sequence = [0, 1]; // Commencer avec les deux premiers nombres
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]; 
    }
    return sequence.slice(0, n); // Retourne les n premiers nombres
}

console.log(fibonacci(5)); // [0, 1, 1, 2, 3]

