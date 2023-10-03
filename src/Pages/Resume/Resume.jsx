import React from 'react'
import './Resume.css'
import Skills from '../Skills/Skills'
import Project from '../Projects/Project'
const Resume = () => {
  return (
    <>
    <div id='resume'>
    <section  className="bg-parlex">
        <div className="parlex-back">
          <p className='parlex-title'>RESUME</p>
        </div>
    </section> 
    <div className='container_education'>
      {/* <div className='container_resume'> */}
        <div className="container1_education">
           <div className='title'>
           <h1 className='experience_title'>Education</h1>
           <hr/>
            </div> 
         <div className='eduction_line'>
           <p className='Circle_line'></p><br/><br/><br/><br/>
           <p className='Circle_line'></p><br/><br/><br/><br/><br/>
           <p className='Circle_line'></p>
            </div>
            <div className='education'>
                <p className='education_year'>2016-17 <b>Secondary</b></p>
                <p className='education_name'>Narayana e-Techno School,</p>
                <p className='education_place'>Peddapuram,</p>
                <p className='education_marks'>CGPA : 8.8</p>

            </div>
            <div className='education'>
                <p className='education_year'>2017-19 <b>Higher Secondary</b></p>
                <p className='education_name'>Aditya Junior College,</p>
                <p className='education_place'>Kakinada,</p>
                <p className='education_marks'>CGPA : 8.45</p>
            </div>
            <div className='education'>
                <p className='education_year'>2019-23 <b>Graduation(B.TECH)</b></p>
                <p className='education_name'>Aditya College Of Engineering,</p>
                <p className='education_place'>Surampalem,</p>
                <p className='education_marks'>CGPA : 6.7</p>
            </div>
        </div>
        <div className="container2_experience">
           <div className='title'>
           <h1 className='experience_title'>Experience</h1>
           <hr/>
            </div> 
            <div className='experience_line'>
           <p className='Circle_line'></p>
            </div>
            <div className='experience'>
                <p className='experience_year'>Jan 2023 - Jun 2023 <b>LocalVille(Internship)</b></p>
                <p className='experience_role'>Back-end Developer , Banglore.</p>
                <p className='experience_about'>
                • Responsible for creating interactive web pages by utilizing HTML, CSS, and 
                React to develop dynamic and engaging user interfaces.<br/>
                • Created APIs using PHP and MYSQL to improve website functionality and 
                user experience.<br/>
                • Contributed to the development of a new feature that resulted in increase of 
                user engagement.<br/>
                • Selected as performer of the week for exceptional work on a high-priority 
                project.<br/>
                • Demonstrated strong communication skills by presenting project updates to 
                team members and senior management.<br/>
                • Developed valuable technical skills in API creation, PHP programming, and 
                database management.<br/>
                • Collaborated with team members to troubleshoot and resolve technical issues.
                </p>
                <p className='experience_skill'><b>Skills We Used :</b> PHP , MYSQL , RESTAPIs , REACTJS , POSTMAN</p>
            </div>
        </div>
    </div>
    {/* </div> */}
    <Skills/>
    <Project/>
    </div>
    </>
  )
}

export default Resume