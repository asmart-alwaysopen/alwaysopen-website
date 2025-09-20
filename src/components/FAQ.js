import React, { useState } from 'react';
import RiseUpAnimation from './RiseUpAnimation';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How long does setup take?",
      answer: "Setup is quick and seamless. Most businesses are up and running in less than 30 minutes. We handle all the technical details, so you can focus on what matters—your business."
    },
    {
      question: "Is it hard to train or customize?",
      answer: "Not at all! Always Open learns from your existing materials (website, FAQs, documents) automatically. You can easily customize responses and add new information through our simple interface—no technical skills required."
    },
    {
      question: "What if I want to talk to a real human?",
      answer: "Always Open knows when to seamlessly hand over to your team. It can schedule callbacks, create tickets, or transfer chats to live agents when needed. You're always in control of when and how human interaction happens."
    },
    {
      question: "Does it integrate with my booking system?",
      answer: "Yes! Always Open integrates with popular booking and calendar systems like Calendly, Acuity, and Google Calendar. It can check availability, schedule appointments, and send confirmations automatically."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq container">
      <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
        <h2>Got Questions? We've Got Answers</h2>
      </RiseUpAnimation>
      <RiseUpAnimation stagger={0.15} duration={0.7} y={50}>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button 
                className="accordion-trigger"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <span className="accordion-icon"></span>
              </button>
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </RiseUpAnimation>
    </section>
  );
};

export default FAQ; 