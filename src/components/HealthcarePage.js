import React from 'react';
import RiseUpAnimation from './RiseUpAnimation';

const HealthcarePage = () => {
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "After-Hours Patient Calls",
      description: "Patients need answers and appointment scheduling outside of office hours, but staff availability is limited."
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
      title: "Appointment No-Shows & Follow-Ups",
      description: "Missed appointments and forgotten follow-ups cost practices significantly in lost revenue—and manual reminder calls consume valuable staff time."
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
      title: "Staff Burnout",
      description: "Front desk staff are overwhelmed with repetitive calls and outbound reminder tasks, taking time away from in-office patient care."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      title: "Routine Inquiries",
      description: "Staff spend hours answering the same questions about hours, locations, insurance, and preparation instructions."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "24/7 Patient Support",
      description: "Provide instant responses to patient inquiries about appointments, office hours, directions, and general practice information—any time of day or night."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Proactive Outbound Calling",
      description: "Automatically call patients for appointment reminders, follow-up scheduling, and post-visit check-ins—reducing no-shows and improving patient outcomes."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h.01"/>
          <path d="M12 14h.01"/>
          <path d="M16 14h.01"/>
        </svg>
      ),
      title: "Smart Scheduling",
      description: "Handle appointment requests, cancellations, and rescheduling automatically. Both inbound inquiries and outbound reminders work seamlessly."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "HIPAA-Conscious Design",
      description: "Built with healthcare privacy in mind. Handles general inquiries while knowing when to escalate sensitive matters to your clinical staff."
    }
  ];

  const useCases = [
    {
      title: "Medical Practices",
      description: "Handle inbound patient calls and proactively reach out for appointment reminders, follow-ups, and routine check-ins.",
      features: ["Appointment scheduling", "Outbound reminders", "Follow-up calls", "Insurance inquiries"]
    },
    {
      title: "Dental Offices",
      description: "Manage booking requests, automate recall reminders for cleanings, and handle post-procedure follow-up calls.",
      features: ["New patient intake", "Recall reminders", "Post-procedure calls", "Emergency routing"]
    },
    {
      title: "Specialty Clinics",
      description: "Support specialized practices with referral coordination, pre-procedure reminder calls, and follow-up scheduling.",
      features: ["Referral processing", "Pre-procedure calls", "Follow-up outreach", "Specialist availability"]
    }
  ];

  const stats = [
    { 
      number: "70%", 
      label: "Reduction in missed calls",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    { 
      number: "24/7", 
      label: "Inbound & outbound support",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      )
    },
    { 
      number: "35%", 
      label: "Fewer no-shows with auto-reminders",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
    },
    { 
      number: "50%", 
      label: "Less front desk call volume",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      )
    }
  ];

  return (
    <div className="healthcare-page">
      {/* Hero Section */}
      <section className="industry-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="bg-blob1" />
        <div className="bg-blob2" />
        <div className="bg-blob3" />
        <div className="bg-blob4" />
        
        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <div className="hero-badge healthcare-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                Healthcare Industry Solution
              </div>
              <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
                <h1>Better Patient Care Starts with Better Communication</h1>
                <p className="hero-subtitle">
                  Handle inbound patient calls and proactively reach out with appointment reminders and follow-ups—24/7 AI that frees your staff to focus on delivering exceptional care.
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
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Healthcare professional providing patient care" 
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
            <h2>Healthcare Challenges We Solve</h2>
            <p className="section-subtitle">
              Medical practices face unique communication challenges that impact patient satisfaction and operational efficiency.
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
                  <div className="cardinal-card-number healthcare-number">01</div>
                  <h4>{challenges[0].title}</h4>
                  <p>{challenges[0].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
            
            <div className="cardinal-right">
              <RiseUpAnimation stagger={0.3} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number healthcare-number">02</div>
                  <h4>{challenges[1].title}</h4>
                  <p>{challenges[1].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
            
            <div className="cardinal-bottom">
              <RiseUpAnimation stagger={0.4} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number healthcare-number">03</div>
                  <h4>{challenges[2].title}</h4>
                  <p>{challenges[2].description}</p>
                </div>
              </RiseUpAnimation>
            </div>
            
            <div className="cardinal-left">
              <RiseUpAnimation stagger={0.5} duration={0.8} y={40}>
                <div className="cardinal-card">
                  <div className="cardinal-card-number healthcare-number">04</div>
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
              <h2>The Impact of AI-Powered Patient Communication</h2>
              <p>See how healthcare practices are transforming their operations with Always Open</p>
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
      <section className="how-it-works-hospitality how-it-works-healthcare">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Get Started in 3 Simple Steps</h2>
            <p className="section-subtitle">
              From demo to live in days, not months. We handle the setup so you can focus on patient care.
            </p>
          </RiseUpAnimation>
          
          <div className="steps-horizontal">
            <RiseUpAnimation stagger={0.2} duration={0.8} y={40}>
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Book a Demo</h3>
                  <p>See Always Open in action and tell us about your practice's unique needs and patient inquiries.</p>
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
                  <h3>We Customize</h3>
                  <p>Our team trains the AI on your practice details, services, insurance policies, and procedures.</p>
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
                  <h3>Go Live</h3>
                  <p>Start handling patient calls 24/7. Your AI assistant is ready to help within days, not months.</p>
                </div>
              </div>
            </RiseUpAnimation>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="mid-cta-section">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="mid-cta-content">
              <h2>Ready to See Always Open in Action?</h2>
              <p>Join healthcare practices that never miss a patient call</p>
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
            <h2>How Always Open Transforms Your Healthcare Practice</h2>
            <p className="section-subtitle">
              Deliver better patient experiences while reducing administrative burden and improving efficiency.
            </p>
          </RiseUpAnimation>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <RiseUpAnimation key={index} stagger={0.2 + (index * 0.1)} duration={0.8} y={60}>
                <div className="benefit-card">
                  <div className="benefit-card-header">
                    <div className="benefit-icon-wrapper">
                      <div className="benefit-icon healthcare-icon">{benefit.icon}</div>
                      <div className="benefit-icon-bg healthcare-icon-bg"></div>
                    </div>
                    <div className="benefit-number healthcare-number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                  <div className="benefit-card-accent healthcare-accent"></div>
                </div>
              </RiseUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="guarantee-section healthcare-compliance">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <div className="guarantee-content">
              <h2>Built for Healthcare</h2>
              <div className="guarantee-grid">
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Privacy-Conscious Design</span>
                </div>
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span>Smart Escalation to Staff</span>
                </div>
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>Secure Data Handling</span>
                </div>
                <div className="guarantee-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                  <span>EHR/PMS Integration Ready</span>
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
            <h2>Perfect for Every Healthcare Practice</h2>
            <p className="section-subtitle">
              From family medicine to specialty clinics, Always Open adapts to your specific needs.
            </p>
          </RiseUpAnimation>
          
          <div className="use-cases-cards">
            {useCases.map((useCase, index) => (
              <RiseUpAnimation key={index} stagger={0.2 + (index * 0.1)} duration={0.8} y={60}>
                <div className="use-case-card-new">
                  <div className="use-case-icon healthcare-use-icon">
                    {index === 0 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9,22 9,12 15,12 15,22"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    )}
                  </div>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                  <div className="use-case-tags">
                    {useCase.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="use-case-tag healthcare-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </RiseUpAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-hospitality faq-section-healthcare">
        <div className="container">
          <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about implementing Always Open for your healthcare practice.
            </p>
          </RiseUpAnimation>
          
          <RiseUpAnimation stagger={0.2} duration={0.8} y={40}>
            <div className="faq-grid-hospitality">
              <div className="faq-item-hospitality">
                <h4>Does Always Open provide medical advice?</h4>
                <p>No. Always Open never provides medical advice, diagnoses, or treatment recommendations. It handles administrative tasks like scheduling, general practice information, and routing—all clinical questions are immediately directed to your qualified staff.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>Is Always Open HIPAA compliant?</h4>
                <p>Always Open is designed with healthcare privacy in mind. We handle general administrative inquiries and know when to appropriately escalate sensitive clinical matters to your staff.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>Can it make outbound calls for reminders?</h4>
                <p>Yes! Always Open proactively calls patients for appointment reminders, follow-up scheduling, and post-visit check-ins—significantly reducing no-shows and freeing up your staff.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>What happens with urgent or emergency calls?</h4>
                <p>Always Open is trained to recognize urgent situations and immediately routes these to your on-call staff or directs patients to emergency services when appropriate.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>Can patients schedule appointments directly?</h4>
                <p>Absolutely. When integrated with your scheduling system, patients can book, reschedule, or cancel appointments 24/7 based on your practice's availability rules.</p>
              </div>
              <div className="faq-item-hospitality">
                <h4>How quickly can we get started?</h4>
                <p>Most practices are live within 5-7 business days. We handle all setup and customization for your specific practice needs and protocols.</p>
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
            <h2>Ready to Transform Your Patient Experience?</h2>
            <p>Join healthcare practices that never miss a patient call.</p>
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
                  placeholder="Practice Name" 
                  className="form-input"
                />
                <div className="select-wrapper">
                  <select className="form-select">
                    <option value="">Practice Type</option>
                    <option value="family-medicine">Family Medicine</option>
                    <option value="dental">Dental</option>
                    <option value="specialty">Specialty Clinic</option>
                    <option value="urgent-care">Urgent Care</option>
                    <option value="mental-health">Mental Health</option>
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

export default HealthcarePage;

