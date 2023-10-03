import React, { useEffect, useState } from 'react'
import './Home.css'
import pic from '../../Assests/images/pic.jpeg';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Contact from '../Contacts/Contact';
import {BiUpArrowCircle} from 'react-icons/bi'
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the scroll-up button when the user scrolls down 100 pixels or more
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className='container-parlex' id='home'>
        <div className="container1_homepage">
        <img src={pic} alt='log' className='profile_photo'/>
        <h1 className='profile_name'>Sai ManiKanta Nallala</h1>
        <p className='profile_role'>Full stack Web Developer</p>
        </div>
    </div>
    <button
      className={`scroll-up-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <BiUpArrowCircle size={42}/>
    </button>
    <About/>
    <Resume/>
    <Contact/>
    </>
  )
}

export default Home