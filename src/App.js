import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTARounded from './components/CTARounded';
import Footer from './components/Footer';
import ChatPlugin from './components/ChatPlugin';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import DataDeletion from './components/DataDeletion';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const HomePage = () => (
    <div className="App">
      <Header />
      <main>
        <Hero toggleChat={toggleChat} isChatOpen={isChatOpen}>
          <div className="bg-blob1" />
          <div className="bg-blob2" />
          <div className="bg-blob3" />
          <div className="bg-blob4" />
        </Hero>
        <Features />
        <HowItWorks />
        <FeaturesGrid />
        <Testimonials />
        <FAQ />
        <CTARounded />
      </main>
      <Footer />
      <ChatPlugin isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );

  const PrivacyPage = () => (
    <div className="App">
      <Header />
      <PrivacyPolicy />
      <Footer />
      <ChatPlugin isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );

  const TermsPage = () => (
    <div className="App">
      <Header />
      <TermsOfUse />
      <Footer />
      <ChatPlugin isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );

  const DataDeletionPage = () => (
    <div className="App">
      <Header />
      <DataDeletion />
      <Footer />
      <ChatPlugin isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/data-deletion" element={<DataDeletionPage />} />
      </Routes>
    </Router>
  );
}

export default App; 