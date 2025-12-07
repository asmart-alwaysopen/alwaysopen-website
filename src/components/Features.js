import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animation247 from '../animations/247.json';
import GradientText from './GradientText';
import RiseUpAnimation from './RiseUpAnimation';

const Features = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, []);

  const features = [
    {
      title: "Available 24/7",
      description: "Never miss a customer inquiry, day or night.",
      type: "lottie",
      animation: animation247,
      alt: "Available 24/7"
    },
    {
      title: "Speaks Human",
      description: "Natural conversations that build trust and engagement.",
      video: "videos/Assistant.mp4",
      alt: "Speaks Human"
    },
    {
      title: "Works Everywhere",
      description: "Seamlessly handles WhatsApp, Telegram, Voice, and more.",
      image: "images/platforms.svg",
      alt: "Multi-platform"
    }
    // {
    //   title: "No Missed Opportunities",
    //   description: "Convert every inquiry into a potential business opportunity.",
    //   image: "images/opportunities.svg",
    //   alt: "No Missed Opportunities"
    // }
  ];

  return (
    <section className="features container" id="features">
      <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
        <h2>Step Away Without Missing a Beat</h2>
        <p className='features-subtitle'>It listens, responds, and follows up—so things keep moving even when you’re not around. </p>
      </RiseUpAnimation>
      <RiseUpAnimation stagger={0.2} duration={0.8} y={60}>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <div className="feature-content">
                {feature.video && (
                  <video
                    ref={videoRef}
                    src={`/${feature.video}`}
                    autoPlay
                    loop
                    muted
                    style={{ width: '100%', borderRadius: '1rem', marginBottom: '1rem' }}
                  />
                )}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              {index === 0 && (
                <img 
                  src="/images/24-7.png" 
                  alt="24/7" 
                  style={{ marginLeft: '2rem', width: 224, height: 224, objectFit: 'contain', borderRadius: '32px', boxShadow: '0 2px 12px rgba(124,58,237,0.10)' }}
                />
              )}
              {index === 2 && (
                <img 
                  src="/images/platforms.png" 
                  alt="Platforms" 
                  style={{ marginLeft: '2rem', width: 224, height: 224, objectFit: 'contain', borderRadius: '32px', boxShadow: '0 2px 12px rgba(124,58,237,0.10)' }}
                />
              )}
            </div>
          ))}
        </div>
      </RiseUpAnimation>
    </section>
  );
};

export default Features; 