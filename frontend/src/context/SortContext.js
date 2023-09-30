import React, { createContext, useContext, useState } from 'react';

const SortContext = createContext();

const SortProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('');
  const [sortingEnabled, setSortingEnabled] = useState(false);

  return (
    <SortContext.Provider value={{ sortBy, setSortBy, sortingEnabled, setSortingEnabled }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error('useSortContext must be used within a SortProvider');
  }

  return context;
};

export default SortProvider;
