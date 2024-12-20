import { Box, CircularProgress } from '@mui/material';

export const FlowerCardLoader = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-around'}
      sx={{
        position: 'relative',
        borderRadius: 1,
        width: '100%',
        aspectRatio: '28/35',
        backgroundColor: 'lightgrey',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
