import React from "react";
import { motion } from "framer-motion";

const IconCard = ({ src, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      className="w-40 h-40 bg-tertiary rounded-2xl flex flex-col items-center justify-center shadow-card"
      title={title}
    >
      <img src={src} alt={title} className="w-24 h-24 object-contain mb-3" />
      <p className="text-secondary text-sm">{title}</p>
    </motion.div>
  );
};

export default IconCard;
