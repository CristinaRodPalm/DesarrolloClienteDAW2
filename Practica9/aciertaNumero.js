$(document).ready(function(){
   $("#inicioXML").click(numeroAleatorio);
    
    
});
// 2.2. Enviar petición ajax a aciertaNumeroXML.php con parámetro inicio=si
function numeroAleatorio(){
    $.ajax({
        type:"GET",
        url:"aciertaNumeroXML.php",
        dataType:"json",
        data:{"inicio": "si"},
        success: function(respuesta){
            console.log(respuesta);
            /*var aleatorio = respuesta.resp;
            console.log(respuesta.resp);
            ("#mensaje").html("Se ha generado un nuevo número");*/
        },
        error : function(xhr, status) {
            alert('Ha habido un error -> '+xhr+", "+status);
        }
    });
}