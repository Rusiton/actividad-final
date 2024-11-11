import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

export default function FetchAllTasks(){

    const [tasks, setTasks] = useState();
    
    useEffect( () => { 

        async function fetchData() {

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'holamellamosantiagogalasso'
                }
            }

            let response = await fetch('http://localhost:5174/get-all-tasks', options);
            setTasks(await response.json());
        }

        fetchData();

    }, []);

    if(tasks){
        return (
            tasks.map(task => {
                return (
                    <TaskCard key={task.id_task}  task_data={task}></TaskCard>
                )
            }
        ));
    }
}