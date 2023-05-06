import React from "react";

//components
import LoginPopup from "components/Popup/LoginPopup";
import Toast from "components/Toast";
import usePopup from "module/Popup/usePopup";
import useToast from "module/QueueToast/useToast";
import SuccessToast from "components/Toast/SuccessToast";
import ErrorToast from "components/Toast/ErrorToast";
import ProfilePopup from "components/Popup/ProfilePopup";

function Root() {
  const {
    mountPopup: mountPopup,
    closePopup: closePopup,
    unmountPopup: unmountPopup,
  } = usePopup();
  const { addToast: addSuccessToast } = useToast();
  const { addToast: addErrorToast } = useToast();

  const loginClick = function () {
    mountPopup(({ isOpen, close, popupContentRef }) => {
      return (
        <LoginPopup
          isOpen={isOpen}
          close={close}
          popupContentRef={popupContentRef}
        />
      );
    });
  };

  const profileClick = function () {
    mountPopup(({ isOpen, close, popupContentRef }) => {
      return (
        <ProfilePopup
          isOpen={isOpen}
          close={close}
          popupContentRef={popupContentRef}
        />
      );
    });
  };

  const openSuccessToast = function () {
    addSuccessToast(({ toastRef }) => {
      return <SuccessToast content={"Test Toast"} toastRef={toastRef} />;
    });
  };
  const openErrorToast = function () {
    addErrorToast(({ toastRef }) => {
      return <ErrorToast content={"Test Toast2"} toastRef={toastRef} />;
    });
  };

  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col">
        <div className="flex w-max flex-col gap-3 p-4">
          <h1 className="text-xl font-bold">This is the root page</h1>
          <div className="flex flex-col gap-3 pl-3">
            <h2 className="font-medium">Popup</h2>
            <button
              className="rounded-lg bg-blue-500 p-3 text-white"
              onClick={loginClick}
            >
              Login
            </button>
            <button
              className="rounded-lg bg-blue-500 p-3 text-white"
              onClick={profileClick}
            >
              open Profile
            </button>
          </div>
          <div className="flex flex-col gap-3 pl-3">
            <h2 className="font-medium">Toast</h2>
            <button
              className="rounded-lg bg-blue-500 p-3 text-white"
              onClick={openSuccessToast}
            >
              Success Toast
            </button>
            <button
              className="rounded-lg bg-blue-500 p-3 text-white"
              onClick={openErrorToast}
            >
              Error Toast
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Root.isPrivate = false;
Root.isLayout = false;

export default Root;
