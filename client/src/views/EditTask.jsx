import Header from '../components/Header';
import { useState, useEffect } from 'react';
import '../css/EditTask.css';

export default function EditTask(){

    const id_task = new URLSearchParams(window.location.search).get("id");

    if(!id_task){
        window.location = "/home";
    }

    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const changeTitle = ({target}) => {
        setTitle(target.value);
    }
    
    const changeDesc = ({target}) => {        
        setDesc(target.value);
    }



    useEffect(() => {

        const fetchTask = async () => {

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'holamellamosantiagogalasso'
                }
            }

            let response = await fetch('http://localhost:5174/get-task/' + id_task, options);
            response = await response.json();
    
            setTitle(response.title);
            setDesc(response.description);
        }

        fetchTask();

    }, []);



    useEffect(() => {
        if(title && description){
            task_submit.removeAttribute("disabled");
            return;
        }

        task_submit.setAttribute("disabled", "");

    }, [title, description]);



    const submitTask = async () => {
        if(!title || !description){
            return;
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'holamellamosantiagogalasso'
            },
            body: JSON.stringify({
                'title': title,
                'description': description
            })
        }

        await fetch('http://localhost:5174/update-task/' + id_task, options);

        window.location = "/home";
    }

    return(
        <div className='content'>
            <Header />
            <div className="edit-task-container">
                <div className="edit-task">
                    <h1>Nueva tarea</h1>
                    <div className="title-container">
                        <h2>Título</h2>
                        <input type="text" id="title" value={title} onInput={changeTitle}/>
                    </div>
                    <div className="description-container">
                        <h2>Descripción</h2>
                        <textarea id="description" value={description} onInput={changeDesc}></textarea>
                    </div>
                    <button id="task_submit" onClick={submitTask}>Listo</button>
                </div>
            </div>
        </div>
    )

}