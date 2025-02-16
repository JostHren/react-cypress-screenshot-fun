import { Flower } from '@/features/flower/flowerApiSlice';
import { Box, Chip, Stack, SvgIcon, Typography } from '@mui/material';

interface FlowerCardProps {
  flower: Flower;
}

interface StarIndicatorProps {
  isFavorite?: boolean;
}

const StarIndicator = ({ isFavorite = false }: StarIndicatorProps) => {
  return (
    <Box
      position={'absolute'}
      right={'20px'}
      top={'20px'}
      bgcolor={isFavorite ? '#EAA79E' : 'white'}
      width={'30px'}
      height={'30px'}
      borderRadius={10}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-around'}
    >
      <SvgIcon sx={{ height: '12px' }}>
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7184 5.43853C12.9739 5.19714 13.064 4.84571 12.9537 4.51748C12.8431 4.18925 12.5557 3.95538 12.2011 3.90647L9.05377 3.4657C8.91905 3.44595 8.80354 3.36538 8.74366 3.24876L7.33663 0.500967C7.17881 0.192173 6.85731 0 6.50034 0C6.14305 0 5.82286 0.192173 5.66374 0.500967L4.2567 3.24876C4.19683 3.36538 4.08131 3.4472 3.94659 3.4657L0.799306 3.90647C0.444619 3.95538 0.155987 4.18925 0.0456762 4.51748C-0.0636588 4.84571 0.0264775 5.19839 0.281918 5.43853L2.55973 7.57657C2.65637 7.66843 2.70095 7.79947 2.67785 7.928L2.14029 10.9479C2.09343 11.2138 2.16567 11.4733 2.34366 11.6765C2.62221 11.995 3.1064 12.0919 3.49396 11.8947L6.30836 10.4692C6.42648 10.409 6.57388 10.4103 6.69201 10.4692L9.50771 11.8947C9.64372 11.9643 9.78983 12 9.94114 12C10.2158 12 10.4774 11.8824 10.6567 11.6765C10.8347 11.4733 10.9073 11.2138 10.8601 10.9479L10.3225 7.928C10.2994 7.79947 10.344 7.66843 10.4406 7.57657L12.7184 5.43853Z"
            fill="#D4D8D9"
          />
        </svg>
      </SvgIcon>
    </Box>
  );
};

export const FlowerCard = ({ flower }: FlowerCardProps) => {
  const { name, latinName, isFavorite, sightingsNum, pictureUrl, description } = flower;

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 1,
        width: '100%',
        aspectRatio: '28/35',
        backgroundColor: 'lightgrey',
        backgroundImage: `url(${pictureUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <StarIndicator isFavorite={isFavorite} />
      <Stack
        direction="column"
        sx={{
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: '22px',
        }}
      >
        <Typography noWrap variant={'h4'} color={'white'}>
          {name}
        </Typography>
        <Typography noWrap variant={'h5'} color={'white'} mb={'20px'}>
          {latinName}
        </Typography>

        <Chip
          sx={{ background: isFavorite ? '#EAA79E' : 'rgba(0, 0, 0, 0.5)' }}
          label={`${sightingsNum} sightings`}
          variant={'filled'}
          color={isFavorite ? 'primary' : 'secondary'}
        />
      </Stack>
    </Box>
  );
};
