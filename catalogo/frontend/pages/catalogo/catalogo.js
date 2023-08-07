import { getCatalogo, nuevoCatalogo, deleteCatalogo, updateCatalogo  } from "./Api.js";

document.addEventListener('DOMContentLoaded',cargaCatalogo)

document.addEventListener('DOMContentLoaded', cargaCatalogo);
async function cargaCatalogo() {
    const catalogo = await getCatalogo();
    const tablaCatalogo = document.querySelector('.datoss');
    tablaCatalogo.innerHTML = ""; // Limpia el contenido existente

		catalogo.forEach(element => {
			const { _id, titulo, descripcion, imagen } = element;
			tablaCatalogo.innerHTML += `
			<div class="col-md-12 m-b2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s" style="visibility: visible; animation-duration: 2s; animation-delay: 0.4s; animation-name: fadeInUp;">
				<div class="service-box3">
					<div class="row">
						<div class="col-md-4">
							<div class="dlab-media"><a><img src="${imagen}" alt="imagen"></a></div>
						</div>
						<div class="col-md-8">
							<h2 class="dlab-title m-t0 title-a">${titulo}</h2>
							<div class="dlab-separator bg-primary"></div>
							<p class="descripcion" descripcion="${descripcion}">Descripcion: ${descripcion}</p>
							<a class="boton-pago" href="http://localhost:3000/pricing">Unete</a>
							<button class="delete" id="${_id}">Eliminar</button>
                 			<button class="update" id="${_id}">Editar</button>
						</div>
					</div>
				</div>
			</div>`;
		});
	}

const nuevo = document.getElementById('newCatalogo');
nuevo.addEventListener('submit', registroNew);
function registroNew(e){
	e.preventDefault();
	const datos = {
		titulo : document.getElementById('titulo').value,
		descripcion : document.getElementById('descripcion').value,
		imagen : document.getElementById('imagen').value
	}
	console.log(datos);
	nuevoCatalogo(datos)
}

const btnOption = document.querySelector('.datoss');
btnOption.addEventListener('click', borrar)
function borrar(e){
	if(e.target.classList.contains('delete')){
		const borrarr = e.target.getAttribute('id')
		console.log(borrarr);
		const confirmar = confirm("desea Eliminarlo?");
        if(confirmar){
            deleteCatalogo(borrarr);
        }
	}
}
//values al actualizar
btnOption.addEventListener('click', update)
function update(e){
	if(e.target .classList.contains('update')){
		const catalogo = e.target.parentElement;
		console.log(catalogo);
		document.getElementById('titulo').value = catalogo.getAttribute('titulo')
		document.getElementById('descripcion').value = catalogo.getAttribute('descripcion')
		document.getElementById('imgU').value = catalogo.getAttribute('imagen')
		document.getElementById('nuevooU').classList.add(e.target.getAttribute('id'))
	}
}

const updateCiclista = document.getElementById('nuevooU');
updateCiclista.addEventListener('click',actualizar);
function actualizar(e){
	e.preventDefault();
	const datosA = {
		titulo: document.getElementById('titulo').value,
		descripcion: document.getElementById('descripcion').value,
		imagen: document.getElementById('imgU').value,
		_id: updateCiclista.getAttribute('class')
	}
	console.log(datosA);
	updateCatalogo(datosA);
}