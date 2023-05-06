import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";
import { MutableRefObject } from "react";

export interface HandleClose {
  close: () => void;
}

export interface PopupControllerProps {
  popupElement: React.FC<any>;
  onUnmount: () => void;
}
export type PopupControllerRef = HandleClose;

export interface PopupElementProps {
  isOpen: boolean;
  close: () => void;
  popupContentRef: MutableRefObject<HTMLDivElement>;
}

const PopupController = forwardRef<PopupControllerRef, PopupControllerProps>(
  function ({ popupElement: PopupElement, onUnmount }, ref) {
    const [isOpen, setIsOpen] = useState(false);
    const popupContentRef = useRef<HTMLDivElement>(null);

    //close with animation
    const handleClose = function () {
      if (popupContentRef.current) {
        const element = popupContentRef.current;
        element.classList.add("dismiss-popup");
        element.addEventListener("animationend", () => {
          setIsOpen(false);
          onUnmount();
        });

        return;
      }

      setIsOpen(false);
      onUnmount();
    };

    // pass handleClose method to ref
    // in case parent component needs to close the popup
    useImperativeHandle(
      ref,
      function () {
        return {
          close: handleClose,
        };
      },
      [ref]
    );

    // I am using an animation when popup is open
    // to ensure animation is performed smoothly
    useEffect(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }, []);

    return (
      <PopupElement
        isOpen={isOpen}
        close={handleClose}
        popupContentRef={popupContentRef}
      />
    );
  }
);

PopupController.displayName = "PopupController";

export default PopupController;
