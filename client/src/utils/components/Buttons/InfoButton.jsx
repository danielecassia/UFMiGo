import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';
import { useTheme } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export function InfoButton({ params }) {
  const navigate = useNavigate();
  const { palette } = useTheme();
  console.log(params);
  return (
    <div
      className={styles.info_container}
      onClick={() => navigate(`courseProfile/${params.value}`)}
    >
      <span
        style={{
          color: palette.secondary.main,
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        <InfoOutlinedIcon/>
      </span>
    </div>
  )
}