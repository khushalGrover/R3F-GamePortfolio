import { createContext, useContext, useState } from "react";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [rawValue, setRawValue] = useState("");
  const [objectCode, setObjectCode] = useState("11111");
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [arms, setArms] = useState(1);
  const [back, setBack] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushion, setCushion] = useState(1);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  const [seat, setSeat] = useState(1);

  const partToMeshMapping = {
    A:parseInt(objectCode.charAt(0)), // ARM
    B:parseInt(objectCode.charAt(1)), // BACK
    C:parseInt(objectCode.charAt(2)), // CUSHION
    L:parseInt(objectCode.charAt(3)), // LEGS
    S:parseInt(objectCode.charAt(4)), // SEAT
  }
 
 
  return (
    <CustomizationContext.Provider
      value={{
        rawValue,
        setRawValue,
        partToMeshMapping,
        objectCode,
        setObjectCode,
        material,
        setMaterial,
        legs,
        setLegs,
        arms,
        setArms,
        back,
        setBack,
        cushion,
        setCushion,
        chairColors,
        chairColor,
        setChairColor,
        cushionColors,
        cushionColor,
        setCushionColor,
        seat,
        setSeat,
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
