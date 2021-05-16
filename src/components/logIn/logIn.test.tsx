import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("LogIn", () => {
  const onLogIn = jest.fn();
  const onSkipLogIn = jest.fn();
  const { getByText, getByTestId } = render(
    <LogIn onLogIn={onLogIn} onSkipLogIn={onSkipLogIn} />
  );
  const guideMessage = "닉네임";
  const confirmBtnText = "확인";
  const skipBtnText = "건너뛰기";

  it("render", () => {
    getByText(guideMessage);
    getByTestId("nickname-input");
    getByText(confirmBtnText);
    getByText(skipBtnText);
  });
});
