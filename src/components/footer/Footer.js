import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Personalized footer text */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Maria Sneka")}
        </p>

        {/* Optional: remove template theme credit or replace with your own */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Built using React.js
        </p>
      </div>
    </Fade>
  );
}
