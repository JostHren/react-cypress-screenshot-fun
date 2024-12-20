import { Container, Stack, Typography } from '@mui/material';

interface ErrorPageProps {
  title: string;
  message: string;
}

export const ErrorPage = ({ title, message }: ErrorPageProps) => {
  return (
    <Container>
      <Stack spacing={5}>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h2">{message}</Typography>
      </Stack>
    </Container>
  );
};
