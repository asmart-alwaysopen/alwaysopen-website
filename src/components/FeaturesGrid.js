import React from 'react';
import GlassIcons from './GlassIcons/GlassIcons';
import RiseUpAnimation from './RiseUpAnimation';

const FeaturesGrid = () => {
  const features = [
    {
      title: "Answer FAQs on WhatsApp — without logging in",
      description: "Answer customer questions on WhatsApp, without ever opening the app.",
      items: [
        { 
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          ), 
          color: 'linear-gradient(135deg, rgb(255 131 0) 0%, rgb(149 59 234) 100%)'
        }
      ]
    },
    {
      title: "Handle booking requests at midnight",
      description: "Book appointments, answer questions, and more—all without waking up your team.",
      items: [
        { 
          icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          ), 
          color: 'linear-gradient(135deg, rgb(255 131 0) 0%, rgb(149 59 234) 100%)'
        }
      ]
    },
    {
      title: "Greet customers before you even open your laptop",
      description: "Your business says hello—even before you do.",
      items: [
        { 
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          ), 
          color: 'linear-gradient(135deg, rgb(255 131 0) 0%, rgb(149 59 234) 100%)'
        }
      ]
    },
    {
      title: "Follow up while you're off the clock",
      description: "Send reminders, next steps, or confirmations automatically, without lifting a finger.",
      items: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          ),
          color: 'linear-gradient(135deg, #6366F1 0%, #06b6d4 100%)'
        }
      ]
    },
    {
      title: "Guide customers without guiding them",
      description: "Share links, forms, and answers in real time without needing to be there.",
      items: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          ),
          color: 'linear-gradient(135deg, #a855f7 0%, #6366F1 100%)'
        }
      ]
    },
    {
      title: "Never leave a message unanswered",
      description: "Respond instantly to DMs, voice notes, or missed calls on any platform.",
      items: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          ),
          color: 'linear-gradient(135deg, #f59e42 0%, #a855f7 100%)'
        }
      ]
    }
  ];

  return (
    <section className="features-grid-section container">
      <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
        <h2>What You Can Do With Always Open</h2>
        <p className="features-grid-subtitle">From first contact to follow-up, these are just a few ways businesses and teams can put it to work.</p>
      </RiseUpAnimation>
      <RiseUpAnimation stagger={0.2} duration={0.8} y={60}>
        <div className="features-grid-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-grid-item">
              <div className="feature-content">
                <div style={{ position: 'relative', width: 64, height: 64, margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Background image blob */}
                  {index === 0 && (
                    <img src="images/fbg2.png" alt="" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 64,
                      height: 64,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: 'rgb(99 102 241 / 17%) 0px 8px 32px 0px, rgb(99 102 241 / 20%) 0px 1.5px 4px 0px',
                      zIndex: 0
                    }} />
                  )}
                  {index === 1 && (
                    <img src="images/fbg3.png" alt="" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 64,
                      height: 64,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: 'rgb(99 102 241 / 17%) 0px 8px 32px 0px, rgb(99 102 241 / 20%) 0px 1.5px 4px 0px',
                      zIndex: 0
                    }} />
                  )}
                  {index === 2 && (
                    <img src="images/fbg1.png" alt="" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 64,
                      height: 64,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: 'rgb(99 102 241 / 17%) 0px 8px 32px 0px, rgb(99 102 241 / 20%) 0px 1.5px 4px 0px',
                      zIndex: 0
                    }} />
                  )}
                  {index === 3 && (
                    <img src="images/fbg3.png" alt="" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 64,
                      height: 64,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: 'rgb(99 102 241 / 17%) 0px 8px 32px 0px, rgb(99 102 241 / 20%) 0px 1.5px 4px 0px',
                      zIndex: 0
                    }} />
                  )}
                  {index === 4 && (
                    <img src="images/fbg1.png" alt="" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 64,
                      height: 64,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: 'rgb(99 102 241 / 17%) 0px 8px 32px 0px, rgb(99 102 241 / 20%) 0px 1.5px 4px 0px',
                      zIndex: 0
                    }} />
                  )}
                  {index === 5 && (
                    <img src="images/fbg2.png" alt="" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 64,
                      height: 64,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      boxShadow: 'rgb(99 102 241 / 17%) 0px 8px 32px 0px, rgb(99 102 241 / 20%) 0px 1.5px 4px 0px',
                      zIndex: 0
                    }} />
                  )}
                  {/* Glassmorphic shadow effect */}
                  <div style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    opacity: 0.7,
                    zIndex: 1
                  }} />
                  {/* SVG icon */}
                  <div style={{ position: 'relative', zIndex: 2, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {feature.items && feature.items[0] && feature.items[0].icon}
                  </div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </RiseUpAnimation>
    </section>
  );
};

export default FeaturesGrid; 