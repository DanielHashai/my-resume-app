import React, { useState, useEffect } from "react";
import css from "./Works.module.scss";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  slideIn,
  textVariant2,
  zoomIn,
} from "../../utils/motion";

import service from "../../Services/PersonalDataService";
const Works = () => {
  const [experiences, setExperiences] = useState([]);
  const [above, setGetAbove] = useState([]);
  useEffect(() => {
    service
      .getAllExperience()
      .then((res) => {
        setExperiences(res);
      })
      .catch((err) => alert(err));
    service
      .getAllAboveExperience()
      .then((res) => {
        setGetAbove(res);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="works"></a>
      <div className={` flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">Work Experience</span>
        <div className={`flexCenter ${css.experiences}`}>
          {above.map((exp, i) => {
            return (
              <motion.div
                className={`flexCenter ${css.exp}`}
                variants={textVariant2}
                key={i}
              >
                <div className={css.post}>
                  <h1>{exp.topic}</h1>
                </div>

                <div className={css.role}>
                  <h1>
                    {exp.role}
                    {i === 0 && (
                      <span>
                        <img
                          style={{
                            width: "45px",
                            borderRadius: "10px",
                            marginLeft: "20px",
                          }}
                          src="https://res.cloudinary.com/dsapexsuq/image/upload/v1736375365/connectop-logo_huvxmt.jpg"
                          alt=""
                        />
                      </span>
                    )}
                  </h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#286F6C" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#EEC048" }}
              ></div>
            </div>
          </motion.div>
        </div>

        <span className="primaryText yPaddings">Skill Sets</span>
        <div className={`flexCenter ${css.experiences}`}>
          {experiences.map((exp, i) => {
            return (
              <motion.div
                className={`flexCenter ${css.exp}`}
                variants={textVariant2}
                key={i}
              >
                <div className={css.post}>
                  <h1>{exp.topic}</h1>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#286F6C" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#EEC048" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Works;
