import { useState } from 'react'
import './App.css'
import { productData } from './ProductData'
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart'
import { Pokemon } from '../components/Pokemon/Pokemon'
import { PP2 } from '../components/PP2/PP2'

function App() {

  // Manejo de estado como arreglo de objetos :)

  //test
  const [cart, setCart] = useState([])


    function increase(id) {
    setCart(
      prev => prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(id) {
    setCart(prev => prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  function remove(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }


  function addProduct(product) {
  setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        // Si el item existe, y su id es igual al del producto a punto de ser añadido se guarda como producto con cantidad +1
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  const productList = productData().map(product => {
    return (
      <div key={product.id} className='product'>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={() => addProduct(product)}>Add to cart</button>
      </div>
    )
  })
  return (
    <>
    <ShoppingCart 
    products={cart}
    increase={increase}
    decrease={decrease}
    remove={remove}
    ></ShoppingCart>
    <h1>Product List</h1>
    {productList}

    <Pokemon></Pokemon>
    <PP2></PP2>
    </>
  )
}

export default App
