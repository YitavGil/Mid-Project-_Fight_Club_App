import React from 'react'
import '../assets/cards.css';

const Matches = (props) => {
    
    return (
        <div className='matches-container'>
            <div className="match-title">
            <h1>Current Matches</h1>
            <h2>{props.matches.length}</h2>
            </div>

            <div className='card-matches'>
            {props.matches && props.matches.map((person) => {
               return(<div 
               key={person.name} style={{backgroundImage: `url(${person.images.md})`}} 
               className='match'>
               <h3>{person.name}</h3>
               <button className='forfeit-btn' onClick={()=>props.removeMatch(person.id)}>Forfeit Match</button>
               </div>
                
               
               ) 
            })}
            </div>

            <div className='opponent'>
                    <div className='secondary-title'>
                        <h2>Know Your Enemies</h2>
                    </div>
                {props.matches.map((person) => {
                    return (
                       <div key={person.id}>
                         
                        <div className='info-container'>
                          
                            
                            <div className='appearnce'>
                                <h4>Appearnce: </h4>
                                <h6>Height: {person.appearance.height}</h6>
                                <h6>Weight: {person.appearance.weight}</h6>
                                <h6>Race: {person.appearance.race}</h6>
                            </div>
                            <div className='powerstats'>
                                <h4>Powerstats: </h4>
                                <h6>Intelligence: {person.powerstats.intelligence}</h6>
                                <h6>Strength: {person.powerstats.strength}</h6>
                                <h6>Speed: {person.powerstats.speed}</h6>
                            </div>
                            <div className="biography">
                                <h4>Biography: </h4>
                                <h6>AlterEgos: {person.biography.alterEgos}</h6>
                                <h6>Occupation: {person.work.occupation}</h6>
                            </div>

                        </div>
                        </div> 
                    )
                })}
                                
             </div>

            
        </div>
    )
}

export default Matches
