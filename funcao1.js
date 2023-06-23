// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3); // Soma os 2 parâmetros da função.
imprimirSoma(2); // Irá ter como parâmetro "a" o 2, e o "b" como "undefined", tendo como resultado "NaN".
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Somará os parâmetros "a" e "b" da função ignorando todo o resto.
imprimirSoma();

// Função com retorno
function soma(a, b){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2, 7))