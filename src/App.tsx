import { useState } from 'react'
//import "./App.css"
import StartPage from './components/StartPage'
import NavigationMenu from './components/NavigationMenu'
import Booking from './components/Booking'

function App() {

  const [currentPage, setCurrentPage] = useState("start");

  const handlePageNavigation = (page: string) => {
    setCurrentPage(page)
  }

  return (

    <>

    <NavigationMenu />
    {currentPage === "start" && <StartPage handlePageNavigation = {handlePageNavigation}/>}
    {currentPage === "booking" && <Booking />}
    </>

  )
}

export default App
