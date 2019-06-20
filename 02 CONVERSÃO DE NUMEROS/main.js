function conversao_base() {
    var numero = Number(document.getElementById("decimal").value);

    //para Binario
    var binario = numero.toString(2);
    //para Octal
    var octal = numero.toString(8);
    //para Hexadecimal
    var hexadecimal = numero.toString(16);
	
    document.getElementById("binario").value=binario;
    document.getElementById("octal").value=octal;
    document.getElementById("hexadecimal").value=hexadecimal;
}