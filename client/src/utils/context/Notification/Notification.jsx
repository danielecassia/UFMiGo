import {
  isAxiosError
} from "axios";

import {
  createContext,
  useContext,
  useState
} from "react";
import { NotificationSnack } from "../../components/NotificationSnack/NotificationSnack";


export function isSupportedError(candidate) {
  if (isAxiosError(candidate))
    return true;
  if (candidate instanceof Error)
    return true;
  return false;
}

const NotificationContext =
  createContext(undefined);


const NotificationProvider = ({ children }) => {

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [severity, setSeverity] = useState["severity"]();
  const [message, setMessage] = useState("");

  function alertError(err) {
    setIsNotificationOpen(false);
    setSeverity("warning");

    if (isSupportedError(err)) {
      if (isAxiosError(err)) {
        if (err.response?.data) {
          if (Array.isArray(err.response.data.errors)) {
            setMessage(err.response.data.errors[0].msg);
          } else {
            setMessage(err.response.data);
          }
        }
        else
          setMessage(err.message);
      }
      else
        setMessage(err.message);
      setIsNotificationOpen(true);
    }
    else {
      console.error(err);
    }
  }

  function alertSuccess(msg) {
    setIsNotificationOpen(false);
    setSeverity("success");
    setMessage(msg);
    setIsNotificationOpen(true);
  }

  return (
    <NotificationContext.Provider value={{ alertError, alertSuccess }}>
      <NotificationSnack
        message={message}
        severity={severity}
        dismiss={() => setIsNotificationOpen(false)}
        isOpen={isNotificationOpen}
      />
      {children}
    </NotificationContext.Provider>
  );

};

function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined)
    throw new Error("useNotification must be within NotificationProvider");
  return context;
}

export { NotificationProvider, useNotification };
