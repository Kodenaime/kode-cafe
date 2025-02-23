import React, { useState } from 'react'

import BgImage from '../../assets/bg-slate.png';
import black from '../../assets/black.png'
import Navbar from '../Navbar/Navbar';
import { motion, spring } from 'framer-motion';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => { 

  const [sidebar, setSidebar] = useState(false);

  return ( 
    <main style={bgImage}>
        <section className='relative min-h-[750px] w-full'>
            <div className="container"> 

               <Navbar sidebar={sidebar} setSidebar={setSidebar} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]" >
                  <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                    <motion.h1 
                    initial={{opacity: 0, y: -100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 1,}}
                     className='text-7xl font-bold leading-tight ml-14'>BlVck TumbLR</motion.h1>
                    <motion.div 
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 1.2,}}
                    className='relative'>
                      <div className="relative z-10 space-y-4">
                        <h1 className='text-2xl'>Kode Lifystyle Rocks</h1>
                        <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt enim facere laudantium sapiente perspiciatis laboriosam dolore nulla libero. Architecto. </h1>
                      </div>

                      <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 "></div>

                    </motion.div>
                  </div>

                  {/* Hero image part */}
                  <div className="relative">
                    <motion.img 
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.4,}}
                    src={black} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow '/>
                    <motion.div 
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.8,}}
                    className=" h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"></motion.div>

                    <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.8,}}
                    className='absolute -top-20 left-[200px] z-[1]'> 
                      <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">BlVck TumbLR</h1>
                    </motion.div>
                  </div>
                  {/* last section div */}
                  <div className='hidden lg:block'>
                    <motion.div 
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", stiffness: 100, damping: 10, delay: 1.2,}}
                    className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                      <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>BlVck TumbLR</h1>
                      <div className='relative'>
                        <div className="relative z-10 space-y-4">
                          <h1 className='text-2xl'>BlVck TumbLR</h1>
                          <h1 className='text-sm opacity-55 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt enim facere laudantium </h1>
                        </div>

                        <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>

                      </div>
                    </motion.div>
                  </div>

                </div>

            </div>
            {/* bg-gradient-to-b from-lightOrange to-primary/80 (another option for the background of the sidebar) */}
            {
              sidebar && (
                <motion.div 
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                className='absolute top-0 right-0 w-[140px] h-full bg-primary/60 backdrop-blur-sm z-10'>
                <div className="w-full h-full flex justify-center items-center">
                  <div className='flex flex-col justify-center items-center gap-6 text-white'>
                  <div className="w-[2px] h-[70px] bg-white"></div>
                  {/* social icons */}
                  <div className='inline-block p-2 rounded-full cursor-pointer border border-white'> <FaInstagramSquare className='text-2xl' /></div>
                  <div className='inline-block p-2 rounded-full cursor-pointer border border-white'><AiFillTikTok className='text-2xl' /></div>
                  <div className='inline-block p-2 rounded-full cursor-pointer border border-white'><FaFacebookSquare className='text-2xl' /></div>
                  
                  <div className="w-[2px] h-[70px] bg-white "></div>
                </div>
                </div>
              </motion.div>
              )
            }
           

        </section>
    </main>
  );
};

export default Hero