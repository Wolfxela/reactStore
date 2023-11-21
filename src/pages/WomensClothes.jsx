import Card from "../Card"
import { useOutletContext } from "react-router-dom"
import propTypes from 'prop-types'
import Filter from "../Filter"
function WomensClothes()
{
  const {
    items:[itemsInCart,setItemsInCart],
    moneyData:[money,setMoney],
    product:[ProductData,setProductData],
    boughtProduct:[boughtProducts,setBoughtProducts]} = useOutletContext()
  return(
    <>
    <Filter/>
    <div className='cardContainer'>
      {ProductData.WomenClothes.map((Product)=>{
        return <Card boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
        
      })}
    </div>
    </>
  )
}

WomensClothes.propTypes = {
    ProductData: propTypes.object,
    setMoney: propTypes.func,
    setItemsInCart: propTypes.func,
    money: propTypes.number,
    itemsInCart: propTypes.number
}
export default WomensClothes