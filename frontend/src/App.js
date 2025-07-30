// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// The base URL of our backend server
const API_URL = 'http://localhost:5000/tasks';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    // Fetch all tasks from the backend when the component mounts
    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                setTasks(res.data);
            })
            .catch(err => console.log(err));
    }, []); // The empty array ensures this effect runs only once

    // Function to add a new task
    const addTask = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        if (!newTaskTitle) return; // Don't add empty tasks

        axios.post(`${API_URL}/add`, { title: newTaskTitle })
            .then(() => {
                // Refresh tasks after adding
                axios.get(API_URL).then(res => setTasks(res.data));
                setNewTaskTitle(''); // Clear the input field
            })
            .catch(err => console.log(err));
    };

    // Function to delete a task
    const deleteTask = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => {
                // Filter out the deleted task from the state
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(err => console.log(err));
    };

    // Function to toggle the completion status of a task
    const toggleTaskCompletion = (id) => {
        axios.post(`${API_URL}/update/${id}`)
            .then(() => {
                // Update the specific task in the state
                setTasks(tasks.map(task => 
                    task._id === id ? { ...task, isCompleted: !task.isCompleted } : task
                ));
            })
            .catch(err => console.log(err));
    };


    return (
        <div className="App">
            <header className="App-header">
                <h1>MERN Task Manager</h1>
                <form onSubmit={addTask} className="task-input-form">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <button type="submit">Add Task</button>
                </form>
                <ul className="task-list">
                    {tasks.map(task => (
                        <li key={task._id} className={task.isCompleted ? 'completed' : ''}>
                            <span onClick={() => toggleTaskCompletion(task._id)}>
                                {task.title}
                            </span>
                            <button onClick={() => deleteTask(task._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;