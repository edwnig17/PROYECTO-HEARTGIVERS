// modal agregar
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//moda actualizar
const exploracion= document.querySelector('.datoss');
const closeUpdate = document.querySelector('#closeUpdate');
const modalUpdate = document.getElementById('modalUpdate');
exploracion.addEventListener('click',(e)=>{
  if(e.target.classList.contains('update'))
    modalUpdate.style.display = "block"
})
closeUpdate.addEventListener('click',()=>{
  modalUpdate.style.display = "none"
})
window.addEventListener('click',(e)=>{
  if(e.target === modalUpdate)
    modalUpdate.style.display = "none";
})

//Ciclistas

  document.getElementById('newCatalogo').addEventListener('submit', function() {

   const titulo = document.getElementsByName('beneficiados')[0].value
   const descripcion= document.getElementsByName('productoDonado')[0].value;

   const img = document.getElementsByName('estadoProducto')[0].value;

    
   const mensaje =
      'beneficiados: ' + titulo + '\n' +
      'productoDonado: ' + descripcion + '\n' +
      
      'estadoProducto: ' + img;

    alert(mensaje);

  // se pone el html .... 
  });
  exploracion.addEventListener('click', (e) => {
    if (e.target.classList.contains('update')) {
        modalUpdate.style.display = "block";

        const catalogo = e.target.parentElement;
        document.getElementById('beneficiadosActualizados').value = catalogo.querySelector('td:first-child a').innerText;
        document.getElementById('productoDonadoActualizado').value = catalogo.querySelector('td:nth-child(2)').innerText;
        document.getElementById('estadoProductoActualizado').value = catalogo.querySelector('td:nth-child(3) a').innerText;

        formActualizacion.querySelector('#registroId').value = e.target.id;
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const updateForm = document.getElementById('updateForm');
  const beneficiadosActualizados = document.getElementById('beneficiadosActualizados');
  const productoDonadoActualizado = document.getElementById('productoDonadoActualizado');
  const estadoProductoActualizado = document.getElementById('estadoProductoActualizado');

  // Evento para abrir el modal y cargar datos
  document.querySelector('.datoss').addEventListener('click', (e) => {
    if (e.target.classList.contains('update')) {
      const exploracionId = e.target.getAttribute('data-id');
      const exploracion = exploraciones.find(item => item._id === exploracionId);

      if (exploracion) {
        beneficiadosActualizados.value = exploracion.beneficiados;
        productoDonadoActualizado.value = exploracion.productoDonado;
        estadoProductoActualizado.value = exploracion.estadoProducto;

        modal.style.display = 'block';
      }
    }
  });

  
  document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
  });


  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const datosActualizados = {
      beneficiados: beneficiadosActualizados.value,
      productoDonado: productoDonadoActualizado.value,
      estadoProducto: estadoProductoActualizado.value
    };

    try {
      await actualizarExploracion(exploracionId, datosActualizados);
    
      modal.style.display = 'none';
    } catch (error) {
      console.error('Error al actualizar exploración:', error);
    }
  });
});


  
