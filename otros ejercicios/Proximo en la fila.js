function ProximoEnLaFila (arreglo, elemento){
    arreglo.push(elemento);
    return arreglo.shift();
}

var miarreglo = [1, 2, 3, 4 ,5 ,6];

document.write("Mis numeros: " + miarreglo);

document.write("El numero eliminado es: " + ProximoEnLaFila(miarreglo, 7 ) );
document.write("Los nuevos numeros son: " + miarreglo);