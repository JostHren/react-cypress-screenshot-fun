import Grid from '@mui/material/Grid2';
import { FlowerCard } from '../FlowerCard/FlowerCard';
import { Flower, Flowers } from '@/features/flower/flowerApiSlice';
import { FlowerCardLoader } from '../FlowerCardLoader/FlowerCardLoader';

interface FlowersGridProps {
  flowers: Flowers;
  isLoading?: boolean;
}

export const FlowersGrid = ({ flowers, isLoading = false }: FlowersGridProps) => {
  if (isLoading || !flowers?.items)
    return (
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <FlowerCardLoader />
        </Grid>
      </Grid>
    );

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {flowers.items.map((flower: Flower) => (
        <Grid key={flower.id} size={{ xs: 6, md: 4, lg: 3 }}>
          <FlowerCard flower={flower} />
        </Grid>
      ))}
    </Grid>
  );
};
