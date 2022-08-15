import { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#202020',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  color: '#FFFFFF',
}

export function CustomModal({ children, RenderButton }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <RenderButton onClick={handleOpen}/>
      <Modal
        sx={{ backdropFilter: 'blur(15px)' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
        >
          {children}
        </Box>
      </Modal>
    </>
  )
}
