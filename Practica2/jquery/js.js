function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    $("#btContador").click(contador);
}

function contador() {
   document.form.contador.style.color='black';
   var number = document.getElementById("numeroContador").value;
   var intervalo = setInterval(function(){
       number--;
       if(number >= 0){
           if(number <= 10){
               document.form.contador.style.color='#FF0000';
               document.form.contador.value = number;
               navigator.notification.beep(1); 
           }else{
               document.form.contador.value = number;
           }
       }
       if(number === 0){
           clearInterval(intervalo);
       }
   }, 1000);    
}

