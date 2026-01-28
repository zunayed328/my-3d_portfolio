import React from 'react';
import SkillCard from './SkillCard';
import { reactjs, javascript, python_placeholder, java_placeholder, cpp_placeholder, nodejs } from '../assets/tech';

const demoSkills = [
  { name: 'React', icon: reactjs, proficiency: 90, brandColor: '#61dafb', description: 'Component-driven UI & hooks' },
  { name: 'JavaScript', icon: javascript, proficiency: 92, brandColor: '#f7df1e', description: 'Modern JS, tooling, patterns' },
  { name: 'Python', icon: python_placeholder, proficiency: 88, brandColor: '#3776ab', description: 'ML, scripting, automation' },
  { name: 'Java', icon: java_placeholder, proficiency: 75, brandColor: '#f89820', description: 'Backend systems & APIs' },
  { name: 'C++', icon: cpp_placeholder, proficiency: 70, brandColor: '#0072ce', description: 'Systems programming' },
  { name: 'Node.js', icon: nodejs, proficiency: 85, brandColor: '#3c873a', description: 'Server-side JavaScript' },
];

const SkillsEnhanced = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-secondary uppercase tracking-wider text-sm">Technologies & Languages</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoSkills.map((s) => (
            <SkillCard key={s.name} icon={s.icon} name={s.name} proficiency={s.proficiency} brandColor={s.brandColor} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsEnhanced;
