import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [rawValue, setRawValue] = useState("");
 
 
  return (
    <CustomizationContext.Provider
      value={{
        rawValue,
        setRawValue,
       
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
