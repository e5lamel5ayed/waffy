import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const JobCards = ({ icon: Icon, title, description }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        p: 'var(--spacing-3)',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--box-shadow)',
        maxWidth: '300px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 'var(--box-shadow-hover)',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'var(--color-primary)',
          p: 'var(--spacing-2)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 'var(--spacing-2)',
        }}
      >
        <Icon style={{ fontSize: 'var(--icon-size)', color: 'var(--color-text)' }} />
      </Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 'var(--spacing-2)' }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-button-text)',
          '&:hover': {
            backgroundColor: 'var(--color-primary-dark)',
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default JobCards;
