import React from 'react'

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import cards from '../../assets/website/credit-cards.webp'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <motion.div 
                 initial={{opacity: 0, y: 100}}
                 whileInView={{opacity: 1, y: 0}}
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.3, duration: 0.6, }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>Kode Cafe</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit eaque harum dolorum non quod voluptatem reprehenderit cupiditate doloribus hic? </p>
                    <div className='flex items-center gap-4'><FaPhoneVolume /> (+234) 900 123 1234</div>
                    <div className='flex items-center gap-4 mt-1'><FaMapLocation /> kode lane 456</div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.6, }}
                className="space-y-6">
                  <h1 className='text-3xl font-bold' >Quick Links</h1>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <ul className='space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                      </ul>
                    </div>

                    <div>
                      <ul className='space-y-2'>
                        <li>Blog</li>
                        <li>Education</li>
                        <li>Support</li>
                        <li>Payment Options</li>
                      </ul>
                    </div>

                  </div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.6, }}
                className='space-y-6'>
                  <h1 className='text-3xl font-bold'>Follow Us</h1>
                  <div className='flex items-center gap-3'>
                    <FaInstagramSquare className='text-3xl hover:scale-110 duration-300' />
                    <AiFillTikTok className='text-3xl hover:scale-110 duration-300' />
                    <FaTelegram className='text-3xl hover:scale-110 duration-300' />
                    <FaGoogle className='text-3xl hover:scale-110 duration-300' />
                    <FaFacebookSquare className='text-3xl hover:scale-110 duration-300' />
                  </div>

                  <div>
                    <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
                    <img src={cards} alt="different payment cards" className='w-[80%]' />
                  </div>

                </motion.div>

            </div>
            <motion.p 
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 10, delay: 0.4,}}
            className='text-white text-center mt-8 pt-6 border-t-2'>Copyrightd &copy; 2024 KODE CAFE. All Rights Reserved</motion.p>
        </div>
    </div>
  )
}

export default Footer