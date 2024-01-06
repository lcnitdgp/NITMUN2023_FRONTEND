import React from "react";
import Slide from "react-reveal";
import Fade from "react-reveal/Fade";
import ParticlesDiv from "../Particles/particles";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="team-section" id="teamSection">
      <ParticlesDiv />
      <div className="team-content">
        <span className="lato-400 small-lato">
          {" "}
          <span className="pf-400" style={{ fontSize: "15px" }}>
            03
          </span>{" "}
          SQUAD
        </span>
        <Fade duration={700} top cascade>
          <span className="pf-400 team-heading">Meet the team</span>
        </Fade>
        <Slide bottom>
          <p className="lato-400 about">
          Meet the vibrant and dynamic team behind NITMUN, the force that turns diplomacy into a thrilling adventure! Comprising a squad of enthusiastic minds and spirited souls, our team is like a blend of serious strategists and professional jokesters, making sure that while we tackle global issues, we're also having a laugh along the way. From the caffeine-fueled brains of our organizers to the creative chaos orchestrated by our event planners, each member brings a unique flavor to the table. We're not just organizers; we're the architects of a rollercoaster ride through the world of Model United Nations, where serious discussions meet not-so-serious dance-offs. Get ready to join the NITMUN family – the coolest crew on campus, turning diplomacy into a delightful fiesta!
          </p>
        </Slide>
      </div>
      <div className="team-image">
        <img src="./teamvec.svg" height="200px" alt="" />
        <Link to="/team" style={{ outline: "none", textDecoration: "none" }}>
          <button className="pf-400 team-button">View the team</button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
