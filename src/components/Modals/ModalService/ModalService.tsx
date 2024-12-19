import { Modal as ModalEnum } from '@/features/modals/modalsSlice';
import { Box, Dialog, IconButton, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LoginForm } from '../LoginForm/LoginForm';
import { SignupForm } from '../SignupForm/SignupForm';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { closeModal, selectOpenModal } from '@/features/modals/modalsSlice';
import { SuccessModal } from '../SuccessModal/SuccessModal';
import { UserProfile } from '../UserProfile/UserProfile';

export const ModalService = () => {
  const openModal = useAppSelector(selectOpenModal);
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={Boolean(openModal)} onClose={() => dispatch(closeModal())} fullScreen={isSmallScreen}>
      <Box p={2} position={'relative'}>
        <IconButton onClick={() => dispatch(closeModal())} sx={{ position: 'absolute', right: 1, top: 1 }}>
          <CloseIcon color={'secondary'} />
        </IconButton>

        {openModal === ModalEnum.Login && <LoginForm />}
        {openModal === ModalEnum.Signup && <SignupForm />}
        {openModal === ModalEnum.Profile && <UserProfile />}
        {openModal === ModalEnum.LoginSuccess && (
          <SuccessModal message={'Congratulations! You have successfully logged into FlowrSpot!'} />
        )}
        {openModal === ModalEnum.SignupSuccess && (
          <SuccessModal message={'Congratulations! You have successfully signed up for FlowrSpot!'} />
        )}
      </Box>
    </Dialog>
  );
};
