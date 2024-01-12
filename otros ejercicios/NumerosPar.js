function numero() {
  let num=prompt("ingresa un numero");
  if (num % 2 == 0) {
    alert("El numero es divisible por 2");
  } else if (num % 3 == 0){
    alert("numero divisible por 3");
  } else {
    alert("el numero no es divisible por ninguna de las opciones");
  }
}

numero ();