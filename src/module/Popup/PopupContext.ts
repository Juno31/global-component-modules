import { createContext } from "react";

interface PopupContextValue {
  mount: (id: string, element: JSX.Element | JSX.Element[]) => void;
  unmount: (id: string) => void;
}

export const PopupContext = createContext<PopupContextValue>({
  mount: () => {},
  unmount: () => {},
});
