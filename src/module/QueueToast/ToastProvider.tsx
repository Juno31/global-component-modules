import React, { useCallback, useContext, useState } from "react";
import { ToastContext, ToastQueue } from "./ToastContext";

interface ToastProviderProps {
  children?: JSX.Element | JSX.Element[];
}

let toastCount = 0;

function ToastProvider({ children }: ToastProviderProps) {
  const [toastQueue, setToastQueue] = useState<ToastQueue>(new Map());

  const add = useCallback(
    function (id: string, element: JSX.Element | JSX.Element[]) {
      const copy = new Map(toastQueue);
      copy.set(id, element);

      setToastQueue(copy);
    },
    [toastQueue]
  );

  const remove = function (id: string) {
    setToastQueue(function (current: ToastQueue) {
      const copy = new Map(current);
      copy.delete(id);

      return copy;
    });
  };

  const context = {
    toastQueue,
    add,
    remove,
  };

  return (
    <ToastContext.Provider value={context}>
      {children}
      <div className="fixed bottom-3 right-3 flex h-max w-max flex-col items-center justify-end gap-3">
        {[...toastQueue.entries()].map(function (toast) {
          const [id, element] = toast;

          return element;
        })}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
