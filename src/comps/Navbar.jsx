import React, {useState, useRef, useEffect} from 'react';
import { FaBars, FaSkull, FaRegBellSlash, FaFistRaised, FaPersonBooth } from 'react-icons/fa'
import { links } from './linksData';

export default function Navbar() {
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1 className='potter-logo'>BeatIt</h1>
                    <button className='nav-toggle'>
                    <FaBars />
                    </button>
                </div>
                <div className='links-container show container'>
                    <ul className='links'>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Events</a>
                        </li>
                        <li>
                            <a href='#'>Fights Near Me</a>
                        </li>
                    </ul>
                </div>
                <ul className='social-icons'>
                    <a href='https://twitter.com/hashtag/fightclub'>
                    <FaSkull />
                    </a>
                    <a href='https://twitter.com/hashtag/fightclub'>
                    <FaFistRaised />
                    </a>
                    <a href='https://twitter.com/hashtag/fightclub'>
                    <FaRegBellSlash />
                    </a>
                </ul>
                
            </div>
        </nav>
    )
}
