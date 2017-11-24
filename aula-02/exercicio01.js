var listaA = [
    "Lucas",
    "Kailani",
    "Roberta"
];
var listaB = [
    "Arno"
]
var listaC = [
    "Dionatas",
    "Fabio",
    "Fernando",
    "Luiz",
    "Marcos",
    "Priscila",
    "Roberto"
]

function mostrarItens($itens){
    if($itens.length != 3){
        throw {
            message: "O array deve ter 3 itens!"
        }
    }
    for(var i = 0; i < $itens.length; i++){
        console.log($itens[i]);
    }
}

try{
    mostrarItens(listaA);
    mostrarItens(listaB);
    mostrarItens(listaC);
}catch($e){
    console.log($e)
}

