<?php

if(!isset($_SESSION["pokemons"])){
    $_SESSION["pokemons"] = array(
        "bulbasaur" => array("nombre" => "Bulbasaur", "nick" => "bulbasaur", "evolucion" => "ivysaur", "tipo" => ["planta", "veneno"]),
        "ivysaur" => array("nombre" => "Ivysaur", "nick" => "ivysaur", "evolucion" => "venusaur", "tipo" => ["planta", "veneno"]),
        "venusaur" => array("nombre" => "Venusaur", "nick" => "venusaur", "evolucion" => "evol maxima", "tipo" => ["planta", "veneno"]),
        "charmander" => array("nombre" => "Charmander", "nick" => "charmander", "evolucion" => "charmeleon", "tipo" => ["fuego"]),
        "charmeleon" => array("nombre" => "Charmeleon", "nick" => "charmeleon", "evolucion" => "charizard", "tipo" => ["fuego"]),
        "charizard" => array("nombre" => "Charizard", "nick" => "charizard", "evolucion" => "evol maxima", "tipo" => ["fuego"]),
        "squirtle" => array("nombre" => "Squirtle", "nick" => "squirtle", "evolucion" => "wartortle", "tipo" => ["agua"]),
        "wartortle" => array("nombre" => "Wartortle", "nick" => "wartortle", "evolucion" => "blastoise", "tipo" => ["agua"]),
        "blastoise" => array("nombre" => "Blastoise", "nick" => "blastoise", "evolucion" => "evol maxima", "tipo" => ["agua"])
    );
}else{
    $_SESSION["pokemons"];
}

switch ($_SERVER['REQUEST_METHOD']) {
    case "GET":
        // si está vacío los queremos devolver todos
        if (empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])) {
            echo json_encode($_SESSION["pokemons"]);
        } else {
            // get the ID
            $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
            // devolvemos la info de ese pokemon en formato json
            echo json_encode($_SESSION["pokemons"][$id]);
        }
        break;

    case "PUT": //actualizar un pokemon
        // Para capturar los datos entrada JSON que viene en el request HTTP:
        $jsonPoke = json_decode(file_get_contents("php://input"), false);
        $_SESSION["pokemons"][$jsonPoke->nick] = $jsonPoke;
        echo json_encode($_SESSION["pokemons"]);
        break;

    case "POST":
        $jsonPoke = json_decode(file_get_contents("php://input"));
        array_push($_SESSION["pokemons"], $jsonPoke);
//        $_SESSION["pokemons"]["panti"] = $jsonPoke;
        echo json_encode($_SESSION["pokemons"]);
        break;

    case "DELETE":
        if (empty(explode("pokem/", $_SERVER['REQUEST_URI'])[1])) {
            echo json_encode($_SESSION["pokemons"]);
        } else {
            // get the ID
            $id = explode("pokem/", $_SERVER['REQUEST_URI'])[1];
            // devolvemos la info de ese pokemon en formato json
            unset($_SESSION["pokemons"][$id]);
            echo json_encode($_SESSION["pokemons"]);
        }
}
?>