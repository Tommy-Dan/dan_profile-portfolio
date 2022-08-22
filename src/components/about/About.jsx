import React from 'react'
import './about.css';
import ME from '../../assets/images/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';



const About = () => {
  return (
     <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt='About Me' />
                </div>
            </div>

            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className='about__card'>
                        <FaUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>2+ Clients</small>
                    </article>

                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon' />
                        <h5>Projects</h5>
                        <small>10+ Major and Mini Projects</small>
                    </article>
                </div>
                <p>
                    As a Web developers I have a combination of graphic design skills and technical computer skills that allows me to 
                    create particular designs on web pages. In addition to 
                    looking nice, websites need to be functional and secure. 
                    It is my responsibility as a web developer to create such 
                    sites that meet the requirements of clients. My daily life
                     as Web Developer | Front-End Developer, I build user 
                     interfaces and prototypes from wirefame designs, build 
                     products using HTML/CSS/JS. In order for these products and 
                     designs to be made available to users it's my responsibility 
                     to code and deploy these applications in a cross-platfom, 
                     cross-browsers environments, update current websites to meet 
                     mordern web standards. With these skills I often implement ideas 
                     from less tech-savvy colleagues who lack the know-how to turn 
                     their vision into an actual, functional website.
                </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
     </section>
  )
}

export default About;