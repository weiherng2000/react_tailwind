'use client';

import {motion} from 'framer-motion';


import {textContainer, textVariant2} from '../utils/motion'; /*utils motion contains some specific code for animation*/

/*array.from converts a string etc into an array based on the chars in the string*/
export const TypingText = ({title, textStyles}) => (
  <motion.p
   variants={textContainer}
   className = {`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >

    {Array.from(title).map((letter,index) => (
      <motion.span variants = {textVariant2} key = {index}>
         {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}

  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <h2>Title Text</h2>
);
