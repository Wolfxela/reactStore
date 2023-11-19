import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Header from './Header'

function Filter()
{
  return(
    <div className='filterContent'>

      <h2>Sort by:</h2>
      <div className="filters">
        <p className="filter">Under 10 euros</p>
        <p className="filter">Under 5 euros</p>
        <p className="filter">Discounted</p>
        <p className="filter">ExampleSorter</p>
        <p className="filter">ExampleSorter</p>
        <p className="filter">ExampleSorter</p>
      </div>

      <h2>Filter by:</h2>
      <div className="filters">
        <p className="filter">ExampleFilter</p>
        <p className="filter">ExampleFilter</p>
        <p className="filter">ExampleFilter</p>
      </div>

    </div>
  )
}
function Cards()
{
  return(
    <div className='cardContainer'>

      <div className="card">

        <img className='cardImg' src="" alt="" />
        <p className="cardText"></p>
        <div className="cardBtns">

          <p className="price">20$</p>
          <button className='buy'>
            <img className='buyIcon' src="" alt="" />
          </button>

        </div>

      </div>

      <div className="card"></div>
      <div className="card"></div>

    </div>
  )
}
function Products()
{
  return(
    <div className='products'>
    <Filter/>
    <Cards/>
    </div>
  )
}

function App() {
 const [itemsInCart,setItemsInCart] = useState(0)
 const [money,setMoney] = useState(0)
 const [searchItem,setSearchItem] = useState("")
 const [Filter,setFilter] = useState("")
  return (
    <>
    <Header itemsInCart={itemsInCart}/>
    <Products/>
    {/* <Footer/> */}
    </>
  )
}

export default App
