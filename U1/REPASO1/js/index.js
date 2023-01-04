// var musicaAudio = document.getElementById("musica");

// function reproduccion(){

//     // musicaAudio.play();   
//     sonido.play();      

// }


let sonido = new Audio("./audios/Memories.mp3");

reproducir.addEventListener("click",function(){
    sonido.volume = 0.1 ;  // 1 ES EL VOLUMEN MAXIMO Y 0 ES EL MINIMO
    sonido.playbackRate = 2;  //1 ES LA VELOCIDAD NORMAL Y TENEMOS DEL 0-4
    sonido.loop = true;  //activando el bucle
    sonido.play();
})

pausa.addEventListener("click",function(){

    sonido.pause();
})

resetear.addEventListener("click",function(){
    
    sonido.pause();
    sonido.currentTime = 0;
})


function datos(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var distrito = document.getElementById("distrito").value;
    var mascota = document.getElementById("mascota").value;

    var mensaje = "Bienvenid@ "+" "+nombre+" "+apellido;

    document.getElementById("resultados").innerHTML = mensaje;

}
