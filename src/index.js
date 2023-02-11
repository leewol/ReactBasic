import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import CoinApp from "./CoinApp";
// import ToDoApp from "./ToDoApp";

// 리액트 앱 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <CoinApp /> */}
    {/* <ToDoApp /> */}
    {/* <NewApp /> */}
  </React.StrictMode>
);
