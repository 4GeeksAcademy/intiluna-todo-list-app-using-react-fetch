import React, {useState,useEffect} from "react";
import "../../styles/index.css"

const Form = () => {
    
    const [inputUser, setUsuario ] = useState('mydefaultuser40');
    const [apiResponse, setapiResponse ] = useState('No hay respuesta todavia');
    const [inputTareasAPI, setTareasAPI] = useState(["Leer libro", "Prepara comida"]);
   


    
    
    function crearUsuario(e) {
        setUsuario(inputUser)
        console.log("creando usuario: " + inputUser);

        fetch('https://assets.breatheco.de/apis/fake/todos/user/{inputUser}}',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify([]), // body data type must match "Content-Type" header
        })//busca informacion a la url dada con el metodo especificado
        .then((response)=>response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        //.then((data)=>console.log(data))
        .then((data)=>setapiResponse(data.msg))// => guardo el json en un espacio de memoria
        .catch((error)=>console.log(error))// => te aviso si algo sale mal

        //setapiResponse({data})
        
    }
    


    function buscarData(e) {
        console.log("obteniendo datos de usuario: " + inputUser);
        fetch('https://assets.breatheco.de/apis/fake/todos/user/{inputUser}',{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
                 
              },
              //body: JSON.stringify([]), // body data type must match "Content-Type" header
        })//busca informacion a la url dada con el metodo especificado
        .then((response)=>response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        .then((data)=>setapiResponse(data.msg))// => guardo el json en un espacio de memoria
        .catch((error)=>console.log(error))// => te aviso si algo sale mal
    }


    function enviarData(e) {
        console.log("enviando datos a servidor de usuario: " + inputUser);
        //console.log(inputTareasAPI.map((item)=>{ label: {item}, done: false })) //da error
        //console.log(inputTareasAPI.map((item)=>"{ label: " + {item} +"}")) //da error
        //console.log(inputTareasAPI.map((item)=>"{ label: " +{item} + ", done:false }" ))
        //referencia de output { label: "Make the bed", done: false }
        // referencia otro ejemplo ((item,index)=><li key={index}>{item} <span onClick={()=>eliminarTarea(item)}>x</span> </li>)
         fetch('https://assets.breatheco.de/apis/fake/todos/user/{inputUser}',{
             method:'PUT',
             headers: {
                 "Content-Type": "application/json"
                 
               },
               //body: JSON.stringify([inputTareasAPI.map((item)=>"{ label: " +{item} + ", done:false }" )]), // body data type must match "Content-Type" header
               body: JSON.stringify(["{label: terminar ejercicio, done: false}"]), // body data manual
               /*body: JSON.stringify([
                { label: "Make the bed", done: false },
                { label: "Walk the dog", done: false },
                { label: "Do the replits", done: false }
              ])
              */
         })//busca informacion a la url dada con el metodo especificado
        .then((response)=>response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        .then((data)=>setapiResponse(data.msg))// => guardo el json en un espacio de memoria
        .catch((error)=>console.log(error))// => te aviso si algo sale mal
    }

 
    return (
        <div>
            <div className="cuentaInput">
                <input className="form-control" type="text" onChange={e => setUsuario(e.target.value)} value={inputUser}  placeholder="Write short user name withoutspace (e.g:il28)" aria-label="default input example"/>
                
                <div className="cuentaBotones d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={(e)=>crearUsuario(e)}>Create user account</button>
                    <button type="button" className="btn btn-success" onClick={(e)=>buscarData(e)}>Get data</button> 
                    <button type="button" className="btn btn-warning" onClick={(e)=>enviarData(e)}>Send data</button> 
                </div>
                
                       
            </div>
        
            
            <div className="respuestaEspacio">
                <p>Respuesta de servidor</p>
                <p>{apiResponse}</p>
            </div>

            <div className="dataAPI">
                <p>Datos de API</p>
                <input className="form-control" type="text" onChange={e => setTareasAPI(e.target.value)} value={inputTareasAPI}  placeholder="Write a task to send to api" aria-label="default input example"/>
            </div>

        </div>

        


        
    
    )
};

export default Form;