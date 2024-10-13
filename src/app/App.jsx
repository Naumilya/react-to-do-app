import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // Импортируем библиотеку для генерации уникальных ID
import { Form } from '../components/Form'
import { TaskItem } from '../components/TaskItem'
import './App.css'

export default function App() {
	const [tasks, setTasks] = useState([])

	const addTask = taskText => {
		const newTask = {
			id: uuidv4(), // Генерация уникального ID
			taskText,
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

	return (
		<>
			<h1>To-do app</h1>
			<Form addTask={addTask} />
			<div className='task-list'>
				{tasks.map(({ id, taskText }) => (
					<TaskItem
						key={id}
						id={id}
						taskText={taskText}
						onDelete={deleteTask}
						onUpdate={updateTask}
					/>
				))}
			</div>
		</>
	)
}
