
import React from 'react';
import Header from '../Header/Header.jsx';

export default function About() {
  return (
    <div className='bg-teal-500 p-10 md:p-20 lg:p-40'>
      <div className='text-white'>
        <Header title="About section" bgColor="white" />
      </div>
      
      <div className='about-content flex flex-col md:flex-row justify-center gap-10 w-full'>
        <p className='text-white w-full md:w-1/2 text-lg'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p className='text-white w-full md:w-1/2 text-lg'>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
