//document.write ("hola muchacho")
/*function sumaNumero(){
    let num1=5;
    let num2=19;
    document.write(num1+num2);
}*/

function nuestraOpcion(){

    var opciones = document.getElementsByName("eleccion");

    for(let i=0;i<opciones.length;i++ ){
        console.log(opciones[i]);
        if(opciones[i].checked){
alert(opciones[i.value]);
        }
    }



}