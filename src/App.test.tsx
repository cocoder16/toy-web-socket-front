import { render, fireEvent } from "@testing-library/react";

import App from "src/App";

describe("App", () => {
  const setUp = (props = {}) => {
    const utils = render(<App {...props} />);
    return {
      ...utils,
    };
  };

  it("click skip btn => render chat room & click rename btn => render log in", () => {
    const { getByTestId } = setUp();
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

  it("input nickname and submit", () => {
    const { getByTestId, getByText } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    fireEvent.change(nicknameInput, { target: { value: "렌고쿠 쿄주로" } });
    fireEvent.click(nicknameConfirmBtn);
    getByText("렌고쿠 쿄주로");
  });
});
