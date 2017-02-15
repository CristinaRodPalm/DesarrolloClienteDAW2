$(document).ready(function(){
   $("#inicioXML").click(numeroAleatorio);
    
    
});
// 2.2. Enviar petición ajax a aciertaNumeroXML.php con parámetro inicio=si
function numeroAleatorio(){
    var xmlHttp = new XMLHttpRequest();
    
    // url destino + parámetros
    xmlHttp.open("GET", "aciertaNumeroXML.php?inicio=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    // qué hacer con la respuesta, quién recibe
    xmlHttp.onreadystatechange = function(){
        // state 4 = completado
        if(xmlHttp.readyState === 4){
            recibirNumero(xmlHttp);
        }
    }
    // enviar la petición + los datos que queramos
    xmlHttp.send(null);
}

function recibirNumero(xmlHttp){
    if(xmlHttp.status === 200){
        var respuesta = xmlHttp.responseXML;

        var numAleatorio = respuesta.getElementsByTagName("inicio")[0].textContent;
        console.log(numAleatorio);
        document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo número!!";
    }
}