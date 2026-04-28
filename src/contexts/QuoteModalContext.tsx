import React, { createContext, useContext, useState, useCallback } from 'react';

interface QuoteModalContextType {
  open: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  setOpen: (open: boolean) => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openQuoteModal = useCallback(() => setOpen(true), []);
  const closeQuoteModal = useCallback(() => setOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ open, openQuoteModal, closeQuoteModal, setOpen }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within QuoteModalProvider');
  }
  return context;
};
