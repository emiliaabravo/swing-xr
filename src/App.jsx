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
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 4 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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
  

  const video = [
    {
      title: "Immersive Experience",
      description: "Step into worlds beyond imagination with our cutting-edge XR platform that delivers unparalleled immersion.",
      icon: <Compass size={28} />
    },
    {
      title: "Social Connectivity",
      description: "Connect with others in real-time and share experiences in XR, eliminating physical boundaries.",
      icon: <Users size={28} />
    },
    {
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F7] text-[#0F0F10] scroll-smooth">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="overview">
          <Overview isPlaying={isPlaying} setIsPlaying={setIsPlaying} countdown={countdown} />
        </section>
        <section id="demo"> 
          <Demo countdown={countdown} />
        </section>

        <section id="video">
        {/* TODO: Replace hero image with embedded Spline animation here */}
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;


