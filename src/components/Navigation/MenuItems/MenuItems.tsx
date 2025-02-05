import { Modal } from '@/features/modals/modalsSlice';
import { Avatar, Box, Button, IconButton, styled, SxProps, Theme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
  handleModals: (modal?: Modal) => void;
  isLoggedIn: boolean;
  sxSettings: SxProps<Theme>;
}

const LinkButton = styled(Button)(({ theme }) => ({ color: `${theme.palette.secondary.main}` }));
const SignupButton = styled(Button)({ minWidth: '2rem', boxShadow: 'none', fontFamily: 'Montserrat' });
const LoginButton = styled(Button)({ minWidth: '2rem' });

export const MenuItems = ({ handleModals, isLoggedIn, sxSettings }: MenuItemProps) => {
  const navigateTo = useNavigate();

  return (
    <Box sx={sxSettings}>
      <LinkButton onClick={() => navigateTo('/home')}>Birds</LinkButton>
      <LinkButton onClick={() => navigateTo('/latest/')}>Latest Sightings</LinkButton>
      {isLoggedIn && <LinkButton onClick={() => navigateTo('/favorites')}>Favorites</LinkButton>}

      {!isLoggedIn && (
        <>
          <LoginButton onClick={() => handleModals(Modal.Login)}>Login</LoginButton>
          <SignupButton onClick={() => handleModals(Modal.Signup)} variant="contained" data-cy="signup-button">
            New Account
          </SignupButton>
        </>
      )}

      {isLoggedIn && (
        <Box>
          <IconButton onClick={() => handleModals(Modal.Profile)}>
            <Avatar alt="John Doe" src="./profile-holder.png" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
