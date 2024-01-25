import './HeroSection.css'
import CategoryCard from '../CategoryCard/CategoryCard'

const categories = ['all', 'electronics', 'jewelery', 'clothing']

export default function HeroSection({ setCategory }) {
    return (
        <section className='heroSection'>
            {categories.map(category => (
                <div key={category} onClick={() => setCategory(category)}>
                    <CategoryCard category={category} />
                </div>
            ))}
        </section>
)}