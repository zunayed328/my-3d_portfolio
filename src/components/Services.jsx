import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { web, mobile, backend, creator } from '../assets/tech';

const services = [
  { title: 'Web Developer', icon: web },
  { title: 'React Native Developer', icon: mobile },
  { title: 'Backend Developer', icon: backend },
  { title: 'Content Creator', icon: creator },
];

const Card = ({ icon, title }) => {
  const baseShadow = '0 8px 24px rgba(0,0,0,0.6)';
  const hoverShadow = '0 18px 48px rgba(30,199,255,0.12), 0 6px 18px rgba(147,51,234,0.08)';

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ y: 0 }}
      className="group"
      style={{
        boxShadow: baseShadow,
        transition: 'box-shadow 200ms ease, transform 180ms ease',
      }}
      whileTap={{ scale: 0.995 }}
      onHoverStart={(e) => (e.currentTarget.style.boxShadow = hoverShadow)}
      onHoverEnd={(e) => (e.currentTarget.style.boxShadow = baseShadow)}
    >
      <div className="p-1 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-violet-500/6 to-pink-500/8">
        <div className="relative rounded-2xl bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/6 flex flex-col items-center justify-start py-8 px-6 h-full text-center" style={{minHeight: '220px'}}>
          <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-md bg-white/5 shadow-inner">
            <img src={icon} alt={`${title} icon`} className="w-16 h-16 object-contain" />
          </div>
          <h3 className="text-white text-lg font-semibold mt-2">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-secondary uppercase tracking-wider text-sm">What I do</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="text-secondary mt-2 max-w-2xl mx-auto">Modern solutions focused on scalable, maintainable and beautiful user experiences.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Services, '');
