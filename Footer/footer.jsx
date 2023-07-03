import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SHAILESH</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100007197255421" target='_blank'><FaFacebookF/></a>
        
        <a href="https://www.instagram.com/shaileshmaurya326/" target='_blank'><FiInstagram/></a>
        
        <a href="https://twitter.com/ShaileshMaurya_" target='_blank'><IoLogoTwitter/></a>
        
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer
