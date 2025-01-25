import React from 'react'

import map from '../../assets/world-map.png'
import { motion } from 'framer-motion'
// initial={{opacity: 0, y: -100}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{type: "spring", stiffness: 100, damping: 10, delay: 1,}}
const Buy = () => {
  return (
    <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
            <div className='space-y-8'>
                <motion.h1 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.3,}}
                className='text-4xl font-bold text-darkGray font-serif'>Buy our products from your desired location</motion.h1>
                <motion.div 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4">
                    <input type="text" placeholder='Name'
                    className='input-style w-full lg:w-[150px]' />
                    <input type="email" placeholder='Email' 
                    className='input-style w-full ' />
                </motion.div>

                <motion.div
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ delay: 0.7 }} 
                className="flex items-center gap-4">
                    <input type="text" placeholder='State'
                    className='input-style w-full ' />
                    <input type="email" placeholder='Location' 
                    className='input-style w-full lg:w-[150px]' />
                </motion.div>
                <motion.button 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ delay: 0.8 }}
                className='primary-btn'>Buy Now</motion.button>
            </div>

            <div className="col-span-2"><motion.img 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 100, damping: 10, delay: 1,}}
            className='w-full sm:w-[500px] mx-auto' src={map} alt="A map of the world" /></div>
        </div>
    </div>
  )
}

export default Buy