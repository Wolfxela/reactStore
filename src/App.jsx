import { useCallback, useEffect, useState } from 'react'
import './css/App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
function App() {
 const [itemsInCart,setItemsInCart] = useState(0)
 const [money,setMoney] = useState(0)
 const [ProductData,setProductData] = useState({Electronics:[],Jewelery:[],MenClothes:[],WomenClothes:[]})
 const [boughtProducts,setBoughtProducts] = useState([])

  
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
    <Outlet context={{
            items:[itemsInCart,setItemsInCart],
            moneyData:[money,setMoney],
            product:[ProductData,setProductData],
            boughtProduct:[boughtProducts,setBoughtProducts]
        }}/>
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