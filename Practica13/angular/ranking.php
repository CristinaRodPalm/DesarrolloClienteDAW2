<?php
    session_start();
    $_SESSION["usuarios"];
   
    if(!isset($_SESSION["usuarios"])) 
        $_SESSION["usuarios"] = array("cristina" => array("nick" => "cristina", "edad" => "3", "puntuacion" => "6"));
    
    switch ($_SERVER['REQUEST_METHOD']) {
        case "GET":
            // si no le pasas nada -> devuelve todo
            if(empty(explode("usuaris/", $_SERVER['REQUEST_URI'])[1])){
                echo json_encode($_SESSION["usuarios"]);               
            }else{
                // si quiere uno determinado
                $datos = split("/", explode("usuaris/", $_SERVER['REQUEST_URI'])[1]);
                if(sizeof($datos) == 3){
                    $nick = $datos[0]; $edad = $datos[1]; $puntuacion = $datos[2];
                
                    $nuevoUsuario = array("nick" => $nick, "edad" => $edad, "puntuacion" => $puntuacion);
                    $_SESSION["usuarios"][$nick] = $nuevoUsuario;
                    echo json_encode($_SESSION["usuarios"]);
                }else{
                    
                }
                
            }
            
            break;
    }
    
?>
