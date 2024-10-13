import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Form } from '../components/Form'
import { TaskItem } from '../components/TaskItem'
import './App.css'

export default function App() {
	const [tasks, setTasks] = useState([])

	const addTask = taskText => {
		const newTask = {
			id: uuidv4(),
			taskText,
			completed: false,
		}
		setTasks([...tasks, newTask])
	}

	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	const updateTask = (id, newText) => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, taskText: newText } : task
			)
		)
	}

	const toggleCompletion = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	return (
		<>
			<h1>To-do app</h1>
			<Form addTask={addTask} />
			<div className='task-list'>
				{tasks.map(({ id, taskText, completed }) => (
					<TaskItem
						key={id}
						id={id}
						taskText={taskText}
						completed={completed}
						onDelete={deleteTask}
						onUpdate={updateTask}
						onToggleCompletion={toggleCompletion}
					/>
				))}
			</div>
		</>
	)
}
