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
const ciclistas = document.querySelector('.datoss');
const closeUpdate = document.querySelector('#closeUpdate');
const modalUpdate = document.getElementById('modalUpdate');
ciclistas.addEventListener('click',(e)=>{
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

   const titulo = document.getElementsByName('titulo')[0].value
   const descripcion= document.getElementsByName('descripcion')[0].value;

   const img = document.getElementsByName('img')[0].value;

    
   const mensaje =
      'titulo: ' + titulo + '\n' +
      'descripcion: ' + descripcion + '\n' +
      
      'Imagen: ' + img;

    alert(mensaje);

  // se pone el html .... 
  });



  
