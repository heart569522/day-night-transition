import * as React from "react";
import { motion } from "framer-motion";
import styles from './styles.module.css';
import { useTheme } from "next-themes";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i }: { i: number }) => {
  const { theme } = useTheme();
  const color = theme === 'dark' ? "#19376D" : "#EACEB4";
  const style = { border: `2px solid ${color}` };

  return (
    <motion.li
      className={styles.liNav}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconPlaceholder} style={style} />
      <div className={styles.textPlaceholder} style={style} />
    </motion.li>
  );
};
