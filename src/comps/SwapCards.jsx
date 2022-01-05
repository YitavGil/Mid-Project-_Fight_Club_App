import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import '../assets/cards.css';

const SwapCards= (props) => {
    const [person, setPerson] = useState(null)

    const makeRandomNumber = () => {
      const randomNum =  Math.floor(Math.random() * props.heros.length)
      setPerson(randomNum)
    }
 
    const getRandomHero = () => {
        const randomNum =  Math.floor(Math.random() * props.heros.length)
        if(!props.heros || props.heros.length == 0){
            return;
        }
        console.log(randomNum, props.heros[randomNum]);
        while(props.heros[randomNum].hasShown !== undefined && props.heros[randomNum].hasShown) {
            randomNum =  Math.floor(Math.random() * props.heros.length)
        }
        props.heros[randomNum].hasShown = true
        setPerson(props.heros[randomNum]) 
    }
    
    useEffect(() => {
        if(props.heros){
            getRandomHero()
        }
    }, [props.heros])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        if(direction === "right") {
            props.addMatch(person)
        }
        
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        getRandomHero()
      }



    return (
        <div className='home-container'>
            <h1>Your Next Challenger Awaits</h1>
            <div className='card-container'>
           
                {person !== null && <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                >
                    <div
                    style={{backgroundImage: `url(${person.images.md})`}} 
                    className='main-card'>
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>}
            
            </div>
        </div>
    )
}

export default SwapCards
