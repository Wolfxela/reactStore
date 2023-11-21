import { useOutletContext } from "react-router-dom"
import Card from "../Card"
import propTypes from 'prop-types'
function MensClothes()
{
  const {
    items:[itemsInCart,setItemsInCart],
    moneyData:[money,setMoney],
    product:[ProductData,setProductData]} = useOutletContext()
  return(

    <div className='cardContainer'>
      {ProductData.MenClothes.map((Product)=>{
        return <Card money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
    </div>
  )
}

MensClothes.propTypes = {
    ProductData: propTypes.object,
    setMoney: propTypes.func,
    setItemsInCart: propTypes.func,
    money: propTypes.number,
    itemsInCart: propTypes.number
}
export default MensClothes