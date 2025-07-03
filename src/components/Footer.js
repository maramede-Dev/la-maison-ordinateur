import { useState , useEffect} from 'react'
import '../styles/Footer.css'

function Footer({cart}) {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	useEffect(() => {
    return ()=>
		console.log('Cet effet est declenché quand footer est retiré du DOM')
})

	return (
		<footer className='lmo-footer'>
			<div className='lmo-footer-elem'>
				Pour les passionné·e·s de computers 🌿🌱🌵
			</div>
			<div className='lmo-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer