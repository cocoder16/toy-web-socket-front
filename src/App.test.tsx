import { render, fireEvent } from "@testing-library/react";

import App from "src/App";

describe("App", () => {
  const setUp = (props = {}) => {
    const utils = render(<App {...props} />);
    return {
      ...utils,
    };
  };

  it("input nickname and submit", () => {
    const { getByTestId } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    const myNickname = getByTestId("my-nickname");
    fireEvent.change(nicknameInput, { target: { value: "렌고쿠 쿄주로" } });
    fireEvent.click(nicknameConfirmBtn);
    expect(myNickname).toHaveTextContent("렌고쿠 쿄주로");

    fireEvent.change(nicknameInput, { target: { value: "카마도 탄지로" } });
    fireEvent.keyDown(nicknameInput, { key: "Enter", code: 13 });
    expect(myNickname).toHaveTextContent("카마도 탄지로");
  });
});
