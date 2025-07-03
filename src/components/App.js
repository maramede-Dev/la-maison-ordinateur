import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import '../styles/Layout.css'
import logo from '../assets/logo.jpg'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const [isFooterShown, updateIsFooterShown]= useState(true)
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmo-logo' />
				<h1 className='lmo-title'>La maison Ordinateur</h1>
			</Banner>
      <div className='lmo-layout-inner'>
         <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <button onClick={()=>updateIsFooterShown(!isFooterShown)}>
        !Cacher
      </button>
      {isFooterShown && <Footer cart={cart}/>}
    </div>
  );
}

export default App;
