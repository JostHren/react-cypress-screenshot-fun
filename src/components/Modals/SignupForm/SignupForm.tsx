import { useRegisterMutation } from '@/features/auth/authApiSlice';
import { setCredentials } from '@/features/auth/authSlice';
import { Modal, setOpenModal } from '@/features/modals/modalsSlice';
import { Box, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface IFormSignupInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export const SignupForm = () => {
  const [register, { isLoading, isError, isSuccess, error }] = useRegisterMutation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    },
  });

  const onSubmit: SubmitHandler<IFormSignupInput> = async (data) => {
    const userData = await register({
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      password: data.password,
    }).unwrap();

    dispatch(setCredentials({ ...userData }));
    dispatch(setOpenModal(Modal.SignupSuccess));
  };

  return (
    <Box p={2}>
      <Typography variant={'CTA1'} display={'block'} textAlign={'center'} sx={{ marginBottom: 3 }}>
        Create an Account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" spacing={2}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  data-cy="signup-first-name-input"
                  error={Boolean(errors.firstName?.message)}
                  helperText={errors.firstName?.message}
                  label="First Name"
                  margin="normal"
                  fullWidth
                  {...field}
                />
              )}
              rules={{
                required: { value: true, message: 'This field is required' },
              }}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  data-cy="signup-last-name-input"
                  error={Boolean(errors.lastName?.message)}
                  helperText={errors.lastName?.message}
                  label="Last Name"
                  margin="normal"
                  fullWidth
                  {...field}
                />
              )}
              rules={{
                required: { value: true, message: 'This field is required' },
              }}
            />
          </Stack>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <TextField
                error={Boolean(errors.dateOfBirth?.message)}
                helperText={errors.dateOfBirth?.message}
                label="Date of Birth"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            rules={{
              required: { value: true, message: 'This field is required' },
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                data-cy="signup-email-input"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                label="Email Address"
                fullWidth
                margin="normal"
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
                data-cy="signup-password-input"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
            rules={{
              required: { value: true, message: 'This field is required' },
              minLength: { value: 8, message: 'Password is too short!' },
            }}
          />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 3, borderRadius: 1, height: '50px' }}
          data-cy="signup-submit-button"
        >
          Submit
        </Button>
      </form>

      {isLoading && <CircularProgress />}
      {isError && <div>Error! {JSON.stringify(error)}</div>}
      {isSuccess && <div> Success!</div>}
    </Box>
  );
};
