import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'

library.add(faInstagram, faFacebook, faTwitter);


const NavbarLinks = (props) => {
  
  return (
    <div>
      <ul className="ul-test">
          <li><AnchorLink className="pf-400 nav-links" href="#aboutSection" onClick={props.closeTheNav}>About LC</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#artistsSection" onClick={props.closeTheNav}>About NITMUN</AnchorLink></li>
          <li><AnchorLink className="pf-400 nav-links" href="#teamSection" onClick={props.closeTheNav}>Team</AnchorLink></li>
          <li><Link to="/gallery" style={{outline: 'none', textDecoration: 'none' , marginTop: '300px'}} className="event-button-nav pf-400 ">Gallery</Link></li>
          <li><Link to="/register" style={{outline: 'none', textDecoration: 'none' , marginTop: '300px'}} className="event-button-nav pf-400 ">Register now</Link></li>
          <li><AnchorLink className="pf-400 nav-links" href="#contactSection" onClick={props.closeTheNav}>Contact Us</AnchorLink></li>
          <li>
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/lcnitdgp/">
              <FontAwesomeIcon 
                icon={["fab", "facebook"]}
                size="2x"
                style={{
                  margin: '0px 5px'
                }}
              />
            </a> 
            &nbsp;&nbsp;
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/lcnitd/">
              <FontAwesomeIcon 
                icon={["fab", "instagram"]}
                size="2x"
                style={{
                  margin: '0px 5px'
                }}
              />
            </a> 
          </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
