import React, { useState, useRef } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

// rfce
// cmd p (to search for file)
// viewport --> is when the top bar will appear and animation will turn on again!
function Header() {
  const [menuOpened, setMenuOpened] = useState(true);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          
        </div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a
              style={{
                fontSize: "25px",
              }}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: "25px",
              }}
              href="#works"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: "25px",
              }}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              style={{
                fontSize: "25px",
              }}
              href="#footer"
            >
              Information
            </a>
          </li>
          <li className={` flexCenter ${css.phone}`}>
            <a
              style={{
                fontSize: "30px",
              }}
              href="tel:+972508260440"
            >
              <BiPhoneCall size={"40px"} />{" "}
            </a>
          </li>
        </ul>
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight style={{ cursor: "pointer" }} size={30} />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
