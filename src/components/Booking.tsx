import { useState } from "react";
import Products from "./Products"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import BookingForm from "./BookingForm";

function Booking() {

  const [pickedDateToDisplay, setPickedDateToDisplay] = useState("");
  const [showPickedDate, setShowPickedDate] = useState(false);


  function checkIfHoliday(day: string) {
    
    fetch("http://sholiday.faboul.se/dagar/v2.1" + day)
    .then(res => res.json())
    .then(data => {
      if(data.dagar[0].helgdag !== undefined || data.dagar[0].veckodag === "Måndag") {

        setPickedDateToDisplay("Den här tiden har vi stängt");
        setShowPickedDate(false);
        
      } else {
        setPickedDateToDisplay("Boka tid vid " + day);
        setShowPickedDate(true);
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
      <h2>Stängt Måndagar och svenska helgdagar</h2>
      <div id="calDiv">
        <Calendar onChange={updateDateChange} value={pickedDateToDisplay}/>
      </div>
      <h4>{pickedDateToDisplay}</h4>
      {showPickedDate && <BookingForm date={pickedDateToDisplay}/>}
    </div>
  )
}

export default Booking