import { Stack } from '@mui/material';
import { useGetFlowersQuery } from '@/features/flower/flowerApiSlice';
import { Navigation } from '@/components/Navigation/Navigation';

const Home = () => {
  const { currentData } = useGetFlowersQuery('');

  console.log(currentData);

  return (
    <div>
      <Navigation />

      <Stack gap={1} my={2}>
        <div>[Body Placeholder]</div>
      </Stack>
    </div>
  );
};

export default Home;
