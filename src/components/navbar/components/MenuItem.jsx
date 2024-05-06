import * as React from "react";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";
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

const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];


export const MenuItem = ({ i, name, Icon, link }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.a
      href={link}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="none p-3 m-2 list-none flex items-center cursor-pointer"
    >

      <div className="icon-placeholder" />
      <Icon />
      <div />
      <p className="text-placeholder pl-5 text-lg font-semibold font-rbt" >

        <Trans>{name}</Trans>
      </p>

    </motion.a>
  );
};
