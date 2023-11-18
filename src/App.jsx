import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import PropTypes from 'prop-types'
import './App.css'
function Categories({categories})
{
  return(
  <>
  {categories.map((category) =>{
    return(
    <h3 key={category.name} className="category">
      {category.name}
    </h3>)
  })}
  </>)
}


function Header()
{
  const categories = [{ name:"Home"},{name:"MoreFoxes"},{name:"MoreFoxes"},{name:"MoreFoxes"},{name:"MoreFoxes"},{name:"MoreFoxes"},{name:"EvenMoreFoxes"},{name:"Filters"}]
  return(
      <header>

        <div className="topPart">
          <h1>ReactStore</h1>

          <label htmlFor="">
            <input type="search" name="SearchBar" id="search" placeholder='...' />
          </label>
          <div className="icons">
            <img src="" alt="" className="icon" />
          </div>

        </div>

        <nav className="categories">
          <Categories categories={categories}/>
        </nav>
      </header>
  )
}

function App() {
 const [money,setMoney] = useState(0)
 const [searchItem,setSearchItem] = useState("")
  return (
    <>
    <Header/>
    {/* <Products/>
    <Footer/> */}
    </>
  )
}

Categories.propTypes = {

  categories: PropTypes.array
  
}
export default App
