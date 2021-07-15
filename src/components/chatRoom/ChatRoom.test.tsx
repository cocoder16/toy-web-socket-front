import { render } from "@testing-library/react";

import ChatRoom from "src/components/chatRoom";

describe("LogIn", () => {
  const props = {
    nickname: "렌고쿠 쿄주로",
  };
  const { getByTestId } = render(<ChatRoom {...props} />);

  it("render", () => {
    getByTestId("chat-window");
    getByTestId("message-input");
    getByTestId("message-send-btn");
  });
});
