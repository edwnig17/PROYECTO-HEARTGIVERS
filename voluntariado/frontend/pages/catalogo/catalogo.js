import { getCatalogo, nuevoCatalogo } from "./Api.js";

document.addEventListener('DOMContentLoaded', cargaCatalogo);

async function cargaCatalogo() {
    const catalogo = await getCatalogo();
    const contenedorCatalogo = document.querySelector('.datoss');
    contenedorCatalogo.innerHTML = "";

    catalogo.forEach(element => {
        const { _id, titulo, descripcion, imagen } = element;
        const cartaHTML = `
            <div class="col-md-12 m-b2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="custom-carta">
                    <div class="dlab-media"><a><img src="${imagen}" alt="imagen" style="max-width: 100%; height: auto;"></a></div>
                    <div class="content">
                        <h2 class="dlab-title m-t0 title-a">${titulo}</h2>
                        <div class="dlab-separator bg-primary"></div>
                        <p class="descripcion" descripcion="${descripcion}">Descripción: ${descripcion}</p>
                        <a class="boton-pago" href="#" data-id="${_id}">Unete</a>
                    </div>
                </div>
            </div>`;

        const cartaElement = document.createElement('div');
        cartaElement.classList.add('carta');
        cartaElement.innerHTML = cartaHTML;
        contenedorCatalogo.appendChild(cartaElement);

        const modalId = `modal-${_id}`;
        const modalHTML = `
            <div id="${modalId}" class="modal">
                <div class="modal-content">
                    <span class="close" data-modal="${modalId}">&times;</span>
                    <form id="formulario-${modalId}">
                        <input type="text" id="nombre-${modalId}" placeholder="Nombre" required>
                        <input type="text" id="cedula-${modalId}" placeholder="Cédula" required>
                        <input type="email" id="correo-${modalId}" placeholder="Correo" required>
                        <input type="text" id="horaAsistencia-${modalId}" placeholder="Hora de Asistencia" required>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>`;

        const modalElement = document.createElement('div');
        modalElement.innerHTML = modalHTML;
        document.body.appendChild(modalElement);

        const botonUnete = cartaElement.querySelector('.boton-pago');
        botonUnete.addEventListener('click', (event) => {
            event.preventDefault();
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });

        const formularioModal = document.getElementById(`formulario-${modalId}`);
        formularioModal.addEventListener('submit', async (event) => {
            event.preventDefault();

            const nombre = document.getElementById(`nombre-${modalId}`).value;
            const cedula = document.getElementById(`cedula-${modalId}`).value;
            const correo = document.getElementById(`correo-${modalId}`).value;
            const horaAsistencia = document.getElementById(`horaAsistencia-${modalId}`).value;

            const datosFormulario = {
                nombre,
                cedula,
                correo,
                horaAsistencia
            };

            try {
                await nuevoCatalogo(datosFormulario);
                formularioModal.reset();

                const modal = document.getElementById(modalId);
                modal.style.display = 'none';
            } catch (error) {
                console.error('Error al enviar los datos al backend:', error);
            }
        });
    });
}
