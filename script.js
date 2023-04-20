console.log("teste do js");

function imcJS() {
    let peso, altura, resp, feedback;
    peso = parseFloat(document.getElementById("edtpeso").value);
    altura = parseFloat(document.getElementById("edtaltura").value);
    resp = peso/(altura * altura);
    if(resp <=18.5) {
        feedback = "Abaixo do peso";
    }else if(resp<=24.9){
        feedback = "Peso ideal";
    }else if(resp <=29.9){
        feedback = "Levemente acima do peso";
    } else{
        feedback = "Programador termine a tabela";
    }
    document.getElementById("resp").innerText = "O seu IMC é: " + resp + " a sua classificação é a seguinte: \n" +feedback;
}
