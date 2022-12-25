import React, { useState } from "react"
import { lotnowise } from "./data"
import './index.css'

function Parkinglot(){

    const [registration, setRegistration] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [arr, setArr] = useState([])
    const [search, setSearch] = useState('')
    const [lotNoSearch, setLotNoSearch] = useState('')

    const lotNoAllotation = (obj, lots) => {
        
        if(obj.vehicleType === 'car'){
            obj.lot = lots[0].car[0].lotno
            lots.splice(0, 1)
            console.log(lots);
        }
        else if(obj.vehicleType === 'bike'){
            const bikecount = lots[0].bike.length
            if(bikecount === 2){
                obj.lot = lots[0].bike[0].lotno
                lots[0].bike.shift()
            }
            else if(bikecount === 1){
                obj.lot = lots[0].bike[0].lotno
                lots.splice(0, 1)

            }
            
        }
        else if(obj.vehicleType === 'suv'){
            const index = lots.findIndex(e => e.suv)
            obj.lot = lots[index].suv[0].lotno
            lots.splice(index, 1)
        }
        if(lots.length === 0){
            alert('Sorry no lot is empty for parking')
        }
        
    }
    
    const handleSubmit = () => {
        
        const lots = lotnowise
        const vehicle1= vehicle
        const number = registration
        const obj = {}
        obj.vehicleType = vehicle1;
        obj.registration = number

        lotNoAllotation(obj, lots)
        arr.push(obj)
        setArr(arr)
        setRegistration('')
        setVehicle('')
        
        
        console.log(arr, "rrrrrrrr");
    }
    
    const handleSearch = () => {
        const number = arr.findIndex((e) => e.registration === search);
        console.log(arr[number]);
        if(typeof number === 'number'){
            alert(`Your vehicle is parked at ${arr[number].lot}`)
        }
         else{
            alert('Your Vehicle is not parked here')
         }

    }

    return(
            <>
            <div className="parent">
                <div>
                    <input 
                    type='text' 
                    placeholder="Enter the vehicle number"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                    
                </div>
            <div className="vehicleform">
             <label for="cars" className="labels">Choose the Vehicle Type and Enter the Vehicle Registration Number</label>
                <div className="select">
                <select name="cars" id="cars" onChange={e => setVehicle(e.target.value)}>
                    <option value='' className="option">select</option>
                    <option value="bike">Bike</option>
                    <option value="car">Car</option>
                    <option value="suv">SUV</option>  
                </select>
                </div>
                <div className="input">
                <input 
                type='text' 
                placeholder="Enter the Registration Number" 
                value={registration} 
                onChange={e => setRegistration(e.target.value)} 
                />
                </div>
                <div className="button">
                 <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                
            </div>
            <div className='tabler'>
                <table>
                    <tr>
                        <th>Vehicle-Type</th>
                        <th>Vehicle-Number</th>
                        <th>Lot alotted</th>
                    </tr>
                    {arr.map((user, index) => {
                            const {vehicleType, registration, lot} = user
                            return(
                                <tr key={index}>
                                    <td>{vehicleType}</td>
                                    <td>{registration}</td>
                                    <td>{lot}</td>
                                </tr>
                            )
                            
                            })}
                </table>
            </div>
         </div>
         </>
    )
}

export default Parkinglot