// alert("Hola Mundo)//
function calPrecioFinal() {
     console.log("ngreso a calcular el precio");
    //Input ingresado por el usuario se almacena la cant de entradas//
    let cantEntradas = document.getElementById("cantEntradas").value;

    // Select seleccionado por el usuario se almacena el % de descuento//
    let porcDesc = document.getElementById("porcDescuento").value;

    //en descuento se almacena la cant de pesos a descontar//
    let descuento = (cantEntradas * 1000) * porcDesc / 100;

    //en precioTotal esta el valor total a abonar por el usuario//
    let precioTotal = (cantEntradas * 1000) - descuento;
        console.log("preciototal:"+precioTotal);
    // se modifica dinamicamente el html para colocar el valor en pantalla//
    document.getElementById("valorTotal").value = precioTotal;
}