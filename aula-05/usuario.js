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
    var html = "";
    for (i in $usuario) {
        html += '<tr>\
                    <td scope="col">'+$usuario[i].name+'</td>\
                    <td scope="col">'+$usuario[i].email+'</td>\
                    <td scope="col">'+$usuario[i].phone+'</td>\
                </tr>';
    }
    document.getElementById($tableID).innerHTML = html;
}
