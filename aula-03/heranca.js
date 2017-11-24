
function Eletro(){
    this.ligado = false;
    this.botao_ligar = function(){
        this.ligado = !this.ligado;
    }
}

function Ventilador($velocidade){
    this.velocidadeMax = 5;
    this.velocidade = $velocidade;   
}

Ventilador.prototype = new Eletro();
var arno = new Ventilador(3);

console.log(arno.ligado);
console.log(arno.botao_ligar());
console.log(arno.ligado);