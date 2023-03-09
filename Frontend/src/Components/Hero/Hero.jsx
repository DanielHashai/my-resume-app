import React, { useEffect } from 'react'
import css from "./Hero.module.scss";
import { motion } from "framer-motion"
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";

const Hero = () => {
  return (
      <section className={`paddings ${css.wrapper}`}>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false,amount:0.25}}  className={`innerWidth ${css.container}`}>
              <div className={css.upperElements}>
                  <motion.span variants={fadeIn("right","tween",0.2,1)} className='primaryText'>Shalom <br/>I'm Daniel.</motion.span>
                
              </div>

              <motion.div  variants={fadeIn("up","tween",0.3,1)} className={css.person}>
                  <motion.img
                       variants={slideIn("up","tween",0.5,1.3)}src="./IMG_3164-PhotoRoom.png" alt="" />
              </motion.div>
              {/* <a className={css.email} href="mailto:aaronhashai@gmail.com" >
                  
              </a>               */}

              <div className={css.lowerElements}>
                  <div className={css.experience}>
                      <div className="primaryText">1</div>
                      <div className="secondaryText">
                          <div>Years</div>
                          <div>
                          </div>Experience</div>
                  </div>
                  <div className={css.certificate}>
                      
                      <img src="./certificate.png" alt="" />
                      <span>CERTIFIED FULL STACK</span>
                      <span>WEB DEVELOPER</span>

                  </div>
              </div>

            </motion.div>


    </section>
  )
}

export default Hero