const VENTAS_BASE = 5

function calcularComision(numeroVentas, PrecioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
    let ventasExtra = numeroVentas - VENTAS_BASE;
    comision = ventasExtra *(PrecioProducto * 0.10);
    }
    return comision
}

function validarVentas(){
    let numeroVentasStr = recuperarTexto("txtVentas");

    if (numeroVentasStr.length > 5){
        alert("Máximo 5 caracteres");
        return false;
    }else{
        return true;
    }
}


function calcular(){

    if (validarVentas()== false){
        return;
    }

    //recuperamos propiedades de las cajas de texto
    //let cmpSueldoBase = document.getElementById("txtSueldoBase");
    //let cmpVentas = document.getElementById("txtVentas");
    //let cmpPrecio = document.getElementById("txtPrecio");
    
    //Recuperamos el valor de las cajas de texto

    //let sueldoBaseStr = cmpSueldoBase.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentas = recuperarTexto("txtVentas");
    //let PrecioProductoStr = recuperarTexto("txtPrecio");

    //let numeroVentasStr = cmpVentas.value;
    //let PrecioProductoStr = cmpPrecio.value;
    
    //convertimos el texto a numero

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, PrecioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);


}
