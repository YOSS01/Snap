import React from 'react';

// Pictures
import clientAudiophile from '../../images/client-audiophile.svg';
import clientDatabiz from '../../images/client-databiz.svg';
import clientMaker from '../../images/client-maker.svg';
import clientMeet from '../../images/client-meet.svg';

function Clients() {
  return (
    <div className='w-full flex justify-between items-center gap-2'>
      <img src={clientAudiophile} alt="clientAudiophile" />
      <img src={clientDatabiz} alt="clientDatabiz" />
      <img src={clientMaker} alt="clientMaker" />
      <img src={clientMeet} alt="clientMeet" />
    </div>
  )
}
export default Clients;