function datos() {

    var nombres = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellido").value;
    var edades = document.getElementById("edad").value;
    var dnis = document.getElementById("dni").value;
    var correos = document.getElementById("correo").value;

    //RESULTADOS
    console.log(nombres);
    console.log(apellidos);
    console.log(edades);
    console.log(dnis);
    console.log(correos);

    //1ERA FORMA DE DARLE FORMATO
    var mensaje = "Nombres: "+nombres;
    console.log(mensaje);

    var mensaje1= "Apellidos: "+apellidos;
    console.log(mensaje1);

    //2DA FORMA DE DARLE FORMATO
    var formato = "Nombres: "+nombres+"\nApellidos: "+apellidos+"\nEdad: "+edades+"\nDNI: "+dnis+"\nCorreo: "+correos;
    console.log(formato);
}

