function enviar(){

    let nombre=document.getElementById("name").value;
    let apellido=document.getElementById("apellido").value;
    let correo=document.getElementById("email").value;
    let genero=document.getElementsByName("radio");
    let gens;
    for (i=0;i<genero.length;i++){
        if (genero[i].checked){
            gens=genero[i];
            break;
        }
    }
    console.log(genero);
    if(nombre==""){

        document.getElementById("respID").innerHTML=`Campo Nombre vacío`;
        document.getElementById("nombreID").style.borderColor=`red`;

    }else if(apellido==""){

        document.getElementById("respID").innerHTML=`Campo Apellido vacío`;
        document.getElementById("apellidoID").style.borderColor=`red`;
        document.getElementById("nombreID").style.borderColor=`gray`;

    }else if(correo==""){
        document.getElementById("respID").innerHTML=`Correo faltante`;
        document.getElementById("correo").style.borderColor=`red`;
        document.getElementById("nombre").style.borderColor=`gray`;
        document.getElementById("apellido").style.borderColor=`gray`;
    }else if(gens==null){
        document.getElementById("respID").innerHTML=`Genero faltante`;
        document.getElementsByName("radio").style.borderColor=`red`;
        document.getElementById("nombre").style.borderColor=`gray`;
        document.getElementById("apellido").style.borderColor=`gray`;
        document.getElementById("correo").style.borderColor='gray';
    }else{

        //alert(nombre+" "+apellido+" "+mensaje);
        console.log(nombre);
        console.log(apellido);
        console.log(correo);
        console.log(gens);


        // document.getElementById("nombreID").style.borderColor=`black`;
        // document.getElementById("apellidoID").style.borderColor=`black`;
        for (i=0;i<genero.length;i++){
            genero[i].style.borderColor=`gray`;
        }

        document.getElementById("respID").innerHTML=`Nombre: ${nombre}    Apellido: ${apellido}<br>Correo: ${correo}<br>Genero: ${gens.value}`;

    }



    

}