import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectsCard from './ProjectsCard'
export default function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.Projects}>
        {
          projects.map((project,id)=>{
            return(
              <ProjectsCard 
                project={project}
                key={id}
              />
            )
          })
        }
      </div>
    </section>
  )
}
