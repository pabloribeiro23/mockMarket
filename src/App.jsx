import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import HeroSection from './components/HeroSection/HeroSection'
import ProductSection from './components/ProductSection/ProductSection'
import Modal from './components/Modal/Modal'

function App() {
  const fetchUrl = 'https://fakestoreapi.com/products/'
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  const [productState, setProductState] = useState({})
  const [modal, setModal] = useState(false)
  const [cart, setCart] = useState([])
  const [displayCart, setDisplayCart] = useState(false)
  const [search, setSearch] = useState('')

  async function fetchProducts(url) {
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
}

  useEffect(() => {     
      fetchProducts(fetchUrl)
  }, [])

  return (
    <>
    <Navbar displayCart={displayCart} setDisplayCart={setDisplayCart} setSearch={setSearch} cart={cart} />
    {displayCart === true ? (<Cart cart={cart} setCart={setCart} setDisplayCart={setDisplayCart} />) : null}
    <HeroSection category={category} setCategory={setCategory} />
    <ProductSection 
      products={products} 
      category={category} 
      modal={modal} 
      setModal={setModal} 
      productState={productState} 
      setProductState={setProductState} 
      search={search}
    />
    {modal === true ? <Modal productState={productState} modal={modal} setModal={setModal} cart={cart} setCart={setCart} /> : null}
    </>
  )
}

export default App
