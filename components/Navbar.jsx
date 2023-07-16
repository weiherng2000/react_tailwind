'use client';
/* allows us to use usestate and other hooks from react */
/* client is to ensure this file on client side */

import {motion} from 'framer-motion';

import styles from '../styles';/*styles is index.js but we export it as styles component*/
import {navVariants} from '../utils/motion'; /*utils motion contains some specific code for animation*/

/* motion is an animation component and to use it we usually call motion.div /motion.nav/motion.{anyelement}*/

/*Variants are pre-defined visual states that a component can be in. By giving a component 
and its children variants with matching names, whole React trees can be animated by changing a single prop.*/
const Navbar = () => (
  /*animates the navbar from hidden state to show state */
  /*self closing div are like empty div blocks*/
  /*inset-0 fills the entire parent*/
  <motion.nav
   variants = {navVariants}
   initial = "hidden"
   whileInView="show"
   className = {`${styles.xPaddings} py-8 relative`}>
  
  <div className = "absolute w-[50%] inset-0 gradient-01"/>
  <div className = {`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
    <img
     src = "./search.svg"
     alt = "search"
     className = "w-[24px] h-[24px] object-contain"
    />
    <h2 className ="font-extrabold text-[24px]
    leading-[30px] text-white">
      METAVERSE
    </h2>
    <img 
    src = "menu.svg"
    alt = "menu"
    className = "w-[24px] h-[24px] object-contain"/>
    
  </div>

  </motion.nav>
);

export default Navbar;
