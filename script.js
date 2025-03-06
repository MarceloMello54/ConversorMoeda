// função para converter valores selecionadoa entre as moedas selecionadas

function converterMoeda(){
    // variavel para obter valor digitado pelo usuario 
    const valor = parseFloat(document.getElementById("valor").value);


// obter moeda selecionadas nas combobox
const moeadaOrigem = document.getElementById("moeadaOrigem").value;
const moeadaDestino = document.getElementById("moeadaDestino").value;

//valor cambio fixo
const valoresCambio ={
    USD:{BRL:6.10, EUR:1.25, USD:1},
    EUR:{BRL:7.35, EUR:1, USD:1.25},
    BRL:{USD:0.17, EUR:0.16, BRL:1}
}
//validação do alor digitado pelo usuario
if(isNaN(valor)){
    document.getElementById("resultado").textContent = "Digite valor valido!";
    return;
}
// realiza o calculo 
const valorConvertido = valor * valoresCambio[moeadaOrigem][moeadaDestino];

//exibir o resultado no elemento com 'id'resultado
document.getElementById("resultado").textContent=`$${valor.toFixed(2)} ${moeadaOrigem} =$${valorConvertido.toFixed(2)} ${moeadaDestino}`;
}