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
document.write(seleccionarIdioma(3));