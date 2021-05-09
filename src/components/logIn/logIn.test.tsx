import { render } from "@testing-library/react";

import LogIn from "src/components/logIn";

describe("LogIn", () => {
  const { getByText } = render(<LogIn />);
  const guideMessage = "닉네임";
  const confirmBtnText = "확인";
  const skipBtnText = "건너뛰기";

  it("render", () => {
    getByText(guideMessage);
    getByText(confirmBtnText);
    getByText(skipBtnText);
  });
});
