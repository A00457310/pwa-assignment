// import { useState } from 'react';
// const tasks = [
//     {
//         "id": 1,
//         "text": "Doctors Appointment",
//         "day": "Feb 5th at 2:30pm",
//         "reminder": true
//     },
//     {
//         "id": 2,
//         "text": "Meeting at School",
//         "day": "Feb 6th at 1:30pm",
//         "reminder": true
//     }
// ];

import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.length > 0 ? tasks.map(task => {
                return <Task key={task.id} task={task} onDelete={onDelete} />
            }) : 'Nothing to show'}
        </>
    )
}

export default Tasks
