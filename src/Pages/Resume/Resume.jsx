import React from 'react'
import './Resume.css'
import Skills from '../Skills/Skills'
import Project from '../Projects/Project'
export const educationData = [
  { institution: 'Narayana e-Techno School', degree: 'Secondary', year: '2016-17',CGPA: '8.8' },
  { institution: 'Aditya Junior College', degree: 'Higher Secondary', year: '2017-19',CGPA: '8.45' },
  { institution: 'Aditya College Of Engineering', degree: 'Graduation(B.TECH)', year: '2019-23',CGPA: '6.7' },
  // Add more education entries
];
export const experienceData = [
  { position: 'Software Developer', company: 'LocalVille',Place: 'Banglore', year: 'Jan 2023 - Jun 2023',skills:'PHP , MYSQL , RESTAPIs , REACTJS , POSTMAN' },
  // Add more experience entries
];
const Resume = () => {
  return (
    <>
    <div id='resume'>
    <section  className="bg-parlex">
        <div className="parlex-back">
          <p className='parlex-title'>RESUME</p>
        </div>
    </section> 
    <div className="resume-container">
      <section className="education-section">
    <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> 
            <p>{edu.institution} - ({edu.year})</p> 
           <p>CGPA : {edu.CGPA}</p>
          </li>
        ))}
      </ul>
      </section>
      <section className="experience-section">
      <h2>Experience</h2>
      <ul>
        {experienceData.map((exp, index) => (
          <li key={index}>
            <strong>{exp.position}- ({exp.year})</strong> 
            <p>{exp.company} , {exp.Place}</p> 
           <p>Skills Used : {exp.skills}</p>
          </li>
        ))}
      </ul>
      </section>
      </div>
    <Skills/>
    <Project/>
    </div>
    </>
  )
}

export default Resume