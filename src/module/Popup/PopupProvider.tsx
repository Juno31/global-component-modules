import React, { createContext, useState } from "react";

import { PopupContext } from "./PopupContext";

//types
interface PopupProviderProps {
  children?: JSX.Element | JSX.Element[];
}

function PopupProvider({ children }: PopupProviderProps) {
  const [overlay, setOverlay] = useState(new Map());

  const mount = function (id: string, element: JSX.Element | JSX.Element[]) {
    const cloneMap = new Map(overlay);
    cloneMap.set(id, element);

    setOverlay(cloneMap);
  };

  const unmount = function (id: string) {
    const cloneMap = new Map(overlay);
    cloneMap.delete(id);

    setOverlay(cloneMap);
  };

  return (
    <>
      <PopupContext.Provider
        value={{
          mount,
          unmount,
        }}
      >
        {children}
        {[...overlay.entries()].map((overlayData) => {
          const overlayId = overlayData[0];
          const overlayElement = overlayData[1];

          return overlayElement;
        })}
      </PopupContext.Provider>
    </>
  );
}

export default PopupProvider;
