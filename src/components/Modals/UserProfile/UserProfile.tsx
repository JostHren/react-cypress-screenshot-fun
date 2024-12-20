import { logout } from '@/features/auth/authSlice';
import { closeModal } from '@/features/modals/modalsSlice';
import { useGetUserInfoQuery } from '@/features/user/userApiSlice';
import { Avatar, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUserInfoQuery('');

  const handleLogout = () => {
    dispatch(logout());
    dispatch(closeModal());
  };

  if (isLoading)
    return (
      <>
        <CircularProgress />
      </>
    );

  const { dateOfBirth, email, firstName, lastName, sightingsNum } = data;

  return (
    <Container sx={{ p: 4, minWidth: { xs: '200px', sm: '420px', lg: '560px' } }}>
      <Stack direction="row" spacing={2} paddingBottom={4} alignItems={'center'}>
        <Avatar src="./profile-holder.png" sx={{ height: '70px', width: '70px' }} alt={firstName} />
        <Stack>
          <Typography variant="Body1">
            {firstName} {lastName}
          </Typography>
          <Typography variant="Body1Medium" color="secondary">
            {sightingsNum} sightings
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Typography variant="Body3" color="secondary">
          First Name
        </Typography>
        <Typography variant="Body2" mb={3}>
          {firstName}
        </Typography>

        <Typography variant="Body3" color="secondary">
          Last Name
        </Typography>
        <Typography variant="Body2" mb={3}>
          {lastName}
        </Typography>

        <Typography variant="Body3" color="secondary">
          Date of Birth
        </Typography>
        <Typography variant="Body2" mb={3}>
          {dateOfBirth}
        </Typography>

        <Typography variant="Body3" color="secondary">
          Email Address
        </Typography>
        <Typography variant="Body2" mb={3}>
          {email}
        </Typography>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        sx={{
          height: '50px',
          minWidth: '150px',
          alignSelf: 'center',
          borderRadius: 1,
          marginTop: '3rem',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Logout
      </Button>
    </Container>
  );
};
