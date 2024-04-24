import { useState } from "react";

function BookingForm(props: any) {

    const [selectedPackage, setSelectedPackage] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newBooking = {
            number: phoneNumber,
            spaPackage: selectedPackage,
            time: selectedTime,
            date: props.date.substring(props.date.indexOf("/"))
        }

        fetch("http://localhost:8080/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBooking),
        })
        .then(res =>res.json())

        .then(data => {
            if (data.id == null) {
                alert("Tiden är upptagen");
            } else{
                alert("Din tid är bokad")
            }
        })
    }

    return(
        <form id="bookingForm" onSubmit={handleSubmit}>
            <h4>Telefon Nummer</h4>
            <input type="text" required value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
            <h4>Välj paket</h4>
            <select name="product" required value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)}>
                <option value="">Välj ditt paket</option>
                <option value="Lyx">Lyx paketet</option>
                <option value="Standard">Standard paketet</option>
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