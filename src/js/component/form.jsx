import React, {useState} from "react";
import "../../styles/index.css"

const Form = () => {
    
    const [inputValue, setInputValue ] = useState('');
   
    const [tareas, setTareas] = useState(["comer", "correr","nadar","cocinar"])
    //const tareas = ["comer", "correr","nadar","cocinar"]

    function actualizarTareas(e){
        if ((e.key === "1") && (inputValue!="")){
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
            <div className="inputTarea">
            <input className="form-control" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={(e)=>actualizarTareas(e)} placeholder="What needs to be done?" aria-label="default input example"/>      
            
            
        </div>
        
        <div className="ListaTareas">
        <div className="display">My TODO List</div>
            <ul>
                {tareas.map((item,index)=><li key={index}>{item} <span onClick={()=>eliminarTarea(item)}>x</span> </li>)}
            </ul>
        </div>

        </div>

        


        
    
    )
};

export default Form;





