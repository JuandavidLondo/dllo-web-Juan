const getDatafrom=()=>{
    const txtName = document.getElementById("txtName").value;
    const txtCorreo = document.getElementById("txtCorreo").value;
    const txtDescrpcion = document.getElementById("txtTarea").value;
    const acceptTerminos = document.getElementById("acceptTerms").checked;
    const typeA = document.getElementById("radioTypeA").checked;
    const typeB = document.getElementById("radioTypeB").checked;
    const periodo = document.getElementById("semester").value;

    // JSON {clave:valor}
    const data={
        name:txtName,
        correo:txtCorreo,
        tarea:txtDescrpcion,
        acceptarTerminos:acceptTerminos,
        typeA,
        typeB,
        perido:periodo
    }
    console.log(data)
}