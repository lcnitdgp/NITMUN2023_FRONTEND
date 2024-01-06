import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const Artist3 = () => {
  return (
    <div className="about-section new-artist" id="artistSection">
    <ParticlesDiv />
      <div className="about-content">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>DISEC</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./nitmunweb/DISEC.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="lato-400 about">
          Deliberation upon the conflict in the Syrian region along with its impact on the socio-political conditions and western relations, with special emphasis on seeking ways to de-escalate the situation.
            <br />
            <br />
             
          </p>
          <div className="yt-video">
            <iframe title="artist-video-one" src="https://www.youtube.com/watch?v=upBwLdMdgDg" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border: '0px'}}></iframe>
          </div>
        </Slide>
      </div>
      <div className="about-image artist-image">
        <img src="./nitmunweb/DISEC.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default Artist3;
