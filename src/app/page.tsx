 import Image from 'next/image';
import React from 'react';
 
 const Home = () => {
  return (
    <div className='home'>
     <h1>  👋 привет пока тут ничего нет...</h1>

<div className="image">
<Image width={100} height={200} className='img' src="https://media.tenor.com/C5ouH-u6KYAAAAAM/cafe.gif" alt="" />

</div>
    </div>
  );
 };
 
 export default Home;