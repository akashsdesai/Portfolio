import React from 'react'
import styles from './ProjectsCard.module.css'
import { getImageUrl } from '../../utils'
export default function ProjectsCard(
  {project : {title,imageSrc,description,skills,demo,source}}
  ) {
  return (
    <div className={styles.container}>
      <img 
        src={getImageUrl(imageSrc)} 
        alt={`image of ${title}`} 
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>{
        skills.map((skill,id)=>{
          return(
          <li key={id} className={styles.skill}>{skill}</li>)
        }
          )
          }
      </ul>
      <div className={styles.links}>
        <a target='_blank' href={demo} className={styles.link}>Demo</a>
        <a target='_blank' href={source} className={styles.link}>Source</a>
      </div>
    </div>
  )
}
