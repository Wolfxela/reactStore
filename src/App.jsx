import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header()
{
  const categories = [{ name:"Foxes", childCategories:["minifoxes","megafoxes"]},{name:"MoreFoxes",childCategories:[]},{name:"EvenMoreFoxes",childCategories:[]},{name:"...Boxes",childCategories:[]}]
  return(
    <>
      <header>
        <div className="topPart"></div>
        <div className="categories">

        </div>
      </header>
    </>
  )
}

function App() {

  return (
    <>
    <Header/>
    {/* <Products/>
    <Footer/> */}
    </>
  )
}

export default App
