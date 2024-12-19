import { useRegisterMutation } from '@/features/auth/authApiSlice';
import { setCredentials } from '@/features/auth/authSlice';
import { Modal, setOpenModal } from '@/features/modals/modalsSlice';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export const SignupForm = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const [register, { isLoading, isError, isSuccess, error }] = useRegisterMutation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (!userRef?.current) return;
    userRef.current.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = await register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      dateOfBirth: formData.dateOfBirth,
      email: formData.email,
      password: formData.password,
    }).unwrap();

    dispatch(setCredentials({ ...userData }));
    dispatch(setOpenModal(Modal.SignupSuccess));
  };

  return (
    <>
      <Typography variant={'h1'} textAlign={'center'} sx={{ marginBottom: 2 }}>
        Create an Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
          />
        </Stack>
        <TextField
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2, borderRadius: 1 }}
        >
          Submit
        </Button>
      </form>

      {isLoading && <div>Loading ...</div>}
      {isError && (
        <div>
          Error! {error.data.message} {error.data.detail}
        </div>
      )}
      {isSuccess && <div> Success!</div>}
    </>
  );
};
