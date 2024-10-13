import { useState } from 'react'
import { Button } from '../button'
import style from './style.module.css'

export const TaskItem = ({ id, taskText, onDelete, onUpdate }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [newText, setNewText] = useState(taskText)

	const handleUpdate = () => {
		onUpdate(id, newText)
		setIsEditing(false)
	}

	return (
		<div className={style.taskItem}>
			{isEditing ? (
				<div className={style.taskEdit}>
					<input
						type='text'
						value={newText}
						onChange={e => setNewText(e.target.value)}
						className={style.taskText}
					/>
					<Button onClick={handleUpdate}>Сохранить</Button>
				</div>
			) : (
				<>
					<p className={style.taskText}>{taskText}</p>
					<div className={style.taskActions}>
						<Button onClick={() => setIsEditing(true)}>Редактировать</Button>
						<Button onClick={() => onDelete(id)}>Удалить</Button>
					</div>
				</>
			)}
		</div>
	)
}
