import { useState } from 'react'
import { Button } from '../button'
import style from './style.module.css'

export const TaskItem = ({
	id,
	taskText,
	onDelete,
	onUpdate,
	completed,
	onToggleCompletion,
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [newText, setNewText] = useState(taskText)

	const handleUpdate = e => {
		e.stopPropagation()
		onUpdate(id, newText)
		setIsEditing(false)
	}

	const handleDelete = e => {
		e.stopPropagation()
		onDelete(id)
	}

	const handleEdit = e => {
		e.stopPropagation()
		setIsEditing(true)
	}

	const handleInputClick = e => {
		e.stopPropagation()
	}

	return (
		<div
			className={`${style.taskItem} ${completed ? style.completed : ''}`}
			onClick={() => onToggleCompletion(id)}
		>
			{isEditing ? (
				<div className={style.taskEdit}>
					<input
						type='text'
						value={newText}
						onChange={e => setNewText(e.target.value)}
						className={style.taskText}
						onClick={handleInputClick}
					/>
					<Button onClick={handleUpdate}>Сохранить</Button>
				</div>
			) : (
				<>
					<p className={style.taskText}>{taskText}</p>
					<div className={style.taskActions}>
						<Button onClick={handleEdit}>Редактировать</Button>
						<Button onClick={handleDelete}>Удалить</Button>
					</div>
				</>
			)}
		</div>
	)
}
