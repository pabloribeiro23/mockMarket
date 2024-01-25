import './CategoryCard.css'

const categoriesDictionary = {
    all : "bi bi-bar-chart-steps",
    electronics: "bi bi-pc-display",
    jewelery: "bi bi-gem",
    clothing :"bi bi-handbag"
}

export default function CategoryCard({ category }) {
    return (
        <div className='categoryCardContainer'>
            <p className='categoryName'>{category}</p>
            <i className={`categoryIcons ${categoriesDictionary[category]}`}></i>
        </div>
    )
}