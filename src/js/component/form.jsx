import React from "react";
import "../../styles/index.css"

const Form = () => {
    
    //const [tareas, setTareas] = useState(["comer", "correr","nadar","cocinar"])
    const tareas = ["comer", "correr","nadar","cocinar"]

    function actualizarTareas(){
        setTareas(tareas.concat(item))
    }
    
    function eliminarTarea(item) {
        console.log("funciona " + item);
        //filtrar
        tareas.filter((elemento)=>elemento!=item)
        console.log("tareas: " + tareas );
    }
    
    return (
        <div>
            <div className="inputTarea">
            <input className="form-control" type="text" placeholder="What needs to be done?" aria-label="default input example"/>
        </div>
        
        <div className="ListaTareas">
        <div className="display">My TODO List</div>
            <ul>
                {tareas.map((item)=><li>{item} <span onClick={()=>eliminarTarea(item)}>x</span></li>)}
            </ul>
        </div>

        </div>

        


        
    
    )
};

export default Form;





