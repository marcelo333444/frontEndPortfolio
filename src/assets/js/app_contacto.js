//formulario de contacto

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let telefono, correo, nombre, mensaje;
    telefono = document.getElementById("inputTelefono").value;
    correo = document.getElementById("inputEmail").value;
    nombre = document.getElementById("inputDatos").value;
    mensaje = document.getElementById("inputMensaje").value;

    if(telefono === "" || correo === "" || nombre === "" || mensaje === ""){
      mostrarError("Todos los campos son obligatorios");
      return false;
    }
    mostrarMensaje("Enviando Formulario...")
    console.log("Enviando...")
})

/* funcion para mostrar el mensaje de que no se envio correctamente */

function mostrarError(mensaje) {
    const error = document.createElement("P");
          error.textContent = mensaje;
          error.classList.add("error");
          formulario.appendChild(error);

          /* funcion para que la alerta se remueva en tiempo seleccionado */

          setTimeout(() => {
            error.remove();
          }, 5000);
};

/* funcion para mostrar mensaje se envio correctamente */

function mostrarMensaje(mensaje) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add("correcto");
    formulario.appendChild(alerta);

    /* funcion para que la alerta se remueva en tiempo seleccionado */

    setTimeout(() => {
        alerta.remove();
    }, 5000);
};