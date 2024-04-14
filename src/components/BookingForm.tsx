import { useState } from "react";

function BookingForm(props: any) {

    const [selectedPackage, setSelectedPackage] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let booking = [{
            number: phoneNumber,
            package: selectedPackage,
            time: selectedTime,
            date: props.date.substring(props.date.indexOf("/"))
        }]
        
        let jsonStringBookings = JSON.stringify(booking);

        if(localStorage.getItem("bookings") === null){
            localStorage.setItem("bookings", jsonStringBookings);
        }
        
        let getJsonArray = localStorage.getItem("bookings");

        let parseArray = getJsonArray ? JSON.parse(getJsonArray) : [];

        let mergedArray: any = [].concat(...parseArray);

        mergedArray.forEach((element: { date: any, time: any, package: any }) => {
            console.log(element);    
            if(element.date === props.date.substring(props.date.indexOf("/"))) {
                if(element.time === selectedTime && element.package === selectedPackage){
                    alert("Denna tiden är upptagen");
                }
            }
        });

        let newBooking = booking;
        parseArray.push(newBooking);

        let updatedJsonBookings = JSON.stringify(parseArray);

        localStorage.setItem("bookings", updatedJsonBookings);

    }

    return(
        <form id="bookingForm" onSubmit={handleSubmit}>
            <h4>Telefon Nummer</h4>
            <input type="text" required value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
            <h4>Välj paket</h4>
            <select name="product" required value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)}>
                <option value="">Välj ditt paket</option>
                <option value="lyx">Lyx paketet</option>
                <option value="standard">Standard paketet</option>
            </select>
            <h4>Välj tid</h4>
            <select name="time" required value={selectedTime} onChange={(event) => setSelectedTime(event.target.value)}>
                <option value="">Välj din tid</option>
                <option value="Förmiddag">Förmiddag</option>
                <option value="Eftermiddag">Eftermiddag</option>
                <option value="Kväll">Kväll</option>
            </select>
            <button className="btn">Boka</button>
        </form>
    )
}

export default BookingForm