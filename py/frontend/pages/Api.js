const urlExploracion = "http://localhost:3311/api/exploracion"

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


export const updateExploracion = async (datosA) => {
    try {
        await fetch(`${urlExploracion}/${datosA._id}`, {   
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datosA)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });window.location.reload()
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
}