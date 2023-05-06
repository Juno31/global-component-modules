import React, { useEffect, useRef } from "react";

export interface ToastControllerProps {
  toastElement: React.FC<any>;
  removeToast: () => void;
}

// 1:N관계의 Controller
function ToastController({
  removeToast,
  toastElement: ToastElement,
}: ToastControllerProps) {
  const toastRef = useRef<HTMLDivElement>(null);
  const toastDisplayTime = 1000 * 2;

  const dismissToast = function () {
    toastRef.current?.classList.add("dismiss-toast");
    toastRef.current?.addEventListener("animationend", () => {
      removeToast?.();
    });
  };

  useEffect(
    function () {
      // add 3s timeout that adds animation styles
      if (toastRef.current) {
        toastRef.current.onanimationend = function () {
          setTimeout(function () {
            dismissToast();
          }, toastDisplayTime);
        };
      }
    },
    [toastRef]
  );

  return <ToastElement toastRef={toastRef} />;
}

export default ToastController;

// mount 되는 순간 animation 작동, 3초후 hide animation 시작후 unmount하는 요구사항
