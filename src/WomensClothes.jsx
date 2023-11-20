import Card from "./Card"
import propTypes from 'prop-types'
function WomensClothes({ProductData,setMoney,setItemsInCart,money,itemsInCart})
{
  return(

    <div className='cardContainer'>
      {ProductData.WomenClothes.map((Product)=>{
        return <Card money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
    </div>
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