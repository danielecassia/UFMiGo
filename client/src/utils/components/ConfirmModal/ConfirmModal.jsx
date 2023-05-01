import React from 'react';
import styles from './styles.module.scss'

import {
  Box,
  Button,
  Modal,
} from '@mui/material';
import { Divider } from '../Divider/Divider.jsx';


export function ConfirmModal({ open, onClose, onDelete, title, content, confirm }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.box}>
        <span className={styles.title}>{title}</span>
        <Divider />
        <span className={styles.content}>{content}</span>
        <Divider />
        <div className={styles.button_container}>
          <Button className={styles.button} sx={{ fontWeight: 600 }}
            variant='outlined' type="button" color='primary' onClick={onClose}>Cancelar</Button>
          <Button className={styles.button} sx={{ fontWeight: 600 }}
            variant='contained' type="button" color="error" onClick={onDelete}>{confirm || 'Excluir'} </Button>
        </div>
      </Box>
    </Modal>
  )
}