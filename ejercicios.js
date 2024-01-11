//3 intentos , mientras que el intento sea mayor a 0 imprime adivina  si el numero es nullo se cancela, si no se convierte el numero a entero pero si este es
// string decir no es numero
//de lo contrario comparar   y si es malo devolver los numero q quedan y restar luego finalizar si el intento llego a 0

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let numeroIntentos = 3;

function adivinado() {
  while (numeroIntentos > 0) {
    const intentos = prompt(" adivina el numero del 1 al 10");

    if (intentos === null) {
      alert("juego cancelado");
      break;
    } else {
      const intentoS = parseInt(intentos);

      if (isNaN(intentoS)) {
        alert("lo que ingresaste no es un numero");
      } else {
        if (intentoS === numeroAleatorio) {
          alert(`es correcto el numero es ${numeroAleatorio}`);
          break;
        } else {
          alert(
            `te has equivocado ahora te quedan ${numeroIntentos}  intentos `
          );
          numeroIntentos--;
        }
      }
    }
  }

  if (numeroIntentos === 0) {
    alert(`has perdido , el numero correcto era ${numeroAleatorio} `);
  }
}

//adivinado()
///////////////////////////////////////////////////////////////////////////



//numero medio
function numeroMedio() {
  let num1 = parseInt(
    prompt(
      "vamos a conseguir el numero medio , ingresa un numero a continuacion:"
    )
  );
  let num2 = parseInt(prompt("ingresa el segundo"));
  let num3 = parseInt(prompt("ingresa el tercero"));
  let resultado = (num1 + num2 + num3) / 3;
  let convertido = parseInt(resultado);

  alert(`La media de los números es ${convertido}`);
}

//numeroMedio();

///////////////////////////////////////////////////////////////////////////



//validar contraseña
function validarContraseña() {
  let contraseña = prompt(" ingrese su nueva contraseña:");

    if (contraseña.length < 8){
    alert("la contraseña debe tener al menos 8 caracteres");
    return;
    }

    if (!/[a-z]/.test(contraseña) || !/[A-Z]/.test(contraseña)) {
    alert(
    "La contraseña debe contener al menos una letra mayúscula y una minúscula."
     );
     return;
    }

    if (!/\d/.test(contraseña)) {
    alert("La contraseña debe contener al menos un número.");
    return;
    }


alert("Contraseña válida. ¡Bienvenido!");
}

//validarContraseña();

////////////////////////////////////////////////
//juego de piedra ,papel, tijera



function jugarPiedraPapelTijeras() {
    const opciones = ["piedra", "papel", "tijeras"];
    const eleccionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    alert(`La computadora eligió: ${eleccionComputadora}`);

    if (eleccionUsuario === eleccionComputadora) {
        alert("Es un empate.");
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
    ) {
        alert("¡Ganaste!");
    } else {
        alert("¡La computadora gana!");
    }
}

//jugarPiedraPapelTijeras();

/////////////////////////////////////////////////////////////////////


//palindromo , comprobar las palabras escritas al revez 


function palindromo (){
  let palabra = prompt("ingrese una palabra y diremos si es lo mismo al revez:");
  if (!isNaN(palabra )){
    alert(" no puedes ingresar un numero");
  }
  else{
    const palabraMiniscula = palabra.replace(/\s/g, '').toLowerCase();
    const palabraInvertida =palabraMiniscula.split('').reverse().join('');
    if( palabraInvertida === palabraMiniscula){
      alert(" las palabras son iguales ;)");
    }
    else{
      alert("las palabras no son iguales :(");
    }
  }
}

//palindromo()

//////////////////////////////////////////////////////////


function condiciones(){
  let numero = prompt("ingresa un numero ")
  if (numero > 0){
    alert("es un numero positivo");

  }
  if(numero <= 0){
    alert("numero negativo ")
  }
}

//condiciones()

/////////////////////////////////////////////////////////////////
numero =0;

function bucles(){


  while (numero <5 ){
    numero ++; 
    document.write(numero);
  }

  if (numero===5){

  document.write("llego"); 
  }
}

//bucles()


//crear un celular q pueda prender , tomar foto, grabar poo

