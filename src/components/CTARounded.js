import React, { useState } from 'react';
import RiseUpAnimation from './RiseUpAnimation';

// API configuration - uses environment variables with fallbacks
const getFormApiUrl = () => {
  const baseUrl = process.env.REACT_APP_FORM_API_URL || 'http://localhost:3000';
  const formId = process.env.REACT_APP_FORM_ID || '69437f809438ebf873b38154';
  return `${baseUrl}/v1/public/forms/${formId}/submit`;
};

const CTARounded = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: ''
  });

  const [showOtherIndustry, setShowOtherIndustry] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

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
    // Clear any previous status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const requestBody = {
      data: {
        name: formData.name,
        email: formData.email,
        industry: formData.industry
      },
      requesterEmail: formData.email,
      requesterName: formData.name
    };

    try {
      const response = await fetch(getFormApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      setSubmitStatus({ 
        type: 'success', 
        message: "Thank you! We'll be in touch soon to schedule your walkthrough." 
      });
      setFormData({ name: '', email: '', industry: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <button 
              type="submit" 
              className="primary-btn form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book a Demo'}
            </button>
            {submitStatus.message && (
              <p className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </p>
            )}
          </form>
        </RiseUpAnimation>
        
      </div>
    </section>
  );
};

export default CTARounded; 