//NOT BEING USED//

/*import React, { useState } from "react";
import { Tasks } from "./Tasks";
import { ProgressBar } from "react-bootstrap";

export const CompletedTask = ({ tasks }) => {
    const [completedTasks, setCompletedTasks] = useState(0);
    const TaskItem = tasks

    const handleTaskCompletion = () => {
        setCompletedTasks(completedTasks +1);
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task.task}
                onCompletion={handleTaskCompletion}
                />
            ))}
            <ProgressBar
            completedTasks={completedTasks}
            totalTasks={tasks.length}
            />
        </div>
    )
} */