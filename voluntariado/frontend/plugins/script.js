formularioModal.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre-modal').value;
  const cedula = document.getElementById('cedula-modal').value;
  const correo = document.getElementById('correo-modal').value;
  const horaAsistencia = document.getElementById('horaAsistencia-modal').value;

  // Obtén los valores de los campos adicionales si los tienes
  // const otroAtributo = document.getElementById('otro-atributo-modal').value;

  const datosFormulario = {
    nombre,
    cedula,
    correo,
    horaAsistencia,
    // Agrega los valores de los campos adicionales si los tienes
    // otroAtributo,  
  };

  try {
    // Enviar los datos al backend utilizando fetch con la URL correcta
    await fetch('http://localhost:3322/api/catalogo/crear-elemento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosFormulario)
    });

    // Limpia los campos del formulario
    formularioModal.reset();

    // Cierra el modal si es necesario
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  } catch (error) {
    console.error('Error al enviar los datos al backend:', error);
  }
});
