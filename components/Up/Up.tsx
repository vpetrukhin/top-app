import React, {useEffect} from "react";

import styles from "./Up.module.css";
import UpIcon from "../ButtonIcon/up.svg";
import {useScrollY} from "../../hooks/useScrollY";
import {useAnimation, motion} from "framer-motion";
import {ButtonIcon} from "../ButtonIcon/ButtonIcon";


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
        <motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
            <ButtonIcon appearence='primary' icon='up' onClick={scrollToTop} />
        </motion.div>
    );
};
