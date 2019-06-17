function maiusculo(){
    let texto = document.getElementById("texto").value;
    document.getElementById("texto").value = texto.toUpperCase();
}

function minusculo(){
    let texto = document.getElementById("texto").value;
    document.getElementById("texto").value = texto.toLowerCase();
}

function conta_caracteres(){
    let texto = document.getElementById("texto").value;
    let caracteres = texto.length;
    document.getElementById("totalCaracteres").value = caracteres + " Caracteres"; 
}
    
function conta_palavras(){
    let texto = document.getElementById("texto").value;
    let palavras = texto.split(" ");
    for(k = 0; k < palavras.length; k++){
    }
    document.getElementById("totalPalavras").value = k + " Palavras";
}
    
function conta_linhas(){
    let texto = document.getElementById('texto').value;
    let linhas = texto.split("\n").length;
    document.getElementById("totalLinhas").value = linhas + " Linhas";
}