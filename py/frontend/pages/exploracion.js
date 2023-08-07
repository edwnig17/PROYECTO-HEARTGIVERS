import { getExploracion, nuevoExploracion, deleteExploracion, updateExploracion  } from "./Api.js";

document.addEventListener('DOMContentLoaded',cargaExploracion)

document.addEventListener('DOMContentLoaded', cargaExploracion);

async function cargaExploracion() {
    try {
        const exploracion = await getExploracion();
        const tablaExploracion = document.querySelector('.datoss');
        
        exploracion.forEach(element => {
            const { _id, beneficiados, productoDonado, estadoProducto } = element;
            const template = `
				<tr>
				<td><a>${beneficiados}</a></td>
				<td>${productoDonado}</td>
					<td><a>${estadoProducto}</a></td>

					<td><a class="site-button update" id="${_id}">EDITAR</a></</td>
					<td><a class="site-button delete" id="${_id}">ELIMINAR</a></td>
					
				</tr>
                
            `;
            tablaExploracion.innerHTML += template;
        });
    } catch (error) {
        console.error('Error al cargar los datos de exploración:', error);
    }
}

const nuevo = document.getElementById('newCatalogo');
nuevo.addEventListener('submit', registroNew);

async function registroNew(e) {
    e.preventDefault();
    const datos = {
        beneficiados: document.getElementById('beneficiados').value,
        descripcion: document.getElementById('descripcion').value,
        estadoProducto: document.getElementById('estadoProducto').value
    };
    try {
        console.log(datos);
        await nuevoExploracion(datos);
    } catch (error) {
        console.error('Error al agregar nueva exploración:', error);
    }
}

const btnOption = document.querySelector('.datoss');
btnOption.addEventListener('click', optionHandler);

function optionHandler(e) {
    if (e.target.classList.contains('delete')) {
        const borrarr = e.target.getAttribute('id');
        const confirmar = confirm('¿Desea eliminarlo?');
        if (confirmar) {
            deleteExploracion(borrarr)
                .catch(error => console.error('Error al eliminar la exploración:', error));
        }
    } else if (e.target.classList.contains('update')) {
        const catalogo = e.target.parentElement;
        document.getElementById('beneficiados').value = catalogo.getAttribute('beneficiados');
        document.getElementById('productoDonado').value = catalogo.getAttribute('productoDonado');
        document.getElementById('imgU').value = catalogo.getAttribute('estadoProducto');
        document.getElementById('nuevooU').classList.add(e.target.getAttribute('id'));
    }
}


