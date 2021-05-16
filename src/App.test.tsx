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
    const { getByTestId, getByText } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    fireEvent.change(nicknameInput, { target: { value: "렌고쿠 쿄주로" } });
    fireEvent.click(nicknameConfirmBtn);
    getByText("렌고쿠 쿄주로");
  });
});
