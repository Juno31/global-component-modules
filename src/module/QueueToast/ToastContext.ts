import { createContext } from "react";

export type ToastQueue = Map<string, JSX.Element | JSX.Element[]>;

export interface ToastContextProps {
  toastQueue?: Map<string, JSX.Element | JSX.Element[]>;
  add?: (id: string, element: JSX.Element | JSX.Element[]) => void;
  remove?: (id: string) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  toastQueue: undefined,
  add: undefined,
  remove: undefined,
});
