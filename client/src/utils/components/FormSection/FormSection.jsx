import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from "@mui/material";

export function FormSection({ children, title, removeFunction }) {
  const { palette } = useTheme();
  return (
    <div className={styles.formSection}>
      <div className={styles.sectionTitle}>
        <span className={styles.sectionTitleSpan}
          style={{color: palette.secondary.main}}
          >{title}</span><hr/>
        {
          removeFunction &&
          <span className={styles.xButton} onClick={removeFunction}>X</span>
        }
      </div>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  )
}