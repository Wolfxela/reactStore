import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Filter from './Filter'
import Card from './Card'
import { func } from 'prop-types'


function Cards({ProductData})
{
  return(

    <div className='cardContainer'>
      {ProductData.WomenClothes.map((Product)=>{
        return <Card key={Product.id} Product={Product}/>
      })}
    </div>
  )
}
function Products({ProductData})
{
  return(
    <div className='products'>
    <Filter/>
    <Cards ProductData={ProductData}/>
    </div>
  )
}

function App() {
 const [itemsInCart,setItemsInCart] = useState(0)
 const [money,setMoney] = useState(0)
 const [searchItem,setSearchItem] = useState("")
 const [Filter,setFilter] = useState("")
 const [ProductData,setProductData] = useState({Electronics:[],Jewelery:[],MenClothes:[],WomenClothes:[]})

  
  useEffect(()=>{

    let fetchData = {Electronics:[],Jewelery:[],MenClothes:[],WomenClothes:[]}

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      data.forEach(product => {
        product.category === "electronics"? fetchData.Electronics.push(product):
        product.category === "jewelery" ? fetchData.Jewelery.push(product):
        product.category === "women's clothing" ? fetchData.WomenClothes.push(product):
        product.category === "men's clothing" ? fetchData.MenClothes.push(product):
        console.log("error")})
        setProductData(fetchData)
      })


  },[])


    
  return (
    <>
    <Header itemsInCart={itemsInCart}/>
    <Products ProductData={ProductData} />
    {/* <Footer/> */}
    </>
  )
}

export default App

// useEffect(()=>{

//   let fetchData = {Electronics:[],Jewelery:[],MenClothes:[],WomenClothes:[]}

//   fetch('https://fakestoreapi.com/products?sort=desc')
//   .then(res=>res.json())
//   .then(data=>{
//     fetchData = data
//     fetchData.forEach(product => {
//     product.category === "electronics"? setProductData({...ProductData, Electronics:ProductData.Electronics.push(product)}):
//     product.category === "jewelery" ? setProductData({...ProductData, Jewelery:ProductData.Jewelery.push(product)}):
//     product.category === "women's clothing" ? setProductData({...ProductData, WomenClothes:ProductData.WomenClothes.push(product)}):
//     product.category === "men's clothing" ? setProductData({...ProductData, MenClothes:ProductData.MenClothes.push(product)}):
//     console.log("error")})
//   })

// },[])