//tipo never - encerrado de forma forçada.
function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo};

}


jogaErro('deu erro', 500);
