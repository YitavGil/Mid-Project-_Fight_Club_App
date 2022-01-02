import React from 'react';
import '../assets/popup.css';

const Popup = (props) => {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h2>It's a Match!</h2>
                <button onClick={props.closePopup} className='close-btn'>Dimiss</button>
                
            </div>
        </div>
    ) : "";
}

export default Popup
