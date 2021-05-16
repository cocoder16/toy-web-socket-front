import { render, fireEvent } from "@testing-library/react";

import App from "src/App";

describe("App", () => {
  const { getByTestId } = render(<App />);

  it("click skip btn => render chat room & click rename btn => render log in", () => {
    let logInComponent = getByTestId("log-in");
    const skipBtn = getByTestId("skip-btn");
    expect(logInComponent).toBeInTheDocument();

    fireEvent.click(skipBtn);
    const chatRoomComponent = getByTestId("chat-room");
    const goLogInBtn = getByTestId("go-log-in-btn");
    expect(chatRoomComponent).toBeInTheDocument();

    fireEvent.click(goLogInBtn);
    logInComponent = getByTestId("log-in");
    expect(logInComponent).toBeInTheDocument();
  });
});
