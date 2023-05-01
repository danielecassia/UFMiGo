import "./App.css";
// import { NotificationProvider } from "./utils/context/Notification/Notification";
import { ThemeProvider } from "./utils/context/Theme/theme";
import { AppRoutes } from "./utils/routes/routesApp";

function App() {
  return (
    // <NotificationProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    // </NotificationProvider>
  );
}
export default App;