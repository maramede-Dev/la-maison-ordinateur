import { listOrdinateur } from '../datas/listOrdinateur'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import ComputerItem from './ComputerItem'
import { useState } from 'react'

function ShoppingList({cart, updateCart}) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = listOrdinateur.reduce(
		(acc, ordinateur) =>
			acc.includes(ordinateur.category) ? acc : acc.concat(ordinateur.category),
		[]
	)
	function addToCart(name, price){
		const currentComputerSaved = cart.find((computer)=>computer.name === name)
		if (currentComputerSaved) {
			const cartFilteredCurrentComputer = cart.filter(
				(computer) => computer.name !== name
			)
			updateCart([
				...cartFilteredCurrentComputer,
				{ name, price, amount: currentComputerSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmo-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmo-ordinateur-list'>
				{listOrdinateur.map(({id, name, cover, hot, cold, price, category}) => 
				!activeCategory || activeCategory === category?(
					<div key={id}>
						<ComputerItem 
						name={name} 
						cover={cover} 
						hot={hot} 
						cold={cold} 
						price={price} />
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				): null
			)}
			</ul>
		</div>
	)
}

export default ShoppingList