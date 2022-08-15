let valorAny: any;

//any é tipo que recebe qualquer tipo?

valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';

//valorString = true; // erro.
valorString = valorAny;  //estranho - caos.

let valorString2: string = 'testando';
valorString2 = valorAny;


function somarString(string1: string, string2: string){
    console.log(string1 + string2);

}


somarString(valorString, valorString2); //dá um resultado nao esperado somando true com true?
//utilizar any pode ser considerado uma má prática.





