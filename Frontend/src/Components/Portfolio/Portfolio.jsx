import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import css from "./Portfolio.module.scss"
import { motion } from "framer-motion"
import gitHubIcon from "../../../public/githubIcon.png"
import { staggerContainer, fadeIn, slideIn, staggerChildren } from "../../utils/motion";
import service from "../../Services/PersonalDataService";
import ProjectModel from '../../Models/ProjectModel';
import appConfig from '../../utils/appConfig';

function Portfolio() {
    const [project,setPro] = useState([]);
    
    console.log(project);
    useEffect(() => {
        service.getAllProjects().then(res => {
            console.log(res);
            setPro(res);
        }).catch(err => alert(err));
        
        
        
 
},[])

  return (
  
      <motion.section variants={staggerChildren} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={` paddings ${css.wrapper}`}>
          
          <a className='anchor' id='projects' ></a>
          <div className={`innerWidth flexCenter ${css.container}`}>
              
              <div className={ `flexCenter ${css.heading}`}>
                  <div>
                      <span className='primaryText'>
                        Latest Projects!
                      </span>
                      <p style={{marginTop:"10px"}}>
                         Clicking on a project below will redirect you to the source code on my GitHub account
                      </p>
                  </div>
                  <span className="secondaryText">
                    <a href="https://github.com/DanielHashai">Visit My Github <img src={gitHubIcon}></img></a>
                  </span>
              </div>
              
              <div className={`flexCenter ${css.showCase}`}>
              {project.map((p,i) =>
                  <motion.a href={p.link} variants={fadeIn("up", "tween", 0.5, (0.6 + i))} >  <img variants={fadeIn("up", "tween", 0.5, 0.6)} src={ p.imageURL} /></motion.a>)}
                  </div>
              
              

    </div>


      </motion.section>
  )
}

export default Portfolio