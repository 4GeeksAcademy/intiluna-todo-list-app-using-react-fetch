import React, {useState} from "react";
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
            <div className="inputTarea">
                <input className="form-control" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={(e)=>actualizarTareas(e)} placeholder="What needs to be done?" aria-label="default input example"/>      
            
            
            </div>
        
            <div className="ListaTareas">
        
                <ul>
                    {tareas.map((item,index)=><li key={index}>{item} <span onClick={()=>eliminarTarea(item)}>x</span> </li>)}
                </ul>
            </div>

            <div className="footerCount">
                <p>{tareas.length} item left</p>
            </div>

        </div>

        


        
    
    )
};

export default Form;





