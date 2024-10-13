import { useState } from 'react'
import { Button } from '../button'
import style from './style.module.css'

export const Form = ({ addTask }) => {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (inputValue.trim()) {
			addTask(inputValue)
			setInputValue('')
		}
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
				className={style.formInput}
				type='text'
				placeholder='Привет, введи сюда таску!'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<Button type='button' onClick={handleSubmit}>
				Добавить
			</Button>
		</form>
	)
}
