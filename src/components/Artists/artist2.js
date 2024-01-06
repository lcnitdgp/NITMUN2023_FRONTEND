import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

export default function Artist2() {
  return (
    <div className="about-section new-artist" id="artistSection">
    <ParticlesDiv />
      <div className="about-image artist-image ai-right">
        <img src="./nitmunweb/SPECPOL.jpg" alt="Top view"/>
      </div>
      <div className="about-content ac-right">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>SPECPOL</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./nitmunweb/SPECPOL.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="lato-400 about">
          Deliberation upon the conflict in the Syrian region along with its impact on the socio-political conditions and western relations, with special emphasis on seeking ways to de-escalate the situation.
            <br/>
              start prepping up to set the delegate floor on fire! 
              See you on the 23rd of February, 2024.
          </p>
          <div className="yt-video">
            <iframe title="artist-video-one" src="https://www.youtube.com/watch?v=9EhrOk2mWXI" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border: '0px'}}></iframe>
          </div>
        </Slide>
      </div>
    </div>
  )
}
