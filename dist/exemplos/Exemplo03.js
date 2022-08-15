"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desevolvedora"] = 2] = "Desevolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desevolvedora
};
const Maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Atriz
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Professora,
    materias: ['Matematica básica', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matematica básica', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' - ', item);
    }
}
listar(monica.materias);
