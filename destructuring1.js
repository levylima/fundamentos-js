// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Está tirando os atributos "nome" e "idade" dentro do objeto "pessoa".
console.log(nome, idade);

const { nome: n, idade: i } = pessoa // Está tirando os atributos "nome" e "idade" dentro do objeto "pessoa" e cria as variáveis "n" e "i".

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

const { conta: { ag, num} } = pessoa;