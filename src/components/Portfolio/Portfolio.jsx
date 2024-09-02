
import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import Header from '../Header/Header';
import img1 from '../../assets/port1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import img4 from '../../assets/port4.png';
import img5 from '../../assets/port5.png';
import img6 from '../../assets/port6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
    const allImgs = [img1, img2, img3, img4, img5, img6];
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleOpen(index) {
        setCurrentIndex(index);
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div className='mb-10 mt-36'>
            <div className='text-slate-700 mb-10'>
                <Header title="Portfolio section" bgColor="#374151" />
            </div>
            
            <div className='portfolio-content flex justify-center flex-wrap gap-6 md:gap-8 lg:gap-10 w-full'>
                {allImgs.map((img, index) => (
                    <div
                        className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${styles.imgContainer} relative overflow-hidden`}
                        key={index}
                        onClick={() => handleOpen(index)}
                    >
                        <img src={img} className="w-full rounded-md" alt={`img${index}`} />
                        <div className={`${styles.layer} absolute left-0 w-full top-0 h-full flex justify-center items-center`}>
                            <FontAwesomeIcon className='text-white fa-3x md:fa-4x lg:fa-5x' icon={faPlus} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className='fixed top-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
                    onClick={handleClose}
                >
                    <div className='flex justify-center items-center'>
                        <img src={allImgs[currentIndex]} alt="" className='w-11/12 md:w-2/3 lg:w-1/2 mt-2 rounded-lg' />
                    </div>
                </div>
            )}
        </div>
    );
}
