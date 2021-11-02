function guardarDato(){
    var nombre=document.getElementById("nombre").value; /* crear variable y guardarlo */
    var movil=document.getElementById("movil").value;
    var email=document.getElementById("email").value;
    
    const datos = {
        'movil': movil,
        'email': email,
    }

    localStorage.setItem(nombre, JSON.stringify(datos)); /* guardar datos, (JSON)unir variables y guardar como cadena de texto*/

    document.getElementById("nombre").value=""; /* limpiar el txt*/
    document.getElementById("movil").value="";
    document.getElementById("email").value="";

    actualizarDatos();
}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value; /* capturar nombre para recuperar sus datos */

    let datos = localStorage.getItem(nombre); /*del nombre que tengo, sus movil y emial se estan guardando en datos*/
    
    datos = JSON.parse(datos); /* vaciar dato y se separa, almacena en datos */

    document.getElementById("movil").value = datos.movil; /* se saca de datos, linea anterior */
    document.getElementById("movil").value = datos.email;

}

function eliminarDato(){
    var nombre= document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro="";
    if(localStorage.length==0){
        registro +='<li>Vacio</li>';
    } 
    else{
        for(var i=0; i<=localStorage.length -1; i++){
            var key = localStorage.key(i);
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);

            registro+= `<li> <span class="nom"> ${key} + </span>
                             <span class="nom"> ${datos.movil} </span>
                             <span class="nomemail"> ${datos.email} </span>
                     </li><br>`; 
        }   
    }
    document.getElementById('contactos').innerHTML=registro;
}
function soloLetras(evt){
    var charCode = (evt.charCode);

    if ((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)) {
        document.getElementById("aviso").innerHTML = "";
        return true;
    }else{
        /*alert("Ingrese solo letras"); */
        document.getElementById("aviso").innerHTML = "Ingrese solo letras"
        return false;
    }
}