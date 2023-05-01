import React from 'react';
import { useTheme } from "@mui/material";
import styles from './styles.module.scss';

export function CustomLabel({ children, htmlFor, disabled }) {
  const { palette } = useTheme();
  return (
    <label
      className={styles.label}
      style={{ color: disabled ? 'var(--app-gray1)' : palette.primary.main }}
      htmlFor={htmlFor}>{children}
    </label>
  )
}