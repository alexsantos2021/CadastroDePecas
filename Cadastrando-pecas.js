//Validando o peso da peça
//Validando espaço para cadastro de peças
//Validando se a peça possui mais de três caracteres


let peso = 120;
if (peso > 100) {
    console.log("Peça possui o peso adequado e pode ser cadastrada")


let listaPeca = ["Disco de freio" ,"Amortecedor","Virabrequim","Vela","Bateria","Radiador","Correia","Carter","Ignição","Embreagem"]
if (listaPeca.length > 9) {
    console.log("Há espaço disponivel para realizar cadastro de peças")

let nomePeca = listaPeca [0]
if (nomePeca.length > 3) {
    console.log("A peça pode ser cadastrada")
}else{
    console.log("A peça não possui o peso adequado. Portanto, não pode ser cadastrada")
}

}else{
    console.log("Não há espaço disponiveis para cadastro de peças")
}

}else{
    console.log("Nome da peça invalido, pois a peça deve possuir mais de 3 caracteres ")

}

