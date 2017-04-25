window.onload = function(){
    // ej5a -> mostrar mensaje en index.html
    var ventanaPadre = window.opener;
    console.log(ventanaPadre);
    ventanaPadre.document.getElementById("mensajeVentana").
            innerHTML += "La página se ha cargado";
    // ej5b -> setTimeOut para mostrar mensaje en ventana.html
    timeOut();
    
    // ej6 -> contador que aumenta con los segundos
    document.getElementById("contador").addEventListener("click", contador, false);
}
    
var click = 0;
var interval;

function contador(){
    var segundo = 0;
    
    // primera vez que se hace click
    if(click == 0){
        click = 1;
        interval = setInterval(
            function(){
                segundo++;
                document.getElementById("numContador").innerHTML = segundo;
            },1000);
    }else if (click == 1){
        clearInterval(interval);
        click = 0;
    }
    
}

function timeOut(){
    setTimeout(
            function(){
                var cookie = getCookie("nombre_usuario");
                var d = new Date();
                if(d.getHours >= 6 && d.getHours <= 14){
                    document.getElementById("cookieNombreUsuario").
                        innerHTML = "Bon dia, "+cookie;
                }else if(d.getHours > 14 && d.getHours < 20){
                    document.getElementById("cookieNombreUsuario").
                        innerHTML = "Bona tarda, "+cookie;
                }else{
                    document.getElementById("cookieNombreUsuario").
                        innerHTML = "Bona nit, "+cookie;
                }
            }, 5000);
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
