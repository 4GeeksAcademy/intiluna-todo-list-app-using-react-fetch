import React, {useState,useEffect} from "react";
import "../../styles/index.css"

const Form = () => {
    
    const [inputValue, setInputValue ] = useState('');
   
    const [tareas, setTareas] = useState(["Make the bed", "Wash my hands","Eat","Walk the dog"])
    //const tareas = ["comer", "correr","nadar","cocinar"]

    function actualizarTareas(e){
        if ((e.key === "Enter") && (inputValue!="")){
            setTareas((datosPrevios) => [...datosPrevios, inputValue]);
        }
        
    }
    
    function eliminarTarea(item) {
        console.log("funciona " + item);
        //filtrar
        const nuevaLista = tareas.filter((elemento)=>elemento!=item)
        setTareas(nuevaLista)
        //console.log("tareas: " + tareas );
    }
    
    //
    // <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />

    return (
        <div>
            <div className="cuentaInput">
                <input className="form-control" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={(e)=>actualizarTareas(e)} placeholder="Write short user name withoutspace (e.g:il28)" aria-label="default input example"/>
                
                <div className="cuentaBotones d-flex justify-content-center">
                    <button type="button" class="btn btn-primary">Create user account</button>
                    <button type="button" class="btn btn-success">Connect with user account</button> 
                </div>
                
            
            
            </div>
        
            
            <div className="respuestaEspacio">
                <p>Respuesta de servidor</p>
            </div>

        </div>

        


        
    
    )
};

export default Form;