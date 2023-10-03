import React from 'react'
import './Projects.css';
import hospital from '../../Assests/images/hospital.png'
import review from '../../Assests/images/reviews.png'
import youtubeclone from '../../Assests/images/youtubeclone.png'
import ecommerces from '../../Assests/images/ecommerces.png'
const Project = () => {
  return (
    <div className="projects">
    <div className='projectheading'>
    <h2>My Projects</h2>
    </div>
    <div className="project-card">
      <h3>Hospital Management System</h3>
      <p><b>Software Used:</b> REACTJS,NODEJS,MONGODB</p>
      <p>
      • Hospital Management System is a system enabling hospitals to manage information and data related to all aspects of healthcare - processes, providers, patients, and more.<br/>
      • which in turn ensures that processes are completed swiftly and effectively.<br/>
      • When one thinks of the various aspects and departments of a hospital,this is my personal project.<br/>
      • And i have created hospital management system to use for patients to book a Appointment scheduling is one of the most tedious processes in a hospital. <br/>
      • With the help of a Hospital Management System, an appointment widget is easily added to the hospital’s website. <br/>
      • Patients can easily log in to the website, book an appointment with a doctor they choose with a time that works for them.<br/>
      • This code is available in <a href='https://github.com/saimani3/projects'>Github</a>.
      </p>
      <p><b>Example Output Image</b></p>
      <img src={hospital} alt='hospital' className='project_images'/>
    </div>
    <div className="project-card">
      <h3>Detecting and Characterizing Reviews in Online Product Reviews</h3>
      <p><b>Software Used:</b> HTML, CSS, Bootstrap,Python 3.10.7, FLASK, SQLite.</p>
      <p>
      • Online market places often sees spam in the form of reviews.<br/> 
      • People are often hired to target specific brands for promoting them by writing highly positive or negative reviews.<br/>
      • This often is done collectively in groups. Although some previous studies attempted to identify and analyze such opinion spam groups, little has been explored to spot those groups who target a brand as a whole, instead of just products.<br/> 
      • In this project, we collected the reviews from the ecommerce site and manually labeled a set of candidate reviewer groups.<br/>
      • The groups are extracted using frequent item set mining over brand similarities such that users are clustered together if they have mutually reviewed.<br/>
      • This code is available in <a href='https://github.com/saimani3/finalyearproject'>Github</a>.
      </p>
      <p><b>Example Output Image</b></p>
      <img src={review} alt='review' className='project_images'/>
    </div>
    <div className="project-card">
      <h3>YouTube Clone</h3>
      <p><b>Software Used:</b>REACTJS,NODEJS,MONGODB</p>
      <p>
      • The Header contains three sections (left, center and right).<br/>
      • The left section contains the logo and menu, the center contains the search box and an icon, and the right contains navigation icons.<br/>
      • The icons are based on similar elements, which means that we design an icon element and then copy, paste, and edit it to create the others.<br/>
      • The Main body contains two sections (sidebar and content). The navigation links in the sidebar are also similar, so they are just one thing. <br/>
      • The same thing happens to the videos in the content section.<br/> 
      • This code is available in <a href='https://github.com/saimani3/youtubecloneproject'>Github</a>.
      </p>
      <p><b>Example Output Image</b></p>
      <img src={youtubeclone} alt='youtubeclone' className='project_images'/>
    </div>
    <div className="project-card">
      <h3>E-commerce</h3>
      <p><b>Software Used:</b>POSTMAN,RESTFULLAPIs,Reactjs,Nodejs,Mongodb</p>
      <p>
      • The business-to-consumer aspect of product commerce (e-commerce) is the most visible business use of the World Wide Web.<br/>
      • The primary goal of an e-commerce site is to sell goods online.<br/>
      • This project deals with developing an e-commerce website for Online Product Sale.<br/> 
      • It provides the user with a catalog of different product available for purchase in the store. <br/>
      • In order to facilitate online purchase a shopping cart is provided to the user.<br/>
      • This code is available in <a href='https://github.com/saimani3/e-commerce/tree/project2'>Github</a>.
      </p>
      <p><b>Example Output Image</b></p>
      <img src={ecommerces} alt='ecommerces' className='project_images'/>
    </div>
  </div>
  )
}

export default Project