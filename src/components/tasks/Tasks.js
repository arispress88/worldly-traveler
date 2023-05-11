// THIS MODULES HOUSES THE TASK TO BE GENERATED ONCE A BUTTON IS CLICKED//
//ALSO HOUSES PROGRESS BAR FOR THE USER TO SEE THEIR PROGRESS AFTER COMPLETING A TASK//


import React, {useState, useEffect} from "react";
import { getTasks } from "../../ApiManager";
import "./Tasks.css"
import { Button, ProgressBar, Alert } from "react-bootstrap";


export const Tasks = () => {
    const [task, setTask] = useState('');
    // const [completionPercentage, setCompletionPercentage] = useState(0);
    const [progress, setProgress] = useState(0)
    const [currentLevel, setCurrentLevel] = useState(1)
    const [userId, setUserId] = useState("")
    const [readySet, fire] = useState("")
    


    useEffect(
        () => {
            
            
            getTasks()
            .then(
                (tasks) =>{
                    const randomIndex = Math.floor(Math.random() * tasks.length);
                    const randomTask = tasks[randomIndex]
                    setTask(randomTask)
                    
                    //get user item and use it to set current level
                }
            )
            .catch(error => console.error(error))
        }, [])
        useEffect(() => {
            const localUser = localStorage.getItem("worldly_user")
            const userObject = JSON.parse(localUser)
            setCurrentLevel(userObject.level)
            setUserId(userObject.id)
        }, [readySet])

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
                    handleProgressChange()
                }
                else {
                    setProgress(progressIndex)
                }
                // setCompletionPercentage(progress);
                // *UNNEEDED CODE*
                //if (progress === 100) {
                //     clearInterval(intervalId)
                // }
            // }, )
            
        }

        const increaseLevel = (id) => {
            let newLevel = currentLevel + 1 
            return fetch(`http://localhost:8088/users/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    level: newLevel
                })
            })
            .then(r => r.json())
            .then(response => {
                if (response) {
                    console.log(response)
                localStorage.setItem("worldly_user", JSON.stringify(response))
                    fire("go");
                    window.alert(`Congratulations! You're now level ${currentLevel + 1}`)
                } else {
                    console.log("Failed to update level");
                }
            })
            .catch(error => {
                console.log("Error updating level:", error);
            });
        };

        function handleProgressChange() {
        
            //increaseLevel function needs id of current user
            increaseLevel(userId);
            
        setProgress(0);
    
    }

        return (
            <>
            <div className="tasks">
                <h2 className="task--title">Tasks (optional)</h2>
                <Button variant="primary" type="generate" onClick={handleButtonClick}>
                    Generate a Task
                </Button>
                <p className="task">{task.task}</p>
                <Button variant="success" type="complete" onClick={handleCompletionClick}>
                    Task Complete
                </Button>
                <ProgressBar className="progress-bar" style={{ width: `${progress}%`}} onClick={handleProgressChange} ></ProgressBar>
                <p className="progress-report">You have completed {progress}% toward the next level!</p>
            </div>
                
            </>
        )
}