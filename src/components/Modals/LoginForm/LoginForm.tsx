import { useLoginMutation } from '@/features/auth/authApiSlice';
import { setCredentials } from '@/features/auth/authSlice';
import { Modal, setOpenModal } from '@/features/modals/modalsSlice';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface IFormLoginInput {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
    const userData = await login({
      email: data.email,
      password: data.password,
    }).unwrap();

    dispatch(setCredentials({ ...userData }));
    dispatch(setOpenModal(Modal.LoginSuccess));
  };

  return (
    <Box p={2}>
      <Typography variant={'CTA1'} display={'block'} textAlign={'center'} sx={{ marginBottom: 1 }}>
        Welcome Back
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              margin={'normal'}
              fullWidth
              label="Email Address"
              {...field}
            />
          )}
          rules={{
            required: { value: true, message: 'This field is required' },
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email is not valid!' },
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              type="password"
              label="Password"
              fullWidth
              {...field}
            />
          )}
          rules={{
            required: { value: true, message: 'This field is required' },
            minLength: { value: 8, message: 'Password is too short!' },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 3, borderRadius: 1, height: '50px' }}
        >
          Login to your Account
        </Button>
      </form>

      {isLoading && <CircularProgress />}
      {isError && <div>Error! {JSON.stringify(error)}</div>}
      {isSuccess && <div> Success!</div>}
    </Box>
  );
};
