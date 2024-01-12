function seleccionarIdioma(valor){
    var idioma; // variable que se crea para guardar el valor 
    switch (valor){
        case 1:
            idioma = "Español"; //caso 1 se guarda el idioma español
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "italiano";
            break;
        default:
            idioma = "Opcion invalida";
            break;
    }
    return idioma; //imprimimos el valor guardado en la variable idioma
}
//document.write(seleccionarIdioma(3));

function sumanum (){

    let num1,num2;

    do{
        num1= parseInt(prompt(" ingrese un numero entero y positivo"));
    }
    while( isNaN(num1)|| num1<=0);

    do{
        num2=parseInt(prompt(" ingrese otro numero entero y positivo"));
    }
    while(isNaN(num2)|| num2<=0);

    let suma=num1+num2;
    alert(`la suma de ${num1} y ${num2} es : ${suma}`);
    

}



//sumanum();

function contador (){
    let numentero= parseInt(prompt("ingrese un numero de conteo:"));

    if (isNaN(numentero) || numentero<=0){
    alert("ingrese un numero valido");
    }

    for (let i = 0; i <=numentero; i+=1){
        document.write(i);
    }
}
contador();