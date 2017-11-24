// APP
var storage;
const HOST = "http://demo9792543.mockable.io/api/v1";

window.onload = function () {
    storage = window.localStorage;
    var usuario,
        sendForm = document.getElementById("sendForm"),
        formulario = document.getElementById("formulario");

    try {
        $GET(HOST + "/usuario", function ($return) {
            var lista = JSON.parse($return);
            usuario = new Usuario( lista || []);
            usuario.showUsuario("tabela_usuarios", lista);
        });
    } catch (exec) {
        console.log(exec);
    }

    

    //LIGANDO os bts
    sendForm.addEventListener("mousedown", function () {
        if (formulario.reportValidity()) {
            var form_usuario = {
                name: formulario.nome.value,
                email: formulario.email.value,
                phone: formulario.tel.value
            };
            usuario.addUsuario(form_usuario);

            alertVibrate(100);
            formulario.nome.value = "";
            formulario.email.value = "";
            formulario.tel.value = "";
            
            //BOOTSTRAP
            $('#cadastro').modal('hide');

        } else {
            alertVibrate(1000);
        };

        console.log(usuario.cadastrados);
    });

    var formulario_search = document.getElementById("form_search");
    formulario_search.addEventListener("keydown", function () {
        //
        var filtrados = usuario.searchUsuario(formulario_search.search.value);
        usuario.showUsuario("tabela_usuarios", filtrados);
    });
    
    // searchUsuario = document.getElementById("searchUsuario");
    // searchUsuario.addEventListener("mousedown", function () {
    //     var filtrados = usuario.searchUsuario(formulario_search.search.value);
    //     usuario.showUsuario("tabela_usuarios", filtrados);
    // });

}

