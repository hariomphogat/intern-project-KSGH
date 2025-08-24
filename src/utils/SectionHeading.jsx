import React from 'react';

const SectionHeading = ({ title, className }) => {
  return (
    <div className={`flex flex-col ${className || 'items-center'} mb-8 `}>
      <h2 className="text-4xl font-playfair text-brand-slate">
        {title}
      </h2>
      <span className="block w-32 h-1 bg-amber-400 mt-3"></span>
    </div>
  )
}

export default SectionHeading;