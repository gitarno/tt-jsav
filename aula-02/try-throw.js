function somarUm($num){
    if(typeof $num == "undefined"){
        throw{
            code:1,
            message: "Valor não foi informado"
        }
    }
    return $num + 1;
}


try{
    somarUm();
}catch(e){
    console.error(e);
}

