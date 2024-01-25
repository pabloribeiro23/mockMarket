import './Cart.css'

export default function Cart({ cart, setCart, setDisplayCart }) {
    const deleteProduct = (id) => {
        const updatedCart = cart.filter(product => product.id !== id)
        setCart(updatedCart)
    }
    return (
        <div className='cartContainer'>
            <div className='innerCart'>
                { cart.length > 0 ? (
                    cart.map(product => (
                        <div className='cartProductContainer' key={product.id}>
                            <img className='cartProductImage' src={product.image} alt="cart Img" />
                            <h2 className='cartProductTitle'>{product.title}</h2>
                            <p className='cartProductPrice'>{product.price} USD</p>
                            <button className='deleteProductBtn' onClick={() => deleteProduct(product.id)}><i className="bi bi-trash"></i></button>
                        </div>
                    ))
                ) : (
                    <p className='alternateText'>There are <span>no products</span> in your cart!</p>
                )
                }
                <div className='exitModal' onClick={() => setDisplayCart(false)}>
                    <i className='bi bi-x-circle-fill closeCart'></i>
                </div>
            </div>
        </div>
    )
}