function encriptar() {
    var texto = document.getElementById("inputTexto").value;

    var txtCifrado = texto.replace(/e/gim, "enter");
    var txtCifrado = txtCifrado.replace(/o/gim, "ober");
    var txtCifrado = txtCifrado.replace(/i/gim, "imes");
    var txtCifrado = txtCifrado.replace(/a/gim, "ai");
    var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

    //borramos en resultado todo agregado visual
    document.getElementById("imgMuneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;

}


//desncriptador

function desencriptar() {
    var texto = document.getElementById("inputTexto").value;

    var txtCifrado = texto.replace(/enter/gi, "e");
    var txtCifrado = txtCifrado.replace(/ober/gi, "o");
    var txtCifrado = txtCifrado.replace(/imes/gi, "i");
    var txtCifrado = txtCifrado.replace(/ai/gi, "a");
    var txtCifrado = txtCifrado.replace(/ufat/gi, "u");

    //borramos en resultado todo agregado visual
    document.getElementById("imgMuneco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;

}


//boton copiar
