import React from 'react';
import css from "./Experties.module.scss";
import { motion } from "framer-motion"
import { projectExperience } from "../../utils/data";
import { staggerContainer, fadeIn, textVariant } from "../../utils/motion";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const Experties = () => {
  return (
    <motion.section
    variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}
      
      className={css.wrapper}>
      <a className='anchor' id='services' ></a>
          <div className={`paddings yPaddings flexCenter innerWidth  ${css.container}`}>
        <div className={`${css.leftSide}`}>
          



        <motion.a href=  "mailto:aaronhashai@gmail.com"
                
                variants={fadeIn("right","tween",(1) * 0.1,1)} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}
        
                  
                  className={css.exp} key={10}>
                <div className='flexCenter' style={{background:"lightgreen"}}>
                  <AttachEmailIcon size={25} color="white"/>
                </div>
                <div>
                  <span>
                  Email
                  </span>
                  <span className='secondaryText'>
                  danielhashai.dh@gmail.com
                  </span>
                </div>
              </motion.a>





            {  projectExperience.map((exp,i)=>{
              return <motion.a href=  {exp.link} 
                
              variants={fadeIn("right","tween",(i+1) * 0.1,1)} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}
      
                
                className={css.exp} key={i}>
              <div className='flexCenter' style={{background:exp.bg}}>
                <exp.icon size={25} color="white"/>
              </div>
              <div>
                <span>
                    { exp.name}
                </span>
                <span className='secondaryText'>
           {exp.link} 
                </span>
              </div>
            </motion.a>
              })}
              </div>
        <motion.div
            variants={textVariant(0.5)} 
          
          className={`${css.rightSide}`}>
          <span className='primaryText'>How Can I Help You?</span>
          {
             <span className='secondaryText' >Driven by a passion for integration and automation, I consistently push the boundaries of what’s possible, delivering solutions that are both effective and cutting-edge.</span>
          }
         
              </motion.div>
          </div>
   </motion.section>
  )
}

export default Experties