<?php
    session_start();

    $imgRetos = array("retoMental.png", "retoMental2.jpg");
    
    $respuesta = '{';
  
    if(isset($_GET["ruta"])){
        $posicion = rand(0, sizeof($imgRetos)-1);
        $respuesta .= '"ruta":"'.$imgRetos[$posicion].'"';

    }else if(isset($_GET["pregunta"])){
        $respuesta .= '"pista" : "Fíjate bien si son iguales...",';
        $respuesta .= '"pregunta": "¿Hay alguna imagen pareja a otra?"';
    }
    
    $respuesta .= '}';
    
    echo $respuesta;
?>
