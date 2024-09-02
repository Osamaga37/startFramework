
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row justify-around p-10 md:p-20 bg-gray-700 text-center'>
        <div className='location flex justify-center flex-col mb-10 md:mb-0'>
          <h3 className='uppercase text-white text-2xl md:text-3xl'>Location</h3>
          <p className='text-white mt-2'>2215 John Daniel Drive</p>
          <p className='text-white'>Clark, MO 65243</p>
        </div>
        <div className='about-web flex justify-center flex-col mb-10 md:mb-0'>
          <h3 className='uppercase text-white text-2xl md:text-3xl'>About the Web</h3>
          <div className='icons flex justify-center space-x-4 mt-5'>
            <a href="https://www.facebook.com" className='icon border border-cyan-50 rounded-full p-2 flex justify-center'>
              <FontAwesomeIcon className='text-white text-xl' icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" className='icon border border-cyan-50 rounded-full p-2 flex justify-center'>
              <FontAwesomeIcon className='text-white text-xl' icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com" className='icon border border-cyan-50 rounded-full p-2 flex justify-center'>
              <FontAwesomeIcon className='text-white text-xl' icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className='about-freelancer flex justify-center flex-col text-center'>
          <h3 className='uppercase text-white text-2xl md:text-3xl'>About Freelancer</h3>
          <p className='text-white w-11/12 md:w-2/3 mt-5 mx-auto'>
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>
      <div className='bg-gray-900 p-3 flex justify-center'>
        <p className='text-white'>Copyright © Your Website 2024</p>
      </div>
    </div>
  );
}
