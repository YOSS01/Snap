import React from 'react';

function Content() {
  const onHover = ({target}) => {
    target.style.background = "hsl(0, 0%, 98%)";
    target.style.color = "hsl(0, 0%, 8%)";
    target.style.border = "2px solid hsl(0, 0%, 8%)"
  }
  const notHover = ({target}) => {
    target.style.background = "hsl(0, 0%, 8%)";
    target.style.color = "hsl(0, 0%, 98%)";
    target.style.border = "none";
  }
  return (
    <div className='w-full font-Epilogue flex flex-col items-center md:items-start gap-10'>
      <span className='w-full xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold md:text-left text-center' style={{color: 'hsl(0, 0%, 8%)'}}>Make remote work</span>
      <div className='w-full lg:text-lg md:text-sm text-sm md:text-left text-center' style={{color: 'hsl(0, 0%, 41%)'}}>
        <p>Get your team in sync, no matter your location.</p>
        <p>Streamline processes, create team rituals, and watch productivity soar.</p>
      </div>
      <button onMouseOver={onHover} onMouseOut={notHover} className='py-4 px-8 rounded-xl font-extrabold duration-300' style={{background: 'hsl(0, 0%, 8%)', color: 'hsl(0, 0%, 98%)'}}>Learn more</button>
    </div>
  )
}
export default Content;