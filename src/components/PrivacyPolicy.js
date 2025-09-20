import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        
        <div className="privacy-content">
          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Business information and preferences</li>
              <li>Usage data and analytics</li>
              <li>Communication records and support interactions</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, 
              including:
            </p>
            <ul>
              <li>Providing customer support and technical assistance</li>
              <li>Personalizing your experience and content</li>
              <li>Analyzing usage patterns to improve our services</li>
              <li>Sending important updates and notifications</li>
              <li>Ensuring security and preventing fraud</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Your Rights and Choices</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              For detailed instructions on how to request data deletion, please visit our 
              <a href="/data-deletion" className="link-highlight"> Data Deletion Instructions</a> page.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, 
              analyze usage patterns, and provide personalized content. You can control 
              cookie settings through your browser preferences.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Third-Party Services</h2>
            <p>
              Our services may contain links to third-party websites or integrate with 
              third-party services. We are not responsible for the privacy practices 
              of these external services.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than 
              your own. We ensure appropriate safeguards are in place to protect your data.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              any material changes by posting the new policy on this page and updating 
              the "Last updated" date.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@alwaysopen.ai</p>
              <p><strong>Address:</strong> [Your Business Address]</p>
              <p><strong>Phone:</strong> [Your Phone Number]</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>12. Data Deletion</h2>
            <p>
              You have the right to request deletion of your personal data. For detailed instructions 
              on how to request data deletion, please visit our 
              <a href="/data-deletion" className="link-highlight"> Data Deletion Instructions</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 