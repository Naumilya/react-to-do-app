import style from './style.module.css'

export const Button = ({ children, onClick, type = 'button' }) => {
	return (
		<button className={style.button} onClick={onClick} type={type}>
			{children}
		</button>
	)
}
