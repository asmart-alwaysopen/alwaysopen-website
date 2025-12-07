import React from 'react';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import DataDeletion from './components/DataDeletion';
import HospitalityPage from './components/HospitalityPage';
import RetailPage from './components/RetailPage';
import HealthcarePage from './components/HealthcarePage';

function App() {

  const HomePage = () => (
    <div className="App">
      <Header />
      <main>
        <Hero>
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
    </div>
  );

  const PrivacyPage = () => (
    <div className="App">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );

  const TermsPage = () => (
    <div className="App">
      <Header />
      <TermsOfUse />
      <Footer />
    </div>
  );

  const DataDeletionPage = () => (
    <div className="App">
      <Header />
      <DataDeletion />
      <Footer />
    </div>
  );

  const HospitalityIndustryPage = () => (
    <div className="App">
      <Header />
      <HospitalityPage />
      <Footer />
    </div>
  );

  const RetailIndustryPage = () => (
    <div className="App">
      <Header />
      <RetailPage />
      <Footer />
    </div>
  );

  const HealthcareIndustryPage = () => (
    <div className="App">
      <Header />
      <HealthcarePage />
      <Footer />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/data-deletion" element={<DataDeletionPage />} />
        <Route path="/industries/hospitality" element={<HospitalityIndustryPage />} />
        <Route path="/industries/retail" element={<RetailIndustryPage />} />
        <Route path="/industries/healthcare" element={<HealthcareIndustryPage />} />
      </Routes>
    </Router>
  );
}

export default App; 