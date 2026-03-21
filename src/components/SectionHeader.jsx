import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="mb-8 group">
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-none drop-shadow-[2px_2px_0px_rgba(37,99,235,0.2)] transition-all duration-300 group-hover:drop-shadow-[4px_4px_0px_rgba(37,99,235,0.4)]">
        {title}
      </h2>

      <div className="flex gap-2 mt-3 justify-start">
        <div className="h-[5px] w-12 bg-blue-600 rounded-md shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
        
        <div className="h-[5px] w-[5px] bg-blue-600 rounded-full opacity-40" />
      </div>
    </div>
  );
};

export default SectionHeader;