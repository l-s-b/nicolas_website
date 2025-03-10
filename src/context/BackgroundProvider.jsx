/* eslint-disable react/prop-types */
// src/context/BackgroundContext.jsx
import { createContext, useContext } from "react";

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
  const applyRootClass = (style) => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.remove("homeRoot", "songRoot", "postalesRoot");
      root.classList.add(style);
    }
  };

  return (
    <BackgroundContext.Provider value={{ applyRootClass }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export const useBackground = () => useContext(BackgroundContext);
