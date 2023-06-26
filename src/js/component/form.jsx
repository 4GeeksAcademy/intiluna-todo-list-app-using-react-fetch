import React from "react";
import "../../styles/index.css"

const Form = () => {
    
    const tareas = ["comer", "correr","nadar"]


    
    return (
        <div>
            <div className="inputTarea">
            <input className="form-control" type="text" placeholder="What needs to be done?" aria-label="default input example"/>
        </div>
        
        <div className="ListaTareas">
        <div className="display">My TODO List</div>
            <ul>
                <li>comer</li>
                <li>correr</li>
                <li>nadar</li>
                <li>trabajar</li>
            </ul>
        </div>

        </div>

        


        
    
    )
};

export default Form;





