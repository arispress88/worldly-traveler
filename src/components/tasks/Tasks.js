// THIS MODULES HOUSES THE TASK TO BE GENERATED ONCE A BUTTON IS CLICKED//
//ALSO HOUSES PROGRESS BAR FOR THE USER TO SEE THEIR PROGRESS AFTER COMPLETING A TASK//


import React, {useState, useEffect} from "react";
import { getTasks } from "../../ApiManager";
import "./Tasks.css"
import { Button, ProgressBar } from "react-bootstrap";


export const Tasks = () => {
    const [task, setTask] = useState('');
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [progress, setProgress] = useState(0)
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

        const handleCompletionClick = () => {
            let progressIndex = progress;
            
                progressIndex += Math.floor(Math.random() * 100);
                
                if (progressIndex > 100) {
                    progressIndex = 100;
                    setProgress(progressIndex)
                }
                else {
                    setProgress(progressIndex)
                }
                setCompletionPercentage(progress);
                // *UNNEEDED CODE*
                //if (progress === 100) {
                //     clearInterval(intervalId)
                // }
            // }, )
        }

        return (
            <><div className="tasks">
                <h2 className="task--title">Tasks (optional)</h2>
                <Button variant="primary" type="generate" onClick={handleButtonClick}>
                    Generate a Task
                </Button>
                <p className="task">{task.task}</p>
                <Button variant="success" type="complete" onClick={handleCompletionClick}>
                    Task Complete
                </Button>
                <ProgressBar className="progress-bar" style={{ width: `${completionPercentage}%`}} completionPercentage={completionPercentage}></ProgressBar>
                <p className="progress-report">You have completed {completionPercentage}% toward the next level!</p>
            </div>
                
                </>
        )
}