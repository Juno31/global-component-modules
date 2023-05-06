import React, { MutableRefObject } from "react";
import { GoAlert } from "react-icons/go";

function ErrorToast({
  content,
  toastRef,
}: {
  content: string | JSX.Element | JSX.Element[];
  toastRef?: MutableRefObject<HTMLDivElement>;
}) {
  return (
    <>
      <div
        ref={toastRef}
        className="toast-animation relative flex min-w-[200px] items-center gap-2 rounded-lg bg-red-950 px-6 py-3 text-center font-medium text-white"
      >
        <GoAlert />
        <div className="flex flex-1 items-center justify-center">{content}</div>
      </div>
    </>
  );
}

export default ErrorToast;
