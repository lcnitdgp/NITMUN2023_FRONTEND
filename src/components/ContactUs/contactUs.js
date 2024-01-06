import React from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import ParticlesDiv from '../Particles/particles'

library.add(faInstagram, faFacebook, faTwitter);

const ContactUs = () => {
  return (
    <div className="contact-section" id="contactSection">
      <ParticlesDiv />
      <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>04</span> CONTACT US</span>
      <Fade duration={700} top cascade><span className="pf-400 section-heading">Reach Us</span></Fade>
      <img src="./LC.jpg" height="100px" width="100px" alt=""/>
      <Slide><p className="pf-400 venue">National Institute of Technology Durgapur</p></Slide>
      <div className="map" title="Get Directions">
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/National+Institute+of+Technology+Durgapur/@23.5378758,87.2916616,15z/data=!4m9!1m2!2m1!1snit+dgp+maps!3m5!1s0x39f772081cede5e9:0x33fb9ccb243dfa5!8m2!3d23.5476717!4d87.2931383!16zL20vMDg1ejlf?entry=ttu">
          <img src='./nitdgp.jpg' width="100%" alt="NIT DGP location"/>        
        </a>
      </div>
      <div className="lp-link-box cp-box">
            <a href="mailto:lc.nitd@gmail.com" style={{textDecoration: 'none', color: 'white'}} title="Send mail" className="lp-link-boxes lp-link-box-one cp-boxes">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: 'white',
                textDecoration: 'none'
              }}>
              <span className="lato-400 small-lato">EMAIL</span>
              <span className="pf-400">
              lc.nitd@gmail.com
              </span>
              </div>
            </a>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">PHONE</span>
              <span className="pf-400">
                +91-##########
              </span>
            </div>
            <div href="#aboutSection" className="lp-link-boxes lp-link-box-two cp-boxes">
              <span className="lato-400 small-lato">SOCIAL MEDIA</span>
              <span className="pf-400">
                Follow - &nbsp;
                  <a
                    style={{
                      color: 'white'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/lcnitdgp/">
                    <FontAwesomeIcon 
                      icon={["fab", "facebook"]}
                      style={{
                        margin: '0px 5px'
                      }}
                    />
                  </a> 
                  <a
                    style={{
                      color: 'white'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/lcnitd/">
                    <FontAwesomeIcon 
                      icon={["fab", "instagram"]}
                      style={{
                        margin: '0px 5px'
                      }}
                    />
                  </a>  
              </span>
            </div>
    </div>
    </div>
  )
}

export default ContactUs
