import { useGetFlowersQuery, useGetUserFlowersQuery } from '@/features/flower/flowerApiSlice';
import { FlowersGrid } from '@/components/Flower/FlowersGrid/FlowersGrid';
import { useAppSelector } from '@/app/store';
import { selectToken } from '@/features/auth/authSlice';
import { Layout } from '@/components/Layout/Layout';

const UserHome = () => {
  const { isLoading, currentData } = useGetUserFlowersQuery('');

  return <FlowersGrid flowers={currentData} isLoading={isLoading} />;
};

const PublicHome = () => {
  const { isLoading, currentData } = useGetFlowersQuery('');

  return <FlowersGrid flowers={currentData} isLoading={isLoading} />;
};

const Home = () => {
  const token = useAppSelector(selectToken);
  const isAuthenticated = Boolean(token);

  return <Layout>{isAuthenticated ? <UserHome /> : <PublicHome />}</Layout>;
};

export default Home;
