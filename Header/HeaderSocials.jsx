import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/shailesh-kumar-maurya-41486117a/" target ="_black"><BsLinkedin/></a>
        <a href="https://github.com/Shailesh326" target ="_black"><BsGithub/></a>
        <a href="https://twitter.com/ShaileshMaurya_" target ="_black"><BsTwitter/></a>
        
    </div>
  )
}

export default HeaderSocials
