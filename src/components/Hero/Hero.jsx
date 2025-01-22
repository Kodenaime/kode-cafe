import React from 'react'

import BgImage from '../../assets/bg-slate.png';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => { 
  return ( 
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className="container"> 

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 place-items-center min-h-[850px]" >
                  <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                    <h1 className='text-7xl font-bold leading-tight ml-14'>BlVck TumbLr</h1>
                    <div>
                      <div className="relative z-10 space-y-4">
                        <h1 className='text-2xl'>Kode Lifystyle Rocks</h1>
                        <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt enim facere laudantium sapiente perspiciatis laboriosam dolore nulla libero. Architecto. </h1>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </section>
    </main>
  );
};

export default Hero