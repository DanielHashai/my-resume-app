import React, { useEffect, useState } from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../../utils/motion";

const Hero = () => {
  const [dateTime, setDateTime] = useState(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jerusalem",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date()) +
      " " +
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jerusalem",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jerusalem",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date()) +
          " " +
          new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Jerusalem",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`paddings ${css.wrapper}`}>
      <div
        className={css.clocker}
        style={{
          justifyContent: "flex",
          justifyItems: "right",
        }}
      >
        <p>{dateTime}</p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Shalom <br />
            I'm Daniel.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./IMG_3164-PhotoRoom.png"
            alt=""
          />
        </motion.div>
        {/* <a className={css.email} href="mailto:aaronhashai@gmail.com" >
                  
              </a>               */}

        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div></div>Experience
            </div>
          </div>
          <div className={css.certificate}>
            <img
              style={{
                width: "70px",
                borderRadius: "10px",
              }}
              src="https://res.cloudinary.com/dsapexsuq/image/upload/v1736375365/connectop-logo_huvxmt.jpg"
              alt=""
            />
            <span>AUTOMATION TEAM LEAD AND</span>
            <span>FULL STACK WEB DEVELOPER</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
