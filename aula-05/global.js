
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