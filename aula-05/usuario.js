// USUARIO

function Usuario() {
    this.lista = arguments[0] || [];
    this.storage = window.localStorage;
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
        return JSON.stringify($usuario).indexOf($string) > -1 ;
    });
    return filtrados;
}

Usuario.prototype.showUsuario = function ($tableID, $usuario) {
    document.getElementById($tableID).innerHTML = $usuario;
}
