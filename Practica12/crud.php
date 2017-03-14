<?php
    $pokemons = array(
        "Bulbasaur"     => array("nombre" => "Bulbasur", "nick" => "bulb", "evolucion" => "ivysaur", "tipo" => ["planta", "veneno"]), 
        "Ivysaur"       => array("nombre" => "Ivysaur", "nick" => "ivy", "evolucion" => "venusaur", "tipo" => ["planta", "veneno"]),
        "Venusaur"      => array("nombre" => "Venusaur", "nick" => "venu", "evolucion" => "evol máxima", "tipo" => ["planta", "veneno"]),
        "Charmander"    => array("nombre" => "Charmander", "nick" => "charm", "evolucion" => "charmeleon", "tipo" => ["fuego"]),
        "Charmeleon"    => array("nombre" => "Charmeleon", "nick" => "charmi", "evolucion" => "charizard", "tipo" => ["fuego"]),
        "Charizard"     => array("nombre" => "Charizard", "nick" => "chari", "evolucion" => "evol máxima", "tipo" => ["fuego"]),
        "Squirtle"      => array("nombre" => "Squirtle", "nick" => "squirtle", "evolucion" => "squirtle", "tipo" => ["agua"]),
        "Wartortle"     => array("nombre" => "Wartortle", "nick" => "warto", "evolucion" => "wartortle", "tipo" => ["agua"]),
        "Blastoise"     => array("nombre" => "Blastoise", "nick" => "blasto", "evolucion" => "evol máxima", "tipo" => ["agua"])
    );
    
    switch ($_SERVER['REQUEST_METHOD']) {
        case "GET":
            // si está vacío los queremos devolver todos
            if(empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])){
                echo json_encode($pokemons);                
            }else{
                // get the ID
                $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1]; 
                // devolvemos la info de ese pokemon en formato json
                echo json_encode($pokemons[$id]); 
            }
            break;
            
        case "PUT": 
            // capturamos la info de un pokemon (lo que queremos modificar)
            $jsonPoke = json_decode(file_get_contents("php://input"), false);
            // de esa info, cogemos lo que nos interesa (el nombre) 
            // en el pokemon con ese nombre le ponemos la nueva info enviada
            $pokemons[$jsonPoke->nombre] = $jsonPoke;
            // devolvemos la info de todos los pokemons
            echo json_encode($pokemons);
            break;
    }
?>