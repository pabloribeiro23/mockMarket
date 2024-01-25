import './Modal.css'
import Swal from 'sweetalert2'

export default function Modal({ productState, setModal, cart, setCart }) {
    
    const handleCartBtn = () => { 
        if(cart.some(item => item.id === productState.id)){
            Swal.fire({
                title: "The product is already added to your cart!",
                icon: "error",
                confirmButtonColor : '#9982ff',
                color : '#9982ff',
            });
        } else {
            setCart([...cart, productState])
            Swal.fire({
                title: "Product added to your cart!",
                icon: "success",
                confirmButtonColor : '#9982ff',
                color : '#9982ff',
            });
        }
    }

    return (
        <div className='modalContainer'>
            <div className='innerModal'>
                <img className='modalImage' src={productState.image} alt="product State img" />
                <div className='modalInfo'>
                    <h2 className='modalTitle'>{productState.title}</h2>
                    <p className='modalPrice'>{productState.price} USD</p>
                    <p className='modalDescription'>{productState.description}</p>
                    <button className='addToCartBtn' onClick={handleCartBtn}>Add to Cart</button>
                </div>
                <div className='exitModal' onClick={() => setModal(false)}>
                    <i className='bi bi-x-circle-fill modalExit'></i>
                </div>
            </div>
        </div>
    )
}