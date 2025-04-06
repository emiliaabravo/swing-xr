import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ countdown }) => {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`transition duration-700 px-10 py-6 rounded-xl border border-cyan-400/20
      shadow-xl backdrop-blur-md bg-white/10
      ${glow ? 'shadow-[0_0_50px_rgba(0,255,255,0.3)]' : 'shadow-[0_0_25px_rgba(0,255,255,0.15)]'}`}
    >
      <p className="text-base font-semibold text-cyan-300 mb-6 tracking-widest uppercase opacity-90">
        Product Launch In
      </p>

      <div className="flex justify-center gap-10 text-center font-mono text-white">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
          <div
            key={i}
            className={`transition-all duration-300 transform ${
              glow ? 'scale-95' : 'scale-90'
            }`}
          >
            <div className="text-5xl font-extrabold drop-shadow-[0_2px_6px_rgba(0,255,255,0.4)] tracking-tight">
              {countdown[unit]?.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-cyan-300 tracking-[0.2em] mt-2 opacity-90">
              {unit.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

