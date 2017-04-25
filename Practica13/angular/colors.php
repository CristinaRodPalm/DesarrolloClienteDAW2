<?php
    // EXAMEN
    $arrayColors = array("red", "blue", "yellow");
    
    $respuesta = '{';
  
    if(isset($_GET["colors"])){
        $random = rand(0, sizeof($arrayColors)-1);
        $respuesta .= '"color":"'.$arrayColors[$random].'"';
    }
    
    $respuesta .= '}';
    
    echo $respuesta;
?>

