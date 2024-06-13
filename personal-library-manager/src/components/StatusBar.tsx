import { Alert, AlertProps, Snackbar } from '@mui/material';
import React from 'react';
import { useStatus } from '../contexts/StatusContext';

const StatusBar: React.FC = () => {
  const { statusMessage, statusSeverity, statusOpen, setStatusOpen } = useStatus();

  const alertProps: AlertProps = {
    severity: statusSeverity,
    onClose: () => setStatusOpen(false),
  };

  return (
    <Snackbar open={statusOpen} autoHideDuration={6000} onClose={() => setStatusOpen(false)}>
      <Alert {...alertProps}>{statusMessage}</Alert>
    </Snackbar>
  );
};

export default StatusBar;
