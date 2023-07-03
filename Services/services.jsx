import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id='services'>
      <h5>What I have Achieved</h5>
      <h2>Education</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Graduation</h3>
          </div>
          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Final Year B.Tech in Information Technology.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Harcourt Butler Technical University</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Scored a CGPA of 8.48 <br/>&#40;till 6th Semester&#41;.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          </ul>
        </article>
        {/* End of Ui/Ux */}

        <article className="service">
          <div className="service__head">
            <h3>Intermediate</h3>
          </div>
          <ul className='service__list'>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Pursued Intermediate in Science Strream</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Completed in May 2019</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Bhavan's K.D.K Vidya Mandir School Renukoot</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Scored an Aggregate Percentage of 92.4%</p>
          </li>

          

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          </ul>
        </article>
        {/* end of web development */}


        <article className="service">
          <div className="service__head">
            <h3>HighSchool</h3>
          </div>
          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Completed in June 2017</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Bhavan's K.D.K Vidya Mandir School Renukoot</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Scored a CGPA of 9.8</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>

          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          </ul>
        </article>

        {/* end of content creation */}
      </div>
    </section>
  )
}

export default services
