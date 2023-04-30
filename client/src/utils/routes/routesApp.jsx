import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "../components/SideBar/SideBar";
import { Courses } from "../../views/Courses/Courses";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<SideBar />}>
          <Route index element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}