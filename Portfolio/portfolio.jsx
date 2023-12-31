import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/portfolio1.png'
import IMG2 from'../../assets/portfolio2.jpg'
import IMG3 from'../../assets/portfolio3.png'
import IMG4 from'../../assets/portfolio4.png'
import IMG5 from'../../assets/portfolio5.png'
import IMG6 from'../../assets/portfolio6.png'

// data for project

const data = [
  {
    id:1,
    image: IMG1,
    title: 'My Portfolio',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id:2,
    image: IMG2,
    title: 'CryptoCurrency dashBoard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:3,
    image: IMG3,
    title: 'Learn The Weather',
    github: 'https://github.com/Shailesh326/Weather/tree/main',
    demo: 'https://weather-app-rjdq.onrender.com'
  },
  {
    id:4,
    image: IMG4,
    title: 'Simon Game',
    github: 'https://github.com/Shailesh326/Simon',
    demo: 'https://shailesh326.github.io/Simon/'
  },
  {
    id:5,
    image: IMG5,
    title: 'CryptoCurrency dashBoard',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image: IMG6,
    title: 'Todo List',
    github: 'https://github.com/Shailesh326/TodoList',
    demo: 'https://thriving-haupia-74c54e.netlify.app/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

        
      </div>
    </section >
  )
}

export default portfolio
