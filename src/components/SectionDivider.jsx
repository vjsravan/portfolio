import React from 'react';

function SectionDivider({ flip }) {
  return (
    <div className={`overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="w-full h-16 fill-ivory dark:fill-navy"
      >
        <path d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z" />
      </svg>
    </div>
  );
}

export default SectionDivider;