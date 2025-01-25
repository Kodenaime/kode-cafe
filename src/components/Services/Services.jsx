import React from 'react'

import { delay, motion } from 'framer-motion'
import Coffee1 from '../../assets/coffee/coffee1.png'
import Coffee2 from '../../assets/coffee/coffee3.png'
import Coffee3 from '../../assets/coffee/coffee1.png'

const servicesData = [
    {
        id: 1,
        image: Coffee1,
        title: "Black Coffee",
        text: "Very tasty coffee just for you to enjoy"
    },
    {
        id: 2,
        image: Coffee2,
        title: "Hot Coffee",
        text: "Very tasty coffee just for you to enjoy"
    },
    {
        id: 3,
        image: Coffee3,
        title: "Cold Coffee",
        text: "Very tasty coffee just for you to enjoy"
    }
]

const cardVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1, y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        },
    },
};

const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        },
    },
};

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{type: "spring", stiffness: 100, damping: 10, delay: 1,}} 
            className='text-3xl font-bold text-lightGray'>Fresh and <span className='text-primary'>Tasty</span></motion.h1>
            <motion.p 
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{type: "spring", stiffness: 100, damping: 10, delay: 1,}}
            className='text-sm opacity-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam laborum illo accusamus blanditiis esse necessitatibus magnam tempore cum culpa dolore?</motion.p>
        </div>

        <motion.div 
        variants={containerVariants} 
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                servicesData.map((item)  => (
                    <motion.div key={ item.id } variants={cardVariants} 
                    className='text-center p-4 space-y-6' >
                        <img src={ item.image } className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' alt="coffee images" />
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold text-primary'>{ item.title }</h1>
                            <p className='text-darkGray'>{ item.text }</p>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>

    </div>
  )
}

export default Services