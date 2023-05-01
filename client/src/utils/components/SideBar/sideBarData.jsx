
import {
  LocalDining as LocalDiningIcon,
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
    title: "Cardápio RUs",
    path: "menu",
    roles: ["admin"],
    Icon: LocalDiningIcon
  }
];