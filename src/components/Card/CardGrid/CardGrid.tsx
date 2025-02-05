import Grid from '@mui/material/Grid2';
import { CardBox } from '../CardBox/CardBox';
import { CardData, Card } from '@/features/bird/birdApiSlice';
import { CardLoader } from '../CardLoader/CardLoader';

interface GridProps {
  cards: CardData;
  isLoading?: boolean;
}

export const CardsGrid = ({ cards, isLoading = false }: GridProps) => {
  if (isLoading || !cards?.items)
    return (
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={{ xs: 6, md: 4, lg: 3 }}>
          <CardLoader />
        </Grid>
      </Grid>
    );

  return (
    <Grid container spacing={2} sx={{ p: 2 }} data-cy="bird-grid">
      {cards.items.map((card: Card) => (
        <Grid key={card.id} size={{ xs: 6, md: 4, lg: 3 }}>
          <CardBox card={card} />
        </Grid>
      ))}
    </Grid>
  );
};
