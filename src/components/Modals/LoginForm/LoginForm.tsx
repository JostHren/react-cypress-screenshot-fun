import { useLoginMutation } from '@/features/auth/authApiSlice';
import { setCredentials } from '@/features/auth/authSlice';
import { Modal, setOpenModal } from '@/features/modals/modalsSlice';
import { Button, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    const userData = await login({
      email: formData.email,
      password: formData.password,
    }).unwrap();

    dispatch(setCredentials({ ...userData }));
    dispatch(setOpenModal(Modal.LoginSuccess));
  };

  return (
    <>
      <Typography variant={'h1'} textAlign={'center'} sx={{ marginBottom: 2 }}>
        Welcome Back
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
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
          Login to your Account
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
