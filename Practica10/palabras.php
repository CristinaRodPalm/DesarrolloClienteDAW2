<?php
    session_start();

    $palabras = array("manzana", "naranja", "tomate", "fresa", "uva");
   
    $index = 0;
    $arrayPosiciones = array();
    $respuesta = '{';
    
    if(isset($_GET["letra"])){
        $letraUsu = $_GET["letra"];
        
        $letras = str_split($_SESSION["palabraSelect"]);
        
        foreach($letras as $letra){
            if($letraUsu == $letra){
                array_push($arrayPosiciones, $index);
            }
            $index++;
        }
        $long = sizeof($arrayPosiciones);
        $index = 1;
        foreach($arrayPosiciones as $posicion){
            if($index == $long){
                $respuesta .= '"iguales":"'.$posicion.'"';
            }else{
                $respuesta .= '"iguales":"'.$posicion.'", ';
            }
                
            $index++;
        }
    }else{
        shuffle($palabras);
        $_SESSION["palabraSelect"] = $palabras[0];

        $respuesta .= '"palabra":"'.$_SESSION["palabraSelect"].'"';
        

    }
    
    
    $respuesta .= '}';
    echo $respuesta;
    
    

   

?>
