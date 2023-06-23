const prod1 = {}; // Um par de chaves representa um objeto
prod1.nome = 'Celular Ultra Mega'; // Um objeto, em JavaScript, é uma coleção de chave/valor. Você tem o nome do atributo(identificador), e você passa seu valor pra ele, que pode ser um texto, número, boolean, funções e entre outros

// Sempre um objeto será uma coleção de chaves e valores.

prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2);