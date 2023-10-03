import React from 'react'
import './Contact.css'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
import {AiOutlineCopyrightCircle} from 'react-icons/ai';
const Contact = () => {
  return (
    <div id='contact'>
    <section  className="bg-parlex">
        <div className="parlex-back">
          <p className='parlex-title'>Contact</p>
        </div>
    </section> 
    <div className='container_contact'>
        <div className="container1_contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7629.000212878064!2d82.09981953508604!3d17.04817324257187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37838ca0b380cf%3A0x890ed34349af10db!2sRayabhupalapatnam%2C%20Andhra%20Pradesh%20533437!5e0!3m2!1sen!2sin!4v1696225872203!5m2!1sen!2sin" width="600" height="450" style={{border:'0',margin:'30px 0px 0px 20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container2_contact">
    <div className="contact-info">
        <p><b>Address:</b> 2-4,Peddapuram mandal,Rayabhupalapatnam,Kakinada,<br/>
        Andhra Pradesh,533437.</p>
        <p><b>Email:</b> saimanikantanallala12@gmail.com.</p>
        <p><b>Phone Number:</b> 8328099775.</p>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/saimanikanta-nallala-0a1a85205" target="_blank" rel="noopener noreferrer">
            <BsLinkedin style={{color:'blue'}} size={26}/>
        </a>
        <a href="https://github.com/saimani3" target="_blank" rel="noopener noreferrer">
             <BsGithub style={{color:'black'}} size={26}/>
        </a>
        <a href="https://youtube.com/@saimanikanta2091?si=X-3Fy7NvPKkrPrel" target="_blank" rel="noopener noreferrer">
             <BsYoutube style={{color:'red'}} size={26}/>
        </a>
        <a href="https://instagram.com/nsm_8328?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
             <BsInstagram style={{color:'#405de6'}} size={26}/>
        </a>
      </div>
      </div>
    </div>
    <div className="copy_rigth_div">
            <p className='copy_tage'>
            2023<AiOutlineCopyrightCircle size={15}
            style={{color:"white",marginTop:'4px'}}/>All rigths reserved by NSM
             </p>
            </div>
    </div>
  )
}

export default Contact