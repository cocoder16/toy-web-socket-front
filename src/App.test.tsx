import { render, fireEvent } from "@testing-library/react";

import App from "src/App";

describe("App", () => {
  const utils = render(<App />);
  const { getByTestId } = utils;

  it("click skip btn => render chat room", () => {
    const logInComponent = getByTestId("log-in");
    const skipBtn = getByTestId("skip-btn");
    expect(logInComponent).toBeInTheDocument();

    fireEvent.click(skipBtn);
    const chatRoomComponent = getByTestId("chat-room");
    expect(chatRoomComponent).toBeInTheDocument();
  });
});
