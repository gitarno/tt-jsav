function enviarMsg(){
    var chatHTML = $("#chat").html() || "";
    var inputVal = $("#msg")[0].value;
    console.log(inputVal);
    $("#chat").html( chatHTML + inputVal + "<br>"); 
    $("#msg")[0].value = "";
}

$("#enviar").click(enviarMsg);
$("#msg").keypress(function(e){
    if(e.keyCode == 13){
        enviarMsg();
    }
})
console.log(window.innerWidth +" x "+ window.innerHeight);
$('body').click(function(e){
    var timer = new Date().getTime();
    console.log(timer +":"+ e.originalEvent.pageX +"x"+ e.originalEvent.pageY);
})



