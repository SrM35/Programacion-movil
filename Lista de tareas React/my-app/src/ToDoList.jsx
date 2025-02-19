import React, { useState } from 'react';
import { BiSolidTrash } from "react-icons/bi";


function ToDoList() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    function handleInputChange(event) {
        setNuevaTarea(event.target.value);
    }

    function agregarTarea(index) {
        if (nuevaTarea.trim() !== "") {
            setTareas(t => [...t, nuevaTarea]);
            setNuevaTarea("");
        }
    }

    function eliminarTarea(index) {
        const actualizarTareas = tareas.filter((element, i) => i !== index);
        setTareas(actualizarTareas);
    }

    return (
        <>
            <h1 id="titulo">Lista de tareas</h1>

            <div className="titulo">
                <input type="text" id="nuevaT" placeholder="Nueva tarea" value={nuevaTarea} onChange={handleInputChange} />
                <button id="boton" onClick={agregarTarea}> + Agregar</button>
            </div>

            <div id="tareas">
                <ol>
                    {tareas.map((tarea, index) => (
                        <li key={index}>
                            <span>{tarea}</span>
                            <button onClick={() => eliminarTarea(index)} className='botonEliminar'> <BiSolidTrash /> </button>
                        </li>
                    ))}
                </ol>
            </div>



        </>
    )
}

export default ToDoList