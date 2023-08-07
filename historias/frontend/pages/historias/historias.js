import { getCatalogo, nuevoCatalogo, deleteCatalogo, updateCatalogo  } from "./Api.js";

document.addEventListener('DOMContentLoaded',cargaCatalogo)


async function cargaCatalogo(){
    const catalogo = await getCatalogo();
    const tablaCatalogo = document.querySelector('.datoss');
    catalogo.forEach(element => {
        const {_id, nombreProyecto,   donador,   impactoProyecto , beneficiado} = element
        tablaCatalogo.innerHTML += `
		<tr>
			<td>${impactoProyecto}</td>
			<td>${beneficiado}</td>
			<td>${nombreProyecto}</td>
			<td>${donador}</td>
			<td><a class="site-button delete" id="${_id}">ELIMINAR</a></td>
		</tr>
        `;
    });
}

const nuevo = document.getElementById('newCatalogo');
nuevo.addEventListener('submit', registroNew);
function registroNew(e){
	e.preventDefault();
	const datos = {
		nombreProyecto : document.getElementById('nombreProyecto').value,
		donador : document.getElementById('donador').value,
		impactoProyecto : document.getElementById('impactoProyecto').value,
		beneficiado: document.getElementById('beneficiado').value
	}
	console.log(datos);
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
		document.getElementById('impactoProyecto').value = catalogo.getAttribute('impactoProyecto')
		document.getElementById('beneficiado').value = catalogo.getAttribute('beneficiado')
		document.getElementById('nombreProyecto').value = catalogo.getAttribute('nombreProyecto')
		document.getElementById('donador').value = catalogo.getAttribute('donador')
		document.getElementById('nuevooU').classList.add(e.target.getAttribute('id'))
	}
}

const updateCatologo = document.getElementById('nuevooU');
updateCatologo.addEventListener('click',actualizar);
function actualizar(e){
	e.preventDefault();
	const datosA = {
		nombreProyecto: document.getElementById('nombreProyecto').value,
		donador: document.getElementById('donador').value,
		beneficiado: document.getElementById('beneficiado').value,		
		impactoProyecto: document.getElementById('impactoProyecto').value,
		_id: updateCatologo.getAttribute('class')
	}
	console.log(datosA);
	updateCatalogo(datosA);
}