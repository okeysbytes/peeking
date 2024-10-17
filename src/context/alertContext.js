import { createContext, useContext, useState } from "react";
const AlertContext = createContext(undefined);
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // type can be either “success” or “error”
    type: "",
    message: "",
    // message to be displayed can be any string
  });
  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) =>
          setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
export const useAlertContext = () => useContext(AlertContext);