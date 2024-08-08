import React from "react";

import styles from "./Contact.module.css";
import { getimageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getimageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yashwanthnalamasa@gmail.com">yashwanthnalamasa@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getimageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yashwanth-nalamasa">linkedin.com/in/yashwanth-nalamasa</a>
        </li>
        <li className={styles.link}>
          <img src={getimageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Yashu2507">github.com/Yashu2507</a>
        </li>
      </ul>
    </footer>
  );
};
