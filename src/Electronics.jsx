import Card from "./Card"
import propTypes from 'prop-types'
function Electronics({ProductData,setMoney,setItemsInCart,money,itemsInCart})
{
  return(

    <div className='cardContainer'>
      {ProductData.Electronics.map((Product)=>{
        return <Card money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
    </div>
  )
}

Electronics.propTypes = {
    ProductData: propTypes.object,
    setMoney: propTypes.func,
    setItemsInCart: propTypes.func,
    money: propTypes.number,
    itemsInCart: propTypes.number
}
export default Electronics