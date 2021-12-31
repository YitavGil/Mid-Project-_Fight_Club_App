import React from 'react'
import '../assets/cards.css';

const Matches = (props) => {

    console.log(props.matches);

    return (
        <div className='matches-container'>
            <div className="match-title">
            <h1>Current Matches</h1>
            <h2>{props.matches.length}</h2>
            </div>

            <div className='card-matches'>
            {props.matches.map((person) => {
               return(<div onClick={()=>props.removeMatch(person.id)}
               style={{backgroundImage: `url(${person.images.md})`}} 
               className='match'>
               <h3>{person.name}</h3>
               </div>) 
            })}
            </div>
        </div>
    )
}

export default Matches
