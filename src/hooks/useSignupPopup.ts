import { useState, useEffect } from 'react';

export const useSignupPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('danndi-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
    // Mark popup as seen for 30 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    localStorage.setItem('danndi-popup-seen', expiryDate.toISOString());
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return {
    isPopupOpen,
    closePopup,
    openPopup
  };
};