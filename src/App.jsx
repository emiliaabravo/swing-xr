import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Features from './components/Features';
import Footer from './components/Footer';
import Demo from './components/Demo';

import { Compass, Users, Camera } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showVideo, setShowVideo] = useState(false); 
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 4, seconds: 0 };
        }

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  

  const handleDemoClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' });
      const videoEl = document.getElementById('demo-video');
      if (videoEl) videoEl.play();
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F7] text-[#0F0F10] scroll-smooth">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="overview">
          <Overview isPlaying={isPlaying} setIsPlaying={setIsPlaying} countdown={countdown} />
        </section>
        <section id="demo">
          <Demo countdown={countdown} onDemoClick={handleDemoClick} />
        </section>

        <section id="video" className="w-full flex justify-center items-center py-16 px-4">
        {showVideo && (
        <div className="w-full max-w-xl mt-12 overflow-hidden rounded-xl shadow-xl bg-gray-100">
          <div className="aspect-video">
            <video
              id="demo-video"
              className="w-full h-full object-cover"
              controls
              preload="auto"
            >
              <source src="/swing.mp4" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;


