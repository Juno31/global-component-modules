import React, { MutableRefObject } from "react";
import { GoAlert } from "react-icons/go";

function Toast({
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
        className="toast-animation relative flex items-center gap-2 rounded-lg bg-blue-950 px-6 py-3 text-center font-medium text-white"
      >
        <GoAlert />
        {content}
      </div>
    </>
  );
}

export default Toast;
