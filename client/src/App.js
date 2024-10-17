import React from "react";
import Root from "./routes/Root";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import UserState from "./context/user/UserState";
import AlertState from "./context/alert/AlertState";
import CarState from "./context/car/CarState";
import ModalState from "./context/modal/ModalState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AlertState>
        <UserState>
          <CarState>
            <ModalState>
              <RouterProvider router={Router} />
            </ModalState>
          </CarState>
        </UserState>
      </AlertState>
    </div>
  );
}

export default App;
