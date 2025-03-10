'use client'
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className={styles.card}
      >
        <div className=" text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="grid grid-cols-3 gap-4 ">
        <div className='flex flex-col justify-between'>
          <div>
 <p className="uppercase tracking-widest">{title}</p>
          <h1 className="text-4xl font-bold mt-4">{description}</h1>

          </div>
          <div>
<div className="grid md:grid-cols-2 gap-8  text-left">
        <div className="border-l-4 border-orange-500 pl-4 ">
          <h2 className="text-4xl font-bold text-left">100%</h2>
          <p className="text-gray-100">of customers use a single loyalty system</p>
        </div>
        <div className="border-l-4 border-orange-500 pl-4">
          <h2 className="text-4xl font-bold">AI-powered</h2>
          <p className="text-gray-100">Personalized recommendations</p>
        </div>
      </div>
          </div>
        </div>
       
        <div className="relative col-span-2">
          <img
            src={src}
            alt="STVOL Ecommerce"
            className="rounded-lg shadow-lg w-full"
          />
          <button className="absolute top-4 right-4 bg-gray-800 px-4 py-1 text-sm rounded-full">
            Custom Software
          </button>
        </div>
      </div>

      {/* Stats Section */}
      
    </div>
      </motion.div>
    </div>
  )
}

export default Card