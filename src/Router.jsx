import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Products from './Products.jsx'
import WomensClothes from "./pages/WomensClothes.jsx"
import MensClothes from "./pages/MensClothes.jsx"
import Electronics from "./pages/Electronics.jsx"
import Jewelery from "./pages/Jewelery.jsx"
import Home from "./pages/Home.jsx"
import ErrorPage from './pages/errorPage.jsx'
import Cart from './pages/Cart.jsx'

const Router = () => {
    const router = createBrowserRouter([
    {
      path:'/',
      element: <Navigate to={'/Store'}/>,
      errorElement: <ErrorPage/>

    },
    {
        path: '/Store',
        element: <App/>,
        children:[
            {
                path:'/Store',
                element:<Products />,
                children:[
                    {index:true, element:<Cart/>},
                    {path:'/Store/Home', element:<Home/>},
                    {path:'/Store/Women',element:<WomensClothes/>},
                    {path:'/Store/Men',element:<MensClothes/>},
                    {path:'/Store/Electronics',element:<Electronics/>},
                    {path:'/Store/Jewelery',element:<Jewelery/>},
                ]
            }
        ],
    }
])
return <RouterProvider router={router}/>
}

export default Router

