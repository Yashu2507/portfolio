import React from 'react';
import { getimageUrl } from '../../utils';
import styles from "./About.module.css";


export const About = () => {
  return   (
  
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getimageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}
      />
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
        <img src={getimageUrl("about/cursorIcon.png")} alt="Cursor Icon" /> <div className={styles.aboutItemText}>
          <h3>Frontend Developer</h3>
          <p>
            I'm a frontend developer with experience in building responsive and optimized sites
          </p>
        </div>
    </li>

    <li className={styles.aboutItem}>
        <img src={getimageUrl("about/serverIcon.png")} alt="Server Icon" /> <div>
          <h3 className={styles.aboutItemText}>Backend Developer</h3>
          <p>
            I have experience developing fast and optimised back-end systems and API's
          </p>
        </div>
    </li>

    <li className={styles.aboutItem}>
        <img src={getimageUrl("about/cursorIcon.png")} alt="Cursor Icon" /> <div>
          <h3 className={styles.aboutItemText}>UI Designer</h3>
          <p>
            I have designed multiple landing pages and have created design system as well
          </p>
        </div>
    </li>

    </ul>

    </div>
  </section>
  );
  
}
