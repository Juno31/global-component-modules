import React, { MutableRefObject } from "react";
import { GoBell } from "react-icons/go";

function SuccessToast({
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
        className="toast-animation relative flex min-w-[200px] items-center gap-2 rounded-lg bg-blue-950 px-6 py-3 text-center font-medium text-white"
      >
        <GoBell />
        <div className="flex flex-1 items-center justify-center">{content}</div>
      </div>
    </>
  );
}

export default SuccessToast;
