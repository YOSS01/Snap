import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';

// Pictures
import arrowup from '../../images/icon-arrow-up.svg';
import arrowdown from '../../images/icon-arrow-down.svg';

function NavBar() {
    const color = 'hsl(0, 0%, 41%)';
    const hoverColor = 'hsl(0, 0%, 8%)';

    const changeColor = (e) => {
        e.target.style.color = hoverColor;
    }
    const resetColor = (e) => {
        e.target.style.color = color;
    }
  return (
    <div className='w-full h-[10vh] flex justify-between items-center px-10 font-Epilogue' style={{ color: color}}>
        <div className='flex gap-16'>
            <Logo />
            <ul className='h-full flex items-start gap-5 text-sm'>
                <li onMouseOver={changeColor} onMouseOut={resetColor} className='flex gap-2 cursor-pointer'>Features<button><img src={arrowdown} alt="" /></button></li>
                <li onMouseOver={changeColor} onMouseOut={resetColor} className='flex gap-2 cursor-pointer'>Company<button><img src={arrowdown} alt="" /></button></li>
                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>Careers</Link></li>
                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>About</Link></li>
            </ul>
        </div>
        <ul className='flex items-center gap-5 text-sm'>
            <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>Login</Link></li>
            <li ><Link onMouseOver={changeColor} onMouseOut={resetColor} className='border-solid border-2 rounded-xl px-5 py-2 hover:border-gray-500' to='#'>Register</Link></li>
        </ul>
    </div>
  )
}
export default NavBar;