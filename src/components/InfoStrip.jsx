import React from 'react';

const InfoStrip = () => {
  const items = [
    { icon: '🕐', text: 'Happy Hour Mon–Fri' },
    { icon: '📍', text: '120 Texas St, Shreveport LA' },
    { icon: '📞', text: '+1 (318) 226-8747' },
    { icon: '📺', text: 'Sports on Every Screen' },
  ];

  return (
    <div className="bg-gold text-black py-4 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2 md:gap-x-12">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-2 font-josefin font-semibold uppercase tracking-wider text-xs whitespace-nowrap">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
            {idx < items.length - 1 && (
              <div className="hidden md:block w-1 h-1 bg-black rounded-full opacity-25" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfoStrip;
