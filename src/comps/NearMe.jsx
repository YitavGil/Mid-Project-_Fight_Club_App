import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios';
import { Wrapper, Status, google } from "@googlemaps/react-wrapper";
import '../assets/nearme.css';

const NearMe = (props) => {
    const [pairs, setPairs] = useState([])
    
        
    const getRandomHero = () => {
        let randomNum =  Math.floor(Math.random() * props.heros.length)
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
            //findFights()
           
        },[])
        // let proxy = "https://api.codetabs.com/v1/proxy/?quest=";
        // const findFights = () => {
        //     const config = {
        //         method: 'get',
        //         url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.0857546%2C34.9774097&radius=15000&type=restaurant&keyword=cruise&key=AIzaSyA-5JjP1F92Y_oSSEiVp8kY0bg0QuuIRE4',
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
        
        

    return(
<>

    <div className='vs-matches'>
    {pairs.map((persons) => {
       return(
           <div className='versus' key={persons.first.id} style={{display: 'flex'}}>
            <div 
            style={{backgroundImage: `url(${persons.first.images.md})`}} 
            className='match'>
            <h3>{persons.first.name}</h3>
            </div>
            <h1 className='vs-title'>VS</h1>
            {/* <Wrapper apiKey={'AIzaSyA-5JjP1F92Y_oSSEiVp8kY0bg0QuuIRE4'}>
            <RenderMap/>
            </Wrapper> */}
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



    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAFgCqu6DSDeSN5mm4SrwIIuiYRFE_luxI


   

    

  
}

// const RenderMap = status => {
//     const mapRef = useRef(null);
//     const [map, setMap] = useState();
//     const currentLocation = new window.google.maps.LatLng(32.0857546, 34.9774097);
//     const showMap = () =>{
//         //'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.0857546%2C34.9774097&radius=15000&type=restaurant&keyword=cruise&key=AIzaSyA-5JjP1F92Y_oSSEiVp8kY0bg0QuuIRE4'
        

//         const req = {
//             location: currentLocation,
//             radius: 15000,
//             type: ['restaurant'],
//             keyword:  'cruise'
//         }
//         //var service = new google.maps.places.PlacesService(mapRef);
//         console.log(map)
//         map.places.PlacesService.nearbySearch(req, mapCallback);
 
     
//     }

//      function mapCallback(results, status)   {
//          console.log(results, status);
//          if(status = google.maps.places.PlacesServiceStatus.OK){
//              for(let i = 0; i < results.length; i++){
//                  // createMarker(results[i]);
//                  console.log(results[i]);
//              }
//          }
//      }
//     useEffect(() =>{
//         if(mapRef.current && !map){
//             setMap(new window.google.maps.Map(mapRef.current, {center: currentLocation,
//                 zoom: 15}))
//         }
//         if(map){
//             showMap()
//         }
//     }, [mapRef, map])
//     return (<div ref={mapRef}></div>)
// }

export default NearMe
