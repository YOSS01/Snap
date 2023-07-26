import React from 'react';

// Components
import Content from './Content';
import Picture from './Picture';
import Clients from './Clients';

function Home() {
  return (
    <div className='w-full h-[90vh] flex md:flex-row flex-col-reverse justify-between items-center md:px-[10%] px-2 md:py-[5%] py-2 gap-5'>
      <div className='md:h-full md:w-[55%] h-[50%] w-full flex flex-col justify-between md:gap-10 gap-5'>
        <Content />
        <Clients />
      </div>
      <Picture />
    </div>
  )
}
export default Home;