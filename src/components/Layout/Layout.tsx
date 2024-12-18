import { JSX, PropsWithChildren } from 'react';
import { Navigation } from '../Navigation/Navigation';

export const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
