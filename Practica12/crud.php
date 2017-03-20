<?php
    $_SESSION["pokemons"] = array(
        "Bulbasaur"     => array("nombre" => "Bulbasur", "nick" => "bulb", "evolucion" => "ivysaur", "tipo" => ["planta", "veneno"]), 
        "Ivysaur"       => array("nombre" => "Ivysaur", "nick" => "ivy", "evolucion" => "venusaur", "tipo" => ["planta", "veneno"]),
        "Venusaur"      => array("nombre" => "Venusaur", "nick" => "venu", "evolucion" => "evol maxima", "tipo" => ["planta", "veneno"]),
        "Charmander"    => array("nombre" => "Charmander", "nick" => "charm", "evolucion" => "charmeleon", "tipo" => ["fuego"]),
        "Charmeleon"    => array("nombre" => "Charmeleon", "nick" => "charmi", "evolucion" => "charizard", "tipo" => ["fuego"]),
        "Charizard"     => array("nombre" => "Charizard", "nick" => "chari", "evolucion" => "evol maxima", "tipo" => ["fuego"]),
        "Squirtle"      => array("nombre" => "Squirtle", "nick" => "squirtle", "evolucion" => "wartortle", "tipo" => ["agua"]),
        "Wartortle"     => array("nombre" => "Wartortle", "nick" => "warto", "evolucion" => "blastoise", "tipo" => ["agua"]),
        "Blastoise"     => array("nombre" => "Blastoise", "nick" => "blasto", "evolucion" => "evol maxima", "tipo" => ["agua"]),
        "planti"        => array("nombre" => "PKM TEST", "nick" => "planti", "evolucion" => "", "tipo", [""])
    );

    
    switch ($_SERVER['REQUEST_METHOD']) {
        case "GET":
            // si está vacío los queremos devolver todos
            if(empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])){
                echo json_encode($_SESSION["pokemons"]);                
            }else{
                // get the ID
                $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1]; 
                // devolvemos la info de ese pokemon en formato json
                echo json_encode($_SESSION["pokemons"][$id]); 
            }
            break;
            
        case "PUT": //actualizar un pokemon
            // Para capturar los datos entrada JSON que viene en el request HTTP:
            $jsonPoke = json_decode(file_get_contents("php://input"), false);
            $pokemons[$jsonPoke->nombre] = $jsonPoke;
            echo json_encode($pokemons);
            break;
        
        case "POST":
            $jsonPoke = json_decode(file_get_contents("php://input"));
            //array_push($_SESSION["pokemons"], $jsonPoke);
            $_SESSION["pokemons"]["panti"] = $jsonPoke;
            echo json_encode($_SESSION["pokemons"]);
            break;
    }
?>