import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { MenuItems } from '../MenuItems/MenuItems';
import { useAppSelector } from '@/app/store';
import { selectToken } from '@/features/auth/authSlice';

export const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const token = useAppSelector(selectToken);

  const handleNavMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div>
      <AppBar position="static" color={'transparent'} sx={{ minHeight: '80px', boxShadow: { md: 'none' } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: '80px' }}>
            <AdbIcon sx={{ mr: 1 }} color={'primary'} />
            <Typography variant="h3" color="primary">
              FlowrSpot
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNavMenu}
                color={'secondary'}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <MenuItems
              isLoggedIn={Boolean(token)}
              handleNavMenu={handleNavMenu}
              sxSettings={{ flexGrow: 1, justifyContent: 'flex-end', gap: '2rem', display: { xs: 'none', md: 'flex' } }}
            />
          </Toolbar>
        </Container>

        {isMobileNavOpen && (
          <Container sx={{ height: '100vh', display: { xs: 'block', md: 'none' } }}>
            <MenuItems
              isLoggedIn={Boolean(token)}
              handleNavMenu={handleNavMenu}
              sxSettings={{
                flexDirection: 'column',
                rowGap: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                pt: '6rem',
              }}
            />
          </Container>
        )}
      </AppBar>
    </div>
  );
};
