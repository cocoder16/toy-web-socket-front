import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("LogIn", () => {
  const onChangeNickname = jest.fn();
  const nicknameInput = null; // TODO: ref props 전달법
  const { getByText, getByTestId } = render(
    <LogIn onChangeNickname={onChangeNickname} nicknameInput={nicknameInput} />
  );
  const guideMessage = "닉네임";
  const confirmBtnText = "확인";

  it("render", () => {
    getByText(guideMessage);
    getByTestId("nickname-input");
    getByText(confirmBtnText);
  });
});
