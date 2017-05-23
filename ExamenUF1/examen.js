var altura;
var anchura;
window.onload = function () {
    document.getElementById("examen").innerHTML = "Altura: " + window.opener.altura + ", anchura: " + window.opener.anchura;

    document.getElementById("setTamano").
            addEventListener("click", cambiarTamano, false);

    cuentaAtras();
}
var interval;
function cuentaAtras() {
    var segundo = window.opener.numero;
    interval = setInterval(
            function () {
                segundo--;
                document.getElementById("contador").innerHTML = segundo;
                if (segundo == 0) {
                    clearInterval(interval);
                    window.close();
                }
            }, 1000);

}

function setCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}

function getCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function cambiarTamano() {
    console.log("ook");
    var ventanaPadre = window.opener;
    console.log(ventanaPadre);
    ventanaPadre.document.getElementById("tamanos").
            innerHTML += "Altura: " + altura + ", anchura: " + anchura;
    //self.resizeTo(Width=anchura, Height=altura);
}

