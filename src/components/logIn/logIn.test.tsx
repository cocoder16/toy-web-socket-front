import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("LogIn", () => {
  const handleSubmitNickname = jest.fn();

  const defaultProps = {
    handleSubmitNickname,
  };
  const setUp = (props = defaultProps) => {
    const utils = render(<LogIn {...props} />);
    return {
      ...utils,
    };
  };

  const guideMessage = "닉네임";
  const confirmBtnText = "확인";

  it("render", () => {
    const { getByText, getByTestId } = setUp();
    getByText(guideMessage);
    getByTestId("nickname-input");
    getByText(confirmBtnText);
  });
});
