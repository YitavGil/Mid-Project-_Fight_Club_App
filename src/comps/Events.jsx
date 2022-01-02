import React, {useContext, useState} from 'react';
import '../assets/events.css';
import { GlobalContext } from '../context/GlobalState';
import Event from '../Event/Event';

const Events = () => {
    const [event, setEvent] = useState("");
    const [time, setTime] = useState("");

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: Math.floor(Math.random() * 10000),
            event,
            time
        }

        addEvent(newEvent);

        //reset form
        setEvent('')
        setTime('')
    }

    return (
        <div className='content'>
            <div className="content-header">
                <div className="layer"> 
                <h1>Upcoming Events</h1> 

                </div>
            </div>
            <div className="events-body">
                
                <div className="add-event">
                    <form onSubmit={onSubmit}>
                        <input className='event-field' 
                        type="text"
                        placeholder='New Event'
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                        />
                        <input className='event-input-time' 
                        type="text"
                        placeholder='Time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        />
                        <button className='submit-btn'>Add Event</button>
                    </form>
                  
                </div>
                <ul className='events'>
                  {events.map(item => (<Event key={item.id} item={item} />))}
                </ul>
            </div>
        </div>
    )
}

export default Events
