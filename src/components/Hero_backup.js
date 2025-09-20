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
          height: 'calc(100% + 8rem)',
          transform: 'translateY(8rem)',
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
            </button>
          </div>
          <div className="cta-buttons">
            <button className="mic-button gradient-bg-btn" aria-label="Activate voice assistant">
              <div className="mic-button-glow"></div>
              <svg className="mic-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 19V23" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 23H16" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {/* <span className="mic-button-text">Try it Live</span> */}
            </button>
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

