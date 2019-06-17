function calculaIMC() {
    let Altura = document.getElementById("altura").value;
    let Peso = document.getElementById("peso").value;
    let sexoM = document.getElementById("M").checked;
    let sexoF = document.getElementById("F").checked;
    let imc = Peso / (Altura * Altura);
    if (sexoM == true) {

        if(Altura == ("") || Peso == ("")){
            alert("Preencha os campos corretamente.");
        }

        if(imc < 19.1){
            alert("Abaixo do Peso");
        }
        else if (imc >= 19.1 && imc <=25.8){
            alert("Peso Normal");
        }
        else if( imc>=25.8 && imc<=27.3){
            alert("Marginalmente Acima do Peso");
        }
        else if( imc>=27.3 && imc<=32.3){
            alert("Acima do Peso Ideal");
        }
        else{
            alert("Obeso");
        }
    }
    else{
        if(imc<20.7){
            alert("Abaixo do Peso");
        }
        else if (imc >= 20.7 && imc<=26.4){
            alert("Peso Normal");
        }
        else if( imc>=26.4 && imc<=27.8){
            alert("Marginalmente Acima do Peso");
        }
        else if( imc>=27.8 && imc<=31.1){
            alert("Acima do Peso Ideal");
        }
        else{
            alert("Obesa");
        }
    }
}