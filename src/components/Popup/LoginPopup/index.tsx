import React, { useState } from "react";
import { PopupElementProps } from "module/Popup/PopupController";
import axios, { AxiosResponse } from "axios";
import { GoX } from "react-icons/go";

interface AttemptLoginCommand {
  id: string;
  password: string;
}

const attemptLogin = async function ({
  id,
  password,
}: AttemptLoginCommand): Promise<AxiosResponse<any>> {
  try {
    const { data } = await axios.get("/fake-api");

    return data;
  } catch (error) {
    throw error;
  }
};

const LoginPopup = function ({
  isOpen,
  close,
  popupContentRef,
}: PopupElementProps) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = async function () {
    try {
      await attemptLogin({ id, password });
      close();
    } catch (error) {}
  };

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
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">로그인</h1>
            <input
              className="rounded-lg border border-gray-400 p-2 focus:border-blue-500"
              type="text"
              placeholder="Enter ID"
            />
            <input
              className="rounded-lg border border-gray-400 p-2 focus:border-blue-500"
              type="password"
              placeholder="Enter Password"
            />
            <button className="w-full rounded-lg bg-blue-500 py-3 text-white">
              로그인
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPopup;
