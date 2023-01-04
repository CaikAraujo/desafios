
function escrevaNum(){
    var cartao = document.querySelector('#number').value;
    if(cartao){
        document.getElementById("cardNum").innerHTML = cartao;
    }else{
        document.getElementById("cardNum").innerHTML = "0000 0000 0000 0000"
    }

}

function escrevaName(){
    var nome = document.querySelector('#name').value

    if(nome){
        document.getElementById("cardName").innerHTML = nome
    }else{
        document.getElementById("cardName").innerHTML = "Caik Araujo"
    }
}

function escrevaData(){
    
    var data1 = document.getElementById("date").value;
    
    if(data1){
        document.getElementById("validate").innerHTML = `${data1} /`;
    }else{
        document.getElementById("validate").innerHTML = "MM/";
    }

}

function escrevaDataAno(){

    var data2 = document.getElementById("date2").value
    
    if(data2){
        document.getElementById("validate2").innerHTML = data2;
    }else{
        document.getElementById("validate2").innerHTML = "YY";
    }

}

function escrevaCvc(){

    var cvcNum = document.getElementById("cvc2").value;

    if(cvcNum){
        document.getElementById("cvcCardNum").innerHTML = cvcNum;
    }else{
        document.getElementById("cvcCardNum").innerHTML = "123"
    }
}
