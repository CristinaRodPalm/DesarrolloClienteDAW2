<?php
    session_start();
   
    if(!isset($_SESSION["usuarios"])) 
        $_SESSION["usuarios"] = array("cristina" => array("nick" => "cristina", "edad" => "3", "puntuacion" => "6", "intentos" => "7"));
    else
        
    $_SESSION["usuarios"];
    
    switch ($_SERVER['REQUEST_METHOD']) {
        case "GET":
            // todos los usuarios
            if(empty(explode("usuaris/", $_SERVER['REQUEST_URI'])[1])){
                echo json_encode($_SESSION["usuarios"]);               
            }else{
                // en algún caso determinado
                $datos = split("/", explode("usuaris/", $_SERVER['REQUEST_URI'])[1]);
                
                if($datos[0] == "login"){
                    // datos para el login, si no está se añade
                    $nick = $datos[1]; $edad = $datos[2]; $puntuacion = $datos[3];
                    $nuevoUsuario = array("nick" => $nick, "edad" => $edad, "puntuacion" => $puntuacion);
                    $_SESSION["usuarios"][$nick] = $nuevoUsuario;
                    echo json_encode($_SESSION["usuarios"]);
                    
                }else if($datos[0] == "byuser"){
                    // los datos para el ranking y la info del usuario
                    $nick = $datos[1];
                    echo json_encode($_SESSION["usuarios"][$nick]);
                }
            }
            break;
            
        case "PUT":
            $datos = split("/", explode("usuaris/", $_SERVER['REQUEST_URI'])[1]);
            if($datos[0] == "acertado"){
                $nick = $datos[1];
                echo $nick;
                $_SESSION["usuarios"][$nick][puntuacion] += 1;
                echo $_SESSION["usuarios"][$nick];
            }else if($datos[0] == "fallado"){
                $nick = $datos[1];
                
            }
            
            /*
            if(empty(explode("usuaris/", $_SERVER['REQUEST_URI'])[1])){
                echo explode("usuaris/", $_SERVER['REQUEST_URI']);             
            }
            $datos = split("/", explode("usuaris/", $_SERVER['REQUEST_URI'])[1]);
            if($datos[0] == "acertado"){
                $nick = $datos[1];
                $_SESSION["usuarios"][$nick][puntuacion] += 1;
                echo $_SESSION["usuarios"][$nick];
            }else if($datos[0] == "fallado"){
                $nick = $datos[1];
                
            }*/
            break;
        case "DELETE":
            
            break;
    }
    
?>
