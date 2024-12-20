import { useGetFlowersQuery, useGetUserFlowersQuery } from '@/features/flower/flowerApiSlice';
import { FlowersGrid } from '@/components/Flower/FlowersGrid/FlowersGrid';
import { useAppSelector } from '@/app/store';
import { selectToken } from '@/features/auth/authSlice';
import { Layout } from '@/components/Layout/Layout';
import { ErrorPage } from '@/components/Error/Error';

const UserHome = () => {
  const { isLoading, currentData, isError } = useGetUserFlowersQuery('');

  if (isError) return <ErrorPage title="Error" message="Sorry, there seems to be an error!" />;
  if (!isLoading && !currentData?.items) return <ErrorPage title="No Flowers" message="Sorry no flowers found!" />;

  return <FlowersGrid flowers={currentData!} isLoading={isLoading} />;
};

const PublicHome = () => {
  const { isLoading, currentData, isError } = useGetFlowersQuery('');

  if (isError) return <ErrorPage title="Error" message="Sorry, there seems to be an error!" />;
  if (!isLoading && !currentData?.items) return <ErrorPage title="No Flowers" message="Sorry no flowers found!" />;

  return <FlowersGrid flowers={currentData!} isLoading={isLoading} />;
};

export const Home = () => {
  const token = useAppSelector(selectToken);
  const isAuthenticated = Boolean(token);

  return <Layout>{isAuthenticated ? <UserHome /> : <PublicHome />}</Layout>;
};
