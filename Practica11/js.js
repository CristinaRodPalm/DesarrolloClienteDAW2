window.onload = inicio;
function inicio(){
    //1.1. 
    /* Al hacer click sobre #addDiv creamos un div, 
     * le añadimos la classe .addDiv
     * pedimos un texto a un usuario 
     * añadimos el texto al div
     * añadimos el texto a #domNodes
     */
    var addDiv = document.getElementById("addDiv");
    addDiv.addEventListener("click", addNewDiv, false);
    
    //1.2 
    /* Al hacer click sobre #addSpan creamos un span,
     * le añadimos la clase .addSpan
     * pedimos un texto a un usuario
     * añadimos el texto al span
     * añadimos el span al #domNodes
     */
    var addSpan = document.getElementById("addSpan");
    addSpan.addEventListener("click", addNewSpan, false);
    
    //2.3 
    /* Al hacer click en #setContentPrev creamos un div,
     * añadimos el texto "setContentPrev" y clase .setContentPrev 
     * lo añadimos a #domNodes
     * Al hacer click en el div pedimos un texto al usuario
     * le añadimos el texto al elemento hermano anterior 
     */
    var setContentPrev = document.getElementById("setContentPrev");
    setContentPrev.addEventListener("click", addNewDivContentPrev, false);
  
    //2.4 
    /* Al hacer click en #delPrevNode creamos un div,
     * añadimos el texto "Remove Preview" y clase .delPrevNode
     * lo añadimos a #domNodes
     * Al pasar el ratón por encima eliminamos el nodo elemento anterior
     * si no existe no da error ni borra (console.log)
     */
    var delPrevNode  = document.getElementById("delPrevNode");
    delPrevNode.addEventListener("click", deletePrevNode, false);
    
    //1.5 
    /* Al hacer click en #delNextNode creamos un div,
     * añadimos el texto "Remove Next" y clase .delNextNode
     * lo añadimos a #domNodes
     * Al hacer click eliminamos el nodo elemento siguiente
     * si no existe no da error ni borra (console.log)
     */
    var delNextNode = document.getElementById("delNextNode");
    delNextNode.addEventListener("click", deleteNextNode, false);
    
    //1.6 
    /* Al hacer click en #addAttr creamos un div,
     * añadimos el texto "Ad done Attr" y clase .addAttr
     * lo añadimos a #domNodes
     * Al hacer click pedimos un nombre de atributo y valor
     * le establecemos el atributo al elemento seleccionado
     * Si ya tiene ese atributo, se actualiza
     */
    var addAttribute = document.getElementById("addAttr");
    addAttribute.addEventListener("click", addAttr, false);
    
    //1.7
    /* Al hacer click en #delAllType creamos un div,
     * añadimos el texto "Delete All Of" y clase .delAllType
     * lo añadimos a #domNodes
     * Al hacer click pedimos un tipo de datos
     * si existe eliminamos todos los que haya en #domNodes
     */
    var delAllType = document.getElementById("delAllType");
    delAllType.addEventListener("click", deleteAllType, false);
    
    //1.8
    /* Al hacer click en #replaceMeForFirst creamos un div,
     * añadimos el texto y la clase #replaceMeForFirst
     * lo añadimos a #domNodes
     * Al hacer click se pone el primereo de #domNodes
     */
    var replaceMeForFirst = document.getElementById("replaceMeForFirst");
    replaceMeForFirst.addEventListener("click", replaceFirst, false);
};

//1.8
function replaceFirst(){
    var newDiv = document.createElement("div");
    newDiv.className = "replaceMeForFirst";
    newDiv.innerHTML = window.prompt("Introduce un texto");
    newDiv.className = "replaceMeForFirst";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
    newDiv.addEventListener("click", replaceMeForFirst, false);
}
function replaceMeForFirst(){
    // debes ponerlo el primero
}

//1.7
function deleteAllType(){
    var newDiv = document.createElement("div");
    newDiv.className = "addSpan";
    newDiv.innerHTML = "Delete All Of";
    newDiv.className = "delAllType";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
    newDiv.addEventListener("click", delAllType, false);
}
function delAllType(){
    var tipo = window.prompt("Introduce el nombre del tipo de dato a eliminar");
    
}
//1.6
function addAttr(){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Ad done Attr";
    newDiv.className = "addAttr";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
    newDiv.addEventListener("click", addAttribute, false);
}
function addAttribute(newDiv){
    var atributo = window.prompt("Introduce el nombre del atributo");
    var valor = window.prompt("Introduce el valor del atributo");
    this.setAttribute(atributo,valor);
    // no se hace pero se muestra
    console.log(this.getAttribute(atributo));
}
//1.5
function deleteNextNode(){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Remove Next";
    newDiv.className = "delPrevNode";
    newDiv.id = "delNextNodeJS";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
    newDiv.addEventListener("mouseover", delNextNode, false);
}
function delNextNode(){
    var node = document.getElementById("delNextNodeJS");
    var prevNode = node.nextElementSibling;
    if(prevNode !== null){
        node.parentNode.removeChild(prevNode);
    }else{
        console.log("No hay ningún nodo anterior");
    }
}
//1.4
function deletePrevNode(){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "Remove Preview";
    newDiv.className = "delPrevNode";
    newDiv.id = "delPrevNodeJS";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
    newDiv.addEventListener("click", delPrevNode, false);
}
function delPrevNode(){
    var node = document.getElementById("delPrevNodeJS");
    var prevNode = node.previousElementSibling;
    if(prevNode !== null){
        node.parentNode.removeChild(prevNode);
    }else{
        console.log("No hay ningún nodo anterior");
    }
}
//1.3
function addNewDivContentPrev(){
   var newDiv = document.createElement("div");
    newDiv.innerHTML = "setContentPrev";
    newDiv.className = "setContentPrev";
    console.log(newDiv.className);
    newDiv.id = "newDiv";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
    newDiv.addEventListener("click", askText, false);
}
function askText(){
    var texto = window.prompt("Introduce un texto");
    var div = document.getElementById("newDiv");
    div.previousSibling.innerHTML = texto;
}
//1.2
function addNewSpan(){
    var newSpan = document.createElement("span");
    var texto = window.prompt("Introduce el texto del nuevo span");
    newSpan.innerHTML = texto;
    newSpan.className = "addSpan";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newSpan);
}
//1.1
function addNewDiv(){
    var newDiv = document.createElement("div");
    var texto = window.prompt("Introduce el texto del nuevo div");
    newDiv.innerHTML = texto;
    newDiv.className = "addDiv";
    var nodes = document.getElementById("domNodes");
    nodes.appendChild(newDiv);
}
