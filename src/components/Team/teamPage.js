import React from 'react'
import Fade from 'react-reveal'
import Slide from 'react-reveal/Slide'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faFacebook, faTwitter);

const financeTeam = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const operationsDirector = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const operationsTeam = [
  {
    avatar: 'abhinav.jpg',
    name: 'Abhinav Garg',
    designation: 'Deputy Director',
    facebook: 'https://www.facebook.com/abhinav.garg.167',
    instagram: 'https://www.instagram.com/_abhinavgarg/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/',
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  // {
  //   avatar: 'mukul.jpg',
  //   name: 'Mukul Agrawal',
  //   designation: 'Deputy Director',
  //   facebook: 'https://www.facebook.com/mukul.agarwal.73700',
  //   instagram: 'https://instagram.com/mukul.agarwal.73700'
  // },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/',
  }
];

const internalAffairsDirector = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/',
  }
];

const internalAffairsTeam = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const prDirector = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  // {
  //   avatar: 'dhruv.jpg',
  //   name: 'Dhruv Gupta',
  //   designation: 'Director',
  //   facebook: 'https://www.facebook.com/dhruv.guptaa.7',
  //   instagram: 'https://instagram.com/imdhruvgupta'
  // },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const prTeam = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const mntDirector = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const mntTeam = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const webMaster = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const creativeDirector = [
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  },
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const creativeTeam = [
  
  {
    avatar: 'ayush.jpeg',
    name: 'Ayush Tiwari',
    designation: 'Head Of Organising Committee',
    facebook: 'https://www.facebook.com/lcnitdgp/',
    instagram: 'https://www.instagram.com/lcnitd/'
  }
];

const mapPeople = (teamType, folderName, cardClasses) => {
  return(
    
    <div className="team-sub">
      {teamType.map((item,i) => {
      let imgSrc = `./${folderName}/${item.avatar}`;
      return(
      <div className={cardClasses} key={i}>
        <img src={imgSrc} width="100%" alt="team member"/>
        <div className="mem-details">
          <span className="mem-name pf-400">{item.name}</span>
          <span className="mem-desig pf-400">{item.designation}</span>
          <div className="mem-contact">
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={item.facebook}>
              <FontAwesomeIcon 
                icon={["fab", "facebook"]}
                size="2x"
                style={{
                  margin: '0px 5px',
                  color: '#3b5998',
                  fontFamily: 'Lato, sans-serif'
                }}
              />
            </a>
            &nbsp;
            <a
              style={{
                color: 'white'
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={item.instagram}>
              <FontAwesomeIcon 
                icon={["fab", "instagram"]}
                size="2x"
                style={{
                  margin: '0px 5px',
                  color: '#e4405f',
                  fontFamily: 'Lato, sans-serif'
                }}
              />
            </a> 
          </div>
        </div>
      </div>
    )
  })}
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
    <div className="events-page team-page">
        <Fade top cascade><span className="pf-400 t-head">Meet the team</span></Fade>
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Finance</span></Slide>
        {mapPeople(financeTeam, 'jycfinanceteam', 'team-card')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Operations</span></Slide>
        {mapPeople(operationsDirector,'jycoperationsteam', 'team-card')}
        {mapPeople(operationsTeam, 'jycoperationsteam','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Internal Affairs</span></Slide>
        {mapPeople(internalAffairsDirector,'jycteaminternalaffairs', 'team-card')}
        {mapPeople(internalAffairsTeam, 'jycteaminternalaffairs','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Public Relations</span></Slide>
        {mapPeople(prDirector,'jycteampublicrelations', 'team-card')}
        {mapPeople(prTeam, 'jycteampublicrelations','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Media and Technical</span></Slide>
        {mapPeople(mntDirector,'jycteammediatechnical', 'team-card')}
        {mapPeople(mntTeam, 'jycteammediatechnical','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Creative</span></Slide>
        {mapPeople(creativeDirector,'jycteamcreative', 'team-card')}
        {mapPeople(creativeTeam, 'jycteamcreative','team-card team-card-small')}
        <br/><br/>
        <Slide bottom><span className="pf-400 ts-head">Web Master</span></Slide>
        {mapPeople(webMaster, 'jycwebteam','team-card')}
    </div>
    </>
  )
}
