window.onload = function(){
    // ej1 -> objetos predefinidos en JS
    objetosPredefinidos();
    // ej2 -> comprobar cookie nombre usuario
    document.getElementById("checkCookieUsuario").
            addEventListener("click", cookieNombreUsuario, false);
    // ej3 -> modificar titulo web
    document.getElementById("changeTitulo").
            addEventListener("click", modificarTitulo, false);
    // ej4 -> crear ventana nueva (ventana.html)
    document.getElementById("numeros").
            addEventListener("click", crearVentanaNueva, false);
    
    // ej5b -> setTimeOut para mostrar mensaje en ventana.html
    setTimeout(
            function(){
                var cookie = getCookie("nombre_usuario");
                console.log(cookie);
            }, 5000);
}

function objetosPredefinidos(){
    var listaPropiedades = document.getElementById("listaPropiedades");
    listaPropiedades.innerHTML += "<ul>";
    listaPropiedades.innerHTML += "<Strong>Valor máximo número JS</Strong>";
    listaPropiedades.innerHTML += "<li>"+Number.MAX_VALUE+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>Valor mínimo número JS</Strong>";
    listaPropiedades.innerHTML += "<li>"+Number.MIN_VALUE+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>Altura pantalla</Strong>";
    listaPropiedades.innerHTML += "<li>"+screen.height+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>Anchura pantalla</Strong>";
    listaPropiedades.innerHTML += "<li>"+screen.width+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>Altura web</Strong>";
    listaPropiedades.innerHTML += "<li>"+document.body.scrollHeight+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>Anchura web</Strong>";
    listaPropiedades.innerHTML += "<li>"+document.body.scrollWidth+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>URL web</Strong>";
    listaPropiedades.innerHTML += "<li>"+window.location+"</li>";
    
    listaPropiedades.innerHTML += "<Strong>Nombre web y extensión</Strong>";
    var ruta = document.location.toString();
    listaPropiedades.innerHTML += "<li>"+ruta.substring(ruta.lastIndexOf("/")+1)+"</li>";
   
    listaPropiedades.innerHTML += "<Strong>Valor aleatorio entre 0 y 200 (Math)</Strong>";
    listaPropiedades.innerHTML += "<li>"+Math.random(200)+"</li>";
 
    listaPropiedades.innerHTML += "<Strong>SO del ordenador</Strong>";
    var OS = "";
    var navegador = window.navigator.userAgent;
    if (navegador.indexOf("Windows NT 10.0")!= -1) OS="Windows 10";
    if (navegador.indexOf("Windows NT 6.2") != -1) OS="Windows 8";
    if (navegador.indexOf("Windows NT 6.1") != -1) OS="Windows 7";
    //if (navegador.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    //if (navegador.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    //if (navegador.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (navegador.indexOf("Mac")            != -1) OS="Mac/iOS";
    //if (navegador.indexOf("X11")            != -1) OSName="UNIX";
    if (navegador.indexOf("Linux")          != -1) OS="Linux";
    listaPropiedades.innerHTML += "<li>"+OS+"</li>";
        
    listaPropiedades.innerHTML += "</ul>";
}

function cookieNombreUsuario(){
    var clave = getCookie("nombre_usuario");
    if (clave == "") {
        var valor = window.prompt("Introduce tu valor");
        if(valor!=""){
            setCookie("nombre_usuario", valor, 5);
            var texto = getCookie("nombre_usuario");
            document.getElementById("cookieNombreUsuario").innerHTML = texto;
        }
    }else{
        document.getElementById("cookieNombreUsuario").innerHTML = clave;
    }
}

function modificarTitulo(){
    var titulo;
    do{
        titulo = window.prompt("Introduce un nombre de título: ");
    }while(titulo=="" || titulo==undefined);
    document.title = titulo.toUpperCase();
}

function crearVentanaNueva(){
    var valores;
    do{
        valores = window.prompt("Introduce 2 números: ");
        var valor1 = valores.split(",")[0];
        var valor2 = valores.split(",")[1];
    }while(valor1 < 200 || valor1 > 800 || valor2 < 200 || valor2 > 800);
    
    var maximo = Math.max(valor1, valor2);
    var minimo = Math.min(valor1, valor2);
    
    var anchura = Math.random()*(maximo - minimo) + minimo;
    var altura = Math.random()*(maximo - minimo) + minimo;
    
    window.open("ventana.html", "nuevo", "width="+anchura+", height="+altura+"");
}

// PREDEF COOKIE

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

