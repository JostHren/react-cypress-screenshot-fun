import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import { useState } from 'react';
import { MenuItems } from './MenuItems/MenuItems';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { selectToken } from '@/features/auth/authSlice';
import { Modal, setOpenModal } from '@/features/modals/modalsSlice';

interface MobileNavigationProps {
  handleModals: (modal?: Modal) => void;
  isLoggedIn: boolean;
}

const MobileNavigation = ({ handleModals, isLoggedIn }: MobileNavigationProps) => {
  return (
    <Container sx={{ height: '100vh', display: { xs: 'block', md: 'none' } }}>
      <MenuItems
        isLoggedIn={isLoggedIn}
        handleModals={handleModals}
        sxSettings={{
          flexDirection: 'column',
          rowGap: '2rem',
          display: 'flex',
          alignItems: 'flex-start',
          pt: '6rem',
        }}
      />
    </Container>
  );
};

const FlowrLogo = () => {
  return (
    <>
      <Box
        component="img"
        sx={{
          height: 30,
          width: 30,
          mr: 1,
        }}
        alt="FlowrSpot Logo"
        src="./flowrspot.png"
      />
      <Typography variant="h3" color="primary">
        FlowrSpot
      </Typography>
    </>
  );
};

export const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const token = useAppSelector(selectToken);
  const isLoggedIn = Boolean(token);

  const dispatch = useAppDispatch();

  const handleModals = (openModal?: Modal) => {
    if (!openModal) return;

    if (openModal === Modal.Login) dispatch(setOpenModal(Modal.Login));
    if (openModal === Modal.Signup) dispatch(setOpenModal(Modal.Signup));
    if (openModal === Modal.Profile) dispatch(setOpenModal(Modal.Profile));
  };

  return (
    <div>
      <AppBar position="static" color={'transparent'} sx={{ minHeight: '80px', boxShadow: { md: 'none' } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: '80px' }}>
            <FlowrLogo />

            <MenuItems
              isLoggedIn={isLoggedIn}
              handleModals={handleModals}
              sxSettings={{ flexGrow: 1, justifyContent: 'flex-end', gap: '2rem', display: { xs: 'none', md: 'flex' } }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton size="large" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} color={'secondary'}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {isMobileNavOpen && <MobileNavigation isLoggedIn={isLoggedIn} handleModals={handleModals} />}
      </AppBar>
    </div>
  );
};
