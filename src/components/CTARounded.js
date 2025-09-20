import React, { useState } from 'react';
import RiseUpAnimation from './RiseUpAnimation';

const CTARounded = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: ''
  });

  const [showOtherIndustry, setShowOtherIndustry] = useState(false);

  const industries = [
    'Healthcare',
    'E-commerce',
    'Real Estate',
    'Legal Services',
    'Financial Services',
    'Education',
    'Restaurant & Food',
    'Beauty & Wellness',
    'Technology',
    'Consulting',
    'Manufacturing',
    'Retail'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'industry') {
      setShowOtherIndustry(value === 'Other');
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or other logic here
    alert('Thank you! We\'ll be in touch soon to schedule your walkthrough.');
    setFormData({ name: '', email: '', industry: '' });
  };

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
    <section className="cta-rounded container" id="contact">
      <div className="cta-rounded-content">
        <div className="cta-blob-3"></div>
        <div className="cta-blob-4"></div>
        <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
          <h2>Ready to Never Miss a Customer?</h2>
          <p>Start converting inquiries into opportunities, 24/7</p>
        </RiseUpAnimation>
        
        <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
          <form onSubmit={handleSubmit} className="cta-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                required
                className="form-input"
              />
              <div className="select-wrapper">
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="Select or type your industry"
                  list="industries"
                  required
                  className="form-select"
                />
                <datalist id="industries">
                  {industries.map((industry) => (
                    <option key={industry} value={industry} />
                  ))}
                </datalist>
              </div>
            </div>
            <button type="submit" className="primary-btn form-submit">
            Book a Demo
            </button>
          </form>
        </RiseUpAnimation>
        
      </div>
    </section>
  );
};

export default CTARounded; 