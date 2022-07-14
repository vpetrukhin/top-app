import React, {useEffect} from "react";

import styles from "./Up.module.css";
import UpIcon from "./up.svg";
import {useScrollY} from "../../hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";


export const Up = () => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight }).then(() => '')
    }, [y, controls])

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
    }


    return (
        <motion.button className={styles.up} onClick={scrollToTop} animate={controls} initial={{ opacity: 0 }}>
            <UpIcon/>
        </motion.button>
    );
};