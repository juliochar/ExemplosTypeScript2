"use strict";
let valorAny;
//any é tipo que recebe qualquer tipo?
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
//valorString = true; // erro.
valorString = valorAny; //estranho - caos.
let valorString2 = 'testando';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2); //dá um resultado nao esperado somando true com true?
//utilizar any pode ser considerado uma má prática.
