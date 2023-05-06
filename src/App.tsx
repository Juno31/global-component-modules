import React from "react";
import Root from "pages/root";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//Context
import OverlayProvider from "module/Popup/PopupProvider";
import ToastProvider from "module/QueueToast/ToastProvider";

function App() {
  return (
    <>
      <ToastProvider>
        <OverlayProvider>
          <Routes>
            <Route path={"/"} errorElement={<>error</>} element={<Root />} />
          </Routes>
        </OverlayProvider>
      </ToastProvider>
    </>
  );
}

export default App;
