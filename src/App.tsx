import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { ServicesOverview } from './components/ServicesOverview';
import { ServicesDirectory } from './components/ServicesDirectory';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { ServiceModal } from './components/ServiceModal';
import { BookingModal } from './components/BookingModal';
import { ServicesPage } from './components/ServicesPage';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';
import { servicesData } from './data/servicesData';

export const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'services'>('home');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'skincare' | 'body' | 'hair'>('skincare');
  const [selectedOverviewCategory, setSelectedOverviewCategory] = useState<string>('hair-essentials');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<ServiceItem | null>(null);

  const scrollToServices = () => {
    const el = document.getElementById('services-catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenServicesPage = () => {
    setView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOverviewCategory = (catId: string) => {
    setSelectedOverviewCategory(catId);
    handleOpenServicesPage();
  };

  const handleOpenBookingWithService = (service?: ServiceItem) => {
    setBookingService(service || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-black selection:bg-black selection:text-white font-sans">
      {view === 'services' ? (
        <ServicesPage
          initialCategoryId={selectedOverviewCategory}
          onBackToHome={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onBookServiceItem={(service) => handleOpenBookingWithService(service)}
        />
      ) : (
        <>
          {/* Fixed Sticky Header */}
          <Header
            onOpenBooking={handleOpenServicesPage}
            onScrollToServices={handleOpenServicesPage}
          />

          {/* Hero Section */}
          <Hero onOpenBooking={handleOpenServicesPage} />

          {/* Statement Headline Section with Inline Pills */}
          <Statement />

          {/* 8-Card Services Overview Grid */}
          <ServicesOverview
            onSelectService={(service) => setActiveModalService(service)}
            onViewAll={handleOpenServicesPage}
          />

          {/* Complete Filterable Services Directory */}
          <ServicesDirectory
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            services={servicesData}
            onSelectService={(service) => setActiveModalService(service)}
          />

          {/* Client Reviews Marquee */}
          <ReviewsMarquee />

          {/* Footer */}
          <Footer onOpenBooking={handleOpenServicesPage} />

          {/* Interactive Service Details Popup Modal */}
          <ServiceModal
            service={activeModalService}
            onClose={() => setActiveModalService(null)}
            onBookService={(service) => handleOpenBookingWithService(service)}
          />
        </>
      )}

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={bookingService}
      />
    </div>
  );
};

export default App;
