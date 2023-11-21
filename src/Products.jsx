import Filter from "./Filter"
import { Outlet } from "react-router-dom"
import propTypes from 'prop-types'
import { useOutletContext } from "react-router-dom"


function Products()
{
  const {
    items:[itemsInCart,setItemsInCart],
    moneyData:[money,setMoney],
    product:[ProductData,setProductData],
    boughtProduct:[boughtProducts,setBoughtProducts]} = useOutletContext()
  return(
    <div className='products'>
    {/* <Filter/> */}

    <Outlet context={{
            items:[itemsInCart,setItemsInCart],
            moneyData:[money,setMoney],
            product:[ProductData,setProductData],
            boughtProduct:[boughtProducts,setBoughtProducts],
        }}/>
    </div>
  )
}

Products.propTypes = {
    ProductData: propTypes.object,
    setProductData: propTypes.func,
    setMoney: propTypes.func,
    setItemsInCart: propTypes.func,
    money: propTypes.number,
    itemsInCart: propTypes.number
}

Products.defaultProps = {
  ProductData: {Electronics:[],Jewelery:[],MenClothes:[],WomenClothes:[]}
}

export default Products