import './ProductCard.css'

export default function ProductCard({ product, setModal, setProductState }) {

    const handleModal = () => {
        setModal(true)
        setProductState(product)
    }

    return (
        <div className='productCard' onClick={handleModal}>
            <img className='productCardImg' src={product.image} alt="Product Image" />
            <div className='productCardInfo'>
                <h2 className='productCardName'>{product.title}</h2>
                <p className='productCardPrice'>{product.price} USD</p>
            </div>
        </div>
    )
}