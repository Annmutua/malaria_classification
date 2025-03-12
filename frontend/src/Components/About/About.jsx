import React from "react";
import "./About.css";
import about_img from "../../assets/grab.jpg";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h2>About</h2>
        <h3>Take a look at our work</h3>
        <p></p>
        <p>
          MalariaAI is an advanced AI-powered tool designed to accurately
          classify malaria infections from blood smear images.
        </p>
        <p>
          By leveraging cutting-edge machine learning, our technology provides
          fast and reliable malaria diagnosis, assisting healthcare
          professionals and researchers in detecting infections with high
          precision. Our mission is to enhance early diagnosis and improve
          treatment outcomes, making malaria detection more accessible and
          efficient. Whether you're a clinician seeking quick results or a
          researcher analyzing malaria patterns, MalariaAI is here to support
          you.
        </p>
        <p>
          Take control of malaria detection today—because early diagnosis saves
          lives.
        </p>
      </div>
    </div>
  );
};

export default About;
