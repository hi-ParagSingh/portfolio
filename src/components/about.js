import aboutMeImage from "../static_assets/about-me.png";

export default function About() {
  return (
    <div className="about">
      <div className="left">
        <img src={aboutMeImage} alt="About Me" />
      </div>
      <div className="right">
        <h2>About Me</h2>
        <h4>Frontend Developer, India 📍</h4>
        <p>
          I am a highly skilled Senior Frontend Software Engineer with 4 Years
          of experience in modern frontend technologies like{" "}
          <b>React JS, and Next JS</b>.
          <br />
          <br />
          I have a strong track record in building user-friendly web
          applications, optimizing performance, and collaborating with
          cross-functional teams to achieve business goals.
          <br />
          <br /> I'm eager to contribute my expertise to the new project and
          help drive innovation and success.
        </p>
      </div>
    </div>
  );
}
