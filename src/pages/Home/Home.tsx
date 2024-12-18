import { useGetFlowersQuery } from '@/features/flower/flowerApiSlice';
import { FlowersGrid } from '@/components/FlowersGrid/FlowersGrid';
import { useAppSelector } from '@/app/store';
import { selectToken } from '@/features/auth/authSlice';
import { Layout } from '@/components/Layout/Layout';

const Home = () => {
  const token = useAppSelector(selectToken);
  const { isLoading, currentData } = useGetFlowersQuery(Boolean(token));

  return (
    <Layout>
      <FlowersGrid flowers={currentData} isLoading={isLoading} />
    </Layout>
  );
};

export default Home;
