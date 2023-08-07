const urlExploracion = "http://localhost:3333/api/exploracion"

export const getExploracion = async ()=>{
    try {  
        const exploracion = await fetch(urlExploracion);
        const datoExploracion = await exploracion.json();
        return datoExploracion;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoExploracion= async(datos)=>{
    try {
        await fetch(urlExploracion,{
            method: "POST",
            body:JSON.stringify(datos),
            headers:{'Content-Type':'application/json'}
        });window.location.reload()
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
}


export const deleteExploracion = async (borrarr) =>{
    try {
        await fetch(`${urlExploracion}/${borrarr}`,{
            method:'DELETE'
        });window.location.reload()
    } catch (error) {
        console.log(error);
    }
}


export const updateExploracion = async (id, datosA) => {
    try {
        const response = await fetch(`${urlExploracion}/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosA)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar los datos en la base de datos');
        }

        const updatedDatos = await response.json();
        console.log('Datos actualizados en la base de datos:', updatedDatos);
    } catch (error) {
        console.error('Error al actualizar los datos:', error);
        throw error;
    }
}


