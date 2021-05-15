import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("LogIn", () => {
  const onSignedIn = jest.fn();
  const { getByText, getByTestId } = render(<LogIn onSignedIn={onSignedIn} />);
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
