import React from 'react';
import TiltedCard from './TiltedCard';
import RiseUpAnimation from './RiseUpAnimation';

const HowItWorks = () => {
  const steps = [
    "Set up your agent",
    "Add it to your site or app",
    "Tap to talk",
    "AI responds and gets it done"
  ];

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="how-it-works container" id="howitworks" style={{ position: 'relative', overflow: 'visible' }}>
      <div className="howitworks-blob howitworks-blob1" />
      <div className="howitworks-blob howitworks-blob2" />
      <div className="howitworks-blob howitworks-blob3" />
      <div className="howitworks-blob howitworks-blob4" />
      <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
        <h2>Here's How Always Open Works</h2>
        <p className="how-it-works-subtitle">See how it chats, helps, and books—right from your site. Give it a go with our business info.</p>
      </RiseUpAnimation>
      <RiseUpAnimation stagger={0.15} duration={0.7} y={40}>
        <ol className="steps-list" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <li>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // width: '52px',
                    // height: '52px',
                    // borderRadius: '50%',
                    // background: 'linear-gradient(135deg, rgb(247 143 34) 0%, rgb(120 69 236) 100%)',
                    // color: '#fff',
                    // fontSize: '1.5rem',
                    // marginBottom: '0.5rem',
                    // boxShadow: '0 2px 8px rgba(99,102,241,0.10)'
                  }}>
                    {index === 0 ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    ) : index === 1 ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    ) : index === 2 ? (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
                        <path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z"/>
                        <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10"/>
                        <path d="M12 19V23"/>
                        <path d="M8 23H16"/>
                      </svg>
                    ) : (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ width: 32, height: 32 }}>
                        <polyline points="8,18 14,24 26,10" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    )}
                  </span>
                  <span>{step}</span>
                </div>
              </li>
              {index < steps.length - 1 && (
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, background: 'none', boxShadow: 'none', border: 'none', width: 'auto' }} aria-hidden="true">
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="12" x2="44" y2="12" stroke="#4B5563" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="36,6 44,12 36,18" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </RiseUpAnimation>
      <RiseUpAnimation stagger={0.3} duration={0.8} y={80}>
        <div className="how-it-works-grid">
          {/* <div className="visual-walkthrough">
            <lottie-player
              src="images/platform-demo.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div> */}
          <div className="tilted-card-wrapper" style={{ position: 'relative' }}>
            <TiltedCard
              containerHeight="300px"
              containerWidth="400px"
              imageHeight="300px"
              imageWidth="400px"
              rotateAmplitude={2}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            >
              <img 
                src="images/AO-playground.png" 
                alt="Always Open Playground Demo" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
                }}
              />
            </TiltedCard>
          </div>
          <div className="right-column">
            <div className="plugin-callout">
              <div className="callout-content">
                <h4>Try It Live</h4>
                <p>You don't have to imagine it — just tap the plugin at the bottom right of your screen to see Always Open in action.</p>
                <div className="floating-arrow">
                  <img src="images/arrow.gif" alt="Animated arrow" style={{ width: 128, height: 128, display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RiseUpAnimation>
      <div className="how-it-works-cta">
        <a href="#contact" className="primary-btn" onClick={(e) => handleSmoothScroll(e, '#contact')}>Book a Demo</a>
      </div>
    </section>
  );
};

export default HowItWorks; 