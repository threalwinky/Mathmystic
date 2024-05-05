import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, scrolled }) => (
  <button onClick={toggle}
  
    className={`outline-none border-none cursor-pointer z-20
    ${scrolled==0 ? "top-6" : "top-1"} right-5 bottom-0 w-14 h-14 bg-transparent rounded-full
    
    `}
  >
   
    <svg 
    fill="currentColor"
    viewBox="0 0 20 20"
    height="1em"
    width="1em"
    className='icons'
    fontSize={40}
    >
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
  
  </button>
);
