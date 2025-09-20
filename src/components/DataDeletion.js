import React from 'react';

const DataDeletion = () => {
  return (
    <div className="data-deletion">
      <div className="container">
        <div className="deletion-header">
          <h1>Data Deletion Instructions</h1>
          <p className="deletion-subtitle">
            How to request deletion of your personal data from Always Open
          </p>
        </div>
        
        <div className="deletion-content">
          <section className="deletion-section">
            <h2>Your Right to Data Deletion</h2>
            <p>
              Under various privacy regulations including GDPR, CCPA, and other applicable laws, 
              you have the right to request the deletion of your personal data that we have collected 
              and stored. This page explains how to exercise this right.
            </p>
          </section>

          <section className="deletion-section">
            <h2>What Data We May Delete</h2>
            <p>
              Upon your request, we can delete the following types of personal data:
            </p>
            <ul>
              <li>Account information and profile data</li>
              <li>Contact information (email, phone, address)</li>
              <li>Usage data and analytics</li>
              <li>Communication records and support interactions</li>
              <li>Payment information (processed securely)</li>
              <li>Any other personal information you've provided</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>Data We Cannot Delete</h2>
            <p>
              Some data may be retained for legal or operational reasons:
            </p>
            <ul>
              <li>Data required for legal compliance or audit purposes</li>
              <li>Information necessary to prevent fraud or abuse</li>
              <li>Data that has been anonymized or aggregated</li>
              <li>Information required to fulfill contractual obligations</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>How to Request Data Deletion</h2>
            <p>
              You can request data deletion through any of the following methods:
            </p>
            
            <div className="request-methods">
              <div className="method-card">
                <h3>1. Email Request</h3>
                <p>Send an email to our privacy team at:</p>
                <div className="contact-highlight">
                  <strong>privacy@alwaysopen.ai</strong>
                </div>
                <p>Include the following information:</p>
                <ul>
                  <li>Your full name</li>
                  <li>Email address associated with your account</li>
                  <li>Reason for deletion request (optional)</li>
                  <li>Confirmation that you want all data deleted</li>
                </ul>
              </div>

              <div className="method-card">
                <h3>2. Account Settings</h3>
                <p>If you have an active account, you can also:</p>
                <ul>
                  <li>Log into your account dashboard</li>
                  <li>Navigate to Account Settings</li>
                  <li>Select "Delete Account" option</li>
                  <li>Follow the confirmation process</li>
                </ul>
              </div>

              <div className="method-card">
                <h3>3. Contact Form</h3>
                <p>Use our contact form on the website:</p>
                <ul>
                  <li>Go to the Contact page</li>
                  <li>Select "Data Deletion Request" as the subject</li>
                  <li>Provide your contact information</li>
                  <li>Describe your deletion request</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="deletion-section">
            <h2>Verification Process</h2>
            <p>
              To protect your privacy and security, we will verify your identity before processing 
              your deletion request. This may include:
            </p>
            <ul>
              <li>Verifying your email address</li>
              <li>Confirming account ownership</li>
              <li>Requesting additional identification if necessary</li>
              <li>Ensuring the request is legitimate and not fraudulent</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>Processing Timeline</h2>
            <p>
              We will process your deletion request within the following timeframes:
            </p>
            <ul>
              <li><strong>Initial Response:</strong> Within 48 hours of receiving your request</li>
              <li><strong>Verification:</strong> 1-3 business days (if additional verification is needed)</li>
              <li><strong>Data Deletion:</strong> 30 days from verification completion</li>
              <li><strong>Confirmation:</strong> Email confirmation once deletion is complete</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>What Happens After Deletion</h2>
            <p>
              Once your data is deleted:
            </p>
            <ul>
              <li>Your account will be permanently deactivated</li>
              <li>All personal data will be removed from our active systems</li>
              <li>You will no longer have access to our services</li>
              <li>Any remaining data will be securely archived for legal compliance</li>
              <li>You will receive a confirmation email with deletion details</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>Third-Party Data</h2>
            <p>
              If you've used our services with third-party integrations, you may need to:
            </p>
            <ul>
              <li>Contact those third-party services directly for their data deletion</li>
              <li>Revoke any API access or permissions you've granted</li>
              <li>Delete data from connected platforms separately</li>
            </ul>
          </section>

          <section className="deletion-section">
            <h2>Appeals and Questions</h2>
            <p>
              If you have questions about the deletion process or need to appeal a decision:
            </p>
            <div className="contact-info">
              <p><strong>Privacy Team Email:</strong> privacy@alwaysopen.ai</p>
              <p><strong>Legal Team Email:</strong> legal@alwaysopen.ai</p>
              <p><strong>Response Time:</strong> Within 5 business days</p>
            </div>
          </section>

          <section className="deletion-section">
            <h2>Additional Resources</h2>
            <p>
              For more information about your privacy rights:
            </p>
            <ul>
              <li><a href="/privacy-policy" className="link-highlight">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="link-highlight">Terms of Use</a></li>
              <li>Contact our support team for general inquiries</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion; 