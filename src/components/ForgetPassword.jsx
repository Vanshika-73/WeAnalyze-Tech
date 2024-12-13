import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const theme = createTheme();

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#55d6c2',
        }}
      >
        <Container
        //   maxWidth="sm"
        sx={{
            display: 'flex',
            width:'50%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#91ded2',
            padding: 15,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{ marginBottom: 3, fontFamily: 'Arial, sans-serif',width:'50%' }}
          >
            Don’t worry, Enter your email below and we will send you a link to change password.
          </Typography>
          <TextField
          sx={{width:'60%'}}
            variant="outlined"
            label="Email"
            InputProps={{
                style: { backgroundColor: 'white' }, // Field background color
              }}
            margin="normal"
          />
          <Button
            variant="contained"
            color="success"
            sx={{ marginY: 1.5, fontWeight: 'bold',paddingX:7,borderRadius:2 }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={()=>navigate('/login')}
            sx={{ fontWeight: 'bold',paddingX:7,borderRadius:2 }}
          >
            Sign In
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ForgotPassword;
