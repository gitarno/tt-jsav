// USUARIO

function Usuario() {
    this.cadastrados = arguments[0] || [];
    this.storage = window.localStorage;
}
Usuario.prototype.addUsuario = function ($usuario) {
    if (typeof $usuario == 'object') {
        this.cadastrados.push($usuario);
        this.storage.setItem("usuariosCadastrados", JSON.stringify(this.cadastrados));
    } else {
        alert("dados inválidos");
    }
}

Usuario.prototype.searchUsuario = function ($string) {
    var filtrados = this.cadastrados.filter(function ($usuario) {
        return JSON.stringify($usuario).indexOf($string) > -1 ;
    });
    return filtrados;
}

Usuario.prototype.showUsuario = function ($tableID, $usuario) {
 


}
