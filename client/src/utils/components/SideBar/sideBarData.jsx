
import {
  Build as BuildIcon,
  Description as DescriptionIcon,
  Person as PersonIcon
} from "@mui/icons-material";



export const navbarData = [
  {
    title: "Perfil",
    path: "user",
    roles: ["admin"],
    Icon: PersonIcon
  },
  {
    title: "Matérias",
    path: "./",
    roles: ["admin", "user"],
    Icon: DescriptionIcon
  },
  {
    title: "Configurações",
    path: "config",
    roles: ["admin"],
    Icon: BuildIcon
  }
];