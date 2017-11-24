// APP
var storage;
window.onload = function () {
    storage = window.localStorage;
    var usuario = new Usuario(JSON.parse(storage.getItem("usuariosCadastrados")) || []),
        sendForm = document.getElementById("sendForm"),
        formulario = document.getElementById("formulario");

    sendForm.addEventListener("mousedown", function () {
        if (formulario.reportValidity()) {
            var form_usuario = {
                nome: formulario.nome.value,
                email: formulario.email.value,
                tel: formulario.tel.value
            };
            usuario.addUsuario(form_usuario);

            alertVibrate(100);
            formulario.nome.value = "";
            formulario.email.value = "";
            formulario.tel.value = "";

        } else {
            alertVibrate(1000);
        };

        console.log(usuario.cadastrados);
    });

    var searchUsuario = document.getElementById("searchUsuario"),
        formulario_search = document.getElementById("form_search");

    searchUsuario.addEventListener("mousedown", function () {
        console.log(usuario.searchUsuario(formulario_search.search.value));
    });
}


/**
 * 
 * @param {*}  
 */
function alertVibrate($time) {
    if (!!navigator.vibrate) {
        navigator.vibrate($time);
    };
}

function $GET($URL) {
    var xhttp,
        callbackSuccess = arguments[1] || false ,
        callbackError= arguments[2] || false;        

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhttp.onprogress = function (oEvent) {
        console.log("Aguarde estamos carregando...");
    }
    xhttp.onerror = function () {
        if(!!callbackSuccess) { callbackError(this.response) };
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if(this.status < 400){
                if(!!callbackSuccess) { callbackSuccess(this.response) };
            }else if(this.status >= 400){
                if(!!callbackSuccess) { callbackError(this.response) };
            }
        }
    };
    xhttp.open("GET", $URL, true);
    xhttp.send();
}