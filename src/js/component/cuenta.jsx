import React, {useState,useEffect} from "react";
import "../../styles/index.css"

const Form = () => {
    
    const [inputValue, setInputValue ] = useState('');
    const [inputUser, setUsuario ] = useState('mydefaultuser01');
    const [tareasApi, setTareasApi] = useState([]);

    function actualizarTareasApi(e){
        if ((e.key === "Enter") && (inputValue!="")){
            setTareasApi((datosPrevios) => [...datosPrevios, {label:inputValue, done:false}]);
            setInputValue("")
        }
        
    }
    
    function eliminarTareaApi(item) {
        console.log("funciona " + item);
        //filtrar
        const nuevaLista = tareasApi.filter((elemento)=>elemento!=item)
        setTareasApi(nuevaLista)
        console.log("tareas: " + nuevaLista );
    }

    
    
    function crearUsuario(e) {
        setUsuario(inputUser)
        console.log("creando usuario: " + inputUser);

        fetch(`https://assets.breatheco.de/apis/fake/todos/user/${inputUser}`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify([]), // body data type must match "Content-Type" header
        })//busca informacion a la url dada con el metodo especificado
        .then((response)=>response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        .then((data)=>console.log(data))
        //.then((data)=>setapiResponse(data.result))// => guardo el json en un espacio de memoria
        .catch((error)=>console.log(error))// => te aviso si algo sale mal

        //setapiResponse({data})
        
    }
    


    function buscarData(e) {
        console.log("obteniendo datos de usuario: " + inputUser);
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/${inputUser}`,{
            method:'GET',
            headers: {
                "Content-Type": "application/json"
                 
              },
              //body: JSON.stringify([]), // body data type must match "Content-Type" header
        })//busca informacion a la url dada con el metodo especificado
        .then((resp)=>{
            console.log(resp.ok);
            console.log(resp.status);
            if(resp.status===404){
                console.log("user does not exist so we create it...");
                crearUsuario();
                console.log("user created...");
                

            }
            return resp.json();
        })
        // => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        //.then((data)=>console.log(data))
        .then((data)=>{
            console.log(data);
            setTareasApi(data) // => guardo el json en un espacio de memoria

        })
        .catch((error)=>console.log(error))// => te aviso si algo sale mal
    }

    function deleteData(e) {
        console.log("eliminando datos y usuario de: " + inputUser);
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/${inputUser}`,{
            method:'DELETE',
            headers: {
                "Content-Type": "application/json"
                 
              },
              //body: JSON.stringify([]), // body data type must match "Content-Type" header
        })//busca informacion a la url dada con el metodo especificado
        .then((response)=>response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        .then((data)=>console.log(data))
        //.then((data)=>setTareasApi(data))// => guardo el json en un espacio de memoria
        .catch((error)=>console.log(error))// => te aviso si algo sale mal

        setTareasApi([]),
        setInputValue("")

    }


    function enviarData(e) {
        console.log("enviando datos a servidor de usuario: " + `https://assets.breatheco.de/apis/fake/todos/user/${inputUser}`);
        console.log(tareasApi)
        fetch(`https://assets.breatheco.de/apis/fake/todos/user/${inputUser}`,{
             method:'PUT',
             headers: {
                 "Content-Type": "application/json"
                 
               },
               body: JSON.stringify(tareasApi), // body data type must match "Content-Type" header
               //body: JSON.stringify(["{label: terminar ejercicio, done: false}"]), // body data manual
               
              
        })//busca informacion a la url dada con el metodo especificado
        .then((response)=>response.json())// => convierto la respuesta buscada en un json => {"info":{},"results":[]} "hola"
        .then((data)=>console.log(data))
        //.then((data)=>setapiResponse(data.msg))// => guardo el json en un espacio de memoria
        .catch((error)=>console.log(error)) // => te aviso si algo sale mal
        
    }

    useEffect(()=>{//2. Cuando quiero ejecutar una funcion si cambia un estado, es decir utlizamos el array como un observador
        //bloque de codigo que quiero que se ejecute cuando cambia lo que estoy vigilando
        if (tareasApi.length!=0){
            enviarData()
        }
        
    },[tareasApi])

 


    return (
        <div>
            <div className="cuentaInput">
                <input className="form-control" type="text" onChange={e => setUsuario(e.target.value)} value={inputUser} placeholder="Write short user name withoutspace (e.g:il28)"/>
                
                <div className="cuentaBotones d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={(e)=>crearUsuario(e)}>Create user account</button>
                    <button type="button" className="btn btn-success" onClick={(e)=>buscarData(e)}>Get data</button> 
                    <button type="button" className="btn btn-warning" onClick={(e)=>deleteData(e)}>Clear all</button> 
                </div>
                
                       
            </div>
        
            
           
            <div className="dataAPI">
                
                <input className="form-control" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={(e)=>actualizarTareasApi(e)} placeholder="Write a task to send to api" aria-label="default input example"/>
                
            </div>

            <div className="ListaTareasApi">
                
        
                <ul>
                    {tareasApi.length>0?   tareasApi.map((item,index)=><li key={index}>{item.label} <span onClick={()=>eliminarTareaApi(item)}>x</span></li>): "No hay tareas"}
                </ul>
            </div>

        </div>

        


        
    
    )
};

export default Form;