import React from "react";
import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("<Counter />", () => {
  const guideMessage = "닉네임을 입력하세요.";
  const confirmBtnText = "확인";
  const skipBtnText = "건너뛰기";

  it("renders todos properly", () => {
    const { getByText } = render(<LogIn />);
    getByText(guideMessage);
    getByText(confirmBtnText);
    getByText(skipBtnText);
  });
});
