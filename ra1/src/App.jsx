
import React from 'react'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from "./components/About/About"
import Home from "./components/Home/Home"
import Portfolio from "./components/Portfolio/Portfolio"
import Error from "./components/Error/Error"
import Contact from "./components/Contact/Contact"

const router=createBrowserRouter([

    {path:'' ,element:<Layout/> ,children:[
      {index:true ,element:<Home/>},
      {path:'Home',element:<Home/>},
      {path:'About',element:<About/>},
      {path:'Contact',element:<Contact/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'*' ,element:<Error/>}
    ]}
])



export default function App() { 
  return (<>
    {/* <Error/>   */}
    
    <div>
      
            <RouterProvider router={router}/>
    </div>
  
  
  </>
  )
}
