import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
export default function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img 
          src={getImageUrl('about/aboutImage (2).png')} 
          alt='Me sitting with a laptop' 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt='cursor Icon'/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a Frontend developer passionate 
                about crafting dynamic, user-centric web experiences.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/uiIcon.png')} alt='UI Icon' />
            <div className={styles.aboutItemText}>
              <h3>Diverse React Projects</h3>
              <p>I've crafted numerous React.js web apps, showcasing my expertise in 
                building responsive and engaging user interfaces.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt='Server Icon' />
            <div className={styles.aboutItemText}>
              <h3>Active Learner</h3>
              <p>An active learner dedicated to mastering new web technologies, continuously enhancing skills, 
                and delivering innovative, user-focused frontend solutions for web applications.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
