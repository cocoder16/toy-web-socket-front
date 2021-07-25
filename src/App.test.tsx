import { render, fireEvent, waitFor } from "@testing-library/react";

import App from "src/App";
import { socket } from "src/service/socket";

type User = {
  name: string;
};

jest.mock("src/service/socket");

describe("App", () => {
  const setUp = (props = {}) => {
    const utils = render(<App {...props} />);
    return {
      ...utils,
    };
  };
  const userMe: User = { name: "렌고쿠" };

  it("input nickname and submit", async () => {
    const { getByTestId, getByText } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    const myNickname = getByTestId("my-nickname");

    fireEvent.change(nicknameInput, { target: { value: userMe.name } });
    fireEvent.click(nicknameConfirmBtn);
    expect(myNickname).toHaveTextContent(userMe.name);
    expect(socket.emit).toHaveBeenCalledWith("JOIN", userMe);

    await waitFor(() => getByText(userMe.name), {
      timeout: 2000,
    });
  });
});
