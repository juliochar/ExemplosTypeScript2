function somarValoresNumericoseTratar(numero1: number, numero2: number, callback: (numero: number) => number): number{

    let resultado = numero1 + numero2;

    return callback(resultado);


}

function aoQuadrado(numero: number): number {
    return numero * numero;

}



function printavaloresNumericos2(numero1: number, numero2: number): void{
    console.log(numero1 + numero2);

}

function dividirPorElemesmo(numero: number): number {
    return numero / numero;

}


console.log(somarValoresNumericoseTratar(1,3,aoQuadrado));
console.log(somarValoresNumericoseTratar(1,3,dividirPorElemesmo));