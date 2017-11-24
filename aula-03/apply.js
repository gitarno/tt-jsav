var Voo = function(){
    this.status = "em voo"
}

Voo.prototype.getStatus = function(){
    return this.status
}

var statusA = new Voo();
console.log(statusA.getStatus());

var objetoStatus = {
    status: 'em checkout'
}

var status = Voo.prototype.getStatus.apply(objetoStatus);
console.log(status.getStatus());

var statusB = new Voo();
console.log(statusB.getStatus());
