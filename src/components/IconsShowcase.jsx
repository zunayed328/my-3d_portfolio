import React from "react";
import IconCard from "./IconCard";
import python from "../assets/tech/python_placeholder.svg";
import java from "../assets/tech/java_placeholder.svg";
import cpp from "../assets/tech/cpp_placeholder.svg";

const IconsShowcase = () => {
  return (
    <section className="p-8 flex flex-col items-center">
      <h3 className="text-white text-2xl mb-6">AI Icon Showcase</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <IconCard src={python} title="Python snake logo" />
        <IconCard src={java} title="Java coffee cup logo" />
        <IconCard src={cpp} title="C++ blue shield logo" />
      </div>
    </section>
  );
};

export default IconsShowcase;
