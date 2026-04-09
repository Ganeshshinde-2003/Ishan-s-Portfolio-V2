'use client';

import React, { createContext, useContext, useState } from 'react';

export type NavItem = 'home' | 'work' | 'ai-projects' | 'resume' | 'about' | 'my-life';

interface NavigationContextType {
  activeNav: NavItem;
  setActiveNav: (nav: NavItem) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeNav, setActiveNav] = useState<NavItem>('home');

  return (
    <NavigationContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
