import React from 'react';

function Content() {
  return (
    <div className='font-Epilogue flex flex-col items-start gap-10'>
      <span className='text-8xl font-extrabold' style={{color: 'hsl(0, 0%, 8%)'}}>Make remote work</span>
      <div className='' style={{color: 'hsl(0, 0%, 41%)'}}>
        <p>Get your team in sync, no matter your location.</p>
        <p>Streamline processes, create team rituals, and watch productivity soar.</p>
      </div>
      <button className='py-4 px-8 rounded-xl font-extrabold' style={{background: 'hsl(0, 0%, 8%)', color: 'hsl(0, 0%, 98%)'}}>Learn more</button>
    </div>
  )
}
export default Content;