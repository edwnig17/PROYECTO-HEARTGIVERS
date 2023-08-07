// modal agregar
const openModalBtn = document.querySelector(".openModalBtn");
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

   const nombreProyecto = document.getElementsByName('nombreProyecto')[0].value
   const donador= document.getElementsByName('donador')[0].value;
   const impactoProyecto= document.getElementsByName('impactoProyecto')[0].value;

   const beneficiado = document.getElementsByName('beneficiado')[0].value;

    
   const mensaje =
      'nombreProyecto: ' + nombreProyecto + '\n' +
      'donador: ' + donador + '\n' +
      'impactoProyecto: ' + impactoProyecto + '\n' +
      'beneficiado: ' + beneficiado;

    alert(mensaje);

  // se pone el html .... 
  });



  
