import { JSX, PropsWithChildren } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { ModalService } from '../Modals/ModalService/ModalService';

export const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      <Navigation />
      {children}
      <ModalService />
    </>
  );
};
