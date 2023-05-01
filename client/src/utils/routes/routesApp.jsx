import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "../components/SideBar/SideBar";
import { User } from "../../views/User/User";
import { Courses } from "../../views/Courses/Courses";
import { Menu } from "../../views/Menu/Menu";
import { CourseRegister } from "../../views/Courses/CourseRegister";
import { CourseProfile } from "../../views/Courses/CourseProfile";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<SideBar />}>
          <Route index element={<Courses />} />
          <Route path="courseRegister" element={<CourseRegister />} />
          <Route path="courseProfile/:id" element={<CourseProfile />} />
          <Route path="user" element={<User />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}