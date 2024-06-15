import React, { createContext, useContext, useState } from 'react';

type Severity = 'success' | 'error';

interface StatusContextProps {
  statusMessage: string;
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>;
  statusSeverity: Severity;
  setStatusSeverity: React.Dispatch<React.SetStateAction<Severity>>;
  statusOpen: boolean;
  setStatusOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatusContext = createContext<StatusContextProps | undefined>(undefined);

export const StatusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusSeverity, setStatusSeverity] = useState<Severity>('success');
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <StatusContext.Provider
      value={{
        statusMessage,
        setStatusMessage,
        statusSeverity,
        setStatusSeverity,
        statusOpen,
        setStatusOpen,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  const context = useContext(StatusContext);
  if (!context) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
};
