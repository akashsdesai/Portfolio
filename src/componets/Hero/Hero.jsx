import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Akash</h1>
        <p className={styles.description}>
        Passionate Front-End ReactJS developer 
        crafting user-friendly, responsive web apps with a focus on clean code and exceptional user experiences
        </p>
        <a target='_blank' href='mailto:akashdesai954@gmail.com' className={styles.contactBtn}>Contact me</a>
      </div>
      <img 
        src={getImageUrl("hero/heroImage (2).PNG")} 
        alt='Hero Image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottumBlur}></div>
    </section>
  )
}
