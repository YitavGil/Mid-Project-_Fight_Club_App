import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const NearMe = (props) => {
    const [pairs, setPairs] = useState([])
        
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
       return(props.heros[randomNum]) 
    }

        useEffect(() => {
            let tempArray = [];
            if(!props.heros || props.heros.length === 0) {
                console.log('dfd');
                return
            }
            for(let i=0; i<5 ; i++) {
                const first = getRandomHero();
                const second = getRandomHero();
                tempArray.push(
                    {
                     first: first,
                     second: second
                })
            }
            console.log(tempArray)
            setPairs(tempArray)
        },[])





    return(
<>

    <div className='card-matches'>
    {pairs.map((persons) => {
       return(
           <div key={persons.first.id} style={{display: 'flex'}}>
            <div 
            style={{backgroundImage: `url(${persons.first.images.md})`}} 
            className='match'>
            <h3>{persons.first.name}</h3>
            </div>
            <div 
            style={{backgroundImage: `url(${persons.second.images.md})`}} 
            className='match'>
            <h3>{persons.second.name}</h3>
            </div>
        
       </div>
       ) 
    })}

    </div>
    </>
    )








    // let proxy = "https://api.codetabs.com/v1/proxy/?quest=";
    // const findFights = () => {
    //     const config = {
    //         method: 'get',
    //         url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyD-K1hxA8aG62lZHXRNorj8f3weoa-BYpM',
    //         headers: { }
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

    // useEffect(()=>{
    //     findFights()
    // }, [])

    // const render = (status) => {
    //     return <h1>{status}</h1>;
    //   };

    // return (
    //     <div>
    //         <h1>App working</h1>
           
    //     </div>
    // )
}

export default NearMe
