import React, { useRef, useEffect, useState } from 'react';
import ScrollVelocity from './ScrollVelocity.jsx';
import RiseUpAnimation from './RiseUpAnimation';

const testimonialsRow1 = [
  {
    name: "Nina Lopez",
    role: "Operations Lead",
    company: "Sunrise Studios",
    image: "images/nina.png",
    text: "Always Open is a game changer for our customer support. We never miss a lead, even after hours!",
    rating: 5
  },
  {
    name: "Chaz Barnes",
    role: "Owner",
    company: "Barnes Bakery",
    image: "images/chaz.png",
    text: "The AI is so natural, our customers think they're chatting with a real person. Sales are up!",
    rating: 5
  },
  {
    name: "Alex Whyte",
    role: "Manager",
    company: "Whyte & Co",
    image: "images/alex.png",
    text: "Setup was a breeze. We were live in 20 minutes and the results are amazing.",
    rating: 5
  },
  {
    name: "Andre Smart",
    role: "Director",
    company: "Smart Solutions",
    image: "images/andre.png",
    text: "Our team can finally focus on complex tasks. Routine questions are handled instantly.",
    rating: 5
  },
  {
    name: "Bluey Heeler",
    role: "Receptionist",
    company: "Heeler Vet Clinic",
    image: "images/bluey.png",
    text: "Clients love the 24/7 chat. We get bookings even when the clinic is closed!",
    rating: 5
  }
];

const testimonialsRow2 = [
  {
    name: "Priya Patel",
    role: "Founder",
    company: "Patel Consulting",
    image: "images/priya.png",
    text: "The insights from chat analytics help us improve our services every week.",
    rating: 5
  },
  {
    name: "Liam O'Connor",
    role: "Head of Sales",
    company: "O'Connor Realty",
    image: "images/liam.png",
    text: "We doubled our appointment bookings since using Always Open. Highly recommend!",
    rating: 5
  },
  {
    name: "Sofia Rossi",
    role: "Customer Success",
    company: "Rossi Fashion",
    image: "images/sofia.png",
    text: "The AI handles returns and FAQs so smoothly. Our team is less stressed.",
    rating: 5
  },
  {
    name: "Jamal Carter",
    role: "Support Lead",
    company: "Carter Tech",
    image: "images/jamal.png",
    text: "We can finally offer 24/7 support without hiring night staff. Customers are happier.",
    rating: 5
  },
  {
    name: "Maya Lin",
    role: "Marketing Manager",
    company: "Lin Events",
    image: "images/maya.png",
    text: "Always Open is the best investment we've made for customer engagement.",
    rating: 5
  }
];

const brands = [
  { name: "Crystal Clear", logo: "images/crystalclear.png" },
  { name: "Nucleon Labs", logo: "images/nucleonlabs.png" },
  { name: "NeuvaAI", logo: "images/neuva.png" },
  { name: "Surveyorb", logo: "images/surveyorb.png" }
];

const createStarRating = (rating) => {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  return <div className="rating">{stars}</div>;
};

const renderCards = (testimonials, onHover, onLeave) =>
  testimonials.map((testimonial, idx) => (
    <div key={testimonial.name + idx} style={{ overflow: 'visible' }}>
      <div
        className="testimonial-card"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="testimonial-header">
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <div className="testimonial-info">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.role} at {testimonial.company}</p>
          </div>
        </div>
        <p className="testimonial-text">{testimonial.text}</p>
        {createStarRating(testimonial.rating)}
      </div>
    </div>
  ));

const Testimonials = () => {
  const topGridRef = useRef(null);
  const bottomGridRef = useRef(null);

  // Duplicate cards for infinite scroll
  const topCards = [...testimonialsRow1, ...testimonialsRow1];
  const bottomCards = [...testimonialsRow2, ...testimonialsRow2];

  const [pauseTop, setPauseTop] = useState(false);
  const [pauseBottom, setPauseBottom] = useState(false);

  useEffect(() => {
    const topGrid = topGridRef.current;
    const bottomGrid = bottomGridRef.current;
    let animationFrameId;

    function animate() {
      if (topGrid && !pauseTop) {
        topGrid.scrollLeft += 0.5;
        if (topGrid.scrollLeft >= topGrid.scrollWidth / 2) {
          topGrid.scrollLeft = 0;
        }
      }
      if (bottomGrid && !pauseBottom) {
        bottomGrid.scrollLeft -= 0.5;
        if (bottomGrid.scrollLeft <= 0) {
          bottomGrid.scrollLeft = bottomGrid.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [pauseTop, pauseBottom]);

  return (
    <section className="testimonials container" style={{ position: 'relative', overflow: 'visible' }}>
      {/* Gradient Blobs Background */}
      <div className="testimonials-blob testimonials-blob1"></div>
      <div className="testimonials-blob testimonials-blob2"></div>
      {/* <div className="testimonials-blob testimonials-blob3"></div> */}
      <div className="testimonials-blob testimonials-blob4"></div>
      <RiseUpAnimation stagger={0.1} duration={0.8} y={40}>
        <h2>Helping teams stay open, always</h2>
        <p className="brands-subtitle">Trusted by forward-thinking teams that are already putting it to work - <br/> quietly and effectively.</p>
      </RiseUpAnimation>
      
      <RiseUpAnimation stagger={0.15} duration={0.8} y={50}>
        <div className="brands-showcase">
          <div className="brands-list">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.logo} alt={brand.name} className="brand-logo" style={{ maxHeight: '48px', maxWidth: '120px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </RiseUpAnimation>
      
      {/* <RiseUpAnimation stagger={0.2} duration={0.8} y={60}>
        <div style={{ overflow: 'visible', padding: '2rem 0' }}>
          <div
            className="testimonials-grid testimonials-grid-scroll top"
            style={{ overflow: 'visible', whiteSpace: 'nowrap' }}
            ref={topGridRef}
          >
            {renderCards(topCards, () => setPauseTop(true), () => setPauseTop(false))}
          </div>
        </div>
        <div style={{ overflow: 'visible', padding: '0', position: 'relative', top: '-7rem'}}>
          <div
            className="testimonials-grid testimonials-grid-scroll bottom"
            style={{ overflow: 'visible', whiteSpace: 'nowrap', marginTop: '2rem' }}
            ref={bottomGridRef}
          >
            {renderCards(bottomCards, () => setPauseBottom(true), () => setPauseBottom(false))}
          </div>
        </div>
      </RiseUpAnimation> */}
    </section>
  );
};

export default Testimonials; 