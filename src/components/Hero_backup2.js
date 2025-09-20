import React from 'react';
import TiltedCard from './TiltedCard';
import SplitText from './SplitText';
import AudioWaveform from './AudioWaveform';
import GradientText from './GradientText';

const Hero = () => {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Threads background, shifted down by 9rem and allowed to overflow */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: 'calc(100% + 6rem)',
          transform: 'translateY(6rem)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <AudioWaveform className="absolute inset-0 w-full h-48 md:h-64 lg:h-72 xl:h-80 2xl:h-96 top-36 z-0 pointer-events-none select-none" style={{ objectFit: 'cover' }} />
      </div>
      {/* Hero content */}
      <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <div className="hero-badge">⭐️ Powering real businesses, day and night</div>
          <SplitText
            text="Your Business. Always Open."
            className="hero-title"
            delay={10}
            duration={2}
            ease="elastic.out(1, 0.3)"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p className="hero-subtitle">
            The AI-powered virtual front desk that handles customers, 24/7—across chat, voice, and messaging platforms.                    
          </p>

          <div className="cta-buttons">
            <button className="link-button">
              <span>See How It Works</span>
              <span className="arrow-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" stroke="currentColor"/></svg>
              </span>
            </button>
            <button className="link-button">
              <span>Add to My Site</span>
              <span className="arrow-circle">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" stroke="currentColor"/></svg>
              </span>
              {/* <span className="mic-button-text">Try it Live</span> */}
            <button className="mic-button gradient-bg-btn" aria-label="Activate voice assistant">
              <div className="mic-button-glow"></div>
              <div className="ripple-circle-1"></div>
              <div className="ripple-circle-2"></div>
              <div className="ripple-circle-3"></div>
              <svg className="mic-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>            </button>
          </div>
          {/* <video
            src="/videos/AO-AI.webm"
            className="hero-demo-video"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', maxWidth: 480, borderRadius: '1rem', margin: '2rem auto' }}
          /> */}
        </div>
        {/* <TiltedCard
          containerHeight="300px"
          containerWidth="400px"
          imageHeight="300px"
          imageWidth="400px"
          rotateAmplitude={4}
          scaleOnHover={1.025}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        >
          <div className="hero-video-wrapper">
            <img className="hero-video" src="/images/AO-playground.png" alt="Hero Image" />
          </div>
        </TiltedCard> */}
      </div>
    </section>
  );
};

export default Hero;

