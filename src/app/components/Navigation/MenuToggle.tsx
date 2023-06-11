import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";
import styles from './styles.module.css'
import { useTheme } from "next-themes";

const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => {
  const { theme } = useTheme();
  const strokeColor = theme === 'dark' ? "hsl(219, 63%, 26%)" : "hsl(29, 56%, 81%)";

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={strokeColor}
      strokeLinecap="round"
      {...props}
    />
  );
};

export const MenuToggle = ({ toggle }: { toggle: (event: React.MouseEvent<HTMLButtonElement>) => void }) => (
  <button className={styles.buttonNav} onClick={toggle}>
    <center>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </center>
  </button>
);
