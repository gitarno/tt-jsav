

class Usuario {
    constructor($nome) {
        this.nome = $nome;
    }
    speak() {
        alert(this.nome);
    }
}

let arno = new Usuario('Arno');
arno.speak();
