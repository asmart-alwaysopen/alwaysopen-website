import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="terms-of-use">
      <div className="container">
        <div className="terms-header">
          <h1>Terms of Use</h1>
          <p className="terms-subtitle">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
        
        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Always Open's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Description of Service</h2>
            <p>
              Always Open provides AI-powered virtual front desk solutions, including but not limited to:
            </p>
            <ul>
              <li>Automated customer service and support</li>
              <li>Business process automation</li>
              <li>AI-powered communication tools</li>
              <li>Analytics and reporting features</li>
              <li>Integration services with third-party platforms</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>3. User Accounts and Registration</h2>
            <p>
              To access certain features of our service, you may be required to create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your account credentials secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Acceptable Use Policy</h2>
            <p>
              You agree not to use our services to:
            </p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Use our services for spam or unsolicited communications</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5. Intellectual Property Rights</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, 
              graphics, logos, and software, are owned by Always Open or its licensors and are protected 
              by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed 
              by our Privacy Policy, which is incorporated into these Terms of Use by reference.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Service Availability and Modifications</h2>
            <p>
              We strive to maintain high service availability but do not guarantee uninterrupted access. 
              We reserve the right to modify, suspend, or discontinue any part of our services at any time 
              with reasonable notice.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Always Open shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to loss 
              of profits, data, or use, arising out of or relating to your use of our services.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Always Open and its officers, directors, employees, 
              and agents from any claims, damages, or expenses arising from your use of our services or 
              violation of these terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our services at any time, with or 
              without cause, with reasonable notice. Upon termination, your right to use our services 
              will cease immediately.
            </p>
          </section>

          <section className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of 
              [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="terms-section">
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. We will notify users of 
              any material changes by posting the new terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="terms-section">
            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> legal@alwaysopen.ai</p>
              <p><strong>Address:</strong> [Your Business Address]</p>
              <p><strong>Phone:</strong> [Your Phone Number]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse; 