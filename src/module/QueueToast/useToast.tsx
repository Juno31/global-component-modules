import React, { useCallback, useContext } from "react";
import ToastController from "./ToastController";
import { ToastContext } from "./ToastContext";

let toastCount = 0;

function useToast() {
  const { add, remove } = useContext(ToastContext);

  const addToast = useCallback(
    function (toastElement: React.FC<any>) {
      const thisToastId = String(toastCount++);
      const removeToast = function () {
        remove?.(thisToastId);
      };

      add?.(
        thisToastId,
        <ToastController
          key={thisToastId}
          toastElement={toastElement}
          removeToast={removeToast}
        />
      );
    },
    [add]
  );

  return { addToast };
}

export default useToast;
