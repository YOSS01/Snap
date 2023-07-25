import React from 'react';

// Components
import Content from './Content';
import Picture from './Picture';
import Clients from './Clients';

function Home() {
  return (
    <div className='w-full h-[90vh] flex flex-row justify-between items-center px-[10%] py-[5%] gap-5'>
      <div className='w-[55%] flex flex-col justify-between gap-10'>
        <Content />
        <Clients />
      </div>
      <Picture />
    </div>
  )
}
export default Home;