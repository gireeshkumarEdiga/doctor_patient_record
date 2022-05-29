import React from 'react'
import { useState } from 'react'
import Data from "./details.json";

export const Home = () => {
    const [ search, setSearch] = useState("")
    // const user = JSON.parse(Data)
    // console.log(user)
  return (
    <div>
        <center>
            <h4>Enter the details</h4>

            <input type="text" value={search} onChange={(e) => setSearch(e.target.value) } />
            <br />

            {Data.filter(data => data.patient.name.toLowerCase().includes(search.toLowerCase())).map((data) => {
               return <div style={{"border":"1px solid black","margin" :"50px 400px"}}>
                 <div>
                   { <img src={data.patient.image} style={{"width":"540px","height":"250px"}}/>}
                 </div>
                 <div>
              <h2>patient</h2>
                 <p> Name : {data.patient.name}</p>
                 <p> Gender : {data.patient.gender}</p>
                 <p> Age : {data.patient.age}</p>
              <h2>Medicines</h2>
                <p> Name : {data.medicines.name}</p>
                <p> Quantity: {data.medicines.quantity}</p>
              </div>
                 </div>
              
            })}
            
        </center>
        
    </div>
  )
}

// export default Home