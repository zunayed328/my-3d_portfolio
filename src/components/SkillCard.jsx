import React from 'react';
import { motion } from 'framer-motion';

/**
 * SkillCard
 * Props:
 * - icon: image url or React element
 * - name: string
 * - proficiency: number (0-100)
 * - brandColor: CSS color string used for glow/gradient
 * - description: short string
 */
const SkillCard = ({ icon, name, proficiency = 75, brandColor = '#06b6d4', description = '' }) => {
  const glow = (c) => {
    // return rgba version if hex provided; fallback to 20% opacity
    try {
      // naive hex to rgba
      if (c.startsWith('#') && (c.length === 7 || c.length === 4)) {
        const hex = c.length === 4 ? c.split('').slice(1).map(s => s + s).join('') : c.slice(1);
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, 0.18)`;
      }
    } catch (e) {
      // ignore
    }
    return `${brandColor}33`;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full max-w-xl rounded-xl p-1"
      style={{
        boxShadow: `0 10px 30px ${glow(brandColor)}`,
      }}
    >
      <div className="backdrop-blur-sm bg-white/4 border border-white/6 rounded-xl p-4 flex items-center gap-4">
        <div className="flex-none">
          {typeof icon === 'string' ? (
            <img src={icon} alt={`${name} logo`} className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md bg-white/5 p-1" />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-md bg-white/5 p-1">{icon}</div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-200 font-semibold text-lg">{name}</h4>
            <span className="text-sm text-gray-300">{proficiency}%</span>
          </div>
          {description ? <p className="text-gray-300 text-sm mt-1">{description}</p> : null}

          <div className="mt-3 w-full h-2 bg-white/6 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${Math.max(0, Math.min(100, proficiency))}%`, background: `linear-gradient(90deg, ${brandColor}, ${brandColor}AA)` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
