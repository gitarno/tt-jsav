// USUARIO

function Usuario() {
    this.lista = arguments[0] || [];
    this.storage = window.localStorage;
    this.storage.setItem("usuariosCadastrados", JSON.stringify(this.lista));
    
}
Usuario.prototype.addUsuario = function ($usuario) {
    if (typeof $usuario == 'object') {
        this.lista.push($usuario);
        this.storage.setItem("usuariosCadastrados", JSON.stringify(this.lista));
    } else {
        if(!!arguments[1]) { arguments[1]("Dados inválidos") };
    }
}

Usuario.prototype.searchUsuario = function ($string) {
    var filtrados = this.lista.filter(function ($usuario) {
        var itemUSUARIO =  JSON.stringify($usuario).toLowerCase();
        return itemUSUARIO.indexOf($string.toLowerCase()) > -1 ;
    });
    return filtrados;
}

Usuario.prototype.showUsuario = function ($tableID, $usuario) {
    var tabela = document.getElementById($tableID);
    tabela.innerHTML = "";

    for (i in $usuario) {
        var tr = document.createElement("tr");
        tr.innerHTML = '<td scope="col">'+$usuario[i].name+'</td>\
                    <td scope="col">'+$usuario[i].email+'</td>\
                    <td scope="col">'+$usuario[i].phone+'</td>';
        
        tr.addEventListener("mousedown",function(){
            $GET("https://randomuser.me/api",function($return){
                console.log($return);

                $('#modal_usuario_body').html(JSON.stringify($return));  
                $("#modal_usuario").modal("show");
            })
            // $GET(HOST + "/usuario/"+ 123,function($return){
            //     console.log($return);
            // })
        });
        
        tabela.appendChild(tr);
    }
}
