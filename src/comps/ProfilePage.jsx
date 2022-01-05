import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../assets/profile.css';

const ProfilePage = () => {
    const [profileDetails, setProfileDetails] = useState({
        wins: {
            value: 0,
            categories: [{name:"height", value:0 }, {name:"weight", value:0 }, {name:"race", value:"" }]
        },
        loses: {
            value: 0,
            categories: [{name:"Intelligence", value:0 }, {name:"Strength", value:0 }, {name:"Speed", value:0 }]
        },
        rank: {
            value: 0,
            categories: [{name:"AlterEgos", value:"" }, {name:"Occupation", value:"" }]
        }
    })
    const [showEdit, setShowEdit] = useState(false);
   const editProfile = () => {
        setShowEdit(true);
   }

   const saveProfile = () =>{
    setShowEdit(false)
   }

   const handleInput = (value, type, categorie) => {
   const temp = {...profileDetails}
   const index = temp[type].categories.findIndex(c => c.name===categorie)
   temp[type].categories[index].value = value
   setProfileDetails(temp)
   }

    return (
        <div>
            
            <div className='profile-container'>
                <div className='profile-top'>
            <h1>Your Profile</h1>
            <button className='profile-btn edit' onClick={editProfile}>Edit Profile</button>
            <button className='profile-btn save' onClick={saveProfile}>Save</button>
                <div className='profile-img'></div>
                </div>
                <div className="user-score">
                    <h3>Wins: </h3>
                    <h3>Loses: </h3>
                    <h3>Rank: </h3>
                </div>
                <div className="user-stats">
                <div className="user-appearnce">
                    {profileDetails.wins.categories.map(item => <div key={item.name}><h3 >{item.name}:{item.value}</h3> {showEdit && <input onChange={(event) => handleInput(event.target.value, "wins", item.name)} value={item.value} />} </div>)}
                </div>
                <div className="user-powerstats">
                {profileDetails.loses.categories.map(item => <div key={item.name}><h3 >{item.name}:{item.value}</h3> {showEdit && <input onChange={(event) => handleInput(event.target.value, "loses", item.name)} value={item.value} />} </div>)}
                </div>
                <div className="user-biography">
                {profileDetails.rank.categories.map(item => <div key={item.name}><h3 >{item.name}:{item.value}</h3> {showEdit && <input onChange={(event) => handleInput(event.target.value, "rank", item.name)} value={item.value} />} </div>)}
                </div>

                </div>

            </div>
        </div>
    )
}

export default ProfilePage
