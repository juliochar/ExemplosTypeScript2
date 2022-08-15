"use strict";
function somarValoresNumericoseTratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function printavaloresNumericos2(numero1, numero2) {
    console.log(numero1 + numero2);
}
function dividirPorElemesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericoseTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericoseTratar(1, 3, dividirPorElemesmo));
