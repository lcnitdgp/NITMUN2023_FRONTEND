import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import ParticlesDiv from '../Particles/particles'

const AboutSection = () => {
  return (
    <div className="about-section" id="aboutSection">
    <ParticlesDiv />
      <div className="about-content">
        <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>01</span> NITMUN</span>
        <Fade duration={700} top cascade><span className="pf-200 section-heading " style={{fontSize: '35px'}}>ABOUT LITERARY CIRCLE</span></Fade>
        <Slide bottom>
          <p className="lato-400 about">
          Literary Circle is the club in NIT Durgapur, which gives the college an extra dimension of creative expression in the midst of technical unilateralism and gives the students of the college an opportunity to transcend the ordinary and mundane. The Literary Circle conducts various events throughout the year.
          </p>
          <p className="lato-400 about">
          The club is known to be highly selective in its admission of new members, with only about 10-15 students inducted out of the entire batch of 900 each year. Great believers of the phrase ‘quality over quantity’, the members selected every year are the best of the best in the field of expression and creativity.
          </p>
        </Slide>
      </div>
      <div className="about-image">
        <img src="./nitmunweb/bestlc.jpg" alt="Top view"/>
      </div>
    </div>
  )
}

export default AboutSection
