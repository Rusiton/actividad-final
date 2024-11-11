import Header from '../components/Header';
import { useState, useEffect } from 'react';
import '../css/NewTask.css';

export default function NewTask(){

    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");

    const changeTitle = ({target}) => {
        setTitle(target.value);
    }
    
    const changeDesc = ({target}) => {        
        setDesc(target.value);
    }



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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'holamellamosantiagogalasso'
            },
            body: JSON.stringify({
                'title': title,
                'description': description
            })
        }

        await fetch('http://localhost:5174/post-task', options);

        window.location = "/home";
    }

    return(
        <div className='content'>
            <Header />
            <div className="new-task-container">
                <div className="new-task">
                    <h1>Editar tarea</h1>
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