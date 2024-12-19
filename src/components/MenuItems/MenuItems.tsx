import { Modal } from '@/features/modals/modalsSlice';
import { Avatar, Box, Button, IconButton, SxProps, Theme } from '@mui/material';

interface MenuItemProps {
  handleNavMenu: (modal?: Modal) => void;
  isLoggedIn: boolean;
  sxSettings: SxProps<Theme>;
}

export const MenuItems = ({ handleNavMenu, isLoggedIn, sxSettings }: MenuItemProps) => {
  return (
    <Box sx={sxSettings}>
      <Button onClick={() => handleNavMenu()} color={'secondary'}>
        Flowers
      </Button>
      <Button onClick={() => handleNavMenu()} color={'secondary'}>
        Latest Sightings
      </Button>
      <Button onClick={() => handleNavMenu()} color={'secondary'}>
        Favorites
      </Button>

      {!isLoggedIn && (
        <>
          <Button onClick={() => handleNavMenu(Modal.Login)} color={'primary'} sx={{ minWidth: '2rem' }}>
            Login
          </Button>
          <Button onClick={() => handleNavMenu(Modal.Signup)} variant={'contained'}>
            New Account
          </Button>
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
