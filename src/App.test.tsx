import { render, fireEvent } from "@testing-library/react";

import App from "src/App";

describe("App", () => {
  const utils = render(<App />);
  const { getByText, getByTestId } = utils;
  const skipBtn = getByTestId("skip-btn");

  it("render skip btn", () => {
    expect(skipBtn).toBeTruthy();
  });

  it("click skip btn => render chat room", () => {
    fireEvent.click(skipBtn);
    getByText("chat room");
  });
});
