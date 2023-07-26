import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// Components
import Logo from './Logo';

// Pictures
import arrowup from '../../images/icon-arrow-up.svg';
import arrowdown from '../../images/icon-arrow-down.svg';
import iconMenu from '../../images/icon-menu.svg';
import iconCloseMenu from '../../images/icon-close-menu.svg';
import iconTodo from '../../images/icon-todo.svg';
import iconCalendar from '../../images/icon-calendar.svg';
import iconReminders from '../../images/icon-reminders.svg';
import iconPlanning from '../../images/icon-planning.svg';

function NavBar() {
    const [menu, setMenu] = useState(false);
    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);


    const color = 'hsl(0, 0%, 41%)';
    const hoverColor = 'hsl(0, 0%, 8%)';

    const changeColor = (e) => {
        e.target.style.color = hoverColor;
    }
    const resetColor = (e) => {
        e.target.style.color = color;
    }


    const [icon1, setIcon1] = useState(arrowdown);
    useEffect(() => {
        if(features) setIcon1(arrowup);
        else setIcon1(arrowdown);
    }, [features]);

    const [icon2, setIcon2] = useState(arrowdown);
    useEffect(() => {
        if(company) setIcon2(arrowup);
        else setIcon2(arrowdown);
    }, [company]);

  return (
    <div className='w-full h-[10vh] flex justify-between items-center sm:px-10 px-5 font-Epilogue relative' style={{ color: color}}>
        <div className='flex items-center md:gap-16 gap-10'>
            <Logo />
            <ul className='h-full sm:flex hidden items-center gap-5 md:text-sm text-xs'>
                <li onMouseOver={changeColor} onMouseOut={resetColor} className='flex flex-col relative'>
                    <button className='flex items-center gap-2' onClick={()=>setFeatures(prevFeature => !prevFeature)}>Features<img src={icon1} alt="arrow icon" /></button>
                    {
                        features && (
                            <ul className='w-[20vh] h-[25vh] absolute top-5 right-0 bg-white px-5 rounded-xl shadow-2xl shadow-black/50 flex flex-col justify-center items-start gap-5'>
                                <li className='flex items-start gap-2'><img src={iconTodo} alt="" /><Link to="/Snap">Todo List</Link></li>
                                <li className='flex items-start gap-2'><img src={iconCalendar} alt="" /><Link to="/Snap">Calendar</Link></li>
                                <li className='flex items-start gap-2'><img src={iconReminders} alt="" /><Link to="/Snap">Reminders</Link></li>
                                <li className='flex items-start gap-2'><img src={iconPlanning} alt="" /><Link to="/Snap">Planning</Link></li>
                            </ul>
                        )
                    }
                    
                </li>
                <li onMouseOver={changeColor} onMouseOut={resetColor} className='flex flex-col relative'>
                    <button className='flex items-center gap-2' onClick={()=>setCompany(prevCompany => !prevCompany)}>Company<img src={icon2} alt="arrow icon" /></button>
                    {
                        company && (
                            <ul className='w-[15vh] h-[20vh] absolute top-5 right-0 bg-white rounded-xl shadow-2xl shadow-black/50 px-5 flex flex-col justify-center items-start gap-5'>
                                <li><Link to="/Snap">History</Link></li>
                                <li><Link to="/Snap">Our Team</Link></li>
                                <li><Link to="/Snap">Blog</Link></li>
                            </ul>
                        )
                    }
                </li>
                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>Careers</Link></li>
                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>About</Link></li>
            </ul>
        </div>
        <ul className='sm:flex hidden items-center gap-5 md:text-sm text-xs'>
            <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>Login</Link></li>
            <li ><Link onMouseOver={changeColor} onMouseOut={resetColor} className='border-solid border-2 rounded-xl px-5 py-2 hover:border-gray-500' to='#'>Register</Link></li>
        </ul>
        <div className='block sm:hidden'>
            <button onClick={() => setMenu(true)}><img src={iconMenu} alt="" /></button>
        </div>
        {
            menu && (
                <div className='fixed top-0 right-0 w-full h-full bg-black/70 flex justify-end'>
                    <div className='w-[70%] h-full bg-white px-5'>
                        <div className='h-[10vh] w-full flex justify-end items-center'>
                            <button onClick={() => setMenu(false)}><img src={iconCloseMenu} alt="" /></button>
                        </div>
                        <div className='h-[90vh] w-full flex flex-col gap-10'>
                            <ul className="flex flex-col gap-5">
                                <li onMouseOver={changeColor} onMouseOut={resetColor} className='flex flex-col gap-5'>
                                    <button onClick={()=>setFeatures(prevFeature => !prevFeature)} className='flex items-center gap-2'>Features<img src={icon1} alt="" /></button>
                                    {
                                        features && (
                                            <ul className='px-5 flex flex-col justify-center items-start gap-5'>
                                                <li className='flex items-start gap-2'><img src={iconTodo} alt="" /><Link to="/Snap">Todo List</Link></li>
                                                <li className='flex items-start gap-2'><img src={iconCalendar} alt="" /><Link to="/Snap">Calendar</Link></li>
                                                <li className='flex items-start gap-2'><img src={iconReminders} alt="" /><Link to="/Snap">Reminders</Link></li>
                                                <li className='flex items-start gap-2'><img src={iconPlanning} alt="" /><Link to="/Snap">Planning</Link></li>
                                            </ul>
                                        )
                                    }
                                </li>
                                <li onMouseOver={changeColor} onMouseOut={resetColor} className='flex flex-col gap-5'>
                                    <button className='flex items-center gap-2' onClick={()=>setCompany(prevCompany => !prevCompany)}>Company<img src={icon2} alt="" /></button>
                                    {
                                        company && (
                                            <ul className='px-5 flex flex-col justify-center items-start gap-5'>
                                                <li><Link to="/Snap">History</Link></li>
                                                <li><Link to="/Snap">Our Team</Link></li>
                                                <li><Link to="/Snap">Blog</Link></li>
                                            </ul>
                                        )
                                    }
                                </li>
                                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>Careers</Link></li>
                                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>About</Link></li>
                            </ul>
                            <ul className="w-full flex flex-col justify-center items-center gap-5">
                                <li onMouseOver={changeColor} onMouseOut={resetColor}><Link to='/'>Login</Link></li>
                                <li className='w-full flex justify-center items-center'><Link onMouseOver={changeColor} onMouseOut={resetColor} className='w-full flex justify-center items-center border-solid border-2 rounded-xl px-5 py-2 hover:border-gray-500' to='#'>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}
export default NavBar;