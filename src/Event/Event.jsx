import React, {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Images from '../assets/Images';

const Event = ({item}) => {
    const [fightImage, setFightImage] = useState('')

    const getRandomImage = () => {
        const imageArray = Images;
        const randomNumber = Math.floor(Math.random() * imageArray.length)
        return imageArray[randomNumber].img
    }

    useEffect(() => {
        setFightImage(
            getRandomImage()
        )
    }, [])


    const { deleteEvent } = useContext(GlobalContext);
    return (
        <div className='event-positioning'>
              <li>
                    <h2><span className='event-type'>{item.event}</span></h2>
                    <img src={fightImage} />
                    <div className='events-info'>
                        <h3><span className='event-time'>{item.time}</span></h3>
                        <h3><span className='event-location'>{item.location}</span></h3>
                    </div>
                    <span onClick={() => deleteEvent(item.id)} className='action'> &#10007;</span>
                </li>


        </div>
    )
}

export default Event
