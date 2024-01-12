function clasificarValor(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta ="Beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break
    }
    return respuesta;
}
console.log(clasificarValor(3));