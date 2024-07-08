import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

export const useToggle = () => useContext(ToggleContext);

export const ToggleProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isTransitioning, setTransitioning] = useState(false);

  const toggleShape = () => {
    setTransitioning(true);
    setTimeout(() => {
      setOpen(!isOpen);
      setTransitioning(false);
    }, 300); // Adjust duration to match the CSS transition duration
  };

  return (
    <ToggleContext.Provider value={{ isOpen, isTransitioning, toggleShape }}>
      {children}
    </ToggleContext.Provider>
  );
};
