import { getExploracion, nuevoExploracion, deleteExploracion, updateExploracion } from "./Api.js";

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
                    <td><a class="site-button update" data-id="${_id}">EDITAR</a></td>
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
        productoDonado: document.getElementById('productoDonado').value,
        estadoProducto: document.getElementById('estadoProducto').value
    };
    try {
        await nuevoExploracion(datos);
        location.reload(); 
    } catch (error) {
        console.error('Error al agregar nueva exploración:', error);
    }
}

const btnOption = document.querySelector('.datoss');
btnOption.addEventListener('click', optionHandler);

function optionHandler(e) {
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('id');
        const confirmar = confirm('¿Desea eliminarlo?');
        if (confirmar) {
            deleteExploracion(id)
                .then(() => location.reload())
                .catch(error => console.error('Error al eliminar la exploración:', error));
        }
    } else if (e.target.classList.contains('update')) {
        const row = e.target.closest('tr');
        const beneficiados = row.querySelector('td:first-child a').innerText;
        const productoDonado = row.querySelector('td:nth-child(2)').innerText;
        const estadoProducto = row.querySelector('td:nth-child(3) a').innerText;

        document.getElementById('beneficiadosActualizados').value = beneficiados;
        document.getElementById('productoDonadoActualizado').value = productoDonado;
        document.getElementById('estadoProductoActualizado').value = estadoProducto;

        const exploracionId = e.target.getAttribute('data-id');
        document.getElementById('nuevooU').setAttribute('data-id', exploracionId);
    }
}

document.getElementById('formActualizacion').addEventListener('submit', async (e) => {
    e.preventDefault();

    const exploracionId = document.getElementById('nuevooU').getAttribute('data-id');
    const datosActualizados = {
        beneficiados: document.getElementById('beneficiadosActualizados').value,
        productoDonado: document.getElementById('productoDonadoActualizado').value,
        estadoProducto: document.getElementById('estadoProductoActualizado').value
    };

    try {
        await updateExploracion(exploracionId, datosActualizados);
        location.reload(); 
    } catch (error) {
        console.error('Error al actualizar exploración:', error);
    }
});

// ...
