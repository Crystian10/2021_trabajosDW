function guardarDatos(){
    var nombre=document.getElementById("nombre").value;
    var email=document.getElementById("email").value;
    localStorage.setItem(nombre, email);
    document.getElementById("nombre").value="";
    document.getElementById("email").value="";
    actualizarDatos();
    }
   
    function actualizarDatos(){
    var registro="";
    if(localStorage.length === 0){
        registro+='<li>Vacio</li>';
    }else{
        for(var i=0;i<=0; i++){
            var key=localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>' 
            + '<span class="nom"> <br>'+ localStorage.getItem(key)+ '</span>'+ '</li><br>';

        }
    }
    document.getElementById('contactos').innerHTML=registro;
}