import './Navbar.css'

export default function Navbar({ displayCart, setDisplayCart, setSearch, cart}) {
    return (
        <header>
            <h1><span>Mock</span>Market</h1>
            <div className='searchContainer'>
                <input className='headerInput' type="text" placeholder='Search for products' onChange={(e) => setSearch(e.target.value)}/>
                <button className='searchBtn'><i className="bi bi-search"></i></button>
            </div>
            <button className='cartBtn' onClick={() => setDisplayCart(!displayCart)}><i className="bi bi-cart"><span className='cartLength'>{cart.length}</span></i></button>
        </header>
    )
}