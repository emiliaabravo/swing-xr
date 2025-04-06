import React from 'react';
import CountdownTimer from './CountdownTimer';

const Demo = ({ countdown, onDemoClick }) => {
  const launchPassed =
    countdown.days <= 0 &&
    countdown.hours <= 0 &&
    countdown.minutes <= 0 &&
    countdown.seconds <= 0;

  return (
    <section id="demo" className="bg-white py-24 px-6 sm:px-10 md:px-20 text-center w-full min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto pt-16">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-40 leading-snug tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-blue-500 bg-clip-text text-transparent">
            A new way to train
          </span>
          <br className="hidden sm:block" />
          <span className="text-[#0F0F10]"> with immersive golf</span>
        </p>

        <div className="space-y-16 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          <p>
            <strong>Swing.XR</strong> is an immersive AR/VR experience that lets you study and perfect golf swings with a level of depth traditional videos can’t match.
          </p>
          <p>
            Step into a 3D environment where professional swings unfold around you — observe from any angle, walk around the motion, and understand each detail of posture and follow-through.
          </p>
          <p>
            Whether you’re just starting out or refining your form, Swing.XR helps golfers of all levels internalize elite technique in a way that’s intuitive, dynamic, and unforgettable.
          </p>
          <p>
            The experience is customizable to different skill levels, training goals, or even other sports down the line.
          </p>
        </div>
        </div>

      {/* Countdown timer and button positioned at the bottom */}
      <div className="mt-16 flex flex-col items-center  w-full gap-8 ">
            <div className="mb-8">
              <div className="inline-block rounded-2xl border-4 border-cyan-500 p-6 shadow-2xl bg-white/80 backdrop-blur-xl">
                <CountdownTimer countdown={countdown} />
              </div>
            </div>
            <button
          onClick={onDemoClick}
          className="relative px-6 py-2 font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg hover:shadow-cyan-500/50 transition duration-300 ease-in-out"
        >
          Watch Demo
        </button>
      </div>
    </section>
  );
};
export default Demo;