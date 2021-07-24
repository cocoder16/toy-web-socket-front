import { render, fireEvent, waitFor } from "@testing-library/react";

import App from "src/App";
import { socket } from "src/service/socket";

type User = {
  name: string;
};

describe("App", () => {
  const setUp = (props = {}) => {
    const utils = render(<App {...props} />);
    return {
      ...utils,
    };
  };
  const userMe: User = { name: "렌고쿠 쿄주로" };

  it("input nickname and submit", () => {
    const { getByTestId } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    const myNickname = getByTestId("my-nickname");

    fireEvent.change(nicknameInput, { target: { value: userMe.name } });
    fireEvent.click(nicknameConfirmBtn);
    expect(myNickname).toHaveTextContent(userMe.name);
  });

  it("join a room", async () => {
    const { getByText } = setUp();

    socket.emit("JOIN", { name: "익명" });

    await waitFor(() => getByText("익명"), {
      timeout: 2000,
    });
  });
});
