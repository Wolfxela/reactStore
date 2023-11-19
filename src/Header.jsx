import person from './assets/person.png'
import cart from './assets/cart.png'
import PropTypes from 'prop-types'
function Categories({categories})
{
  return(
  <div className='groups'>
  {categories.map((category) =>{
    return(
    <h3 key={category.name} className="category">
      {category.name}
    </h3>)
  })}
  </div>)
}

function Header({itemsInCart})
{
    console.log(itemsInCart)
  const categories = [{ name:"Home"},{name:"Moreitems"},{name:"SoManyItems"},{name:"toomanyitems?"},{name:"More!"},{name:"items..."},{name:"EvenMoreitems"}]
  return(
      <header>

        <div className="topPart">
          <h1>ReactStore</h1>

          <label htmlFor="">
            <input type="search" name="SearchBar" id="search" placeholder='Search' />
          </label>
          <div className="icons">
            <img src={person} alt="" className="icon" />
            <div className="cart">
                <img src={cart} alt=""/>
                <span className="ItemsBought">
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