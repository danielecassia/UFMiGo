import { Alert, Snackbar } from "@mui/material";

export function NotificationSnack({
  message,
  severity,
  dismiss,
  isOpen
}) {

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={10000}
      onClose={dismiss}
      message={message}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

