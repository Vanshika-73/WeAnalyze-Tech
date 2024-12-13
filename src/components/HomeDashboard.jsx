import React from 'react';
import {Toolbar, Typography, Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router';

const Home = () => {
    return (
        <>



            {/* Sidebar */}
            <Drawer
                variant="permanent"
                height='50%'
                sx={{
                    width: 250,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 250,
                        boxSizing: 'border-box',
                        backgroundColor: '#e5dcdc',
                        color: 'black',
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', padding: 2 }}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Link style={{textDecoration:'none',color:'black'}} to={'/'}><ListItemText primary="Dashboard" /></Link>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <NoteAddIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <Link style={{textDecoration:'none',color:'black'}} to={'/create-ticket'}> <ListItemText primary="New Ticket" /></Link>
                           
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DescriptionIcon sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="My Ticket" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Home;
