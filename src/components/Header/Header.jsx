import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  const lineBgColor = {
    backgroundColor: props.bgColor
  }
  return (
    <div className=' text-center mt-20 mb-10'>
      <h1 className='text-5xl font-semibold uppercase'>{props.title}</h1>
      <div className=' flex items-center justify-center mb-3 mt-3'>
        <div className='line me-3' style={lineBgColor}></div>
         <FontAwesomeIcon icon={faStar} />
        <div className='line ms-3' style={lineBgColor}></div>
      </div>
    </div>
  )
}
