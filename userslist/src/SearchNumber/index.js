import React, { useState } from "react";
import data from "./data";
import './index.css'

function SearchPhoneNumber(){
    const [uniqueTwoDigitNumber, setUniqueTwoDigitNumber] = useState(0)
    const [number, setNumber] = useState([])
    const [found, setFound] = useState(true)
    

    const handleSubmit = () => {
        data.find((e) => e.includes(uniqueTwoDigitNumber) ? setNumber(number.push(e)) : setFound(false))
        setNumber(number)
        setUniqueTwoDigitNumber(0) 
       
    }

    return(
        <>
            <input 
            type='number' 
            placeholder="Enter Your two digit unique number" 
            onChange={e => setUniqueTwoDigitNumber(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
            { (number.length > 0) ? number.map((e, i) => {
                return (
                    <p key={i}>
                    {e}
                    </p>
                )
            }) : <p>Not Found</p>}
        </>
    )
}

export default SearchPhoneNumber