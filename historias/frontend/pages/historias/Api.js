const urlCatalogo = "http://localhost:3312/api/historias"

export const getCatalogo = async ()=>{
    try {  
        const catalogo = await fetch(urlCatalogo);
        const datoCatalogo = await catalogo.json();
        return datoCatalogo;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}

export const nuevoCatalogo= async(datos)=>{
    try {
        await fetch(urlCatalogo,{
            method: "POST",
            body:JSON.stringify(datos),
            headers:{'Content-Type':'application/json'}
        });window.location.reload()
    } catch (error) {
        console.log(error,"No Funshion");
    }
}


export const deleteCatalogo = async (borrarr) =>{
    try {
        await fetch(`${urlCatalogo}/${borrarr}`,{
            method:'DELETE'
        });window.location.reload()
    } catch (error) {
        console.log(error);
    }
}


export const updateCatalogo = async (datosA) => {
    try {
        await fetch(`${urlCatalogo}/${datosA._id}`, {   
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