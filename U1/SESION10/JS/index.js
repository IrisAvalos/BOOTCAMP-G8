var actualizado = document.getElementById("titulo");
console.log(actualizado);

var actualizado2 = document.getElementsByClassName("tituloPrincipal");
console.log(actualizado2);

document.getElementById("titulo").innerHTML="APRENDIENDO MÁS SOBRE JAVASCRIPT";


function datos(){

    var nombre = document.getElementById("nombre").value;
    
    localStorage.setItem("textvalue",nombre);     //textvalue = nombre

}