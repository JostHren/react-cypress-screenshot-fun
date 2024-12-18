import { Avatar, Box, Button, IconButton, SxProps, Theme } from '@mui/material';

interface MenuItemProps {
  handleNavMenu: () => void;
  isLoggedIn: boolean;
  sxSettings: SxProps<Theme>;
}

export const MenuItems = ({ handleNavMenu, isLoggedIn, sxSettings }: MenuItemProps) => {
  return (
    <Box sx={sxSettings}>
      <Button onClick={handleNavMenu} color={'secondary'}>
        Flowers
      </Button>
      <Button onClick={handleNavMenu} color={'secondary'}>
        Latest Sightings
      </Button>
      <Button onClick={handleNavMenu} color={'secondary'}>
        Favorites
      </Button>

      {!isLoggedIn && (
        <>
          <Button onClick={handleNavMenu} color={'primary'} sx={{ minWidth: '2rem' }}>
            Login
          </Button>
          <Button onClick={handleNavMenu} variant={'contained'}>
            New Account
          </Button>
        </>
      )}

      {isLoggedIn && (
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
