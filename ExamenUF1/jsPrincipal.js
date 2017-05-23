var numero;
var altura; var anchura;
window.onload = function(){
    // ej1
    document.getElementById("abrirVentana").
            addEventListener("click", abrirVentana, false);
    document.getElementById("guardarTamano").
            addEventListener("click", guardarTamano, false);
    document.getElementById("cuentaAtras").
            addEventListener("click", cuentaAtras, false);
}

function cuentaAtras(){
    numero = window.prompt("Introduce un número para la cuenta atrás");
    console.log(numero);
}
function abrirVentana(){
    window.open("examen.html", "nuevo");
}
function guardarTamano(){
    altura = screen.height;
    anchura = screen.width;
    
    setCookie("altura", altura, 5);
    setCookie("anchura", anchura, 5);
    console.log(getCookie("altura")+", "+getCookie("anchura"));
}

function setCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}

function getCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
