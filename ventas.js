const VENTAS_BASE = 5

function calcularComision(numeroVentas, PrecioProducto){
    let comision = 0;

    if (numeroVentas > VENTAS_BASE){
    let ventasExtra = numeroVentas - VENTAS_BASE;
    comision = ventasExtra *(PrecioProducto * 0.10);
    }
    return comision
}


function validarCampo(valor, idError) {
    const error = document.getElementById(idError);

    if (valor === "") {
        error.textContent = "El campo no puede estar vacío";
        error.className = "error";
        return false;
    }

    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números";
        error.className = "error";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos";
        error.className = "error";
        return false;
    }

    error.textContent = "";
    return true;
}

function validarSueldo() {
    const valor = document.getElementById("txtSueldosBase").value;
    return validarCampo(valor, "errSueldo");
}

function validarVentas() {
    const valor = document.getElementById("txtVentas").value;
    return validarCampo(valor, "errVentas");
}

function validarPrecio() {
    const valor = document.getElementById("txtPrecio").value;
    return validarCampo(valor, "errPrecio");
}

function calcular(){

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
