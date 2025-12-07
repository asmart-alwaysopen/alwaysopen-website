import React from 'react';
import RiseUpAnimation from './RiseUpAnimation';
import GradientText from './GradientText';

const HospitalityPage = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const challenges = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "24/7 Guest Inquiries",
      description: "Guests need assistance at all hours, but staff can't always be available for every question."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "High Call Volume",
      description: "Peak seasons and events create overwhelming demand that can lead to missed bookings and frustrated guests."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Staffing Costs",
      description: "Maintaining round-the-clock front desk coverage is expensive and often inefficient during slow periods."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.03 0 3.89.67 5.39 1.8"/>
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 4v4h-4"/>
        </svg>
      ),
      title: "Repetitive Questions",
      description: "Staff spend countless hours answering the same basic questions about amenities, policies, and local attractions."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Instant Guest Service",
      description: "Provide immediate responses to guest inquiries about room service, amenities, check-in/out times, and local recommendations—any time of day."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: "Seamless Reservations",
      description: "Handle booking inquiries, availability checks, and reservation modifications automatically, even when your front desk is busy."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: "Multilingual Support",
      description: "Communicate with international guests in their preferred language, enhancing their experience and your global reach."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v5h5"/>
          <path d="M3 8a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 4"/>
          <path d="M21 21v-5h-5"/>
          <path d="M21 16a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 20"/>
          <polyline points="9,9 15,15"/>
          <polyline points="15,9 9,15"/>
        </svg>
      ),
      title: "Guest Insights",
      description: "Gather valuable data on guest preferences, common requests, and satisfaction levels to improve your services."
    }
  ];

  const useCases = [
    {
      title: "Hotel Front Desk",
      description: "Handle check-in inquiries, room availability, amenities information, and guest services requests.",
      features: ["Room availability checks", "Amenity information", "Local recommendations", "Service requests"]
    },
    {
      title: "Restaurant Reservations",
      description: "Manage table bookings, menu inquiries, dietary restrictions, and special event coordination.",
      features: ["Table reservations", "Menu information", "Dietary accommodations", "Event planning"]
    },
    {
      title: "Event Venues",
      description: "Coordinate event bookings, capacity questions, catering options, and equipment availability.",
      features: ["Venue availability", "Capacity planning", "Catering coordination", "Equipment booking"]
    }
  ];

  const stats = [
    { 
      number: "85%", 
      label: "Reduction in front desk call volume",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v5h5"/>
          <path d="M3 8a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 4"/>
          <path d="M21 21v-5h-5"/>
          <path d="M21 16a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 20"/>
        </svg>
      )
    },
    { 
      number: "24/7", 
      label: "Guest service availability",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      )
    },
    { 
      number: "40%", 
      label: "Increase in booking conversions",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      )
    },
    { 
      number: "60%", 
      label: "Faster response times",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="hospitality-page">
      {/* Hero Section */}
      <section className="industry-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="bg-blob1" />
        <div className="bg-blob2" />
        <div className="bg-blob3" />
        <div className="bg-blob4" />
        
        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <div className="hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                Hospitality Industry Solution
              </div>
              <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
                <h1>Never Miss a Guest Again</h1>
                <p className="hero-subtitle">
                  Transform your hospitality business with AI that handles guest inquiries, bookings, and service requests 24/7—so you can focus on creating exceptional experiences.
                </p>
              </RiseUpAnimation>
              
              <RiseUpAnimation stagger={0.2} duration={0.8} y={60}>
                <div className="cta-buttons">
                  <button className="link-button" onClick={(e) => handleSmoothScroll(e, '#benefits')}>
                    <span>See Benefits</span>
                    <span className="arrow-circle">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" stroke="currentColor"/>
                      </svg>
                    </span>
                  </button>
                  <button className="link-button" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                    <span>Book a Demo</span>
                    <span className="arrow-circle">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" stroke="currentColor"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </RiseUpAnimation>
            </div>
            <div className="hero-image">
              <RiseUpAnimation stagger={0.3} duration={0.8} y={80}>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Hotel staff providing excellent customer service" 
                  className="hero-hospitality-image"
                />
              </RiseUpAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section" id="challenges">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Hospitality Challenges We Solve</h2>
            <p className="section-subtitle">
              The hospitality industry faces unique challenges that can impact guest satisfaction and operational efficiency.
            </p>
          </RiseUpAnimation>
          
          <div className="challenges-timeline">
            {challenges.map((challenge, index) => (
              <RiseUpAnimation key={index} stagger={0.2 + (index * 0.1)} duration={0.8} y={60}>
                <div className={`challenge-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="challenge-timeline-content">
                    <div className="challenge-timeline-icon">{challenge.icon}</div>
                    <div className="challenge-timeline-text">
                      <h3>{challenge.title}</h3>
                      <p>{challenge.description}</p>
                    </div>
                  </div>
                  <div className="challenge-timeline-connector"></div>
                </div>
              </RiseUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="mid-cta-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="mid-cta-content">
              <h2>Ready to See Always Open in Action?</h2>
              <p>Join over 500+ hospitality businesses that never miss a guest inquiry</p>
              <div className="mid-cta-buttons">
                <button className="primary-btn" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                  Book Your Demo
                </button>
                <button className="secondary-btn" onClick={(e) => handleSmoothScroll(e, '#benefits')}>
                  See All Benefits
                </button>
              </div>
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" id="benefits">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>How Always Open Transforms Your Hospitality Business</h2>
            <p className="section-subtitle">
              Deliver exceptional guest experiences while reducing operational costs and improving efficiency.
            </p>
          </RiseUpAnimation>
          
          <div className="benefits-masonry">
            {benefits.map((benefit, index) => (
              <RiseUpAnimation key={index} stagger={0.2 + (index * 0.15)} duration={0.8} y={60}>
                <div className={`benefit-masonry-card benefit-card-${index + 1}`}>
                  <div className="benefit-masonry-icon">{benefit.icon}</div>
                  <div className="benefit-masonry-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                  <div className="benefit-masonry-decoration"></div>
                </div>
              </RiseUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section" id="use-cases">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Perfect for Every Hospitality Business</h2>
            <p className="section-subtitle">
              From boutique hotels to large event venues, Always Open adapts to your specific needs.
            </p>
          </RiseUpAnimation>
          
          <RiseUpAnimation stagger={0.2} duration={0.8} y={60}>
            <div className="use-cases-grid">
              {useCases.map((useCase, index) => (
                <div key={index} className="use-case-card">
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                  <ul className="feature-list">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-rounded" id="contact">
        <div className="cta-rounded-content">
          <div className="cta-blob-3"></div>
          <div className="cta-blob-4"></div>
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Ready to Transform Your Guest Experience?</h2>
            <p>Join leading hospitality businesses that never miss a guest inquiry.</p>
          </RiseUpAnimation>
          
          <RiseUpAnimation stagger={0.2} duration={0.8} y={60}>
            <div className="cta-form">
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                />
                <input 
                  type="email" 
                  placeholder="Business Email" 
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Business Name" 
                  className="form-input"
                />
                <div className="select-wrapper">
                  <select className="form-select">
                    <option value="">Business Type</option>
                    <option value="hotel">Hotel</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="event-venue">Event Venue</option>
                    <option value="resort">Resort</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <button className="primary-btn form-submit">
                Book Your Demo
              </button>
            </div>
          </RiseUpAnimation>
        </div>
      </section>
    </div>
  );
};

export default HospitalityPage;
