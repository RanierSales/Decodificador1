function criptografar() {
    let paraTraduzir = document.getElementById("texto_para_traduzir").value;

    if (/[A-Z]/gm.test(paraTraduzir) == false && /[áàâãéèêíïóôõöúñ]/gm.test(paraTraduzir) == false) {
        var texto_traduzido = paraTraduzir.replace(/e/g, "enter");
        texto_traduzido = texto_traduzido.replace(/i/g,"imes");
        texto_traduzido = texto_traduzido.replace(/a/g,"ai");
        texto_traduzido = texto_traduzido.replace(/o/g,"ober");
        texto_traduzido = texto_traduzido.replace(/u/g,"ufat");

        console.log(texto_traduzido)
    }

}

function descriptografar() { 

    let paraDescriptografar = document.getElementById("texto_para_traduzir").value;
    
    if (/[A-Z]/gm.test(paraDescriptografar) == false && /[áàâãéèêíïóôõöúñ]/gm.test(paraDescriptografar) == false) {
        var texto_traduzido = paraDescriptografar.replace(/enter/g, "e");
        texto_traduzido = texto_traduzido.replace(/imes/g,"i");
        texto_traduzido = texto_traduzido.replace(/ai/g,"a");
        texto_traduzido = texto_traduzido.replace(/ober/g,"o");
        texto_traduzido = texto_traduzido.replace(/ufat/g,"u");

        console.log(texto_traduzido)
    }  

}

