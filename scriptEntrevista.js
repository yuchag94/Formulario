function validar(){
    let validar = true;

    let msgs = document.querySelectorAll('small[id^="msg"]');
    msgs.forEach(el => {
        el.innerHTML = "";
    });

    // 1. obtener los objetos de los controles y etiquetas de HTML 

    let NomComp = document.queryElementId('NomCom');
    let Edad = document.querySelector('input[name="Edad"]');

    let msgNomComp = document.getElementById('msgNomCom');

    // 2.

    let rgxEdad = /^(?:\+|-)?\d+$/;

    if (NomComp.value.trim() == "" || NomComp.value.length == 0) {
        msgNomComp.innerHTML = "Ingrese nombre completo";
        validado = false;
    }

    if (!rgxEdad.test(Edad.value)) {
        msgEdad.innerHTML = "No es un valor entero !!";
        validado = false;
    }
    // alert (`Texto: ${texto.value} \n Valor entero: ${entero.value}`);
    return validado;
}