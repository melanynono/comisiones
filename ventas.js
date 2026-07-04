const VENTAS_BASE = 5

function calcularComision(numeroVentas, PrecioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
    let ventasExtra = numeroVentas - VENTAS_BASE;
    comision = ventasExtra *(PrecioProducto * 0.10);
    }
    return comision
}

function calcular(){

    //recuperamos propiedades de las cajas de texto
    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");
    
    //Recuperamos el valor de las cajas de texto

    let sueldoBaseStr = cmpSueldoBase.value;
    let numeroVentasStr = cmpVentas.value;
    let PrecioProductoStr = cmpPrecio.value;
    
    //convertimos el texto a numero
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(numeroVentasStr);
    let PrecioProducto = parseFloat(PrecioProductoStr);

    let comision = calcularComision(numeroVentas, PrecioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}



