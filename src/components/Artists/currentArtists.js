import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const CurrentArtists = () => {
  return (
    <div className="about-section new-artist" id="artistSection">
    <ParticlesDiv />
      <div className="about-content">
        <Fade duration={700} top cascade><span className="pf-400 section-heading" style={{display: 'block', width: '100%', textAlign: 'center'}}>AIPPM</span></Fade>
        <div className="about-image artist-image-mob">
            <img src="./nitmunweb/AIPPM.jpg" alt="Top view"/>
        </div>
        <Slide bottom>
          <p className="lato-400 about">
          Discussing the New Labour Laws 2022, its effect on industrial exploitation of employees, with emphasis on the exploitation of sex workers and their security.
            <br/>
            <br/>
            
          </p>
          <div className="yt-video">
            <iframe title="artist-video-one" src="https://www.youtube.com/watch?v=kLgd2612Vtc" width="100%" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border: '0px'}}></iframe>
          </div>
        </Slide>
      </div>
      <div className="about-image artist-image">
        <img src="./nitmunweb/AIPPM.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default CurrentArtists;
