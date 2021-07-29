import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Peoples() {
    const [people, setPeople] = useState([])
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => { 
            setPeople(response.data.results)
        
        })
    })

        if(people){
            return (
                 people.map((people) => (
            <section>
                <div className="vwegba">
                    
                <ul>
                    <img src = "https://source.unsplash.com/random/200x200?sig=3" alt = "" />
                 <li key = {people}>
                    <h1>{people.name}</h1>
                    <label for="">Gender:</label>
                    <p>{people.gender}</p>
                    <label for="">Height:</label>
                    <p>{people.height}</p>
                 
                 </li>

                 
                 </ul>
            </div>
            </section>
            
                   
                 ))
            )
           
        }

      return ( 
      
      <div>
            <p>{people}</p>
    </div>
    )
}

export default Peoples
