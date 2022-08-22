import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/Scientific-calc.png';
import IMG5 from '../../assets/images/portfolio3.jpg';
import IMG2 from '../../assets/images/global_climate.jpeg';
import IMG3 from '../../assets/images/snake-bite-game.png';
import IMG4 from '../../assets/images/portfolio1.jpg';
import IMG6 from '../../assets/images/RGBcolor-game.png';


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Scientific calculator',
        github: 'https://github.com/Tommy-Dan/scientific-calc',
        demo: 'https://complexnumberscientificcalc.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Weather Climate Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Snake Bite Game',
        github: 'https://github.com/Tommy-Dan/snake-bite-game',
        demo: 'https://snakebitegame.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
        id: 6,
        image: IMG6,
        title: 'The RGB Color Coding Game',
        github: 'https://github.com',
        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    }
]

const Portfolio = () => {
  return (
     <section id='portfolio'>
         <h5>My Recent Works</h5>
         <h2>Portfolio</h2>

         <div className='container portfolio__container'>
            {
                data.map(({id, image, title, github, demo}) => {
                    return(
                        <article key={id} className='portfolio__items'>
                            <div className='portfolio__item-image'>
                               <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                <a href={github} className='btn'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
         </div>
     </section>
  )
}

export default Portfolio;