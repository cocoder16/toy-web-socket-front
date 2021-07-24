import { render, waitFor } from "@testing-library/react";

import ChatRoom from "src/components/chatRoom";
import { socket } from "src/service/socket";

describe("ChatRoom", () => {
  const defaultProps = {
    nickname: "렌고쿠 쿄주로",
  };
  const setUp = (props = defaultProps) => {
    const utils = render(<ChatRoom {...props} />);
    return {
      ...utils,
    };
  };

  it("render", () => {
    const { getByTestId } = setUp();
    getByTestId("chat-window");
    getByTestId("message-input");
    getByTestId("message-send-btn");

    const myNickname = getByTestId("my-nickname");
    expect(myNickname).toHaveTextContent(defaultProps.nickname);
  });

  it("send a message", async () => {
    const { getByText } = setUp();

    socket.emit("SEND", {
      user: { name: defaultProps.nickname },
      content: "hi",
    });
    await waitFor(() => getByText("hi"), {
      timeout: 2000,
    });
  });
});
