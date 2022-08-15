"use strict";
//tipo never - encerrado de forma forçada.
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
