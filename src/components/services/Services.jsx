import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Can Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
            <article className='service'>
                <div className='service__head'>
                  <h3>Web Design</h3>
                </div>
                <ul className='service__list'>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>I plan, create and code websites and web pages.</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Establishing design guidelines, standards, and best practices.</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Maintaining the appearance of websites by enforcing content standards.</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Designing visual imagery for websites and ensuring that they are in line with branding for clients.</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                  <h3>Data Visualization</h3>
                </div>
                <ul className='service__list'>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Translating information into a visual context.</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Make data easier for the human brain to understand and pull insights from data</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>To make it easier to identify patterns, trends and outliers in large data sets.</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                  <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Work with HTML, CSS, JavaScript, React, 
                          and other relevant web design tools and languages.
                        </p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>I create and test applications for websites.</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>I collaborate with other developers.</p>
                    </li>
                    <li>
                       <BiCheck className='service__list-icon' />
                       <p>Maintain and update website.</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services;