import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./PageHeader.scss";
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';

export default function PageHeader({ title, buttons }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="header-outer-box">
      <span className="header-title">{title}</span>
      {buttons && <Stack spacing={2} direction="row" component="ul">
        {buttons.map((item, index) => (
          <Button
            key={index}
            style={
              item.small ? {
                color: 'var(--app-branco)',
                width: 8,
                borderRadius: 10,
                paddingTop: 13
              } : {
                paddingRight: 80,
                paddingLeft: 80,
                textTransform: "none",
                fontWeight: 600,
                color: 'var(--app-branco)',
                borderRadius: 10
              }}
            onClick={item.onClick}
            variant={item.variant}
            color={item.color === "laranja" ? "primary" : "secondary"}>
            {item.small ?
              // <DeleteIcon/>
              <ConfirmModal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Excluir Matéria"
              content="Tem certeza que deseja excluir a matéria xxxx?"
              />

              : item.label}
          </Button>
        ))}
      </Stack>}
    </div>
  )
}