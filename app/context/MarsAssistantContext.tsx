'use client';

import React, { createContext, useContext, useState } from 'react';

interface MarsAssistantContextType {
  isOpen: boolean;
  openMars: () => void;
  closeMars: () => void;
}

const MarsAssistantContext = createContext<MarsAssistantContextType | undefined>(undefined);

export function MarsAssistantProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMars = () => setIsOpen(true);
  const closeMars = () => setIsOpen(false);

  return (
    <MarsAssistantContext.Provider value={{ isOpen, openMars, closeMars }}>
      {children}
    </MarsAssistantContext.Provider>
  );
}

export function useMarsAssistant() {
  const context = useContext(MarsAssistantContext);
  if (context === undefined) {
    throw new Error('useMarsAssistant must be used within MarsAssistantProvider');
  }
  return context;
}
