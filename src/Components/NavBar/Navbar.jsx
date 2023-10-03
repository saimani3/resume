import React from 'react'
import './Navbar.css'
import { Link as ScrollLink } from "react-scroll";
const Navbar = ({toggleDrawer}) => {
  const handleDownload = () => {
    fetch('sai_manikanta.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'sai_manikanta.pdf';
          alink.click();
      })
  })
  };
  return (
    <div className='Container_Navbar'>
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        {/* <Link to={'/'} className='logo_div_Navbar'> */}
            <p className='logo_title_navbar'>Sai Manikanta</p>
        {/* </Link> */}
      </div>
      <div className='navbar_list'>
          <ul className='nav-list'>
            <li className='list'>
            <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          Home
          </ScrollLink>
          </li>
            <li className='list'>
              <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          Summary
          </ScrollLink>
          </li>
            <li className='list'>
            <ScrollLink
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           Resume
          </ScrollLink>
          </li>
            <li className='list'>
            <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          Contact
          </ScrollLink>
          </li>
          </ul>
      </div>
      <div className="download_btn" onClick={handleDownload}>
        <p className='circle-btn'><u>Download CV</u></p>
      </div>
    </div>
  )
}

export default Navbar;