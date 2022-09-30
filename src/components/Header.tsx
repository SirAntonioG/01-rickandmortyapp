import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        margin: 0,
        height: 288,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
      className='header-box'
    >
      <Typography
        variant='h1'
        sx={{
          fontFamily: 'Segoe UI',
          fontWeight: 900,
          fontSize: '5em',
          color: '#202329',
          textAlign: 'center',
        }}
      >
        The Rick and Morty
      </Typography>
    </Box>
  );
};

export default Header;
