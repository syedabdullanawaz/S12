import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  User,
  Mail,
  Phone,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
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
  const [isCustomDateSelected, setIsCustomDateSelected] = useState<boolean>(false);
  const [isCustomTimeSelected, setIsCustomTimeSelected] = useState<boolean>(false);

  // Popups State
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState<boolean>(false);

  // Calendar State
  const [calendarYear, setCalendarYear] = useState<number>(2026);
  const [calendarMonth, setCalendarMonth] = useState<number>(8); // 8 = September (0-indexed)
  const [tempSelectedDate, setTempSelectedDate] = useState<string>('2026-09-29');

  // Clock State
  const [clockMode, setClockMode] = useState<'hour' | 'minute'>('hour');
  const [selectedHour, setSelectedHour] = useState<number>(1);
  const [selectedMinute, setSelectedMinute] = useState<number>(30);
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('PM');

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
    setIsCustomDateSelected(false);
    setIsCustomTimeSelected(false);
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

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Format date nicely for card display
  const formatCustomDateDisplay = (dateVal: string) => {
    try {
      const parts = dateVal.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        return d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
      }
    } catch {
      // fallback
    }
    return dateVal;
  };

  // Format full date for summary and confirmation
  const getFullDateDisplay = (dateVal: string) => {
    const preset = dates.find((d) => d.value === dateVal);
    if (preset && !isCustomDateSelected) {
      return `${preset.label} (${preset.date})`;
    }
    try {
      const parts = dateVal.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        return d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
    } catch {
      // fallback
    }
    return dateVal;
  };

  // Calendar handlers
  const openDatePicker = () => {
    try {
      const parts = selectedDate.split('-');
      if (parts.length === 3) {
        setCalendarYear(parseInt(parts[0]));
        setCalendarMonth(parseInt(parts[1]) - 1);
      }
    } catch {
      // fallback
    }
    setTempSelectedDate(selectedDate);
    setIsDatePickerOpen(true);
  };

  const handlePrevMonth = () => {
    if (calendarYear === 2026 && calendarMonth <= 8) return; // Don't go before Sep 2026
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((prev) => prev - 1);
    } else {
      setCalendarMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((prev) => prev + 1);
    } else {
      setCalendarMonth((prev) => prev + 1);
    }
  };

  const handleConfirmDate = () => {
    setSelectedDate(tempSelectedDate);
    setIsCustomDateSelected(true);
    setIsDatePickerOpen(false);
  };

  // Clock handlers
  const openTimePicker = () => {
    try {
      const match = selectedTime.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (match) {
        setSelectedHour(parseInt(match[1]));
        setSelectedMinute(parseInt(match[2]));
        setSelectedPeriod(match[3].toUpperCase() as 'AM' | 'PM');
      }
    } catch {
      // fallback
    }
    setClockMode('hour');
    setIsTimePickerOpen(true);
  };

  const handleConfirmTime = () => {
    const formatted = `${String(selectedHour).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')} ${selectedPeriod}`;
    setSelectedTime(formatted);
    setIsCustomTimeSelected(true);
    setIsTimePickerOpen(false);
  };

  // Calculate calendar days
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayRaw = new Date(calendarYear, calendarMonth, 1).getDay();
  // Monday start offset: 0=Mon, ..., 6=Sun
  const startOffset = (firstDayRaw + 6) % 7;

  // Calculate clock hand rotation angle
  const handAngle = clockMode === 'hour' ? (selectedHour % 12) * 30 : selectedMinute * 6;

  return (
    <>
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
              aria-label="Close modal"
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors flex items-center justify-center text-black cursor-pointer"
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
                {/* DATE SELECTION */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-3">
                    Select Date:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => {
                          setSelectedDate(d.value);
                          setIsCustomDateSelected(false);
                        }}
                        className={`p-3 border text-left text-xs transition-all cursor-pointer ${
                          selectedDate === d.value && !isCustomDateSelected
                            ? 'border-black bg-black text-white font-bold'
                            : 'border-black/15 bg-white hover:border-black'
                        }`}
                      >
                        <span className="block font-bold">{d.label}</span>
                        <span className="opacity-80">{d.date}</span>
                      </button>
                    ))}

                    {/* 6th Slot: Pick Your Own Date */}
                    <button
                      type="button"
                      onClick={openDatePicker}
                      className={`p-3 border text-left text-xs transition-all flex flex-col justify-between cursor-pointer ${
                        isCustomDateSelected
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-dashed border-black/30 bg-white/60 hover:border-black hover:bg-white text-neutral-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="block font-bold">Pick Your Own Date</span>
                        <Calendar className="w-3.5 h-3.5 opacity-80" />
                      </div>
                      <span className="opacity-80 truncate text-[11px] mt-1 font-medium">
                        {isCustomDateSelected
                          ? formatCustomDateDisplay(selectedDate)
                          : 'Open Calendar →'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* TIME SLOT SELECTION */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-3">
                    Select Time Slot:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setSelectedTime(t);
                          setIsCustomTimeSelected(false);
                        }}
                        className={`py-2.5 border text-center text-xs font-semibold transition-all cursor-pointer ${
                          selectedTime === t && !isCustomTimeSelected
                            ? 'border-black bg-black text-white'
                            : 'border-black/15 bg-white hover:border-black'
                        }`}
                      >
                        {t}
                      </button>
                    ))}

                    {/* Extra Option: Pick Your Own Timeslot */}
                    <button
                      type="button"
                      onClick={openTimePicker}
                      className={`col-span-3 py-2.5 px-3 border text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isCustomTimeSelected
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-dashed border-black/30 bg-white/60 hover:border-black hover:bg-white text-neutral-800'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>
                        {isCustomTimeSelected
                          ? `Custom Time: ${selectedTime} (Tap to change)`
                          : 'Pick Your Own Timeslot (Open Clock →)'}
                      </span>
                    </button>
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
                    <span>
                      {getFullDateDisplay(selectedDate)} at {selectedTime}
                    </span>
                    <span>
                      (
                      <span className="font-cobe font-bold text-black">
                        ₹{selectedService.price}
                      </span>
                      )
                    </span>
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
                      placeholder="+91 63642 17307"
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
                      {getFullDateDisplay(selectedDate)} @ {selectedTime}
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
                    <span className="font-cobe font-bold text-black text-sm">
                      ₹{selectedService.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-8 py-3.5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer"
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
                    type="button"
                    onClick={() => setStep((prev) => (prev - 1) as any)}
                    className="text-xs font-bold uppercase tracking-wider text-black hover:opacity-60 cursor-pointer"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3.5 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{step === 3 ? 'Confirm Appointment' : 'Continue'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* POPUP 1: CALENDAR MODAL (Pick Your Own Date) - PORTALED ON TOP           */}
      {/* ========================================================================= */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isDatePickerOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsDatePickerOpen(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[9999]"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  className="relative z-[10000] bg-white text-black w-full max-w-sm p-6 rounded-2xl shadow-2xl border border-black/10"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/10">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-amber-600 block">
                        Pick Your Date
                      </span>
                      <h4 className="font-cobe font-black text-lg text-black">
                        {monthNames[calendarMonth]} {calendarYear}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        disabled={calendarYear === 2026 && calendarMonth <= 8}
                        className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Previous Month"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Weekday Labels */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                      <span key={d} className="text-[11px] font-bold text-neutral-400 uppercase">
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Empty slots for start offset */}
                    {Array.from({ length: startOffset }).map((_, i) => (
                      <div key={`empty-${i}`} className="w-9 h-9" />
                    ))}

                    {/* Month Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                      const isPast = dateStr < '2026-09-28';
                      const isSelected = dateStr === tempSelectedDate;

                      return (
                        <button
                          key={day}
                          type="button"
                          disabled={isPast}
                          onClick={() => setTempSelectedDate(dateStr)}
                          className={`w-9 h-9 mx-auto rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-black text-white font-bold shadow-md scale-105'
                              : isPast
                              ? 'text-neutral-300 cursor-not-allowed'
                              : 'text-neutral-800 hover:bg-neutral-100 cursor-pointer'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Date Summary & Action Buttons */}
                  <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-neutral-400">Chosen Date</div>
                      <div className="text-xs font-bold text-black font-cobe">
                        {formatCustomDateDisplay(tempSelectedDate)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsDatePickerOpen(false)}
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-600 hover:text-black cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleConfirmDate}
                        className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
                      >
                        Confirm Date
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* ========================================================================= */}
      {/* POPUP 2: CLOCK MODAL (Pick Your Own Timeslot) - PORTALED ON TOP           */}
      {/* ========================================================================= */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isTimePickerOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsTimePickerOpen(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur-xs z-[9999]"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  className="relative z-[10000] bg-white text-black w-full max-w-sm p-6 rounded-2xl shadow-2xl border border-black/10"
                >
                  {/* Header */}
                  <div className="text-center mb-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-amber-600 block">
                      Pick Your Timeslot
                    </span>
                    <h4 className="font-cobe font-black text-lg text-black">Select Salon Time</h4>
                    <p className="text-[11px] text-neutral-400">Alora Studio Hours: 09:00 AM – 08:30 PM</p>
                  </div>

                  {/* Digital Time Header & AM/PM Toggle */}
                  <div className="flex items-center justify-center gap-3 py-2 px-3 bg-[#f7f6f2] rounded-xl mb-4 border border-black/10">
                    <div className="flex items-center gap-1">
                      {/* Hours Selector */}
                      <button
                        type="button"
                        onClick={() => setClockMode('hour')}
                        className={`font-cobe font-black text-2xl px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          clockMode === 'hour'
                            ? 'bg-black text-white shadow-sm'
                            : 'bg-white text-neutral-800 border border-black/10 hover:border-black'
                        }`}
                      >
                        {String(selectedHour).padStart(2, '0')}
                      </button>
                      <span className="font-cobe font-black text-xl text-neutral-400">:</span>
                      {/* Minutes Selector */}
                      <button
                        type="button"
                        onClick={() => setClockMode('minute')}
                        className={`font-cobe font-black text-2xl px-3 py-1 rounded-lg transition-all cursor-pointer ${
                          clockMode === 'minute'
                            ? 'bg-black text-white shadow-sm'
                            : 'bg-white text-neutral-800 border border-black/10 hover:border-black'
                        }`}
                      >
                        {String(selectedMinute).padStart(2, '0')}
                      </button>
                    </div>

                    {/* AM / PM Toggle */}
                    <div className="flex flex-col gap-1">
                      <button
                        type="button"
                        onClick={() => setSelectedPeriod('AM')}
                        className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                          selectedPeriod === 'AM'
                            ? 'bg-black text-white'
                            : 'bg-white text-neutral-600 border border-black/10 hover:border-black'
                        }`}
                      >
                        AM
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPeriod('PM')}
                        className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                          selectedPeriod === 'PM'
                            ? 'bg-black text-white'
                            : 'bg-white text-neutral-600 border border-black/10 hover:border-black'
                        }`}
                      >
                        PM
                      </button>
                    </div>
                  </div>

                  {/* Mode Indicator */}
                  <div className="text-center text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Selecting {clockMode === 'hour' ? 'Hour' : 'Minute'}
                  </div>

                  {/* Circular Analog Clock Face */}
                  <div className="relative w-56 h-56 rounded-full bg-[#fcfbfa] border border-black/15 shadow-inner flex items-center justify-center mx-auto my-2 select-none">
                    {/* Center Pivot */}
                    <div className="w-2.5 h-2.5 bg-black rounded-full z-30" />

                    {/* Rotating Clock Hand */}
                    <div
                      className="absolute bottom-1/2 left-1/2 w-0.5 h-[76px] bg-black origin-bottom pointer-events-none transition-transform duration-200 z-10"
                      style={{
                        transform: `translateX(-50%) rotate(${handAngle}deg)`,
                      }}
                    >
                      {/* Tip Indicator */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                        {clockMode === 'hour'
                          ? selectedHour
                          : String(selectedMinute).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Dial Numbers: Hours (1 to 12) */}
                    {clockMode === 'hour' &&
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => {
                        const angleRad = (h * 30 - 90) * (Math.PI / 180);
                        const r = 78;
                        const x = r * Math.cos(angleRad);
                        const y = r * Math.sin(angleRad);
                        const isSelected = selectedHour === h;

                        return (
                          <button
                            key={h}
                            type="button"
                            onClick={() => {
                              setSelectedHour(h);
                              setTimeout(() => setClockMode('minute'), 250);
                            }}
                            style={{
                              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }}
                            className={`absolute top-1/2 left-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-black text-white font-bold z-20 scale-105'
                                : 'text-neutral-800 hover:bg-neutral-200 z-20'
                            }`}
                          >
                            {h}
                          </button>
                        );
                      })}

                    {/* Dial Numbers: Minutes (00 to 55 by 5) */}
                    {clockMode === 'minute' &&
                      [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((m) => {
                        const angleRad = (m * 6 - 90) * (Math.PI / 180);
                        const r = 78;
                        const x = r * Math.cos(angleRad);
                        const y = r * Math.sin(angleRad);
                        const isSelected = selectedMinute === m;

                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setSelectedMinute(m)}
                            style={{
                              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }}
                            className={`absolute top-1/2 left-1/2 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-black text-white font-bold z-20 scale-105'
                                : 'text-neutral-800 hover:bg-neutral-200 z-20'
                            }`}
                          >
                            {String(m).padStart(2, '0')}
                          </button>
                        );
                      })}
                  </div>

                  {/* Quick Minute Chips */}
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase mr-1">Quick:</span>
                    {[0, 15, 30, 45].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setSelectedMinute(m);
                          setClockMode('minute');
                        }}
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold border transition-colors cursor-pointer ${
                          selectedMinute === m
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-neutral-700 border-black/15 hover:border-black'
                        }`}
                      >
                        :{String(m).padStart(2, '0')}
                      </button>
                    ))}
                  </div>

                  {/* Selected Time Summary & Action Buttons */}
                  <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-neutral-400">Chosen Time</div>
                      <div className="text-xs font-bold text-black font-cobe">
                        {String(selectedHour).padStart(2, '0')}:{String(selectedMinute).padStart(2, '0')}{' '}
                        {selectedPeriod}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsTimePickerOpen(false)}
                        className="px-3 py-1.5 text-xs font-semibold text-neutral-600 hover:text-black cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleConfirmTime}
                        className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
                      >
                        Confirm Time
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default BookingModal;
