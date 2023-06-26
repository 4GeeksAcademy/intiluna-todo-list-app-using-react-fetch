import React from "react";
import "../../styles/index.css"

const Form = () => {
    
    const tareas = ["comer", "correr","nadar","cocinar"]

    function eliminarTarea(item) {
        console.log("funciona " + item);
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





