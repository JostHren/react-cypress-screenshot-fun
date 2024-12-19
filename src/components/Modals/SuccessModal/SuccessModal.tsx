import { useAppDispatch } from '@/app/store';
import { closeModal, Modal, setOpenModal } from '@/features/modals/modalsSlice';
import { Box, Button, Stack, Typography } from '@mui/material';

interface SuccessModalProps {
  message: string;
}

export const SuccessModal = ({ message }: SuccessModalProps) => {
  const dispatch = useAppDispatch();

  const handleProfileButton = () => {
    dispatch(closeModal());
    dispatch(setOpenModal(Modal.Profile));
  };

  const handleOkButton = () => {
    dispatch(closeModal());
  };

  return (
    <Box p={4}>
      <Typography variant={'h2'} textAlign={'center'} sx={{ marginBottom: 2 }}>
        {message}
      </Typography>
      <Stack direction={'row'} spacing={2} pt={4} justifyContent={'center'}>
        <Button onClick={handleProfileButton} variant="contained" color="primary" sx={{ mt: 2, borderRadius: 1 }}>
          Profile
        </Button>
        <Button onClick={handleOkButton} variant="contained" color="primary" sx={{ mt: 2, borderRadius: 1 }}>
          OK
        </Button>
      </Stack>
    </Box>
  );
};
