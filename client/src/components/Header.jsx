import { Link } from "react-router-dom"
import '../css/Header.css'

export default function Header(){

    return(
        <div id="tasks_header">
            <Link className="tasks-title" to="/home">Mis Tareas</Link>
            <Link className="tasks-newtask" to="/new-task"><i className="fa-solid fa-plus"></i>Nueva tarea</Link>
        </div>
    )

}