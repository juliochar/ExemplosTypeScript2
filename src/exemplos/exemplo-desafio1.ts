let funcionario = {
    codigo: 10,
    nome: 'john'
};


//declarar com os tipo explícitos.
let funcionario2: {codigo: number, nome : string} = {
    codigo: 11,
    nome: 'Aninha'
}

funcionario.codigo = 10;
funcionario.nome = 'pedrinho';


//declarar com interface
interface Funcionario {
    codigo: number,
    nome: string,
}

let funcionario3: Funcionario = {
    codigo: 12,
    nome: 'Paulinho'
}
