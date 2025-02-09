import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import {
  staggerContainer,
  fadeIn,
  slideIn,
  staggerChildren,
  footerVariants,
} from "../../utils/motion";
import CallIcon from "@mui/icons-material/Call";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="footer"></a>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPadding flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Lets Make History <hr />
          </span>
          <div className="button-container">
            <a href="mailto:danielhashai.dh@gmail.com" className="secondaryText">
              {" "}
              <EmailIcon color="success" />{" "}
            </a>{" "}
            <a href="https://www.linkedin.com/in/daniel-hashai/">
              <LinkedInIcon color="primary" />
            </a>
            <a href="https://github.com/DanielHashai">
              <GitHubIcon color="secondary" />
            </a>
            <a href="tel:+972508260440">
              <CallIcon />{" "}
            </a>
          </div>
          <hr />
          <span className="secondaryText"></span>
        </div>
        <div className={css.right}>
          <div className={css.boxOfme}>
            <div className={css.contentOfMe}>
              <br />
              <p>
                City:Shoam
                <br />
                <br />
                Street:Haetrog
                <br />
                <br />
                Phone: +972508260440
                <br />
                <br />
                Email:danielhashai.dh@gmail.com
                <br />
                <br />
                <hr />
                <br />
              </p>
            </div>
            <div className={css.detailsOfme}>
              <div className="imageOfMe"></div>
              <h3>
                Daniel Aharon Hashai
                <br />
                <span></span>
                <br />
                <img src="./IMG_3164-PhotoRoom.png" alt="" />
                <br />
                <div className={css.HoverOverMe}>
                  Hover For More Information
                </div>
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
