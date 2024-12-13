import React from 'react';
import { Box, TextField, Button, Typography, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, MenuItem, Stack } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const CreateTicket = () => {
    return (
        <Box sx={{ display: 'flex', height: '90.6vh',marginBottom:'50px',p:2}}>
            <Box sx={{ flexGrow: 1, backgroundColor: '#fff'  }}>
                <Typography variant="h2" sx={{ color: 'black', textAlign: 'center', mt: 7,mb:2 }}>Create Ticket</Typography>

                <Grid container spacing={3} sx={{mb:5}}>
                    {/* Ticket No and Date */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Ticket No."
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                        />
                    </Grid>

                    {/* Name and Department */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Name"
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Department"
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                        />
                    </Grid>
                    {/* Subject */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Subject"
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                        />
                    </Grid>

                    {/* Category and Description */}
                    <Grid item xs={12} sm={6}>
                        <Stack >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Category"
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Type"
                            
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1,mt:1 }}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Priority"
                            
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1,mt:1 }}
                        >
                           
                        </TextField>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Description"
                            multiline
                            rows={6.5}
                            sx={{ bgcolor: '#f0f0f0', borderRadius: 1 }}
                            slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end"><AttachFileIcon /></InputAdornment>,
                                },
                              }}
                        />
                    </Grid>
                   

                    {/* Recaptcha Placeholder */}
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                bgcolor: '#f0f0f0',
                                borderRadius: 1,
                                height: '170px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #ccc',
                            }}
                        >
                           <img src="/captcha.png" height={'100%'} width={'100%'} alt="" />
                        </Box>
                    </Grid>
                    {/* Submit Button */}
                    <Grid item xs={6} textAlign="center" sx={{display:'flex',justifyContent:'end',alignItems:'end',pr:3}}>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: '#00c4cc', color: '#fff', textTransform: 'none', px: 5 }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            
            </Box>
        </Box >
    )
}

export default CreateTicket;