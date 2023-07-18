'use client';

import {motion} from 'framer-motion';
import {TitleText,TypingText } from '../components';
import styles from '../styles';/*styles is index.js but we export it as styles component*/
import {staggerContainer,fadeIn} from '../utils/motion'; /*utils motion contains some specific code for animation*/



const World = () => (
    <section className = {`${styles.paddings} relative z-10`}>
        <motion.div
        variants={staggerContainer}
        initial = "hidden"
        whileInView = "show"
        viewport={{ once: false, amount: 0.25}}
        className = {`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`} 
        >
             <TypingText  title = "| People on the World" textStyles = "text-center"/>

             <TitleText title = {(
                <>
                    Track friends around you and invite them to play together in the same world
                </>
                )}
                  textStyles= "text-center"
             />

             <motion.div
                variant = {fadeIn('up','tween',0.3,1)}
                className = "relative mt-[68px] flex w-full h-[550px]">

                    <img
                    src = "/map.png"
                    alt = "map"
                    className = "w-full h-full object-cover"/>

                 <div className = "absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img
                    src = "people-01.png"
                    alt = "people"
                    className = "w-full h-full"
                    />
                 </div>
                <div className = "absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img
                    src = "people-02.png"
                    alt = "people"
                    className = "w-full h-full"
                    />
                </div>
                <div className = "absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img
                    src = "people-03.png"
                    alt = "people"
                    className = "w-full h-full"
                    />
                </div>
                <div  className = "absolute top-[40%] left-[25%] ">
                    <img
                    src = "worldcard.png"
                    alt = "card"
                    className = "w-[96px] h-[100px] rounded-[24px] lg:w-[216px] lg:h-[150px]"/>
                    <div className = "flex flex-row absolute top-1/2 left-[10%]">
                        <img src = "people-04.png"   className = "relative w-[35px] h-[40px]" />
                        <img src = "people-05.png"   className = "relative w-[35px] h-[40px] right-5" />
                        <img src = "people-06.png"   className = "relative w-[35px] h-[40px] right-10" />
                        
                        <p className = "relative right-5 text-white text-xs hidden lg:block">+264 has joined</p>
                    </div>
                    <h1 className = "text-white mt-[-30px] text-center  hidden lg:block">The Upside Down</h1>
                </div>

                <div  className = "absolute top-[10%] right-[25%] ">
                    <img
                    src = "Mask Group.png"
                    alt = "card"
                    className = "w-[96px] h-[100px] rounded-[24px] lg:w-[216px] lg:h-[150px]"/>
                    <div className = "flex flex-row absolute top-1/2 left-[10%]">
                        <img src = "people-04.png"   className = "relative w-[35px] h-[40px]" />
                        <img src = "people-05.png"   className = "relative w-[35px] h-[40px] right-5" />
                        <img src = "people-06.png"   className = "relative w-[35px] h-[40px] right-10" />
                        
                        <p className = "relative right-5 text-white text-xs hidden lg:block">+264 has joined</p>
                    </div>
                    <h1 className = "text-white mt-[-30px] text-center  hidden lg:block">Hawkins Labs</h1>
                </div>
                

                

              </motion.div>

        </motion.div>
    </section>
  );
  
export default World;
