import person from './assets/person.png'
import cart from './assets/cart.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Categories({categories})
{
  return(
  <div className='groups'>
  {categories.map((category) =>{
    return(
    <Link to={category.name} key={category.name} className="category">
      {category.name}
    </Link>)
  })}
  </div>)
}

function Header({itemsInCart})
{
  const categories = [{ name:"Home"},{name:"Electronics"},{name:"Jewelery"},{name:"Men"},{name:"Women"}]
  return(
      <header>

        <div className="topPart">
          <h1>ReactStore</h1>

          <label htmlFor="search">
            <input type="search" name="SearchBar" id="search" placeholder='Search' />
          </label>
          <div className="icons">
            <img src={person} alt="" className="icon" />
            <div className="cart">
                <img src={cart} alt=""/>
                <span data-test-id="test-span" className="ItemsBought">
                    {itemsInCart}
                </span>
            </div>
          </div>

        </div>

        <nav className="categories">
          <Categories categories={categories}/>
        </nav>
      </header>
  )
}
Header.propTypes = {
    itemsInCart:PropTypes.number
}
Categories.propTypes = {
    categories: PropTypes.array
}
export default Header