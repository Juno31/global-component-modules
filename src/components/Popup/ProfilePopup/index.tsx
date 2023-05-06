import React from "react";
import { PopupElementProps } from "module/Popup/PopupController";
import { GoX } from "react-icons/go";

const ProfilePopup = function ({
  isOpen,
  close,
  popupContentRef,
}: PopupElementProps) {
  if (!isOpen) {
    return <></>;
  }

  return (
    <React.Fragment>
      <div className="popup-background fixed left-1/2 top-1/2 flex min-h-screen min-w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div
          className="popup-animation w-full max-w-[320px] rounded-lg bg-white p-9 px-6"
          ref={popupContentRef}
        >
          <div className="flex w-full justify-end">
            <GoX onClick={close} className="cursor-pointer" />
          </div>
          <h1>Name: 엄준호</h1>
          <h1>Position: Frontend-Dev</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePopup;
