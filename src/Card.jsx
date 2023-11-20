import cartBuy from './assets/cartBuy.png'
import box from './assets/box.png'
import PropTypes from 'prop-types'
function Card({Product})
{
    return(
        <div className="card">

        <img className='cardImg' src={Product.image} alt="" />
        <p className="cardText">{Product.title}</p>
        <div className="cardBtns">

          <p className="price">{Product.price}$</p>
          <button className='buy'>
            <img className='buyIcon' src={cartBuy} alt="" />
          </button>

        </div>

      </div>
    )
}
Card.propTypes = {
    Product: PropTypes.object
}
export default Card