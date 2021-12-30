import React, {useState, useRef, useEffect} from 'react';
import { FaBars, FaSkull, FaRegBellSlash, FaFistRaised } from 'react-icons/fa'
import { links, iconLinks } from './linksData';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current.style.height = '0px';
        }
      }, [showLinks]);

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1 className='potter-logo'>BeatIt</h1>
                    <button onClick={toggleLinks} className='nav-toggle'>
                    <FaBars />
                    </button>
                </div>
                <div className='links-container show-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                     {links.map((link) => {
                         const {id, url, text} = link;
                         return( <li key={id}>
                             <a href={url}>{text}</a>
                         </li>
                         )
                     })}
                    </ul>
                </div>
                
                <ul className='profile-icons'>
                  {iconLinks.map((iconLink) =>{
                      const {id,url,icon} = iconLink;
                      return <li key={id}>
                          <a href={url}>{icon}</a></li>
                  })}
                    <a>
                    <FaRegBellSlash fontSize="x-large"/>
                    </a>
                </ul>
                
            </div>
        </nav>
    )
}
