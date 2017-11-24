
function Eletrodomestico() {
    var self = this;

    self.ligado = false;
    self.ligar = function () {
        self.ligado = true
    };

    self.desligar = function () {
        self.ligado = false;
    }

}

function Ventilador(velMax) {
    var self = this;
    
    var maximaPermitida = 5;
    var velocidadePadrao = 3;

    if (velMax > 0 && velMax <= maximaPermitida) {
        self.velocidadeMaxima = velMax;
    } else {
        self.velocidadeMaxima = velocidadePadrao;
    }
}
Ventilador.prototype = new Eletrodomestico();
var ventilador = new Ventilador(4);
console.log(ventilador);

console.log('ventilador.hasOwnProperty("velocidadeMaxima")'); 
console.log(ventilador.hasOwnProperty("velocidadeMaxima")); 
console.log("ventilador.hasOwnProperty('ligar')")
console.log(ventilador.hasOwnProperty("ligar")); 

ventilador.ligar();

console.log(ventilador);
console.log(ventilador.ligado); // Retorna true


