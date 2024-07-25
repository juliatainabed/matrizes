var matriz1= new Array();
matriz1.push([
    Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]);

matriz1.push([
    Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]);

matriz1.push([
    Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]);

var matriz2= new Array();
matriz2.push([
    Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]);

matriz2.push([
    Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]);

matriz2.push([
    Math.floor(Math.random()*10), Math.floor(Math.random()*10), Math.floor(Math.random()*10)]);


        function imprimirMatriz(matriz){
 tabela = "<table border='2'>";
for(var l=0; l<matriz.length; l++){
    tabela += '<tr>';
    for(var c=0; c<matriz[l].length ; c++){
        tabela += '<td>' + matriz[l][c]+ '</td>';
    }
    tabela += '</tr>';
}
tabela += '</table>';
return tabela;
}

document.write("<p class='textojs'>" +  "As matrizes foram geradas com números aleatórios sendo elas:" );
document.write("<div id='alinhar'>");
document.write(imprimirMatriz(matriz1) + " e " + imprimirMatriz(matriz2) + "</p>");
 document.write("</div>");

//soma

function matrizSoma(matriz1, matriz2) {
    var soma= new Array();
    soma.push([Math.floor(0, 0, 0)]);
    soma.push([Math.floor(0, 0, 0)]);
    soma.push([Math.floor(0, 0, 0)]);

    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[i].length; j++) {
            soma[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return soma;
}
var resultadoSoma = imprimirMatriz(matrizSoma(matriz1, matriz2));

document.write("<p class='textojs'>" + "A adição delas é:");
document.write("<div id='alinhar'>");
document.write(imprimirMatriz(matriz1));
document.write(" + ");
document.write(imprimirMatriz(matriz2));
document.write(" = ");
document.write(resultadoSoma);
document.write("</div>" + "</p> ");

//subtração

function matrizSubtracao(matriz1, matriz2) {
    var subt= new Array();
    subt.push([
    Math.floor(0, 0, 0)]);
    subt.push([
        Math.floor(0, 0, 0)]);
    subt.push([
        Math.floor(0, 0, 0)]);

    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[i].length; j++) {
            subt[i][j] = matriz1[i][j] - matriz2[i][j];
        }
    }

    return subt;
}
var resultadoSubtracao = imprimirMatriz(matrizSubtracao(matriz1, matriz2));

document.write("<p class='textojs'>" + "A subtração delas é:");
document.write("<div id='alinhar'>");
document.write(imprimirMatriz(matriz1));
document.write(" - ");
document.write(imprimirMatriz(matriz2));
document.write(" = ");
document.write(resultadoSubtracao);
document.write("</div>" + "</p>");

//multiplicação por escalar


var escalar;
var numeroValido = false;

while (!numeroValido) {
    escalar = prompt("Digite o valor pelo qual você deseja multiplicar as matrizes?");

    if (isNaN(escalar)) {
        alert("Você não inseriu um número válido. Por favor, tente novamente.");
    } else {
        numeroValido = true;
    }
}

function matrizEscalar(escalar, matriz) {
    var mult= new Array();
    mult.push([
    Math.floor(0, 0, 0)]);
    mult.push([
        Math.floor(0, 0, 0)]);
    mult.push([
        Math.floor(0, 0, 0)]);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            mult[i][j] = escalar * matriz[i][j];
        }
    }

    return mult;
}
var resultadoEscalar = imprimirMatriz(matrizEscalar(escalar,matriz1));

document.write("<p class='textojs'>" + "A multiplicação por escalar da 1° matriz é:");
document.write("<div id='alinhar'>");
document.write(imprimirMatriz(escalar));
document.write(" * ");
document.write(imprimirMatriz(matriz1));
document.write(" = ");
document.write(resultadoEscalar);
document.write("</div>" + "</p>");


var resultadoEscalar = imprimirMatriz(matrizEscalar(escalar,matriz2));

document.write("<p class='textojs'>" + "A multiplicação por escalar da 2° matriz é:");
document.write("<div id='alinhar'>");
document.write(imprimirMatriz(escalar));
document.write(" * ");
document.write(imprimirMatriz(matriz2));
document.write(" = ");
document.write(resultadoEscalar);
document.write("</div>" + "</p>");
