import './ProductSection.css'
import ProductCard from '../ProductCard/ProductCard'

export default function ProductSection({ products, category, modal, setModal, productState, setProductState, search }) {

  return (
    <section className='productSection'>
      {category === "all" || category === "" ? (
        products
          .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
          .map(searchedProduct => (
            <ProductCard
              key={searchedProduct.id}
              product={searchedProduct}
              modal={modal}
              setModal={setModal}
              productState={productState}
              setProductState={setProductState}
            />
          ))
      ) : (
        products
          .filter(productCategory => productCategory.category === category || productCategory.category.includes(category))
          .map(filteredProduct => (
            <ProductCard
              key={filteredProduct.id}
              product={filteredProduct}
              modal={modal}
              setModal={setModal}
              productState={productState}
              setProductState={setProductState}
            />
          ))
      )}
    </section>
  );
  
      
}