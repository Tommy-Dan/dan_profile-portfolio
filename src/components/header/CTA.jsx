import React from 'react';
import CV from '../../assets/documents/Tom-cv.pdf';


const CTA = () => {
  return (
    <div className='cta'>
        <a href='https://tmmydan-resume.netlify.app' target="_blank" rel="noreferrer" className='btn'>View CV</a>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;