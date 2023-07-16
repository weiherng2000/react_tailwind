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
  <motion.nav
   variants = {navVariants}
   initial = "hidden"
   whileInView="show"
   className = {`${styles.xPaddings} py-8 relative`}>
    navbar
  </motion.nav>
);

export default Navbar;
