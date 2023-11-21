import Card from "../Card"
import { useOutletContext } from "react-router-dom"
import propTypes from 'prop-types'
function Home()
{

  const {
    items:[itemsInCart,setItemsInCart],
    moneyData:[money,setMoney],
    product:[ProductData,setProductData],
    boughtProduct:[boughtProducts,setBoughtProducts]} = useOutletContext()
  return(

    <div className='cardContainer'>
      {ProductData.Electronics.map((Product)=>{
        return <Card boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
      {ProductData.Jewelery.map((Product)=>{
        return <Card boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
      {ProductData.MenClothes.map((Product)=>{
        return <Card boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
      {ProductData.WomenClothes.map((Product)=>{
        return <Card boughtProducts={boughtProducts} setBoughtProducts={setBoughtProducts} money={money} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} setMoney={setMoney} key={Product.id} Product={Product}/>
      })}
    </div>
  )
}

Home.propTypes = {
    ProductData: propTypes.object,
    setMoney: propTypes.func,
    setItemsInCart: propTypes.func,
    money: propTypes.number,
    itemsInCart: propTypes.number
}
export default Home