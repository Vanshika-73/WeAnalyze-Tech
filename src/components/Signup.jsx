import React from 'react';
import { TextField, Button, Typography, Box, Link, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Signup = () => {
  return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#55d6c2', // Background of the entire page
        }}
      >
        <Container
          sx={{
            width:'50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#91ded2', // Background of the form
            padding: 7,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            sx={{ marginBottom: 1, fontFamily: 'Arial, sans-serif' }}
          >
            Helpdesk System
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 2, fontFamily: 'Arial, sans-serif', color: 'black' }}
          >
            Sign up here
          </Typography>
          <TextField
            sx={{width:'60%'}}
            variant="outlined"
            label="Username"
            margin="normal"
            InputProps={{
              style: { backgroundColor: 'white' }, // Field background color
            }}
          />
          <TextField
            sx={{width:'60%'}}
            variant="outlined"
            type="password"
            label="Password"
            margin="normal"
            InputProps={{
              style: { backgroundColor: 'white' }, // Field background color
            }}
          />
          <TextField
            sx={{width:'60%'}}
            variant="outlined"
            label="Email"
            margin="normal"
            InputProps={{
              style: { backgroundColor: 'white' }, // Field background color
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginY: 2, fontWeight: 'bold',backgroundColor:'green',paddingX:7,borderRadius:2  }}
          >
            Sign Up
          </Button>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 1,
              width: '60%',
            }}
          >
            <Link href="/forget-password" underline="none" sx={{ color: 'red', fontSize: '1rem' }}>
              Forgot password
            </Link>
            <Link href="/login" underline="none" sx={{ color: 'black', fontSize: '1rem' }}>
              Sign In
            </Link>
          </Box>
        </Container>
      </Box>
  );
};

export default Signup;