import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
export default function Contact() {
  return (
    <footer id='Contacts' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
        <a target='_blank' href='mailto:akashdesai954@gmail.com'>akashdesai954@gmail.com</a></li>

        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon'/>
        <a target='_blank' href='https://github.com/akashsdesai?tab=repositories'>github.com/akashsdesai</a></li>

        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon'/>
        <a target='_blank' href='https://www.linkedin.com/in/akash-s-404069108/'>linkedin.com/akash-s-desai</a></li>
      </ul>
    </footer>
  )
}
