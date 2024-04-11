import { useState } from "react";
import Products from "./Products"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function Booking() {

  const [pickedDateToDisplay, setPickedDateToDisplay] = useState("")
  
  function checkIfHoliday(day: string) {
    
    fetch("http://sholiday.faboul.se/dagar/v2.1" + day)
    .then(res => res.json())
    .then(data => {
      if(data.dagar[0].helgdag !== undefined || data.dagar[0].veckodag === "Måndag") {

        setPickedDateToDisplay("Den här tiden är upptagen eller är en helgdag")

      } else {
        setPickedDateToDisplay("Boka tid vid " + day)
      }
    })
  }

  const updateDateChange = (pickedDateToDisplay: any) => {
    let month   = pickedDateToDisplay.getMonth() + 1;
    let day     = pickedDateToDisplay.getDate();
    let year    = pickedDateToDisplay.getFullYear();
    let formattedDate = `/${year}/${month}/${day}`;
    setPickedDateToDisplay(formattedDate);
    checkIfHoliday(formattedDate);
}
  

  return (
    <div>
      <Products />
      <h4>Stängt Måndagar och svenska helgdagar</h4>
      <div id="calDiv">
        <Calendar onChange={updateDateChange} value={pickedDateToDisplay}/>
      </div>
      <h4>{pickedDateToDisplay}</h4>
    </div>
  )
}

export default Booking