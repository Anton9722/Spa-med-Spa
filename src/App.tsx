import { useState } from 'react'
//import "./App.css"
import StartPage from './components/StartPage'
import NavigationMenu from './components/NavigationMenu'
import FooterMenu from './components/FooterMenu'
import Products from './components/Products'

function App() {

  return (

    <>
    <NavigationMenu />
    <StartPage />
    <Products />
    <FooterMenu />
    </>

  )
}

export default App
