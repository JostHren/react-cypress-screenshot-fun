import { useGetBirdsQuery, useGetUserBirdsQuery } from '@/features/bird/birdApiSlice';
import { CardsGrid } from '@/components/Card/CardGrid/CardGrid';
import { useAppSelector } from '@/app/store';
import { selectToken } from '@/features/auth/authSlice';
import { Layout } from '@/components/Layout/Layout';
import { ErrorPage } from '@/components/Error/Error';

const UserHome = () => {
  const { isLoading, currentData, isError } = useGetUserBirdsQuery('');

  if (isError) return <ErrorPage title="Error" message="Sorry, there seems to be an error!" />;
  if (!isLoading && !currentData?.items) return <ErrorPage title="No Birds" message="Sorry no birds found!" />;

  return <CardsGrid cards={currentData!} isLoading={isLoading} />;
};

const PublicHome = () => {
  const { isLoading, currentData, isError } = useGetBirdsQuery('');

  if (isError) return <ErrorPage title="Error" message="Sorry, there seems to be an error!" />;
  if (!isLoading && !currentData?.items) return <ErrorPage title="No Birds" message="Sorry no birds found!" />;

  return <CardsGrid cards={currentData!} isLoading={isLoading} />;
};

export const Home = () => {
  const token = useAppSelector(selectToken);
  const isAuthenticated = Boolean(token);

  return <Layout>{isAuthenticated ? <UserHome /> : <PublicHome />}</Layout>;
};
