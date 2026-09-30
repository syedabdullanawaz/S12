import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    preselectedService || servicesData[0]
  );
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-29');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '' });
  const [bookingRef, setBookingRef] = useState<string>('');

  React.useEffect(() => {
    if (isOpen) {
      if (preselectedService) {
        setSelectedService(preselectedService);
        setStep(2);
      } else {
        setStep(1);
      }
    }
  }, [isOpen, preselectedService]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 3) {
      if (!clientInfo.name || !clientInfo.email) {
        alert('Please provide your name and email address.');
        return;
      }
      const ref = 'ALORA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(ref);
      setStep(4);
    } else {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const resetForm = () => {
    setStep(1);
    onClose();
  };

  const timeSlots = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '05:00 PM', '07:00 PM'];
  const dates = [
    { label: 'Today', date: 'Mon, Sep 28', value: '2026-09-28' },
    { label: 'Tomorrow', date: 'Tue, Sep 29', value: '2026-09-29' },
    { label: 'Wednesday', date: 'Wed, Sep 30', value: '2026-09-30' },
    { label: 'Thursday', date: 'Thu, Oct 01', value: '2026-10-01' },
    { label: 'Friday', date: 'Fri, Oct 02', value: '2026-10-02' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#f7f6f2] text-black w-full max-w-2xl overflow-hidden shadow-2xl rounded-none z-10 p-6 sm:p-10 border border-black/10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors flex items-center justify-center text-black"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-600 block mb-1">
              Alora Salon Appointments • HSR Layout
            </span>
            <h3 className="font-cobe font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-black">
              {step === 4 ? 'Appointment Confirmed' : 'Book Your Treatment'}
            </h3>
          </div>

          {/* Step Indicator Progress Bar */}
          {step < 4 && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10 text-xs font-bold uppercase tracking-wider">
              <span className={step >= 1 ? 'text-black' : 'text-neutral-400'}>1. Service</span>
              <span className="text-neutral-300">/</span>
              <span className={step >= 2 ? 'text-black' : 'text-neutral-400'}>2. Date & Time</span>
              <span className="text-neutral-300">/</span>
              <span className={step >= 3 ? 'text-black' : 'text-neutral-400'}>3. Details</span>
            </div>
          )}

          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-black">
                Select Your Desired Treatment:
              </label>
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-2">
                {servicesData.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => setSelectedService(srv)}
                    className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                      selectedService.id === srv.id
                        ? 'border-black bg-white shadow-xs'
                        : 'border-black/15 bg-white/50 hover:border-black/40'
                    }`}
                  >
                    <div>
                      <h4 className="font-cobe font-bold uppercase text-sm">{srv.title}</h4>
                      <p className="text-xs text-neutral-500 mt-0.5">{srv.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-cobe font-bold text-base text-black">₹{srv.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-3">
                  Select Date:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {dates.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`p-3 border text-left text-xs transition-all ${
                        selectedDate === d.value
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-black/15 bg-white hover:border-black'
                      }`}
                    >
                      <span className="block font-bold">{d.label}</span>
                      <span className="opacity-80">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-3">
                  Select Time Slot:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 border text-center text-xs font-semibold transition-all ${
                        selectedTime === t
                          ? 'border-black bg-black text-white'
                          : 'border-black/15 bg-white hover:border-black'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Client Info */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-white p-4 border border-black/15 mb-4 text-xs space-y-1">
                <p className="font-bold text-black uppercase">{selectedService.title}</p>
                <p className="text-neutral-600 flex items-center gap-1">
                  <span>{selectedDate} at {selectedTime}</span>
                  <span>(<span className="font-cobe font-bold text-black">₹{selectedService.price}</span>)</span>
                </p>
                <p className="text-xs text-neutral-400 pt-1">
                  Location: Alora Salon, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/20 focus:border-black focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/20 focus:border-black focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                  <input
                    type="tel"
                    placeholder="063642 17307"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/20 focus:border-black focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation Success */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-amber-400" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 block mb-1">
                  Booking Reference: {bookingRef}
                </span>
                <h4 className="font-cobe font-extrabold uppercase text-xl text-black">
                  We Look Forward to Welcoming You to Alora
                </h4>
              </div>

              <div className="bg-white p-6 border border-black/15 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="text-neutral-500">Treatment:</span>
                  <span className="font-bold text-black">{selectedService.title}</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="text-neutral-500">Date & Time:</span>
                  <span className="font-bold text-black">
                    {selectedDate} @ {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="text-neutral-500">Location:</span>
                  <span className="font-bold text-black">HSR Layout, Bengaluru</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span className="text-neutral-500">Client:</span>
                  <span className="font-bold text-black">{clientInfo.name}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-500">Total Price:</span>
                  <span className="font-cobe font-bold text-black text-sm">₹{selectedService.price}</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="px-8 py-3.5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Close & Return to Alora Studio
              </button>
            </div>
          )}

          {/* Bottom Action Bar */}
          {step < 4 && (
            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep((prev) => (prev - 1) as any)}
                  className="text-xs font-bold uppercase tracking-wider text-black hover:opacity-60"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                className="px-8 py-3.5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors flex items-center gap-2"
              >
                <span>{step === 3 ? 'Confirm Appointment' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
