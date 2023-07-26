import React from 'react';

// Pictures
import heroDesktop from '../../images/image-hero-desktop.png';
import heroMobile from '../../images/image-hero-mobile.png';

function Picture() {
  return (
    <div className='md:h-full md:w-[45%] h-[50%] w-full flex md:justify-end justify-between items-center'>
      <img className='md:block hidden max-w-[80%] max-h-full' src={heroDesktop} alt="Hero pic" />
      <img className='md:hidden block w-full max-h-full' src={heroMobile} alt="Hero pic" />
    </div>
    
  )
}
export default Picture;