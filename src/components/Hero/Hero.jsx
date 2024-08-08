import React from 'react'

import styles from "./Hero.module.css"
import { getimageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yashwanth Nalamasa</h1>
        <p className={styles.description}>I'm a Full-Stack Developer with 2 years of experience using React and Node js. Reach out if you'd like to know more!</p>
        <a href="mailto:yashwanthnalamasa@gmail.com" className={styles.contactBtn}>Contact Me</a>

      </div>

      <img src={getimageUrl("hero/heroImage.png")} alt="Hero Image of me" className={styles.heroImg}/>

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
