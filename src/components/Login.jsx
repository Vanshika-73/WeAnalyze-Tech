import React from 'react';
import { TextField, Button, Typography, Box, Link, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = () => {
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
            padding:'70px 270px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#91ded2', // Background of the form
            borderRadius: 1,
            boxShadow: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            sx={{ marginBottom: 2, fontFamily: 'Arial, sans-serif' }}
          >
            Helpdesk System
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
          <Button
            variant="contained"
            color="success"
            sx={{ marginY: 2, fontWeight: 'bold',backgroundColor:'green',paddingX:7,borderRadius:2 }}
          >
            Sign In
          </Button>
          <Box
          width={'60%'}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 1,
            }}
          >
            <Link href="/forget-password" underline="none" sx={{ color: 'red', fontSize: '1rem' }}>
              Forgot password
            </Link>
            <Link href="/signup" underline="none" sx={{ color: 'black', fontSize: '1rem' }}>
              Sign Up
            </Link>
          </Box>
        </Container>
      </Box>
  );
};

export default Login;