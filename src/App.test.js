import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("./service/toxicityService.js", () => {
  // mock module to prevent errors and warnings due to incompatibility of tensorflowjs in node env
  return { isToxic: () => false };
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
