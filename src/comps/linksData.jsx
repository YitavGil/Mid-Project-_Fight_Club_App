import React from "react";
import { FaBars, FaSkull, FaRegBellSlash, FaFistRaised } from 'react-icons/fa'

export const homeLink = [
    {
        id:1,
        url: '/',
        text: 'home' 
    }
]


export const links = [
   
    {
        id:2,
        url: '/about',
        text: 'About'

    },
    {
        id:3,
        url: '/events',
        text: 'Events'

    },
    {
        id:4,
        url: '/local-fights',
        text: 'Fights Near Me'

    }
    
]

export const iconLinks = [
    {
        id:5,
        url: '/profile',
       icon: <FaSkull fontSize="x-large" />

    },
    {
        id:6,
        url: '/my-fights',
        icon: <FaFistRaised fontSize="x-large"/>

    },
    // {
    //     id:7,
    //     url: '/login',
    //     text: 'login'

    // }
]