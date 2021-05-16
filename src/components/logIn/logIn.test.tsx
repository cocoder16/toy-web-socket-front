import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("LogIn", () => {
  const onChangeNickname = jest.fn();
  const nicknameInput = null; // TODO: ref props 전달법

  const defaultProps = {
    onChangeNickname,
    nicknameInput,
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
