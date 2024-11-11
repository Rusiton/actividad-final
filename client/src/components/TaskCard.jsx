import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskCard( {task_data} ){

    const deleteTask = ({target}) => {

        const id_task = target.id.split("_")[1];
        tasks_container.querySelector("#task_" + id_task).remove();

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'holamellamosantiagogalasso'
            }
        }

        fetch('http://localhost:5174/delete-task/' + id_task, options);

    }
    
    const colors = [ "#4e8c2a", "#a7f8b8", "#1c0d76", "#ff7a59", "#e8c73d", "#3e5a8d", "#7f1d2e", "#ba842a", "#98b44c", "#e13b1c", "#429fa4", "#f2b7d3", "#c13d8f", "#c7a0ea", "#2e53b4"];

    const color = colors[Math.floor(Math.random() * 15)];

    return(
        <div className="task-card" id={"task_" + task_data.id_task} style={{backgroundColor: color}}>
            <div className="task-title-container">
                <h2 className="task-title">{task_data.title}</h2>
            </div>
            <div className="task-description-container">
                <p className="task-description">{task_data.description}</p>
            </div>
            <div className="task-options-container">
                <Link className="task-edit" to={"/edit-task?id=" + task_data.id_task}><i className="fa-solid fa-pen-to-square"></i></Link>
                <button className="task-delete" id={"btnDelete_" + task_data.id_task} onClick={deleteTask}><i className="fa-solid fa-trash" id={"iDelete_" + task_data.id_task}></i></button>
            </div>
        </div>
    )

}