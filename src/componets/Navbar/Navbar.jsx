import React,{useState} from 'react'
import { getImageUrl } from '../../utils'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>Portfolio</a>
      <div className={styles.menu}>
        <img
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          className={styles.menuBtn} 
          alt='menu-button'
          onClick={()=>{
            setMenuOpen(!menuOpen)
          }}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={()=>{
            setMenuOpen(false)
          }}
        >
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#Contacts'>Contacts</a></li>
        </ul>
      </div>
    </nav>
  )
}
