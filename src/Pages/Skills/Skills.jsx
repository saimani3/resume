import React from 'react'
import './skills.css'
const Skills = () => {
    const skillsList = [
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'JavaScript (ES6+)', percentage: 90 },
        { name: 'React.js', percentage: 85 },
        { name: 'Node.js', percentage: 80 },
        { name: 'Angular.js', percentage: 50 },
        { name: 'Java', percentage: 60 },
        { name: 'Python', percentage: 50 },
        { name: 'Redux', percentage: 75 },
        { name: 'RESTful API Integration', percentage: 80 },
        { name: 'Git/GitHub', percentage: 80 },
        { name: 'PHP', percentage: 60 },
        { name: 'MySql', percentage: 60 },
        { name: 'MongoDB', percentage: 70 },
        { name: 'Problem Solving', percentage: 75 },
        { name: 'Team Collaboration', percentage: 90 },
        { name: 'Communication', percentage: 85 },
        { name: 'Time Management', percentage: 95 },
      ]
  return (
    <section className="skills">
      <div className='skillsheading'>
      <h2>SKILLS</h2>
      </div>
      <div className="skill-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="percentage-label">({skill.percentage}%)</span>
            </div>
            <div className="percentage-bar">
              <div
                className="percentage-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills