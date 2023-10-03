import React from 'react'
import './DrawerSidebar.css'
import { AiFillHome ,AiOutlineProfile,AiOutlineCopyrightCircle} from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { MdContactPage } from 'react-icons/md';
import { BiSolidDownload } from 'react-icons/bi';
import { Link as ScrollLink } from "react-scroll";
const DrawerSidebar = ({toggleDrawerSidebar,toggleDrawer}) => {
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
    <div className='container_DrawaerLeftSiderbar' style={toggleDrawerSidebar} >
                <div className='container2_DrawaerLeftSiderbar'>
            <div className="Drawer_leftsidebar">
            <div className="icon_sidebar_div" onClick={()=>toggleDrawer()}>
                {/* <NavLink to={'/'} className="icon_sidebar_div"> */}
                    <p>
                        <AiFillHome size={22} className='icon_sidebar'
                        style={{margin:"auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">
                 <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                Home
                </ScrollLink>
                        </div>
                    </p>
                {/* </NavLink> */}
                </div>
                <div className="icon_sidebar_div" onClick={()=>toggleDrawer()}>
                <p>
                        <AiOutlineProfile size={22} className='icon_sidebar'
                        style={{margin:"auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">
                        <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    Summary
                    </ScrollLink>
                        </div>
                    </p>
                </div>
                <div className="icon_sidebar_div" onClick={()=>toggleDrawer()}>
                <p>
                        <CgNotes size={22} className='icon_sidebar'
                        style={{margin:"auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">
                        <ScrollLink
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                    Resume
                    </ScrollLink>
                        </div>
                    </p>
                </div>
                <div className="icon_sidebar_div" onClick={()=>toggleDrawer()}>
                <p>
                        <MdContactPage size={22} className='icon_sidebar'
                        style={{margin:"auto 0.7rem"}}/>
                        <div className="text_sidebar_icon">
                        <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                    Contact
                    </ScrollLink>
                        </div>
                    </p>
                </div>
                <div className="icon_sidebar_div" onClick={()=>toggleDrawer()}>
                <p>
                        <BiSolidDownload size={22} className='icon_sidebar'
                        style={{margin:"auto 0.7rem"}}/>
                        <div className="text_sidebar_icon" onClick={handleDownload}>Download CV</div>
                    </p>
                </div>
            </div>
                <div className="copy_sidebar_div" onClick={()=>toggleDrawer()}>
            <p>
                <AiOutlineCopyrightCircle size={12} className='icon_sidebar'
            style={{margin:"auto 0.9rem",color:"white"}}/>
             <div className='copy_rigth'>2023 All rigths reserved</div>
             </p>
            </div>
             </div>
            {/* <div className="container3_DrawaerLeftSiderbar"
            onClick={()=>toggleDrawer()}>
           </div> */}
        </div>
  )
}

export default DrawerSidebar