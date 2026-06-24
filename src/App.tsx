import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Toolkit from './components/Toolkit';
import Certificates from './components/Certificates';
import ResultOutcomes from './components/ResultOutcomes';
import Workflow from './components/Workflow';
import CareerCoachBlueprint from './components/CareerCoachBlueprint';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';
import { Inquiry } from './types';

export default function App() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminModeEnabled, setIsAdminModeEnabled] = useState(false);
  const [activeHeadline, setActiveHeadline] = useState("Certified Bookkeeper and Virtual Assistant specializing in ledger integrity, multi-account reconciliation, and operational systems administration.");

  // Check URL parameter or stored preference to enable admin controls
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasAdminQuery = params.get('admin') === 'true';
    const isSavedAdmin = localStorage.getItem('pauline_lucena_admin_enabled') === 'true';
    if (hasAdminQuery || isSavedAdmin) {
      setIsAdminModeEnabled(true);
      if (hasAdminQuery) {
        localStorage.setItem('pauline_lucena_admin_enabled', 'true');
      }
    }
  }, []);

  const handleSecretToggle = () => {
    const nextState = !isAdminModeEnabled;
    setIsAdminModeEnabled(nextState);
    localStorage.setItem('pauline_lucena_admin_enabled', nextState ? 'true' : 'false');
  };

  // Load inquiries from localStorage or initialize with elegant seed content
  useEffect(() => {
    const saved = localStorage.getItem('pauline_lucena_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    } else {
      // Elegant seed data to let the user immediately experience the professional admin portal features
      const seedData: Inquiry[] = [
        {
          id: 'INQ-948102',
          name: 'Adrian Sterling',
          email: 'adrian@sterlingcapital.com',
          serviceInterest: 'Accounting Support',
          message: 'Hello Pauline. I run Sterling Capital, and we are looking for high-level virtual ledger oversight, bank reconciliation coordination, and NetSuite reporting support. Let me know if you have availability to take this on next month.',
          timestamp: new Date(Date.now() - 3600000 * 20).toLocaleString(), // 20 hours ago
          status: 'Received',
        },
        {
          id: 'INQ-230912',
          name: 'Genevieve Holt',
          email: 'g.holt@elevatedesign.co',
          serviceInterest: 'Executive Admin',
          message: 'Hi! We need help with executive scheduling, document management on Google Drive, and travel coordination. I love your portfolio design and deadline-focused philosophy!',
          timestamp: new Date(Date.now() - 3600000 * 4).toLocaleString(), // 4 hours ago
          status: 'Received',
        },
      ];
      setInquiries(seedData);
      localStorage.setItem('pauline_lucena_inquiries', JSON.stringify(seedData));
    }
  }, []);

  // Sync inquiries to localStorage
  const saveInquiries = (updatedList: Inquiry[]) => {
    setInquiries(updatedList);
    localStorage.setItem('pauline_lucena_inquiries', JSON.stringify(updatedList));
  };

  const handleAddInquiry = (newInq: Inquiry) => {
    const updated = [newInq, ...inquiries];
    saveInquiries(updated);
  };

  const handleUpdateStatus = (id: string, status: Inquiry['status']) => {
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    saveInquiries(updated);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  return (
    <div className="relative min-h-screen bg-[#0b1326] text-[#dae2fd]">
      {/* Sticky navigation bar header */}
      <Header
        onAdminToggle={() => setIsAdminOpen(true)}
        showAdminBtn={isAdminModeEnabled}
        onSecretUnlock={handleSecretToggle}
      />

      <main className="pt-20">
        {/* Animated Hero section */}
        <Hero selectedHeadline={activeHeadline} />

        {/* Detail-driven stats and headshot */}
        <About />

        {/* Interactive Competencies and Services cards */}
        <Competencies />

        {/* Dynamic searchable professional stack */}
        <Toolkit />

        {/* Premium verified qualifications and certificates section */}
        <Certificates />

        {/* Proven Case Outcomes */}
        <ResultOutcomes />

        {/* Dynamic secure workflow process */}
        <Workflow />

        {/* Career strategy blueprint center */}
        <CareerCoachBlueprint activeHeadline={activeHeadline} onHeadlineChange={setActiveHeadline} />

        {/* Transparent starting packages */}
        <Pricing />

        {/* Action contact inquiry submission form */}
        <Contact
          onInquirySubmitted={handleAddInquiry}
          inquiries={inquiries}
          onDeleteInquiry={handleDeleteInquiry}
        />
      </main>

      {/* Structured matching footer */}
      <Footer onSecretUnlock={handleSecretToggle} />

      {/* Full-screen Admin Portal details */}
      {isAdminOpen && (
        <AdminPortal
          inquiries={inquiries}
          onUpdateStatus={handleUpdateStatus}
          onDeleteInquiry={handleDeleteInquiry}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
    </div>
  );
}
