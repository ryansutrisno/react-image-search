/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useState, useRef } from 'react'
import { Modal, Box, Backdrop } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'calc(100vh - 40px)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ModalImage = ({ open, onCloseModal, image, description, ref }) => {
  return (
    <>
      <Backdrop open={open} ref={ref}>
        <Modal
          open={open}
          onClose={onCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={image} alt={description} width="auto" height="100%" />
          </Box>
        </Modal>
      </Backdrop>
    </>
  )
}

export default ModalImage
