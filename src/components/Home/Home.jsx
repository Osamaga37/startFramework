
import React from 'react';
import userImg from '../../assets/avatar.svg';
import Header from '../Header/Header';

export default function Home() {
  return (
    <div className='relative bg-teal-500 flex flex-col items-center text-white pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-16'>
      <div className='w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72'>
        <img src={userImg} alt="User Avatar" className='w-full rounded-full' />
      </div>
      <div className='mt-8 text-center'>
        <Header title="Start Framework" bgColor="white" />
      </div>
      <p className='mt-4 text-center text-sm sm:text-base md:text-lg lg:text-xl'>
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
