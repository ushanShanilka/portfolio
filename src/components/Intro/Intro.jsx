import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Ushan Shanilka</span>
          <span>
            Full Stack Developer with six month experince in web development
          </span>
        </div>
        <button className="button i-button">Hire me</button>
      </div>
      <div className="i-right">another side</div>
    </div>
  );
}

export default Intro;
