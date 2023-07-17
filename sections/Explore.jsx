'use client';

import { useState } from 'react';
import {motion} from 'framer-motion';
import { ExploreCard,TitleText,TypingText } from '../components';
import styles from '../styles';/*styles is index.js but we export it as styles component*/
import {staggerContainer} from '../utils/motion'; /*utils motion contains some specific code for animation*/
import{exploreWorlds} from '../constants';

/*...world would be the props for the explorecard component*/
/*world is an object from the exploreWorlds containing the id,imageURL and all other properties*/
/*...world is to pass in the properties of each object in the exploreWorlds to the ExploreCard */
/*our section has id explore which clicking on the button in Hero.jsx will bring us to*/
import React from 'react'


const Explore = () => {

  const[active,setActive] = useState('world-2');
  

   return (
  <section className = {`${styles.paddings}`} id = "explore">
    <motion.div
     variants={staggerContainer}
     initial = "hidden"
     whileInView= "show"
     viewport = {{once:false, amount:0.25}}
     className= {`${styles.innerWidth} mx-auto flex flex-col`}>

    <TypingText title = "| The World" textStyles= "text-center"/>
    <TitleText title = {<>Choose the world you want
    <br className='md:block hidden'/> to explore</>} textStyles= "text-center"/>
    
    <div className = "mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
       {exploreWorlds.map((world,index) =>(
           <ExploreCard 
           key = {world.id}
           {...world}
           index = {index}
           active = {active}
           handleClick = {setActive}/>
       ))}
    </div>
    </motion.div>
  </section>
)}

export default Explore;
