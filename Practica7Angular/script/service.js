// Métodos
app.service('concesionario', function () {

    this.concesionarios = [];
    
    // Objeto coche
    function Coche() {
        this.modelo;
        this.precio;
        this.marca;
        this.extras = [];

    }
    // Objeto concesionario
    function Concesionario() {
        this.nombre;
        this.direccion;
        this.comanda = [];

        this.addComanda = function (coche) {
            this.comanda.push(coche);
        };
    }

    this.crearConcesionario = function (nombre, direccion) {
        var aux = new Concesionario();
        aux.nombre = nombre;
        aux.direccion = direccion;
        this.concesionarios.push(aux);
        return aux;
    }

    this.crearCoche = function (marca, modelo, precio, extras) {
        var coche = new Coche();
        coche.modelo = modelo;
        coche.precio = precio;
        coche.marca = marca;
        coche.extras = extras;
        return coche;
    }
    
    this.crearCocheConcesionario = function (numCon, marca, modelo, precio, extra){
        var coche = new Coche();
        coche.modelo = modelo;
        coche.precio = precio;
        coche.marca = marca;
        
        coche.extras = extra;
        this.concesionarios[numCon].addComanda(coche);
    }

    this.addComanda = function (numConcesionario, coche) {
        this.concesionarios[numConcesionario].addComanda(coche);
    }

});
