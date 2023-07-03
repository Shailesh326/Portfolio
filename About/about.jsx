import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <a href="https://leetcode.com/shaileshmaurya326/" target='_blank'>
              <article className="about__card">
                <SiLeetcode className='about__icon'/>
                <h5>LeetCode</h5>
                <small>400+ Solved</small>
              </article>
              </a>

              <a href="https://auth.geeksforgeeks.org/user/shaileshmaurya326/practice" target='_blank'>
              <article className="about__card">
                <SiGeeksforgeeks className='about__icon'/>
                <h5>GeeksForGeeks</h5>
                <small>200+ Solved</small>
              </article>
              </a>

              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>

              </article>
            </div>
            <p>B.Tech Final Year Information Technology student in HBTU Kanpur. Love Problem Solving and good knowledge of Data Structure and Algorithm.
               Proficient in programming languages such as Java and C++. Interested both in back and front-end technologies, knowledgeable with HTML,CSS and JS .</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