class Celular {
  constructor(color, peso, tamaño, rdc, ram, resolucionVideo) {
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.resolucionCamara = rdc;
    this.memoriaRam = ram;
    this.resolucionVideo = resolucionVideo;
    this.encendido = false;
  }

  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("Celular prendido");
      this.encendido = true;
    } else {
      alert("Celular apagado");
      this.encendido = false;
    }
  }

  tomarFoto() {
    alert(`Foto tomada en una resolución de: ${this.resolucionCamara}`);
  }

  grabarVideo() {
    alert(`Grabando video en una resolución de: ${this.resolucionVideo}`);
  }

  mobileInfo() {
    return `
    Color: <b>${this.color}</b><br>
    Peso: <b>${this.peso}</b><br>
    Tamaño: <b>${this.tamaño}</b><br>
    Resolución de Video: <b>${this.resolucionVideo}</b><br>
    Memoria RAM: <b>${this.memoriaRam}</b><br>`;
  }
}

const celular1 = new Celular("rojo", "130g", "5.2", "4k", "3gb", "Full HD");
const celular2 = new Celular("negro", "142", "6", "4k", "4gb", "HD");
const celular3 = new Celular("azul", "150", "5.5", "2k", "2gb", "Full HD");

//document.write(`
 // ${celular1.mobileInfo()}<br>
 // ${celular2.mobileInfo()}<br>
  //${celular3.mobileInfo()}<br>
//`);




/////////////////////////////////////////////////////////////////////


 //calificaciones

let estudiante = {
  nombre: "Juan",
  edad: 20,
  calificaciones: [85, 90, 78, 95, 88],

  mostrarDetalles: function () {
      document.write(`Nombre: ${this.nombre}`);
      document.write(`Edad: ${this.edad}`);
      document.write("Calificaciones:");
      this.calificaciones.forEach((calificacion, index) => {
          console.log(`  Evaluación ${index + 1}: ${calificacion}`);
      });
  }
};

//estudiante.mostrarDetalles();

/////////////////////////////////////////////////////////////////




//metodo array filter

let numeros = [2, 4, 6, 8, 10];

let cuadrados = numeros.map(function(numero) {
    return numero * numero;
});

console.log("Array original:", numeros);
console.log("Cuadrados:", cuadrados);

let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

//console.log("Números pares:", pares);


///////////////////////////////////////////////////////////////////////////





function patrones (){
let filas = parseInt(prompt("Ingrese el número de filas para el patrón:"));

while (isNaN(filas) || filas <= 0) {
    alert("Por favor, ingrese un número válido mayor que cero.");
    filas = parseInt(prompt("Ingrese el número de filas para el patrón:"));
}

alert("Patrón generado:");

for (let i = 1; i <= filas; i++) {
    let patron = "";

    for (let j = 1; j <= i; j++) {
        patron += "* ";
    }

    alert(patron);
}
}
//patrones()


////////////////////////////////////////////////////////////////


//compras tiendas 

let productos = [
  { nombre: "Camiseta", precio: 15 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

function mostrarProductos() {
  alert("Productos disponibles:");
  for (let i = 0; i < productos.length; i++) {
      alert(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
  }
}

function tiendaVirtual() {
  let carrito = [];
  let continuarComprando = true;

  while (continuarComprando) {
      mostrarProductos();

      let indiceProducto = parseInt(prompt("Ingrese el número del producto que desea comprar:")) - 1;

      if (isNaN(indiceProducto) || indiceProducto < 0 || indiceProducto >= productos.length) {
          alert("Por favor, ingrese un número válido.");
          continue;
      }

      carrito.push(productos[indiceProducto]);

      continuarComprando = confirm("¿Desea agregar otro producto al carrito?" );
 
    }





  let totalCompra = 0;
  for (let i = 0; i < carrito.length; i++) {
      totalCompra += carrito[i].precio;
  }

  alert("Resumen de la compra:");
  for (let i = 0; i < carrito.length; i++) {
      console.log(`${carrito[i].nombre} - $${carrito[i].precio}`);
  }
  alert(`Total de la compra: $${totalCompra}`);
}

//tiendaVirtual();

