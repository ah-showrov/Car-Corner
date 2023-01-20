import {categories} from "../../data"
import './Categories.css'
const Categories =()=>{
    console.log(categories)
    return(
        <div className="categories__main__container">
                <h2 className="categories__title">POPULAR CATEGORIES</h2>

                <div className="categories__inner__container">

                    {categories.map(category=> <div className="category__container" key={category.id}>
                        <img className="category__image" src={category.image} alt="category image" />
                        <p className="category__name"> {category.title}</p>
                    </div>)}

                </div>
                

        </div>
    )
}
export default Categories;