function Usuario(){
    var nome = null;
    
    return{ 
        nome: sgNome
    }

    function sgNome(){
        if(!!arguments[0]){
            nome = arguments[0];
            return this;
        }else{
            return nome;
        }
    }
}

var usuarioA = new Usuario();
console.log(usuarioA.nome("Arno").nome());
