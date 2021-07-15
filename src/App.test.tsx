import { render, fireEvent, waitFor } from "@testing-library/react";
import socketIo from "socket.io-client";

import App from "src/App";

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
  const userYou: User = { name: "카마도 탄지로" };
  const ENDPOINT = process.env.REACT_APP_BACK_URL as string;

  it("input nickname and submit", () => {
    const { getByTestId } = setUp();
    const nicknameInput = getByTestId("nickname-input");
    const nicknameConfirmBtn = getByTestId("nickname-confirm-btn");
    const myNickname = getByTestId("my-nickname");

    fireEvent.change(nicknameInput, { target: { value: userMe.name } });
    fireEvent.click(nicknameConfirmBtn);
    expect(myNickname).toHaveTextContent(userMe.name);

    fireEvent.change(nicknameInput, { target: { value: userYou.name } });
    fireEvent.keyDown(nicknameInput, { key: "Enter", code: "Enter" });
    expect(myNickname).toHaveTextContent(userYou.name);
  });

  it("join a room", done => {
    const { getByText } = setUp();
    const socket = socketIo(ENDPOINT, { withCredentials: true });

    socket.on("connect", async () => {
      socket.emit("join", { name: "익명" });
      await waitFor(() => getByText("익명 has joined the room."), {
        timeout: 2000,
      });
      socket.disconnect();
      done();
    });
  });

  it("send message", done => {
    const { getByText } = setUp();
    const socket = socketIo(ENDPOINT, { withCredentials: true });

    socket.on("connect", async () => {
      socket.emit("join", userMe);
      socket.emit("send", { user: userMe, content: "hi!" });
      await waitFor(
        () => {
          getByText("렌고쿠 쿄주로");
          getByText("hi!");
        },
        {
          timeout: 2000,
        }
      );
      socket.disconnect();
      done();
    });
  });
  // 소켓 통신 테스트를 통과하면
  // 소켓 이벤트를 발생시키는 함수의 테스트를 통과시킨다.
});
