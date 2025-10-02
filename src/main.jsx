import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/root/Root.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Header from './components/header/Header.jsx'
import Laptops from './components/laptops/Laptops.jsx'
import Home from './components/home/Home.jsx'
import Mobiles from './components/mobiles/Mobiles.jsx'
import About from './components/about/About.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      children: [
        {index: true, Component: Home},
        {path: 'laptops', Component: Laptops},
        {path: 'mobiles', Component: Mobiles},
        {path: 'about', Component: About}
      ]
    }
    
  ])

createRoot(document.getElementById('root')).render(
  
  
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
