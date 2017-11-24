"use strict";
var conts = {
    base: "http://demo9792543.mockable.io"
}

function $GET($URL, $callbackSuccess, $callbackError) {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for old IE browsers
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onprogress = function (oEvent) {
        console.log("Aguarde estamos carregando...");
        console.log(oEvent.loaded);
    }
    xhttp.onerror = function () {
        $callbackError(this.response);
    }
    //http s://goo.gl/odMqLd
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            switch (this.status) {
                case 200:
                    $callbackSuccess(this.response);
                    break;
                case 400:
                    $callbackError(this.response);
                    break;
                default:
                    break;
            }
        }
    };
    xhttp.open("GET", $URL, true);
    xhttp.send();
}
$GET(conts.base + "/usuario", function ($return) {
    console.log(JSON.parse($return));
}, function ($return) {
    console.log($return);
});


