import cartBuy from './assets/cartBuy.png'
import propTypes from 'prop-types'
function Card({Product,setItemsInCart,setMoney,itemsInCart,money,boughtProducts,setBoughtProducts})
{
    return(
        <div className="card">

        <img className='cardImg' src={Product.image} alt="" />
        <p className="cardText">{Product.title}</p>
        <div className="cardBtns">

          <p className="price">{Product.price}$</p>
          <button type='button' onClick={()=>{
            setItemsInCart(itemsInCart+1)
            setMoney(money+Product.price)
            setBoughtProducts([
              ...boughtProducts,
              Product
            ])
          }} className='buy'>
            <img className='buyIcon' src={cartBuy} alt="" />
          </button>

        </div>

      </div>
    )
}
Card.propTypes = {
  Product: propTypes.object,
  setMoney: propTypes.func,
  setItemsInCart: propTypes.func,
  money: propTypes.number,
  itemsInCart: propTypes.number,
  boughtProducts: propTypes.array,
  setBoughtProducts: propTypes.func
}
export default Card