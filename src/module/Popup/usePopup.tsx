import React, {
  MutableRefObject,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

//context
import PopupController, { HandleClose } from "module/Popup/PopupController";
import { PopupContext } from "./PopupContext";

let initialId = 1;

function usePopup() {
  const [id] = useState(() => String(`popup-${initialId++}`));
  const popupRef = useRef<HandleClose>(null);

  // 의존성 모듈
  const { mount, unmount } = useContext(PopupContext);

  // toast와 관련된 scenario
  const mountPopup = useCallback(
    function (popupElement: React.FC<any>) {
      mount(
        id,
        <PopupController
          key={id}
          ref={popupRef}
          popupElement={popupElement}
          onUnmount={() => {
            unmount(id);
          }}
        />
      );
    },
    [mount, unmount]
  );

  const unmountPopup = useCallback(
    function () {
      unmount(id);
    },
    [unmount]
  );

  const closePopup = useCallback(
    function () {
      console.log(popupRef?.current);
      popupRef?.current?.close();
    },
    [popupRef]
  );

  return { mountPopup, unmountPopup, closePopup };
}

export default usePopup;
