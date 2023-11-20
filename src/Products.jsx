import Filter from "./Filter"
import propTypes from 'prop-types'
import WomensClothes from "./WomensClothes"
import MensClothes from "./MensClothes"
import Electronics from "./Electronics"
import Jewelery from "./Jewelery"
import Home from "./Home"

function Products({ProductData,setMoney,setItemsInCart,itemsInCart,money})
{
  return(
    <div className='products'>
    <Filter/>
    <MensClothes money = {money} itemsInCart ={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney}  ProductData={ProductData}/>
    </div>
  )
}

Products.propTypes = {
    ProductData: propTypes.object,
    setMoney: propTypes.func,
    setItemsInCart: propTypes.func,
    money: propTypes.number,
    itemsInCart: propTypes.number
}

export default Products