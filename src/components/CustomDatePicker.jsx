'use client';

import React, { useEffect, useRef, useState } from 'react';

const BRAND_BLUE = '#0b3c5d';
const BRAND_YELLOW = '#f6ae2d';

const CustomDatePicker = ({ value, onChange, className = '', required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMonth, setDisplayMonth] = useState(new Date());
  const containerRef = useRef(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = value ? new Date(value) : null;
  if (selectedDate) {
    selectedDate.setHours(0, 0, 0, 0);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    onChange(`${year}-${month}-${day}`);
    setIsOpen(false);
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const goToPreviousMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(displayMonth);
  const monthYear = displayMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={toggleCalendar}
        className={`w-full text-left bg-white border border-neutral-300 px-4 py-3 text-[15px] md:text-[16px] text-black rounded-md hover:border-black transition-colors cursor-pointer ${className}`}
      >
        {formatDisplayDate(value) || 'Select a date'}
      </button>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg p-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Previous month"
            >
              <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-sm font-semibold text-black">{monthYear}</div>
            <button
              type="button"
              onClick={goToNextMonth}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Next month"
            >
              <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-neutral-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const isPast = date < today;
              const isToday = date.getTime() === today.getTime();
              const isSelected = selectedDate && date.getTime() === selectedDate.getTime();

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  onClick={() => !isPast && handleDateSelect(date)}
                  disabled={isPast}
                  className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors
                    ${isPast ? 'text-neutral-300 cursor-not-allowed' : 'cursor-pointer hover:bg-neutral-100'}
                    ${isSelected ? 'bg-[#0b3c5d] text-white font-semibold shadow-sm' : ''}
                    ${isToday && !isSelected ? 'border border-[#f6ae2d] text-black font-medium' : ''}
                    ${!isPast && !isSelected && !isToday ? 'text-neutral-700' : ''}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
