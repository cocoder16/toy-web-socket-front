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
      // TODO: 채팅창 위에 보이는 닉네임이랑 분리가 안되어서, testId로 받아서 테스트해야함.
      timeout: 2000,
    });
  });
});
