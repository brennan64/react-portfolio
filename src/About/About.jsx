import './About.scss';
import walkingCouple from '../assets/walking-couple.jpg';
import ellaEars from '../assets/ella-ears.jpg';
import gordySmile from '../assets/gordy-smile.jpg';

export const About = () => (
  <div className="about-text">
    <h1>
      <span>About Me</span>
    </h1>
    <p>
      {`My name is Brennan Heley. I am a full stack java developer. I love dogs, camping, disc golf, and anything outdoors. Please click around to check out how I could be a great fit for your team.`}
    </p>
    <div className="img-folder">
      <img src={walkingCouple} alt="happy-couple" />
      <img src={ellaEars} alt="Eleanor the dog" />
      <img src={gordySmile} alt="Gordon the dog" />
    </div>
  </div>
);
