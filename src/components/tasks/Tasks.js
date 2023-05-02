// THIS MODULES HOUSES THE TASK TO BE GENERATED ONCE A BUTTON IS CLICKED//

import React, {useState, useEffect} from "react";
import { getTasks } from "../../ApiManager";
import "./Tasks.css"
import { Button } from "react-bootstrap";

export const Tasks = () => {
    const [task, setTask] = useState('');

    useEffect(
        () => {
            getTasks()
            .then(
                (tasks) =>{
                    const randomIndex = Math.floor(Math.random() * tasks.length);
                    const randomTask = tasks[randomIndex]
                    setTask(randomTask)
                }
            )
            .catch(error => console.error(error))
        }, [])

        const handleButtonClick = () => {
            fetch(`http://localhost:8088/tasks`)
            .then(r => r.json())
            .then(tasks => {
                const randomIndex = Math.floor(Math.random() * tasks.length);
                const randomTask = tasks[randomIndex];
                setTask(randomTask)
            })
            .catch(error => console.error(error))
        };

        return (
            <><div className="tasks">
                <Button variant="primary" type="generate" onClick={handleButtonClick}>
                    Generate a Task
                </Button>
                <p className="task">{task.task}</p>
            </div>
            <div className="completed--tasks">
                    <Button variant="success" type="complete">Task Complete</Button>
                </div></>
        )
}