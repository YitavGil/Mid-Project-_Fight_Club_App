import React, {useState, useRef, useEffect} from 'react';
import { FaBars, FaSkull, FaRegBellSlash, FaFistRaised } from 'react-icons/fa'
import { links, iconLinks } from './linksData';
import {Link} from "react-router-dom";

export default function Navbar(props) {
    const [showLinks, setShowLinks] = useState(false);
    const [iconState, setIconState] = useState("fist")
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

      useEffect(() =>{
        setIconState("fist-when-match");
        setTimeout(() =>{
          setIconState("fist");
        },500)
      }, [props.matches])

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1 ><Link className='potter-logo' to="/" >BeatIt </Link></h1>
                    <button onClick={toggleLinks} className='nav-toggle'>
                    <FaBars />
                    </button>
                </div>
                <div className='links-container show-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                     {links.map((link) => {
                         const {id, url, text} = link;
                         return( <li key={id}>
                             <Link to={url}>{text}</Link>
                         </li>
                         )
                     })}
                    </ul>
                </div>
                
                <ul className='profile-icons'>
                  {/* {iconLinks.map((iconLink) =>{
                      const {id,url,icon} = iconLink;
                      return <li key={id}>
                          <Link to={url}>{icon}</Link></li>
                  })} */}
                  <li><Link to='/my-fights'><FaFistRaised className={iconState} /></Link></li>
                  <li><Link to='/profile'><FaSkull fontSize="x-large" /></Link></li>
                    <a>
                    <FaRegBellSlash fontSize="x-large"/>
                    </a>
                </ul>
                
            </div>
        </nav>
    )
}
