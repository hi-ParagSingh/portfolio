import { svgImages } from "./utils";

export default function Landing() {
  return (
    <div className="hero">
      <div className="hero_top">
        <div className="left">
          <h1 className="waving">Hi, {svgImages?.hand}</h1>
          <h1 className="name">Parag Singh</h1>
          <h1>Frontend Developer</h1>
          <p>
            Hi, I'm Parag Singh. A passionate Front-end Developer <br /> based
            in Jaipur, India. 📍
          </p>
          <div className="social_info">
            <a href="" className="social_icon">
              {svgImages?.linkedin}
            </a>
            <a href="" className="social_icon">
              {svgImages?.github}
            </a>
            <a href="" className="social_icon">
              {svgImages?.email}
            </a>
          </div>
        </div>
        <div className="right" />
      </div>
      <div className="skill_info">
        <div className="tech_stack">
          <span className="meta">Tech Stack: </span>
          <div className="stack">
            <div>{svgImages?.javaScript}</div>
            <div>{svgImages?.reactJS}</div>
            <div>{svgImages?.nextJS}</div>
            <div>{svgImages?.css}</div>
          </div>
          <a href="">{svgImages?.right_arrow}</a>
        </div>
        <div className="position">
          <span className="meta">Current Position: </span>
          <span className="meta_info">Senior Software Engineer</span>
        </div>
      </div>
    </div>
  );
}
