// APRENDIENDO STRINGS : CADENAS, TEXTOS, MENSAJES, PALABRAS

var mensaje ="Hola mundo";
console.log(mensaje);
console.log(typeof(mensaje));

//OPERACION: CONCATENAR STRING
console.log("Hola"+" Mundo");

//OPERACIÓN: REPETICIÓN STRING (MÁS ELEMENTOS)
console.log("Hola"+" Hola"+" Hola");

//METODO RÁPIDO PARA REPETIR STRING
var texto="Como estas ";
console.log(texto.repeat(5));


//HALLANDO EL TAMAÑO DE UN STRING
var tamaño="  HOLA COMO ESTAS";
console.log(tamaño.length);

//PASANDO STRING A MINUSCULAS
var saludo = "FELIZ CUMPLEAÑOS";
console.log(saludo.toLowerCase());

//PASANDO STRING A MAYUSCULAS
var saludo1 = "feliz dia";
console.log(saludo1.toUpperCase());

//POSICIONES DE UN STRING (0.....)
var ayuda = "HOLA";
console.log(ayuda.length);  // length -> nos ayuda a saber el tamaño de algo
console.log(ayuda.indexOf("A")); //indexof -> nos ayuda a saber la posicion de algo

//PROBANDO CONSOLE.ASSERT

console.assert("Hola"==="HOLA");     // con assert vemos error -> false
console.log("Hola"==="HOLA");        //con log sí vemos el true, false


//INSERTANDO SALTOS DE LINEA EN STRING --> \n
console.log("HOLA \nMUNDO \nESTOY \nPROGRAMANDO");
