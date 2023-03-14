function recogerDatos(){
    let nombreCliente = document.getElementById("nombre").value;
    let apellidoCliente = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("date").value;
    let correoElectronico =document.getElementById("email").value;
    let contraseña= document.getElementById("password").value;
    let edadCliente= document.getElementById("edad").value;
    let direccion = document.getElementById("direccion").value;
    let provinciaVive= document.getElementById("provincia").value;

    let Sexo = '';

    let sexoHombre = document.getElementById("hombre");
    let sexoMujer = document.getElementById("mujer");
    let sexoOtros = document.getElementById("otros");

    if(sexoHombre.checked ){
        Sexo= sexoHombre.value;
    }
    else if(sexoMujer.checked){
        Sexo= sexoMujer.value
    }else{
        Sexo= sexoOtros.value
    }


    let mensajefinal=  nombreCliente +  apellidoCliente + fechaNacimiento +
     correoElectronico + contraseña + edadCliente + direccion + provinciaVive 

   console.log(mensajefinal);
}