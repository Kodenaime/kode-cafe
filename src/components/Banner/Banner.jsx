import React from 'react'

import cafe from '../../assets/coffee-cover.jpg'
import android from '../../assets/website/play_store.png'
import apple from '../../assets/website/app_store.png'
import { motion } from 'framer-motion'

const BannerStyle = {
    backgroundImage: `url(${cafe})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
};

const Banner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle} 
        className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl' >

            <div className="">
                <div className='space-y-6 max-w-xl mx-auto'>
                    <motion.h1 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ delay: 0.3 }}
                    className='text-2xl text-center sm:text-4xl font-semibold'>Get Our App</motion.h1>
                    <motion.p
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ delay: 0.5 }} 
                    className='text-center sm:px-20 hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quo.</motion.p>
                    {/* app banners */}
                    <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ delay: 0.3 }}
                    className='flex justify-center items-center gap-4'>
                        <a className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' href="#"><img src={apple} alt="iphone app store banner" /></a>
                        <a className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' href="#"><motion.img 
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{ delay: 0.5 }}
                        src={android} alt="android play store banner" /></a>
                    </motion.div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner