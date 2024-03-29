import { svgImages } from "../components/utils";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="left">
          <h3>Copyright © 2024. All rights are reserved.</h3>
        </div>
        <div className="right">
          <a href="" className="social_icon">
            {svgImages?.linkedin}
          </a>
          <a href="" className="social_icon">
            {svgImages?.github}
          </a>
        </div>
      </div>
    </footer>
  );
}
