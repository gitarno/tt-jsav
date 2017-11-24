"use strict";
// var msg_error = document.getElementById("error");
function assert($method,$valorA,$valorB,$result){
    var result = $method($valorA,$valorB);
    if( result != $result){
        throw {
            code:0,
            message: "ERRO"
        }
    }
    return {
        code: 1,
        message: $result
    };
}
function SOMAR($a, $b){
    return $a + $b;
}

try{
    console.log(assert(SOMAR,1,1,2));
}catch($e){
    console.error($e);
    console.error($e.message);
    
    // msg_error.innerHTML += $e.message; 
}

