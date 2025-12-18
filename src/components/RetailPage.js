import React from 'react';
import RiseUpAnimation from './RiseUpAnimation';

const RetailPage = () => {
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
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
      title: "Order Status Inquiries",
      description: "Customers constantly call asking 'Where's my order?' tying up staff who could be helping in-store shoppers."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "After-Hours Questions",
      description: "Shoppers want answers about products and availability even when your store is closed—losing sales overnight."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Peak Season Overload",
      description: "Holiday rushes and sales events flood your lines with calls that overwhelm your team and frustrate customers."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Inventory Questions",
      description: "Customers call repeatedly to check if items are in stock, wasting time for both shoppers and your staff."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: "Real-Time Order Updates",
      description: "Let customers check shipping status, delivery times, and tracking information instantly—without waiting on hold."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"/>
          <line x1="8" y1="12" x2="21" y2="12"/>
          <line x1="8" y1="18" x2="21" y2="18"/>
          <line x1="3" y1="6" x2="3.01" y2="6"/>
          <line x1="3" y1="12" x2="3.01" y2="12"/>
          <line x1="3" y1="18" x2="3.01" y2="18"/>
        </svg>
      ),
      title: "Product Information 24/7",
      description: "Answer questions about sizing, specifications, compatibility, and availability—even at 2 AM when purchase intent is highest."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v5h5"/>
          <path d="M3 8a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 4"/>
          <path d="M21 21v-5h-5"/>
          <path d="M21 16a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 20"/>
        </svg>
      ),
      title: "Hassle-Free Returns",
      description: "Guide customers through return policies, initiate exchanges, and process refund requests without human intervention."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"/>
        </svg>
      ),
      title: "Personalized Recommendations",
      description: "Suggest products based on customer preferences, past purchases, and current promotions—driving upsells naturally."
    }
  ];

  const useCases = [
    {
      title: "E-Commerce Stores",
      description: "Handle high volumes of order inquiries, product questions, and checkout support around the clock.",
      features: ["Order tracking", "Cart recovery", "Product recommendations", "Size guides"]
    },
    {
      title: "Brick & Mortar Retail",
      description: "Provide store hours, inventory checks, and appointment scheduling for high-touch shopping experiences.",
      features: ["Store locations", "In-store pickup", "Appointment booking", "Stock availability"]
    },
    {
      title: "Multi-Location Chains",
      description: "Centralize customer support across all locations while maintaining personalized local information.",
      features: ["Location routing", "Unified inventory", "Consistent policies", "Local promotions"]
    }
  ];

  const stats = [
    { 
      number: "73%", 
      label: "Reduction in support call volume",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    { 
      number: "24/7", 
      label: "Shopping assistance availability",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      )
    },
    { 
      number: "35%", 
      label: "Increase in conversion rates",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    { 
      number: "< 3s", 
      label: "Average response time",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
        </svg>
      )
    }
  ];

  const testimonial = {
    quote: "Always Open handles 70% of our customer inquiries automatically. Our team can finally focus on the complex issues that actually need a human touch.",
    author: "Sarah Chen",
    role: "Customer Experience Director",
    company: "ModernWear Co."
  };

  return (
    <div className="retail-page">
      {/* Hero Section */}
      <section className="industry-hero retail-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="bg-blob1" />
        <div className="bg-blob2" />
        <div className="bg-blob3" />
        <div className="bg-blob4" />
        
        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <div className="hero-badge retail-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Retail Industry Solution
              </div>
              <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
                <h1>Turn Shoppers Into Buyers, 24/7</h1>
                <p className="hero-subtitle">
                  Stop losing sales to unanswered questions. Our AI handles product inquiries, order updates, and customer support around the clock—so every shopper gets the help they need, when they need it.
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern retail customer experience" 
                  className="hero-hospitality-image"
                />
              </RiseUpAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="challenges-section" id="challenges">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Retail Challenges We Solve</h2>
            <p className="section-subtitle">
              Today's shoppers expect instant answers. Here's what's holding most retailers back.
            </p>
          </RiseUpAnimation>
          
          <div className="challenges-cardinal">
            <div className="cardinal-center">
              <span className="cardinal-center-text">Always Open</span>
              <span className="cardinal-center-subtext">Solves</span>
            </div>
            
            <div className="cardinal-top">
              <RiseUpAnimation stagger={0.2} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number">01</div>
                  <h4>{challenges[0].title}</h4>
                  <p>{challenges[0].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
            
            <div className="cardinal-right">
              <RiseUpAnimation stagger={0.3} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number">02</div>
                  <h4>{challenges[1].title}</h4>
                  <p>{challenges[1].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
            
            <div className="cardinal-bottom">
              <RiseUpAnimation stagger={0.4} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number">03</div>
                  <h4>{challenges[2].title}</h4>
                  <p>{challenges[2].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
            
            <div className="cardinal-left">
              <RiseUpAnimation stagger={0.5} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number">04</div>
                  <h4>{challenges[3].title}</h4>
                  <p>{challenges[3].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="stats-header">
              <h2>Results That Speak for Themselves</h2>
              <p>See how retailers are transforming their customer experience with Always Open</p>
            </div>
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

      {/* How It Works Section */}
      <section className="how-it-works-hospitality">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Launch in Days, Not Months</h2>
            <p className="section-subtitle">
              Getting started is simple. We handle the technical work so you can focus on growing your business.
            </p>
          </RiseUpAnimation>
          
          <div className="steps-horizontal">
            <RiseUpAnimation stagger={0.2} duration={0.8} y={40}>
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Share Your Catalog</h3>
                  <p>Connect your product database, policies, and FAQs. We'll learn everything about your business.</p>
                </div>
              </div>
            </RiseUpAnimation>
            
            <div className="step-connector">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 12H52M52 12L42 4M52 12L42 20" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <RiseUpAnimation stagger={0.3} duration={0.8} y={40}>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Customize & Train</h3>
                  <p>We tune the AI to match your brand voice and handle your specific customer scenarios.</p>
                </div>
              </div>
            </RiseUpAnimation>
            
            <div className="step-connector">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 12H52M52 12L42 4M52 12L42 20" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <RiseUpAnimation stagger={0.4} duration={0.8} y={40}>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Start Selling More</h3>
                  <p>Go live and watch customer satisfaction soar while support costs drop.</p>
                </div>
              </div>
            </RiseUpAnimation>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-highlight-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="testimonial-highlight">
              <div className="testimonial-quote-mark">"</div>
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-role">{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" id="benefits">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>How Always Open Drives Retail Growth</h2>
            <p className="section-subtitle">
              Convert more browsers into buyers with instant, intelligent customer support.
            </p>
          </RiseUpAnimation>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <RiseUpAnimation key={index} stagger={0.2 + (index * 0.1)} duration={0.8} y={60}>
                <div className="benefit-card">
                  <div className="benefit-card-header">
                    <div className="benefit-icon-wrapper">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <div className="benefit-icon-bg"></div>
                    </div>
                    <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                  <div className="benefit-card-accent"></div>
                </div>
              </RiseUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="integrations-content">
              <h2>Connects With Your Existing Tools</h2>
              <p>Seamlessly integrates with the platforms you already use</p>
              <div className="integration-logos">
                <div className="integration-item">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.53-.14.99-.5 1.27-.22.18-.53.32-.96.32-.51 0-.96-.19-1.2-.49-.18-.23-.28-.52-.28-.87V5zm-5.51.01L9.5 5v4.73c0 .37-.1.66-.28.87-.23.31-.69.5-1.22.5-.44 0-.74-.14-.96-.32-.36-.28-.55-.74-.5-1.27L7.08 5l-.59.01zM3.15 9.36L4.2 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.94-.47-.26-.33-.35-.76-.29-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"/>
                  </svg>
                  <span>Shopify</span>
                </div>
                <div className="integration-item">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>WooCommerce</span>
                </div>
                <div className="integration-item">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.8 8.001c0-.22-.18-.4-.4-.4H2.6c-.22 0-.4.18-.4.4v8c0 .22.18.4.4.4h18.8c.22 0 .4-.18.4-.4v-8zM12 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>Square</span>
                </div>
                <div className="integration-item">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Zendesk</span>
                </div>
                <div className="integration-item">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                  </svg>
                  <span>Salesforce</span>
                </div>
              </div>
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section" id="use-cases">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Built for Every Type of Retailer</h2>
            <p className="section-subtitle">
              Whether you're online-only or have 100 locations, Always Open scales with your business.
            </p>
          </RiseUpAnimation>
          
          <div className="use-cases-cards">
            {useCases.map((useCase, index) => (
              <RiseUpAnimation key={index} stagger={0.2 + (index * 0.1)} duration={0.8} y={60}>
                <div className="use-case-card-new">
                  <div className="use-case-icon">
                    {index === 0 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9,22 9,12 15,12 15,22"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    )}
                  </div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                  <div className="use-case-tags">
                    {useCase.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="use-case-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </RiseUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="guarantee-content">
              <h2>Zero Risk to Get Started</h2>
              <div className="guarantee-grid">
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>No Setup Fees</span>
                </div>
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Cancel Anytime</span>
                </div>
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                  </svg>
                  <span>Live in Under a Week</span>
                </div>
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Enterprise-Grade Security</span>
                </div>
              </div>
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-hospitality">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Common Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about using Always Open for your retail business.
            </p>
          </RiseUpAnimation>
          
          <RiseUpAnimation stagger={0.2} duration={0.8} y={40}>
            <div className="faq-grid-hospitality">
              <div className="faq-item-hospitality">
                <h4>Can it access my product inventory?</h4>
                <p>Yes! Always Open connects directly to your inventory system to provide real-time stock availability, pricing, and product details.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>What about returns and refunds?</h4>
                <p>The AI can guide customers through your return policy, initiate return requests, and escalate complex cases to your team automatically.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>Does it work with my e-commerce platform?</h4>
                <p>We integrate with Shopify, WooCommerce, Magento, BigCommerce, and most major platforms. Custom integrations are available too.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>How do you handle sensitive payment info?</h4>
                <p>We never store payment details. For purchases, we securely hand off to your existing checkout flow. Full PCI compliance.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>Can it upsell and cross-sell?</h4>
                <p>Absolutely. Always Open can recommend complementary products, share current promotions, and suggest alternatives—all naturally within the conversation.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>What if a customer gets angry?</h4>
                <p>Our AI detects sentiment and knows when to involve a human. It can seamlessly transfer to your support team while keeping context intact.</p>
              </div>
            </div>
          </RiseUpAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-rounded container" id="contact">
        <div className="cta-rounded-content">
          <div className="cta-blob-3"></div>
          <div className="cta-blob-4"></div>
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Ready to Stop Losing Sales?</h2>
            <p>Join hundreds of retailers who never miss a customer inquiry.</p>
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
                  placeholder="Company Name" 
                  className="form-input"
                />
                <div className="select-wrapper">
                  <select className="form-select">
                    <option value="">Business Type</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="brick-mortar">Brick & Mortar</option>
                    <option value="multi-location">Multi-Location Chain</option>
                    <option value="marketplace">Marketplace Seller</option>
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

export default RetailPage;


